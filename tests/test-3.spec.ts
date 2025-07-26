import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/');
  await page.locator('#gotoPantherODMButton').click();
  await page.locator('#initialFuel').click();
  await page.locator('#initialFuel').fill('1000');
  await page.getByRole('button', { name: 'Load' }).click();

  
  await page.locator('#aircraftLeg').click();
  await page.locator('#aircraftHeight').click();
  await page.locator('#aircraftWeight').click();
  await page.locator('#aircraftFuelRemaining').click();
  await page.locator('#aircraftFuelLastLeg').click();
  await page.getByLabel('Perform a').selectOption('3');
});