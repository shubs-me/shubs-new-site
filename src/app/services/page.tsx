import type { Metadata } from 'next'
import { cloneElement, type ReactElement } from 'react'
import Link from 'next/link'
import InlineCTA from '@/components/InlineCTA'
import Em from '@/components/Em'
import process from '@/../content/process.json'
import services from '@/../content/services.json'

export const metadata: Metadata = {
  title: 'Services',
  alternates: { canonical: '/services' },
  description:
    'Two practice areas, Clinical and Product Integration, and Commercial and Clinical Alignment, for organisations serious about building digital health that works.',
}

const PROCESS = process.items

export default function Services() {
  const sections: Record<string, ReactElement> = {
    who: (
      <section className="hsec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{services.who.label}</span>
            <h2 className="sec-title wide">
              <Em {...services.who.title} />
            </h2>
          </div>
          {services.who.rows.map((row) => (
            <div className="aud" key={row.title}>
              <div className="ak">{row.kicker}</div>
              <div>
                <h3>{row.title}</h3>
                <p className="ab">{row.body}</p>
                <ul className="plist">
                  {row.list.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </ul>
                <Link href={row.moreHref} className="more">
                  {row.moreLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    ),

    pillars: (
      <section className="hsec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{services.pillarsHead.label}</span>
            <h2 className="sec-title wide">
              <Em {...services.pillarsHead.title} />
            </h2>
          </div>
          {services.pillars.map((pillar) => (
            <div className="pillar" id={pillar.id} key={pillar.id}>
              <div className="pa">
                <span>{pillar.pa}</span> · <span>{pillar.paTag}</span>
              </div>
              <h2>{pillar.title}</h2>
              <p className="plead">{pillar.lead}</p>
              <p>{pillar.body}</p>
              <div className="idl-label">{pillar.listLabel}</div>
              <div className="idl-grid">
                {pillar.list.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
              <Link href={pillar.moreHref} className="more">
                {pillar.moreLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>
    ),

    quote: (
      <section className="hsec quote">
        <div className="wrap">
          <span className="label" style={{ marginBottom: 30 }}>
            {services.quote.label}
          </span>
          <blockquote>
            “{services.quote.pre}
            <em>{services.quote.em}”</em>
          </blockquote>
          <cite>{services.quote.cite}</cite>
        </div>
      </section>
    ),

    process: (
      <section className="hsec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{services.processHead.label}</span>
            <h2 className="sec-title wide">
              <Em {...services.processHead.title} />
            </h2>
          </div>
          <div className="eng-grid four">
            {PROCESS.map(({ number, title, body }) => (
              <div className="eng-card" key={number}>
                <div className="en">{number}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),

    cta: (
      <section className="hsec contact">
        <div className="wrap">
          <span className="label">{services.cta.label}</span>
          <h2>
            {services.cta.title.pre}
            <br />
            <em>{services.cta.title.em}</em>
            {services.cta.title.post}
          </h2>
          <p
            style={{
              maxWidth: '48ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            {services.cta.body}
          </p>
          <Link
            href={services.cta.ctaHref}
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            {services.cta.ctaLabel}
          </Link>
        </div>
      </section>
    ),
  }

  return (
    <>
      {/* HERO (fixed page header) */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">{services.hero.label}</span>
          <h1>
            <Em {...services.hero.title} />
          </h1>
          <p className="sub">{services.hero.sub}</p>
        </div>
      </header>

      {/* Sections, ordered + themed by the CMS (services.layout) */}
      {services.layout.map((s, i) => {
        if (s.id === 'inlinecta')
          return (
            <InlineCTA
              key={`inlinecta-${i}`}
              text={services.cta1.text}
              cta={services.cta1.cta}
            />
          )
        const el = sections[s.id] as
          | ReactElement<Record<string, unknown>>
          | undefined
        if (!el) return null
        return cloneElement(el, { key: `${s.id}-${i}`, 'data-theme': s.theme })
      })}
    </>
  )
}
