import { expect, Locator, Page } from "@playwright/test";

export class Profile
{
    readonly page: Page;
    readonly hamburgerCheckbox: Locator;
    readonly profileOption: Locator;
    
    constructor(page:Page)
    {
        this.page = page;
        this.hamburgerCheckbox = page.locator(" .hamburger-checkbox");
        this.profileOption = page.locator("[data-qa=profile-option]");

    };

    async openProfileOption()
    {   
        await this.hamburgerCheckbox.click();
        await this.profileOption.click();
    };

};