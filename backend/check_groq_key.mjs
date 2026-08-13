import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '.env');
const DEFAULT_URL = 'https://api.groq.com/openai/v1/models';
const DEFAULT_CHAT_URL = 'http://localhost:8000/chat';

function parseEnvLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return null;

  const equalsIndex = trimmed.indexOf('=');
  if (equalsIndex === -1) return null;

  const key = trimmed.slice(0, equalsIndex).trim();
  let value = trimmed.slice(equalsIndex + 1).trim();

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }

  return [key, value];
}

async function loadEnvFile() {
  try {
    const raw = await fs.readFile(envPath, 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const parsed = parseEnvLine(line);
      if (!parsed) continue;
      const [key, value] = parsed;
      if (process.env[key] === undefined) {
        process.env[key] = value;
      }
    }
  } catch {
    // No local env file is fine; the script can still use process.env.
  }
}

function getArgValue(flag, fallback) {
  const index = process.argv.indexOf(flag);
  if (index === -1) return fallback;
  return process.argv[index + 1] || fallback;
}

async function main() {
  await loadEnvFile();

  const apiKey = getArgValue('--api-key', process.env.GROQ_API_KEY?.trim() || '');
  const url = getArgValue('--url', DEFAULT_URL);
  const mode = getArgValue('--mode', 'models');
  const backendUrl = getArgValue('--backend-url', DEFAULT_CHAT_URL);
  const message = getArgValue('--message', 'Say hello in one short sentence.');

  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    console.error(
      'Groq API key is missing. Set GROQ_API_KEY in backend/.env or pass --api-key.'
    );
    process.exitCode = 2;
    return;
  }

  if (mode === 'chat') {
    let response;
    try {
      response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: message }],
        }),
      });
    } catch (error) {
      console.error(
        `Could not reach the backend chat route: ${error instanceof Error ? error.message : String(error)}`
      );
      process.exitCode = 3;
      return;
    }

    if (response.status === 200) {
      try {
        const payload = await response.json();
        console.log(`Backend chat works. Reply: ${payload?.reply ?? '(no reply field)'}`);
      } catch {
        console.log('Backend chat works.');
      }
      return;
    }

    const bodyPreview = (await response.text()).trim().replace(/\s+/g, ' ');
    console.error(
      `Backend chat check returned HTTP ${response.status}: ${bodyPreview.slice(0, 300)}`
    );
    process.exitCode = 1;
    return;
  }

  let response;
  try {
    response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    });
  } catch (error) {
    console.error(`Could not reach Groq: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 3;
    return;
  }

  if (response.status === 200) {
    try {
      const payload = await response.json();
      const modelCount = Array.isArray(payload?.data) ? payload.data.length : 'unknown';
      console.log(`Groq key works. Status 200. Models returned: ${modelCount}.`);
    } catch {
      console.log('Groq key works. Status 200.');
    }
    return;
  }

  if (response.status === 401) {
    console.error('Groq key failed authentication. Status 401.');
    process.exitCode = 1;
    return;
  }

  if (response.status === 403) {
    console.error('Groq key was rejected with 403 Forbidden.');
    process.exitCode = 1;
    return;
  }

  const bodyPreview = (await response.text()).trim().replace(/\s+/g, ' ');
  console.error(`Groq key check returned HTTP ${response.status}: ${bodyPreview.slice(0, 300)}`);
  process.exitCode = 1;
}

await main();
