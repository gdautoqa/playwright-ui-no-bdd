import { test, expect } from '@playwright/test';
import HorizontalSliderPage from '../pages/HorizontalSliders.page';

test('Horizontal Slider Test', async ({ page }) => {
  const sliderPage = new HorizontalSliderPage(page);
  await sliderPage.navigateToHomePage();
  await sliderPage.clickHorizontalSliderLink();
  await sliderPage.moveSliderToValue('5');
  const sliderValue = await sliderPage.getSliderValue();
  expect(sliderValue.trim()).toBe('5');
});