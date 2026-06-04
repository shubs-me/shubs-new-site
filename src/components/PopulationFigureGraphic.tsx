/**
 * Decorative "isotype" grid of little people for the Outcomes section, to
 * visualise the human reach behind the headline figure. Highlighted figures use
 * the clay accent; the rest are faint cream. Purely visual (aria-hidden).
 * Renders on the dark Outcomes background.
 */
interface Props {
  total?: number
  highlighted?: number
  cols?: number
  className?: string
}

export default function PopulationFigureGraphic({
  total = 120,
  highlighted = 30,
  cols = 12,
  className = '',
}: Props) {
  const rows = Math.ceil(total / cols)
  const cellW = 28
  const cellH = 38
  const headR = 5
  const bodyW = 9
  const bodyH = 13
  const svgW = cols * cellW
  const svgH = rows * cellH

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className={className} aria-hidden>
      {Array.from({ length: total }, (_, id) => {
        const lit = id < highlighted
        const col = id % cols
        const row = Math.floor(id / cols)
        const cx = col * cellW + cellW / 2
        const cy = row * cellH + headR + 5
        const bx = cx - bodyW / 2
        const by = cy + headR + 3
        const fill = lit ? 'var(--clay)' : 'var(--cream)'
        return (
          <g key={id} opacity={lit ? 1 : 0.18}>
            <circle cx={cx} cy={cy} r={headR} fill={fill} />
            <rect x={bx} y={by} width={bodyW} height={bodyH} rx={2.5} fill={fill} />
          </g>
        )
      })}
    </svg>
  )
}
