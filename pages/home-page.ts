import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly getDocumentation: Locator;
    readonly getExercises: Locator;
    readonly getBuilds: Locator;
    readonly pageTitle: RegExp;

    constructor(page: Page) {
        this.page = page;
        this.getDocumentation = page.getByRole('link', { name: 'Documentation' });
        this.getExercises = page.getByRole('link', { name: 'Exercises' });
        this.getBuilds = page.getByRole('link', { name: 'Builds' });
        this.pageTitle = /Panther Fuel Calculator/;
    }

    async clickDocumentation() {
        await this.getDocumentation.click();
    }

    async clickExercises() {
        await this.getExercises.click();
    }

    async clickBuilds() {
        await this.getBuilds.click();
    }


    async assertExercisesLinkVisible() {
        await expect(this.getExercises).toBeVisible();
    }


    async assertBuildsLinkVisible() {
        await expect(this.getBuilds).toBeVisible();
    }


}

export default HomePage;