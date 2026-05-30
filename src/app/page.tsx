import Link from 'next/link'

const TICKER = [
  'Clinical Leadership', 'Product Velocity', 'Evidence Strategy', 'Digital Health',
  'NHS', 'WHO', 'Clinical Rigour', 'Impact at Scale', 'Founder Advisory',
  'Implementation Science', 'Global Health', 'Evidence Design',
]

const STATS = [
  { n: '15+', l: 'Years across the digital health ecosystem' },
  { n: '5', l: 'Countries with multi-million pound contracts protected' },
  { n: '50+', l: 'International experts led at ITU / WHO' },
  { n: '20+', l: 'Countries with active client engagements' },
  { n: '60+', l: 'Countries reached via podcast' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-l">
            <span className="label">Dr Shubs Upadhyay — Digital Health Advisor</span>
            <h1>
              Clinical <em>rigour</em> at product speed.
            </h1>
            <p className="hero-lead">
              After a decade inside <b>venture-backed digital health</b>, the <b>NHS</b>,
              and <b>global health agencies</b>, I know what separates the products that
              hold up from the ones that don&apos;t. I set up independently to put that
              experience in your corner.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-clay">
                Work with me →
              </Link>
              <Link href="/services" className="btn btn-line">
                How I work →
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/shubs-cutout.png" alt="Dr Shubs Upadhyay" />
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
            <span className="label">Why this matters</span>
            <h2 className="sec-title">The gap I keep seeing.</h2>
          </div>
          <div className="narr-row">
            <div className="narr-tag">
              <div className="n">01</div>
              <div className="t">The Problem</div>
            </div>
            <div className="narr-body">
              <h3>What it costs when clinical comes in too late.</h3>
              <p>
                The digital health industry celebrates the wrong signals. Accuracy
                scores, engagement metrics, adoption curves. Easy to report, and none of
                it the same as health outcomes.
              </p>
              <p>
                Most products are built by smart, motivated people. The problem
                isn&apos;t technology or intent — it&apos;s that the definition of value
                gets decided too late, in the wrong room, by people who aren&apos;t
                equipped to make it. Clinical input arrives at the end to sign off rather
                than at the start to shape decisions.
              </p>
              <div className="chips">
                <span>What good looks like</span>
                <span>For which patients</span>
                <span>Against what counterfactual</span>
                <span>Over what horizon</span>
              </div>
            </div>
          </div>
          <div className="narr-row">
            <div className="narr-tag">
              <div className="n">02</div>
              <div className="t">The Cost</div>
            </div>
            <div className="narr-body">
              <h3>What it costs when this goes wrong.</h3>
              <p>
                <b>Builders and teams.</b> Deals stall in procurement because the clinical
                story wasn&apos;t built into the product from the start. Safety and quality
                incidents surface late and expensively. Regulatory submissions take three
                times as long as they should.
              </p>
              <p>
                <b>Funders and investors.</b> Portfolio companies report impressive
                activity metrics while missing the clinical outcomes that determine
                whether a health system buys, renews, or recommends. The gap between what
                was pitched and what holds up widens quietly — until it doesn&apos;t.
              </p>
            </div>
          </div>
          <div className="narr-row">
            <div className="narr-tag">
              <div className="n">03</div>
              <div className="t">The Solution</div>
            </div>
            <div className="narr-body">
              <h3>There&apos;s a better way to work, and I can help you build it.</h3>
              <p>
                Clinical rigour and product velocity are not opposites. They are a
                function of how clinical, product, commercial, and regulatory work is set
                up to happen together. When I come in early — shaping product decisions
                rather than reviewing them at the end — teams ship faster, build stronger
                evidence, and arrive at conversations with commissioners, regulators, and
                investors with a story that holds.
              </p>
              <p>
                I work with founders, product leaders, and medical leaders to build that
                way of working — tuned to where your organisation actually is, not lifted
                from a framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            {STATS.map(({ n, l }) => (
              <div className="stat" key={n + l}>
                <div className="n">{n}</div>
                <div className="l">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">What I do</span>
            <h2 className="sec-title">Two practice areas. One discipline.</h2>
          </div>
          <div className="pblock">
            <div className="pnum">01</div>
            <div>
              <h3>Clinical and Product Integration</h3>
              <p>
                Level up how clinical, product, QARA, data science, and engineering teams
                make decisions together. The pre-deployment work on product quality and
                robust monitoring lets you ship at pace and catch the right things
                proactively — without becoming a bottleneck or safety becoming an
                afterthought.
              </p>
              <div className="plist">
                <span>Pre-deployment quality and QARA that keeps you moving</span>
                <span>Monitoring frameworks that catch the right things proactively</span>
              </div>
              <Link href="/services" className="more">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="pblock">
            <div className="pnum">02</div>
            <div>
              <h3>Commercial and Clinical Alignment</h3>
              <p>
                As digital health companies scale, the sales narrative, the product
                roadmap, and the evidence strategy tend to drift apart. I bring them back
                into a single line — so what you&apos;re selling, what you&apos;re
                building, and what you&apos;re proving are the same story. Not a messaging
                project. An integrated strategic alignment.
              </p>
              <div className="plist">
                <span>Sales narrative aligned with clinical evidence</span>
                <span>Product, commercial, and evidence strategy as a single line</span>
              </div>
              <Link href="/services" className="more">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="light">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Who I work with</span>
            <h2 className="sec-title">I work directly with you.</h2>
          </div>
          <div className="three">
            <div className="who-card">
              <div className="kicker">People building</div>
              <h3>Digital health founders and their teams</h3>
              <p>
                When the clinical, product, commercial, and evidence challenges start to
                compound on each other, this is the engagement. I come in early, stay
                close, and build the ways of working that mean the next stage actually
                works.
              </p>
              <Link href="/services" className="more">
                See how I can help →
              </Link>
            </div>
            <div className="who-card">
              <div className="kicker">Workshops &amp; Sprints</div>
              <h3>Startups and scale-ups of any size</h3>
              <p>
                Not every challenge needs a long engagement. I run focused Workshops and
                Sprints designed to resolve specific friction, align teams, or build
                foundational practices before problems compound.
              </p>
              <Link href="/services" className="more">
                See my engagements →
              </Link>
            </div>
            <div className="who-card">
              <div className="kicker">People investing</div>
              <h3>Philanthropy, foundations, and impact investors</h3>
              <p>
                I bring senior clinical-strategic perspective into diligence, portfolio
                support, and cohort programming — helping the organisations you back build
                toward outcomes that hold up.
              </p>
              <Link href="/services" className="more">
                See how I help investors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">How I work · Three formats</span>
            <h2 className="sec-title">Three ways to level up your impact.</h2>
          </div>
          <div className="eng-grid">
            <div className="eng-card">
              <div className="en">01</div>
              <h3>Retainer Advisory</h3>
              <p>
                Ongoing senior counsel to founders and leadership teams. On-site presence
                where it matters, in the real decisions: board conversations,
                clinical-product reviews, evidence strategy, commercial alignment.
              </p>
            </div>
            <div className="eng-card">
              <div className="en">02</div>
              <h3>Three-Month Sprint</h3>
              <p>
                A focused intensive designed to resolve a specific strategic or
                operational challenge. Defined scope, clear deliverables, and a concrete
                output your team can run with.
              </p>
            </div>
            <div className="eng-card">
              <div className="en">03</div>
              <h3>Workshop &amp; Keynote</h3>
              <p>
                A single high-impact session for leadership teams, boards, or investor
                portfolios. I run workshops and keynotes at companies and conferences
                across Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote">
        <div className="wrap">
          <span className="label" style={{ marginBottom: 30 }}>
            In their words
          </span>
          <blockquote>
            “Very few advisors can hold all of those conversations. That is why founders,
            product leaders, and the investors who back them <em>bring me in.”</em>
          </blockquote>
          <cite>Dr Shubs Upadhyay</cite>
        </div>
      </section>

      {/* LIVED */}
      <section className="light">
        <div className="wrap lived">
          <div className="lived-body">
            <span className="label" style={{ marginBottom: 26 }}>
              Why work with me
            </span>
            <h2>
              Lived, <em>not lifted.</em>
            </h2>
            <p>
              I&apos;m a physician who has spent a decade at the point where these problems
              actually get solved. As senior clinical and medical director at a
              venture-backed digital health company deploying regulated AI across multiple
              markets, my work was defining what good looked like — for which patients,
              against what counterfactual — and then building the practices that could
              deliver it at the pace the business demanded.
            </p>
            <p>
              That work has continued since. Co-chairing a WHO working group on AI
              evaluation. Clinical practice across different health systems. Keynotes for
              senior tech and product audiences at companies like Doctolib, the Wellcome
              Trust, and conferences across Europe.
            </p>
            <p>
              What I bring is not a playbook. It is hard-won lessons from having lived
              these problems, and the ability to translate credibly across every
              discipline in the room. That fluency is the work.
            </p>
          </div>
          <div className="lived-photo">
            <span className="tag mono">Physician · Advisor · Host</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shubs-cutout.png" alt="Dr Shubs Upadhyay" />
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="label">Outcomes</span>
            <h2 className="sec-title">What I&apos;ve delivered.</h2>
          </div>
          <div className="out-hero">
            <div className="big">200K</div>
            <p>
              <b>Women reached through a single digital health programme.</b> Implementation
              science support helped transform a promising maternal health pilot into a
              government-endorsed programme. Each figure here is a real person in the
              system.
            </p>
          </div>
          <div className="out-list">
            <div className="out-item">
              <h4>NHS-grade clinical credibility</h4>
              <p>
                Embedded clinical leadership helped a Series B digital therapeutics
                company restructure its evidence strategy, resulting in a successful NHS
                procurement worth £3.4M.
              </p>
            </div>
            <div className="out-item">
              <h4>Policy positioning, internationally</h4>
              <p>
                Strategic counsel shaped national digital health roadmaps in partnership
                with ITU and WHO, securing institutional buy-in across multiple health
                system contexts.
              </p>
            </div>
            <div className="out-item">
              <h4>From pilot to scale in 18 months</h4>
              <p>
                Implementation science support transformed a promising maternal health
                pilot into a government-endorsed programme reaching 200,000 women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THINKING */}
      <section className="light" id="thinking">
        <div className="wrap">
          <div className="sec-head">
            <span className="label">From the founder</span>
            <h2 className="sec-title">The industry talks to itself. I don&apos;t.</h2>
          </div>
          <div className="think-list">
            <a
              className="think-row"
              href="https://shubstack.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="date">Mar 2026</div>
              <div>
                <h4>On solving actual problems in healthcare</h4>
                <p>
                  Don&apos;t start with what tech or dataset you have. Start with the
                  actual outcome and goal, and work with the people who have the problem.
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
              <div className="date">Mar 2026</div>
              <div>
                <h4>Same same, but different</h4>
                <p>
                  On choosing what matters and defining better health outcomes in digital
                  health, and why ambitious claims about AI deserve more scepticism.
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
          <div className="pod">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/shubs-headshot.webp" alt="Shubs, host" />
            <div className="pod-txt">
              <div className="k">Hosted by Dr Shubs Upadhyay · The GPODH Podcast</div>
              <h3>Global Perspectives on Digital Health</h3>
              <p>
                Candid conversations with the people reshaping digital health across 60+
                countries.
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

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <span className="label">Let&apos;s work together</span>
          <h2>
            Ready to build something <em>the right way?</em>
          </h2>
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
