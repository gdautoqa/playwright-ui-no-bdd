import { test, expect } from '@playwright/test';
import { GeolocationPage } from '../pages/geolocationPage';

test('Geolocation Test', async ({ page, context }) => {
  await context.grantPermissions(['geolocation'], { origin: 'https://the-internet.herokuapp.com' });
  await context.setGeolocation({ latitude: 37.7749, longitude: -122.4194 });

  const geoPage = new GeolocationPage(page);
  await geoPage.gotoHome();
  await geoPage.navigateToGeolocation();
  await geoPage.clickWhereAmI();
  await geoPage.assertCoordinatesDisplayed();
});