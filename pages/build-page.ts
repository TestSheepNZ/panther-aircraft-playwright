import { type Locator, type Page, expect } from '@playwright/test';

export class BuildPage {
    readonly page: Page;
    readonly getDocumentation: Locator;
    readonly getExercises: Locator;
    readonly getCurrentBuild: Locator;
    readonly getBuild1: Locator;
    readonly getBuild2: Locator;
    readonly getBuild3: Locator;
    readonly getBuild4: Locator;
    readonly getBuild5: Locator;
    readonly getPrototypeBuild: Locator;
    readonly pageTitle: RegExp;
    readonly URL = 'https://testsheepnz.github.io/panther-all-builds.html';

    constructor(page: Page) {
        this.page = page;
        this.getDocumentation = page.getByRole('link', { name: 'Documentation' });
        this.getExercises = page.getByRole('link', { name: 'Exercises' });
        this.getCurrentBuild = page.getByAltText('Select current build');
        this.getBuild1 = page.getByAltText('Select build 1');
        this.getBuild2 = page.getByAltText('Select build 2');
        this.getBuild3 = page.getByAltText('Select build 3');
        this.getBuild4 = page.getByAltText('Select build 4');
        this.getBuild5 = page.getByAltText('Select build 5');
        this.getPrototypeBuild = page.getByAltText('Select prototype build');
        this.pageTitle = /Panther Build Directory/;
    }

    async goToBuildPage() {
        await this.page.goto(this.URL);
    }

    async clickDocumentation() {
        await this.getDocumentation.click();
    }

    async clickExercises() {
        await this.getExercises.click();
    }
    
    async clickCurrentBuild() {
        await this.getCurrentBuild.click();
    }

    async clickBuild1() {
        await this.getBuild1.click();
    }

    async clickBuild2() {
        await this.getBuild2.click();
    }

    async clickBuild3() {
        await this.getBuild3.click();
    }

    async clickBuild4() {
        await this.getBuild4.click();
    }

    async clickBuild5() {
        await this.getBuild1.click();
    }

    async clickPrototypeBuild() {
        await this.getPrototypeBuild.click();
    }


    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertDocumentationLinkVisible() {
        await expect(this.getDocumentation).toBeVisible();
    }

    async assertExercisesLinkVisible() {
        await expect(this.getExercises).toBeVisible();
    }


    async assertCurrentBuildLinkVisible() {
        await expect(this.getCurrentBuild).toBeVisible();
    }

    async assertBuild1LinkVisible() {
        await expect(this.getBuild1).toBeVisible();
    }

    async assertBuild2LinkVisible() {
        await expect(this.getBuild2).toBeVisible();
    }

    async assertBuild3LinkVisible() {
        await expect(this.getBuild3).toBeVisible();
    }

    async assertBuild4LinkVisible() {
        await expect(this.getBuild4).toBeVisible();
    }

    async assertBuild5LinkVisible() {
        await expect(this.getBuild5).toBeVisible();
    }

    async assertPrototypeBuildLinkVisible() {
        await expect(this.getPrototypeBuild).toBeVisible();
    }


}

export default BuildPage;