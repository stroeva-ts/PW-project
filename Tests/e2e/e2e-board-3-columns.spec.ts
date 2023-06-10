import {test, expect} from "@playwright/test";

test.describe.parallel("Work With 3 Columns Board", ()=>
{
    //before hook
    test.beforeEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
        await page.click(".signin");
        await page.type("#email", "an.tan_ta@mail.ru");
        await page.type("#password", "czM6MEOY3FfH9zj9AzI9");
        await page.click(".button-login");

        await page.click("[data-qa=add-new-board]");
        await page.type("[data-qa=new-board-project-name]","Test project 123");
        await page.click("[data-qa=new-board-columns-number]");
        await page.click("text=- 3 -");
        await page.click("[data-qa=new-board-column-names]");
        await page.click("text=- 3 - Good - Bad - Actions");
        await page.click("[data-qa=start-retro-button]");
        await expect(page).toHaveURL(/board/);
    });

    test.afterEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
        const deleteButton = page.locator(".row.content > div:nth-child(2)>div> div.row.actions > a:nth-child(1)").getByText("DELETE");
        await deleteButton.click();
        await page.getByRole("button", {name:"Yes"}).click();
    });

    test("Add New Card In Good Column", async ({page})=>
    {
        await page.getByRole("button",{name:"Good"}).click();
        await page.type(".row .content","test content");
        await page.keyboard.press("Enter");

        const cardContent = page.locator(".row .content");
        await expect(cardContent).toHaveText("test content");
    });
});