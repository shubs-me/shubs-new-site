import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dr Shubs Upadhyay, Clinical rigour at product speed'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  const ink = '#15120E'
  const cream = '#EFE9DC'
  const clay = '#FC5F84'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: ink,
          color: cream,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            fontSize: 26,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: clay,
          }}
        >
          <div style={{ width: 14, height: 14, background: clay }} />
          Dr Shubs Upadhyay
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -3,
          }}
        >
          <span style={{ color: clay }}>Clinical rigour</span>
          <span>&nbsp;at product speed.</span>
        </div>

        <div style={{ display: 'flex', fontSize: 30, color: cream, opacity: 0.7 }}>
          Digital health that holds up, clinically, commercially, and at scale.
        </div>
      </div>
    ),
    size,
  )
}
