import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/');
  await page.locator('#gotoPantherODMButton').click();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').fill('1001');
  await page.getByLabel('Number of missiles').selectOption('2');
  await page.getByLabel('Number of dumb bombs').selectOption('3');
  await page.locator('#reconPod').check();
  await page.locator('#intelliBomb').check();
  await page.locator('#fuelTank').check();
  await page.getByRole('button', { name: 'Load' }).click();
  await page.getByRole('button', { name: 'Restart' }).click();
});