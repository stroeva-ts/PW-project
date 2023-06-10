import {test, expect} from "@playwright/test";

test.describe.parallel("Login and Logout", ()=>
{
    //before hook
    test.beforeEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
    });

    //Negative test
    test("Login with invalid credentials", async ({page}) =>
{
   await page.click(".signin");
   await page.type("#email", "wrong email");
   await page.type("#password", "wrong password");
   await page.click(".button-login");
   const errorMassage = page.locator("text=Error: Authentication failed: Wrong login or password");
   await expect(errorMassage).toContainText("Error: Authentication failed: Wrong login or password");
});
    
    //Positive test
    test("Login and Logout with valid credentials", async ({page})=>
    {
        await page.click(".signin");
        await page.type("#email", "an.tan_ta@mail.ru");
        await page.type("#password", "czM6MEOY3FfH9zj9AzI9");
        await page.click(".button-login");
        const headerTitle = page.locator(" .blueprint .header .title");
        await expect(headerTitle).toBeVisible();

        await page.click(".col .logout");
        const signinButton = page.locator(".main .signin");
        await expect(signinButton).toBeVisible();
    });
});