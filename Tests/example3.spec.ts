import {test, expect} from "@playwright/test";

test("Работа с кликами @tag1", async ({page})=>
{
   await page.goto("https://myretro-stg.tochkavhoda.ru/");
   await page.click(".signin");
   //await page.pause();
   await page.click(".button-login");
   const errorMassage = page.locator("text=Error: Authentication failed: Wrong login or password");
   await expect(errorMassage).toContainText("Error: Authentication failed: Wrong login or password");
})

//селекторы

test.skip("Работа с селекторами", async ({page})=>
{
    //css
    await page.click("title");
    await page.click("#id123");
    await page.click(".class123");
    await page.click("[data-qa=login-submit-button]");
    await page.click(".button-content .md-button.button-login");
    await page.click(".class123:visible");
    //по тексту
    await page.click("text=some text");
    //xPath
    await page.click("//button");
})

test.describe.parallel("Первый тестовый набор", async () =>
{
    test.beforeEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
    });

    test("Ввод данных", async ({page}) =>
{
   await page.click(".signin");
   await page.type("#email", "wrong email");
   await page.type("#password", "wrong password");
   await page.click(".button-login");
   const errorMassage = page.locator("text=Error: Authentication failed: Wrong login or password");
   await expect(errorMassage).toContainText("Error: Authentication failed: Wrong login or password");
});

test("Ассерты", async ({page}) =>
{
    await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/");
    await expect(page).toHaveTitle("MyRetro");
    const logo = page.locator(" .logo");
    await expect (logo).toBeVisible();
    await expect(logo).toHaveText("MyRetro");
    const signInDialog = page.locator(" .dialog");
    await expect(signInDialog).not.toBeVisible();
});
});