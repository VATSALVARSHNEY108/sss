import { NextResponse } from 'next/server';

const GROQ_CHAT_URL = process.env.GROQ_CHAT_URL || 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';

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

export async function POST(request: Request) {
  let body: any;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid JSON payload.' }, { status: 400 });
  }

  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ detail: 'messages must be a non-empty array.' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY?.trim() || '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';
  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    return NextResponse.json(
      { detail: 'Groq API key is missing or invalid. Set GROQ_API_KEY in environment variables.' },
      { status: 503 }
    );
  }

  const normalizedMessages = messages
    .map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: typeof m.content === 'string' ? m.content.trim() : '',
    }))
    .filter((m: any) => m.content);

  const payload = {
    model: DEFAULT_MODEL,
    temperature: 0.4,
    max_tokens: 350,
    messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...normalizedMessages],
  };

  try {
    const groqResponse = await fetch(GROQ_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await groqResponse.text();
    let data: any = {};
    try {
      data = JSON.parse(text);
    } catch {
      // Ignore non-JSON
    }

    if (!groqResponse.ok) {
      const detail = data?.error?.message || data?.detail || text || 'The chat provider returned an error.';
      return NextResponse.json({ detail }, { status: groqResponse.status });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({ detail: 'The chat provider returned an empty reply.' }, { status: 502 });
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { detail: `Failed to communicate with Groq: ${msg}` },
      { status: 502 }
    );
  }
}
