import { readFileSync } from 'node:fs';
import path from 'node:path';

// Selects the active environment JSON: TEST_ENV=staging npm test (default: qa)
const envName = process.env.TEST_ENV ?? process.env.AUTOM_ENVIRONMENT ?? 'qa';
let env: Record<string, string> = {};
try {
  const raw = readFileSync(path.join(__dirname, '..', 'environments', `${envName}.json`), 'utf8');
  env = JSON.parse(raw) as Record<string, string>;
} catch {
  console.warn(`[env] environments/${envName}.json not found — using empty config`);
}

export default env;
