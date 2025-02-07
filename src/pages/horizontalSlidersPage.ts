import { Page, Locator } from '@playwright/test';

export default class HorizontalSliderPage {
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
  }

  async clickHorizontalSliderLink(): Promise<void> {
    await this.page.click('text=Horizontal Slider');
  }

  async moveSliderToValue(targetValue: string): Promise<void> {
    let currentVal = await this.slider.inputValue();
    while (currentVal !== targetValue) {
      await this.slider.press('ArrowRight');
      currentVal = await this.slider.inputValue();
    }
  }

  async getSliderValue(): Promise<string> {
    return (await this.sliderValue.textContent()) || '';
  }
}