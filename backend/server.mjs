import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '.env');
const PORT = Number(process.env.PORT || 8000);
const DEFAULT_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const DEFAULT_CHAT_URL = process.env.GROQ_CHAT_URL || 'https://api.groq.com/openai/v1/chat/completions';
const SYSTEM_PROMPT = `You are Whobee, the official AI assistant for SkillYug Technologies.

Company Information & Knowledge Base:
- Company Name: SkillYug Technologies
- What is SkillYug Technologies: SkillYug Technologies is an AI-first software engineering and digital innovation company building AI solutions, autonomous AI agents, enterprise software platforms, SaaS products, intelligent business automation systems, custom web/mobile applications, and scalable cloud infrastructure.
- Creator / Founder: Vinayak Pandey (Founder & Chief AI Architect)
- Lead Developer: Vatsal Varshney (Lead Software & AI Engineer)
- Key Products:
  1. THINK++ - Advanced cognitive AI engine for predictive analytics & deep reasoning (https://anuji.vercel.app/).
  2. AI Evaluate - Enterprise AI answer sheet evaluation & grading platform (https://ai-evaluaite-1.onrender.com/).
  3. PostPilot AI - Autonomous social content generation & multi-channel marketing engine.
  4. HashBoost AI - AI search engine optimization & hashtag intelligence platform (https://viral-tag-ai.lovable.app/).
  5. B.O.I. Mark-1 - AI-powered desktop automation framework with 300+ intelligent features.
- Key Non-Profit Project: HaarWala.org NGO Website (https://haarwala.org).
- Main Service Pillars: AI Automation, Autonomous AI Agents, Custom Software Engineering, SaaS Development, Web & Mobile Applications, Cloud Solutions (AWS/Azure/GCP), DevOps, UI/UX Design.
- Contact Details: Email: consultantskillyug@gmail.com | Start a Project: https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1

Response Guidelines:
- Be concise, friendly, practical, and highly helpful.
- When asked about SkillYug, state what it is clearly. When asked who created or founded SkillYug, credit Vinayak Pandey (Founder & Chief AI Architect). When asked who developed or engineered Whobee / SkillYug, credit Vatsal Varshney (Lead Software & AI Engineer).
- Direct users to https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1 or consultantskillyug@gmail.com for consultations, quotes, and project discussions.`;

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
    // No local env file is fine; the server can still use process.env.
  }
}

function jsonResponse(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
}

function textResponse(res, statusCode, body, contentType = 'text/plain; charset=utf-8') {
  res.writeHead(statusCode, { 'Content-Type': contentType });
  res.end(body);
}

function getAllowedOrigins() {
  return (process.env.CHAT_ALLOWED_ORIGINS || 'http://localhost:3000,http://localhost:3001')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function withCors(res, origin) {
  const allowedOrigins = getAllowedOrigins();
  const resolvedOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || '*';

  res.setHeader('Access-Control-Allow-Origin', resolvedOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
}

function getGroqApiKey() {
  const apiKey = (process.env.GROQ_API_KEY || '').trim();
  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    return null;
  }
  return apiKey;
}

async function probeExistingBackend(port) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1000);

  try {
    const response = await fetch(`http://127.0.0.1:${port}/health`, {
      signal: controller.signal,
    });
    if (!response.ok) return null;

    const data = await response.json().catch(() => null);
    if (data && data.status === 'ok') {
      return data;
    }
    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) {
    return null;
  }

  const normalized = [];
  for (const message of messages) {
    if (!message || typeof message !== 'object') return null;
    const role = message.role;
    const content = typeof message.content === 'string' ? message.content.trim() : '';
    if ((role !== 'user' && role !== 'assistant') || !content) return null;
    normalized.push({ role, content });
  }
  return normalized;
}

async function handleChat(req, res) {
  const apiKey = getGroqApiKey();
  if (!apiKey) {
    jsonResponse(res, 503, {
      detail: 'Groq is not configured. Set a real GROQ_API_KEY in backend/.env.',
    });
    return;
  }

  let body;
  try {
    body = await readRequestBody(req);
  } catch {
    jsonResponse(res, 400, { detail: 'Invalid JSON payload.' });
    return;
  }

  const normalizedMessages = normalizeMessages(body.messages);
  if (!normalizedMessages) {
    jsonResponse(res, 400, {
      detail: 'messages must be a non-empty array of user/assistant messages.',
    });
    return;
  }

  const payload = {
    model: DEFAULT_MODEL,
    temperature: 0.4,
    max_tokens: 350,
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...normalizedMessages],
  };

  try {
    const response = await fetch(DEFAULT_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      let errorDetail = text;
      try {
        const parsed = JSON.parse(text);
        if (parsed?.error?.message) {
          errorDetail = parsed.error.message;
        }
      } catch {}
      jsonResponse(res, response.status || 502, { detail: errorDetail || 'The chat provider is unavailable.' });
      return;
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      jsonResponse(res, 502, { detail: 'The chat provider returned an empty reply.' });
      return;
    }

    jsonResponse(res, 200, { reply });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`Chat provider error: ${errorMsg}`);
    jsonResponse(res, 502, { detail: `The chat provider is unavailable: ${errorMsg}` });
  }
}

async function main() {
  await loadEnvFile();

  const existingBackend = await probeExistingBackend(PORT);
  if (existingBackend) {
    console.log(`Whobee backend is already running on http://localhost:${PORT}`);
    return;
  }

  const server = http.createServer((req, res) => {
    const origin = req.headers.origin || '';
    withCors(res, origin);

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    if (req.method === 'GET' && req.url === '/health') {
      const apiKey = getGroqApiKey();
      jsonResponse(res, 200, {
        status: 'ok',
        groq: apiKey ? 'configured' : 'missing_api_key',
      });
      return;
    }

    if (req.method === 'GET' && req.url === '/') {
      jsonResponse(res, 200, {
        status: 'ok',
        message: 'Whobee backend is running.',
        endpoints: {
          health: '/health',
          chat: '/chat',
        },
      });
      return;
    }

    if (req.method === 'POST' && req.url === '/chat') {
      void handleChat(req, res);
      return;
    }

    jsonResponse(res, 404, { detail: 'Not found.' });
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(PORT, () => {
      console.log(`Whobee backend listening on http://localhost:${PORT}`);
      resolve();
    });
  }).catch((error) => {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. If Whobee is already running, keep using it. Otherwise stop the other process and try again.`);
      process.exitCode = 1;
      return;
    }
    throw error;
  });
}

await main();
