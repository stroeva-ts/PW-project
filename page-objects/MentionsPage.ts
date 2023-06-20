import { expect, Locator, Page } from "@playwright/test";

export class MentionsPage
{
    readonly page: Page;
    readonly hamburgerCheckbox: Locator;
    readonly mentionsOption: Locator;

constructor(page:Page)
    {
        this.page = page;
        this.hamburgerCheckbox = page.locator(".hamburger-checkbox");
        this.mentionsOption = page.locator("[data-qa=mentions-option]");
    };

    async openMentionsPage()
    {
        await this.hamburgerCheckbox.click();
        await this.mentionsOption.click();
    }
};
