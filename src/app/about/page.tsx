import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ExtLink from '@/components/ExtLink'
import InlineCTA from '@/components/InlineCTA'

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
          <span className="label">About</span>
          <h1>
            The thinking behind <em>the practice.</em>
          </h1>
          <p className="sub">
            Most digital health doesn&apos;t fall short because of bad technology. It
            falls short because it is built against the wrong definition of value, and I
            set up my practice to fix that.
          </p>
        </div>
      </header>

      {/* FOUNDED */}
      <section className="light">
        <div className="wrap founded">
          <div>
            <div className="sec-head">
              <span className="label">Why I exist</span>
              <h2 className="sec-title wide">
                Real clinical value doesn&apos;t have to be <em>elusive.</em>
              </h2>
            </div>
            <div className="prose">
              <p>
                People building and implementing digital health know that clinical
                outcomes matter. But those outcomes can feel far off, and hard to move
                directly.
              </p>
              <p>
                So things drift. The commercial narrative pulls one way, the product
                roadmap another, and the evidence lands somewhere else entirely. Clinical
                value gets lost in translation, and teams move fast, just not towards what
                actually matters for people.
              </p>
              <p>
                When users and buyers see bold claims without the evidence to back them,
                trust wanes. Clients churn. Funding dries up.
              </p>
              <p>
                After a decade inside venture-backed digital health companies and global
                institutions, I set up my practice to change that: to bring sharp focus
                back to clinical outcomes, and to what really matters.
              </p>
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
            <span className="label">Experience</span>
            <h2 className="sec-title">I&apos;ve lived the challenges.</h2>
          </div>
          <div className="exp-grid">
            <div className="exp-card">
              <div className="kicker">Frontline clinician</div>
              <h3>Senior clinical experience</h3>
              <ul>
                <li>NHS primary and urgent care, UK</li>
                <li>Rural medicine, Australia</li>
                <li>Global health and primary care strengthening, Sierra Leone</li>
              </ul>
            </div>
            <div className="exp-card">
              <div className="kicker">Industry leadership</div>
              <h3>Senior leadership in health tech</h3>
              <ul>
                <li>
                  Former Medical Director at Ada Health, with clinical leadership advisory
                  for some of Europe&apos;s biggest health tech companies.
                </li>
                <li>
                  <b>Medical quality &amp; AI evaluation.</b> Built a regulatory-compliant
                  medical quality function covering model evaluation, post-deployment
                  monitoring, and clinical evaluation.
                </li>
                <li>
                  <b>Enterprise-grade clinical trust.</b> Led cross-functional teams
                  putting regulated clinical AI into health systems across the US, Europe,
                  and Africa, earning lasting trust with clinical leaders through
                  demonstrable outcomes.
                </li>
                <li>
                  <b>Business and clinical outcomes, aligned.</b> Commercial, product, and
                  clinical leadership that sharpened go-to-market and evidence generation,
                  with narratives that won and retained multi-million-dollar partnerships.
                </li>
              </ul>
            </div>
            <div className="exp-card">
              <div className="kicker">Convening the field</div>
              <h3>Shaping policy and the last mile of care</h3>
              <ul>
                <li>
                  Former Co-chair, Clinical Evaluation Group, WHO initiative on AI for
                  Health, developing global guidelines for evaluating AI in healthcare.
                </li>
                <li>
                  Keynotes and talks at HLTH, HIMSS, WHO, the Wellcome Trust, Doctolib, and
                  the Global Digital Health Forum.
                </li>
                <li>
                  Guest Editor, Nature npj Digital Medicine, special collection on
                  implementation in low-resource settings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <InlineCTA
        text="Think we might be a fit? I'd love to hear from you."
        cta="Get in touch →"
      />

      {/* PERSON */}
      <section className="light">
        <div className="wrap lived">
          <div>
            <div className="photo-card">
              <Image
                src="/images/shubs-speaking.jpg"
                alt="Dr Shubs Upadhyay speaking on stage"
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
          <div className="lived-body">
            <span className="label" style={{ marginBottom: 24 }}>
              The person behind it
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
              Dr Shubs Upadhyay
            </h2>
            <div className="prose">
              <p>
                I&apos;m a physician and digital health strategist with fifteen years
                across clinical practice, health technology, and health system strategy,
                from frontline care in the NHS, Australia, and Sierra Leone to medical
                leadership inside venture-backed health tech.
              </p>
              <p>
                As former Medical Director at Ada Health and co-chair of the WHO Clinical
                Evaluation Group for AI in healthcare, I&apos;ve sat on both the clinical
                and the commercial side of the table. I set up independently to give
                digital health organisations the kind of senior clinical and strategic
                counsel they rarely have access to.
              </p>
              <p>
                I host the <Link href="/thinking">GPODH podcast</Link> and write the{' '}
                <Link href="/thinking">Shubstack newsletter</Link> on digital health
                strategy, evidence, and equity.
              </p>
            </div>
            <div className="plinks">
              <ExtLink href="https://linkedin.com/in/shubs-upadhyay">
                LinkedIn →
              </ExtLink>
              <ExtLink href="https://shubstack.substack.com">Shubstack →</ExtLink>
              <ExtLink href="https://gpodh.org">GPODH Podcast →</ExtLink>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">How I work</span>
          </div>
          <div className="mani dark">
            <blockquote>
              “Digital health must be built around clinical reality, not around what is
              easy to build or easy to <em>sell.”</em>
            </blockquote>
            <ul>
              <li>I don&apos;t accept that speed and rigour are in tension.</li>
              <li>I don&apos;t accept that evidence is only for academics.</li>
              <li>
                I don&apos;t accept that commercial success and genuine clinical value are
                different goals.
              </li>
            </ul>
            <div className="close">
              The organisations that understand this are the ones that last.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="wrap">
          <span className="label">Let&apos;s work together</span>
          <h2>
            Have a conversation with <em>Shubs.</em>
          </h2>
          <p
            style={{
              maxWidth: '46ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            Every engagement starts by understanding what you are actually trying to
            achieve. No pitch, no hard sell. Just an honest conversation.
          </p>
          <Link
            href="/contact"
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  )
}
