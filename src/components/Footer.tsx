import Link from 'next/link'
import ExtLink from '@/components/ExtLink'

const CONNECT = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/shubs-upadhyay' },
  {
    label: 'GPODH Podcast',
    href: 'https://gpodh.org?utm_source=shubs&utm_medium=website&utm_campaign=footer',
  },
  {
    label: 'Substack',
    href: 'https://shubstack.substack.com?utm_source=shubs&utm_medium=website&utm_campaign=footer',
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              Shubs<span>.</span>
            </div>
            <div className="foot-tag">Real work. Real health. Real impact.</div>
          </div>
          <div className="foot-col">
            <h5>Navigation</h5>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/thinking">Thinking</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Connect</h5>
            {CONNECT.map(({ label, href }) => (
              <ExtLink key={label} href={href}>
                {label}
              </ExtLink>
            ))}
          </div>
        </div>
        <div className="foot-bottom">
          <div>© Shubs Upadhyay / SandiQ Global</div>
          <div className="legal">
            <Link href="/legal">Legal Notice</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
