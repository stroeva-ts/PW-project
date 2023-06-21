import {test, expect, request} from "@playwright/test";

test.describe.parallel("API tests", () =>
{ 
    test("First API test", async({request}) =>
    {
        const response = await request.get("me");
        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
    });
});