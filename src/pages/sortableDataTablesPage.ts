import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SortableDataTablesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/');
  }

  async clickSortableDataTablesLink(): Promise<void> {
    await this.page.click('text=Sortable Data Tables');
  }

  async clickDueHeaderInTable1(): Promise<void> {
    await this.page.click('#table1 thead tr th:has-text("Due")');
    await this.page.locator('#table1 tbody tr td:nth-child(4)').first().waitFor({ state: 'visible' });
  }

  async getDueValuesFromTable1(): Promise<number[]> {
    const dueTexts = await this.page.locator('#table1 tbody tr td:nth-child(4)').allTextContents();
    return dueTexts.map(text => parseFloat(text.replace('$', '').replace(',', '').trim()));
  }

  async getLastNamesFromTable2(): Promise<string[]> {
    const lastNames = await this.page.locator('#table2 tbody tr td:nth-child(1)').allTextContents();
    return lastNames.map(name => name.trim());
  }

  async sortLastNameAscending(): Promise<void> {
    const headerSelector = '#table2 thead tr th:has-text("Last Name")';
    await this.page.click(headerSelector);
    await this.page.waitForFunction(
      (selector: string) => {
        const cells = Array.from(document.querySelectorAll(selector));
        const names = cells.map((cell) => cell.textContent?.trim() || '');
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        return JSON.stringify(names) === JSON.stringify(sortedNames);
      },
      '#table2 tbody tr td:nth-child(1)'
    );
  }
}