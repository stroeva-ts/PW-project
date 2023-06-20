import { expect, Locator, Page } from "@playwright/test";

export class ActionItemsPage
{
    readonly page: Page;
    readonly hamburgerCheckbox: Locator;
    readonly actionItemsOption: Locator;

constructor(page:Page)
    {
        this.page = page;
        this.hamburgerCheckbox = page.locator(".hamburger-checkbox");
        this.actionItemsOption = page.locator("[data-qa=action-items-option]");
    };

    async openActionItemsPage()
    {
        await this.hamburgerCheckbox.click();
        await this.actionItemsOption.click();
    }
};