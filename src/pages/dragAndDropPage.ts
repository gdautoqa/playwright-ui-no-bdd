import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragAndDropPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('/');
    await this.page.click('a:has-text("Drag and Drop")');
    await this.page.waitForLoadState('load');
  }

  async getColumnHeaders(): Promise<{ columnA: string; columnB: string }> {
    const headerA = this.page.locator('#column-a header');
    const headerB = this.page.locator('#column-b header');
    await headerA.waitFor({ state: 'visible' });
    await headerB.waitFor({ state: 'visible' });
    const columnA = await headerA.textContent();
    const columnB = await headerB.textContent();
    return {
      columnA: columnA?.trim() || '',
      columnB: columnB?.trim() || '',
    };
  }

  async performDragAndDrop() {
    await this.page.dragAndDrop('#column-a', '#column-b');
  }
}
