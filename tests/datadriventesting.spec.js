import { test, expect } from '@playwright/test';
import { title } from 'node:process';

const jobtitles = {

title1: "Junior Test Engineer" + Date.now(),

title2: "Senior Test Engineer" + Date.now(),

title3: "Test Lead Engineer" + Date.now(),

title4: "Test Manager" + Date.now()

}


for (let i in jobtitles) {

test('Verify User can create Employee - ' + i, async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.waitForLoadState('networkidle');

  await page.locator("input[name='username']").fill("Admin");

  await page.locator("input[type='password']").fill("admin123");

  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  await page.locator('//span[text()="Admin"]').click();

  await page.locator('//span[text()="Job "]').click();

  await page.locator('//a[text()="Job Titles"]').click();

  await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click();

  await page.getByLabel('Job Title*').fill(jobtitles[i]);

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
});
}