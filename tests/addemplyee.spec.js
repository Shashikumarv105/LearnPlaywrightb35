import { test, expect } from '@playwright/test';


test('Verify User can create Employee', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  await page.locator("(//li[@class='oxd-main-menu-item-wrapper'])[2]").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();

  await page.locator("input[name='firstName']").fill("Puneeth");
  await page.locator("input[name='lastName']").fill("SC");

  await page.locator("(//input[contains(@class,'oxd-input')])[5]")
    .fill("9987edf");

  await page.locator("button[type='submit']").click();

  await expect(page.locator("//h6[text()='Personal Details']"))
    .toBeVisible({ timeout: 40000 });
});