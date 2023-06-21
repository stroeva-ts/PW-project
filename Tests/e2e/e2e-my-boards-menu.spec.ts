import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MentionsPage } from "../../page-objects/MentionsPage";
import { ActionItemsPage } from "../../page-objects/ActionItemsPage";


test.describe.parallel("Boards Menu", ()=>
{
    let loginPage : LoginPage;
    let actionItemPage: ActionItemsPage;
    let mentionsPage: MentionsPage;
    //before hook
    test.beforeEach(async ({page})=>
    {
        loginPage = new LoginPage(page);
        actionItemPage= new ActionItemsPage(page);
        mentionsPage = new MentionsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("an.tan_ta@mail.ru", "czM6MEOY3FfH9zj9AzI9");
    });

    test("Check Items Menu Options", async ({page})=>
    {
        await actionItemPage.openActionItemsPage();
        const actionItemsTitle= page.locator("[data-qa=action-items-title]");
        await expect(actionItemsTitle).toHaveText("Action Items");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/action_items");
    });
    
    test("Check Mentions Menu Options", async ({page})=>
    {
        await mentionsPage.openMentionsPage();
        const mentionsTitle= page.locator("[data-qa=mentions-title]");
        await expect(mentionsTitle).toHaveText("Mentions");
        await expect(page).toHaveURL("https://myretro-stg.tochkavhoda.ru/mentions");
    });
});