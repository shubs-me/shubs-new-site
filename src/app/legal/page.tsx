import type { Metadata } from 'next'
import Link from 'next/link'
import ExtLink from '@/components/ExtLink'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description:
    'Legal notice (mentions légales) for SandiQ Global, the company behind this website, registered in France.',
  alternates: { canonical: '/legal' },
}

export default function LegalNoticePage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="label">Legal</span>
          <h1>Legal Notice</h1>
          <p className="sub">
            Mentions légales for SandiQ Global, the company behind this website.
          </p>
        </div>
      </header>

      <section className="light">
        <div className="wrap">
          <div className="prose legal-body">
            <div className="updated">Last updated: March 2026</div>

            <section>
              <h2>1. Publisher</h2>
              <p>
                This website is published by <strong>SandiQ Global</strong>, a company
                registered in France.
              </p>
              <dl className="legal-dl">
                <dt>Legal form</dt>
                <dd>Société par Actions Simplifiée Unipersonnelle (SASU)</dd>
                <dt>Registered office</dt>
                <dd>[INSERT ADDRESS], France</dd>
                <dt>SIRET</dt>
                <dd>[INSERT SIRET NUMBER]</dd>
                <dt>RCS</dt>
                <dd>[INSERT RCS NUMBER]</dd>
                <dt>Share capital</dt>
                <dd>[INSERT SHARE CAPITAL] €</dd>
                <dt>Intra-community VAT</dt>
                <dd>[INSERT VAT NUMBER]</dd>
              </dl>
            </section>

            <section>
              <h2>2. Publication Director</h2>
              <p>
                The publication director is <strong>Dr Shubs Upadhyay</strong>, Founding
                Partner of SandiQ Global.
              </p>
            </section>

            <section>
              <h2>3. Contact</h2>
              <p>
                The fastest way to reach us is via <Link href="/contact">our contact
                form</Link>.
              </p>
            </section>

            <section>
              <h2>4. Hosting Provider</h2>
              <p>
                This website is hosted by <strong>Vercel Inc.</strong>, 340 Pine Street,
                Suite 700, San Francisco, CA 94104, United States.{' '}
                <ExtLink href="https://vercel.com">vercel.com</ExtLink>
              </p>
            </section>

            <section>
              <h2>5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images,
                is the exclusive property of SandiQ Global or its licensors and is
                protected under French and international intellectual property law. Any
                reproduction, distribution, or use without prior written consent is
                strictly prohibited.
              </p>
            </section>

            <section>
              <h2>6. Limitation of Liability</h2>
              <p>
                SandiQ Global makes every effort to ensure the accuracy and currency of
                the information published on this site. However, we cannot guarantee that
                the information is complete, up to date, or free from error, and accept no
                liability for any loss or damage arising from its use.
              </p>
              <p>
                This site may contain links to third-party websites. SandiQ Global has no
                control over those sites and accepts no responsibility for their content
                or practices.
              </p>
            </section>

            <section>
              <h2>7. Applicable Law</h2>
              <p>
                This legal notice is governed by French law. Any dispute relating to its
                interpretation or application falls within the exclusive jurisdiction of
                the competent French courts.
              </p>
            </section>

            <div className="legal-more">
              <Link href="/privacy">Privacy Policy →</Link>
              <Link href="/cookies">Cookie Policy →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
