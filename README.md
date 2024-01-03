# Starter Kit

A technical kit to quickly build new products from
[Open Government Products](https://open.gov.sg), Singapore.

## Features

- 🧙‍♂️ E2E typesafety with [tRPC](https://trpc.io)
- ⚡ Full-stack React with Next.js
- 🌈 Database with Prisma
- 🪳 [Neon](https://neon.tech/)
- 🌇 Image upload with [R2](https://developers.cloudflare.com/r2/)
- ⚙️ VSCode extensions
- 🎨 ESLint + Prettier
- 💚 CI setup using GitHub Actions:
  - ✅ E2E testing with [Playwright](https://playwright.dev/)
  - ✅ Linting
- 🔐 Env var validation

## Quickstart

Follow these instructions if you are familiar with building applications,
and/or are in a hurry to prepare an environment to work on your product.

If you are new, see our [Getting Started guide](https://opengovsg.github.io/starter-kit-docs/docs/getting-started/prerequisites).

If you are exploring what else you can do with Starter Kit,
a more comprehensive set of documentation, including guides
and tutorials, can be found [here](https://opengovsg.github.io/starter-kit-docs/).

### One-click deploy

We recommend [Vercel](https://vercel.com) to deploy your application.
A one-click deployment step is provided [below](#deployment), which will
also set up your own copy of this codebase on GitHub for you to work on.

This needs a few prerequisites, detailed below.

#### Prerequisites

The deployment needs a few environment variables to be set for it to function. They are:

| Name              | What It Is                                                                                                              | Example                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `DATABASE_URL`    | The connection string for your database. This should have been obtained from Neon                                       | postgresql://user:pass@xyz.ap-southeast-1.aws.neon.tech/app?sslmode=require |
| `POSTMAN_API_KEY` | An API key to send email via Postman                                                                                    | asdfn_v1_6DBRljleevjsd9DHPThsKDVDSenssCwW9zfA8W2ddf/T                       |
| `SESSION_SECRET`  | A sequence of random characters used to protect session identifiers, generated by running `npx uuid` from your terminal | 66a21b98-fb17-4259-ac4f-e94d303ac894                                        |

#### Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fopengovsg%2Fstarter-kit%2Ftree%2Fmain&env=SESSION_SECRET)

## Working on your product

You may work on the codebase with:

- A [GitHub Codespace](#using-github-codespaces) provided by us, or;
- With your [local machine](#using-your-local-developer-environment).

### Using GitHub Codespaces

Follow the official GitHub [guide](https://docs.github.com/en/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)
for developing with a codespace.

### Using your local developer environment

In summary:

- Clone the repository to your local machine
- Follow instructions for [running the app locally](#running-the-app-locally)

## Running the app locally

### Install dependencies

```bash
npm i
```

### Set environment variables

```bash
cp .env.example .env.development.local
```

Optionally set `POSTMAN_API_KEY` to send login OTP emails via [Postman](https://postman.gov.sg).
If not set, OTP emails will be logged to the console instead.e

#### Retrieving client-side environment variables in code

⚠️ When adding client-only environment variables in NextJS, you must prefix the variable with `NEXT_PUBLIC_` to ensure that the variable is exposed to the browser. For example, if you want to add a variable called `MY_ENV_VAR`, you should add it to your `.env` file as `NEXT_PUBLIC_MY_ENV_VAR`.

You will also need to update [src/env.mjs](src/env.mjs#L17) to explicitly reference the variable so NextJS will correctly bundle the environment variable into the client-side bundle.

### Start database

```bash
# Assumes that you have previously copied .env.example to .env.development.local
export $(grep DATABASE_URL .env.development.local | xargs) && npm run setup
```

### Start server

```bash
npm run dev
```

## Developer Operations

> TODO: CI/CD test with GitHub Actions

> TODO: Github branch protection rules

# Useful notes

## Commands

```bash
npm run build      # runs `prisma generate` + `prisma migrate` + `next build`
npm run db:reset   # resets local db
npm run dev        # starts next.js
npm run setup      # starts postgres db + runs migrations + seed
npm run test-dev   # runs e2e tests on dev
npm run test-start # runs e2e tests on `next start` - build required before
npm run test:unit  # runs normal Vitest unit tests
npm run test:e2e   # runs e2e tests
```

## Files of note

<table>
  <thead>
    <tr>
      <th>Path</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="./prisma/schema.prisma"><code>./prisma/schema.prisma</code></a></td>
      <td>Prisma schema</td>
    </tr>
    <tr>
      <td><a href="./src/pages/api/trpc/[trpc].ts"><code>./src/pages/api/trpc/[trpc].ts</code></a></td>
      <td>tRPC response handler</td>
    </tr>
    <tr>
      <td><a href="./src/server/routers"><code>./src/server/routers</code></a></td>
      <td>Your app's different tRPC-routers</td>
    </tr>
  </tbody>
</table>

---
