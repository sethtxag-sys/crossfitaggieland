import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'

const BASE = 'https://www.crossfitaggieland.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/crossfit-college-station`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
