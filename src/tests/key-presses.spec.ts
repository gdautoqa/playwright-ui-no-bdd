import { test, expect } from '@playwright/test';
import KeyPressesPage from '../pages/keyPressesPage';

test('Key Presses Test', async ({ page }) => {
  const keyPressesPage = new KeyPressesPage(page);
  await keyPressesPage.navigateToHomePage();
  await keyPressesPage.clickKeyPressesLink();
  
  await keyPressesPage.typeKey('a');
  let result = await keyPressesPage.getResultText();
  expect(result.trim()).toBe('You entered: A');

  await keyPressesPage.typeKey('b');
  result = await keyPressesPage.getResultText();
  expect(result.trim()).toBe('You entered: B');
});