import type { Metadata } from 'next'
import ExtLink from '@/components/ExtLink'
import { getEssays } from '@/lib/substack'

export const metadata: Metadata = {
  title: 'Thinking | Shubs Upadhyay',
  description:
    'Essays on digital health strategy, evidence, and equity, plus the GPODH podcast, recorded with leaders across 60+ countries.',
}

export default async function Thinking() {
  const essays = await getEssays(6)
  const featured = essays[0]
  const archive = essays.slice(1)

  return (
    <>
      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">Thinking</span>
          <h1>
            The industry talks to itself. <em>I don&apos;t.</em>
          </h1>
          <p className="sub">
            Essays on digital health strategy, evidence, and equity, plus the GPODH
            podcast, recorded with leaders across 60+ countries.
          </p>
        </div>
      </header>

      {/* ESSAYS */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Essays</span>
            <h2 className="sec-title">Writing from the Shubstack.</h2>
          </div>
          {featured && (
            <ExtLink className="feat" href={featured.url}>
              <div className="fl">
                <div className="date">
                  {featured.date ? `${featured.date} · Essay` : 'Latest essay'}
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.blurb}</p>
                <div className="more">Read on Shubstack →</div>
              </div>
              <div className="fr">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/shubs-cutout.png" alt="Dr Shubs Upadhyay" />
              </div>
            </ExtLink>
          )}

          {archive.length > 0 && (
            <div className="think-list" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
              {archive.map((e) => (
                <ExtLink className="think-row" href={e.url} key={e.title}>
                  <div className="date">{e.date}</div>
                  <div>
                    <h4>{e.title}</h4>
                    <p>{e.blurb}</p>
                  </div>
                  <div className="go">Read →</div>
                </ExtLink>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PODCAST */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Podcast</span>
            <h2 className="sec-title">Global Perspectives on Digital Health.</h2>
          </div>
          <div className="pod">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shubs-headshot.webp" alt="Shubs, host" />
            <div className="pod-txt">
              <div className="k">Hosted by Dr Shubs Upadhyay</div>
              <h3>Candid conversations across 60+ countries</h3>
              <p>
                The people reshaping digital health, on what actually works, what
                doesn&apos;t, and what we keep getting wrong.
              </p>
            </div>
            <ExtLink href="https://gpodh.org" className="btn btn-line">
              Listen on gpodh.org →
            </ExtLink>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="contact">
        <div className="wrap">
          <span className="label">Newsletter</span>
          <h2>
            More on <em>Shubstack.</em>
          </h2>
          <p
            style={{
              maxWidth: '42ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            Essays on what it actually takes to build digital health that holds up,
            clinically, commercially, and at scale.
          </p>
          <ExtLink
            href="https://shubstack.substack.com"
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            Read the newsletter →
          </ExtLink>
        </div>
      </section>
    </>
  )
}
