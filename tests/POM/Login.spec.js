import { test, expect } from '@playwright/test';

import { loginpage } from '../../Pages/loginpage.po';


let login 

test.beforeEach(async ({ page }) => {

    login = new loginpage(page)

    await login.launchapp()

    await login.isLogoDisplayed()

})

test('Verify User can login with valid credentials', async ({ page }) => {

    await login.loginCreds("Admin", "admin123")
    await login.loginSuccess()

})
