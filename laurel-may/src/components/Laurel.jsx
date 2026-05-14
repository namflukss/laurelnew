import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CalendarDays, Layers, Wallet, Command, LayoutGrid, Plus, ArrowUp, X, FileText, Globe2, Film } from 'lucide-react'
import * as THREE from 'three'
import styles from './Laurel.module.css'

// ─── System Prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Laurel — a top-tier film distribution and festival strategy agent with 20+ years of experience as a festival programmer, acquisitions executive, and distribution consultant. You have worked with Sundance, A24, Magnolia Pictures, and leading international sales agents. You know which programmers favor which aesthetics, which festivals are genuinely worth the submission fee, and how to build a circuit that leads to real distribution outcomes.

You speak like the most trusted person in the filmmaker's corner — warm, direct, specific, and honest. You never give generic advice. You reference real past selections, real programmers, real market dynamics.

SPEED IS KEY: Build the strategy as fast as possible. If the first message gives you format + theme/subject + any goal, go straight to the strategy. Ask ONE follow-up question only if a critical piece is truly missing. Never ask more than one question before giving the strategy.

═══════════════════════════════════════════════════════
OUTPUT FORMAT — MANDATORY FOR ALL FESTIVAL RESPONSES
═══════════════════════════════════════════════════════
No matter what the user asks (niche festivals, Oscar path, budget plan, niche/genre, etc.),
whenever you list festival recommendations you MUST output them in this EXACT JSON structure.
Do NOT invent new JSON fields or structures. All extra info (acceptance rates, community value,
Oscar qualifying status, etc.) must go inside the "tips" array as plain strings.

Write one short warm sentence first, then the JSON block. Nothing after the block.

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
          "tips": ["Acceptance rate: ~5%", "Oscar qualifying: Yes", "Submit by early deadline for best read", "Community value: strong industry networking"],
          "submit_by": "Sep 2025",
          "festival_date": "Jan 2026"
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
  "closing": "One honest sentence on timing, premiere strategy, or distribution outlook."
}
\`\`\`

RULES:
- type MUST be "strategy" — no exceptions
- Every festival goes inside a tier object with tier "A", "B", or "C"
- Omit empty tiers from the array entirely
- ALWAYS include realistic submit_by and festival_date ("Mon YYYY" format)
- Include 1–3 festivals per tier
- Put ALL extra detail (acceptance rates, Oscar status, community value, co-pro notes) in tips[]
- Be specific. Reference actual past selections when possible.`

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
  {
    label: 'Festival DNA Match',
    desc: 'Find 12 best-fit festivals across tiers',
    template: `My film:
- Title: [TITLE]
- Format: [Short / Feature / Documentary]
- Genre: [e.g., Drama / Thriller / Doc]
- Logline: [1-2 sentence pitch]
- Runtime: [X minutes]
- Country: [COUNTRY]
- Goals: [Distribution / Awards / Community]

Find my 12 best-fit festivals across tiers A, B, and C. For each, explain WHY it fits this specific film.`,
  },
  {
    label: 'Oscar Qualification',
    desc: 'Precise roadmap to Academy eligibility',
    template: `I need an Oscar qualification strategy.
- Format: [Short narrative / Short doc / Short animation / Feature doc]
- Runtime: [EXACT runtime]
- Current selections: [or 'none yet']
- Target Oscar year: [20XX]
- Country: [COUNTRY]
- Budget for qualification path: $[AMOUNT]

Walk me through the exact qualification path for my category.`,
  },
  {
    label: 'Budget Strategy',
    desc: 'Highest ROI plan for your submission budget',
    template: `Help me build the highest ROI submission plan.
- Total budget: $[AMOUNT]
- Format: [Short / Feature / Doc]
- Genre: [GENRE]
- Career goal: [Distribution / Launch / Awards]
- Timeline: submissions starting [MONTH]
- Country: [COUNTRY]

Maximize career impact per dollar. Flag early-bird deadlines and fee waivers.`,
  },
  {
    label: 'Write My Materials',
    desc: 'Logline, synopsis & director\'s statement',
    template: `Write my festival submission materials.
- Title: [TITLE]
- Director: [NAME]
- Format & genre: [FORMAT / GENRE]
- Runtime: [X minutes]
- Full plot (including ending): [DESCRIBE]
- Director's connection: [Why did YOU make this?]
- Themes: [What is it really about?]
- Tone references: [Films it resembles]

Write: logline, short synopsis, long synopsis, director's statement, 3 alternate loglines.`,
  },
  {
    label: 'Submission Diagnosis',
    desc: 'Honest audit of why rejections are happening',
    template: `I need an honest diagnosis of my submission run.
- Format & genre: [FORMAT / GENRE]
- Total submissions: [NUMBER]
- Total selections: [NUMBER]
- Notable rejections: [LIST]
- Selections so far: [LIST]
- My current logline: [PASTE]
- Budget spent: $[AMOUNT]

Be brutally honest. Tell me what's wrong and give 3 corrective actions.`,
  },
  {
    label: 'Post-Premiere Circuit',
    desc: 'Maximize the run after your world premiere',
    template: `My film has had its world premiere. Help me maximize the circuit.
- Film: [TITLE / FORMAT]
- World premiere: [FESTIVAL, MONTH/YEAR]
- Other selections: [LIST]
- Awards won: [LIST or 'none yet']
- Remaining premiere status: [International / NA / Regional]
- Distribution status: [Acquired / In talks / Not yet]
- Budget remaining: $[AMOUNT]

Design my post-premiere strategy with a 6-month roadmap.`,
  },
]

// ─── Skills / Commands ────────────────────────────────────────────────────────

const SKILLS = [
  {
    icon: <Sparkles size={14} />,
    label: 'Full Strategy',
    description: 'Build a complete tiered festival submission strategy',
    prefix: '/strategy',
  },
  {
    icon: <Layers size={14} />,
    label: 'Tier Breakdown',
    description: 'Which festival tiers (A/B/C) are realistic for my film',
    prefix: '/tiers',
  },
  {
    icon: <CalendarDays size={14} />,
    label: 'Deadlines',
    description: 'Key upcoming submission windows to hit this cycle',
    prefix: '/deadlines',
  },
  {
    icon: <Wallet size={14} />,
    label: 'Budget Path',
    description: 'High-impact festivals for a limited submission budget',
    prefix: '/budget',
  },
]

const API_URL     = 'https://api.anthropic.com/v1/messages'
const MODEL       = 'claude-haiku-4-5-20251001'
const MAX_TOKENS  = 4096

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
    if (line.startsWith('```')) {
      // skip entire code fence block
      i++
      while (i < lines.length && !lines[i].startsWith('```')) i++
      i++
    } else if (line.startsWith('## ')) {
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

function normalizeToStrategy(data) {
  if (data.type === 'strategy' && Array.isArray(data.tiers)) return data
  if (Array.isArray(data.festivals)) {
    return { type: 'strategy', tiers: [{ tier: 'B', label: 'Festival Matches', festivals: normalizeFestivals(data.festivals) }], closing: data.closing || null }
  }
  if (Array.isArray(data) && data[0]?.name) {
    return { type: 'strategy', tiers: [{ tier: 'B', label: 'Festival Matches', festivals: normalizeFestivals(data) }], closing: null }
  }
  const tierKeys = Object.keys(data).filter(k => Array.isArray(data[k]) && data[k][0]?.name)
  if (tierKeys.length > 0) {
    const TIER_MAP = { prestige: 'A', 'high roi': 'B', niche: 'C', genre: 'C', oscar: 'C', regional: 'C' }
    return { type: 'strategy', tiers: tierKeys.map((k, i) => ({ tier: TIER_MAP[k.toLowerCase()] || (i === 0 ? 'A' : i === 1 ? 'B' : 'C'), label: k, festivals: normalizeFestivals(data[k]) })), closing: data.closing || null }
  }
  return null
}

function normalizeFestivals(arr) {
  return (arr || []).map(f => {
    const knownKeys = new Set(['name', 'location', 'reason', 'tips', 'submit_by', 'festival_date', 'tier'])
    const extraTips = Object.entries(f).filter(([k, v]) => !knownKeys.has(k) && v !== null && v !== undefined && v !== '').map(([k, v]) => `${k.replace(/_/g, ' ')}: ${typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v}`)
    return { name: f.name || 'Unknown', location: f.location || '', reason: f.reason || f.description || f.why || '', tips: [...(f.tips || []), ...extraTips], submit_by: f.submit_by || f.deadline || null, festival_date: f.festival_date || f.festival || null }
  })
}

function parseStrategy(text) {
  // Try fenced code block first (greedy match to handle large nested JSON)
  const fenced = text.match(/```(?:json)?\s*\n?([\s\S]*)\n?```/)
  let candidate = fenced ? fenced[1].trim() : null

  // Fallback: find first { and last } in the whole text
  if (!candidate) {
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')
    if (start !== -1 && end !== -1 && end > start) {
      candidate = text.slice(start, end + 1)
    }
  }

  if (!candidate) return null
  try { return normalizeToStrategy(JSON.parse(candidate)) } catch { return null }
}

function getIntro(text) {
  const idx = text.indexOf('```')
  return idx > 0 ? text.slice(0, idx).trim() : null
}

// ─── Festival geo coordinates ────────────────────────────────────────────────

const FEST_COORDS = {
  'Sundance': { lat: 40.65, lng: -111.50 },
  'Cannes': { lat: 43.55, lng: 7.02 },
  'TIFF': { lat: 43.65, lng: -79.38 },
  'Toronto': { lat: 43.65, lng: -79.38 },
  'Venice': { lat: 45.43, lng: 12.33 },
  'Berlinale': { lat: 52.52, lng: 13.40 },
  'Berlin': { lat: 52.52, lng: 13.40 },
  'SXSW': { lat: 30.27, lng: -97.74 },
  'Tribeca': { lat: 40.71, lng: -74.00 },
  'Hot Docs': { lat: 43.65, lng: -79.38 },
  'Clermont-Ferrand': { lat: 45.78, lng: 3.08 },
  'Annecy': { lat: 45.90, lng: 6.12 },
  'Locarno': { lat: 46.17, lng: 8.80 },
  'AFI Fest': { lat: 34.10, lng: -118.32 },
  'AFI': { lat: 34.10, lng: -118.32 },
  'True/False': { lat: 38.95, lng: -92.33 },
  'Sheffield': { lat: 53.38, lng: -1.47 },
  'Sheffield DocFest': { lat: 53.38, lng: -1.47 },
  'Edinburgh': { lat: 55.95, lng: -3.19 },
  'Palm Springs': { lat: 33.83, lng: -116.54 },
  'Rotterdam': { lat: 51.92, lng: 4.48 },
  'IFFR': { lat: 51.92, lng: 4.48 },
  'San Sebastián': { lat: 43.32, lng: -1.98 },
  'San Sebastian': { lat: 43.32, lng: -1.98 },
  'Telluride': { lat: 37.94, lng: -107.81 },
  'NYFF': { lat: 40.77, lng: -73.98 },
  'New York': { lat: 40.71, lng: -74.00 },
  'Busan': { lat: 35.10, lng: 129.04 },
  'London': { lat: 51.51, lng: -0.13 },
  'BFI': { lat: 51.51, lng: -0.13 },
  'IDFA': { lat: 52.37, lng: 4.90 },
  'Amsterdam': { lat: 52.37, lng: 4.90 },
  'Copenhagen': { lat: 55.68, lng: 12.57 },
  'Zurich': { lat: 47.38, lng: 8.54 },
  'Sitges': { lat: 41.23, lng: 1.81 },
  'San Francisco': { lat: 37.77, lng: -122.42 },
  'SFIFF': { lat: 37.77, lng: -122.42 },
  'Fantasia': { lat: 45.50, lng: -73.57 },
  'Montreal': { lat: 45.50, lng: -73.57 },
  'Chattanooga': { lat: 35.05, lng: -85.31 },
  'Warsaw': { lat: 52.23, lng: 21.01 },
  'Hong Kong': { lat: 22.30, lng: 114.18 },
  'Tokyo': { lat: 35.68, lng: 139.69 },
  'Sydney': { lat: -33.87, lng: 151.21 },
  'Mumbai': { lat: 19.08, lng: 72.88 },
  'Buenos Aires': { lat: -34.60, lng: -58.38 },
  'Thessaloniki': { lat: 40.64, lng: 22.94 },
  'Stockholm': { lat: 59.33, lng: 18.07 },
  'Göteborg': { lat: 57.71, lng: 11.97 },
  'Gothenburg': { lat: 57.71, lng: 11.97 },
  'Lisbon': { lat: 38.72, lng: -9.14 },
  'DocLisboa': { lat: 38.72, lng: -9.14 },
  'Visions du Réel': { lat: 46.38, lng: 6.24 },
  'Austin': { lat: 30.27, lng: -97.74 },
  'Los Angeles': { lat: 34.05, lng: -118.24 },
}

function findFestCoords(name) {
  if (!name) return null
  if (FEST_COORDS[name]) return FEST_COORDS[name]
  const lname = name.toLowerCase()
  for (const [key, coords] of Object.entries(FEST_COORDS)) {
    if (lname.includes(key.toLowerCase()) || key.toLowerCase().includes(lname)) return coords
  }
  return null
}

// ─── Month utilities ─────────────────────────────────────────────────────────

const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const MONTH_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December']

function parseMonthYear(str) {
  if (!str) return null
  const m = str.match(/([A-Za-z]+)\s+(\d{4})/)
  if (!m) return null
  const idx = MONTH_ABBR.findIndex(a => a.toLowerCase() === m[1].toLowerCase().slice(0, 3))
  const year = parseInt(m[2])
  if (idx === -1 || isNaN(year)) return null
  return { month: idx, year, sortKey: year * 12 + idx }
}

function flatFestivals(strategy) {
  return strategy.tiers.flatMap(t => (t.festivals || []).map(f => ({ ...f, tier: t.tier, tierLabel: t.label })))
}

function groupByDeadline(festivals) {
  const map = {}
  festivals.forEach(f => {
    const p = parseMonthYear(f.submit_by)
    if (!p) return
    const k = `${p.year}-${p.month}`
    if (!map[k]) map[k] = { ...p, key: k, festivals: [] }
    map[k].festivals.push(f)
  })
  return Object.values(map).sort((a, b) => a.sortKey - b.sortKey)
}

// ─── Strategy Dashboard ───────────────────────────────────────────────────────

const TIER_COLORS    = { A: '#FF5200', B: '#FAC703', C: 'rgba(255,255,255,0.65)' }
const TIER_BG        = { A: '#FF520018', B: '#FAC70318', C: 'rgba(255,255,255,0.06)' }
const TIER_PRESTIGE  = { A: 10, B: 7, C: 4 }

function DetailCard({ label, children }) {
  return (
    <div style={{ background: '#181818', border: '1px solid #222', borderRadius: 7, padding: '10px 12px' }}>
      <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
        {label}
      </div>
      {children}
    </div>
  )
}


const TIER_META = {
  A: { label: 'Top-Tier Targets', color: '#FF5200' },
  B: { label: 'Strong Mid-Tier',  color: '#FAC703' },
  C: { label: 'Niche & Regional', color: 'rgba(255,255,255,0.6)' },
}

function StrategyDashboard({ strategy, onBack }) {
  const allFestivals   = flatFestivals(strategy)
  const deadlineGroups = groupByDeadline(allFestivals)
  const [view, setView] = useState('cards')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f0f1f2', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{
        background: 'rgba(10,5,3,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 52, flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={onBack} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Geist Mono', monospace", fontSize: 10.5, color: 'rgba(255,255,255,0.45)',
            letterSpacing: '0.06em', padding: 0, display: 'flex', alignItems: 'center', gap: 6,
          }}>← Chat</button>
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#FF5200', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>
              Your Strategy
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.28)', marginTop: 1, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.06em' }}>
              {allFestivals.length} festivals · {strategy.tiers.filter(t => t.festivals?.length > 0).length} tiers
            </div>
          </div>
        </div>
        {strategy.closing && (
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', fontFamily: "'Inter', sans-serif", maxWidth: '45%', textAlign: 'right', lineHeight: 1.5 }}>
            {strategy.closing}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px 40px' }}>

        {/* Stats + view tabs */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div className={styles.stratStats}>
            <div className={styles.stratStat}>
              <span className={styles.stratStatNum}>{allFestivals.length}</span>
              <span className={styles.stratStatLabel}>Festivals</span>
            </div>
            <div className={styles.stratStat}>
              <span className={styles.stratStatNum}>{strategy.tiers.filter(t => t.festivals?.length > 0).length}</span>
              <span className={styles.stratStatLabel}>Tiers</span>
            </div>
            {deadlineGroups.length > 0 && (
              <div className={styles.stratStat}>
                <span className={styles.stratStatNum}>{deadlineGroups.length}</span>
                <span className={styles.stratStatLabel}>Deadlines</span>
              </div>
            )}
          </div>

          <div className={styles.viewTabs}>
            {[
              { key: 'cards',    label: 'Cards',    icon: <LayoutGrid size={12} /> },
              { key: 'timeline', label: 'Timeline', icon: <Layers size={12} /> },
              { key: 'calendar', label: 'Calendar', icon: <CalendarDays size={12} /> },
              { key: 'globe',    label: 'Globe',    icon: <Globe2 size={12} /> },
              { key: 'gallery',  label: 'Gallery',  icon: <Film size={12} /> },
            ].map(tab => (
              <button
                key={tab.key}
                className={`${styles.viewTab} ${view === tab.key ? styles.viewTabActive : ''}`}
                onClick={() => setView(tab.key)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* View content */}
        <div>
          {view === 'cards'    && <CardsView strategy={strategy} />}
          {view === 'timeline' && <TimelineView festivals={allFestivals} />}
          {view === 'calendar' && <CalendarView groups={deadlineGroups} all={allFestivals} />}
          {view === 'globe'    && <GlobeView festivals={allFestivals} />}
          {view === 'gallery'  && <GalleryView strategy={strategy} />}
        </div>
      </div>
    </div>
  )
}

// ─── Strategy Cards (in chat) ─────────────────────────────────────────────────

const TIER_CARD_CLASS  = { A: styles.festCardNewA,   B: styles.festCardNewB,   C: styles.festCardNewC   }
const TIER_BADGE_CLASS = { A: styles.tierBlockBadgeA, B: styles.tierBlockBadgeB, C: styles.tierBlockBadgeC }
const TIER_DOT_CLASS   = { A: styles.timelineDotA,   B: styles.timelineDotB,   C: styles.timelineDotC   }
const TIER_BADGE2      = { A: styles.timelineBadgeA, B: styles.timelineBadgeB, C: styles.timelineBadgeC }
const TIER_CHIP_CLASS  = { A: styles.calendarChipA,  B: styles.calendarChipB,  C: styles.calendarChipC  }
const TIER_CHIP_NAME   = { A: styles.calendarChipNameA, B: styles.calendarChipNameB, C: styles.calendarChipNameC }

const TIER_ACCENT = { A: '#FF5200', B: '#d97706', C: '#9ca3af' }

function FestivalCardV2({ festival, tier }) {
  const [showTips, setShowTips] = useState(false)
  const color = TIER_ACCENT[tier] || '#9ca3af'

  return (
    <div style={{ background: '#fff', borderTop: '1px solid #ede8e1', borderLeft: `2px solid ${color}` }}>

      {/* Name — dominant element */}
      <div style={{ padding: '16px 16px 10px 14px' }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: '#1a1008', letterSpacing: '0.02em', textTransform: 'uppercase', lineHeight: 1 }}>
          {festival.name}
        </div>
        {festival.location && (
          <div style={{ fontSize: 10, color: '#b8a898', marginTop: 4, fontFamily: "'Geist Mono', monospace", letterSpacing: '0.05em' }}>
            {festival.location}
          </div>
        )}
      </div>

      {/* Dates — plain label / value rows */}
      {(festival.submit_by || festival.festival_date) && (
        <>
          <div style={{ height: 1, background: '#ede8e1', margin: '0 14px' }} />
          <div style={{ padding: '10px 16px 10px 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
            {festival.submit_by && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 9, color: '#b8a898', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace" }}>Submit by</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#FF5200', fontFamily: "'Inter', sans-serif" }}>{festival.submit_by}</span>
              </div>
            )}
            {festival.festival_date && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 9, color: '#b8a898', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Geist Mono', monospace" }}>Festival</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#1a1008', fontFamily: "'Inter', sans-serif" }}>{festival.festival_date}</span>
              </div>
            )}
          </div>
        </>
      )}

      {/* Why */}
      {festival.reason && (
        <>
          <div style={{ height: 1, background: '#ede8e1', margin: '0 14px' }} />
          <div style={{ padding: '10px 16px 14px 14px' }}>
            <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: color, marginBottom: 6, fontFamily: "'Geist Mono', monospace" }}>
              Why
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.65, color: '#7a6655', margin: 0, fontFamily: "'Inter', sans-serif" }}>
              {festival.reason}
            </p>
          </div>
        </>
      )}

      {/* Notes */}
      {festival.tips?.length > 0 && (
        <>
          <div style={{ height: 1, background: '#ede8e1', margin: '0 14px' }} />
          <div style={{ padding: '8px 16px 12px 14px' }}>
            {showTips && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                {festival.tips.map((tip, i) => (
                  <span key={i} style={{ padding: '3px 8px', background: 'rgba(0,0,0,0.04)', border: '1px solid #ede8e1', borderRadius: 100, fontSize: 10, color: '#7a6655', fontFamily: "'Geist Mono', monospace" }}>
                    {tip}
                  </span>
                ))}
              </div>
            )}
            <button
              onClick={() => setShowTips(p => !p)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 9, color: '#b8a898', fontFamily: "'Geist Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 3 }}
            >
              <span style={{ fontSize: 7 }}>{showTips ? '▲' : '▼'}</span>
              {showTips ? 'HIDE' : `${festival.tips.length} NOTES`}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function CardsView({ strategy }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {strategy.tiers.filter(t => t.festivals?.length > 0).map(tier => {
        const color = TIER_ACCENT[tier.tier] || '#9ca3af'
        return (
          <div key={tier.tier}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #ede8e1' }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: color, letterSpacing: '0.1em' }}>TIER {tier.tier}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: '#b8a898', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{tier.label}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: '#c4b8ac', marginLeft: 'auto' }}>{tier.festivals.length}</span>
            </div>
            <div style={{ border: '1px solid #ede8e1', borderRadius: 8, overflow: 'hidden' }}>
              {tier.festivals.map((f, i) => <FestivalCardV2 key={i} festival={f} tier={tier.tier} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Three.js Globe View ─────────────────────────────────────────────────────

function GlobeView({ festivals }) {
  const mountRef   = useRef(null)
  const activePinRef = useRef(null)
  const [activeId, setActiveId] = useState(null)
  const festWithCoords = festivals.filter(f => findFestCoords(f.name))

  useEffect(() => { activePinRef.current = activeId }, [activeId])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth  || mount.offsetWidth  || 480
    const H = mount.clientHeight || mount.offsetHeight || 380

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(36, W / H, 0.1, 100)
    camera.position.set(0, 0.4, 3.6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(W, H, false)
    mount.appendChild(renderer.domElement)

    const gGroup = new THREE.Group()
    scene.add(gGroup)

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const gDir = new THREE.DirectionalLight(0xffe6c2, 1.1)
    gDir.position.set(3, 2, 4); scene.add(gDir)
    const gRim = new THREE.DirectionalLight(0xffffff, 0.45)
    gRim.position.set(-4, 0, -2); scene.add(gRim)

    // Globe sphere
    gGroup.add(new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0.05, transparent: true, opacity: 0.10 })
    ))
    // Wireframe lattice
    gGroup.add(new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.001, 28, 16)),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.20 })
    ))

    function addRing(r, y, opacity) {
      const pts = []
      for (let i = 0; i <= 128; i++) {
        const a = (i / 128) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r))
      }
      gGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity })
      ))
    }
    addRing(1.001, 0, 0.55)
    addRing(Math.cos(Math.PI * 0.13) * 1.001,  Math.sin(Math.PI * 0.13),  0.18)
    addRing(Math.cos(Math.PI * 0.13) * 1.001, -Math.sin(Math.PI * 0.13),  0.18)

    function latLngToVec3(lat, lng, r) {
      const phi   = (90 - lat)  * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
         r * Math.cos(phi),
         r * Math.sin(phi) * Math.sin(theta)
      )
    }

    function makeLabelSprite(text) {
      const c = document.createElement('canvas')
      c.width = 512; c.height = 128
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, 512, 128)
      ctx.font = 'bold 64px "Barlow Condensed", sans-serif'
      ctx.fillStyle = '#ffffff'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'left'
      ctx.fillText(text.toUpperCase(), 16, 64)
      const tex = new THREE.CanvasTexture(c)
      tex.minFilter = THREE.LinearFilter
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }))
      sp.scale.set(0.7, 0.175, 1)
      return sp
    }

    const TIER_HEX = { A: 0xFF5200, B: 0xFAC703, C: 0x9ca3af }
    const PIN_R = 0.022
    const pins  = {}

    festWithCoords.forEach(f => {
      const coords = findFestCoords(f.name)
      if (!coords) return
      const pos   = latLngToVec3(coords.lat, coords.lng, 1.0)
      const tip   = latLngToVec3(coords.lat, coords.lng, 1.08)
      const color = TIER_HEX[f.tier] || 0xFAC703

      gGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([pos, tip]),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 })
      ))
      const head = new THREE.Mesh(new THREE.SphereGeometry(PIN_R, 16, 16), new THREE.MeshBasicMaterial({ color }))
      head.position.copy(tip); gGroup.add(head)
      const halo = new THREE.Mesh(new THREE.SphereGeometry(PIN_R * 2.4, 16, 16), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18 }))
      halo.position.copy(tip); gGroup.add(halo)
      const label = makeLabelSprite(f.name)
      label.position.copy(latLngToVec3(coords.lat, coords.lng, 1.22)); gGroup.add(label)
      pins[f.name] = { head, halo, label, tier: f.tier }
    })

    let gRotY = 0.3, gRotX = -0.05, gTargetY = 0.3, gTargetX = -0.05
    let isDragging = false, lastX = 0, lastY = 0, autoSpin = true

    const el = renderer.domElement
    el.addEventListener('pointerdown', e => { isDragging = true; lastX = e.clientX; lastY = e.clientY; autoSpin = false; el.setPointerCapture(e.pointerId) })
    el.addEventListener('pointermove', e => {
      if (!isDragging) return
      gTargetY += (e.clientX - lastX) * 0.005
      gTargetX += (e.clientY - lastY) * 0.005
      gTargetX = Math.max(-1.2, Math.min(1.2, gTargetX))
      lastX = e.clientX; lastY = e.clientY
    })
    el.addEventListener('pointerup', e => { isDragging = false; try { el.releasePointerCapture(e.pointerId) } catch(_) {} })
    el.addEventListener('pointerleave', () => { isDragging = false })

    const resize = () => {
      const w = Math.max(2, mount.clientWidth)
      const h = Math.max(2, mount.clientHeight)
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(mount)
    resize()

    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (autoSpin) gTargetY += 0.0015
      gRotY += (gTargetY - gRotY) * 0.08
      gRotX += (gTargetX - gRotX) * 0.08
      gGroup.rotation.y = gRotY
      gGroup.rotation.x = gRotX
      const t = performance.now() * 0.002
      const active = activePinRef.current
      Object.entries(pins).forEach(([name, p], i) => {
        const phase = (Math.sin(t + i * 0.7) + 1) * 0.5
        const isActive = active === name
        p.halo.scale.setScalar(1 + phase * (isActive ? 0.6 : 0.3))
        p.halo.material.opacity = (isActive ? 0.35 : 0.18) - phase * 0.08
        p.head.material.color.set(isActive ? 0xffffff : (TIER_HEX[p.tier] || 0xFAC703))
      })
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', background: 'linear-gradient(160deg, #FF5200 0%, #8a0000 100%)', position: 'relative', minHeight: 380, display: 'flex', flexDirection: 'column' }}>
      {/* Atmospheric layers */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(255,160,80,0.30) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 120% 100% at 50% 110%, rgba(80,5,0,0.85) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 75%)' }} />
      </div>

      {/* Top bar */}
      <div style={{ position: 'relative', zIndex: 5, padding: '18px 20px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>
          Strategy Circuit — {festWithCoords.length} locations mapped
        </span>
      </div>

      {/* Main area: globe + list */}
      <div style={{ flex: 1, display: 'flex', position: 'relative', zIndex: 2, minHeight: 300 }}>
        {/* Globe canvas */}
        <div ref={mountRef} style={{ flex: 1, cursor: 'grab', minHeight: 380, height: 380 }} />

        {/* Festival list */}
        <div style={{ width: 170, padding: '16px 14px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            // The Circuit
          </div>
          {festivals.map((f, i) => {
            const hasPin = !!findFestCoords(f.name)
            const isActive = activeId === f.name
            return (
              <button
                key={i}
                onClick={() => hasPin && setActiveId(f.name === activeId ? null : f.name)}
                style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 8, alignItems: 'baseline', padding: '9px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'none', border: 'none', cursor: hasPin ? 'pointer' : 'default', width: '100%', textAlign: 'left' }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.4)', width: 18 }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: '0.04em', color: isActive ? '#FAC703' : (hasPin ? '#fff' : 'rgba(255,255,255,0.45)'), textTransform: 'uppercase', lineHeight: 1.1 }}>
                  {f.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: 'relative', zIndex: 5, padding: '10px 20px 16px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {festivals.map((f, i) => (
            <span key={i} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', color: findFestCoords(f.name) ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
              {f.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Gallery View ─────────────────────────────────────────────────────────────

const GALLERY_PALETTES = [
  { bg: '#1b3a36', accent: '#FF5200' },
  { bg: '#3a2a1c', accent: '#FAC703' },
  { bg: '#1c2a3a', accent: '#5aa9e9' },
  { bg: '#3a1c2a', accent: '#c97aa7' },
  { bg: '#2a2a1c', accent: '#cfcf6a' },
  { bg: '#2a1c2a', accent: '#b85cd6' },
  { bg: '#1c2a2a', accent: '#5acfcf' },
  { bg: '#2a1a0a', accent: '#FF8C00' },
  { bg: '#1a2a1a', accent: '#7ecf5a' },
]

function GalleryView({ strategy }) {
  const all = flatFestivals(strategy)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 8 }}>
      {all.map((f, i) => {
        const { bg, accent } = GALLERY_PALETTES[i % GALLERY_PALETTES.length]
        return (
          <div key={i} style={{ background: bg, borderRadius: 10, overflow: 'hidden', position: 'relative', minHeight: 168, display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top left, ${accent}28 0%, transparent 65%)`, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', padding: '14px 14px 12px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 8, color: accent, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
                  TIER {f.tier}
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1 }}>
                  {f.name}
                </div>
                {f.location && (
                  <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.38)', marginTop: 5, letterSpacing: '0.04em' }}>
                    {f.location}
                  </div>
                )}
              </div>
              <div style={{ marginTop: 14 }}>
                {f.submit_by && (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Submit</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: accent, letterSpacing: '0.02em' }}>{f.submit_by}</span>
                  </div>
                )}
                {f.festival_date && (
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginTop: 2 }}>
                    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 8, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Festival</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.02em' }}>{f.festival_date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const TIER_DOT_COLOR = { A: '#FF5200', B: '#FAC703', C: '#9ca3af' }

function TimelineView({ festivals }) {
  const sorted    = [...festivals].filter(f => f.submit_by).sort((a, b) => {
    const pa = parseMonthYear(a.submit_by)
    const pb = parseMonthYear(b.submit_by)
    return (pa?.sortKey ?? 999999) - (pb?.sortKey ?? 999999)
  })
  const ungrouped = festivals.filter(f => !f.submit_by)
  const groups    = groupByDeadline(sorted)

  const allGroups = [
    ...groups,
    ...(ungrouped.length > 0 ? [{ key: '__none__', month: null, year: null, festivals: ungrouped }] : [])
  ]

  if (allGroups.length === 0) {
    return (
      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #ede8e1', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: '#b8a898' }}>No deadline data available</div>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #ede8e1', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
      {/* Header */}
      <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #ede8e1' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 700, color: '#1a1008', letterSpacing: '-0.01em' }}>
          Festival Timeline
        </div>
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: '#b8a898', marginTop: 3, letterSpacing: '0.04em' }}>
          Submission deadlines · {festivals.length} festivals
        </div>
      </div>

      {/* Scrollable horizontal roadmap */}
      <div style={{ padding: '28px 24px 24px', overflowX: 'auto' }}>
        <div style={{ position: 'relative', minWidth: allGroups.length * 192 }}>

          {/* Horizontal line */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 7, height: 1, background: '#ede8e1' }} />

          <div style={{ display: 'flex' }}>
            {allGroups.map((group, gi) => {
              const dotColor = group.month ? '#FF5200' : '#9ca3af'
              const monthLabel = group.month ? `${MONTH_FULL[group.month]} ${group.year}` : 'No deadline'
              const isActive = group.month !== null

              return (
                <motion.div
                  key={group.key}
                  style={{ flex: '0 0 192px', paddingTop: 32, paddingRight: 12, position: 'relative' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: gi * 0.08 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.25 }}
                    style={{
                      position: 'absolute', left: '50%', top: 0,
                      transform: 'translateX(-50%)',
                      width: 15, height: 15, borderRadius: '50%',
                      background: isActive ? dotColor : '#e5e0db',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'default', zIndex: 1,
                    }}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
                  </motion.div>

                  {/* Month badge */}
                  <div style={{ textAlign: 'center', marginBottom: 14 }}>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: "'Geist Mono', monospace", fontSize: 9, fontWeight: 600,
                      letterSpacing: '0.07em', textTransform: 'uppercase',
                      padding: '3px 9px', borderRadius: 99,
                      background: isActive ? 'rgba(255,82,0,0.09)' : 'rgba(0,0,0,0.05)',
                      color: isActive ? '#FF5200' : '#9ca3af',
                      border: `1px solid ${isActive ? 'rgba(255,82,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
                    }}>
                      {monthLabel}
                    </span>
                  </div>

                  {/* Festival cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {group.festivals.map((f, fi) => {
                      const tierColor = TIER_DOT_COLOR[f.tier] || '#9ca3af'
                      return (
                        <motion.div
                          key={fi}
                          style={{
                            background: '#faf9f7', borderRadius: 8,
                            padding: '9px 11px',
                            border: '1px solid #ede8e1',
                            borderLeft: `2px solid ${tierColor}`,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.25, delay: gi * 0.08 + fi * 0.04 }}
                        >
                          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, color: '#1a1008', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                            {f.name}
                          </div>
                          {f.location && (
                            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: '#b8a898', marginTop: 3 }}>
                              {f.location}
                            </div>
                          )}
                          <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                            <span style={{
                              fontFamily: "'Geist Mono', monospace", fontSize: 8, fontWeight: 600,
                              letterSpacing: '0.08em', color: tierColor,
                              background: `${tierColor}15`, padding: '2px 6px', borderRadius: 4,
                            }}>
                              TIER {f.tier}
                            </span>
                            {f.festival_date && (
                              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 8, color: '#c4b8ac' }}>
                                {f.festival_date}
                              </span>
                            )}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarView({ groups, all }) {
  if (groups.length === 0) {
    return (
      <div style={{ padding: '16px 0', fontSize: 12, color: 'rgba(54,65,83,0.4)', fontFamily: "'Geist Mono', monospace" }}>
        No submission deadlines provided.
      </div>
    )
  }
  return (
    <div className={styles.calendarView}>
      {groups.map(group => (
        <div key={group.key} className={styles.calendarRow}>
          <div className={styles.calendarMonthName}>{MONTH_ABBR[group.month]}<br />{group.year}</div>
          <div className={styles.calendarFests}>
            {group.festivals.map((f, i) => (
              <div key={i} className={`${styles.calendarChip} ${TIER_CHIP_CLASS[f.tier] || styles.calendarChipC}`}>
                <span className={`${styles.calendarChipName} ${TIER_CHIP_NAME[f.tier] || styles.calendarChipNameC}`}>{f.name}</span>
                {f.location && <span className={styles.calendarChipSub}>{f.location}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function StrategyMessage({ text, onViewStrategy }) {
  const strategy = parseStrategy(text)
  const intro    = getIntro(text)
  const [view, setView] = useState('cards')

  if (!strategy) {
    const plain = text.replace(/```[\s\S]*?```/g, '').trim()
    return (
      <div className={`${styles.msgBubble} ${styles.agentBubble}`}>
        {plain ? renderMarkdown(plain) : renderMarkdown(text)}
      </div>
    )
  }

  const all   = flatFestivals(strategy)
  const total = all.length
  const deadlineGroups = groupByDeadline(all)

  const tierCount = strategy.tiers.filter(t => t.festivals?.length > 0).length

  return (
    <div className={styles.strategyBlock}>
      {intro && (
        <p style={{ fontSize: 15, color: '#1f2937', lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontWeight: 400, padding: '0 2px', margin: 0 }}>
          {intro}
        </p>
      )}

      {/* Stats row + view tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {[
            { value: total, label: 'festivals' },
            { value: tierCount, label: 'tiers' },
            ...(deadlineGroups.length > 0 ? [{ value: deadlineGroups.length, label: 'deadlines' }] : []),
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1 }}>
                {stat.value}
              </span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: 'rgba(54,65,83,0.38)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.viewTabs}>
          {[
            { key: 'cards',    label: 'Cards',    icon: <LayoutGrid size={12} /> },
            { key: 'timeline', label: 'Timeline', icon: <Layers size={12} /> },
            { key: 'calendar', label: 'Calendar', icon: <CalendarDays size={12} /> },
            { key: 'globe',    label: 'Globe',    icon: <Globe2 size={12} /> },
            { key: 'gallery',  label: 'Gallery',  icon: <Film size={12} /> },
          ].map(tab => (
            <button
              key={tab.key}
              className={`${styles.viewTab} ${view === tab.key ? styles.viewTabActive : ''}`}
              onClick={() => setView(tab.key)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div>
        {view === 'cards'    && <CardsView strategy={strategy} />}
        {view === 'timeline' && <TimelineView festivals={all} />}
        {view === 'calendar' && <CalendarView groups={deadlineGroups} all={all} />}
        {view === 'globe'    && <GlobeView festivals={all} />}
        {view === 'gallery'  && <GalleryView strategy={strategy} />}
      </div>

      {strategy.closing && (
        <p style={{ fontSize: 12, fontStyle: 'italic', color: 'rgba(54,65,83,0.42)', lineHeight: 1.65, padding: '0 2px', margin: 0, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 10 }}>
          {strategy.closing}
        </p>
      )}

      <motion.button className={styles.viewStrategyBtn} onClick={() => onViewStrategy(strategy)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <LayoutGrid size={13} />
        Full Dashboard — {total} festivals
        <span className={styles.viewStrategyArrow}>→</span>
      </motion.button>
    </div>
  )
}

// ─── Command Palette ─────────────────────────────────────────────────────────

function CommandPalette({ query, active, onSelect, onClose, paletteRef }) {
  const filtered = SKILLS.filter(s =>
    s.prefix.startsWith(query.length > 1 ? query : '/') ||
    s.label.toLowerCase().includes(query.slice(1).toLowerCase())
  )
  if (filtered.length === 0) return null
  return (
    <AnimatePresence>
      <motion.div ref={paletteRef} className={styles.commandPalette} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.14 }}>
        <div className={styles.commandHeader}>Commands</div>
        {filtered.map((skill, i) => (
          <motion.button key={skill.prefix} className={`${styles.commandItem} ${active === i ? styles.commandActive : ''}`} onClick={() => onSelect(skill)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}>
            <span className={styles.commandIcon}>{skill.icon}</span>
            <span className={styles.commandLabel}>{skill.label}</span>
            <span className={styles.commandPrefix}>{skill.prefix}</span>
            <span className={styles.commandDesc}>{skill.description}</span>
          </motion.button>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

// ─── LaurelMark ───────────────────────────────────────────────────────────────

function LaurelMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 14 C4 8, 10 4, 14 4"      stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 8, 18 4, 14 4"    stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M4 14 C4 20, 10 24, 14 24"   stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M24 14 C24 20, 18 24, 14 24" stroke="#FF5200" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="14" cy="14" r="2" fill="#FF5200" opacity="0.8"/>
      <path d="M7 9 C9 7, 11 7, 12 9"   stroke="#FF5200" strokeWidth="0.8" opacity="0.5"/>
      <path d="M21 9 C19 7, 17 7, 16 9"  stroke="#FF5200" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}

// ─── Landing ──────────────────────────────────────────────────────────────────

function Landing({ onChat, onExplore }) {
  return (
    <div className={styles.landing}>
      <div className={styles.landingInner}>
        <div className={styles.landingMark}><LaurelMark size={64} /></div>
        <h1 className={styles.landingTitle}>LAUREL</h1>
        <p className={styles.landingSubtitle}>Film Festival Strategy</p>
        <p className={styles.landingBody}>Build a tailored festival submission strategy for your film, or explore the festival landscape.</p>
        <div className={styles.landingBtns}>
          <button className={styles.landingBtnPrimary} onClick={onChat}>
            <span className={styles.sendBtnSlash}>//</span> TALK WITH LAUREL →
          </button>
          <button className={styles.landingBtnSecondary} onClick={onExplore}>
            EXPLORE FESTIVALS →
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Explore Festivals ────────────────────────────────────────────────────────

function ExploreFestivals({ onBack }) {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? FESTIVALS : FESTIVALS.filter(f => f.formats.includes(filter))
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
            <button key={f} className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`} onClick={() => setFilter(f)}>{f}</button>
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
                {fest.formats.map(fmt => <span key={fmt} className={styles.fmtTag}>{fmt}</span>)}
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
    if (!key.trim().startsWith('sk-')) { setError('Key must start with sk-ant-…'); return }
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
        <input className={`${styles.keyInput} ${error ? styles.keyInputError : ''}`} type="password" placeholder="sk-ant-api03-…" value={key} autoFocus onChange={e => { setKey(e.target.value); setError('') }} onKeyDown={e => e.key === 'Enter' && submit()} />
        {error && <p className={styles.keyError}>{error}</p>}
        <button className={styles.keyBtn} onClick={submit}>
          <span className={styles.sendBtnSlash}>//</span> BEGIN SESSION →
        </button>
        {onBack && <button className={styles.keyBackBtn} onClick={onBack}>← Back</button>}
        <p className={styles.keyNote}>Your key is only sent directly to Anthropic's API. It is never logged or stored. In production, set <code>VITE_ANTHROPIC_API_KEY</code> in your environment to skip this screen.</p>
      </div>
    </div>
  )
}

// ─── Input UI Helpers ────────────────────────────────────────────────────────

function ToolBtn({ children, onClick, title, active }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 32, height: 32, borderRadius: 8, border: 'none',
        background: active || hovered ? 'rgba(255,82,0,0.1)' : 'transparent',
        color: active ? '#FF5200' : hovered ? '#FF5200' : 'rgba(255,255,255,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  )
}

// ─── File Preview Card ────────────────────────────────────────────────────────

function FilePreviewCard({ file, onRemove }) {
  const isImg = file.type.startsWith('image/') && file.preview
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', flexShrink: 0, width: 88, height: 88,
        borderRadius: 12, overflow: 'hidden',
        border: `1px solid rgba(255,82,0,0.2)`,
        background: '#1A0D05',
        transition: 'border-color 0.15s',
        ...(hovered && { borderColor: 'rgba(255,82,0,0.45)' }),
      }}
    >
      {isImg ? (
        <img src={file.preview} alt={file.file.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{ padding: '10px 10px 8px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <FileText size={14} color="rgba(255,255,255,0.4)" />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {file.file.name.split('.').pop()}
            </span>
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {file.file.name}
            </div>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>
              {file.file.size > 1024 * 1024 ? `${(file.file.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(file.file.size / 1024)} KB`}
            </div>
          </div>
        </div>
      )}
      {hovered && (
        <button
          onClick={() => onRemove(file.id)}
          style={{
            position: 'absolute', top: 5, right: 5,
            width: 18, height: 18, borderRadius: '50%',
            background: 'rgba(0,0,0,0.7)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
          }}
        >
          <X size={10} />
        </button>
      )}
    </div>
  )
}

// ─── Inline Key Entry ─────────────────────────────────────────────────────────

function InlineKeyEntry({ onReady }) {
  const [key, setKey]     = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const envKey = import.meta.env.VITE_ANTHROPIC_API_KEY
    if (envKey?.startsWith('sk-')) onReady(envKey)
  }, [onReady])

  function submit() {
    if (!key.trim().startsWith('sk-')) { setError('Key must start with sk-ant-…'); return }
    onReady(key.trim())
  }

  return (
    <div style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <LaurelMark size={28} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 700, color: '#C81400', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Laurel</span>
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(0,0,0,0.5)', lineHeight: 1.6, margin: 0 }}>
        Enter your Anthropic API key to begin.<br />
        Get one at <strong style={{ color: 'rgba(0,0,0,0.65)' }}>console.anthropic.com → API Keys</strong>
      </p>
      <input
        type="password"
        placeholder="sk-ant-api03-…"
        value={key}
        autoFocus
        onChange={e => { setKey(e.target.value); setError('') }}
        onKeyDown={e => e.key === 'Enter' && submit()}
        style={{
          fontFamily: "'Geist Mono', monospace", fontSize: 13,
          padding: '12px 16px', borderRadius: 12,
          border: error ? '1.5px solid #C81400' : '1.5px solid #FF9933',
          background: '#fff', color: '#364153', outline: 'none',
          transition: 'border-color 0.15s',
        }}
        onFocus={e => { if (!error) e.target.style.borderColor = '#FF5200' }}
        onBlur={e => { if (!error) e.target.style.borderColor = '#FF9933' }}
      />
      {error && <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: '#C81400', margin: 0 }}>{error}</p>}
      <button
        onClick={submit}
        style={{
          fontFamily: "'Geist Mono', monospace", fontSize: 13, fontWeight: 600,
          letterSpacing: '0.06em', padding: '12px 0',
          background: '#FF5200', color: '#fff', border: 'none',
          borderRadius: 12, cursor: 'pointer', transition: 'background 0.15s',
        }}
        onMouseEnter={e => e.target.style.background = '#C81400'}
        onMouseLeave={e => e.target.style.background = '#FF5200'}
      >
        BEGIN SESSION →
      </button>
      <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: 'rgba(0,0,0,0.28)', margin: 0, lineHeight: 1.6 }}>
        Your key is sent only to Anthropic's API — never logged or stored by us.
      </p>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Laurel() {
  const savedKey = localStorage.getItem('laurel_api_key')
  const [mode,           setMode]           = useState('chat')
  const [apiKey,         setApiKey]         = useState(savedKey ?? null)
  const [activeStrategy, setActiveStrategy] = useState(null)
  const [messages,       setMessages]       = useState([])
  const [input,          setInput]          = useState('')
  const [loading,        setLoading]        = useState(false)
  const [showCommands,   setShowCommands]   = useState(false)
  const [activeCommand,  setActiveCommand]  = useState(-1)
  const [attachedFiles,  setAttachedFiles]  = useState([])
  const [isDragging,     setIsDragging]     = useState(false)
  const [inputFocused,   setInputFocused]   = useState(false)

  const history        = useRef([])
  const messagesEndRef = useRef(null)
  const textareaRef    = useRef(null)
  const paletteRef     = useRef(null)
  const fileInputRef   = useRef(null)

  function handleFiles(fileList) {
    const newFiles = Array.from(fileList).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      type: file.type || 'application/octet-stream',
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }))
    setAttachedFiles(prev => [...prev, ...newFiles])
  }

  function removeFile(id) {
    setAttachedFiles(prev => {
      const f = prev.find(f => f.id === id)
      if (f?.preview) URL.revokeObjectURL(f.preview)
      return prev.filter(f => f.id !== id)
    })
  }

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [input])

  useEffect(() => {
    if (input.startsWith('/') && !input.includes(' ')) {
      setShowCommands(true)
      const idx = SKILLS.findIndex(s => s.prefix.startsWith(input))
      setActiveCommand(idx >= 0 ? idx : 0)
    } else {
      setShowCommands(false)
      setActiveCommand(-1)
    }
  }, [input])

  useEffect(() => {
    function onClickOutside(e) {
      if (paletteRef.current && !paletteRef.current.contains(e.target) && !textareaRef.current?.contains(e.target)) setShowCommands(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function selectCommand(skill) {
    setInput(skill.prefix + ' ')
    setShowCommands(false)
    setActiveCommand(-1)
    textareaRef.current?.focus()
  }

  function handleKeyDown(e) {
    if (showCommands) {
      const filtered = SKILLS.filter(s => s.prefix.startsWith(input.length > 1 ? input : '/') || s.label.toLowerCase().includes(input.slice(1).toLowerCase()))
      if (e.key === 'ArrowDown') { e.preventDefault(); setActiveCommand(p => (p < filtered.length - 1 ? p + 1 : 0)) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveCommand(p => (p > 0 ? p - 1 : filtered.length - 1)) }
      else if (e.key === 'Tab' || e.key === 'Enter') { e.preventDefault(); if (activeCommand >= 0 && filtered[activeCommand]) selectCommand(filtered[activeCommand]) }
      else if (e.key === 'Escape') { e.preventDefault(); setShowCommands(false) }
      return
    }
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input) }
  }

  async function send(text) {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    setInput('')
    setAttachedFiles([])
    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    history.current = [...history.current, { role: 'user', content: trimmed }]
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
        body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system: SYSTEM_PROMPT, messages: history.current }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessages(prev => [...prev, { role: 'agent', text: `⚠️ ${data?.error?.message || `API error ${res.status}`}` }])
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

  if (mode === 'explore') return <ExploreFestivals onBack={() => setMode('chat')} />
  if (mode === 'strategy' && activeStrategy) return <StrategyDashboard strategy={activeStrategy} onBack={() => setMode('chat')} />

  const RECENT_CONVS = messages.length > 0
    ? [{ id: 'current', text: messages[0]?.text?.slice(0, 38) + '…' }]
    : []

  const PAST_CONVS = [
    'Documentary short, Sundance strategy',
    'Animated feature — Annecy & beyond',
    'Micro-budget drama Oscar path',
    'First feature narrative, SXSW target',
  ]

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <div><LaurelMark size={26} /></div>
          <div className={styles.headerDivider} />
          <div>
            <div className={styles.headerTitle}>Laurel</div>
            <div className={styles.headerSub}>Film Festival Strategy Agent</div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.backBtn} onClick={() => setMode('explore')}>Explore Festivals</button>
          <div className={styles.statusDot} />
          <span className={styles.statusLabel}>Ready</span>
        </div>
      </header>

      <div className={styles.chatLayout}>
        {/* ── Sidebar ── */}
        <aside className={styles.chatSidebar}>
          <div className={styles.sidebarTop}>
            <button className={styles.newChatBtn} onClick={() => { setMessages([]); setInput('') }}>
              <Plus size={18} />
              New chat
            </button>
          </div>

          <div className={styles.sidebarConvs}>
            <div className={styles.convSectionHead}>
              <span className={styles.convSectionLabel}>Your conversations</span>
              <button className={styles.convClearBtn} onClick={() => setMessages([])}>Clear All</button>
            </div>

            {RECENT_CONVS.map(c => (
              <div key={c.id} className={`${styles.convItem} ${styles.convItemActive}`}>
                <Layers size={16} className={styles.convItemIcon} style={{ color: '#FF5200', opacity: 1 }} />
                <span className={styles.convItemText}>{c.text}</span>
              </div>
            ))}

            {PAST_CONVS.map((t, i) => (
              <div key={i} className={styles.convItem}>
                <Layers size={16} className={styles.convItemIcon} style={{ color: '#364153' }} />
                <span className={styles.convItemText}>{t}</span>
              </div>
            ))}

            <p className={styles.convDividerLabel}>Last 7 Days</p>
            <div className={styles.convItem}>
              <Layers size={16} className={styles.convItemIcon} style={{ color: '#364153' }} />
              <span className={styles.convItemText}>Short film, European circuit</span>
            </div>
            <div className={styles.convItem}>
              <Layers size={16} className={styles.convItemIcon} style={{ color: '#364153' }} />
              <span className={styles.convItemText}>Feature doc — Hot Docs path</span>
            </div>
          </div>

          <div className={styles.sidebarFooter}>
            <button className={styles.sidebarFooterBtn} onClick={() => { localStorage.removeItem('laurel_api_key'); setApiKey(null) }}>
              <Wallet size={16} style={{ color: '#364153', opacity: 0.6 }} />
              <span className={styles.sidebarFooterLabel}>Settings</span>
            </button>
            <button className={styles.sidebarFooterBtn}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#FF5200', flexShrink: 0 }} />
              <span className={styles.sidebarFooterLabel}>Your Account</span>
            </button>
          </div>
        </aside>

        {/* ── Main chat area ── */}
        <div className={styles.chatMain}>
          {!apiKey && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
              <InlineKeyEntry onReady={k => { localStorage.setItem('laurel_api_key', k); setApiKey(k) }} />
            </div>
          )}
          <div className={styles.messages} style={!apiKey ? { display: 'none' } : {}}>
            {messages.length === 0 && !loading && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, padding: '40px 24px 24px' }}>
                <div style={{ marginBottom: 36, textAlign: 'center' }}>
                  <LaurelMark size={30} />
                  <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(54,65,83,0.28)', marginTop: 14, marginBottom: 10 }}>
                    Film Festival Strategy
                  </div>
                  <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>
                    Tell me about your film.
                  </h2>
                </div>
                <div style={{ width: '100%', maxWidth: 440 }}>
                  {STARTERS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setInput(s.template); setTimeout(() => textareaRef.current?.focus(), 50) }}
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 14px', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', borderRadius: 10, width: '100%' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.04)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, color: '#FF5200', opacity: 0.55, width: 18, flexShrink: 0, textAlign: 'right' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#1f2937', lineHeight: 1.25 }}>{s.label}</div>
                        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: 'rgba(54,65,83,0.36)', marginTop: 2 }}>{s.desc}</div>
                      </div>
                      <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: 'rgba(54,65,83,0.18)', flexShrink: 0 }}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => {
              if (m.role === 'user') return (
                <div key={i} className={`${styles.msgRow} ${styles.user}`}>
                  <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, letterSpacing: '0.12em', color: 'rgba(54,65,83,0.3)', textTransform: 'uppercase', marginBottom: 6, paddingRight: 4 }}>You</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#364153', lineHeight: 1.65, maxWidth: '80%', textAlign: 'right', whiteSpace: 'pre-wrap' }}>{m.text}</div>
                </div>
              )
              return (
                <div key={i} className={`${styles.msgRow} ${styles.agent}`}>
                  <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9, letterSpacing: '0.12em', color: '#FF5200', textTransform: 'uppercase', marginBottom: 6, paddingLeft: 2, opacity: 0.7 }}>Laurel</div>
                  <StrategyMessage text={m.text} onViewStrategy={s => { setActiveStrategy(s); setMode('strategy') }} />
                </div>
              )
            })}

            {loading && (
              <div className={styles.typingRow}>
                <div className={styles.typingBubble}>
                  <div className="generating-loader-wrapper">
                    <div className="generating-loader-text">
                      {'Analyzing...'.split('').map((ch, i) => (
                        <span key={i} className="generating-loader-letter" style={{ animationDelay: `${i * 0.07}s` }}>{ch}</span>
                      ))}
                    </div>
                    <div className="generating-loader-bar" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ── */}
          {apiKey && <div
            className={styles.chatInputArea}
            onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
            onDragLeave={e => { e.preventDefault(); setIsDragging(false) }}
            onDrop={e => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files) handleFiles(e.dataTransfer.files) }}
          >
            {showCommands && (
              <CommandPalette query={input} active={activeCommand} onSelect={selectCommand} onClose={() => setShowCommands(false)} paletteRef={paletteRef} />
            )}

            <div className={styles.chatInputBox} onClick={() => textareaRef.current?.focus()}>
              {attachedFiles.length > 0 && (
                <div style={{ display: 'flex', gap: 10, padding: '12px 24px 0', overflowX: 'auto' }}>
                  {attachedFiles.map(f => <FilePreviewCard key={f.id} file={f} onRemove={removeFile} />)}
                </div>
              )}
              <textarea
                ref={textareaRef}
                className={styles.chatTextarea}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder="⊕  Tell me about your film…"
                rows={1}
              />
              <button
                className={styles.chatSendBtn}
                onClick={() => send(input)}
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <ArrowUp size={18} strokeWidth={2.5} />
              </button>
            </div>

            {isDragging && (
              <div style={{
                position: 'absolute', inset: '16px 32px 24px',
                background: 'rgba(255,82,0,0.06)', border: '2px dashed #FF5200',
                borderRadius: 22, zIndex: 50, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
              }}>
                <Plus size={28} color="#FF5200" style={{ marginBottom: 8 }} />
                <p style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: '#FF5200', letterSpacing: '0.1em' }}>DROP TO ATTACH</p>
              </div>
            )}

            <input ref={fileInputRef} type="file" multiple style={{ display: 'none' }}
              onChange={e => { if (e.target.files) handleFiles(e.target.files); e.target.value = '' }} />

            <p className={styles.chatHint}>Enter to send · Shift+Enter for new line</p>
          </div>}
        </div>
      </div>
    </div>
  )
}
