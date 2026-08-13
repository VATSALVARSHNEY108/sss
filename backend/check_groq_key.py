from __future__ import annotations

import argparse
import os
import sys
from pathlib import Path

import httpx
from dotenv import load_dotenv


load_dotenv(dotenv_path=Path(__file__).resolve().parent / ".env")

DEFAULT_URL = "https://api.groq.com/openai/v1/models"


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Check whether the configured Groq API key can authenticate."
    )
    parser.add_argument(
        "--api-key",
        default=os.getenv("GROQ_API_KEY", "").strip(),
        help="Groq API key to test. Defaults to GROQ_API_KEY from backend/.env.",
    )
    parser.add_argument(
        "--url",
        default=DEFAULT_URL,
        help="Groq endpoint to probe. Defaults to the models endpoint.",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()

    if not args.api_key or args.api_key == "your_groq_api_key_here":
        print(
            "Groq API key is missing. Set GROQ_API_KEY in backend/.env or pass --api-key.",
            file=sys.stderr,
        )
        return 2

    try:
        with httpx.Client(timeout=20) as client:
            response = client.get(
                args.url,
                headers={
                    "Authorization": f"Bearer {args.api_key}",
                    "Accept": "application/json",
                },
            )
    except httpx.RequestError as exc:
        print(f"Could not reach Groq: {exc}", file=sys.stderr)
        return 3

    if response.status_code == 200:
        try:
            payload = response.json()
            model_count = len(payload.get("data", [])) if isinstance(payload, dict) else "unknown"
        except ValueError:
            model_count = "unknown"
        print(f"Groq key works. Status 200. Models returned: {model_count}.")
        return 0

    if response.status_code == 401:
        print("Groq key failed authentication. Status 401.", file=sys.stderr)
        return 1

    if response.status_code == 403:
        print("Groq key was rejected with 403 Forbidden.", file=sys.stderr)
        return 1

    body_preview = response.text.strip().replace("\n", " ")
    if len(body_preview) > 300:
        body_preview = body_preview[:300] + "..."
    print(
        f"Groq key check returned HTTP {response.status_code}: {body_preview}",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
