import { test, expect } from '@playwright/test';
import { BuildPage } from '../pages/build-page';
import { Helper } from '../helper/helper';

const URL = 'https://testsheepnz.github.io/panther-all-builds.html';
let helper: Helper;
let buildPage: BuildPage;


test.beforeEach(async ({page}) => {
    //page.goto(URL);
    //helper = new Helper(page);
    //await helper.openHomePage();
    buildPage = new BuildPage(page);
    await buildPage.goToBuildPage();
});

/* Butch - assertion stylings
  Coming from a Java/highly encapsulated direction with Selenium, my default way of doing
  things is using POM with getters and setters
  Playwright seems to favour using readonly attributes in POM, which are accessable outside of the class.

  So... while I know each of these work, I'm wondering which works best stylistically for Playwright.

*/

/* Method 1
  Use a POM method to do the assertion.
  I don't really like this because I'm probably only going to use this test once, 
  so making a method for something I'm only using once seems a waste, and creates clutter in
  the POM */
test('Butch method 1 - using a class method for an assert', async ({ page }) => {
  await buildPage.assertCurrentBuildLinkVisible();
});

/* Method 2
  Access the readonly attribute directly from the buildPage POM class.
  Feels somewhat wrong because of decades of encapsulation programming!
  */
test('Butch method 2 - Direct access to POM attribute', async ({ page }) => {
  await expect(buildPage.build1Link).toBeVisible();
});

/* Method 3
  Use a get method to return the locator for build 1 link, and do the assertion in the test
  This feels more the Selenium solution, but might not be the best - using a different style
  also feels redundant when you can direct access the attribute in method 2, hence creating more POM
  clutter

  Oh... and small fact of it doesn't work!
  */
 /*
test.fixme('Butch method 3 - POM method returns attribute', async ({ page }) => {
  await expect(buildPage.getBuild1Link()).toBeVisible();
});
*/



test('has title', async ({ page }) => {
 //await expect(page).toHaveTitle(homePage.pageTitle);
  await buildPage.assertPageTitle();
});

test('documentation link present', async ({ page }) => {
  await buildPage.assertDocumentationLinkVisible();
});

test('exercises link present', async ({ page }) => {
  await buildPage.assertExercisesLinkVisible();
});


test('current build link present', async ({ page }) => {
  await buildPage.assertCurrentBuildLinkVisible();
});

test('build 1 link present', async ({ page }) => {
  await buildPage.assertBuild1LinkVisible();
});

test('build 2 link present', async ({ page }) => {
  await buildPage.assertBuild2LinkVisible();
});

test('build 3 link present', async ({ page }) => {
  await buildPage.assertBuild3LinkVisible();
});

test('build 4 link present', async ({ page }) => {
  await buildPage.assertBuild4LinkVisible();
});

test('build 5 link present', async ({ page }) => {
  await buildPage.assertBuild5LinkVisible();
});

test('prototype build link present', async ({ page }) => {
  await buildPage.assertPrototypeBuildLinkVisible();
});