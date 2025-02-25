import { test, expect } from '@playwright/test';
import { FileDownloadPage } from '../pages/fileDownloadPage';
import fs from 'fs';
import path from 'path';

test('File Download Test', async ({ page }) => {
  const fileDownloadPage = new FileDownloadPage(page);
  const downloadsFolder = path.join(process.cwd(), 'src', 'utils', 'downloads');
  if (!fs.existsSync(downloadsFolder)) {
    fs.mkdirSync(downloadsFolder, { recursive: true });
  }
  await fileDownloadPage.gotoHome();
  await fileDownloadPage.navigateToFileDownloadPage();
  const download = await fileDownloadPage.downloadFile('s.txt');
  const downloadedFileName = await download.suggestedFilename();
  const downloadPath = path.join(downloadsFolder, downloadedFileName);
  await download.saveAs(downloadPath);
  expect(fs.existsSync(downloadPath)).toBeTruthy();
  const stats = fs.statSync(downloadPath);
  expect(stats.size).toBeGreaterThan(0);
});
