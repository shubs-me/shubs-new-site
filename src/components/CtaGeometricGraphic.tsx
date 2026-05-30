'use client'
import { useEffect, useRef } from 'react'

const FRAMES = [
  { size: 60,  speed: 6,   dir:  1 },
  { size: 110, speed: 3.5, dir: -1 },
  { size: 170, speed: 2,   dir:  1 },
  { size: 240, speed: 1.2, dir: -1 },
  { size: 320, speed: 0.7, dir:  1 },
]

export default function CtaGeometricGraphic() {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const t0     = useRef<number>(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const rects = Array.from(svg.querySelectorAll<SVGRectElement>('.cgg-r'))

    function tick(ts: number) {
      if (!t0.current) t0.current = ts
      const t = (ts - t0.current) / 1000

      rects.forEach((rect, i) => {
        const { speed, dir } = FRAMES[i]
        const angle = t * speed * dir
        rect.setAttribute('transform', `rotate(${angle + 45}, 200, 200)`)
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width: 'min(600px, 90vw)', height: 'auto' }}
      aria-hidden
    >
      {FRAMES.map(({ size }, i) => (
        <rect
          key={i}
          className="cgg-r"
          x={200 - size / 2}
          y={200 - size / 2}
          width={size}
          height={size}
          fill="none"
          style={{ stroke: i % 2 === 0 ? 'var(--sq-amber)' : 'var(--sq-teal)' }}
          strokeWidth="1.3"
          opacity={0.12 + i * 0.05}
          transform={`rotate(${45 + i * 8}, 200, 200)`}
        />
      ))}
    </svg>
  )
}
