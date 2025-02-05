import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../pages/DynamicControls.page';

test.describe('Dynamic Controls Tests', () => {
  let dynamicControlsPage: DynamicControlsPage;

  test.beforeEach(async ({ page }) => {
    dynamicControlsPage = new DynamicControlsPage(page);
    await dynamicControlsPage.navigate();
  });

  test('should remove and add checkbox and verify messages', async () => {
    await dynamicControlsPage.clickRemoveButton();
    await dynamicControlsPage.waitForGoneMessage();
    let message = await dynamicControlsPage.getMessageText();
    expect(message).toBe(DynamicControlsPage.GONE_MESSAGE);

    await dynamicControlsPage.clickAddButton();
    await dynamicControlsPage.waitForBackMessage();
    message = await dynamicControlsPage.getMessageText();
    expect(message).toBe(DynamicControlsPage.BACK_MESSAGE);
  });

  test('should enable input field and verify message', async () => {
    await dynamicControlsPage.clickEnableButton();
    await dynamicControlsPage.waitForEnabledMessage();
    const message = await dynamicControlsPage.getMessageText();
    expect(message).toBe(DynamicControlsPage.ENABLED_MESSAGE);
  });
});