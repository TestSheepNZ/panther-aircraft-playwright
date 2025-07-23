import { type Locator, type Page, expect } from '@playwright/test';


export class Helper {
    readonly page: Page;
    readonly URL = 'https://testsheepnz.github.io/panther.html';

    constructor(page: Page) {
        this.page = page;
    }

    async openHomePage() {
        await this.page.goto(this.URL);
    }




}

export default Helper;