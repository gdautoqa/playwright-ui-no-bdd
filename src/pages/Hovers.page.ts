import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export default class HoversPage extends BasePage {
  readonly figures: Locator;

  constructor(page: Page) {
    super(page);
    this.figures = page.locator('.figure');
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/');
  }

  async clickHoversLink(): Promise<void> {
    await this.page.click('text=Hovers');
  }

  async hoverOverImage(index: number): Promise<void> {
    await this.figures.nth(index).hover();
  }

  async getCaptionForImage(index: number): Promise<string> {
    const caption = this.figures.nth(index).locator('.figcaption');
    await caption.waitFor({ state: 'visible' });
    return (await caption.textContent()) || '';
  }
}