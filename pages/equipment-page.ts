import { type Locator, type Page, expect } from '@playwright/test';

export class EquipmentPage {
    readonly page: Page;
    readonly errorMessage: Locator;
    readonly initialFuelField: Locator;
    readonly numMissilesDropdown: Locator;
    readonly numDumbBombDropdown: Locator;
    readonly reconPodCheckbox: Locator;
    readonly intelliBombCheckbox: Locator;
    readonly fuelTankCheckbox: Locator;
    readonly loadButton: Locator;
    readonly restartButton: Locator;
    readonly loadingEquipmentIndicator: Locator;
    readonly errorMessageForFuelWithoutNoTank = 'Max fuel level of 3000kg';
    readonly errorMessageForFuelWithExtTank   = 'Max fuel level of 6000kg';

    constructor(page: Page) {
        this.page = page;
        this.errorMessage = this.page.locator('#initErrorMsg');
        this.initialFuelField = this.page.locator('#initialFuel');
        this.numMissilesDropdown = this.page.getByLabel('Number of missiles');
        this.numDumbBombDropdown = this.page.getByLabel('Number of dumb bombs');
        this.reconPodCheckbox = this.page.locator('#reconPod');
        this.intelliBombCheckbox =this.page.locator('#intelliBomb');
        this.fuelTankCheckbox = this.page.locator('#fuelTank');
        // There is a reason I've selected LoadButton slightly differently to restart for testing other builds
        //this.loadButton = this.page.getByRole('button', { name: 'Load'});
        this.loadButton = this.page.locator('#setEquipmentButton');
        this.restartButton = this.page.getByRole('button', { name: 'Restart'});
        this.loadingEquipmentIndicator = this.page.locator('#loadEquipment');

    }

    async setFuel(inputString) {
        await this.initialFuelField.click();
        await this.initialFuelField.fill(inputString);
    }

    async setMissileNum(numMissiles) {
        await this.numMissilesDropdown.selectOption(numMissiles);
    }

    async setDumbBombNum(numBomb) {
        await this.numDumbBombDropdown.selectOption(numBomb);
    }

    async setAircraftEquipment (fuel, numMissiles, numDumbBomb, reconPod, intelliBomb, fuelTank ) {
        this.setFuel(fuel);
        this.setMissileNum(numMissiles);
        this.setDumbBombNum(numDumbBomb);
        if( reconPod ) {
            this.reconPodCheckbox.check();
        }
        if( intelliBomb ) {
            this.intelliBombCheckbox.check();
        }
        if( fuelTank ) {
            this.fuelTankCheckbox.check();
        }
    }

    async setDefaultEquipment (fuel) {
        this.setAircraftEquipment( fuel, 6, 4, false, false, false );
    }

}

export default EquipmentPage;