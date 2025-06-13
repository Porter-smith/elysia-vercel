import { describe, expect, it } from "bun:test";
import app from "@/index";

const BASE_URL = process.env.BASE_URL || "http://localhost";

describe("Todos API", () => {
  it("should get empty todos list", async () => {
    const response = await app.handle(new Request(`${BASE_URL}/todos`));
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ todos: [] });
  });

  it("should create a new todo", async () => {
    const response = await app.handle(
      new Request(`${BASE_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test Todo" }),
      })
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.todo).toEqual({ title: "Test Todo" });
  });

  it("should get a todo by id", async () => {
    const response = await app.handle(new Request(`${BASE_URL}/todos/1`));
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ id: "1", title: "Sample Todo" });
  });

  it("should update a todo", async () => {
    const response = await app.handle(
      new Request(`${BASE_URL}/todos/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Updated Todo", completed: true }),
      })
    );
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ id: "1", title: "Updated Todo", completed: true });
  });

  it("should delete a todo", async () => {
    const response = await app.handle(new Request(`${BASE_URL}/todos/1`, { method: "DELETE" }));
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toEqual({ deleted: "1" });
  });
});
