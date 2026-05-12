import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CalendarDays, Layers, Wallet, Command, LayoutGrid, Calendar, GitCommitVertical } from 'lucide-react'
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
  const fenced = text.match(/```(?:json)?\s*([\s\S]+?)```/)
  const raw = fenced ? fenced[1].trim() : null
  const bare = !raw ? text.match(/(\{[\s\S]*?\})(?:\s*$)/m) : null
  const candidate = raw || (bare && bare[1])
  if (!candidate) return null
  try { return normalizeToStrategy(JSON.parse(candidate)) } catch { return null }
}

function getIntro(text) {
  const idx = text.indexOf('```')
  return idx > 0 ? text.slice(0, idx).trim() : null
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

const VIEWS = [
  { id: 'grid',     label: 'Grid',     Icon: LayoutGrid },
  { id: 'calendar', label: 'Calendar', Icon: Calendar },
  { id: 'timeline', label: 'Timeline', Icon: GitCommitVertical },
]

function DashFestCard({ festival, tier }) {
  const tierCls = { A: styles.dashCardA, B: styles.dashCardB, C: styles.dashCardC }
  return (
    <div className={`${styles.dashFestCard} ${tierCls[tier] || ''}`}>
      <div className={styles.dashCardHead}>
        <div>
          <div className={styles.dashCardName}>{festival.name}</div>
          {festival.location && <div className={styles.dashCardLoc}>{festival.location}</div>}
        </div>
        {(festival.submit_by || festival.festival_date) && (
          <div className={styles.dashCardDates}>
            {festival.submit_by && (
              <div className={styles.dashDateRow}>
                <span className={styles.dashDateLabel}>Submit</span>
                <span className={styles.dashDateVal}>{festival.submit_by}</span>
              </div>
            )}
            {festival.festival_date && (
              <div className={styles.dashDateRow}>
                <span className={styles.dashDateLabel}>Screens</span>
                <span className={styles.dashDateVal}>{festival.festival_date}</span>
              </div>
            )}
          </div>
        )}
      </div>
      <p className={styles.dashCardReason}>{festival.reason}</p>
      {festival.tips?.length > 0 && (
        <ul className={styles.dashCardTips}>
          {festival.tips.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      )}
    </div>
  )
}

const TIER_META = {
  A: { label: 'Top-Tier',         cls: styles.tierA },
  B: { label: 'Mid-Tier',         cls: styles.tierB },
  C: { label: 'Niche / Regional', cls: styles.tierC },
}

function GridView({ strategy }) {
  return (
    <div className={styles.gridView}>
      {strategy.tiers.filter(t => t.festivals?.length > 0).map(tier => {
        const meta = TIER_META[tier.tier] || { label: tier.label, cls: styles.tierC }
        return (
          <div key={tier.tier} className={styles.tierSection}>
            <div className={`${styles.tierHeader} ${meta.cls}`}>
              <span className={styles.tierBadge}>{tier.tier}</span>
              <span className={styles.tierLabel}>{tier.label || meta.label}</span>
              <span className={styles.tierCount}>{tier.festivals.length} festival{tier.festivals.length !== 1 ? 's' : ''}</span>
            </div>
            <div className={styles.dashFestGrid}>
              {tier.festivals.map((f, i) => <DashFestCard key={i} festival={f} tier={tier.tier} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function CalendarView({ strategy }) {
  const groups = groupByDeadline(flatFestivals(strategy))
  if (groups.length === 0) return (
    <div className={styles.emptyView}><p>No deadline dates in this strategy.</p><p>Ask Laurel to regenerate with submission windows included.</p></div>
  )
  const tierColor = { A: styles.calDotA, B: styles.calDotB, C: styles.calDotC }
  return (
    <div className={styles.calView}>
      {groups.map(g => (
        <motion.div key={g.key} className={styles.calMonth} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <div className={styles.calMonthHeader}>
            <span className={styles.calMonthName}>{MONTH_FULL[g.month]}</span>
            <span className={styles.calMonthYear}>{g.year}</span>
            <span className={styles.calMonthCount}>{g.festivals.length} deadline{g.festivals.length !== 1 ? 's' : ''}</span>
          </div>
          <div className={styles.calFests}>
            {g.festivals.map((f, i) => (
              <div key={i} className={styles.calFestRow}>
                <span className={`${styles.calDot} ${tierColor[f.tier] || ''}`} />
                <div className={styles.calFestInfo}>
                  <span className={styles.calFestName}>{f.name}</span>
                  <span className={styles.calFestLoc}>{f.location}</span>
                </div>
                <div className={styles.calFestMeta}>
                  <span className={`${styles.calTierBadge} ${styles[`calTier${f.tier}`]}`}>{f.tier}</span>
                  {f.festival_date && <span className={styles.calScreenDate}>screens {f.festival_date}</span>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function TimelineView({ strategy }) {
  const all    = flatFestivals(strategy)
  const sorted = all.map(f => ({ ...f, parsed: parseMonthYear(f.submit_by) })).filter(f => f.parsed).sort((a, b) => a.parsed.sortKey - b.parsed.sortKey)
  const noDate = all.filter(f => !parseMonthYear(f.submit_by))
  if (sorted.length === 0) return <div className={styles.emptyView}><p>No deadline dates available for timeline view.</p></div>
  const tierCls  = { A: styles.tlCardA,  B: styles.tlCardB,  C: styles.tlCardC  }
  const dotCls   = { A: styles.tlDotA,   B: styles.tlDotB,   C: styles.tlDotC   }
  const badgeCls = { A: styles.tlBadgeA, B: styles.tlBadgeB, C: styles.tlBadgeC }
  return (
    <div className={styles.tlView}>
      {sorted.map((f, i) => {
        const showMonth = i === 0 || sorted[i - 1].parsed.sortKey !== f.parsed.sortKey
        return (
          <div key={i} className={styles.tlItem}>
            {showMonth && (
              <div className={styles.tlMonthMarker}>
                <span className={styles.tlMonthLabel}>{MONTH_ABBR[f.parsed.month]} {f.parsed.year}</span>
                <div className={styles.tlMonthLine} />
              </div>
            )}
            <div className={styles.tlRow}>
              <div className={styles.tlTrackCol}>
                <div className={`${styles.tlDot} ${dotCls[f.tier] || ''}`} />
                {i < sorted.length - 1 && <div className={styles.tlConnector} />}
              </div>
              <motion.div className={`${styles.tlCard} ${tierCls[f.tier] || ''}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <div className={styles.tlCardHead}>
                  <span className={`${styles.tlBadge} ${badgeCls[f.tier] || ''}`}>{f.tier}</span>
                  <span className={styles.tlCardName}>{f.name}</span>
                  <span className={styles.tlCardLoc}>{f.location}</span>
                </div>
                <p className={styles.tlCardReason}>{f.reason}</p>
                {f.festival_date && <div className={styles.tlCardFestDate}>Festival: {f.festival_date}</div>}
              </motion.div>
            </div>
          </div>
        )
      })}
      {noDate.length > 0 && (
        <div className={styles.tlNoDate}>
          <div className={styles.tlNoDateLabel}>No deadline specified</div>
          {noDate.map((f, i) => (
            <div key={i} className={`${styles.tlCard} ${tierCls[f.tier] || ''}`} style={{ marginBottom: 8 }}>
              <div className={styles.tlCardHead}>
                <span className={`${styles.tlBadge} ${badgeCls[f.tier] || ''}`}>{f.tier}</span>
                <span className={styles.tlCardName}>{f.name}</span>
                <span className={styles.tlCardLoc}>{f.location}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function StrategyDashboard({ strategy, onBack }) {
  const [view, setView] = useState('grid')
  const total = flatFestivals(strategy).length
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={onBack}>← Chat</button>
          <div className={styles.headerDivider} />
          <div>
            <div className={styles.headerTitle}>Your Strategy</div>
            <div className={styles.headerSub}>{total} festival{total !== 1 ? 's' : ''} · {strategy.tiers.filter(t => t.festivals?.length > 0).length} tiers</div>
          </div>
        </div>
        <div className={styles.dashTabs}>
          {VIEWS.map(({ id, label, Icon }) => (
            <button key={id} className={`${styles.dashTab} ${view === id ? styles.dashTabActive : ''}`} onClick={() => setView(id)}>
              <Icon size={12} />{label}
            </button>
          ))}
        </div>
      </header>
      {strategy.closing && <div className={styles.dashClosingBanner}>{strategy.closing}</div>}
      <div className={styles.dashContent}>
        <AnimatePresence mode="wait">
          <motion.div key={view} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} style={{ height: '100%' }}>
            {view === 'grid'     && <GridView     strategy={strategy} />}
            {view === 'calendar' && <CalendarView strategy={strategy} />}
            {view === 'timeline' && <TimelineView strategy={strategy} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── Strategy Cards (in chat) ─────────────────────────────────────────────────

function FestivalCard({ festival }) {
  return (
    <div className={styles.festCard}>
      <div className={styles.festHeader}>
        <span className={styles.festName}>{festival.name}</span>
        {festival.location && <span className={styles.festLocation}>{festival.location}</span>}
      </div>
      <p className={styles.festReason}>{festival.reason}</p>
      {festival.tips?.length > 0 && (
        <ul className={styles.festTips}>{festival.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
      )}
    </div>
  )
}

function StrategyMessage({ text, onViewStrategy }) {
  const strategy = parseStrategy(text)
  const intro    = getIntro(text)
  if (!strategy) return <div className={`${styles.msgBubble} ${styles.agentBubble}`}>{renderMarkdown(text)}</div>
  const total = flatFestivals(strategy).length
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
      <motion.button className={styles.viewStrategyBtn} onClick={() => onViewStrategy(strategy)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <LayoutGrid size={13} />
        View Full Strategy — {total} festivals
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Laurel() {
  const [mode,           setMode]           = useState(null)
  const [apiKey,         setApiKey]         = useState(null)
  const [activeStrategy, setActiveStrategy] = useState(null)
  const [messages,       setMessages]       = useState([])
  const [input,          setInput]          = useState('')
  const [loading,        setLoading]        = useState(false)
  const [showCommands,   setShowCommands]   = useState(false)
  const [activeCommand,  setActiveCommand]  = useState(-1)

  const history        = useRef([])
  const messagesEndRef = useRef(null)
  const textareaRef    = useRef(null)
  const paletteRef     = useRef(null)

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
    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    history.current = [...history.current, { role: 'user', content: trimmed }]
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
        body: JSON.stringify({ model: MODEL, max_tokens: 1500, system: SYSTEM_PROMPT, messages: history.current }),
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

  if (mode === null)   return <Landing onChat={() => setMode('chat')} onExplore={() => setMode('explore')} />
  if (mode === 'explore') return <ExploreFestivals onBack={() => setMode(null)} />
  if (mode === 'strategy' && activeStrategy) return <StrategyDashboard strategy={activeStrategy} onBack={() => setMode('chat')} />
  if (!apiKey) return <KeyScreen onReady={setApiKey} onBack={() => setMode(null)} />

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
            <p className={styles.welcomeBody}>Choose a strategy template or describe your film directly.</p>
            <div className={styles.starters}>
              {STARTERS.map((s, i) => (
                <button key={i} className={styles.starterBtn} onClick={() => { setInput(s.template); setTimeout(() => textareaRef.current?.focus(), 50) }}>
                  <span className={styles.starterLabel}>{s.label}</span>
                  <span className={styles.starterDesc}>{s.desc}</span>
                </button>
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
              <StrategyMessage text={m.text} onViewStrategy={s => { setActiveStrategy(s); setMode('strategy') }} />
            </div>
          )
        })}

        {loading && (
          <div className={styles.typingRow}>
            <div className={styles.typingBubble}>
              {[0, 1, 2].map(i => <div key={i} className={styles.typingDot} style={{ animationDelay: `${i * 0.2}s` }} />)}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputOuter}>
          {showCommands && (
            <CommandPalette query={input} active={activeCommand} onSelect={selectCommand} onClose={() => setShowCommands(false)} paletteRef={paletteRef} />
          )}
          <div className={styles.inputWrap}>
            <button className={`${styles.cmdTrigger} ${showCommands ? styles.cmdTriggerActive : ''}`} onClick={() => { setInput('/'); setShowCommands(true); textareaRef.current?.focus() }} title="Commands">
              <Command size={13} />
            </button>
            <textarea ref={textareaRef} className={styles.textarea} placeholder="Tell me about your film… or type / for commands" value={input} rows={1} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} />
            <button className={styles.sendBtn} onClick={() => send(input)} disabled={loading || !input.trim()} aria-label="Send">↑</button>
          </div>
        </div>
        <p className={styles.inputHint}>Enter to send · Shift+Enter for new line · / for commands</p>
      </div>
    </div>
  )
}
