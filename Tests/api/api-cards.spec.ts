import {test, expect, request} from "@playwright/test";

let cardId: number;
let columnId: number;
let boardId: number;

test.describe.parallel.only("Cards API endpoints testing", () =>
{ 
    test.beforeAll(async ({request})=>
    {
        const response = await request.post("boards", { data: 
            {"name": "API test board",
            "templateId": 1,
            "description": "API test board description"
            }});

            const responseBody = JSON.parse(await response.text());
            console.log(responseBody);
            expect(response.status()).toBe(200);

            columnId= responseBody.columns[0].id;
            console.log("new columnId:" + columnId);

            boardId = responseBody.id;
            console.log("new board id:" + boardId);
    });
    test("Add new card", async({request}) =>
    {
        const response = await request.post("cards", { data: 
            {
                "columnId": columnId,
                "content": "Card content"
            }});

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(200);
        expect(responseBody.content).toBe("Card content");

        cardId = responseBody.id;
        console.log("new card id:" + cardId);
    });
});

test.afterAll(async ({request})=>
{
    const response = await request.delete(`cards/${cardId}`);
    console.log("AfterAll cardId: " + cardId);
    expect(response.status()).toBe(200);
    const response1 = await request.delete(`boards/${boardId}`);
    console.log("AfterAll boardId: " + boardId);
    expect(response1.status()).toBe(200);
});