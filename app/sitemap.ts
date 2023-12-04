import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://acme.com/updates',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://acme.com/internship',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: 'https://acme.com/teachings',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: 'https://acme.com/projectss',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: 'https://acme.com/achieevements',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: 'https://acme.com/publications',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }
  ]
}