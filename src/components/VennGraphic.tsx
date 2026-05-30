'use client'
import { useEffect, useRef } from 'react'

const CX = 160, CY = 152
const H = 84 * Math.sqrt(3) / 2
const TOP = { cx: CX,          cy: CY - (2 * H / 3), r: 82 }
const BL  = { cx: CX - 42,     cy: CY + (H / 3),     r: 82 }
const BR  = { cx: CX + 42,     cy: CY + (H / 3),     r: 82 }

export default function VennGraphic() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const fills   = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-fill'))
    const borders = Array.from(svg.querySelectorAll<SVGCircleElement>('.vg-border'))
    const radii   = [TOP.r, BL.r, BR.r]

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      fills.forEach((c, i) => {
        const ph = (i * Math.PI * 2) / 3
        c.setAttribute('r',       String(radii[i] + 3 * Math.sin(t * 0.55 + ph)))
        c.setAttribute('opacity', String(0.09 + 0.03 * Math.sin(t * 0.45 + ph)))
      })

      borders.forEach((c, i) => {
        const ph  = (i * Math.PI * 2) / 3
        c.setAttribute('r', String(radii[i] + 3 * Math.sin(t * 0.55 + ph)))
        const dir    = i % 2 === 0 ? 1 : -1
        const offset = (t * 5 * dir) % 100
        c.setAttribute('stroke-dashoffset', String(offset))
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const topCx = Math.round(TOP.cx), topCy = Math.round(TOP.cy)
  const blCx  = Math.round(BL.cx),  blCy  = Math.round(BL.cy)
  const brCx  = Math.round(BR.cx),  brCy  = Math.round(BR.cy)

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 320 272"
      width="100%"
      height="100%"
      aria-hidden
    >
      <defs>
        <clipPath id="vcp-top"><circle cx={topCx} cy={topCy} r={TOP.r} /></clipPath>
        <clipPath id="vcp-bl"> <circle cx={blCx}  cy={blCy}  r={BL.r}  /></clipPath>
      </defs>

      {/* Circle fills (breathe) */}
      <circle className="vg-fill" cx={topCx} cy={topCy} r={TOP.r} style={{ fill: 'var(--sq-amber)' }} opacity="0.09" />
      <circle className="vg-fill" cx={blCx}  cy={blCy}  r={BL.r}  style={{ fill: 'var(--sq-teal)' }}  opacity="0.09" />
      <circle className="vg-fill" cx={brCx}  cy={brCy}  r={BR.r}  style={{ fill: 'var(--sq-muted)' }} opacity="0.09" />

      {/* Triple-intersection highlight */}
      <g clipPath="url(#vcp-top)">
        <g clipPath="url(#vcp-bl)">
          <circle cx={brCx} cy={brCy} r={BR.r} style={{ fill: 'var(--sq-amber)' }} opacity="0.42" />
        </g>
      </g>

      {/* Dashed borders (breathe + slow rotate) */}
      <circle className="vg-border" cx={topCx} cy={topCy} r={TOP.r}
        fill="none" style={{ stroke: 'var(--sq-amber)' }} strokeWidth="1.8" strokeDasharray="6 4" opacity="0.8" />
      <circle className="vg-border" cx={blCx}  cy={blCy}  r={BL.r}
        fill="none" style={{ stroke: 'var(--sq-teal)' }}  strokeWidth="1.8" strokeDasharray="6 4" opacity="0.75" />
      <circle className="vg-border" cx={brCx}  cy={brCy}  r={BR.r}
        fill="none" style={{ stroke: 'var(--sq-muted)' }} strokeWidth="1.8" strokeDasharray="6 4" opacity="0.6" />

      {/* SHUBS — centroid */}
      <text
        x={CX} y={CY + 2.5}
        textAnchor="middle" dominantBaseline="middle"
        style={{ fill: 'var(--sq-amber)' }}
        fontSize="11"
        letterSpacing="3"
        opacity="0.95"
        fontFamily="var(--font-dm-mono)"
        fontWeight="700"
      >
        SHUBS
      </text>

      {/* Outer labels */}
      <text x={CX} y="13"
        textAnchor="middle" style={{ fill: 'var(--sq-amber)' }} fontSize="10" letterSpacing="1.0"
        opacity="1" fontFamily="var(--font-dm-mono)" fontWeight="700">
        CLINICAL RIGOUR
      </text>
      <text x="54" y="267"
        textAnchor="middle" style={{ fill: 'var(--sq-teal)' }} fontSize="10" letterSpacing="1.0"
        opacity="1" fontFamily="var(--font-dm-mono)" fontWeight="700">
        IMPLEMENTATION
      </text>
      <text x="262" y="267"
        textAnchor="middle" style={{ fill: 'var(--sq-ink)' }} fontSize="10" letterSpacing="1.0"
        opacity="0.85" fontFamily="var(--font-dm-mono)" fontWeight="700">
        STRATEGIC CLARITY
      </text>
    </svg>
  )
}
