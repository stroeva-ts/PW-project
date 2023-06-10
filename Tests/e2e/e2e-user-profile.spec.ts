import {test, expect} from "@playwright/test";

test.describe.parallel("User Profile", ()=>
{
    //before hook
    test.beforeEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
        await page.click(".signin");
        await page.type("#email", "an.tan_ta@mail.ru");
        await page.type("#password", "czM6MEOY3FfH9zj9AzI9");
        await page.click(".button-login");
    });

    test("Change First name and Cancel", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        //await page.getByTestId("profile-option").click;
        const firstNameField = page.locator("#first-name");
        //await page.type("#first-name","Cancel first name");
        await firstNameField.fill("Cancel first name");
        await page.click("[data-qa=profile-cancel-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        //await page.getByTestId("profile-option").click;
        await expect(firstNameField).not.toHaveValue("Cancel first name");
    });

    test("Change First name and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const firstNameField = page.locator("#first-name");
        await firstNameField.fill("Submit first name");
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await expect(firstNameField).toHaveValue("Submit first name");
    });

    test("Check Email Field", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const email = page.locator("#email");
        await expect(email).toHaveValue("an.tan_ta@mail.ru");
    });

    test("Change Position and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await page.click(".md-select-value[name=position-id]");
        await page.getByRole('button',{name: 'project manager'}).click();
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const position = page.locator(".md-select-value[name=position-id]");
        await expect(position).toHaveValue("project manager");
    });

    test("Change Work Experience and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await page.fill("#workExperience","11");
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const WorkExperience = page.locator("#workExperience");
        await expect(WorkExperience).toHaveValue("11");
    });

    test("Change Birthday and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");

        await page.fill(".field-birthday .md-input","2000-09-22");
        //await page.pause();
        await (await page.waitForSelector("text=Ok")).click();
        //await page.pause();

        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");

        const BirthdayDate = page.locator(".field-birthday .md-input");
        await expect(BirthdayDate).toHaveValue("2000-09-22");
    });

    test("Change Last name and Cancel", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const lastNameField = page.locator("#last-name");
        await lastNameField.fill("Cancel last name");
        await page.click("[data-qa=profile-cancel-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await expect(lastNameField).not.toHaveValue("Cancel last name");
    });

    test("Change Last name and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const lastNameField = page.locator("#last-name");
        await lastNameField.fill("Submit last name");
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await expect(lastNameField).toHaveValue("Submit last name");
    });

    test("Change Phone and Cancel", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const phoneField = page.locator("#phone");
        await phoneField.fill("8-950-798-89-56-100");
        await page.click("[data-qa=profile-cancel-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await expect(phoneField).not.toHaveValue("8-950-798-89-56-100");
    });

    test("Change Phone and Submit", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        const phoneField = page.locator("#phone");
        await phoneField.fill("8-950-798-89-56");
        await page.click("[data-qa=profile-submit-button]");
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=profile-option]");
        await expect(phoneField).toHaveValue("8-950-798-89-56");
    });
});