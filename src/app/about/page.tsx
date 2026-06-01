import type { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ExtLink from '@/components/ExtLink'
import InlineCTA from '@/components/InlineCTA'
import Em from '@/components/Em'
import about from '@/../content/about.json'

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
  description:
    'The thinking behind the practice, a physician and digital health strategist building clinical rigour into health technology from the start.',
}

export default function About() {
  return (
    <>
      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">{about.hero.label}</span>
          <h1>
            <Em {...about.hero.title} />
          </h1>
          <p className="sub">{about.hero.sub}</p>
        </div>
      </header>

      {/* FOUNDED */}
      <section className="light">
        <div className="wrap founded">
          <div>
            <div className="sec-head">
              <span className="label">{about.founded.label}</span>
              <h2 className="sec-title wide">
                <Em {...about.founded.title} />
              </h2>
            </div>
            <div className="prose">
              {about.founded.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="founded-mark" aria-hidden>
            S<span>.</span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{about.experience.label}</span>
            <h2 className="sec-title">
              <Em {...about.experience.title} />
            </h2>
          </div>
          <div className="exp-grid">
            {about.experience.cards.map((card) => (
              <div className="exp-card" key={card.title}>
                <div className="kicker">{card.kicker}</div>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i}>
                      {item.lead ? <b>{item.lead}</b> : null}
                      {item.lead ? ' ' : ''}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <InlineCTA text={about.cta1.text} cta={about.cta1.cta} />

      {/* PERSON */}
      <section className="light">
        <div className="wrap lived">
          <div>
            <div className="photo-card">
              <Image
                src={about.person.image}
                alt={about.person.imageAlt}
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
          <div className="lived-body">
            <span className="label" style={{ marginBottom: 24 }}>
              {about.person.label}
            </span>
            <h2
              style={{
                fontFamily: 'var(--disp)',
                fontWeight: 600,
                fontSize: 'clamp(34px,5vw,64px)',
                lineHeight: 0.96,
                letterSpacing: '-0.035em',
                marginBottom: 28,
              }}
            >
              {about.person.name}
            </h2>
            <div className="prose">
              {about.person.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>
                {about.person.intro.map((seg, i) => {
                  if (!('href' in seg) || !seg.href) {
                    return <Fragment key={i}>{seg.text}</Fragment>
                  }
                  return seg.href.startsWith('/') ? (
                    <Link key={i} href={seg.href}>
                      {seg.text}
                    </Link>
                  ) : (
                    <ExtLink key={i} href={seg.href}>
                      {seg.text}
                    </ExtLink>
                  )
                })}
              </p>
            </div>
            <div className="plinks">
              {about.person.links.map((link) => (
                <ExtLink href={link.href} key={link.href}>
                  {link.label}
                </ExtLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{about.manifesto.label}</span>
          </div>
          <div className="mani dark">
            <blockquote>
              “{about.manifesto.pre}
              <em>{about.manifesto.em}”</em>
            </blockquote>
            <ul>
              {about.manifesto.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="close">{about.manifesto.close}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="wrap">
          <span className="label">{about.cta.label}</span>
          <h2>
            <Em {...about.cta.title} />
          </h2>
          <p
            style={{
              maxWidth: '46ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            {about.cta.body}
          </p>
          <Link
            href={about.cta.ctaHref}
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            {about.cta.ctaLabel}
          </Link>
          <p className="cta-reassure">{about.cta.reassure}</p>
        </div>
      </section>
    </>
  )
}
