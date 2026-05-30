'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/thinking', label: 'Thinking' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="nav" id="nav">
      <div className="wrap nav-in">
        <Link href="/" className="brand">
          Shubs<span>.</span>
        </Link>
        <div className="nav-links">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`mono${pathname === href ? ' active' : ''}`}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-clay">
            Speak to me →
          </Link>
        </div>
      </div>
    </nav>
  )
}
