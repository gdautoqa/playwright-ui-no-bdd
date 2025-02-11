import { Page } from '@playwright/test';

/**
 * BasePage serves as the foundation for all page objects,
 * providing common navigation and logging functionality.
 */
export class BasePage {
  protected page: Page;
  protected baseUrl: string;

  constructor(page: Page) {
    this.page = page;
    // Allow dynamic configuration of the base URL via environment variable.
    this.baseUrl = process.env.BASE_URL || 'https://the-internet.herokuapp.com';
  }

  /**
   * Navigates to the specified path and logs the action.
   * @param path Relative URL path to navigate to.
   */
  async navigateTo(path: string = '/'): Promise<void> {
    const url = `${this.baseUrl}${path}`;
    console.log(`Navigating to: ${url}`);
    await this.page.goto(url);
    await this.page.waitForLoadState('load');
  }

  /**
   * Clicks a link identified by its role and accessible name.
   * @param linkName The accessible name of the link.
   */
  async clickLinkByRole(linkName: string): Promise<void> {
    console.log(`Clicking on link with name: ${linkName}`);
    await this.page.getByRole('link', { name: linkName }).click();
    await this.page.waitForLoadState('load');
  }
}
