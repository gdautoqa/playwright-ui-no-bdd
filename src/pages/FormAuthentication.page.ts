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
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  async gotoHome() {
    await this.page.goto('https://the-internet.herokuapp.com');
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
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async logout() {
    await this.logoutButton.click();
  }
}