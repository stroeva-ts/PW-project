import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";

test.describe.parallel("My Boards Page", ()=>
{
    let loginPage : LoginPage;
    let myBoardsPage : MyBoardsPage;
    //before hook
    test.beforeEach(async ({page})=>
    {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("an.tan_ta@mail.ru", "czM6MEOY3FfH9zj9AzI9");
    });

    test.afterEach(async ({page})=>
    {
        await loginPage.visitMyRetro();
        const deleteButton = page.locator(".row.content > div:nth-child(2)>div> div.row.actions > a:nth-child(1)").getByText("DELETE");
        await deleteButton.click();
        await page.getByRole("button", {name:"Yes"}).click();
    });

    test("Create New Board With Three Columns", async ({page})=>
    {
        await myBoardsPage.fillNewBoardForm("Test project", 3, "Good - Bad - Actions");
        await myBoardsPage.clickStartRetroButton();

        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test project");
        await expect(page).toHaveURL(/board/);
    });

    test("Create New Board With Four Columns", async ({page})=>
    {
        await myBoardsPage.fillNewBoardForm("Test project", 4, "Good - Bad - Keep - Actions");
        await myBoardsPage.clickStartRetroButton();

        const boardTitle = page.locator("[data-qa=board-project-title]");
        await expect(boardTitle).toHaveText("Test project");
        await expect(page).toHaveURL(/board/);
    });
});