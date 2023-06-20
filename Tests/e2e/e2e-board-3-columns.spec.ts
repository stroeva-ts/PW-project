import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";
import { Board } from "../../page-objects/Board";

test.describe.parallel("Work With 3 Columns Board", ()=>
{
    let loginPage : LoginPage;
    let myBoardsPage : MyBoardsPage;
    let board : Board;
    //before hook
    test.beforeEach(async ({page})=>
    {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        board = new Board(page);
        await loginPage.visitMyRetro();
        await loginPage.login("an.tan_ta@mail.ru", "czM6MEOY3FfH9zj9AzI9");

        await myBoardsPage.fillNewBoardForm("Test project 123", 3, "Good - Bad - Actions");
        await myBoardsPage.clickStartRetroButton();

        await expect(page).toHaveURL(/board/);
    });

    test.afterEach(async ({page})=>
    {
        await loginPage.visitMyRetro();
        const deleteButton = page.locator(".row.content > div:nth-child(2)>div> div.row.actions > a:nth-child(1)").getByText("DELETE");
        await deleteButton.click();
        await page.getByRole("button", {name:"Yes"}).click();
    });

    test("Add New Card In Good Column", async ({page})=>
    {
        await board.addNewCardGood("test content");
        const cardContent = page.locator(".row .content");
        await expect(cardContent).toHaveText("test content");
    });
});