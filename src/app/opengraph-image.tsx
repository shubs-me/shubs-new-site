import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dr Shubs Upadhyay, Clinical rigour at product speed'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const ink = '#15120E'
  const cream = '#EFE9DC'
  const clay = '#FC5F84'
  const clayBg = '#fb4b7b'

  const portrait = await fetch(
    new URL('./shubs-portrait.jpg', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: ink,
          color: cream,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Text panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            padding: '70px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 24,
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
              flexDirection: 'column',
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            <span style={{ color: clay }}>Clinical rigour</span>
            <span>at product speed.</span>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 26,
              color: cream,
              opacity: 0.72,
              maxWidth: 470,
            }}
          >
            Digital health that holds up, clinically, commercially, and at scale.
          </div>
        </div>

        {/* Portrait panel */}
        <div
          style={{
            display: 'flex',
            width: 460,
            height: 630,
            background: clayBg,
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portrait as unknown as string}
            alt=""
            width={460}
            height={630}
            style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
          />
        </div>
      </div>
    ),
    size,
  )
}
