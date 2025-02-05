import { test, expect } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUpload.page';
import path from 'path';

test('File Upload Test', async ({ page }) => {
  const fileUploadPage = new FileUploadPage(page);
  await fileUploadPage.navigateToFileUploadPage();
  const filePath = path.join(process.cwd(), 'src', 'utils', 'uploads', 's.txt');
  await fileUploadPage.fileInput.setInputFiles(filePath);
  await fileUploadPage.uploadButton.click();
  await expect(fileUploadPage.uploadedFileNameLocator).toHaveText('s.txt');
});