import type { Metadata } from 'next'
import Link from 'next/link'

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
              Built for builders and those who back them.
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
                Start a conversation →
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
                Start a conversation →
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
            <h2 className="sec-title">Two practice areas. One discipline.</h2>
          </div>
          <div className="pillar" id="pillar-clinical-product-integration">
            <div className="pa">
              <span>Practice Area 01</span> · <span>Clinical &amp; Product</span>
            </div>
            <h2>Clinical and Product Integration</h2>
            <p>
              Level up how clinical, product, QARA, data science, and engineering teams
              make decisions together. The pre-deployment work on product quality and
              robust monitoring lets you ship at pace and catch the right things
              proactively, without becoming a bottleneck or safety becoming an
              afterthought. Whether your clinicians are embedded or advising in, I help
              you build the working relationships and processes that make the whole system
              reliable.
            </p>
            <div className="idl-label">Ideal for</div>
            <div className="idl-grid">
              <span>Clinical governance that enables rather than blocks</span>
              <span>Pre-deployment product quality and QARA</span>
              <span>Post-market monitoring and signal detection</span>
              <span>Cross-functional decision-making processes</span>
            </div>
            <Link href="/contact" className="more">
              Discuss your product →
            </Link>
          </div>
          <div className="pillar" id="pillar-commercial-clinical-alignment">
            <div className="pa">
              <span>Practice Area 02</span> · <span>Commercial Alignment</span>
            </div>
            <h2>Commercial and Clinical Alignment</h2>
            <p>
              As digital health companies scale, the sales narrative, the product roadmap,
              and the evidence strategy tend to drift apart. I work across commercial,
              product, and clinical teams to bring them back into a single line, so that
              what you&apos;re selling, what you&apos;re building, and what you&apos;re
              proving are the same story. Not a messaging project. An integrated strategic
              alignment that sets the priorities, the data, and the methodology to deliver
              and evidence the value you&apos;re promising.
            </p>
            <div className="idl-label">Ideal for</div>
            <div className="idl-grid">
              <span>Evidence strategies that answer procurement questions</span>
              <span>Sales narratives aligned to clinical outcomes data</span>
              <span>Roadmap and evidence strategy built in parallel</span>
              <span>Clinical due diligence and investor positioning</span>
            </div>
            <Link href="/contact" className="more">
              Discuss your strategy →
            </Link>
          </div>
        </div>
      </section>

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
            Book a call →
          </Link>
        </div>
      </section>
    </>
  )
}
