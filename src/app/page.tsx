import Link from "next/link";
import Image from "next/image";
import HeroGlobe from "@/components/HeroGlobe";
import FadeIn from "@/components/FadeIn";
import StatCounter from "@/components/StatCounter";
import BroadcastGraphic from "@/components/BroadcastGraphic";
import CtaGeometricGraphic from "@/components/CtaGeometricGraphic";
import PopulationFigureGraphic from "@/components/PopulationFigureGraphic";
import VennGraphic from "@/components/VennGraphic";
import MarqueeTicker from "@/components/MarqueeTicker";
import { BuildersIcon, ScaleupsIcon, InvestorsIcon } from "@/components/WhoIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubs Upadhyay | Clinical Rigour at Product Speed",
  description:
    "Dr Shubs Upadhyay helps founders, product leaders, and medical leaders build digital health that holds up, clinically, commercially, and at scale.",
};

const pillars: { num: string; slug: string; title: string; tagline: string; desc: string; services: string[] }[] = [
  {
    num: "01",
    slug: "pillar-clinical-product-integration",
    title: "Clinical and Product Integration",
    tagline: "Clinical & Product",
    desc: "Level up how clinical, product, QARA, data science, and engineering teams make decisions together. The pre-deployment work on product quality and robust monitoring lets you ship at pace and catch the right things proactively, without becoming a bottleneck or safety becoming an afterthought. Whether your clinicians are embedded or advising in, I help you build the working relationships and processes that make the whole system reliable.",
    services: ["Pre-deployment quality and QARA that keeps you moving", "Monitoring frameworks that catch the right things proactively"],
  },
  {
    num: "02",
    slug: "pillar-commercial-clinical-alignment",
    title: "Commercial and Clinical Alignment",
    tagline: "Commercial Alignment",
    desc: "As digital health companies scale, the sales narrative, the product roadmap, and the evidence strategy tend to drift apart. I work across commercial, product, and clinical teams to bring them back into a single line, so that what you're selling, what you're building, and what you're proving are the same story. Not a messaging project. An integrated strategic alignment that sets the priorities, the data, and the methodology to deliver and evidence the value you're promising.",
    services: ["Sales narrative aligned with clinical evidence", "Product, commercial, and evidence strategy as a single line"],
  },
];

const stats = [
  { value: "15+", label: "Years across the digital health ecosystem" },
  { value: "5",   label: "Countries with multi-million pound contracts protected" },
  { value: "50+", label: "International experts led at ITU/WHO" },
  { value: "20+", label: "Countries with active client engagements" },
  { value: "60+", label: "Countries reached via podcast" },
];

const outcomes = [
  {
    title: "NHS-grade clinical credibility for a Series B startup",
    desc: "Embedded clinical leadership helped a digital therapeutics company restructure its evidence strategy, resulting in a successful NHS procurement worth £3.4M.",
  },
  {
    title: "Policy positioning across international health systems",
    desc: "Strategic counsel shaped national digital health roadmaps in partnership with ITU and WHO, securing political and institutional buy-in across multiple health system contexts.",
  },
  {
    title: "From pilot to scale in 18 months",
    desc: "Implementation science support transformed a promising maternal health pilot into a government-endorsed programme reaching 200,000 women.",
  },
];

const articles = [
  {
    title: "On solving actual problems in healthcare",
    date: "Mar 2026",
    excerpt: "Don't start with what tech or dataset you have. Start with the actual outcome and goal, and work with the people who have the problem.",
    href: "https://shubstack.substack.com/p/on-solving-actual-problems-in-healthcare?utm_source=shubs&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Same same, but different",
    date: "Mar 2026",
    excerpt: "On choosing what matters and defining better health outcomes in digital health, and why ambitious claims about AI deserve more scepticism than they usually get.",
    href: "https://shubstack.substack.com/p/same-same-but-different?utm_source=shubs&utm_medium=website&utm_campaign=homepage",
  },
  {
    title: "Evaluating tech in healthcare: measuring what matters",
    date: "Nov 2025",
    excerpt: "Why most digital health evaluation frameworks miss the point, and what rigorous value measurement actually looks like.",
    href: "https://shubstack.substack.com/p/evaluating-tech-in-healthcare-measuring?utm_source=shubs&utm_medium=website&utm_campaign=homepage",
  },
];

/* ── Shared divider ──────────────────────────────────────────── */
function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden>
      <div className="flex-1 h-px" style={{ background: "rgba(9,9,11,0.08)" }} />
      {label && (
        <span
          className="text-[9px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(9,9,11,0.3)" }}
        >
          {label}
        </span>
      )}
      <div className="flex-1 h-px" style={{ background: "rgba(9,9,11,0.08)" }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────── */}
      {/* HERO                                                        */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-[95vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--sq-bg)" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0" style={{ outline: "2px solid rgba(0,85,255,0.2)", outlineOffset: 3 }}>
                <Image
                  src="/images/shubs-headshot.webp"
                  alt="Dr Shubs Upadhyay"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px w-6" style={{ background: "#0055FF" }} />
                <p
                  className="text-xs tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}
                >
                  Hi, I&apos;m Shubs.
                </p>
              </div>
            </div>

            {/* Display headline */}
            <h1
              className="leading-[0.92] tracking-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
              }}
            >
              <span style={{ color: "#F0306A" }}>Clinical</span>
              <br />
              <span style={{ color: "var(--sq-ink)" }}>rigour at</span>
              <br />
              <span style={{ color: "var(--sq-ink)" }}>product speed.</span>
            </h1>

            <p
              className="text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}
            >
              After a decade working inside <strong style={{ color: "var(--sq-ink)" }}>venture-backed digital health</strong>, the{" "}
              <strong style={{ color: "var(--sq-ink)" }}>NHS</strong>, and{" "}
              <strong style={{ color: "var(--sq-ink)" }}>global health agencies</strong>, I know what
              separates the products that hold up from the ones that don&apos;t. I set up independently
              to put that experience in your corner.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white rounded transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#0055FF" }}
              >
                Work with me →
              </Link>
              <Link
                href="#narrative"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--sq-ink)",
                  border: "1px solid rgba(9,9,11,0.15)",
                }}
              >
                How I work →
              </Link>
            </div>
          </div>

          {/* Right: globe */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-72 sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]">
              <HeroGlobe />
            </div>
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* TICKER                                                      */}
      {/* ─────────────────────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ─────────────────────────────────────────────────────────── */}
      {/* NARRATIVE — The Gap / The Cost / The Solution               */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="narrative" className="pt-28 pb-24 overflow-hidden" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-20">

          {/* Chapter opener — full-width display */}
          <FadeIn>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "#F0306A" }} />
                <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                  Why this matters
                </p>
              </div>
              <p
                className="text-5xl lg:text-6xl xl:text-7xl leading-[1.0]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
              >
                The gap I keep <em style={{ color: "#F0306A", fontStyle: "italic" }}>seeing.</em>
              </p>
            </div>
          </FadeIn>

          {/* ── 01 The Problem ── */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr] gap-6 lg:gap-14">
              <div className="flex lg:flex-col gap-3 items-start pt-1">
                <span
                  className="text-[5rem] lg:text-[7rem] leading-none select-none"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, color: "rgba(9,9,11,0.06)" }}
                  aria-hidden
                >
                  01
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                  The Problem
                </p>
                <h2
                  className="text-3xl lg:text-4xl leading-[1.1]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                >
                  What it costs when clinical comes in too late.
                </h2>
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                  The digital health industry celebrates the wrong signals. Accuracy scores, engagement metrics,
                  adoption curves. Easy to report, and none of it the same as health outcomes.
                </p>
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                  Most digital health products are built by smart, motivated people. The problem isn&apos;t technology
                  or intent. It&apos;s that the definition of value gets decided too late, in the wrong room, by people
                  who aren&apos;t equipped to make it. Clinical input arrives at the end to sign off rather than at the
                  start to shape decisions. Evidence gets retrofitted to a roadmap that&apos;s already locked.
                </p>
                <div
                  className="flex flex-col gap-1.5 pl-5 my-2"
                  style={{ borderLeft: "2px solid rgba(0,85,255,0.25)" }}
                >
                  <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    Value in digital health means:
                  </p>
                  {["What good looks like", "For which patients", "Against what counterfactual", "Over what horizon"].map((item) => (
                    <p key={item} className="text-sm italic" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <SectionDivider />

          {/* ── 02 The Cost ── */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr] gap-6 lg:gap-14">
              <div className="flex lg:flex-col gap-3 items-start pt-1">
                <span
                  className="text-[5rem] lg:text-[7rem] leading-none select-none"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, color: "rgba(9,9,11,0.06)" }}
                  aria-hidden
                >
                  02
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                  The Cost
                </p>
                <h2
                  className="text-3xl lg:text-4xl leading-[1.1]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                >
                  What it costs when this goes wrong.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "Builders and teams",
                      body: "Deals stall in procurement because the clinical story wasn't built into the product from the start. Safety and quality incidents surface late and expensively. Regulatory submissions take three times as long as they should.",
                    },
                    {
                      label: "For funders and investors",
                      body: "Portfolio companies report impressive activity metrics while missing the clinical outcomes that determine whether a health system buys, renews, or recommends. The gap between what was pitched and what holds up to clinical scrutiny widens quietly, until it doesn't.",
                    },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className="flex flex-col gap-3 p-7 rounded-sm"
                      style={{ border: "1px solid rgba(9,9,11,0.08)", backgroundColor: "var(--sq-bg2)" }}
                    >
                      <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                        {card.label}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <SectionDivider />

          {/* ── 03 The Solution ── */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr] gap-6 lg:gap-14">
              <div className="flex lg:flex-col gap-3 items-start pt-1">
                <span
                  className="text-[5rem] lg:text-[7rem] leading-none select-none"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, color: "rgba(9,9,11,0.06)" }}
                  aria-hidden
                >
                  03
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-center">
                <div className="flex flex-col gap-5">
                  <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                    The Solution
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl leading-[1.1]"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                  >
                    There&apos;s a better way to work, and I can help you build it.
                  </h2>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    Clinical rigour and product velocity are not opposites. They are a function of how clinical,
                    product, commercial, and regulatory work is set up to happen together. When I come in early,
                    shaping product decisions rather than reviewing them at the end, teams ship faster, build
                    stronger evidence, and arrive at conversations with commissioners, regulators, and investors
                    with a story that holds.
                  </p>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    I work with founders, product leaders, and medical leaders to build that way of working,
                    tuned to where your organisation actually is, not lifted from a framework.
                  </p>
                </div>
                <div className="flex justify-center">
                  <VennGraphic />
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* WHO I WORK WITH — bordered cards, no block colour           */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="who" className="py-24 overflow-hidden" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading row */}
          <FadeIn className="mb-16 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#F0306A" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                Who I work with
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              I work directly with <em style={{ color: "#F0306A", fontStyle: "normal" }}>you.</em>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x" style={{ borderColor: "rgba(9,9,11,0.08)", border: "1px solid rgba(9,9,11,0.08)", borderRadius: 2 }}>
            {[
              {
                num: "01",
                accent: "#0055FF",
                icon: <BuildersIcon />,
                label: "People building",
                title: "Digital health founders and their teams",
                desc: "If you're building a digital health product and the clinical, product, commercial, and evidence challenges are starting to compound on each other, this is the engagement. I come in early, stay close, and help you build the ways of working that mean the next stage actually works.",
                cta: "See how I can help →",
              },
              {
                num: "02",
                accent: "#F0306A",
                icon: <ScaleupsIcon />,
                label: "Workshops & Sprints",
                title: "Startups and scale-ups of any size",
                desc: "Not every challenge needs a long engagement. I run focused Workshops and Sprints designed to resolve specific friction, align teams, or build foundational practices before problems compound, whatever stage you're at.",
                cta: "See my engagements →",
              },
              {
                num: "03",
                accent: "#0055FF",
                icon: <InvestorsIcon />,
                label: "People investing",
                title: "Philanthropy, foundations, and impact investors",
                desc: "I work with foundations, philanthropies, and impact investors to bring senior clinical-strategic perspective into diligence, portfolio support, and cohort programming, helping the organisations you back build toward outcomes that actually hold up.",
                cta: "See how I help investors →",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="flex flex-col gap-6 p-10 lg:p-12 h-full"
                  style={{ borderTop: `3px solid ${card.accent}` }}
                >
                  {card.icon}
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-[10px] tracking-[0.22em] uppercase"
                      style={{ fontFamily: "var(--font-dm-mono)", color: card.accent }}
                    >
                      {card.label}
                    </p>
                    <h3
                      className="text-2xl lg:text-3xl leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}
                  >
                    {card.desc}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)", color: card.accent }}
                  >
                    {card.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* STATS — full-bleed pink colour moment #1                   */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="track-record"
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#F0306A",
          "--sq-ink": "#FFFFFF",
          "--sq-muted": "rgba(255,255,255,0.68)",
          "--sq-amber": "#0055FF",
        } as React.CSSProperties}
      >
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-3 px-8 py-14">
                <StatCounter
                  value={stat.value}
                  className="text-6xl lg:text-7xl xl:text-8xl"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    lineHeight: 1,
                    color: "#FFFFFF",
                  }}
                />
                <p
                  className="text-xs leading-relaxed max-w-[140px]"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(255,255,255,0.65)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* PRACTICE AREAS                                              */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="practice" className="py-24" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn className="mb-16 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#0055FF" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                What I do
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              Two practice areas.<br />One discipline.
            </p>
            <p className="text-base leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
              My work flows from a single conviction: real value in digital health demands clinical rigour,
              honest communication, and leadership that knows what outcomes actually mean.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "rgba(9,9,11,0.08)" }}>
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="flex flex-col gap-6 p-10"
                  style={{ backgroundColor: "var(--sq-bg)" }}
                >
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-xs tracking-[0.22em] uppercase"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}
                    >
                      {p.tagline}
                    </span>
                    <span
                      className="text-6xl leading-none"
                      style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, color: "rgba(0,85,255,0.12)" }}
                      aria-hidden
                    >
                      {p.num}
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    {p.desc}
                  </p>
                  <div className="flex flex-col gap-2">
                    {p.services.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#F0306A" }} />
                        <span className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--sq-muted)" }}>{s}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link
                      href={`/services#${p.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white rounded transition-colors duration-200"
                      style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#0055FF" }}
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* HOW I WORK — three engagement formats                       */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="how-we-work" className="py-24" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn className="mb-16 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#F0306A" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                How I work · Three Engagement Formats
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              Three ways to level up your impact.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Retainer Advisory",
                desc: "Ongoing senior counsel to founders and leadership teams. On-site presence where it matters, in the real decisions: board conversations, clinical-product reviews, evidence strategy, commercial alignment.",
              },
              {
                num: "02",
                title: "Three-Month Sprint",
                desc: "A focused intensive designed to resolve a specific strategic or operational challenge. Defined scope, clear deliverables, and a concrete output your team can run with.",
              },
              {
                num: "03",
                title: "Workshop & Keynote",
                desc: "A single high-impact session for leadership teams, boards, or investor portfolios. I run workshops and keynotes at companies and conferences across Europe.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="flex flex-col gap-5 p-8 h-full"
                  style={{ borderLeft: "3px solid #F0306A", backgroundColor: "var(--sq-bg2)" }}
                >
                  <span
                    className="text-5xl leading-none"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, color: "rgba(240,48,106,0.15)" }}
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="mt-10 flex">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "#F0306A",
                  border: "1px solid rgba(240,48,106,0.35)",
                  borderRadius: 2,
                }}
              >
                Discuss which format fits →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* PULL QUOTE — full-bleed colour moment #2                    */}
      {/* ─────────────────────────────────────────────────────────── */}
      <FadeIn>
        <div
          className="py-16 px-6"
          style={{ backgroundColor: "#0055FF" }}
        >
          <div className="max-w-4xl mx-auto">
            <blockquote>
              <p
                className="text-3xl lg:text-4xl xl:text-5xl leading-[1.1] text-white"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, fontStyle: "italic" }}
              >
                &ldquo;Very few advisors can hold all of those conversations. That is why founders, product leaders,
                and the investors who back them bring me in.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px w-8" style={{ background: "rgba(255,255,255,0.35)" }} />
                <span
                  className="text-xs tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(255,255,255,0.6)" }}
                >
                  Dr Shubs Upadhyay
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </FadeIn>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* WHY WORK WITH ME                                            */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="why" className="py-24" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn className="mb-14 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#0055FF" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                Why work with me
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              Lived, not lifted.
            </p>
          </FadeIn>

          <FadeIn delay={80} className="max-w-3xl flex flex-col gap-6 mb-20">
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
              I&apos;m a physician who has spent a decade at the point where these problems actually get solved.
              As senior clinical and medical director at a venture-backed digital health company deploying
              regulated AI across multiple markets, my work was defining what good looked like, for which
              patients, against what counterfactual, and then building the clinical, product, and evidence
              practices that could deliver it at the pace the business demanded.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
              That work has continued since. Co-chairing a WHO working group on AI evaluation. Clinical
              practice across different health systems. Keynotes and leadership sessions for senior tech and
              product audiences at companies like Doctolib, the Wellcome Trust, and at conferences and
              accelerators across Europe.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
              What I bring is not a playbook. It is hard-won lessons from having lived these problems, and the
              ability to translate credibly across every discipline in the room — clinicians, product, data
              science, engineering, regulatory, commercial. That fluency is the work.
            </p>
          </FadeIn>

          {/* Testimonial placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 100}>
                <div
                  className="flex flex-col gap-6 p-8 h-full"
                  style={{ borderTop: "2px solid rgba(9,9,11,0.08)", backgroundColor: "var(--sq-bg2)" }}
                >
                  <span
                    className="text-4xl leading-none opacity-30"
                    style={{ fontFamily: "var(--font-cormorant)", color: "#0055FF" }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-base leading-relaxed flex-1 italic"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "var(--sq-muted)" }}
                  >
                    Testimonial coming soon.
                  </p>
                  <div
                    className="pt-5 flex flex-col gap-1"
                    style={{ borderTop: "1px solid rgba(9,9,11,0.08)" }}
                  >
                    <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, color: "var(--sq-ink)" }}>
                      Name, Role
                    </p>
                    <p className="text-xs" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--sq-muted)" }}>
                      Organisation
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* OUTCOMES                                                    */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="outcomes" className="py-24" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn className="mb-14 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#F0306A" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                Outcomes
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              What I&apos;ve delivered.
            </p>
          </FadeIn>

          {/* Population impact — full-width display */}
          <FadeIn delay={80}>
            <div
              className="mb-14 flex flex-col md:flex-row items-center gap-10 p-8 rounded-sm"
              style={{ border: "1px solid rgba(9,9,11,0.08)", backgroundColor: "var(--sq-bg2)" }}
            >
              <div className="shrink-0">
                <PopulationFigureGraphic total={120} highlighted={30} cols={12} className="w-64 h-auto opacity-90" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}>
                  Population impact
                </p>
                <p
                  className="text-3xl lg:text-4xl leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                >
                  200,000 women reached through a single digital health programme.
                </p>
                <p className="text-sm leading-relaxed max-w-md" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                  Implementation science support helped transform a promising maternal health pilot into a
                  government-endorsed programme. Each figure here is a real person in the system.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((outcome, i) => (
              <FadeIn key={i} delay={i * 120}>
                <div
                  className="relative flex flex-col gap-3 h-full py-2 pl-6"
                  style={{ borderLeft: "2px solid #0055FF" }}
                >
                  <span
                    className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] rounded-full"
                    style={{ backgroundColor: "#0055FF" }}
                    aria-hidden
                  />
                  <span
                    className="absolute -top-1 -left-[4px] w-2 h-2 rounded-full sonar-ring"
                    style={{ backgroundColor: "rgba(0,85,255,0.25)", animationDelay: `${i * 0.4}s` }}
                    aria-hidden
                  />
                  <h3
                    className="text-xl leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                  >
                    {outcome.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    {outcome.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* THOUGHT LEADERSHIP                                          */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section id="thinking" className="py-24" style={{ backgroundColor: "var(--sq-bg)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <FadeIn className="mb-14 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-px w-8" style={{ background: "#0055FF" }} />
              <p className="text-xs tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "#0055FF" }}>
                From the founder
              </p>
            </div>
            <p
              className="text-4xl lg:text-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
            >
              The industry talks to itself.<br />
              <em style={{ color: "#F0306A" }}>I don&apos;t.</em>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10" style={{ border: "1px solid rgba(9,9,11,0.08)" }}>
            {articles.map((article, i) => (
              <FadeIn key={i} delay={i * 100}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex flex-col gap-4 p-8 h-full transition-colors duration-200 hover:bg-[var(--sq-bg2)]"
                  style={{
                    borderRight: i < 2 ? "1px solid rgba(9,9,11,0.08)" : undefined,
                    backgroundColor: "var(--sq-bg)",
                  }}
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-dm-mono)", color: "var(--sq-muted)" }}>
                    {article.date}
                  </p>
                  <h3
                    className="text-xl leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                    {article.excerpt}
                  </p>
                  <span className="text-sm" style={{ color: "#0055FF", fontFamily: "var(--font-dm-sans)" }}>
                    Read →
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="flex justify-center mb-16">
              <a
                href="https://shubstack.substack.com?utm_source=shubs&utm_medium=website&utm_campaign=homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "#0055FF",
                  border: "1px solid rgba(0,85,255,0.3)",
                  borderRadius: 2,
                }}
              >
                Read these and more on Shubstack →
              </a>
            </div>
          </FadeIn>

          {/* Podcast strip */}
          <FadeIn delay={100}>
            <div
              className="flex flex-col md:flex-row items-center gap-8 p-8"
              style={{ borderLeft: "3px solid #F0306A", backgroundColor: "var(--sq-bg2)" }}
            >
              <div className="shrink-0 flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-full overflow-hidden"
                  style={{ outline: "2px solid rgba(240,48,106,0.3)", outlineOffset: 3 }}
                >
                  <Image
                    src="/images/shubs-headshot.webp"
                    alt="Dr Shubs Upadhyay, host"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <BroadcastGraphic size={56} />
              </div>
              <div className="flex-1">
                <p
                  className="text-[9px] tracking-[0.25em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "#F0306A" }}
                >
                  Hosted by Dr Shubs Upadhyay · The GPODH Podcast
                </p>
                <p
                  className="text-lg mb-1"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600, color: "var(--sq-ink)" }}
                >
                  Global Perspectives on Digital Health
                </p>
                <p className="text-sm" style={{ fontFamily: "var(--font-dm-sans)", color: "var(--sq-muted)" }}>
                  Candid conversations with the people reshaping digital health across 60+ countries.
                </p>
              </div>
              <a
                href="https://gpodh.org?utm_source=shubs&utm_medium=website&utm_campaign=homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: "var(--sq-ink)",
                  border: "1px solid rgba(240,48,106,0.35)",
                  borderRadius: 2,
                }}
              >
                Listen on gpodh.org →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────── */}
      {/* CTA — full-bleed blue colour moment #3                     */}
      {/* ─────────────────────────────────────────────────────────── */}
      <section
        id="cta"
        className="relative py-24 overflow-hidden"
        style={{
          backgroundColor: "#0055FF",
          "--sq-ink": "#FFFFFF",
          "--sq-muted": "rgba(255,255,255,0.75)",
          "--sq-amber": "#FFFFFF",
          "--sq-amber-d": "rgba(255,255,255,0.85)",
          "--sq-bg": "rgba(255,255,255,0.08)",
        } as React.CSSProperties}
      >
        <CtaGeometricGraphic />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <p
            className="text-xs tracking-[0.18em] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(255,255,255,0.55)" }}
          >
            Let&apos;s work together
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.05]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
          >
            Ready to build something<br />
            <em style={{ color: "#F0306A" }}>the right way?</em>
          </h2>
          <p
            className="text-base max-w-lg"
            style={{ fontFamily: "var(--font-dm-sans)", color: "rgba(255,255,255,0.75)" }}
          >
            Whether you&apos;re building a digital health product that needs to hold up to clinical scrutiny,
            or investing in the organisations doing that work, every conversation starts by understanding
            what you&apos;re actually trying to achieve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded text-white transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)", backgroundColor: "#F0306A" }}
          >
            Book a call →
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
