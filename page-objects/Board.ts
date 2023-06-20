import { expect, Locator, Page } from "@playwright/test";

export class Board
{
    readonly page: Page;
    readonly buttonGood: Locator;
    readonly cardContent: Locator;
   

    constructor(page:Page)
    {
        this.page = page;
        this.buttonGood= page.getByRole("button",{name:"Good"});
        this.cardContent = page.locator(".row .content");
    };

    async addNewCardGood(Content:string)
    {   
        await this.buttonGood.click();
        await this.cardContent.type(Content);
        await this.page.keyboard.press("Enter");
    };
};