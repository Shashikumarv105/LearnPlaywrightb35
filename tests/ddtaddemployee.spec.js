import { test, expect } from '@playwright/test';


const empDetails = {

emp1: { firstName: "Somesh", lastName: "Garemane", empid : "1235ert"},

emp2: { firstName: "Sowmya", lastName: "SC", empid : "4567uyt" },  

emp3: { firstName: "Yashwanth", lastName: "B", empid : "7890iop" },

emp4: { firstName: "Sumanth", lastName: "SC", empid : "2345dfg" }

}


for (let i in empDetails) {

test('Verify User can create Employee' + i, async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[type='password']").fill("admin123");
  await page.locator("button[type='submit']").click();

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

  await page.locator("(//li[@class='oxd-main-menu-item-wrapper'])[2]").click();
  await page.locator("//a[normalize-space(text())='Add Employee']").click();

  await page.locator("input[name='firstName']").fill(empDetails[i].firstName);
  await page.locator("input[name='lastName']").fill(empDetails[i].lastName);

  await page.locator("(//input[contains(@class,'oxd-input')])[5]").fill(empDetails[i].empid);

  await page.locator("button[type='submit']").click();

  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible({ timeout: 40000 });
});
}