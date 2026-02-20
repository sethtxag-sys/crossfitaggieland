'use client'

import { useState } from 'react'
import Image from 'next/image'
import { site } from '@/lib/data'
import FadeIn from './FadeIn'

const INSTAGRAM_URL = site.social.instagram
const IMAGE_COUNT = 6

function InstagramIcon({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function ImageCell({ index }: { index: number }) {
  const [hasError, setHasError] = useState(false)
  const src = `/images/instagram/ig-${index}.jpg`

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square overflow-hidden rounded-lg group block"
    >
      {hasError ? (
        /* Placeholder when image doesn't exist yet */
        <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center">
          <InstagramIcon className="w-10 h-10 text-white/20" />
        </div>
      ) : (
        <Image
          src={src}
          alt={`CrossFit Aggieland gym photo ${index}`}
          fill
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setHasError(true)}
        />
      )}
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <InstagramIcon className="w-8 h-8 text-white drop-shadow-lg" />
      </div>
    </a>
  )
}

export default function InstagramGrid() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">
              Follow the Community
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide">
              See What&rsquo;s Happening at CFA
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
            {Array.from({ length: IMAGE_COUNT }, (_, i) => (
              <ImageCell key={i + 1} index={i + 1} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-sm tracking-[3px] uppercase text-white/60 border border-white/20 px-8 py-3.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/40 transition-all group"
            >
              <InstagramIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              Follow @crossfitaggieland
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
