import {test, expect} from "@playwright/test";

test.describe.parallel("My Boards Page", ()=>
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

    test.afterEach(async ({page})=>
    {
        await page.goto("https://myretro-stg.tochkavhoda.ru/");
        const deleteButton = page.locator(".row.content > div:nth-child(2)>div> div.row.actions > a:nth-child(1)").getByText("DELETE");
        await deleteButton.click();
        await page.getByRole("button", {name:"Yes"}).click();
    });

    test("Create New Board With Three Columns", async ({page})=>
    {
        await page.click("[data-qa=add-new-board]");
        await page.type("[data-qa=new-board-project-name]","Test project");
        await page.click("[data-qa=new-board-columns-number]");
        await page.click("text=- 3 -");
        await page.click("[data-qa=new-board-column-names]");
        await page.click("text=- 3 - Good - Bad - Actions");
        await page.click("[data-qa=start-retro-button]");
        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test project");
        await expect(page).toHaveURL(/board/);
    });

    test("Create New Board With Four Columns", async ({page})=>
    {
        await page.click("[data-qa=add-new-board]");
        await page.type("[data-qa=new-board-project-name]","Test project");
        await page.click("[data-qa=new-board-columns-number]");
        await page.click("text=- 4 -");
        await page.click("[data-qa=new-board-column-names]");
        await page.click("text=- 4 - Good - Bad - Keep - Actions");
        await page.click("[data-qa=start-retro-button]");
        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test project");
        await expect(page).toHaveURL(/board/);
    });
});