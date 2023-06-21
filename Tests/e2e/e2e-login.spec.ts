import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe.parallel("Login and Logout", ()=>
{
    let loginPage : LoginPage;
    //before hook
    test.beforeEach(async ({page})=>
    {
        loginPage = new LoginPage(page);
        await loginPage.visitMyRetro();
    });

    //Negative test
    test("Login with invalid credentials", async ({page}) =>
{
   await loginPage.login("wrong email", "wrong password");
   await loginPage.assertErrorMassage();
});
    
    //Positive test
    test("Login and Logout with valid credentials", async ({page})=>
    {
        await loginPage.login("an.tan_ta@mail.ru", "czM6MEOY3FfH9zj9AzI9");

        const headerTitle = page.locator(" .blueprint .header .title");
        await expect(headerTitle).toBeVisible();

        await page.click(".col .logout");
        const signinButton = page.locator(".main .signin");
        await expect(signinButton).toBeVisible();
    });
});