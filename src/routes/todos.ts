import { Elysia, t } from "elysia";

const todos = new Elysia({ prefix: "/todos" })
  .get("/", () => {
    return { todos: [] };
  })
  .post(
    "/",
    ({ body }) => {
      return { todo: body };
    },
    {
      body: t.Object({
        title: t.String(),
        completed: t.Optional(t.Boolean()),
      }),
    }
  )
  .get("/:id", ({ params: { id } }) => {
    return { id, title: "Sample Todo" };
  })
  .put(
    "/:id",
    ({ params: { id }, body }) => {
      return { id, ...body };
    },
    {
      body: t.Object({
        title: t.Optional(t.String()),
        completed: t.Optional(t.Boolean()),
      }),
    }
  )
  .delete("/:id", ({ params: { id } }) => {
    return { deleted: id };
  });

export default todos;
