import { useState, useRef, useEffect } from 'react'
import styles from './Laurel.module.css'

// ─── System Prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Laurel, an expert AI film festival strategy agent. You speak like a seasoned festival programmer who genuinely loves cinema — warm, direct, and specific.

SPEED IS KEY: Build the strategy as fast as possible. If the first message gives you format + theme/subject + any goal, go straight to the strategy. Ask ONE follow-up question only if a critical piece is truly missing (e.g. short vs feature, doc vs fiction). Never ask more than one question before giving the strategy.

WHEN DELIVERING THE STRATEGY — OUTPUT THIS EXACT FORMAT:
Write one short warm sentence, then immediately output a JSON code block. No extra text after the block.

\`\`\`json
{
  "type": "strategy",
  "tiers": [
    {
      "tier": "A",
      "label": "Top-Tier Targets",
      "festivals": [
        {
          "name": "Festival Name",
          "location": "City, Country",
          "reason": "Specific reason this festival fits this particular film.",
          "tips": ["Key deadline or submission tip", "Premiere strategy note"]
        }
      ]
    },
    {
      "tier": "B",
      "label": "Strong Mid-Tier",
      "festivals": []
    },
    {
      "tier": "C",
      "label": "Niche & Regional",
      "festivals": []
    }
  ],
  "closing": "One honest sentence on timing, premiere strategy, or budget."
}
\`\`\`

TIER RULES:
- TIER A: Only Sundance, TIFF, Cannes, Berlin, Venice, Tribeca, SXSW, Hot Docs, Clermont-Ferrand etc. — only if genuinely appropriate
- TIER B: Palm Springs, AFI Fest, True/False, Sheffield, Edinburgh, etc.
- TIER C: Niche, genre, or regional festivals that are a strong fit
- Include 1–3 festivals per tier. Omit a tier entirely if it doesn't apply (remove it from the array).
- Be specific about WHY each festival fits THIS film. Never give generic advice.`

// ─── Festival Data ────────────────────────────────────────────────────────────

const FESTIVALS = [
  { name: 'Sundance', location: 'Park City, USA', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'The premier American indie festival — a launching ground for bold independent voices and breakout films.', window: 'Aug–Sep submission · Jan festival' },
  { name: 'Cannes', location: 'Cannes, France', tier: 'A', formats: ['Feature', 'Short'], desc: 'The world\'s most prestigious festival. Competition, Un Certain Regard, Directors\' Fortnight, and Critics\' Week.', window: 'Jan–Feb submission · May festival' },
  { name: 'Berlinale', location: 'Berlin, Germany', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'Politically engaged and artistically ambitious. Strong on international arthouse and first features.', window: 'Oct–Nov submission · Feb festival' },
  { name: 'Venice', location: 'Venice, Italy', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'The world\'s oldest film festival. A premier gateway for Oscar-track prestige features and arthouse cinema.', window: 'May–Jun submission · Aug festival' },
  { name: 'TIFF', location: 'Toronto, Canada', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'The most commercially significant festival. Ideal for films seeking North American distribution and awards attention.', window: 'Apr–May submission · Sep festival' },
  { name: 'SXSW', location: 'Austin, USA', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'Culturally current, genre-bending, and adventurous. The best launchpad for first features and bold narratives.', window: 'Aug–Oct submission · Mar festival' },
  { name: 'Tribeca', location: 'New York, USA', tier: 'A', formats: ['Feature', 'Short', 'Doc'], desc: 'Strong platform for NY-connected stories and narrative voices. Great for films seeking US distribution.', window: 'Jan–Feb submission · Jun festival' },
  { name: 'Hot Docs', location: 'Toronto, Canada', tier: 'A', formats: ['Doc'], desc: 'North America\'s largest documentary festival. Essential for feature docs seeking international distribution.', window: 'Oct–Nov submission · Apr festival' },
  { name: 'Clermont-Ferrand', location: 'Clermont-Ferrand, France', tier: 'A', formats: ['Short'], desc: 'The world\'s most important short film festival. Huge market for short film international sales and licensing.', window: 'Jun–Sep submission · Feb festival' },
  { name: 'Annecy', location: 'Annecy, France', tier: 'A', formats: ['Animation'], desc: 'The world\'s top animation festival. Essential for any animated short or feature seeking global exposure.', window: 'Jan–Feb submission · Jun festival' },
  { name: 'Locarno', location: 'Locarno, Switzerland', tier: 'B', formats: ['Feature', 'Short'], desc: 'Avant-garde and adventurous. A respected launchpad for formal experimentation and world cinema auteurs.', window: 'Mar–Apr submission · Aug festival' },
  { name: 'AFI Fest', location: 'Los Angeles, USA', tier: 'B', formats: ['Feature', 'Short', 'Doc'], desc: 'Free entry, strong LA industry attendance. A solid Oscar qualifier and excellent platform for US releases.', window: 'Aug–Sep submission · Oct festival' },
  { name: 'True/False', location: 'Columbia, USA', tier: 'B', formats: ['Doc'], desc: 'Championing formally daring nonfiction. Beloved by doc filmmakers for its community feel and curation quality.', window: 'Sep–Oct submission · Mar festival' },
  { name: 'Sheffield DocFest', location: 'Sheffield, UK', tier: 'B', formats: ['Doc'], desc: 'One of Europe\'s leading documentary festivals with a major industry market and co-production hub.', window: 'Dec–Jan submission · Jun festival' },
  { name: 'Edinburgh IFF', location: 'Edinburgh, UK', tier: 'B', formats: ['Feature', 'Short', 'Doc'], desc: 'The world\'s longest-running film festival. A strong UK launch platform for international films.', window: 'Feb–Mar submission · Aug festival' },
  { name: 'Palm Springs ShortFest', location: 'Palm Springs, USA', tier: 'B', formats: ['Short'], desc: 'One of North America\'s top short film festivals. Oscar qualifying and a key stop on the shorts circuit.', window: 'Jan–Mar submission · Jun festival' },
  { name: 'Rotterdam (IFFR)', location: 'Rotterdam, Netherlands', tier: 'B', formats: ['Feature', 'Short', 'Doc'], desc: 'Champions provocative world cinema and innovative voices. Key festival for adventurous arthouse features.', window: 'Aug–Oct submission · Jan festival' },
  { name: 'San Sebastián', location: 'San Sebastián, Spain', tier: 'B', formats: ['Feature'], desc: 'Major European competition festival with Golden Shell. Strong for Ibero-American and international arthouse cinema.', window: 'May–Jun submission · Sep festival' },
]

const FILTERS = ['All', 'Feature', 'Short', 'Doc', 'Animation']

// ─── Constants ────────────────────────────────────────────────────────────────

const STARTERS = [
  'My film is a 12-minute drama about a lonely girl. Just finished editing.',
  'I have a feature documentary about climate refugees, 87 minutes. Aiming for Sundance.',
  'Made a 7-min experimental animation. No dialogue. What festivals fit?',
]

const API_URL = 'https://api.anthropic.com/v1/messages'
const MODEL   = 'claude-haiku-4-5-20251001'

// ─── Markdown renderer ────────────────────────────────────────────────────────

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className={styles.mdBold}>{part.slice(2, -2)}</strong>
      : part
  )
}

function renderMarkdown(text) {
  const lines = text.split('\n')
  const out = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      out.push(<h2 key={i} className={styles.mdH2}>{renderInline(line.slice(3))}</h2>)
      i++
    } else if (line.startsWith('### ')) {
      out.push(<h3 key={i} className={styles.mdH3}>{renderInline(line.slice(4))}</h3>)
      i++
    } else if (line.startsWith('- ') || line.startsWith('• ')) {
      const items = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('• '))) {
        items.push(<li key={i}>{renderInline(lines[i].slice(2))}</li>)
        i++
      }
      out.push(<ul key={`ul-${i}`} className={styles.mdList}>{items}</ul>)
    } else if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={i}>{renderInline(lines[i].replace(/^\d+\.\s/, ''))}</li>)
        i++
      }
      out.push(<ol key={`ol-${i}`} className={styles.mdOList}>{items}</ol>)
    } else if (line.trim() === '') {
      out.push(<div key={i} className={styles.mdSpacer} />)
      i++
    } else {
      out.push(<p key={i} className={styles.mdPara}>{renderInline(line)}</p>)
      i++
    }
  }
  return out
}

// ─── Strategy parser ──────────────────────────────────────────────────────────

function parseStrategy(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]+?)```/)
  const raw    = fenced ? fenced[1].trim() : null
  const bare   = !raw ? text.match(/(\{[\s\S]*"type"\s*:\s*"strategy"[\s\S]*\})/) : null
  const candidate = raw || (bare && bare[1])
  if (!candidate) return null
  try {
    const data = JSON.parse(candidate)
    if (data.type === 'strategy' && Array.isArray(data.tiers)) return data
    return null
  } catch { return null }
}

function getIntro(text) {
  const idx = text.indexOf('```')
  return idx > 0 ? text.slice(0, idx).trim() : null
}

// ─── Strategy Cards ───────────────────────────────────────────────────────────

const TIER_META = {
  A: { label: 'Top-Tier',        cls: styles.tierA },
  B: { label: 'Mid-Tier',        cls: styles.tierB },
  C: { label: 'Niche / Regional', cls: styles.tierC },
}

function FestivalCard({ festival }) {
  return (
    <div className={styles.festCard}>
      <div className={styles.festHeader}>
        <span className={styles.festName}>{festival.name}</span>
        {festival.location && <span className={styles.festLocation}>{festival.location}</span>}
      </div>
      <p className={styles.festReason}>{festival.reason}</p>
      {festival.tips?.length > 0 && (
        <ul className={styles.festTips}>
          {festival.tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      )}
    </div>
  )
}

function StrategyMessage({ text }) {
  const strategy = parseStrategy(text)
  const intro    = getIntro(text)

  if (!strategy) return (
    <div className={`${styles.msgBubble} ${styles.agentBubble}`}>
      {renderMarkdown(text)}
    </div>
  )

  return (
    <div className={styles.strategyBlock}>
      {intro && <p className={styles.strategyIntro}>{intro}</p>}
      {strategy.tiers.filter(t => t.festivals?.length > 0).map(tier => {
        const meta = TIER_META[tier.tier] || { label: tier.label, cls: styles.tierC }
        return (
          <div key={tier.tier} className={styles.tierSection}>
            <div className={`${styles.tierHeader} ${meta.cls}`}>
              <span className={styles.tierBadge}>{tier.tier}</span>
              <span className={styles.tierLabel}>{tier.label || meta.label}</span>
            </div>
            <div className={styles.festGrid}>
              {tier.festivals.map((f, i) => <FestivalCard key={i} festival={f} />)}
            </div>
          </div>
        )
      })}
      {strategy.closing && <p className={styles.strategyClosing}>{strategy.closing}</p>}
    </div>
  )
}

// ─── LaurelMark ───────────────────────────────────────────────────────────────

function LaurelMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 14 C4 8, 10 4, 14 4"     stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 8, 18 4, 14 4"   stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 14 C4 20, 10 24, 14 24"  stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 20, 18 24, 14 24" stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2" fill="#C9A84C" opacity="0.8"/>
      <path d="M7 9 C9 7, 11 7, 12 9"  stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      <path d="M21 9 C19 7, 17 7, 16 9" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}

// ─── Landing ──────────────────────────────────────────────────────────────────

function Landing({ onChat, onExplore }) {
  return (
    <div className={styles.landing}>
      <div className={styles.landingInner}>
        <div className={styles.landingMark}>
          <LaurelMark size={64} />
        </div>
        <h1 className={styles.landingTitle}>Laurel</h1>
        <p className={styles.landingSubtitle}>Film Festival Strategy</p>
        <p className={styles.landingBody}>
          Build a tailored festival submission strategy for your film, or explore the festival landscape.
        </p>
        <div className={styles.landingBtns}>
          <button className={styles.landingBtnPrimary} onClick={onChat}>
            <span className={styles.landingBtnIcon}>◆</span>
            Talk with Laurel
          </button>
          <button className={styles.landingBtnSecondary} onClick={onExplore}>
            <span className={styles.landingBtnIcon}>⊞</span>
            Explore Festivals
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Explore Festivals ────────────────────────────────────────────────────────

function ExploreFestivals({ onBack }) {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? FESTIVALS
    : FESTIVALS.filter(f => f.formats.includes(filter))

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={onBack}>← Back</button>
          <div className={styles.headerDivider} />
          <div>
            <div className={styles.headerTitle}>Festivals</div>
            <div className={styles.headerSub}>Browse the circuit</div>
          </div>
        </div>
      </header>

      <div className={styles.exploreBody}>
        <div className={styles.filterBar}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.exploreGrid}>
          {visible.map((fest, i) => (
            <div key={i} className={styles.exploreFestCard}>
              <div className={styles.exploreFestTop}>
                <span className={`${styles.exploreTierBadge} ${styles[`tier${fest.tier}Badge`]}`}>{fest.tier}</span>
                <span className={styles.exploreFestName}>{fest.name}</span>
              </div>
              <span className={styles.exploreFestLocation}>{fest.location}</span>
              <div className={styles.exploreFestFormats}>
                {fest.formats.map(fmt => (
                  <span key={fmt} className={styles.fmtTag}>{fmt}</span>
                ))}
              </div>
              <p className={styles.exploreFestDesc}>{fest.desc}</p>
              <span className={styles.exploreFestWindow}>{fest.window}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Key Screen ───────────────────────────────────────────────────────────────

function KeyScreen({ onReady, onBack }) {
  const [key, setKey]     = useState('')
  const [error, setError] = useState('')

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
        <button className={styles.keyBtn} onClick={submit}>Begin Session →</button>
        <button className={styles.keyBackBtn} onClick={onBack}>← Back</button>
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
  const [mode,     setMode]     = useState(null) // null | 'chat' | 'explore'
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

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [input])

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
          max_tokens: 1500,
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

  // Landing
  if (mode === null) return <Landing onChat={() => setMode('chat')} onExplore={() => setMode('explore')} />

  // Explore
  if (mode === 'explore') return <ExploreFestivals onBack={() => setMode(null)} />

  // Chat: key screen if no key
  if (!apiKey) return <KeyScreen onReady={setApiKey} onBack={() => setMode(null)} />

  // Chat
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => setMode(null)}>← Back</button>
          <div className={styles.headerDivider} />
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

      <div className={styles.messages}>
        {messages.length === 0 && !loading && (
          <div className={styles.welcome}>
            <div className={styles.welcomeMark}><LaurelMark size={48} /></div>
            <h2 className={styles.welcomeTitle}>Tell me about your film.</h2>
            <p className={styles.welcomeBody}>I'll build your complete festival submission strategy.</p>
            <div className={styles.starters}>
              {STARTERS.map((s, i) => (
                <button key={i} className={styles.starterBtn} onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => {
          if (m.role === 'user') return (
            <div key={i} className={`${styles.msgRow} ${styles.user}`}>
              <div className={styles.msgMeta}>You</div>
              <div className={styles.msgBubble}>{m.text}</div>
            </div>
          )
          return (
            <div key={i} className={`${styles.msgRow} ${styles.agent}`}>
              <div className={styles.msgMeta}>Laurel</div>
              <StrategyMessage text={m.text} />
            </div>
          )
        })}

        {loading && (
          <div className={styles.typingRow}>
            <div className={styles.typingBubble}>
              {[0, 1, 2].map(i => (
                <div key={i} className={styles.typingDot} style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

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
            aria-label="Send"
          >↑</button>
        </div>
        <p className={styles.inputHint}>Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}
