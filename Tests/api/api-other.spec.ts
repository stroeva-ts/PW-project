import {test, expect, request} from "@playwright/test";

test.describe.parallel("Other API endpoints testing", () =>
{ 
    test("Get info about user", async({request}) =>
    {
        const response = await request.get("me");

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.id).toBe(384);
        expect(responseBody.username).toBe("an.tan_ta");
        expect(responseBody.email).toBe("an.tan_ta@mail.ru");
        expect(responseBody.position.id).toBe(2);
    });

    test("Return template of board parameters", async({request}) =>
    {
        const response = await request.get("templates");
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody[0].columns[0].name).toBe("Good");
    });

});