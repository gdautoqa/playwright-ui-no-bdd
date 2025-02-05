import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContextMenuPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.click('a:has-text("Context Menu")');
    await this.page.waitForLoadState('load');
  }

  async triggerContextMenu() {
    await this.page.click('#hot-spot', { button: 'right' });
  }
}