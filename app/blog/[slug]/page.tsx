import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'
import { site } from '@/lib/data'

const siteUrl = 'https://www.crossfitaggieland.com'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: `${post.title} | CrossFit Aggieland Blog`,
      description: post.description,
      keywords: post.keywords,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `${siteUrl}/blog/${post.slug}`,
        siteName: site.name,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png` },
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="bg-white min-h-screen pt-24 pb-16">
        <article className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-mid-gray mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-maroon transition-colors">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/blog" className="hover:text-maroon transition-colors">
              Blog
            </a>
            <span className="mx-2">/</span>
            <span className="text-text-gray">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase text-charcoal tracking-wide mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="text-sm text-mid-gray">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              &middot; {post.readingTime} &middot; {post.author}
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-charcoal prose-a:text-maroon prose-a:no-underline hover:prose-a:underline prose-strong:text-charcoal">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-16 border-t border-gray-200 pt-10 text-center">
            <p className="font-display text-2xl uppercase text-charcoal tracking-wide mb-4">
              Ready to Start?
            </p>
            <p className="text-text-gray mb-6">
              Your first week at CrossFit Aggieland is completely free.
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

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <a
              href="/blog"
              className="text-sm text-mid-gray hover:text-maroon transition-colors"
            >
              &larr; Back to all posts
            </a>
          </div>
        </article>
      </main>
    </>
  )
}
