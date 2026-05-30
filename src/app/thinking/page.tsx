import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thinking | Shubs Upadhyay',
  description:
    'Essays on digital health strategy, evidence, and equity — plus the GPODH podcast, recorded with leaders across 60+ countries.',
}

export default function Thinking() {
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
            Essays on digital health strategy, evidence, and equity — plus the GPODH
            podcast, recorded with leaders across 60+ countries.
          </p>
        </div>
      </header>

      {/* FEATURED + ARCHIVE */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Latest from Shubstack</span>
          </div>
          <a
            className="feat"
            href="https://shubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="fl">
              <div className="date">Mar 2026 · Essay</div>
              <h3>On solving actual problems in healthcare</h3>
              <p>
                Don&apos;t start with what tech or dataset you have. Start with the actual
                outcome and goal, and work with the people who have the problem.
              </p>
              <div className="more">Read on Shubstack →</div>
            </div>
            <div className="fr">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/shubs-cutout.png" alt="Dr Shubs Upadhyay" />
            </div>
          </a>

          <div className="think-list" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>
            <a
              className="think-row"
              href="https://shubstack.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="date">Mar 2026</div>
              <div>
                <h4>Same same, but different</h4>
                <p>
                  On choosing what matters and defining better health outcomes in digital
                  health, and why ambitious claims about AI deserve more scepticism than
                  they usually get.
                </p>
              </div>
              <div className="go">Read →</div>
            </a>
            <a
              className="think-row"
              href="https://shubstack.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="date">Nov 2025</div>
              <div>
                <h4>Evaluating tech in healthcare: measuring what matters</h4>
                <p>
                  Why most digital health evaluation frameworks miss the point, and what
                  rigorous value measurement actually looks like.
                </p>
              </div>
              <div className="go">Read →</div>
            </a>
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">The GPODH Podcast</span>
            <h2 className="sec-title">Global Perspectives on Digital Health.</h2>
          </div>
          <div className="pod">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shubs-headshot.webp" alt="Shubs, host" />
            <div className="pod-txt">
              <div className="k">Hosted by Dr Shubs Upadhyay</div>
              <h3>Candid conversations across 60+ countries</h3>
              <p>
                The people reshaping digital health — on what actually works, what
                doesn&apos;t, and what we keep getting wrong.
              </p>
            </div>
            <a
              href="https://gpodh.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              Listen on gpodh.org →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact">
        <div className="wrap">
          <span className="label">Keep reading</span>
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
            Essays on what it actually takes to build digital health that holds up —
            clinically, commercially, and at scale.
          </p>
          <a
            href="https://shubstack.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-clay"
            style={{ fontSize: 16, padding: '16px 32px' }}
          >
            Read the newsletter →
          </a>
        </div>
      </section>
    </>
  )
}
