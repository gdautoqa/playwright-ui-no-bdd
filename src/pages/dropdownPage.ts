import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.getByRole('link', { name: 'Dropdown' }).click();
    await this.page.waitForLoadState('load');
  }

  async selectOption(value: string) {
    await this.page.selectOption('#dropdown', value);
  }

  async getSelectedOptionText(): Promise<string> {
    return await this.page.$eval('#dropdown', (select: HTMLSelectElement) => {
      return select.options[select.selectedIndex].text;
    });
  }
}