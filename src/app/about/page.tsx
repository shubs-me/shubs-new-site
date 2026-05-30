import type { Metadata } from 'next'
import Link from 'next/link'
import ExtLink from '@/components/ExtLink'

export const metadata: Metadata = {
  title: 'About | Shubs Upadhyay',
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
            Most digital health fails not because of bad technology. It fails because it
            is built against the wrong definition of value, and I set up my practice to
            fix that.
          </p>
        </div>
      </header>

      {/* FOUNDED */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Why I exist</span>
            <h2 className="sec-title wide">
              Founded on an honest answer to an inconvenient question.
            </h2>
          </div>
          <div className="prose">
            <p>
              What I&apos;ve seen, across the NHS, multilateral agencies, and
              venture-backed companies, is that the industry builds well. It is less good
              at building things that <b>hold up</b>: products that work as intended in
              clinical practice, investment theses that survive contact with real health
              systems, policies that do more than signal intent.
            </p>
            <p>
              I think that gap matters more as AI moves to the centre of health products
              and health decisions. Clinical expertise in those conversations, from
              someone who can speak honestly to what these systems actually do in a care
              context, across commercial, product, investor, and policy rooms, is the
              difference between a well-funded assumption and something that lasts.
            </p>
            <p>
              I built my practice around that. Not to sign off at the end, but to be in
              the room from the start.
            </p>
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

      {/* PERSON */}
      <section className="light">
        <div className="wrap lived">
          <div>
            <div className="photo-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/shubs-speaking.jpg"
                alt="Dr Shubs Upadhyay speaking on stage"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
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
                I&apos;m a physician and digital health strategist with fifteen years of
                experience across clinical practice, health technology, and health system
                strategy. I&apos;ve led clinical and strategic initiatives across the NHS,
                international health agencies, and private sector organisations, from
                early-stage startups through to multilateral programmes.
              </p>
              <p>
                I&apos;ve served as a clinical lead at the International Telecommunication
                Union (ITU) and co-chaired a WHO working group on clinical AI evaluation,
                leading a guideline publication on digital health standards. I set up
                independently to provide the kind of senior clinical and strategic counsel
                that digital health organisations rarely have access to: the perspective
                of someone who has sat on both the clinical and the commercial side of the
                table.
              </p>
              <p>
                I host the <Link href="/thinking">GPODH podcast</Link> and write the{' '}
                <Link href="/thinking">Shubstack newsletter</Link> on digital health
                strategy, evidence, and equity.
              </p>
            </div>
            <div className="chips" style={{ marginTop: 30 }}>
              <span>MBBS</span>
              <span>MSc Global Health</span>
              <span>Former ITU Clinical Lead</span>
              <span>WHO Contributor</span>
              <span>NHS Digital Health Advisor</span>
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
            Book a call →
          </Link>
        </div>
      </section>
    </>
  )
}
