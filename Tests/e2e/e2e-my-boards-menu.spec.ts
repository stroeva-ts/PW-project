import {test, expect} from "@playwright/test";

test.describe.parallel("Boards Menu", ()=>
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

    test("Check Items Menu Options", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=action-items-option]");
        const actionItemsTitle= page.locator("[data-qa=action-items-option]");
        await expect(actionItemsTitle).toHaveText("Action Items");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/action_items");
    });

    test("Check Mentions Menu Options", async ({page})=>
    {
        await page.click(".hamburger-checkbox");
        await page.click("[data-qa=mentions-option]");
        const mentionsTitle= page.locator("[data-qa=mentions-option]");
        await expect(mentionsTitle).toHaveText("Mentions");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/mentions");
    });
});