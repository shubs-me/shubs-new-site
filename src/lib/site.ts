/**
 * Canonical site URL, used for metadataBase, Open Graph, sitemap and robots.
 * Override per-environment with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shubs.me'
).replace(/\/$/, '')

export const SITE_NAME = 'Shubs Upadhyay'

export const SITE_DESCRIPTION =
  'Dr Shubs Upadhyay helps founders, product leaders, and medical leaders build digital health that holds up, clinically, commercially, and at scale.'
