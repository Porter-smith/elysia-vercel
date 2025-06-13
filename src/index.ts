import { Elysia } from "elysia";
import todos from "@/routes/todos";

const app = new Elysia().get("/", () => "Hello Elysia").use(todos);

export default app;
