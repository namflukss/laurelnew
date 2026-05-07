import { useState, useRef, useEffect } from 'react'
import styles from './Laurel.module.css'

// ─── System Prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Laurel, an expert AI film festival strategy agent. You are warm, knowledgeable, and speak like a seasoned festival programmer and distribution strategist who genuinely loves cinema.

Your purpose: Help filmmakers build a complete, tailored film festival submission strategy for their specific film.

PERSONALITY & TONE:
- Conversational, never form-like. Talk like a trusted industry insider.
- Ask one or two natural follow-up questions at a time — never a list of questions.
- Show genuine enthusiasm for the film as it's described.
- Be honest: not every film is right for Sundance. Say so kindly.
- Use specific festival knowledge, not generic advice.

HOW YOU WORK:
1. Through natural conversation, learn about the film: genre, format (short/feature/doc), runtime, tone, themes, completion status, country of origin, previous screenings, budget context, filmmaker's goals (distribution, awards, community, etc.)
2. Once you have enough context (usually after 2-3 exchanges), begin building the strategy.
3. Structure your festival recommendations in tiers:
   - TIER A: Top-tier festivals (Sundance, TIFF, Cannes, Berlin, Venice, Tribeca, SXSW, Hot Docs, Clermont-Ferrand, etc.) — only recommend if genuinely appropriate
   - TIER B: Strong mid-tier festivals (Palm Springs, AFI Fest, True/False, Sheffield, Edinburgh, Tribeca, etc.)
   - TIER C: Niche, genre, or regional festivals that are a great fit
4. For each recommendation, explain WHY it's right for THIS film — be specific.
5. Address: submission order/timing strategy, premiere status, eligibility windows, Oscars qualification if relevant, budget considerations.

IMPORTANT RULES:
- Never show a form. Always chat naturally.
- Don't dump all questions at once. Let the conversation breathe.
- Be specific and personal to the film described.
- Always consider the filmmaker's realistic budget and goals.`

// ─── Constants ────────────────────────────────────────────────────────────────

const STARTERS = [
  'My film is a 12-minute drama about a lonely girl. Just finished editing.',
  'I have a feature documentary about climate refugees, 87 minutes. Aiming for Sundance.',
  'Made a 7-min experimental animation. No dialogue. What festivals fit?',
]

const API_URL = 'https://api.anthropic.com/v1/messages'
const MODEL   = 'claude-haiku-4-5-20251001'

// ─── Sub-components ───────────────────────────────────────────────────────────

function LaurelMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 14 C4 8, 10 4, 14 4"   stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 8, 18 4, 14 4"  stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 14 C4 20, 10 24, 14 24" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 20, 18 24, 14 24" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2" fill="#C9A84C" opacity="0.8"/>
      <path d="M7 9 C9 7, 11 7, 12 9"   stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      <path d="M21 9 C19 7, 17 7, 16 9"  stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}

function KeyScreen({ onReady }) {
  const [key, setKey]       = useState('')
  const [error, setError]   = useState('')

  // If an env var key is present, skip this screen entirely
  useEffect(() => {
    const envKey = import.meta.env.VITE_ANTHROPIC_API_KEY
    if (envKey?.startsWith('sk-')) onReady(envKey)
  }, [onReady])

  function submit() {
    if (!key.trim().startsWith('sk-')) {
      setError('Key must start with sk-ant-…')
      return
    }
    onReady(key.trim())
  }

  return (
    <div className={styles.keyScreen}>
      <div className={styles.keyCard}>
        <div className={styles.keyBrand}>
          <LaurelMark size={32} />
          <span className={styles.keyTitle}>Laurel</span>
        </div>
        <p className={styles.keyBody}>
          Enter your Anthropic API key to start your festival strategy session.
          Your key stays in this browser tab only — never stored anywhere.
          <br /><br />
          Get one at <strong>console.anthropic.com → API Keys</strong>
        </p>
        <input
          className={`${styles.keyInput} ${error ? styles.keyInputError : ''}`}
          type="password"
          placeholder="sk-ant-api03-…"
          value={key}
          autoFocus
          onChange={e => { setKey(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && submit()}
        />
        {error && <p className={styles.keyError}>{error}</p>}
        <button className={styles.keyBtn} onClick={submit}>
          Begin Session →
        </button>
        <p className={styles.keyNote}>
          Your key is only sent directly to Anthropic's API. It is never logged or stored.
          In production, set <code>VITE_ANTHROPIC_API_KEY</code> in your environment to skip this screen.
        </p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Laurel() {
  const [apiKey,   setApiKey]   = useState(null)
  const [messages, setMessages] = useState([])
  const [input,    setInput]    = useState('')
  const [loading,  setLoading]  = useState(false)

  const history        = useRef([])
  const messagesEndRef = useRef(null)
  const textareaRef    = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  async function send(text) {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    history.current = [...history.current, { role: 'user', content: trimmed }]
    setLoading(true)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'x-api-key':     apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model:      MODEL,
          max_tokens: 1024,
          system:     SYSTEM_PROMPT,
          messages:   history.current,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        const msg = data?.error?.message || `API error ${res.status}`
        setMessages(prev => [...prev, { role: 'agent', text: `⚠️ ${msg}` }])
        history.current = history.current.slice(0, -1)
        return
      }

      const reply = data.content?.[0]?.text ?? 'Something went wrong.'
      history.current = [...history.current, { role: 'assistant', content: reply }]
      setMessages(prev => [...prev, { role: 'agent', text: reply }])

    } catch (err) {
      setMessages(prev => [...prev, { role: 'agent', text: `⚠️ ${err.message}` }])
      history.current = history.current.slice(0, -1)
    } finally {
      setLoading(false)
    }
  }

  if (!apiKey) return <KeyScreen onReady={setApiKey} />

  return (
    <div className={styles.root}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <LaurelMark size={22} />
          <div>
            <div className={styles.headerTitle}>Laurel</div>
            <div className={styles.headerSub}>Film Festival Strategy Agent</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.statusDot} />
          <span className={styles.statusLabel}>Online</span>
        </div>
      </header>

      {/* Messages */}
      <div className={styles.messages}>
        {messages.length === 0 && !loading && (
          <div className={styles.welcome}>
            <LaurelMark size={52} />
            <h1 className={styles.welcomeTitle}>Hello, I'm Laurel.</h1>
            <p className={styles.welcomeBody}>
              Tell me about your film and I'll build your complete festival submission strategy.
            </p>
            <div className={styles.starters}>
              {STARTERS.map((s, i) => (
                <button key={i} className={styles.starterBtn} onClick={() => send(s)}>
                  → {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`${styles.msgRow} ${styles[m.role]}`}>
            <div className={styles.msgMeta}>{m.role === 'user' ? 'You' : 'Laurel'}</div>
            <div className={styles.msgBubble}>{m.text}</div>
          </div>
        ))}

        {loading && (
          <div className={styles.typingRow}>
            <div className={styles.typingBubble}>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={styles.typingDot}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className={styles.inputArea}>
        <div className={styles.inputWrap}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            placeholder="Tell me about your film…"
            value={input}
            rows={1}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className={styles.sendBtn}
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
        <p className={styles.inputHint}>Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}
