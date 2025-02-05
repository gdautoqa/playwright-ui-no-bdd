import { test, expect } from '@playwright/test';
import JavaScriptAlertsPage from '../pages/JavaScriptAlerts.page';

test('JavaScript Alerts Test', async ({ page }) => {
  const jsAlertsPage = new JavaScriptAlertsPage(page);
  await jsAlertsPage.navigateToHomePage();
  await jsAlertsPage.clickJavaScriptAlertsLink();

  const alertText = await jsAlertsPage.clickJsAlert();
  expect(alertText).toBe('I am a JS Alert');

  const confirmText = await jsAlertsPage.clickJsConfirm();
  expect(confirmText).toBe('I am a JS Confirm');

  const promptText = await jsAlertsPage.clickJsPrompt();
  expect(promptText).toBe('I am a JS prompt');
});