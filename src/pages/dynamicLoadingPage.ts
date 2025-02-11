import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicLoadingPage extends BasePage {
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly helloWorldText: Locator;
  private readonly TIMEOUT = 15000;

  constructor(page: Page) {
    super(page);
    this.example1Link = page.getByRole('link', { name: 'Example 1: Element on page that is hidden' });
    this.example2Link = page.getByRole('link', { name: 'Example 2: Element rendered after the fact' });
    this.startButton = page.locator('button');
    this.helloWorldText = page.locator('text=Hello World!');
  }

  async goto() {
    await this.navigateTo('/');
    await this.clickLinkByRole('Dynamic Loading');
  }

  async clickExample1() {
    await this.example1Link.click();
  }

  async clickExample2() {
    await this.example2Link.click();
  }

  async clickStart() {
    await this.startButton.click();
  }

  async waitForHelloWorld() {
    await expect(this.helloWorldText).toBeVisible({ timeout: this.TIMEOUT });
  }
}