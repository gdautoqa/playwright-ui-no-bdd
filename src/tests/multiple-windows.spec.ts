import { test, expect } from '@playwright/test';
import { MultipleWindowsPage } from '../pages/MultipleWindows.page';

test('Multiple Windows Test', async ({ page }) => {
  const multipleWindowsPage = new MultipleWindowsPage(page);
  await multipleWindowsPage.gotoHome();
  await multipleWindowsPage.navigateToMultipleWindows();
  const newWindow = await multipleWindowsPage.clickClickHere();
  await expect(newWindow.locator('body')).toContainText('New Window');
  await newWindow.close();
});