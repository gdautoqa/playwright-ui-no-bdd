import { test, expect } from '@playwright/test';
import { DynamicLoadingPage } from '../pages/dynamicLoadingPage';

test('Dynamic Loading Test - Example 1', async ({ page }) => {
  const dynamicLoadingPage = new DynamicLoadingPage(page);
  await dynamicLoadingPage.goto();
  await dynamicLoadingPage.clickExample1();
  await dynamicLoadingPage.clickStart();
  await dynamicLoadingPage.waitForHelloWorld();
  await expect(page.getByText('Hello World!')).toBeVisible();
});

test('Dynamic Loading Test - Example 2', async ({ page }) => {
  const dynamicLoadingPage = new DynamicLoadingPage(page);
  await dynamicLoadingPage.goto();
  await dynamicLoadingPage.clickExample2();
  await dynamicLoadingPage.clickStart();
  await dynamicLoadingPage.waitForHelloWorld();
  await expect(page.getByText('Hello World!')).toBeVisible();
});
