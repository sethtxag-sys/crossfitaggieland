import type { Metadata } from 'next'
import Image from 'next/image'
import { site } from '@/lib/data'

const siteUrl = 'https://www.crossfitaggieland.com'

export const metadata: Metadata = {
  title: 'HYROX Training College Station TX | CrossFit Aggieland',
  description: `Train for HYROX at CrossFit Aggieland in College Station, TX. All 8 stations: SkiErg, sleds, rowing, wall balls, carries. Free trial week. Near Texas A&M.`,
  keywords: [
    'Hyrox training College Station',
    'Hyrox gym College Station TX',
    'Hyrox near me College Station',
    'Hyrox training near Texas A&M',
    'Hyrox prep College Station',
    'Hyrox race training Texas',
    'Hyrox College Station TX',
    'Hyrox workout College Station',
    'train for Hyrox College Station',
    'Hyrox gym near me',
    'Hyrox training Bryan TX',
    'Hyrox CrossFit College Station',
    'functional fitness race training College Station',
    'sled push gym College Station',
    'SkiErg gym College Station TX',
    'rowing workout College Station',
    'wall balls gym College Station',
    'fitness race training College Station TX',
  ],
  alternates: { canonical: '/hyrox-college-station' },
  openGraph: {
    title: 'HYROX Training in College Station, TX | CrossFit Aggieland',
    description: `Train for all 8 HYROX stations in College Station, TX. SkiErg, sleds, rowers, wall balls, carries. Free trial week.`,
    url: `${siteUrl}/hyrox-college-station`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/rower-group.jpg`,
        width: 1200,
        height: 630,
        alt: 'Athletes training for HYROX at CrossFit Aggieland in College Station, TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CFAggieland',
    creator: '@CFAggieland',
    title: 'HYROX Training College Station TX | CrossFit Aggieland',
    description: `Train for HYROX at College Station's top-rated gym. All 8 stations. Free trial week.`,
    images: [`${siteUrl}/images/rower-group.jpg`],
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
      name: 'HYROX Training College Station',
      item: `${siteUrl}/hyrox-college-station`,
    },
  ],
}

const hyroxServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  name: site.name,
  description: `HYROX training gym in College Station, TX. All 8 HYROX race stations trained in coach-led classes. SkiErg, sled push, sled pull, rowing, farmers carry, sandbag lunges, burpee broad jumps, and wall balls.`,
  url: `${siteUrl}/hyrox-college-station`,
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
  areaServed: [
    { '@type': 'City', name: 'College Station', sameAs: 'https://en.wikipedia.org/wiki/College_Station,_Texas' },
    { '@type': 'City', name: 'Bryan', sameAs: 'https://en.wikipedia.org/wiki/Bryan,_Texas' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.googleRating,
    reviewCount: site.googleReviewCount,
    bestRating: 5,
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'HYROX Race Preparation Training',
      description: 'Functional fitness training covering all 8 HYROX race stations. Coach-led classes scaled to all fitness levels.',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
      url: `${siteUrl}/hyrox-college-station`,
    },
  ],
}

const stations = [
  { name: 'SkiErg', detail: '1,000 m', description: 'Full-body pulling power. Our SkiErgs are used in classes weekly.' },
  { name: 'Sled Push', detail: '50 m', description: 'Heavy leg drive and mental grit. Sled pushes are programmed regularly.' },
  { name: 'Sled Pull', detail: '50 m', description: 'Grip strength and posterior chain. Rope pulls and sled drags are in our rotation.' },
  { name: 'Burpee Broad Jumps', detail: '80 m', description: 'Explosive power under fatigue. Burpees show up in our classes constantly.' },
  { name: 'Rowing', detail: '1,000 m', description: 'Pacing and endurance. Concept2 rowers in every class, coached for efficiency.' },
  { name: 'Farmers Carry', detail: '200 m', description: 'Grip, core, and mental toughness. Heavy carries are built into our programming.' },
  { name: 'Sandbag Lunges', detail: '100 m', description: 'Leg endurance under load. Weighted lunges are a constant in our workouts.' },
  { name: 'Wall Balls', detail: '75–100 reps', description: 'The classic finisher. Wall balls are a CrossFit standard. You will be ready.' },
]

export default function HyroxCollegeStationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hyroxServiceSchema) }}
      />

      <main className="bg-white min-h-screen pt-24 pb-16">
        <div className="max-w-[800px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-mid-gray mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-maroon transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-text-gray">HYROX Training College Station</span>
          </nav>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-charcoal tracking-wide mb-6 leading-tight">
            HYROX Training in College Station, TX
          </h1>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-charcoal prose-a:text-maroon prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
            <p>
              <strong>HYROX</strong> is the fastest-growing fitness race in the world. Eight 1 km runs, each followed by a functional workout station. It tests endurance, strength, and work capacity in a single race. Whether you are a first-timer or chasing a PR, you need a gym that trains all 8 stations.
            </p>

            <p>
              If you are looking for HYROX training in College Station, TX, you are in the right place. CrossFit Aggieland has every piece of equipment for all 8 stations, coach-led classes that build race-day fitness, and a community that will push you to the finish line.
            </p>

            {/* Hero image */}
            <div className="not-prose my-8 rounded-xl overflow-hidden">
              <Image
                src="/images/rower-group.jpg"
                alt="Athletes rowing at CrossFit Aggieland, training movements used in HYROX races"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>

            <h2>What HYROX Demands and How We Train It</h2>
            <p>
              HYROX tests three things at once: aerobic endurance, functional strength, and your ability to keep working when you are already tired. Most gyms train one of those. Our classes train all three, every session.
            </p>
            <p>
              The 8 HYROX stations are rowing, sled pushes, sled pulls, wall balls, carries, lunges, burpees, and SkiErg. These are not exotic movements. They are the foundation of functional fitness, and they show up in our programming constantly.
            </p>
            <p>
              The difference between finishing strong and grinding through the last two stations comes down to one thing: sustaining output when you are already tired. That is exactly what our coach-led classes are designed to build.
            </p>

            <h2>All 8 HYROX Stations, Trained at CrossFit Aggieland</h2>
          </div>

          {/* Stations grid */}
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {stations.map((s, i) => (
              <div key={s.name} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-sm tracking-[2px] uppercase text-maroon">Station {i + 1}</span>
                </div>
                <h3 className="font-display text-lg uppercase tracking-wide text-charcoal mb-1">{s.name}</h3>
                <div className="text-sm text-mid-gray font-medium mb-2">{s.detail}</div>
                <p className="text-text-gray text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-charcoal prose-a:text-maroon prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
            <h2>Equipment for HYROX Training</h2>
            <p>
              CrossFit Aggieland has every piece of equipment you need to prepare for a HYROX race:
            </p>
            <ul>
              <li><strong>SkiErgs</strong> for station 1 pulling power</li>
              <li><strong>Heavy sleds</strong> for push and pull stations</li>
              <li><strong>Concept2 rowers</strong> for the 1,000 m row</li>
              <li><strong>Wall balls</strong> (14 lb and 20 lb) for the final station</li>
              <li><strong>Sandbags</strong> for lunge training</li>
              <li><strong>Farmers carry handles</strong> and heavy dumbbells for loaded carries</li>
              <li><strong>Open floor space</strong> for burpee broad jumps and running drills</li>
            </ul>

            <h2>HYROX Race Prep Timeline</h2>
            <p>
              Most athletes can be race-ready in <strong>8 to 12 weeks</strong> of consistent training. If you are already doing CrossFit, you are closer than you think. The average HYROX finish time is about 90 minutes, comparable to a fast half marathon or sprint triathlon.
            </p>
            <p>
              HYROX races are held in major cities across Texas and the US. Houston, Dallas, and Austin are all within driving distance of College Station. Check <a href="https://hyrox.com/find-my-race/" target="_blank" rel="noopener noreferrer">hyrox.com</a> for upcoming race dates.
            </p>

            <h2>Who Is HYROX For?</h2>
            <p>
              Everyone. HYROX offers divisions for all levels: Open (standard), Pro (heavier weights), Doubles (with a partner), and Relay (team of 4). You do not need to be an elite athlete. You need to be willing to train.
            </p>
            <p>
              Whether you are a Texas A&amp;M student looking for your first race, a parent who wants a fitness goal beyond the gym, or a seasoned CrossFitter who wants a new challenge, HYROX is built for you.
            </p>

            <h2>Frequently Asked Questions About HYROX Training</h2>

            <h3>Can I train for HYROX at CrossFit Aggieland?</h3>
            <p>
              Yes. Every CrossFit class trains the movements used in all 8 HYROX stations. Our programming builds the endurance, strength, and work capacity that HYROX demands.
            </p>

            <h3>Do I need to be in shape to start?</h3>
            <p>
              No. Every workout is scaled to your fitness level. Whether you are training for your first HYROX race or your fifth, our coaches meet you where you are.
            </p>

            <h3>What equipment does CrossFit Aggieland have for HYROX?</h3>
            <p>
              SkiErgs, Concept2 rowers, heavy sleds, wall balls, sandbags, farmers carry handles, and all the functional fitness equipment needed to train every HYROX station.
            </p>

            <h3>Where is the nearest HYROX race to College Station?</h3>
            <p>
              HYROX races are held in Houston, Dallas, Austin, and other major US cities. All are within driving distance of College Station. Visit <a href="https://hyrox.com/find-my-race/" target="_blank" rel="noopener noreferrer">hyrox.com</a> for the current schedule.
            </p>

            <h3>How long does it take to train for HYROX?</h3>
            <p>
              Most athletes are race-ready in 8 to 12 weeks. If you are already doing CrossFit, you likely need less time. The average finish time is about 90 minutes.
            </p>

            <h3>Is CrossFit good training for HYROX?</h3>
            <p>
              The overlap is significant. Rowing, sled work, wall balls, carries, lunges, and burpees are all part of CrossFit programming. But the real advantage is metabolic conditioning. CrossFit builds the work capacity under fatigue that separates strong HYROX finishes from grinding through the last stations.
            </p>

            <h2>Start Training for HYROX Today</h2>
            <p>
              Your first week at CrossFit Aggieland is free. No credit card. No contract. Come in, try a class, and see why our members trust us with their fitness goals.
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
              <a href="/#hyrox" className="text-maroon hover:underline">HYROX Training Overview</a>
              <a href="/#coaches" className="text-maroon hover:underline">Meet Our Coaches</a>
              <a href="/#schedule" className="text-maroon hover:underline">Class Schedule</a>
              <a href="/#pricing" className="text-maroon hover:underline">Pricing &amp; Membership</a>
              <a href="/crossfit-college-station" className="text-maroon hover:underline">CrossFit Gym College Station</a>
              <a href="/blog" className="text-maroon hover:underline">Read Our Blog</a>
              <a href="/#faq" className="text-maroon hover:underline">Frequently Asked Questions</a>
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
        </div>
      </main>
    </>
  )
}
