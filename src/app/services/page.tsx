import type { Metadata } from 'next'
import Link from 'next/link'
import InlineCTA from '@/components/InlineCTA'

export const metadata: Metadata = {
  title: 'Services',
  alternates: { canonical: '/services' },
  description:
    'Two practice areas, Clinical and Product Integration, and Commercial and Clinical Alignment, for organisations serious about building digital health that works.',
}

const PROCESS = [
  {
    n: '01',
    h: 'Listen',
    p: 'I begin every engagement by deeply understanding your context: not just the brief, but the pressures, histories, and blind spots that shape it.',
  },
  {
    n: '02',
    h: 'Match',
    p: 'I identify the right approach and skill set for the specific challenge at hand, bringing in trusted independent specialists where the engagement calls for it.',
  },
  {
    n: '03',
    h: 'Embed',
    p: 'I work with your team, not at them. My model is collaborative by design, and I transfer knowledge as I deliver.',
  },
  {
    n: '04',
    h: 'Deliver',
    p: 'I am accountable to outcomes. Every engagement ends with something tangible: a strategy, a product, an evidence base, a deal.',
  },
]

export default function Services() {
  return (
    <>
      {/* HERO */}
      <header className="page-hero">
        <div className="wrap">
          <span className="label">Services</span>
          <h1>
            Clinical expertise, deployed where it <em>counts.</em>
          </h1>
          <p className="sub">
            Two practice areas, Clinical and Product Integration, and Commercial and
            Clinical Alignment, for organisations serious about building digital health
            that actually works.
          </p>
        </div>
      </header>

      {/* WHO */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Who I work with</span>
            <h2 className="sec-title wide">
              For builders, and those who back them.
            </h2>
          </div>
          <div className="aud">
            <div className="ak">People building</div>
            <div>
              <h3>Digital health founders and their teams</h3>
              <p className="ab">
                You are building something that needs to work in clinical reality, not
                just in a demo. From early product decisions through to major health
                system procurements, I bring the clinical credibility, evidence strategy,
                and leadership depth that gets your product taken seriously by
                commissioners, payers, and the clinicians who actually have to use it.
              </p>
              <ul className="plist">
                <span>Fractional CMO and clinical leadership embedded in your team</span>
                <span>Clinical product strategy and evidence frameworks from day one</span>
                <span>NHS, international, and payer market access</span>
                <span>Impact narrative and positioning for buyers that need clinical proof</span>
              </ul>
              <Link href="/contact" className="more">
                Get in touch →
              </Link>
            </div>
          </div>
          <div className="aud">
            <div className="ak">People investing</div>
            <div>
              <h3>Philanthropy, foundations, and impact investors</h3>
              <p className="ab">
                You are deploying capital or grants into digital health and need to know
                whether it is going somewhere meaningful, and whether the organisations
                you fund have what it takes to deliver. I provide the clinical
                intelligence, due diligence depth, and impact frameworks that help you
                back the right work and help that work succeed.
              </p>
              <ul className="plist">
                <span>Clinical due diligence and honest portfolio assessment</span>
                <span>Impact measurement frameworks that go beyond adoption metrics</span>
                <span>Strategic and clinical support for grantees building credibility</span>
                <span>Evaluation of what a programme can realistically deliver</span>
              </ul>
              <Link href="/contact" className="more">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">My services</span>
            <h2 className="sec-title wide">
              Build clinical value while shipping quality at speed.
            </h2>
          </div>
          <div className="pillar" id="pillar-clinical-product-integration">
            <div className="pa">
              <span>Practice Area 01</span> · <span>Quality &amp; Shipping Velocity</span>
            </div>
            <h2>Clinical and Product Integration</h2>
            <p className="plead">
              Harmonise clinical, QARA, and product teams. Say goodbye to death by
              approval and missed safety issues.
            </p>
            <p>
              Build the right thing, and build the thing right. I level up how clinical,
              product, QARA, data science, and engineering teams make decisions together,
              so you ship at pace and catch the right things proactively, without becoming
              a bottleneck or letting safety become an afterthought.
            </p>
            <div className="idl-label">What this looks like</div>
            <div className="idl-grid">
              <span>Cross-disciplinary workshops that get engineers, designers, and clinicians on the same page about outcomes, risk, and safety</span>
              <span>Preparing product and tech teams for AIaMD and SaMD regulation</span>
              <span>Proactive post-deployment quality and monitoring</span>
              <span>A quality-first culture that people live day to day</span>
            </div>
            <Link href="/contact" className="more">
              Discuss your product →
            </Link>
          </div>
          <div className="pillar" id="pillar-commercial-clinical-alignment">
            <div className="pa">
              <span>Practice Area 02</span> · <span>Commercial Success, Clinical Trust</span>
            </div>
            <h2>Commercial and Clinical Alignment</h2>
            <p className="plead">
              Communicate what matters, and live it day to day.
            </p>
            <p>
              As digital health companies scale, the sales narrative, the product roadmap,
              and the evidence strategy drift apart. I run sprints to unblock and re-align
              commercial, product, and clinical teams, so that what you&apos;re selling,
              what you&apos;re building, and what you&apos;re proving are the same story.
            </p>
            <div className="idl-label">What this looks like</div>
            <div className="idl-grid">
              <span>Sprints to unblock and re-align commercial, product, and clinical teams</span>
              <span>Zero gaps between the claims you make and the evidence you generate</span>
              <span>Connecting commercial narrative and storytelling to real clinical value</span>
              <span>Key opinion leadership: keynotes, offsites, and industry-facing thought and action leadership</span>
            </div>
            <Link href="/contact" className="more">
              Discuss your strategy →
            </Link>
          </div>
        </div>
      </section>

      {/* INLINE CTA */}
      <InlineCTA
        text="Not sure which practice area fits? Let's talk it through."
        cta="Get in touch →"
      />

      {/* QUOTE */}
      <section className="quote">
        <div className="wrap">
          <span className="label" style={{ marginBottom: 30 }}>
            The principle
          </span>
          <blockquote>
            “I don&apos;t add clinical credibility as a final audit. I build it in from{' '}
            <em>the start.”</em>
          </blockquote>
          <cite>Dr Shubs Upadhyay</cite>
        </div>
      </section>

      {/* PROCESS */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">How I work</span>
            <h2 className="sec-title wide">A process built on depth, not haste.</h2>
          </div>
          <div className="eng-grid four">
            {PROCESS.map(({ n, h, p }) => (
              <div className="eng-card" key={n}>
                <div className="en">{n}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="wrap">
          <span className="label">Let&apos;s work together</span>
          <h2>
            Building or backing? <em>Let&apos;s talk.</em>
          </h2>
          <p
            style={{
              maxWidth: '48ch',
              margin: '0 auto 38px',
              fontSize: 18,
              lineHeight: 1.5,
            }}
          >
            Whether you are building a digital health product that needs clinical
            credibility, or investing in the organisations doing that work, every
            conversation starts with understanding what you are actually trying to
            achieve.
          </p>
          <Link
            href="/contact"
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            Get in touch →
          </Link>
          <p className="cta-reassure">
            An honest reply within a couple of working days. No pitch.
          </p>
        </div>
      </section>
    </>
  )
}
