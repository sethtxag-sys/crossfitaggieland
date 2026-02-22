import type { Metadata } from 'next'
import { site } from '@/lib/data'

const siteUrl = 'https://www.crossfitaggieland.com'

export const metadata: Metadata = {
  title: 'CrossFit Gym in College Station, TX | CrossFit Aggieland',
  description: `CrossFit Aggieland is College Station's ${site.awardsCount}x Best of the Brazos CrossFit gym at ${site.address.street}. Free trial week, classes from 5 AM. Near Texas A&M.`,
  keywords: [
    'crossfit college station',
    'crossfit gym college station tx',
    'gym near texas a&m',
    'crossfit near me college station',
    'best gym college station',
    'fitness classes college station tx',
  ],
  alternates: { canonical: '/crossfit-college-station' },
  openGraph: {
    title: 'CrossFit Gym in College Station, TX | CrossFit Aggieland',
    description: `${site.awardsCount}x Best of the Brazos. CrossFit gym at ${site.address.street}, College Station. Free trial week.`,
    url: `${siteUrl}/crossfit-college-station`,
    siteName: site.name,
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'CrossFit College Station',
      item: `${siteUrl}/crossfit-college-station`,
    },
  ],
}

const locationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: site.name,
  description: `College Station's ${site.awardsCount}x Best of the Brazos CrossFit gym. Elite coaching, 40+ classes/week, free trial.`,
  url: `${siteUrl}/crossfit-college-station`,
  telephone: site.phone,
  email: site.email,
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
    latitude: 30.5759,
    longitude: -96.3209,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(site.googleRating),
    reviewCount: String(site.googleReviewCount),
    bestRating: '5',
  },
}

export default function CollegeStationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <main className="bg-white min-h-screen pt-24 pb-16">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-mid-gray mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-maroon transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-text-gray">CrossFit College Station</span>
          </nav>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-charcoal tracking-wide mb-6 leading-tight">
            CrossFit Gym in College Station, TX
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-charcoal prose-a:text-maroon prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
            <p>
              College Station deserves a CrossFit gym that matches the ambition and work
              ethic of Aggieland. <strong>CrossFit Aggieland</strong> is exactly
              that&mdash;a {site.awardsCount}-time Best of the Brazos winner that&rsquo;s been
              lifting up the community since {site.established}.
            </p>
            <p>
              Whether you&rsquo;re a Texas A&amp;M student, faculty member, or part of
              the growing Brazos Valley community, we&rsquo;ve got a place for you.
            </p>

            <h2>Visit Us in College Station</h2>
            <p>
              <strong>{site.name}</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${site.phone.replace(/-/g, '')}`}>{site.phone}</a>
            </p>
            <p>
              We&rsquo;re located in central College Station, minutes from the Texas
              A&amp;M campus and positioned right in the heart of the Brazos Valley.
            </p>

            {/* Google Maps embed */}
            <div className="not-prose my-8 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${site.googlePlaceId}`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrossFit Aggieland location map"
              />
            </div>

            <h3>The Community We Serve</h3>
            <ul>
              <li>College Station proper &mdash; from Wellborn Road to south side neighborhoods</li>
              <li>Bryan &mdash; 10&ndash;15 minutes away</li>
              <li>Texas A&amp;M students, staff, and faculty</li>
              <li>North Gate District residents</li>
              <li>Wellborn Road corridor</li>
            </ul>

            <h2>Our CrossFit Gym</h2>
            <p>
              <strong>{site.awardsCount} Times Best of the Brazos Winner (Since {site.established})</strong>
              <br />
              Real community recognition. The Brazos Valley has voted for us year after year.
            </p>
            <p>
              <strong>Owned and Operated by Seth &amp; Paige McKinney</strong>
              <br />
              Built with integrity, consistency, and genuine care for every member.
            </p>
            <p>
              <strong>Eight Experienced Coaches</strong>
              <br />
              Personalized scaling and cueing in every session, whether you&rsquo;re on
              day one or year five.
            </p>
            <p>
              <strong>Mayhem Athlete Programming</strong>
              <br />
              The same system trusted by elite CrossFit competitors and everyday athletes.
            </p>

            <h2>Class Schedule</h2>
            <p>
              <strong>Monday &ndash; Thursday:</strong> 5:00 AM &ndash; 7:30 PM
              <br />
              <strong>Friday:</strong> 5:00 AM &ndash; 6:30 PM
              <br />
              <strong>Saturday:</strong> 9:00 AM
            </p>
            <p>
              Whether you&rsquo;re an early riser or prefer evening sessions, we&rsquo;ve
              got classes that fit. See the{' '}
              <a href="/#schedule">full schedule</a>.
            </p>

            <h2>Start Your First Week Free</h2>
            <p>
              No commitment. No contract. No pressure. Come in, try a class, meet our
              coaches.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm tracking-[3px] uppercase bg-maroon text-white font-bold px-8 py-3 hover:bg-maroon-dark transition-colors"
            >
              Start Your Free Week
            </a>
          </div>

          {/* Internal links */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <h2 className="font-display text-xl uppercase text-charcoal tracking-wide mb-6">
              Learn More
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="/#coaches" className="text-maroon hover:underline">Meet Our Coaches</a>
              <a href="/#pricing" className="text-maroon hover:underline">Pricing &amp; Membership</a>
              <a href="/#faq" className="text-maroon hover:underline">Frequently Asked Questions</a>
              <a href="/#contact" className="text-maroon hover:underline">Contact Us</a>
              <a href="/blog" className="text-maroon hover:underline">Read Our Blog</a>
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon hover:underline"
              >
                Google Reviews ({site.googleRating} stars)
              </a>
            </div>
          </div>

          {/* Directions link */}
          <div className="mt-10 text-center">
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mid-gray hover:text-maroon transition-colors"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
