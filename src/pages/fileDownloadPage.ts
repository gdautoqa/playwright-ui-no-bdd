import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileDownloadPage extends BasePage {
  readonly fileDownloadLink: Locator;

  constructor(page: Page) {
    super(page);
    this.fileDownloadLink = page.locator('a[href="/download"]');
  }

  async gotoHome() {
    await this.navigateTo('/');
  }

  async navigateToFileDownloadPage() {
    await this.fileDownloadLink.click();
  }

  async downloadFile(fileName: string) {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.getByRole('link', { name: fileName, exact: true }).click()
    ]);
    return download;
  }
}