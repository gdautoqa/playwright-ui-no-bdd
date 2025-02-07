import { test, expect } from '@playwright/test';
import { ContextMenuPage } from '../pages/contextMenuPage';

test('Context Menu Test', async ({ page }) => {
  const contextMenuPage = new ContextMenuPage(page);
  await contextMenuPage.navigate();
  const currentUrl = page.url();
  expect(currentUrl).toBe('https://the-internet.herokuapp.com/context_menu');

  const dialogPromise = new Promise<string>((resolve) => {
    page.once('dialog', async (dialog) => {
      const message = dialog.message();
      await dialog.accept();
      resolve(message);
    });
  });
  
  await contextMenuPage.triggerContextMenu();
  const dialogMessage = await dialogPromise;
  expect(dialogMessage).toBe('You selected a context menu');
});