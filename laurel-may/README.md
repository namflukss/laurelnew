# 🎬 Laurel — Film Festival Strategy Agent

An AI-powered chat agent that builds tailored film festival submission strategies for independent filmmakers. Powered by Claude.

---

## Tech Stack

- **React 18** + **Vite**
- **Claude API** (Anthropic) via `claude-haiku-4-5`
- **CSS Modules** — no UI library dependency
- Deploy-ready for **Vercel**, Netlify, or any static host

---

## Local Development

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/laurel-agent.git
cd laurel-agent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your API key

```bash
cp .env.example .env.local
```

Open `.env.local` and paste your Anthropic API key:

```
VITE_ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

> **Without this**, Laurel will show a key-entry screen in the browser on every load. That's fine for testing — set the env var to skip it in production.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Deploy to Vercel (recommended)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Then add your secret:

```bash
vercel env add VITE_ANTHROPIC_API_KEY
```

Paste your key when prompted. Redeploy:

```bash
vercel --prod
```

### Option B — Vercel Dashboard (no CLI)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. In **Environment Variables**, add:
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: your `sk-ant-api03-…` key
5. Click **Deploy**

Vercel auto-detects Vite. No extra config needed.

---

## Deploy to Netlify

```bash
npm run build
```

Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop).

Or connect your GitHub repo in the Netlify dashboard and set:
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variable: `VITE_ANTHROPIC_API_KEY`

---

## Project Structure

```
laurel-agent/
├── public/
│   └── laurel-icon.svg        # Favicon
├── src/
│   ├── components/
│   │   ├── Laurel.jsx          # Main agent component
│   │   └── Laurel.module.css   # Scoped styles
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global reset + font imports
├── .env.example                # Template for local env vars
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## Environment Variables

| Variable                  | Required | Description                          |
|---------------------------|----------|--------------------------------------|
| `VITE_ANTHROPIC_API_KEY`  | Yes*     | Your Anthropic API key (`sk-ant-…`)  |

*If not set, users enter their own key in the browser. Set it in production to remove that screen.

---

## Coming Soon

- [ ] Session export (PDF strategy report)
- [ ] Festival deadline calendar
- [ ] Submission budget tracker
- [ ] Multi-language support

---

## License

MIT
