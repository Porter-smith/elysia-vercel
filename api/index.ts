// eslint-disable-next-line
// @ts-expect-error

import app from "../dist/src/index.js";
import type { Elysia } from "elysia";

// Uncomment this to use edge runtime
// export const runtime = "edge";

// help from hono <3:
// https://github.com/honojs/hono/blob/main/src/adapter/vercel/handler.ts
export const handle =
  (app: Elysia) =>
  (req: Request): Response | Promise<Response> => {
    return app.handle(req);
  };
const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
