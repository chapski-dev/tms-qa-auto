/* #### Task 1 💻
- Написать минимум 10 API тестов для разных HTTP методов. За источник можно брать сайт https://reqres.in/ или любой другой сайт с открытым API. Использовать Jest + superAgent

*Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны* */

import superagent from "superagent";
import JSON = Mocha.reporters.JSON;

describe("Check get SINGLE USER", () => {
  test("Test#1", async () => {
    const res = await superagent.get("https://reqres.in/api/users/2");
    expect(res.status).toBe(200);
  });
});

describe("Check get LIST USERS", () => {
  test("Test#2", async () => {
    let res: any;
    try {
      res = await superagent.get("https://reqres.in/api/users?page=2");
    } catch (error: any) {
      throw new Error("Test#2 failed");
    }
    expect(res.status).toBe(200);
  });
});

describe("Check get LIST USERS by id", () => {
  test("Test#3", async () => {
    let res: any;
    try {
      res = await superagent.get("https://reqres.in/api/users?page=2").query({ id: 8 });
    } catch (error: any) {
      throw new Error("Test#3 failed");
    }
    expect(res.status).toBe(200);
  });
});

describe("Check post REGISTER - SUCCESSFUL", () => {
  test("Test#4", async () => {
    let res: any;
    try {
      res = await superagent.post("https://reqres.in/api/register").set("content-type", "application/json").send({
        email: "eve.holt@reqres.in",
        password: "pistol",
      });
    } catch (error: any) {
      throw new Error("Test#4 failed");
    }
    expect(res.status).toBe(200);
  });
});

describe("Check post REGISTER - UNSUCCESSFUL", () => {
  test("Test#5", async () => {
    let res: any;
    try {
      res = await superagent.post("https://reqres.in/api/register").set("content-type", "application/json").send({
        email: "sydney@fife",
      });
    } catch (error: any) {
      throw new Error("Test#5 failed");
    }
    expect(res.status).toBe(400);
  });
});

describe("Check post LOGIN - SUCCESSFUL", () => {
  test("Test#6", async () => {
    let res: any;
    try {
      res = await superagent.post("https://reqres.in/api/login").set("content-type", "application/json").send({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
    } catch (error: any) {
      throw new Error("Test#6 failed");
    }
    expect(res.status).toBe(200);
  });
});

describe("Check post LOGIN - SUCCESSFUL", () => {
  test("Test#7", async () => {
    let res: any;
    try {
      res = await superagent.post("https://reqres.in/api/login").set("content-type", "application/json").send({
        email: "peter@klaven",
      });
    } catch (error: unknown) {
      throw new Error(error as string);
    }
    expect(res.status).toBe(400);
  });
});

describe("Check DELETE Request", () => {
  test("Test#8", async () => {
    let res: any;
    try {
      res = await superagent.delete("https://reqres.in/api/users/2");
    } catch (error: any) {
      throw new Error(error);
    }
    expect(res.status).toBe(204);
  });
});

describe("Check PATCH Request", () => {
  test("Test#9", async () => {
    let res: any;
    try {
      res = await superagent.patch("https://reqres.in/api/users/2").set("content-type", "application/json").send({
        name: "morpheus",
        job: "zion resident",
      });
    } catch (error: any) {
      throw new Error(error);
    }
    expect(res.status).toBe(200);
  });
});

describe("Check PUT Request", () => {
  test("Test#10", async () => {
    let res: any;
    try {
      res = await superagent.put("https://reqres.in/api/users/2").set("content-type", "application/json").send({
        name: "morpheus",
        job: "zion resident",
      });
    } catch (error: any) {
      throw new Error(error);
    }
    expect(res.status).toBe(200);
  });
});
