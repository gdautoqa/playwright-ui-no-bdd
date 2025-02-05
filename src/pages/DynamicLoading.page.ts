import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicLoadingPage extends BasePage {
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly helloWorldText: Locator;
  private readonly TIMEOUT = 15000;

  constructor(page: Page) {
    super(page);
    this.example1Link = page.locator('text=Example 1: Element on page that is hidden');
    this.example2Link = page.locator('text=Example 2: Element rendered after the fact');
    this.startButton = page.locator('button');
    this.helloWorldText = page.locator('text=Hello World!');
  }

  async goto() {
    await this.navigateTo('/');
    await this.page.click('a:has-text("Dynamic Loading")');
    await this.page.waitForLoadState('load');
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
    await this.helloWorldText.waitFor({ state: 'visible', timeout: this.TIMEOUT });
  }
}