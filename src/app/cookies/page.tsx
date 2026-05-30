import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Shubs Upadhyay",
  description: "How this site uses cookies and similar technologies. GDPR and CNIL-compliant cookie policy.",
};

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="text-sm text-[var(--sq-muted)] mb-12" style={{ fontFamily: "var(--font-dm-mono)" }}>
          Politique de cookies, Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10 text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              1. What Are Cookies?
            </h2>
            <p className="text-sm leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners. Similar technologies include local storage, session storage, and tracking pixels.
            </p>
            <p className="text-sm leading-relaxed">
              In France, the deposit of non-essential cookies requires prior consent in accordance with GDPR and the guidelines issued by the <strong className="text-[var(--sq-ink)]">CNIL</strong>.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              2. Cookies We Use
            </h2>

            <div className="flex flex-col gap-4">
              {/* Strictly necessary */}
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[var(--sq-ink)] font-medium" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>Strictly Necessary</p>
                  <span className="text-xs px-2 py-1 border border-[var(--sq-teal-40)] text-[var(--sq-teal)] rounded" style={{ fontFamily: "var(--font-dm-mono)" }}>Always active</span>
                </div>
                <p className="text-sm leading-relaxed mb-3">
                  These cookies are essential for the website to function correctly. They cannot be disabled. No consent is required for these cookies under applicable law.
                </p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--sq-ink-8)]">
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Name</th>
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Purpose</th>
                      <th className="text-left py-2 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--sq-ink-5)]">
                      <td className="py-2 pr-4 font-mono">sq-theme</td>
                      <td className="py-2 pr-4">Stores your light/dark mode preference</td>
                      <td className="py-2">Persistent (localStorage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Analytics */}
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[var(--sq-ink)] font-medium" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>Analytics</p>
                  <span className="text-xs px-2 py-1 border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded" style={{ fontFamily: "var(--font-dm-mono)" }}>Requires consent</span>
                </div>
                <p className="text-sm leading-relaxed mb-3">
                  These cookies allow us to count visits and traffic sources so we can measure and improve site performance. All data is aggregated and anonymised.
                </p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--sq-ink-8)]">
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Provider</th>
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Purpose</th>
                      <th className="text-left py-2 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4">[INSERT ANALYTICS PROVIDER]</td>
                      <td className="py-2 pr-4">Anonymised page view analytics</td>
                      <td className="py-2">Up to 13 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Embedded content */}
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[var(--sq-ink)] font-medium" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>Third-Party Embedded Content</p>
                  <span className="text-xs px-2 py-1 border border-[var(--sq-amber-40)] text-[var(--sq-amber)] rounded" style={{ fontFamily: "var(--font-dm-mono)" }}>Requires consent</span>
                </div>
                <p className="text-sm leading-relaxed mb-3">
                  This site embeds content from third-party services (e.g., YouTube video players). These services may set their own cookies when you interact with the embedded content. We have no control over these cookies.
                </p>
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--sq-ink-8)]">
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Provider</th>
                      <th className="text-left py-2 pr-4 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Purpose</th>
                      <th className="text-left py-2 text-[var(--sq-amber)]" style={{ fontFamily: "var(--font-dm-mono)" }}>Policy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4">YouTube (Google)</td>
                      <td className="py-2 pr-4">Video playback</td>
                      <td className="py-2">
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:underline">
                          google.com/privacy
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              3. Managing Your Consent
            </h2>
            <p className="text-sm leading-relaxed">
              When you first visit this site, you will be asked to consent to non-essential cookies. You can withdraw or update your consent at any time. You can also manage cookies directly via your browser settings:
            </p>
            <ul className="text-sm leading-relaxed flex flex-col gap-2 pl-4">
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">Google Chrome</a></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">Mozilla Firefox</a></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">Apple Safari</a></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">Microsoft Edge</a></li>
            </ul>
            <p className="text-sm leading-relaxed">
              Please note that disabling certain cookies may affect the functionality of the website.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              4. Contact & Complaints
            </h2>
            <p className="text-sm leading-relaxed">
              For questions about our use of cookies, contact us at{" "}
              <a href="/contact" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                our contact form
              </a>
              . You also have the right to lodge a complaint with the{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                CNIL
              </a>
              .
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/legal" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Legal Notice →
            </Link>
            <Link href="/privacy" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Privacy Policy →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
