import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const defaultSEO = {
  title: 'Berimbau Brazilian Table - Authentic Brazilian Restaurant NYC',
  description: 'Experience authentic Brazilian cuisine at Berimbau Brazilian Table. Two NYC locations in West Village and Midtown. Brazil is a feeling - discover our cultural space where flavors become feelings and moments become memories.',
  keywords: ['brazilian restaurant', 'brazilian food nyc', 'west village restaurant', 'midtown restaurant', 'authentic brazilian cuisine', 'berimbau nyc', 'brazilian table', 'caipirinha', 'brazilian culture', 'nyc dining', 'reservations', 'delivery'],
  image: '/img/couple_hero.jpg',
  url: 'https://berimbaurestaurant.com',
  type: 'website' as const,
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoImage = image || defaultSEO.image
  const seoUrl = url || defaultSEO.url
  const seoType = type || defaultSEO.type

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: keywords || defaultSEO.keywords,
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: 'Berimbau Brazilian Table',
    
    // Open Graph
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: 'Berimbau Brazilian Table',
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_US',
      type: seoType,
      publishedTime,
      modifiedTime,
      section,
      tags,
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@berimbau_nyc',
    },

    // Additional metadata
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification (add your verification codes here)
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },

    // Canonical URL
    alternates: {
      canonical: seoUrl,
    },

    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },

    // Manifest
    manifest: '/site.webmanifest',
  }
}

export function generateStructuredData({
  title,
  description,
  url,
  image,
  type = 'WebSite',
  author,
  publishedTime,
  modifiedTime,
}: Omit<SEOProps, 'type'> & { type?: string } = {}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title || defaultSEO.title,
    description: description || defaultSEO.description,
    url: url || defaultSEO.url,
    image: image || defaultSEO.image,
    ...(author && { author: { '@type': 'Person', name: author } }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
  }

  return structuredData
}
