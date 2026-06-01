import type { Metadata } from 'next'
import LegalPage, { type LegalContent } from '@/components/LegalPage'
import privacy from '@/../content/privacy.json'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How I collect, use, and protect your personal data. A GDPR-compliant privacy policy for SandiQ Global.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return <LegalPage content={privacy as LegalContent} />
}
