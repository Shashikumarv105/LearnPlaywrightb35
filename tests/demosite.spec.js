import { test, expect } from '@playwright/test';

test('Add Text Box', async ({ page }) => {

    await page.goto("https://demoqa.com/text-box")
    await page.locator("//input[@placeholder='Full Name']").fill("Shashikumar")
    await page.locator("input[placeholder='name@example.com']").fill("shashikumar@gmail.com")
    await page.locator("textarea[placeholder='Current Address']").fill("Bangalore")
    await page.locator("(//textarea[@class='form-control'])[2]").fill("Bnagalore")
    await page.locator("//button[@class='btn btn-primary']").click()
    




});