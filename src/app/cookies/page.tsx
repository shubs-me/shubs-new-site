import type { Metadata } from 'next'
import Link from 'next/link'
import ExtLink from '@/components/ExtLink'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How this site uses cookies and similar technologies. A GDPR and CNIL-compliant cookie policy.',
  alternates: { canonical: '/cookies' },
}

export default function CookiePolicyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="label">Legal</span>
          <h1>Cookie Policy</h1>
          <p className="sub">
            Politique de cookies. How this site uses cookies and similar technologies.
          </p>
        </div>
      </header>

      <section className="light">
        <div className="wrap">
          <div className="prose legal-body">
            <div className="updated">Last updated: March 2026</div>

            <section>
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a
                website. They are widely used to make websites work more efficiently and
                to provide information to site owners. Similar technologies include local
                storage, session storage, and tracking pixels.
              </p>
              <p>
                In France, the deposit of non-essential cookies requires prior consent in
                accordance with the GDPR and the guidelines issued by the{' '}
                <strong>CNIL</strong>.
              </p>
            </section>

            <section>
              <h2>2. Cookies We Use</h2>

              <div className="legal-card">
                <div className="kv">Strictly necessary · always active</div>
                <p>
                  Essential for the website to function and to remember your cookie
                  choices. These cannot be disabled and require no consent under
                  applicable law.
                </p>
              </div>

              <div className="legal-card">
                <div className="kv">Analytics · requires consent</div>
                <p>
                  Used to count visits and traffic sources so we can measure and improve
                  site performance. All data is aggregated and anonymised. Provider:
                  [INSERT ANALYTICS PROVIDER]. Retention: up to 13 months.
                </p>
              </div>

              <div className="legal-card">
                <div className="kv">Third-party embedded content · requires consent</div>
                <p>
                  This site may embed content from third-party services (such as the
                  GPODH podcast player or video). These services may set their own cookies
                  when you interact with the embedded content, governed by their own
                  policies, for example{' '}
                  <ExtLink href="https://policies.google.com/privacy">
                    Google&apos;s privacy policy
                  </ExtLink>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2>3. Managing Your Consent</h2>
              <p>
                When you first visit this site you will be asked to consent to
                non-essential cookies. You can withdraw or update your consent at any
                time. You can also manage cookies directly via your browser settings:
              </p>
              <ul>
                <li>
                  <ExtLink href="https://support.google.com/chrome/answer/95647">
                    Google Chrome
                  </ExtLink>
                </li>
                <li>
                  <ExtLink href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                    Mozilla Firefox
                  </ExtLink>
                </li>
                <li>
                  <ExtLink href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                    Apple Safari
                  </ExtLink>
                </li>
                <li>
                  <ExtLink href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                    Microsoft Edge
                  </ExtLink>
                </li>
              </ul>
              <p>
                Please note that disabling certain cookies may affect the functionality of
                the website.
              </p>
            </section>

            <section>
              <h2>4. Contact &amp; Complaints</h2>
              <p>
                For questions about our use of cookies, contact us via{' '}
                <Link href="/contact">our contact form</Link>. You also have the right to
                lodge a complaint with the <ExtLink href="https://www.cnil.fr">CNIL</ExtLink>.
              </p>
            </section>

            <div className="legal-more">
              <Link href="/legal">Legal Notice →</Link>
              <Link href="/privacy">Privacy Policy →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
