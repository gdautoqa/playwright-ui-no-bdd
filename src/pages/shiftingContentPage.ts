import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShiftingContentPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage() {
    await this.navigateTo('/');
  }

  async gotoHome() {
    return this.navigateToHomePage();
  }

  async navigateToShiftingContent() {
    await this.page.getByRole('link', { name: 'Shifting Content' }).click();
  }

  async clickExample1MenuElement() {
    await this.page
      .getByRole('link', { name: 'Example 1: Menu Element' })
      .click();
  }

  async clickExample2Image() {
    await this.page.getByRole('link', { name: 'Example 2: An image' }).click();
  }

  async clickExample3List() {
    await this.page.getByRole('link', { name: 'Example 3: List' }).click();
  }
}
