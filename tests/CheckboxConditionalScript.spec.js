import { test, expect } from '@playwright/test';

test('checkbox conditional script', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const StatusofCheckbox = await page.locator("#checkBoxOption1").isChecked();

    console.log(StatusofCheckbox);

    if (!StatusofCheckbox) {

        await page.locator("#checkBoxOption1").check();

    }
});

