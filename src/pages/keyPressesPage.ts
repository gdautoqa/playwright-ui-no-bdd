import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class KeyPressesPage extends BasePage {
  readonly input: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.input = page.locator('#target');
    this.result = page.locator('#result');
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/');
  }

  async clickKeyPressesLink(): Promise<void> {
    await this.page.click('text=Key Presses');
  }

  async typeKey(key: string): Promise<void> {
    await this.input.click();
    await this.input.fill('');
    await this.page.keyboard.press(key);
  }

  async getResultText(): Promise<string> {
    return (await this.result.textContent()) || '';
  }
}