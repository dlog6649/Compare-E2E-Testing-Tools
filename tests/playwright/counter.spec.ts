import { test, expect } from '@playwright/test';

test('counter value should be increased when plus button clicked', async ({ page }) => {
  await page.goto('localhost:3000');
  const counter = page.locator('[data-testid=counter]');
  await expect(counter).toHaveValue("0")
  const plusBtn = page.locator('[data-testid=plus-btn]');
  await plusBtn.click()
  await plusBtn.click()
  await plusBtn.click()
  await plusBtn.click()
  await expect(counter).toHaveValue("4")
});

test('counter value should be decreased when minus button clicked', async ({ page }) => {
  await page.goto('localhost:3000');
  const counter = page.locator('[data-testid=counter]');
  await expect(counter).toHaveValue("0")
  const plusBtn = page.locator('[data-testid=minus-btn]');
  await plusBtn.click()
  await plusBtn.click()
  await plusBtn.click()
  await plusBtn.click()
  await plusBtn.click()
  await expect(counter).toHaveValue("-5")
});
