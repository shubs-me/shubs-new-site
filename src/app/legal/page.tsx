import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | Shubs Upadhyay",
  description: "Mentions légales, Legal notice for Shubs Upadhyay / SandiQ Global, registered in France.",
};

export default function LegalNoticePage() {
  return (
    <section className="light pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[var(--sq-amber)]" />
          <p className="text-xs tracking-widest text-[var(--sq-amber)] uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
            Legal
          </p>
        </div>
        <h1
          className="text-4xl lg:text-5xl text-[var(--sq-ink)] leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}
        >
          Legal Notice
        </h1>
        <p className="text-sm text-[var(--sq-muted)] mb-12" style={{ fontFamily: "var(--font-dm-mono)" }}>
          Mentions légales, Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10 text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              1. Publisher
            </h2>
            <p className="text-sm leading-relaxed">
              This website is published by <strong className="text-[var(--sq-ink)]">SandiQ Global</strong>, a company registered in France.
            </p>
            <ul className="text-sm leading-relaxed flex flex-col gap-1 list-none pl-0">
              <li><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>LEGAL FORM</span><br />Société par Actions Simplifiée Unipersonnelle (SASU)</li>
              <li className="mt-2"><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>REGISTERED OFFICE</span><br />[INSERT ADDRESS], France</li>
              <li className="mt-2"><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>SIRET</span><br />[INSERT SIRET NUMBER]</li>
              <li className="mt-2"><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>RCS</span><br />[INSERT RCS NUMBER]</li>
              <li className="mt-2"><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>SHARE CAPITAL</span><br />[INSERT SHARE CAPITAL] €</li>
              <li className="mt-2"><span className="text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.7rem", letterSpacing: "0.08em" }}>INTRA-COMMUNITY VAT</span><br />[INSERT VAT NUMBER]</li>
            </ul>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              2. Publication Director
            </h2>
            <p className="text-sm leading-relaxed">
              The publication director is <strong className="text-[var(--sq-ink)]">Dr Shubs Upadhyay</strong>, Founding Partner of SandiQ Global.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              3. Contact
            </h2>
            <p className="text-sm leading-relaxed">
              Email:{" "}
              <a href="/contact" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                our contact form
              </a>
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              4. Hosting Provider
            </h2>
            <p className="text-sm leading-relaxed">
              This website is hosted by <strong className="text-[var(--sq-ink)]">Vercel Inc.</strong>
            </p>
            <ul className="text-sm leading-relaxed flex flex-col gap-1 list-none pl-0">
              <li>340 Pine Street, Suite 700, San Francisco, CA 94104, United States</li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                  vercel.com
                </a>
              </li>
            </ul>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              5. Intellectual Property
            </h2>
            <p className="text-sm leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, and images, is the exclusive property of SandiQ Global or its licensors and is protected under French and international intellectual property law. Any reproduction, distribution, or use without prior written consent is strictly prohibited.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              6. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              SandiQ Global makes every effort to ensure the accuracy and currency of information published on this site. However, we cannot guarantee that the information is complete, up-to-date, or free from error. SandiQ Global shall not be liable for any loss or damage arising from use of or reliance on information contained on this site.
            </p>
            <p className="text-sm leading-relaxed">
              This site may contain links to third-party websites. SandiQ Global has no control over those sites and accepts no responsibility for their content or practices.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              7. Applicable Law
            </h2>
            <p className="text-sm leading-relaxed">
              This legal notice is governed by French law. Any dispute relating to its interpretation or application shall fall within the exclusive jurisdiction of the competent French courts.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Privacy Policy →
            </Link>
            <Link href="/cookies" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Cookie Policy →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
