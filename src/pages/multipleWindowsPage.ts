import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MultipleWindowsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async gotoHome() {
    await this.navigateTo('/');
  }

  async navigateToMultipleWindows() {
    await this.page.getByRole('link', { name: 'Multiple Windows' }).click();
  }

  async clickClickHere() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.getByRole('link', { name: 'Click Here' }).click(),
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }
}
