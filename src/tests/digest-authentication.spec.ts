import { test, expect } from '@playwright/test';
import { DigestAuthenticationPage } from '../pages/digestAuthenticationPage';

test.use({
  httpCredentials: {
    username: 'admin',
    password: 'admin',
  },
});

test('Digest Authentication Test', async ({ page }) => {
  const digestAuthPage = new DigestAuthenticationPage(page);
  await digestAuthPage.navigate();

  const currentUrl = page.url();
  expect(currentUrl).toBe('https://the-internet.herokuapp.com/digest_auth');

  const content = await digestAuthPage.getContent();
  expect(content).toContain('Congratulations');
});
