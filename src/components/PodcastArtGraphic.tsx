'use client'
import { useEffect, useRef } from 'react'

const SIZE = 240
const CX   = SIZE / 2
const CY   = SIZE / 2

const LISTENERS = [
  { angle:  20, r: 68 }, { angle:  80, r: 54 }, { angle: 140, r: 82 },
  { angle: 195, r: 62 }, { angle: 255, r: 76 }, { angle: 310, r: 58 },
  { angle: 345, r: 90 }, { angle: 115, r: 96 },
]

const RING_COUNT = 3

export default function PodcastArtGraphic() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const spinGroup    = svg.querySelector<SVGGElement>('#pa-spin')
    const centerDot    = svg.querySelector<SVGCircleElement>('#pa-center')
    const bcastRings   = Array.from(svg.querySelectorAll<SVGCircleElement>('.pa-bcast'))
    const listenerDots = Array.from(svg.querySelectorAll<SVGCircleElement>('.pa-listener'))

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      if (spinGroup) {
        spinGroup.setAttribute('transform', `rotate(${t * 1.5}, ${CX}, ${CY})`)
      }

      if (centerDot) {
        const r = 5 + 2 * Math.abs(Math.sin(t * 0.7))
        centerDot.setAttribute('r', String(r))
        centerDot.setAttribute('opacity', String(0.7 + 0.25 * Math.abs(Math.sin(t * 0.7))))
      }

      bcastRings.forEach((ring, i) => {
        const phase   = ((t * 0.18 + i / RING_COUNT) % 1)
        const radius  = 6 + phase * 100
        const opacity = (1 - phase) * 0.75
        ring.setAttribute('r',       String(radius))
        ring.setAttribute('opacity', String(opacity))
      })

      listenerDots.forEach((dot, i) => {
        const { angle: baseAngle, r: orbR } = LISTENERS[i]
        const speed = i % 2 === 0 ? 1.2 : -0.8
        const angle = (baseAngle + t * speed) * (Math.PI / 180)
        const x = CX + orbR * Math.cos(angle)
        const y = CY + orbR * Math.sin(angle)
        dot.setAttribute('cx',      String(x))
        dot.setAttribute('cy',      String(y))
        dot.setAttribute('opacity', String(0.45 + 0.45 * ((Math.sin(t * 0.6 + i * 0.9) + 1) / 2)))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      style={{ display: 'block' }}
      aria-hidden
    >
      {/* Background disc */}
      <circle cx={CX} cy={CY} r={SIZE / 2 - 2} style={{ fill: 'var(--sq-bg2)' }} />
      <circle cx={CX} cy={CY} r={SIZE / 2 - 3} fill="none" style={{ stroke: 'var(--sq-teal)' }} strokeWidth="1.6" opacity="0.55" />

      {/* Rotating groove rings */}
      <g id="pa-spin">
        {[28, 44, 60, 76, 92, 106].map((r, i) => (
          <circle
            key={r}
            cx={CX} cy={CY} r={r}
            fill="none"
            style={{ stroke: i % 2 === 0 ? 'var(--sq-teal)' : 'var(--sq-amber)' }}
            strokeWidth={i % 3 === 0 ? '1.3' : '0.8'}
            strokeDasharray={i % 2 === 0 ? '4 3' : 'none'}
            opacity={0.22 + (6 - i) * 0.06}
          />
        ))}
      </g>

      {/* Expanding broadcast rings */}
      {Array.from({ length: RING_COUNT }, (_, i) => (
        <circle
          key={i}
          className="pa-bcast"
          cx={CX} cy={CY} r="6"
          fill="none"
          style={{ stroke: 'var(--sq-teal)' }}
          strokeWidth="1.8"
          opacity="0"
        />
      ))}

      {/* Listener / viewer dots */}
      {LISTENERS.map((_, i) => (
        <circle
          key={i}
          className="pa-listener"
          cx={CX} cy={CY}
          r={i % 3 === 0 ? '2.5' : '1.8'}
          style={{ fill: i % 2 === 0 ? 'var(--sq-amber)' : 'var(--sq-teal)' }}
          opacity="0.4"
        />
      ))}

      {/* Centre source dot */}
      <circle id="pa-center" cx={CX} cy={CY} r="5" style={{ fill: 'var(--sq-amber)' }} opacity="0.9" />
      <circle cx={CX} cy={CY} r="2" style={{ fill: 'var(--sq-bg2)' }} />
    </svg>
  )
}
