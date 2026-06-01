'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Persistent floating "Let's talk" button, bottom-right on every page.
 * Fades in after a little scroll, hides itself on the contact page (where the
 * form already is), and collapses to a round icon on small screens.
 */
export default function ContactFab() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't show it on the contact page itself.
  if (pathname === '/contact') return null

  return (
    <Link
      href="/contact"
      className={`contact-fab${visible ? ' is-visible' : ''}`}
      aria-label="Get in touch with Shubs"
    >
      <svg
        className="contact-fab-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <path
          d="M4 5h16v14H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4 6l8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="contact-fab-label">Let&apos;s talk</span>
    </Link>
  )
}
