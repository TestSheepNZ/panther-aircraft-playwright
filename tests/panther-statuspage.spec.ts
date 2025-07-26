import { test, expect } from '@playwright/test';
import { BuildPage } from '../pages/build-page';
import { EquipmentPage } from '../pages/equipment-page';
import { StatusPage } from '../pages/status-page';
import { Helper } from '../helper/helper';

const URL = 'https://testsheepnz.github.io/panther.html';
let helper: Helper;
let buildPage: BuildPage;
let equipmentPage: EquipmentPage;
let statusPage: StatusPage;

test.beforeEach(async ({page}) => {
    buildPage = new BuildPage(page);
    await buildPage.goToBuildPage();
    await buildPage.openApplicationPageUnderTest();
    equipmentPage = new EquipmentPage(page);
    equipmentPage.setFuel('1000');
    statusPage = new StatusPage(page);
});

/* Check visible elements on startup */
test('Aircraft leg is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftLegField).toBeVisible();
});

test('Aircraft altitude is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftAltitudeField).toBeVisible();
});

test('Aircraft weight is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftWeightField).toBeVisible();
});

test('Aircraft fuel field is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftFuelRemainingField).toBeVisible();
});

test('Aircraft fuel used in last leg is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftFuelRemainingField).toBeVisible();
});

test('Aircraft action dropdown is visible', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftActionDropdown).toBeVisible();
});

test('Restart takes back to equipment section', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(statusPage.aircraftLegField).toBeVisible();
    await equipmentPage.restartButton.click();
    await expect(statusPage.aircraftLegField).toBeHidden();
    await expect(equipmentPage.initialFuelField).toBeVisible();
    await expect(equipmentPage.loadButton).toBeVisible();
});
