import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { Profile } from "../../page-objects/components/Profile";

test.describe.parallel.only("User Profile", ()=>
{
    let loginPage : LoginPage;
    let profile: Profile;
    //before hook
    test.beforeEach(async ({page})=>
    {
        loginPage = new LoginPage(page);
        profile = new Profile(page);
        await loginPage.visitMyRetro();
        await loginPage.login("an.tan_ta@mail.ru", "czM6MEOY3FfH9zj9AzI9");
    });

    test("Change First name and Cancel", async ({page})=>
    {
        await profile.openProfileOption();
        const firstNameField = page.locator("#first-name");
        await profile.fillFirstName("Cancel first name");
        await profile.ckickButtonCancel();
        await profile.openProfileOption();
        await expect(firstNameField).not.toHaveValue("Cancel first name");
    });

    test("Change First name and Submit", async ({page})=>
    {
        await profile.openProfileOption();
        const firstNameField = page.locator("#first-name");
        await profile.fillFirstName("Submit first name");
        await profile.ckickButtonSubmit();
        await profile.openProfileOption();
        await expect(firstNameField).toHaveValue("Submit first name");
    });

    test("Check Email Field", async ({page})=>
    {
        await profile.openProfileOption();
        const email = page.locator("#email");
        await expect(email).toHaveValue("an.tan_ta@mail.ru");
    });

    test("Change Position and Submit", async ({page})=>
    {
        await profile.openProfileOption();
        await page.click(".md-select-value[name=position-id]");
        await page.getByRole('button',{name: 'project manager'}).click();
        await profile.ckickButtonSubmit();
        await profile.openProfileOption();
        const position = page.locator(".md-select-value[name=position-id]");
        await expect(position).toHaveValue("project manager");
    });

    test("Change Work Experience and Submit", async ({page})=>
    {
        await profile.openProfileOption();
        await page.fill("#workExperience","11");
        await profile.ckickButtonSubmit();
        await profile.openProfileOption();
        const WorkExperience = page.locator("#workExperience");
        await expect(WorkExperience).toHaveValue("11");
    });

    test("Change Birthday and Submit", async ({page})=>
    {
        await profile.openProfileOption();

        await page.fill(".field-birthday .md-input","2000-09-22");
        await (await page.waitForSelector("text=Ok")).click();

        await profile.ckickButtonSubmit();
        await profile.openProfileOption();

        const BirthdayDate = page.locator(".field-birthday .md-input");
        await expect(BirthdayDate).toHaveValue("2000-09-22");
    });

    test("Change Last name and Cancel", async ({page})=>
    {
        await profile.openProfileOption();
        const lastNameField = page.locator("#last-name");
        await profile.fillLastName("Cancel last name");
        await profile.ckickButtonCancel();
        await profile.openProfileOption();
        await expect(lastNameField).not.toHaveValue("Cancel last name");
    });

    test("Change Last name and Submit", async ({page})=>
    {
        await profile.openProfileOption();
        const lastNameField = page.locator("#last-name");
        await profile.fillLastName("Submit last name");
        await profile.ckickButtonSubmit();
        await profile.openProfileOption();
        await expect(lastNameField).toHaveValue("Submit last name");
    });

    test("Change Phone and Cancel", async ({page})=>
    {
        await profile.openProfileOption();
        const phoneField = page.locator("#phone");
        await phoneField.fill("8-950-798-89-56-100");
        await profile.ckickButtonCancel();
        await profile.openProfileOption();
        await expect(phoneField).not.toHaveValue("8-950-798-89-56-100");
    });

    test("Change Phone and Submit", async ({page})=>
    {
        await profile.openProfileOption();
        const phoneField = page.locator("#phone");
        await phoneField.fill("8-950-798-89-56");
        await profile.ckickButtonSubmit();
        await profile.openProfileOption();
        await expect(phoneField).toHaveValue("8-950-798-89-56");
    });
});