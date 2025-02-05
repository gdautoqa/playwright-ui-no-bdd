import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export default class JavaScriptAlertsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/');
  }

  async clickJavaScriptAlertsLink(): Promise<void> {
    await this.page.click('text=JavaScript Alerts');
  }

  private async handleDialogAndClick(selector: string): Promise<string> {
    return new Promise<string>(async (resolve) => {
      this.page.once('dialog', async dialog => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
      await this.page.click(selector);
    });
  }

  async clickJsAlert(): Promise<string> {
    return this.handleDialogAndClick('button:has-text("Click for JS Alert")');
  }

  async clickJsConfirm(): Promise<string> {
    return this.handleDialogAndClick('button:has-text("Click for JS Confirm")');
  }

  async clickJsPrompt(): Promise<string> {
    return this.handleDialogAndClick('button:has-text("Click for JS Prompt")');
  }
}