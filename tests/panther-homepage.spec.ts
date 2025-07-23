import { test, expect } from '@playwright/test';
import { BuildPage } from '../pages/build-page';
import { HomePage } from '../pages/home-page';
import { Helper } from '../helper/helper';

const URL = 'https://testsheepnz.github.io/panther.html';
let helper: Helper;
let buildPage: BuildPage;
let homePage: HomePage;


test.beforeEach(async ({page}) => {
    //page.goto(URL);
    //helper = new Helper(page);
    //await helper.openHomePage();
    buildPage = new BuildPage(page);
    await buildPage.goToBuildPage();
    await buildPage.clickCurrentBuild();
    homePage = new HomePage(page);
});


test('has title', async ({ page }) => {
 //await expect(page).toHaveTitle(homePage.pageTitle);
  await homePage.assertPageTitle();
});

test('documentation link present', async ({ page }) => {
  await homePage.assertDocumentationLinkVisible();
});

test('exercises link present', async ({ page }) => {
  await homePage.assertExercisesLinkVisible();
});

test('build link present', async ({ page }) => {
  await homePage.assertBuildsLinkVisible();
});


test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
