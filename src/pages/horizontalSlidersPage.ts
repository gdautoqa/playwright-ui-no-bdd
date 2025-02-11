import { Page, Locator, expect } from '@playwright/test';

export class HorizontalSliderPage {
  readonly page: Page;
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.locator('input[type="range"]');
    this.sliderValue = page.locator('#range');
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.getByRole('link', { name: 'Horizontal Slider' }).click();
    await this.page.waitForLoadState('load');
  }

  async moveSliderToValue(targetValue: string): Promise<void> {
    let currentVal = await this.slider.inputValue();
    let attempts = 0;
    const maxAttempts = 50;

    while (currentVal !== targetValue && attempts < maxAttempts) {
      await this.slider.press('ArrowRight');
      currentVal = await this.slider.inputValue();
      attempts++;
    }
    if (attempts === maxAttempts && currentVal !== targetValue) {
      throw new Error(
        `Could not achieve target slider value ${targetValue} after ${maxAttempts} attempts. Current value: ${currentVal}`
      );
    }
  }

  async getSliderValue(): Promise<string> {
    return (await this.sliderValue.textContent()) || '';
  }
}