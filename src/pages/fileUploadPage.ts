import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadPage extends BasePage {
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFileNameLocator: Locator;
  readonly fileUploadLink: Locator;

  constructor(page: Page) {
    super(page);
    this.fileUploadLink = page.getByRole('link', { name: 'File Upload' });
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFileNameLocator = page.locator('#uploaded-files');
  }

  async navigateToFileUploadPage() {
    await this.navigateTo('/');
    await this.fileUploadLink.click();
    await this.page.waitForLoadState('load');
  }

  async uploadFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async goto() {
    await this.navigateToFileUploadPage();
  }
}