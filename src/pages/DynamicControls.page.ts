import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicControlsPage extends BasePage {
  static readonly GONE_MESSAGE = "It's gone!";
  static readonly BACK_MESSAGE = "It's back!";
  static readonly ENABLED_MESSAGE = "It's enabled!";
  static readonly DISABLED_MESSAGE = "It's disabled!";

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.click('a:has-text("Dynamic Controls")');
    await this.page.waitForLoadState('load');
  }

  async clickRemoveButton() {
    await this.page.click('button:has-text("Remove")');
  }

  async waitForGoneMessage() {
    await this.page.locator(`text=${DynamicControlsPage.GONE_MESSAGE}`).waitFor();
  }

  async clickAddButton() {
    await this.page.click('button:has-text("Add")');
  }

  async waitForBackMessage() {
    await this.page.locator(`text=${DynamicControlsPage.BACK_MESSAGE}`).waitFor();
  }

  async clickEnableButton() {
    await this.page.click('button:has-text("Enable")');
  }

  async waitForEnabledMessage() {
    await this.page.locator(`text=${DynamicControlsPage.ENABLED_MESSAGE}`).waitFor();
  }

  async clickDisableButton() {
    await this.page.click('button:has-text("Disable")');
  }

  async waitForDisabledMessage() {
    await this.page.locator(`text=${DynamicControlsPage.DISABLED_MESSAGE}`).waitFor();
  }

  async getMessageText(): Promise<string> {
    return (await this.page.textContent('#message'))?.trim() || '';
  }
}