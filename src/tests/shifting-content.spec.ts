import { test, expect } from '@playwright/test';
import { ShiftingContentPage } from '../pages/shiftingContentPage';

test.describe('Shifting Content Scenario', () => {
  let shiftingContent: ShiftingContentPage;

  test.beforeEach(async ({ page }) => {
    shiftingContent = new ShiftingContentPage(page);
  });

  test('Shifting Content Scenario', async ({ page }) => {
    await shiftingContent.navigateToHomePage();
    await shiftingContent.navigateToShiftingContent();

    await shiftingContent.clickExample1MenuElement();
    
    const menuItems = page.locator('ul li');
    const menuCount = await menuItems.count();
    expect(menuCount).toBeGreaterThan(0);
    
    for (let i = 0; i < menuCount; i++) {
      const menuItem = menuItems.nth(i);
      await menuItem.hover();
      await expect(menuItem).toBeVisible();
    }

    await page.goBack();

    await shiftingContent.clickExample2Image();
    
    const image = page.locator('img.shift');

    await expect(image.first()).toBeVisible();

    expect(await image.count()).toBeGreaterThan(0);

    await page.goBack();

    await shiftingContent.clickExample3List();

    const listContainer = page.locator('div.example');
    await expect(listContainer).toBeVisible();

    await expect(listContainer).toHaveText(/.+/);
  });
});