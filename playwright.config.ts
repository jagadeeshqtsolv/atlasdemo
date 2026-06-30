import { defineConfig, devices } from "@playwright/test";
import { readFileSync } from "node:fs";
import path from "node:path";

// Select environment: TEST_ENV=staging npm test  (default: qa)
// AUTOM_ENVIRONMENT is set by the Autonix CI workflow.
const envName = process.env.TEST_ENV || process.env.AUTOM_ENVIRONMENT || "qa";

let env: Record<string, unknown> = {};
try {
  env = JSON.parse(
    readFileSync(path.join(__dirname, "environments", `${envName}.json`), "utf8"),
  ) as Record<string, unknown>;
} catch {
  console.warn(`[playwright] environments/${envName}.json not found — using built-in defaults`);
}

const browser = (String(env.browser ?? "chromium")) as "chromium" | "firefox" | "webkit";

// Disable web security and sandbox restrictions in CI environments
const isCI = Boolean(process.env.CI);

function browserDevice(b: "chromium" | "firefox" | "webkit") {
  switch (b) {
    case "firefox": return { ...devices["Desktop Firefox"] };
    case "webkit":  return { ...devices["Desktop Safari"] };
    default:        return { ...devices["Desktop Chrome"] };
  }
}

export default defineConfig({
  testDir: "./tests",
  timeout:       Number(env.timeout       ?? 30000),
  retries:       Number(env.retries        ?? 0),
  fullyParallel: Boolean(env.fullyParallel ?? false),
  workers:       Number(env.workers        ?? 1),
  use: {
    baseURL:       String(env.baseURL       ?? "https://example.com"),
    headless:      env.headless !== false,
    trace:         (String(env.trace        ?? "retain-on-failure")) as "off" | "on" | "retain-on-failure" | "on-all-retries",
    video:         (String(env.video        ?? "retain-on-failure")) as "off" | "on" | "retain-on-failure" | "on-first-retry",
    screenshot:    (String(env.screenshot   ?? "only-on-failure"))  as "off" | "on" | "only-on-failure",
    actionTimeout: Number(env.actionTimeout ?? 10000),
    launchOptions: {
      args: isCI
        ? [
            "--disable-web-security",
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
          ]
        : [],
    },
  },
  projects: [
    { name: browser, use: browserDevice(browser) },
  ],
  reporter: process.env.AUTOM_EXECUTION_PROVIDER === "browserstack"
    ? [["list"], ["json", { outputFile: "logs/playwright-report.json" }]]
    : [["list"], ["html", { open: "never" }], ["json", { outputFile: "logs/playwright-report.json" }]],
});
