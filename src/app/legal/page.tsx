import type { Metadata } from 'next'
import LegalPage, { type LegalContent } from '@/components/LegalPage'
import legal from '@/../content/legal.json'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description:
    'Legal notice (mentions légales) for SandiQ Global, the company behind this website, registered in France.',
  alternates: { canonical: '/legal' },
}

export default function LegalNoticePage() {
  return <LegalPage content={legal as LegalContent} />
}
