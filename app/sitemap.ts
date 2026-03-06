import type { MetadataRoute } from 'next'

const BASE_URL = 'https://rathoredevelopers.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/properties`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/developments`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/careers`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/faq`, priority: 0.4, changeFrequency: 'monthly' as const },
  ]

  // Individual property pages
  const propertyPages = [1, 2, 3, 4, 5, 6].map((id) => ({
    url: `${BASE_URL}/properties/${id}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
    lastModified: new Date(),
  }))

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: new Date(),
    })),
    ...propertyPages,
  ]
}
