import { test, expect } from '@playwright/test';

import logindata from './testdata/login.json';


test('Verify User can create Employee with correct creds', async ({ page }) => {


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name=\"username\"]").fill(logindata.username);

    await page.locator("input[name=\"password\"]").fill(logindata.password);

    await page.locator("button[type=\"submit\"]").click();

    await expect(page.locator('//p[text() = "Time at Work"]')).toBeVisible({ timeout: 40000 });

});