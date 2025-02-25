import { Page, Locator, expect } from '@playwright/test';

export class GeolocationPage {
  readonly page: Page;
  readonly geolocationLink: Locator;
  readonly whereAmIButton: Locator;
  readonly latitudeInfo: Locator;
  readonly longitudeInfo: Locator;
  readonly seeOnGoogleLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.geolocationLink = page.getByRole('link', { name: 'Geolocation' });
    this.whereAmIButton = page.getByText('Where am i');
    this.latitudeInfo = page.getByText('Latitude:');
    this.longitudeInfo = page.getByText('Longitude:');
    this.seeOnGoogleLink = page.getByRole('link', { name: 'See it on Google' });
  }

  async gotoHome() {
    await this.page.goto('/');
  }

  async navigateToGeolocation() {
    await this.geolocationLink.click();
  }

  async clickWhereAmI() {
    await this.whereAmIButton.click();
  }

  async assertCoordinatesDisplayed() {
    await expect(this.latitudeInfo).toBeVisible();
    await expect(this.longitudeInfo).toBeVisible();

    const latitudeText = await this.latitudeInfo.textContent();
    const longitudeText = await this.longitudeInfo.textContent();

    const coordinateRegex = /-?\d+(\.\d+)?/;

    if (
      !latitudeText ||
      !latitudeText.match(new RegExp(`Latitude:\\s*${coordinateRegex.source}`))
    ) {
      throw new Error('Latitude information is not displayed correctly');
    }
    if (
      !longitudeText ||
      !longitudeText.match(
        new RegExp(`Longitude:\\s*${coordinateRegex.source}`),
      )
    ) {
      throw new Error('Longitude information is not displayed correctly');
    }
  }

  async clickSeeItOnGoogle() {
    await this.seeOnGoogleLink.click();
  }
}
