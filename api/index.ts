// @ts-expect-error - Missing type declarations for compiled JavaScript
import app from "../dist/src/index.js";

export const GET = app.handle;
export const POST = app.handle;
export const PATCH = app.handle;
export const PUT = app.handle;
export const OPTIONS = app.handle;

// Uncomment to use edge runtime
// export const runtime = "edge";
