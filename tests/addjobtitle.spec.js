import { test, expect } from '@playwright/test';


test('Verify User can create Employee', async ({ page }) => {

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

  await page.getByLabel('Job Title*').fill("Test Automation Engineer" + Date.now());

  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
});