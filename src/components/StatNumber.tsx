'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Counts up to a target number when scrolled into view (once), preserving any
 * non-numeric prefix/suffix (e.g. "60+", "£3.4M"). No-ops under
 * prefers-reduced-motion, showing the final value immediately.
 */
export default function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const match = value.match(/[\d.]+/)
  const target = match ? parseFloat(match[0]) : 0
  const prefix = match ? value.slice(0, match.index) : ''
  const suffix = match ? value.slice(match.index! + match[0].length) : value
  const decimals = match && match[0].includes('.') ? match[0].split('.')[1].length : 0

  // `display` drives the count-up animation (starts at 0). Until the animation
  // begins we render the final `target`, so SSR / reduced-motion / pre-scroll
  // all show the real number.
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started) return
    if (
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1400
    let raf = 0
    let start = 0
    function tick(ts: number) {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, target])

  const current = started ? display : target
  const shown = decimals
    ? current.toFixed(decimals)
    : Math.round(current).toString()

  return (
    <div className="n" ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </div>
  )
}
