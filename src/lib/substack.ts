import Parser from 'rss-parser'

export interface Essay {
  title: string
  url: string
  /** e.g. "Mar 2026" */
  date: string
  blurb: string
}

const FEED_URL = 'https://shubstack.substack.com/feed'

/**
 * Fallback essays used if the live Substack feed can't be reached at build or
 * request time. Keeps the page populated and the build green offline.
 */
const FALLBACK: Essay[] = [
  {
    title: 'On solving actual problems in healthcare',
    url: 'https://shubstack.substack.com',
    date: 'Mar 2026',
    blurb:
      "Don't start with what tech or dataset you have. Start with the actual outcome and goal, and work with the people who have the problem.",
  },
  {
    title: 'Same same, but different',
    url: 'https://shubstack.substack.com',
    date: 'Mar 2026',
    blurb:
      'On choosing what matters and defining better health outcomes in digital health, and why ambitious claims about AI deserve more scepticism than they usually get.',
  },
  {
    title: 'Evaluating tech in healthcare: measuring what matters',
    url: 'https://shubstack.substack.com',
    date: 'Nov 2025',
    blurb:
      'Why most digital health evaluation frameworks miss the point, and what rigorous value measurement actually looks like.',
  },
]

function formatDate(iso?: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}

function clip(text: string, max = 180): string {
  const t = (text || '').replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return t.slice(0, max).replace(/[\s,;:.]+\S*$/, '') + '…'
}

/**
 * Fetch the latest essays from the Substack RSS feed. Cached and revalidated
 * hourly via Next's fetch cache. Falls back to a static list on any error.
 */
export async function getEssays(limit = 6): Promise<Essay[]> {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; shubs-site/1.0)' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`feed ${res.status}`)
    const xml = await res.text()
    const feed = await new Parser().parseString(xml)
    const items = (feed.items || [])
      .map((it) => ({
        title: (it.title || '').trim(),
        url: it.link || FEED_URL,
        date: formatDate(it.isoDate || it.pubDate),
        blurb: clip(it.contentSnippet || it.content || ''),
      }))
      .filter((e) => e.title)
    if (!items.length) throw new Error('empty feed')
    return items.slice(0, limit)
  } catch {
    return FALLBACK.slice(0, limit)
  }
}
