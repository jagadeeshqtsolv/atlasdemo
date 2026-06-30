# UKG Atlas — Playwright web framework

Generated and maintained by Autonix

## Quick start

```bash
npm install
npm test                      # uses environments/qa.json
TEST_ENV=staging npm test     # uses environments/staging.json
```

## Environments

All run-time settings live in `environments/<name>.json`.
The active environment is selected by the `TEST_ENV` shell variable (default: `qa`).

Edit `environments/qa.json` to match your test target:

| Key             | Default                  | Description                              |
| --------------- | ------------------------ | ---------------------------------------- |
| `baseURL`       | https://example.com      | Application under test                   |
| `username`      | admin@example.com        | Login credential (used in tests via testData) |
| `password`      | changeme                 | Login credential                         |
| `browser`       | chromium                 | chromium \| firefox \| webkit           |
| `headless`      | true                     | Run without visible browser              |
| `timeout`       | 30000                    | Test timeout (ms)                        |
| `actionTimeout` | 10000                    | Per-action timeout (ms)                  |
| `retries`       | 0                        | Retries on failure                       |
| `fullyParallel` | false                    | Run all tests in parallel                |
| `workers`       | 1                        | Parallel workers                         |
| `video`         | retain-on-failure        | off \| on \| retain-on-failure          |
| `trace`         | retain-on-failure        | off \| on \| retain-on-failure          |
| `screenshot`    | only-on-failure          | off \| on \| only-on-failure            |

## Layout

| Path | Purpose |
| ---- | ------- |
| `pageobjects/` | Page-object classes |
| `support/fixtures.ts` | Re-exports `test` from `@automation-ai/web-support` |
| `support/web-locate.ts` | Re-exports locator helpers from `@automation-ai/web-support` |
| `support/web-actions.ts` | Re-exports action helpers from `@automation-ai/web-support` |
| `tests/` | Executable Playwright specs |
| `utils/data-utils.ts` | Random data generators (faker) |
| `testdata/test-data.json` | Static test fixtures |
| `environments/qa.json` | Default QA environment config |
| `playwright.config.ts` | Runner config — reads from `environments/<TEST_ENV>.json` |
| `logs/` | JSON + HTML reports |

## Using random data in tests

```typescript
import { dataUtils } from "../utils/data-utils.js";

const email    = dataUtils.email();
const password = dataUtils.password(16);
const name     = dataUtils.fullName();
```

## Using static test data

```typescript
import testData from "../testdata/test-data.json";

const { email, password } = testData.users.admin;
```

## Reading env config in tests

```typescript
import { readFileSync } from "node:fs";
import path from "node:path";

const env = JSON.parse(
  readFileSync(path.join(__dirname, "../environments/qa.json"), "utf8"),
);
// env.username, env.password, env.baseURL …
```

## Record a page from the browser

1. Set `baseURL` in `environments/qa.json`.
2. In the UI **Browser recorder**, click **Open browser & capture**.
3. Navigate, then **Resume** in the Playwright Inspector.
4. Parse elements, name the page (e.g. Login), and save.
