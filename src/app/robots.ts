import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Keep your backend routes private
    },
    sitemap: 'https://viwebsync.com/sitemap.xml',
  };
}