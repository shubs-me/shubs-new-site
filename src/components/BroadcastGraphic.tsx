'use client'
import { useEffect, useRef } from 'react'

const NUM_RINGS = 5

export default function BroadcastGraphic({ size = 80 }: { size?: number }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const rings = Array.from(svg.querySelectorAll<SVGCircleElement>('.bcr'))

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      rings.forEach((ring, i) => {
        const phase   = i / NUM_RINGS
        const p       = ((t * 0.65 + phase) % 1)
        const r       = 6 + p * 32
        const opacity = (1 - p) * 0.85
        ring.setAttribute('r',       String(r))
        ring.setAttribute('opacity', String(Math.max(0, opacity)))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const cx = size / 2
  const cy = size / 2

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      aria-hidden
    >
      {Array.from({ length: NUM_RINGS }).map((_, i) => (
        <circle
          key={i}
          className="bcr"
          cx={cx} cy={cy} r="6"
          fill="none"
          style={{ stroke: i % 2 === 0 ? 'var(--sq-teal)' : 'var(--sq-amber)' }}
          strokeWidth="2"
          opacity="0"
        />
      ))}
      <circle cx={cx} cy={cy} r={size / 2 - 2} fill="none" style={{ stroke: 'var(--sq-teal)' }} strokeWidth="1" opacity="0.35" />
      <circle cx={cx} cy={cy} r="5" style={{ fill: 'var(--sq-teal)' }} opacity="0.5" />
      <circle cx={cx} cy={cy} r="2.5" style={{ fill: 'var(--sq-amber)' }} opacity="1" />
    </svg>
  )
}
