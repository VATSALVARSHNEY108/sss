from __future__ import annotations

import os
from pathlib import Path
from typing import Literal

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


# Resolve the backend's own .env file instead of depending on the directory
# from which uvicorn happens to be started.
load_dotenv(dotenv_path=Path(__file__).resolve().parent / ".env")


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1, max_length=2000)


class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(min_length=1, max_length=20)


class ChatResponse(BaseModel):
    reply: str


app = FastAPI(title="SkillYug Whobee Chat API", version="1.0.0")

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "CHAT_ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:3001"
    ).split(",")
    if origin.strip()
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)


def get_groq_api_key() -> str:
    """Return a usable Groq key or raise a helpful configuration error."""
    api_key = os.getenv("GROQ_API_KEY", "").strip()
    if not api_key or api_key == "your_groq_api_key_here":
        raise HTTPException(
            status_code=503,
            detail="Groq is not configured. Set a real GROQ_API_KEY in backend/.env.",
        )
    return api_key

SYSTEM_PROMPT = """You are Whobee, the official AI assistant for SkillYug Technologies.

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
- Direct users to https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform?pli=1 or consultantskillyug@gmail.com for consultations, quotes, and project discussions.
"""


@app.get("/health")
async def health() -> dict[str, str]:
    api_key = os.getenv("GROQ_API_KEY", "").strip()
    configured = bool(api_key and api_key != "your_groq_api_key_here")
    return {"status": "ok", "groq": "configured" if configured else "missing_api_key"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    api_key = get_groq_api_key()
    model = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
    endpoint = os.getenv(
        "GROQ_CHAT_URL", "https://api.groq.com/openai/v1/chat/completions"
    )
    payload = {
        "model": model,
        "temperature": 0.4,
        "max_tokens": 350,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            *[message.model_dump() for message in request.messages],
        ],
    }

    try:
        async with httpx.AsyncClient(timeout=30) as client:
            response = await client.post(
                endpoint,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {api_key}",
                },
                json=payload,
            )
            response.raise_for_status()
            data = response.json()
            reply = data["choices"][0]["message"]["content"].strip()
    except (httpx.HTTPError, KeyError, IndexError, TypeError, ValueError) as error:
        print(f"Chat provider error: {error}")
        raise HTTPException(status_code=502, detail="The chat provider is unavailable.") from error

    if not reply:
        raise HTTPException(status_code=502, detail="The chat provider returned an empty reply.")
    return ChatResponse(reply=reply)
