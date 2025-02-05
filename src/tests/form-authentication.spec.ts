import { test, expect } from '@playwright/test';
import { FormAuthenticationPage } from '../pages/FormAuthentication.page';

test('Form Authentication Test', async ({ page }) => {
  const formAuthPage = new FormAuthenticationPage(page);

  await formAuthPage.gotoHome();
  await formAuthPage.navigateToFormAuthentication();

  await formAuthPage.login('tomsmith', 'SuperSecretPassword!');

  await formAuthPage.assertWelcomeMessage();

  await formAuthPage.logout();
});