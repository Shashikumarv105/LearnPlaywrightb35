import { test, expect } from '@playwright/test';


test('Login to OrangeHRM', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[name='username']").fill(process.env.APP_USERNAME);
  await page.locator("input[name='password']").fill(process.env.APP_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  
});