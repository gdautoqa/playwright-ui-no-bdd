import { test, expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/addRemoveElementsPage';

test('Add and Remove Elements', async ({ page }) => {
  const addRemovePage = new AddRemoveElementsPage(page);
  await addRemovePage.navigate();

  await addRemovePage.clickAddElement();
  await addRemovePage.clickAddElement();

  const deleteCount = await addRemovePage.countDeleteButtons();
  expect(deleteCount).toBe(2);

  await addRemovePage.clickDeleteButton();

  const updatedCount = await addRemovePage.countDeleteButtons();
  expect(updatedCount).toBe(1);
});
