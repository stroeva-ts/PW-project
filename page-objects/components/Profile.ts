import { expect, Locator, Page } from "@playwright/test";

export class Profile
{
    readonly page: Page;
    readonly hamburgerCheckbox: Locator;
    readonly profileOption: Locator;
    readonly buttonCancel: Locator;
    readonly buttonSubmit: Locator;
    readonly fieldFirstName: Locator;
    readonly fieldLastName: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.hamburgerCheckbox = page.locator(" .hamburger-checkbox");
        this.profileOption = page.locator("[data-qa=profile-option]");
        this.buttonCancel = page.locator("[data-qa=profile-cancel-button]");
        this.buttonSubmit = page.locator("[data-qa=profile-submit-button]");
        this.fieldFirstName = page.locator("#first-name");
        this.fieldLastName = page.locator("#last-name");
    };

    async openProfileOption()
    {   
        await this.hamburgerCheckbox.click();
        await this.profileOption.click();
    };

    async ckickButtonCancel()
    {   
        await this.buttonCancel.click();
    };

    async ckickButtonSubmit()
    {   
        await this.buttonSubmit.click();
    };

    async fillFirstName(firstName:string)
    {   
        await this.fieldFirstName.fill(firstName);
    };

    async fillLastName(lastName:string)
    {   
        await this.fieldLastName.fill(lastName);
    };

};