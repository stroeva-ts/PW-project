import { expect, Locator, Page } from "@playwright/test";

export class LoginPage
{
    readonly page: Page;
    readonly sighinLink: Locator;
    readonly emailField: Locator;
    readonly PasswordField: Locator;
    readonly loginButton: Locator;
    readonly errorMassage: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.sighinLink = page.locator(" .signin");
        this.emailField = page.locator("#email");
        this.PasswordField = page.locator("#password");
        this.loginButton = page.locator(" .button-login");
        this.errorMassage = page.locator("text=Error: Authentication failed: Wrong login or password");
    };

    async visitMyRetro()
    {
        await this.page.goto("https://myretro-stg.tochkavhoda.ru/");
    };

    async login(email:string, password:string)
    {   
        await this.sighinLink.click();
        await this.emailField.type(email);
        await this.PasswordField.type(password);
        await this.loginButton.click();
    };

    async assertErrorMassage()
    {
        await expect(this.errorMassage).toContainText("Error: Authentication failed: Wrong login or password");
    };
};
