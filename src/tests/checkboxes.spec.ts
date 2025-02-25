import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/checkboxesPage';

test('Checkboxes Test', async ({ page }) => {
  const checkboxesPage = new CheckboxesPage(page);
  await checkboxesPage.navigate();

  const states = await checkboxesPage.getCheckboxStates();
  expect(states[0]).toBeFalsy();
  expect(states[1]).toBeTruthy();

  await checkboxesPage.toggleCheckbox(0);
  const newStates = await checkboxesPage.getCheckboxStates();
  expect(newStates[0]).toBeTruthy();
});
