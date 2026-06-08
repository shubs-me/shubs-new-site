import Link from 'next/link'
import Image from 'next/image'
import ExtLink from '@/components/ExtLink'
import InlineCTA from '@/components/InlineCTA'
import StatNumber from '@/components/StatNumber'
import Em from '@/components/Em'
import { getEssays } from '@/lib/substack'
import ticker from '@/../content/ticker.json'
import stats from '@/../content/stats.json'
import testimonials from '@/../content/testimonials.json'
import home from '@/../content/home.json'

const TICKER = ticker.items
const STATS = stats.items
const TESTIMONIALS = testimonials.items

export default async function Home() {
  const essays = await getEssays(3)
  // Homepage sections kept in the code but hidden from view for now.
  // Flip a flag to true to show that section again.
  const SECTIONS = { engagements: false, lived: false, thinking: false }
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-l">
            <span className="label">{home.hero.label}</span>
            <h1>
              <Em {...home.hero.title} />
            </h1>
            <p className="hero-lead">{home.hero.lead}</p>
            <div className="hero-cta">
              <Link href={home.hero.ctaPrimaryHref} className="btn btn-clay">
                {home.hero.ctaPrimaryLabel}
              </Link>
              <Link href={home.hero.ctaSecondaryHref} className="btn btn-line">
                {home.hero.ctaSecondaryLabel}
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src={home.hero.image}
            alt={home.hero.imageAlt}
            width={760}
            height={801}
            priority
            unoptimized
            sizes="(max-width: 820px) 82vw, 34vw"
          />
        </div>
      </header>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((kw, i) => (
            <span key={i}>
              {kw} <b>◆</b>
            </span>
          ))}
        </div>
      </div>

      {/* THE GAP */}
      <section className="light" id="gap">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.gap.label}</span>
            <h2 className="sec-title">
              <Em {...home.gap.title} />
            </h2>
          </div>
          <div className="gap-grid">
            {home.gap.rows.map((row) => (
              <details className="gap-col" key={row.n}>
                <summary>
                  <span className="gap-col-top">
                    <span className="gap-n">{row.n}</span>
                    <span className="gap-t">{row.tag}</span>
                  </span>
                  <h3>{row.heading}</h3>
                  <span className="gap-more">
                    <span className="gap-more-open">Read more</span>
                    <span className="gap-more-close">Show less</span>
                  </span>
                </summary>
                <div className="gap-col-body">
                  {row.paras.map((p, i) => (
                    <p key={i}>
                      {p.lead ? <b>{p.lead}</b> : null}
                      {p.lead ? ' ' : ''}
                      {p.text}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.practice.label}</span>
            <h2 className="sec-title">
              <Em {...home.practice.title} />
            </h2>
          </div>
          {home.practice.blocks.map((block) => (
            <div className="pblock" key={block.num}>
              <div className="pnum">{block.num}</div>
              <div>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
                <div className="plist">
                  {block.list.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>
                <Link href={block.moreHref} className="more">
                  {block.moreLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MY WORK */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.work.label}</span>
            <h2 className="sec-title">
              <Em {...home.work.title} />
            </h2>
          </div>
          <div className="work-grid">
            {home.work.cards.map((card) => (
              <div className="work-card" key={card.num}>
                <div className="wnum">{card.num}</div>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <p className="stats-intro">{stats.intro}</p>
          <div className="stats-grid">
            {STATS.map(({ number, label }) => (
              <div className="stat" key={number + label}>
                <StatNumber value={number} />
                <div className="l">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.outcomes.label}</span>
            <h2 className="sec-title">
              <Em {...home.outcomes.title} />
            </h2>
          </div>
          <div className="out-hero">
            <div className="big">{home.outcomes.heroNum}</div>
            <p>
              <b>{home.outcomes.heroLead}</b> {home.outcomes.heroBody}
            </p>
          </div>
          <div className="out-list">
            {home.outcomes.items.map((item) => (
              <div className="out-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.testimonialsHead.label}</span>
            <h2 className="sec-title">
              <Em {...home.testimonialsHead.title} />
            </h2>
          </div>
          <div className="tst-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="tcard" key={i}>
                <blockquote>“{t.quote}”</blockquote>
                {t.rating ? <div className="trating">{t.rating}</div> : null}
                <div className="tcite">
                  <span className="tcite-text">
                    <b>{t.name}</b>
                    <br />
                    {t.role}
                  </span>
                  {t.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className={`tlogo${t.logoBig ? ' tlogo-lg' : ''}`}
                      src={t.logo}
                      alt={t.role}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.who.label}</span>
            <h2 className="sec-title">
              <Em {...home.who.title} />
            </h2>
          </div>
          <div className="three">
            {home.who.cards.map((card) => (
              <div className="who-card" key={card.title}>
                <div className="kicker">{card.kicker}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <Link href={card.moreHref} className="more">
                  {card.moreLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS — hidden (kept in code; this content also appears on the Services page) */}
      {SECTIONS.engagements && (
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.engagements.label}</span>
            <h2 className="sec-title">
              <Em {...home.engagements.title} />
            </h2>
          </div>
          <div className="eng-grid">
            {home.engagements.cards.map((card) => (
              <div className="eng-card" key={card.num}>
                <div className="en">{card.num}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* INLINE CTA */}
      <InlineCTA />

      {/* LIVED — hidden (kept in code) */}
      {SECTIONS.lived && (
      <section className="light">
        <div className="wrap lived">
          <div className="lived-body">
            <span className="label" style={{ marginBottom: 26 }}>
              {home.lived.label}
            </span>
            <h2>
              <Em {...home.lived.title} />
            </h2>
            {home.lived.paras.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="lived-photo">
            <span className="tag mono">{home.lived.tag}</span>
            <Image
              src={home.lived.image}
              alt={home.lived.imageAlt}
              fill
              sizes="(max-width: 820px) 100vw, 40vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>
      )}

      {/* QUOTE */}
      <section className="quote quote-compact">
        <div className="wrap">
          <span className="label" style={{ marginBottom: 30 }}>
            {home.quote.label}
          </span>
          <blockquote>
            “{home.quote.pre}
            <em>{home.quote.em}”</em>
          </blockquote>
          <cite>{home.quote.cite}</cite>
        </div>
      </section>

      {/* THINKING — hidden (kept in code) */}
      {SECTIONS.thinking && (
      <section className="light" id="thinking">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">{home.thinkingHead.label}</span>
            <h2 className="sec-title">
              <Em {...home.thinkingHead.title} />
            </h2>
          </div>
          <div className="think-list">
            {essays.map((e) => (
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
          <Link href={home.thinkingHead.moreHref} className="sec-more">
            {home.thinkingHead.moreLabel}
          </Link>
          <div className="pod">
            <Image
              src={home.thinkingHead.podImage}
              alt={home.thinkingHead.podImageAlt}
              width={88}
              height={88}
            />
            <div className="pod-txt">
              <div className="k">{home.thinkingHead.podKicker}</div>
              <h3>{home.thinkingHead.podTitle}</h3>
              <p>{home.thinkingHead.podBody}</p>
            </div>
            <ExtLink href={home.thinkingHead.podLinkHref} className="btn btn-line">
              {home.thinkingHead.podLinkLabel}
            </ExtLink>
          </div>
        </div>
      </section>
      )}

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <span className="label">{home.cta.label}</span>
          <h2>
            <Em {...home.cta.title} />
          </h2>
          <p
            style={{
              maxWidth: '46ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            {home.cta.body}
          </p>
          <Link
            href={home.cta.ctaHref}
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            {home.cta.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  )
}
