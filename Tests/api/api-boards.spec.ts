import {test, expect, request} from "@playwright/test";

let boardId: number;

test.describe.parallel("Boards API endpoints testing", () =>
{ 
    test("Add new board", async({request}) =>
    {
        const response = await request.post("boards", { data: 
            {"name": "API test board",
            "templateId": 1,
            "description": "API test board description"
            }});

            const responseBody = JSON.parse(await response.text());
            console.log(responseBody);

            expect(response.status()).toBe(200);
            expect(responseBody.name).toBe("API test board");
            expect(responseBody.description).toBe("API test board description");
            expect(responseBody.columns[0].name).toBe("Good");
            expect(responseBody.columns[1].name).toBe("Bad");
            expect(responseBody.columns[2].name).toBe("Actions");

            boardId = responseBody.id;
            console.log("new board id:" + boardId);
    });

    test("Add new board with invalid template id", async({request}) =>
    {
        const response = await request.post("boards", { data: 
            {"name": "API test board",
            "templateId": 0,
            "description": "API test board description"
            }});

            const responseBody = JSON.parse(await response.text());
            console.log(responseBody);

            expect(response.status()).toBe(400);
            expect(responseBody.error).toBe("Bad Request");
            expect(responseBody.message).toBe("Invalid board template");
    });

    /*test("Delete existing board", async({request}) =>
    {
        const response = await request.delete(`boards/${boardId}`);
        console.log("deleted board ID: " + boardId);
        expect(response.status()).toBe(200);
    });*/
});

test.afterAll(async ({request})=>
{
    const response = await request.delete(`boards/${boardId}`);
    console.log("AfterAll boardId: " + boardId);
    expect(response.status()).toBe(200);
});