import { describe, expect, it } from "bun:test";
import app from "./index";

describe("App", () => {
  it("should return Hello Elysia on root route", async () => {
    const response = await app.handle(new Request("http://localhost/"));
    const text = await response.text();
    expect(text).toBe("Hello Elysia");
  });
});
