# Elysia on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Porter-smith/elysia-vercel)

A ready-to-deploy template for Elysia on Vercel with the following features:
- Elysia
- Bun
- Eslint, Prettier, TypeScript
- CI w/ GitHub Action
- E2E test suite on vercel previews
- Test Coverage

## Quick Start

### Development

Install dependencies:

```bash
bun install
```

Start development server:

```bash
bun run dev
```

Visit http://localhost:3000 to see the result.

### Production

Build the project:

```bash
bun run build
```

Start production server:

```bash
bun start
```

### Manual Deployment

Deploy using Vercel CLI:

```bash
vercel
```

## Credits

Inspired by:
- [kozeki-template](https://github.com/SaltyAom/kozeki-template)
- [Elysia Build For Production](https://elysiajs.com/tutorial.html#build-for-production)
- [Hono Vercel Adapter](https://github.com/honojs/hono/blob/main/src/adapter/vercel/handler.ts)
- [Vercel E2E Testing Guide](https://vercel.com/guides/how-can-i-run-end-to-end-tests-after-my-vercel-preview-deployment)