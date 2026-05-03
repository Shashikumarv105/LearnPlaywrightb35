import { test, expect } from '@playwright/test';

export class addEmployeePage {

    constructor(page) {

        this.page = page;

        this.PIM = page.locator("//span[text() = 'PIM']");

        this.addEmployeePage = page.locator("//a[text() ='Add Employee']");

        this.MandatoryFirstName = page.locator('//input[@name="firstName"]');

        this.MandatoryLastName = page.locator('//input[@name="lastName"]');

        this.saveBtn = page.locator('//button[@type="submit"]');

        this.personalDeatilsheader = page.locator("//h6[text() = 'Personal Details']");


    }
    async ClickPIM() {

        await this.PIM.click();
    }

    async ClickAddEmployee() {

        await this.addEmployeePage.click();
    }

    async AddEmployeeDetails(firstname, lastname) {

        await this.MandatoryFirstName.fill(firstname);

        await this.MandatoryLastName.fill(lastname);

        await this.saveBtn.click();


    }

    async EmployeeAdded() {

        await expect(this.personalDeatilsheader).toBeVisible();


    }





}