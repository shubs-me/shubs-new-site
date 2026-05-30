'use client'
import { useEffect, useRef } from 'react'

// ---------------------------------------------------------------------------
// listen – equalizer bars
// ---------------------------------------------------------------------------
function ListenIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const bars = Array.from(svg.querySelectorAll<SVGRectElement>('.eq-bar'))

    const phases   = [0, 0.6, 1.3, 2.0, 2.7]
    const minH     = 6
    const maxH     = 30
    const centerY  = 28

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      bars.forEach((bar, i) => {
        const h  = minH + (maxH - minH) * ((Math.sin(t * 2.8 + phases[i]) + 1) / 2)
        const y  = centerY - h / 2
        bar.setAttribute('height', String(h))
        bar.setAttribute('y',      String(y))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const xPositions = [10, 18, 26, 34, 42]

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      {xPositions.map((x, i) => (
        <rect
          key={i}
          className="eq-bar"
          x={x}
          y={16}
          width={5}
          height={24}
          rx={2.5}
          style={{ fill: 'var(--sq-amber)' }}
          opacity={0.85}
        />
      ))}
    </svg>
  )
}

// ---------------------------------------------------------------------------
// match – two dots converging
// ---------------------------------------------------------------------------
function MatchIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const dotA    = svg.querySelector<SVGCircleElement>('#ma-dot-a')
    const dotB    = svg.querySelector<SVGCircleElement>('#ma-dot-b')
    const line    = svg.querySelector<SVGLineElement>('#ma-line')
    const centerX = 28
    const startA  = 10
    const startB  = 46
    const pauseDuration = 0.35
    const cycleDuration = 2.8

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) / 1000
      const t = elapsed % cycleDuration

      let progress: number
      const halfCycle = (cycleDuration - pauseDuration) / 2

      if (t < halfCycle) {
        progress = t / halfCycle
      } else if (t < halfCycle + pauseDuration) {
        progress = 1
      } else {
        progress = 1 - (t - halfCycle - pauseDuration) / halfCycle
      }

      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      const ax = startA + (centerX - startA) * eased
      const bx = startB - (startB - centerX) * eased

      if (dotA) dotA.setAttribute('cx', String(ax))
      if (dotB) dotB.setAttribute('cx', String(bx))

      if (line) {
        const gap = bx - ax
        const lineOpacity = gap < 20 ? Math.max(0, (20 - gap) / 20) * 0.85 : 0
        line.setAttribute('x1',      String(ax))
        line.setAttribute('x2',      String(bx))
        line.setAttribute('opacity', String(lineOpacity))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      <line
        id="ma-line"
        x1="10" y1="28" x2="46" y2="28"
        style={{ stroke: 'var(--sq-amber)' }}
        strokeWidth={1.6}
        strokeDasharray="3 3"
        opacity={0}
      />
      <circle id="ma-dot-a" cx={10} cy={28} r={5.5} style={{ fill: 'var(--sq-amber)' }} opacity={0.85} />
      <circle id="ma-dot-b" cx={46} cy={28} r={5.5} style={{ fill: 'var(--sq-teal)' }}  opacity={0.85} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// embed – orbiting dot
// ---------------------------------------------------------------------------
function EmbedIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const orbiter = svg.querySelector<SVGCircleElement>('#em-orbiter')

    const cx     = 28
    const cy     = 28
    const orbitR = 16
    const speed  = 0.7

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const t     = (ts - startRef.current) / 1000
      const angle = t * speed

      if (orbiter) {
        orbiter.setAttribute('cx', String(cx + orbitR * Math.cos(angle)))
        orbiter.setAttribute('cy', String(cy + orbitR * Math.sin(angle)))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      <circle cx={28} cy={28} r={22} fill="none" style={{ stroke: 'var(--sq-teal)' }}  strokeWidth={1.4} strokeDasharray="4 4" opacity={0.5} />
      <circle cx={28} cy={28} r={16} fill="none" style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1} opacity={0.4} />
      <circle cx={28} cy={28} r={5}  style={{ fill: 'var(--sq-teal)' }}  opacity={0.85} />
      <circle id="em-orbiter" cx={44} cy={28} r={3.5} style={{ fill: 'var(--sq-amber)' }} opacity={0.9} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// deliver – ascending diagonal trace
// ---------------------------------------------------------------------------
function DeliverIcon() {
  const svgRef   = useRef<SVGSVGElement>(null)
  const rafRef   = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const dot   = svg.querySelector<SVGCircleElement>('#dv-dot')
    const trail = svg.querySelector<SVGLineElement>('#dv-trail')

    const x1 = 10, y1 = 46
    const x2 = 46, y2 = 10
    const duration = 2.2  // slightly longer for a smoother feel

    function tick(ts: number) {
      if (!startRef.current) startRef.current = ts
      const elapsed = (ts - startRef.current) / 1000
      const raw = (elapsed % duration) / duration

      // Ease in-out for the travel
      const p = raw < 0.5
        ? 2 * raw * raw
        : 1 - Math.pow(-2 * raw + 2, 2) / 2

      const dotX = x1 + (x2 - x1) * p
      const dotY = y1 + (y2 - y1) * p

      // Fade out at end of sweep, fade in at start — hides the position reset
      const fadeIn  = raw < 0.08 ? raw / 0.08 : 1
      const fadeOut = raw > 0.88 ? Math.max(0, 1 - (raw - 0.88) / 0.12) : 1
      const fade    = fadeIn * fadeOut

      if (dot) {
        dot.setAttribute('cx', String(dotX))
        dot.setAttribute('cy', String(dotY))
        dot.setAttribute('opacity', String(0.9 * fade))
      }

      if (trail) {
        trail.setAttribute('x1', String(x1))
        trail.setAttribute('y1', String(y1))
        trail.setAttribute('x2', String(dotX))
        trail.setAttribute('y2', String(dotY))
        trail.setAttribute('opacity', String((0.15 + 0.65 * p) * fade))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg ref={svgRef} viewBox="0 0 56 56" width={56} height={56} aria-hidden>
      <line x1={10} y1={46} x2={46} y2={10} style={{ stroke: 'var(--sq-amber)' }} strokeWidth={1.4} opacity={0.25} />
      <line id="dv-trail" x1={10} y1={46} x2={10} y2={46} style={{ stroke: 'var(--sq-amber)' }} strokeWidth={2.4} strokeLinecap="round" opacity={0} />
      <circle id="dv-dot" cx={10} cy={46} r={3.5} style={{ fill: 'var(--sq-amber)' }} opacity={0.9} />
      <circle cx={46} cy={10} r={2.5} style={{ fill: 'var(--sq-teal)' }} opacity={0.6} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
type IconType = 'listen' | 'match' | 'embed' | 'deliver'

export default function ProcessStepIcon({ type }: { type: IconType }) {
  switch (type) {
    case 'listen':  return <ListenIcon />
    case 'match':   return <MatchIcon />
    case 'embed':   return <EmbedIcon />
    case 'deliver': return <DeliverIcon />
  }
}
