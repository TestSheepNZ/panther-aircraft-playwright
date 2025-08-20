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