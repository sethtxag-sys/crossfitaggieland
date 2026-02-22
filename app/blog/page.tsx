import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import { site } from '@/lib/data'

const siteUrl = 'https://www.crossfitaggieland.com'

export const metadata: Metadata = {
  title: 'Blog | CrossFit Aggieland | Fitness Tips & College Station News',
  description:
    'Fitness tips, CrossFit guidance, and College Station gym news from CrossFit Aggieland. Training advice for beginners and experienced athletes.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | CrossFit Aggieland',
    description: 'Fitness tips, CrossFit guidance, and College Station gym news.',
    url: `${siteUrl}/blog`,
    siteName: site.name,
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
  ],
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white min-h-screen pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="font-display text-4xl sm:text-5xl uppercase text-charcoal tracking-wide mb-4">
            Blog
          </h1>
          <p className="text-text-gray text-lg mb-12">
            Fitness tips, training advice, and news from CrossFit Aggieland in College Station, TX.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block border border-gray-200 rounded-lg p-6 hover:border-maroon/40 hover:shadow-md transition-all group"
              >
                <h2 className="font-display text-xl sm:text-2xl uppercase text-charcoal tracking-wide group-hover:text-maroon transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-text-gray text-sm mb-3 leading-relaxed">
                  {post.description}
                </p>
                <div className="text-xs text-mid-gray">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  &middot; {post.readingTime}
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center border-t border-gray-200 pt-12">
            <p className="font-display text-2xl uppercase text-charcoal tracking-wide mb-4">
              Ready to Try CrossFit?
            </p>
            <p className="text-text-gray mb-6">
              Your first week at CrossFit Aggieland is free. No contract, no commitment.
            </p>
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm tracking-[3px] uppercase bg-maroon text-white font-bold px-8 py-3 hover:bg-maroon-dark transition-colors"
            >
              Start Your Free Week
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
