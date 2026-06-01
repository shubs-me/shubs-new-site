import type { Metadata } from 'next'
import LegalPage, { type LegalContent } from '@/components/LegalPage'
import cookies from '@/../content/cookies.json'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How this site uses cookies and similar technologies. A GDPR and CNIL-compliant cookie policy.',
  alternates: { canonical: '/cookies' },
}

export default function CookiePolicyPage() {
  return <LegalPage content={cookies as LegalContent} />
}
