import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { site } from '@/lib/data'
import './globals.css'

const siteUrl = 'https://www.crossfitaggieland.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `CrossFit College Station | ${site.name} | ${site.awardsCount}x ${site.awardName}`,
  description: `CrossFit gym in College Station, TX. ${site.awardsCount}x ${site.awardName} winner since ${site.established}. Coach-led classes from 5 AM to 6:30 PM. Your first week is free. No contract.`,
  keywords: [
    'CrossFit College Station',
    'CrossFit Aggieland',
    'gym College Station TX',
    'CrossFit near me',
    'College Station gym',
    'CrossFit Bryan College Station',
    'best gym College Station',
    'CrossFit classes College Station',
    'personal training College Station TX',
    'fitness College Station',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${site.name} | CrossFit in College Station, TX`,
    description: `${site.awardsCount}x ${site.awardName} winner. Coach-led CrossFit classes from 5 AM to 6:30 PM. First week free. No contract.`,
    url: siteUrl,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-group.jpg',
        width: 1600,
        height: 900,
        alt: 'CrossFit Aggieland community workout in College Station, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | CrossFit College Station`,
    description: `${site.awardsCount}x ${site.awardName}. Coach-led classes. First week free.`,
    site: '@CFAggieland',
    creator: '@CFAggieland',
    images: ['/images/hero-group.jpg'],
  },
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
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'College Station',
    'geo.position': '30.5968;-96.2977',
    'ICBM': '30.5968, -96.2977',
  },
}

// LocalBusiness structured data (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  '@id': `${siteUrl}/#gym`,
  name: site.name,
  description: `CrossFit gym in College Station, TX. ${site.awardsCount}x ${site.awardName} winner. Coach-led classes, real community, proven results.`,
  url: siteUrl,
  telephone: `+1${site.phone.replace(/-/g, '')}`,
  email: site.email,
  foundingDate: String(site.established),
  image: `${siteUrl}/images/hero-group.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.5968,
    longitude: -96.2977,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '05:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '10:00',
    },
  ],
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.twitter,
    site.social.youtube,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Membership Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Free Trial Week',
        description: '7 days of unlimited CrossFit classes with no commitment',
        price: '0',
        priceCurrency: 'USD',
        url: `${site.pikeUrl}?utm_source=website&utm_medium=schema`,
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '61',
    reviewCount: '61',
  },
  award: Array.from({ length: site.awardsCount }, (_, i) => `${site.awardName} ${site.established + i}`),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-charcoal bg-white leading-relaxed overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
