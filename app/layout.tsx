import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
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

/* ─────────────────────────────────────────────
   STRUCTURED DATA — rendered inline (not afterInteractive)
   so Googlebot sees it on first crawl pass
   ───────────────────────────────────────────── */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  '@id': `${siteUrl}/#gym`,
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
  areaServed: [
    { '@type': 'City', name: 'College Station', sameAs: 'https://en.wikipedia.org/wiki/College_Station,_Texas' },
    { '@type': 'City', name: 'Bryan', sameAs: 'https://en.wikipedia.org/wiki/Bryan,_Texas' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '05:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:30', closes: '11:00' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '61',
    bestRating: '5',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CrossFit Aggieland Memberships & Programs',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Group Fitness Classes', description: 'Coach-led group fitness classes including HIIT, strength training, and functional movements. Every workout scaled to your fitness level.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'HIIT & CrossFit Classes', description: 'High-intensity interval training and CrossFit classes with Mayhem programming in College Station, TX.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Strength Training Program', description: 'Structured strength training with certified coaches. Build muscle, lose weight, and get stronger at any fitness level.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Personal Training', description: 'One-on-one personal trainer sessions with certified coaches in College Station and Bryan, TX.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Beginner Fitness Program', description: 'Beginner-friendly gym program in College Station. No experience needed — every workout is scaled to where you are.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'CrossFit Kids & Teens', description: 'Age-appropriate fitness classes for kids and teenagers in College Station, TX.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Ladies-Only Fitness Classes', description: 'Women-only group fitness classes in a supportive, coach-led environment.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Yoga for Athletes', description: 'Yoga classes for mobility, recovery, and flexibility. Open to all fitness levels.' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Free Trial Week', description: 'Free 7-day gym trial — unlimited fitness classes, no credit card, no contract. Best free trial in Bryan/College Station.' },
      },
    ],
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.twitter,
    site.social.youtube,
    'https://www.crossfit.com/affiliate/6146',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to be in shape to start CrossFit?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Most of our members started exactly where you are. Every workout is scaled to your fitness level. You show up willing and our coaches handle the rest.' },
    },
    {
      '@type': 'Question',
      name: "What if I can't do the movements?",
      acceptedAnswer: { '@type': 'Answer', text: 'Every movement has a scaled version. If you can\'t do a pull-up, we give you a modification that builds you toward one. Our coaches are trained to meet you where you are and progress you safely.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract at CrossFit Aggieland?',
      acceptedAnswer: { '@type': 'Answer', text: 'No long-term contracts required. We offer month-to-month memberships along with 3, 6, and 12 month options at lower rates. You can cancel anytime.' },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first CrossFit class?',
      acceptedAnswer: { '@type': 'Answer', text: 'Water, athletic shoes, and clothes you can move in. That\'s it. We provide everything else. Just show up 10 minutes early so we can meet you and walk you through the basics.' },
    },
    {
      '@type': 'Question',
      name: 'What does a typical CrossFit class look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every class is one hour: a warm-up, skill or strength work, the workout of the day (WOD), and a cool-down. Your coach leads the entire session, corrects your form, and keeps you on track.' },
    },
    {
      '@type': 'Question',
      name: 'How is CrossFit different from a regular gym?',
      acceptedAnswer: { '@type': 'Answer', text: 'You get a coach every single class. Not a personal trainer you pay extra for. A real coach who knows your name, watches your movement, and pushes you to be better than yesterday.' },
    },
    {
      '@type': 'Question',
      name: 'How much does CrossFit Aggieland cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Memberships start at $109/month for military, LEO, and teachers. Student and veteran rates start at $119/month. General memberships range from $129 to $189/month depending on term length. All memberships include unlimited classes, open gym, and a free first week.' },
    },
    {
      '@type': 'Question',
      name: 'What are the class times at CrossFit Aggieland?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer classes from 5:00 AM to 6:30 PM Monday through Friday, and Saturday mornings at 9:00 AM. Multiple time slots throughout the day fit any schedule.' },
    },
    {
      '@type': 'Question',
      name: 'Where is CrossFit Aggieland located?',
      acceptedAnswer: { '@type': 'Answer', text: 'CrossFit Aggieland is located at 3815 General Parkway, College Station, TX 77845 — just minutes from Texas A&M University.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer student discounts for Texas A&M students?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer discounted student and veteran rates starting at $119/month on a 12-month plan. We also have discounts for active military, law enforcement, and teachers.' },
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#org`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phone,
    contactType: 'customer service',
    email: site.email,
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.twitter,
    site.social.youtube,
  ],
}


/* ─────────────────────────────────────────────
   NEXT.JS METADATA — title, description, OG, Twitter, robots
   ───────────────────────────────────────────── */

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: `CrossFit Aggieland | Best Gym & Fitness Classes in College Station, TX | ${site.awardsCount}x Best of the Brazos`,
    description: `College Station's #1 gym — ${site.awardsCount}x ${site.awardName} winner. Group fitness classes, HIIT, strength training & personal training near Texas A&M. Beginner-friendly. Free trial week, no contract.`,
    keywords: [
          'CrossFit College Station',
          'CrossFit Aggieland',
          'gym College Station TX',
          'best gym College Station',
          'fitness classes College Station TX',
          'HIIT classes College Station',
          'strength training College Station TX',
          'personal trainer College Station TX',
          'group fitness College Station',
          'beginner gym College Station',
          'weight loss gym College Station',
          'gym near Texas A&M',
          'workout classes College Station TX',
          'gym membership College Station',
          'free trial gym College Station',
          'CrossFit Bryan College Station',
          'fitness studio Bryan TX',
          'gym Bryan TX',
          'personal training College Station TX',
          'best workout College Station',
        ],
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
          canonical: '/',
    },
    openGraph: {
          title: `${site.name} | Best Gym & Fitness Classes in College Station, TX`,
          description: `${site.awardsCount}x ${site.awardName} winner. Group fitness, HIIT, strength training & personal training near Texas A&M. Free trial week. No contract.`,
          url: siteUrl,
          siteName: site.name,
          locale: 'en_US',
          type: 'website',
          images: [
            {
              url: `${siteUrl}/images/hero-group.jpg`,
              width: 1200,
              height: 630,
              alt: `${site.name} — CrossFit gym community workout in College Station, TX`,
            },
          ],
    },
    twitter: {
          card: 'summary_large_image',
          site: '@CFAggieland',
          creator: '@CFAggieland',
          title: `${site.name} | Best Gym & Fitness Classes in College Station, TX`,
          description: `${site.awardsCount}x ${site.awardName} winner. Group fitness, HIIT & strength training near Texas A&M. Beginner-friendly. Free trial week.`,
          images: [`${siteUrl}/images/hero-group.jpg`],
    },
    other: {
      'geo.region': 'US-TX',
      'geo.placename': 'College Station',
      'geo.position': '30.5963;-96.2881',
      'ICBM': '30.5963, -96.2881',
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
                  {/* JSON-LD — rendered inline so Googlebot sees it on first crawl */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                  />
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                  />
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                  />
                  {children}
                  <Analytics />
                </body>
          </html>
        )
}
