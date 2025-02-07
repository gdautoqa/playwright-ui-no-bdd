import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdownPage';

test('Dropdown Test', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.navigate();
  const defaultText = await dropdownPage.getSelectedOptionText();
  expect(defaultText).toBe('Please select an option');

  await dropdownPage.selectOption('1');
  const selectedText1 = await dropdownPage.getSelectedOptionText();
  expect(selectedText1).toBe('Option 1');

  await dropdownPage.selectOption('2');
  const selectedText2 = await dropdownPage.getSelectedOptionText();
  expect(selectedText2).toBe('Option 2');
});