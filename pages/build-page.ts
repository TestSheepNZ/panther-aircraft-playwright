import { type Locator, type Page, expect } from '@playwright/test';

export class BuildPage {
    readonly page: Page;
    readonly documentationButton: Locator;
    readonly excercisesButton: Locator;
    readonly currentBuildLink: Locator;
    readonly build1Link: Locator;
    readonly build2Link: Locator;
    readonly build3Link: Locator;
    readonly build4Link: Locator;
    readonly build5Link: Locator;
    readonly prototypeBuildLink: Locator;
    readonly pageTitle: RegExp;
    readonly URL = 'https://testsheepnz.github.io/panther-all-builds.html';

    constructor(page: Page) {
        this.page = page;
        this.documentationButton = page.getByRole('link', { name: 'Documentation' });
        this.excercisesButton = page.getByRole('link', { name: 'Exercises' });
        this.currentBuildLink = page.getByAltText('Select current build');
        this.build1Link = page.getByAltText('Select build 1');
        this.build2Link = page.getByAltText('Select build 2');
        this.build3Link = page.getByAltText('Select build 3');
        this.build4Link = page.getByAltText('Select build 4');
        this.build5Link = page.getByAltText('Select build 5');
        this.prototypeBuildLink = page.getByAltText('Select refuelling prototype');
        this.pageTitle = /Panther Build Directory/;
    }

    async goToBuildPage() {
        await this.page.goto(this.URL);
    }

    async clickDocumentation() {
        await this.documentationButton.click();
    }

    async clickExercises() {
        await this.excercisesButton.click();
    }
    
    async clickCurrentBuild() {
        await this.currentBuildLink.click();
    }

    async clickBuild1() {
        await this.build1Link.click();
    }

    async clickBuild2() {
        await this.build2Link.click();
    }

    async clickBuild3() {
        await this.build3Link.click();
    }

    async clickBuild4() {
        await this.build4Link.click();
    }

    async clickBuild5() {
        await this.build1Link.click();
    }

    async clickPrototypeBuild() {
        await this.prototypeBuildLink.click();
    }

    async getBuild1Link() {
        return this.build1Link;
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertDocumentationLinkVisible() {
        await expect(this.documentationButton).toBeVisible();
    }

    async assertExercisesLinkVisible() {
        await expect(this.excercisesButton).toBeVisible();
    }


    async assertCurrentBuildLinkVisible() {
        await expect(this.currentBuildLink).toBeVisible();
    }

    async assertBuild1LinkVisible() {
        await expect(this.build1Link).toBeVisible();
    }

    async assertBuild2LinkVisible() {
        await expect(this.build2Link).toBeVisible();
    }

    async assertBuild3LinkVisible() {
        await expect(this.build3Link).toBeVisible();
    }

    async assertBuild4LinkVisible() {
        await expect(this.build4Link).toBeVisible();
    }

    async assertBuild5LinkVisible() {
        await expect(this.build5Link).toBeVisible();
    }

    async assertPrototypeBuildLinkVisible() {
        await expect(this.prototypeBuildLink).toBeVisible();
    }

        /* Because this automation is designed to work over multiple instances, this method will help direct the automation
        to different pages. Keeping it basic for now.
        */
    async openApplicationPageUnderTest() {
        await this.clickCurrentBuild();
    }

}

export default BuildPage;