import { test, expect } from '@playwright/test';
import SortableDataTablesPage from '../pages/SortableDataTables.page';

test('Sortable Data Tables Test', async ({ page }) => {
  const tablesPage = new SortableDataTablesPage(page);
  await tablesPage.navigateToHomePage();
  await tablesPage.clickSortableDataTablesLink();

  await tablesPage.clickDueHeaderInTable1();
  const dueValues = await tablesPage.getDueValuesFromTable1();
  const sortedDueValues = [...dueValues].sort((a, b) => a - b);
  expect(dueValues).toEqual(sortedDueValues);

  await tablesPage.sortLastNameAscending();
  const lastNames = await tablesPage.getLastNamesFromTable2();
  const sortedLastNames = [...lastNames].sort((a, b) => a.localeCompare(b));
  expect(lastNames).toEqual(sortedLastNames);
});