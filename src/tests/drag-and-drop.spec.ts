import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/dragAndDropPage';

test('Drag and Drop Test', async ({ page }) => {
  const dragAndDropPage = new DragAndDropPage(page);
  await dragAndDropPage.navigate();

  const initialHeaders = await dragAndDropPage.getColumnHeaders();
  expect(initialHeaders.columnA).toBe('A');
  expect(initialHeaders.columnB).toBe('B');

  await dragAndDropPage.performDragAndDrop();

  const finalHeaders = await dragAndDropPage.getColumnHeaders();
  expect(finalHeaders.columnA).toBe('B');
  expect(finalHeaders.columnB).toBe('A');
});
