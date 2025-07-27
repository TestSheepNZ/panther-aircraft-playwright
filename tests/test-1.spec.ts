import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/');
  await page.locator('#gotoPantherODMButton').click();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').fill('1000');
  await page.locator('#intelliBomb').check();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').click({
    button: 'right'
  });
  await page.locator('#calculator').click();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').fill('6000');
  await page.locator('#reconPod').check();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').fill('60100000');
});