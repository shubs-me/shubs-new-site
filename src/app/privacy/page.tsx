import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Shubs Upadhyay",
  description: "How I collect, use, and protect your personal data. GDPR-compliant privacy policy.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--sq-muted)] mb-12" style={{ fontFamily: "var(--font-dm-mono)" }}>
          Politique de confidentialité, Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10 text-[var(--sq-muted)]" style={{ fontFamily: "var(--font-dm-sans)" }}>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              1. Data Controller
            </h2>
            <p className="text-sm leading-relaxed">
              The data controller for personal data collected via this website is <strong className="text-[var(--sq-ink)]">SandiQ Global</strong>, registered in France.
              You can contact us at:{" "}
              <a href="/contact" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                our contact form
              </a>
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              2. What Data We Collect
            </h2>
            <p className="text-sm leading-relaxed">We collect personal data in the following circumstances:</p>
            <ul className="text-sm leading-relaxed flex flex-col gap-2 pl-4">
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Contact form:</strong> Name, organisation, role, message, and how you heard about us. This is collected only when you voluntarily submit the form.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Email correspondence:</strong> Your email address and the contents of any email you send us.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Usage data:</strong> Anonymised analytics data about how visitors interact with the site (see Cookie Policy for details).</span></li>
            </ul>
            <p className="text-sm leading-relaxed">We do not collect sensitive personal data (as defined under GDPR Article 9) unless you voluntarily provide it in your message.</p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              3. Purposes and Legal Basis for Processing
            </h2>
            <div className="text-sm leading-relaxed flex flex-col gap-3">
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-4">
                <p className="text-[var(--sq-ink)] font-medium mb-1">Responding to enquiries</p>
                <p>Purpose: To process and respond to contact form submissions and email enquiries.</p>
                <p className="mt-1">Legal basis: Legitimate interests (GDPR Art. 6(1)(f)), our legitimate interest in responding to business enquiries.</p>
              </div>
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-4">
                <p className="text-[var(--sq-ink)] font-medium mb-1">Service delivery</p>
                <p>Purpose: To deliver the consulting services you have contracted with us.</p>
                <p className="mt-1">Legal basis: Performance of a contract (GDPR Art. 6(1)(b)).</p>
              </div>
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-4">
                <p className="text-[var(--sq-ink)] font-medium mb-1">Website analytics</p>
                <p>Purpose: To understand how visitors use the site and improve its content.</p>
                <p className="mt-1">Legal basis: Consent (GDPR Art. 6(1)(a)), obtained via cookie consent banner.</p>
              </div>
              <div className="border border-[var(--sq-ink-8)] rounded-sm p-4">
                <p className="text-[var(--sq-ink)] font-medium mb-1">Legal compliance</p>
                <p>Purpose: To comply with applicable legal and regulatory obligations.</p>
                <p className="mt-1">Legal basis: Legal obligation (GDPR Art. 6(1)(c)).</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              4. Data Retention
            </h2>
            <ul className="text-sm leading-relaxed flex flex-col gap-2 pl-4">
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span>Contact form data is retained for up to 3 years from the date of submission, unless a business relationship is established.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span>Client engagement data is retained for 5 years from the end of the engagement, in line with French accounting and commercial law obligations.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span>Anonymised analytics data may be retained indefinitely as it cannot be used to identify individuals.</span></li>
            </ul>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              5. Data Sharing
            </h2>
            <p className="text-sm leading-relaxed">
              We do not sell, rent, or trade your personal data to third parties. We may share data with:
            </p>
            <ul className="text-sm leading-relaxed flex flex-col gap-2 pl-4">
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Service providers</strong> acting as data processors on our behalf (e.g., hosting provider Vercel Inc.), bound by appropriate data processing agreements.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Legal authorities</strong> where required by applicable law or court order.</span></li>
            </ul>
            <p className="text-sm leading-relaxed">
              Where data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses).
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              6. Your Rights
            </h2>
            <p className="text-sm leading-relaxed">Under the GDPR and French data protection law (loi Informatique et Libertés), you have the following rights:</p>
            <ul className="text-sm leading-relaxed flex flex-col gap-2 pl-4">
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right of access</strong>, request a copy of the personal data we hold about you.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to rectification</strong>, request correction of inaccurate data.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to erasure</strong>, request deletion of your data where there is no overriding legal basis for retention.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to restriction</strong>, request that we restrict processing of your data.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to data portability</strong>, receive your data in a structured, machine-readable format.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to object</strong>, object to processing based on legitimate interests.</span></li>
              <li className="flex gap-2"><span className="text-[var(--sq-amber)] shrink-0">›</span><span><strong className="text-[var(--sq-ink)]">Right to withdraw consent</strong>, where processing is based on consent, withdraw it at any time without affecting prior lawful processing.</span></li>
            </ul>
            <p className="text-sm leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a href="/contact" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                our contact form
              </a>
              . We will respond within one month. You also have the right to lodge a complaint with the French data protection authority, the{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200">
                CNIL (Commission Nationale de l&apos;Informatique et des Libertés)
              </a>
              .
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              7. Security
            </h2>
            <p className="text-sm leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against accidental or unlawful destruction, loss, alteration, or unauthorised disclosure. All data in transit is encrypted via TLS/HTTPS.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-col gap-3">
            <h2 className="text-xl text-[var(--sq-ink)]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>
              8. Changes to This Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update this policy from time to time. The date at the top of this page indicates when it was last revised. Material changes will be communicated via a notice on the website.
            </p>
          </div>

          <div className="h-px bg-[var(--sq-ink-8)]" />

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/legal" className="text-[var(--sq-amber)] hover:text-[var(--sq-ink)] transition-colors duration-200" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Legal Notice →
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
