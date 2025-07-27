import { test, expect } from '@playwright/test';
import { BuildPage } from '../pages/build-page';
import { EquipmentPage } from '../pages/equipment-page';
import { Helper } from '../helper/helper';

const URL = 'https://testsheepnz.github.io/panther.html';
let helper: Helper;
let buildPage: BuildPage;
let equipmentPage: EquipmentPage;


test.beforeEach(async ({page}) => {
    buildPage = new BuildPage(page);
    await buildPage.goToBuildPage();
    await buildPage.openApplicationPageUnderTest();
    equipmentPage = new EquipmentPage(page);
});

/* What's visible/invisible */
test('Error message field is hidden on startup', async ({ page }) => {
    await expect(equipmentPage.errorMessage).toBeHidden();
});

test('Initial fuel field present on startup', async ({ page }) => {
    await expect(equipmentPage.initialFuelField).toBeVisible();
});

test('Number missiles dropdown present on startup', async ({ page }) => {
    await expect(equipmentPage.numMissilesDropdown).toBeVisible();
});

test('Number dumb bombs dropdown present on startup', async ({ page }) => {
    await expect(equipmentPage.numDumbBombDropdown).toBeVisible();
});

test('Recon pod checkbox present on startup', async ({ page }) => {
    await expect(equipmentPage.reconPodCheckbox).toBeVisible();
});

test('Intellibomb checkbox present on startup', async ({ page }) => {
    await expect(equipmentPage.intelliBombCheckbox).toBeVisible();
});

test('Fuel tank checkbox present on startup', async ({ page }) => {
    await expect(equipmentPage.fuelTankCheckbox).toBeVisible();
});

test('Load button present on startup', async ({ page }) => {
    await expect(equipmentPage.loadButton).toBeVisible();
});

test('Restart button present on startup', async ({ page }) => {
    await expect(equipmentPage.restartButton).toBeVisible();
});

test('Loading equipment indicator is hidden on startup', async ({ page }) => {
    await expect(equipmentPage.loadingEquipmentIndicator).toBeHidden();
});

test('Default is 0 missiles selected', async ({ page }) => {
    await expect(equipmentPage.numMissilesDropdown).toHaveValue('0');
});

test('Default is 0 dumb bomb selected', async ({ page }) => {
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('0');
});

// Dynamic behaviours



test('Can select up to 8 missiles', async ({ page }) => {
    await equipmentPage.setMissileNum('8');
    await expect(equipmentPage.numMissilesDropdown).toHaveValue('8');
});

test('Can select up to 6 dumb bomb', async ({ page }) => {
    await equipmentPage.setDumbBombNum('6');
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('6');
});

test('Selecting intelli bomb clears any dumb bomb selection', async ({ page }) => {
    await equipmentPage.setDumbBombNum('6');
    await equipmentPage.intelliBombCheckbox.click();
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('0');
    await expect(equipmentPage.intelliBombCheckbox).toBeChecked();
});

test('Selecting recon pod clears any dumb bomb selection', async ({ page }) => {
    await equipmentPage.setDumbBombNum('4');
    await equipmentPage.reconPodCheckbox.click();
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('0');
    await expect(equipmentPage.reconPodCheckbox).toBeChecked();
});

test('Selecting intelli bomb clears any recon pod selection', async ({ page }) => {
    await equipmentPage.reconPodCheckbox.click();
    await equipmentPage.intelliBombCheckbox.click();
    await expect(equipmentPage.reconPodCheckbox).not.toBeChecked();
    await expect(equipmentPage.intelliBombCheckbox).toBeChecked();
});

test('Selecting recon pod clears any intelli bomb selection', async ({ page }) => {
    await equipmentPage.intelliBombCheckbox.click();
    await equipmentPage.reconPodCheckbox.click();
    await expect(equipmentPage.intelliBombCheckbox).not.toBeChecked();
    await expect(equipmentPage.reconPodCheckbox).toBeChecked();
});

test('Selecting dumb bomb clears any intelli bomb selection', async ({ page }) => {
    await equipmentPage.intelliBombCheckbox.click();
    await equipmentPage.setDumbBombNum('3');
    await expect(equipmentPage.intelliBombCheckbox).not.toBeChecked();
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('3');
});

test('Selecting dumb bomb clears any recon pod selection', async ({ page }) => {
    await equipmentPage.reconPodCheckbox.click();
    await equipmentPage.setDumbBombNum('2');
    await expect(equipmentPage.reconPodCheckbox).not.toBeChecked();
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('2');
});

test('Reset button clears error and selections', async ({ page }) => {
    await equipmentPage.setDumbBombNum('2');
    await equipmentPage.loadButton.click();
    await equipmentPage.restartButton.click();
    await expect(equipmentPage.errorMessage).toBeHidden();
    await expect(equipmentPage.numDumbBombDropdown).toHaveValue('0');
});

// Fuel load acceptance
test('Leaving fuel tank blank and selecting load generates error message', async ({ page }) => {
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.errorMessage).toBeVisible();
    await expect(equipmentPage.errorMessage).toHaveText(equipmentPage.errorMessageForFuelWithoutNoTank);
});

test('Selecting fuel tank and selecting load generates relevant error message', async ({ page }) => {
    await equipmentPage.fuelTankCheckbox.check();
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.errorMessage).toBeVisible();
    await expect(equipmentPage.errorMessage).toHaveText(equipmentPage.errorMessageForFuelWithExtTank);
});

test('With a valid initial fuel, the loading icon will be displayed once load button selected', async ({ page }) => {
    await equipmentPage.setFuel('2000');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.loadingEquipmentIndicator).toBeVisible();
});

test('With no ext fuel tank, 3000kg fuel will be accepted once load button selected', async ({ page }) => {
    await equipmentPage.setFuel('3000');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.loadingEquipmentIndicator).toBeVisible();
});

test('Entering a decimal point number will be accepted once load button selected', async ({ page }) => {
    await equipmentPage.setFuel('2888.5');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.loadingEquipmentIndicator).toBeVisible();
});

test('With no ext fuel tank, 3001kg fuel will generate an error message', async ({ page }) => {
    await equipmentPage.setFuel('3001');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.errorMessage).toBeVisible();
    await expect(equipmentPage.errorMessage).toHaveText(equipmentPage.errorMessageForFuelWithoutNoTank);
});

test('With an ext fuel tank, 6000kg fuel will be accepted once load button selected', async ({ page }) => {
    await equipmentPage.fuelTankCheckbox.check();
    await equipmentPage.setFuel('6000');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.loadingEquipmentIndicator).toBeVisible();
});

test('With an ext fuel tank, 6001kg fuel will generate an error message', async ({ page }) => {
    await equipmentPage.fuelTankCheckbox.check();
    await equipmentPage.setFuel('6001');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.errorMessage).toBeVisible();
    await expect(equipmentPage.errorMessage).toHaveText(equipmentPage.errorMessageForFuelWithExtTank);
});

test('If text is entered into initial fuel, and load selected will generate an error message', async ({ page }) => {
    await equipmentPage.setFuel('hello');
    await equipmentPage.loadButton.click();
    await expect(equipmentPage.errorMessage).toBeVisible();
    await expect(equipmentPage.errorMessage).toHaveText(equipmentPage.errorMessageForFuelWithoutNoTank);
});
