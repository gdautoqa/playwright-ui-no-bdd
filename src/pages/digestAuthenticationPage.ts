import { Page } from '@playwright/test';

export class DigestAuthenticationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
    await this.page.click('a:has-text("Digest Authentication")');
    await this.page.waitForLoadState('load');
  }

  async getContent() {
    return this.page.textContent('body');
  }
}
