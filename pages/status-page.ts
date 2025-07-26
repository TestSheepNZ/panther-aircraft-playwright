import { type Locator, type Page, expect } from '@playwright/test';

export class StatusPage {
    readonly page: Page;
    readonly aircraftLegField: Locator;
    readonly aircraftAltitudeField: Locator;
    readonly aircraftWeightField: Locator;
    readonly aircraftFuelRemainingField: Locator;
    readonly aircraftFuelLastLeg: Locator;
    readonly aircraftActionDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aircraftLegField = this.page.locator('#aircraftLeg');
        this.aircraftAltitudeField = this.page.locator('#aircraftHeight');
        this.aircraftWeightField = this.page.locator('#aircraftWeight');
        this.aircraftFuelRemainingField = this.page.locator('#aircraftFuelRemaining');
        this.aircraftFuelLastLeg = this.page.locator('#aircraftFuelLastLeg');
        this.aircraftActionDropdown = this.page.getByLabel('Perform a');

    }

    async setAircraftAction (action) {
        await this.aircraftActionDropdown.selectOption(action);
    }

}

export default StatusPage;