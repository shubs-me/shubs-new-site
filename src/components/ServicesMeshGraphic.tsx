'use client'
import { useEffect, useRef } from 'react'

const SPEED = 0.35
const RADIUS = 3
const NODE_OPACITY = 0.85
const CONNECT_DIST = 120
const LINE_WIDTH = 1.1
const NODE_COUNT = 19

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  amber: boolean
}

function makeNodes(w: number, h: number): Node[] {
  const nodes: Node[] = []
  for (let i = 0; i < NODE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * SPEED,
      vy: Math.sin(angle) * SPEED,
      amber: i < Math.round(NODE_COUNT * (2 / 3)),
    })
  }
  return nodes
}

export default function ServicesMeshGraphic() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef<number>(0)
  const nodesRef  = useRef<Node[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const initW = canvas.offsetWidth  || 400
    const initH = canvas.offsetHeight || 300
    nodesRef.current = makeNodes(initW, initH)

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        canvas.width  = Math.round(width)
        canvas.height = Math.round(height)
        nodesRef.current = makeNodes(canvas.width, canvas.height)
      }
    })
    ro.observe(canvas)

    canvas.width  = initW
    canvas.height = initH

    const c: HTMLCanvasElement          = canvas
    const g: CanvasRenderingContext2D   = ctx

    // Read theme colors; update when data-theme changes
    function readColors() {
      const style = getComputedStyle(document.documentElement)
      return {
        amber: style.getPropertyValue('--sq-amber').trim() || '#C9933A',
        teal:  style.getPropertyValue('--sq-teal').trim()  || '#2A6B62',
      }
    }
    let colors = readColors()
    const mo = new MutationObserver(() => { colors = readColors() })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    function tick() {
      const w = c.width
      const h = c.height
      const nodes = nodesRef.current
      const { amber, teal } = colors

      g.clearRect(0, 0, w, h)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < RADIUS) { node.x = RADIUS; node.vx = Math.abs(node.vx) }
        if (node.x > w - RADIUS) { node.x = w - RADIUS; node.vx = -Math.abs(node.vx) }
        if (node.y < RADIUS) { node.y = RADIUS; node.vy = Math.abs(node.vy) }
        if (node.y > h - RADIUS) { node.y = h - RADIUS; node.vy = -Math.abs(node.vy) }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.85
            g.beginPath()
            g.moveTo(a.x, a.y)
            g.lineTo(b.x, b.y)
            g.strokeStyle = a.amber === b.amber
              ? (a.amber ? amber : teal)
              : amber
            g.globalAlpha = opacity
            g.lineWidth   = LINE_WIDTH
            g.stroke()
          }
        }
      }

      for (const node of nodes) {
        g.beginPath()
        g.arc(node.x, node.y, RADIUS, 0, Math.PI * 2)
        g.fillStyle   = node.amber ? amber : teal
        g.globalAlpha = NODE_OPACITY
        g.fill()
      }

      g.globalAlpha = 1

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden
    />
  )
}
