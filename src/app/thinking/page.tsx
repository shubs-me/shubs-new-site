import type { Metadata } from 'next'
import { cloneElement, type ReactElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ExtLink from '@/components/ExtLink'
import Em from '@/components/Em'
import { getEssays } from '@/lib/substack'
import thinking from '@/../content/thinking.json'

export const metadata: Metadata = {
  title: 'Thinking',
  alternates: { canonical: '/thinking' },
  description:
    'Insights on digital health strategy, evidence, and equity, plus the GPODH podcast, recorded with leaders across 60+ countries.',
}

export default async function Thinking() {
  const essays = await getEssays(6)
  const featured = essays[0]
  const archive = essays.slice(1)

  const sections: Record<string, ReactElement> = {
    insights: (
      <section className="hsec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{thinking.insightsHead.label}</span>
            <h2 className="sec-title">
              <Em {...thinking.insightsHead.title} />
            </h2>
          </div>
          {featured && (
            <ExtLink className="feat" href={featured.url}>
              <div className="fl">
                <div className="date">
                  {featured.date ? `${featured.date} · Insight` : 'Latest insight'}
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.blurb}</p>
                <div className="more">Read on Shubstack →</div>
              </div>
              <div className="fr">
                <Image
                  src={thinking.insightsHead.featuredImage}
                  alt={thinking.insightsHead.featuredImageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </ExtLink>
          )}

          {archive.length > 0 && (
            <div className="think-list" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
              {archive.map((e) => (
                <ExtLink className="think-row" href={e.url} key={e.title}>
                  <div className="date">{e.date}</div>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.blurb}</p>
                  </div>
                  <div className="go">Read →</div>
                </ExtLink>
              ))}
            </div>
          )}
        </div>
      </section>
    ),

    podcast: (
      <section className="hsec">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{thinking.podcast.label}</span>
            <h2 className="sec-title">
              <Em {...thinking.podcast.title} />
            </h2>
          </div>
          <div className="pod">
            <Image
              src={thinking.podcast.image}
              alt={thinking.podcast.imageAlt}
              width={88}
              height={88}
            />
            <div className="pod-txt">
              <div className="k">{thinking.podcast.kicker}</div>
              <h3>{thinking.podcast.cardTitle}</h3>
              <p>{thinking.podcast.body}</p>
            </div>
            <ExtLink href={thinking.podcast.linkHref} className="btn btn-line">
              {thinking.podcast.linkLabel}
            </ExtLink>
          </div>
        </div>
      </section>
    ),

    cta: (
      <section className="hsec contact">
        <div className="wrap">
          <span className="label">{thinking.cta.label}</span>
          <h2>
            <Em {...thinking.cta.title} />
          </h2>
          <p
            style={{
              maxWidth: '42ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            {thinking.cta.body}
          </p>
          <Link
            href={thinking.cta.ctaHref}
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            {thinking.cta.ctaLabel}
          </Link>
        </div>
      </section>
    ),
  }

  return (
    <>
      {/* HERO (fixed page header) */}
      <header className="page-hero">
        <div className="wrap think-hero">
          <div>
            <span className="label">{thinking.hero.label}</span>
            <h1>
              <Em {...thinking.hero.title} />
            </h1>
            <p className="sub">{thinking.hero.sub}</p>
          </div>
          <div className="think-hero-photo">
            <Image
              src={thinking.hero.image}
              alt={thinking.hero.imageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 860px) 70vw, 34vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </header>

      {/* Sections, ordered + themed by the CMS (thinking.layout) */}
      {thinking.layout.map((s, i) => {
        const el = sections[s.id] as
          | ReactElement<Record<string, unknown>>
          | undefined
        if (!el) return null
        return cloneElement(el, { key: `${s.id}-${i}`, 'data-theme': s.theme })
      })}
    </>
  )
}
