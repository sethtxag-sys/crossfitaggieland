import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { site } from '@/lib/data'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})


const siteUrl = 'https://www.crossfitaggieland.com'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: site.name,
  description: site.description,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${siteUrl}/images/hero-group.jpg`,
  logo: `${siteUrl}/images/logo.png`,
  foundingDate: String(site.established),
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
    latitude: 30.5963,
    longitude: -96.2881,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '05:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:30', closes: '11:00' },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '61',
    bestRating: '5',
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.twitter,
    site.social.youtube,
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to be in shape to start?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Most of our members started exactly where you are. Every workout is scaled to your fitness level. You show up willing and our coaches handle the rest.' },
    },
    {
      '@type': 'Question',
      name: "What if I can't do the movements?",
      acceptedAnswer: { '@type': 'Answer', text: 'Every movement has a scaled version. If you can\'t do a pull-up, we give you a modification that builds you toward one. Our coaches are trained to meet you where you are and progress you safely.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract?',
      acceptedAnswer: { '@type': 'Answer', text: 'No long-term contracts required. We offer month-to-month memberships along with 3, 6, and 12 month options at lower rates. You can cancel anytime.' },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first class?',
      acceptedAnswer: { '@type': 'Answer', text: 'Water, athletic shoes, and clothes you can move in. That\'s it. We provide everything else. Just show up 10 minutes early so we can meet you and walk you through the basics.' },
    },
    {
      '@type': 'Question',
      name: 'What does a typical class look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every class is one hour: a warm-up, skill or strength work, the workout of the day (WOD), and a cool-down. Your coach leads the entire session, corrects your form, and keeps you on track.' },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a regular gym?',
      acceptedAnswer: { '@type': 'Answer', text: 'You get a coach every single class. Not a personal trainer you pay extra for. A real coach who knows your name, watches your movement, and pushes you to be better than yesterday.' },
    },
  ],
}


export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: `${site.name} | College Station TX | ${site.awardsCount}x ${site.awardName}`,
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
          title: `${site.name} | Free Week. No Strings. No Excuses.`,
          description: `${site.awardsCount}x ${site.awardName} winner. Coach-led CrossFit classes from 5 AM to 6:30 PM. First week free. No contract.`,
          url: siteUrl,
          siteName: site.name,
          locale: 'en_US',
          type: 'website',
          images: [
            {
              url: `${siteUrl}/images/hero-group.jpg`,
              width: 1200,
              height: 630,
              alt: `${site.name} community workout in College Station, TX`,
            },
          ],
    },
    twitter: {
          card: 'summary_large_image',
          title: `${site.name} | Free Week. No Strings. No Excuses.`,
          description: `${site.awardsCount}x ${site.awardName} winner. Coach-led CrossFit classes from 5 AM to 6:30 PM. First week free. No contract.`,
          images: [`${siteUrl}/images/hero-group.jpg`],
    },
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
          <html lang="en">
                <body className={`${bebasNeue.variable} ${montserrat.variable} antialiased`}>
                  <Script
                    id="local-business-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                  />
                  <Script
                    id="faq-schema"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                  />
                  {children}
                  <Analytics />
                </body>
          </html>
        )
}
