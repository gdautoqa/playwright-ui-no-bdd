import { Page, Locator, expect } from '@playwright/test';

export class FormAuthenticationPage {
  readonly page: Page;
  readonly formAuthLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formAuthLink = page.getByRole('link', { name: 'Form Authentication' });
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async gotoHome() {
    await this.page.goto('/');
  }

  async navigateToFormAuthentication() {
    await this.formAuthLink.click();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertWelcomeMessage() {
    await expect(this.flashMessage).toContainText(
      'You logged into a secure area!',
    );
  }

  async logout() {
    await this.logoutButton.click();
  }
}
