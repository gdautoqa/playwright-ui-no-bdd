import { Page, expect } from '@playwright/test';
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
    await this.clickLinkByRole('Dynamic Controls');
  }

  async clickRemoveButton() {
    await this.page.click('button:has-text("Remove")');
  }

  async waitForGoneMessage() {
    await expect(this.page.getByText(DynamicControlsPage.GONE_MESSAGE)).toBeVisible();
  }

  async clickAddButton() {
    await this.page.click('button:has-text("Add")');
  }

  async waitForBackMessage() {
    await expect(this.page.getByText(DynamicControlsPage.BACK_MESSAGE)).toBeVisible();
  }

  async clickEnableButton() {
    await this.page.click('button:has-text("Enable")');
  }

  async waitForEnabledMessage() {
    await expect(this.page.getByText(DynamicControlsPage.ENABLED_MESSAGE)).toBeVisible();
  }

  async clickDisableButton() {
    await this.page.click('button:has-text("Disable")');
  }

  async waitForDisabledMessage() {
    await expect(this.page.getByText(DynamicControlsPage.DISABLED_MESSAGE)).toBeVisible();
  }

  async getMessageText(): Promise<string> {
    return (await this.page.textContent('#message'))?.trim() || '';
  }
}