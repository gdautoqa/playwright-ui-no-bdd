import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get checkboxes() {
    return this.page.locator('form#checkboxes input[type="checkbox"]');
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.click('a[href="/checkboxes"]');
  }

  async getCheckboxStates(): Promise<boolean[]> {
    const count = await this.checkboxes.count();
    const states: boolean[] = [];
    for (let i = 0; i < count; i++) {
      states.push(await this.checkboxes.nth(i).isChecked());
    }
    return states;
  }

  async toggleCheckbox(index: number): Promise<void> {
    await this.checkboxes.nth(index).click();
  }
}