import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddRemoveElementsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.getByRole('link', { name: 'Add/Remove Elements' }).click();
    await this.page.waitForLoadState('load');
  }

  async clickAddElement() {
    await this.page.click('text=Add Element');
  }

  async countDeleteButtons(): Promise<number> {
    return await this.page.getByRole('button', { name: 'Delete' }).count();
  }

  async clickDeleteButton(index: number = 0) {
    await this.page.getByRole('button', { name: 'Delete' }).nth(index).click();
  }
}
