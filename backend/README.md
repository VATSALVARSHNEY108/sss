# Whobee Python backend

## Local setup

```powershell
cd backend
Copy-Item .env.example .env
```

Replace the placeholder value in `.env` with a real Groq API key, then
start the API:

```powershell
node server.mjs
```

Check `http://localhost:8000/health`; it should return
`{"status":"ok","groq":"configured"}`. Never commit `.env` or expose
the Groq key in frontend code. The server reads `backend/.env`
automatically.

The frontend now calls `/api/chat` on the Next app, which proxies to this
backend. For local development, that proxy defaults to
`http://localhost:8000/chat`. For deployment, set `CHAT_BACKEND_URL` to the
public backend URL and add the frontend origin to `CHAT_ALLOWED_ORIGINS`.
If `GROQ_MODEL` is omitted, the API uses `llama-3.3-70b-versatile`. You can
set `GROQ_MODEL` to another Groq chat model when needed.

To verify the key by itself, run:

```powershell
npm run test:groq
```

That command checks `backend/.env` by default. You can also pass a one-off key
without saving it:

```powershell
npm run test:groq -- --api-key YOUR_KEY_HERE
```

To test the full backend chat path after the API server is running:

```powershell
npm run test:groq-chat
```

If your backend is on a different URL, pass it explicitly:

```powershell
npm run test:groq-chat -- --backend-url http://localhost:8000/chat
```
