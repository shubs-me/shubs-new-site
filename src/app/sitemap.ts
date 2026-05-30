import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ['', '/about', '/services', '/thinking', '/contact', '/legal', '/privacy', '/cookies']
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' || path === '/thinking' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/contact' ? 0.8 : 0.6,
  }))
}
