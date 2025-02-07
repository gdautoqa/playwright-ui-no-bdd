import { test, expect } from '@playwright/test';
import HoversPage from '../pages/hoversPage';

test('Hovers Scenario', async ({ page }) => {
  const hoversPage = new HoversPage(page);
  await hoversPage.navigateToHomePage();
  await hoversPage.clickHoversLink();

  await hoversPage.hoverOverImage(0);
  const caption1 = await hoversPage.getCaptionForImage(0);
  expect(caption1).toContain('name: user1');

  await hoversPage.hoverOverImage(1);
  const caption2 = await hoversPage.getCaptionForImage(1);
  expect(caption2).toContain('name: user2');

  await hoversPage.hoverOverImage(2);
  const caption3 = await hoversPage.getCaptionForImage(2);
  expect(caption3).toContain('name: user3');
});