import type { Metadata } from 'next'
import Link from 'next/link'
import ExtLink from '@/components/ExtLink'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How I collect, use, and protect your personal data. A GDPR-compliant privacy policy for SandiQ Global.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="label">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="sub">
            Politique de confidentialité. How your personal data is collected, used, and
            protected.
          </p>
        </div>
      </header>

      <section className="light">
        <div className="wrap">
          <div className="prose legal-body">
            <div className="updated">Last updated: March 2026</div>

            <section>
              <h2>1. Data Controller</h2>
              <p>
                The data controller for personal data collected via this website is{' '}
                <strong>SandiQ Global</strong>, registered in France. You can reach us via{' '}
                <Link href="/contact">our contact form</Link>.
              </p>
            </section>

            <section>
              <h2>2. What Data We Collect</h2>
              <p>We collect personal data in the following circumstances:</p>
              <ul>
                <li>
                  <span>
                    <strong>Contact form:</strong> name, organisation, role, message, and
                    how you heard about us, collected only when you voluntarily submit the
                    form.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Email correspondence:</strong> your email address and the
                    contents of any email you send us.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Usage data:</strong> anonymised analytics about how visitors
                    interact with the site (see the <Link href="/cookies">Cookie
                    Policy</Link>).
                  </span>
                </li>
              </ul>
              <p>
                We do not collect sensitive personal data (as defined under GDPR Article
                9) unless you voluntarily provide it in your message.
              </p>
            </section>

            <section>
              <h2>3. Purposes and Legal Basis</h2>
              <div className="legal-card">
                <div className="kv">Responding to enquiries</div>
                <p>
                  Processing and responding to contact form submissions and email
                  enquiries. Legal basis: legitimate interests (GDPR Art. 6(1)(f)).
                </p>
              </div>
              <div className="legal-card">
                <div className="kv">Service delivery</div>
                <p>
                  Delivering the consulting services you have contracted with us. Legal
                  basis: performance of a contract (GDPR Art. 6(1)(b)).
                </p>
              </div>
              <div className="legal-card">
                <div className="kv">Website analytics</div>
                <p>
                  Understanding how visitors use the site to improve its content. Legal
                  basis: consent (GDPR Art. 6(1)(a)).
                </p>
              </div>
              <div className="legal-card">
                <div className="kv">Legal compliance</div>
                <p>
                  Complying with applicable legal and regulatory obligations. Legal basis:
                  legal obligation (GDPR Art. 6(1)(c)).
                </p>
              </div>
            </section>

            <section>
              <h2>4. Data Retention</h2>
              <ul>
                <li>
                  <span>
                    Contact form data is retained for up to 3 years from submission,
                    unless a business relationship is established.
                  </span>
                </li>
                <li>
                  <span>
                    Client engagement data is retained for 5 years from the end of the
                    engagement, in line with French accounting and commercial law.
                  </span>
                </li>
                <li>
                  <span>
                    Anonymised analytics data may be retained indefinitely, as it cannot
                    identify individuals.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal data. We may share data with:
              </p>
              <ul>
                <li>
                  <span>
                    <strong>Service providers</strong> acting as data processors on our
                    behalf (such as our hosting provider, Vercel Inc.), bound by
                    appropriate data processing agreements.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Legal authorities</strong> where required by applicable law or
                    court order.
                  </span>
                </li>
              </ul>
              <p>
                Where data is transferred outside the European Economic Area, we ensure
                appropriate safeguards are in place (such as Standard Contractual Clauses).
              </p>
            </section>

            <section>
              <h2>6. Your Rights</h2>
              <p>
                Under the GDPR and French data protection law (loi Informatique et
                Libertés), you have the rights of access, rectification, erasure,
                restriction, data portability, objection, and withdrawal of consent.
              </p>
              <p>
                To exercise any of these, contact us via <Link href="/contact">our contact
                form</Link>. We will respond within one month. You also have the right to
                lodge a complaint with the French data protection authority, the{' '}
                <ExtLink href="https://www.cnil.fr">
                  CNIL (Commission Nationale de l&apos;Informatique et des Libertés)
                </ExtLink>
                .
              </p>
            </section>

            <section>
              <h2>7. Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect
                your personal data against accidental or unlawful destruction, loss,
                alteration, or unauthorised disclosure. All data in transit is encrypted
                via TLS/HTTPS.
              </p>
            </section>

            <section>
              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The date at the top of this
                page indicates when it was last revised. Material changes will be
                communicated via a notice on the website.
              </p>
            </section>

            <div className="legal-more">
              <Link href="/legal">Legal Notice →</Link>
              <Link href="/cookies">Cookie Policy →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
