'use client'

import { useState, useEffect } from 'react'
import { site } from '@/lib/data'
import { coaches } from '@/lib/data'

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=CrossFit+Aggieland+3815+General+Pkwy+College+Station+TX+77845'

function useVideoSrc() {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')

    const pick = (e: { matches: boolean }) =>
      setSrc(
        e.matches
          ? '/crossfit-aggieland-highlight.mp4'
          : '/crossfit-aggieland-highlight-portrait.mp4'
      )

    pick(mql)
    mql.addEventListener('change', pick)
    return () => mql.removeEventListener('change', pick)
  }, [])

  return src
}

export default function Hero() {
  const videoSrc = useVideoSrc()

  return (
    <section
      id="hero"
      className="relative h-[100svh] text-center bg-charcoal overflow-hidden"
    >
      {/* ── Background video — scaled up + shifted down to crop black bars off the top on desktop ── */}
      {videoSrc && (
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.3] -translate-y-[5%] object-bottom"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* ── Cinematic overlay — very light at top, strong at bottom for text legibility ── */}
      <div className="absolute inset-0 z-[1]" style={{
        background: 'linear-gradient(to bottom, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.10) 25%, rgba(26,26,26,0.35) 55%, rgba(26,26,26,0.55) 80%, rgba(26,26,26,0.65) 100%)'
      }} />

      {/* ── Content — absolute fill, flex centers between nav and stats bar ── */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center pt-[72px] pb-[110px] sm:pb-[125px] px-5 sm:px-8">
        <div className="max-w-[860px] w-full flex flex-col items-center">

          {/* H1 */}
          <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] uppercase text-white mb-3 sm:mb-4 tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            CrossFit in<br />College Station.
          </h1>

          {/* Tagline */}
          <p className="font-display text-[clamp(0.8rem,2.2vw,1.3rem)] text-white/75 tracking-[3px] sm:tracking-[5px] uppercase mb-4 sm:mb-5">
            The Hour That Changes Everything.
          </p>

          {/* Value prop */}
          <p className="text-[clamp(0.85rem,1.6vw,1.05rem)] text-white/90 max-w-[520px] mx-auto mb-5 sm:mb-6 leading-relaxed font-medium drop-shadow-md">
            Voted Best of the Brazos {site.awardsCount} years running. Elite coaching, a real community,
            and your first week is free.
          </p>

          {/* Urgency */}
          <div className="font-display text-[clamp(0.8rem,1.8vw,1.1rem)] text-white tracking-[3px] sm:tracking-[5px] uppercase mb-5 sm:mb-6">
            7 Days. Unlimited Classes. Zero Cost.
          </div>

          {/* Google reviews */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-7 px-5 sm:px-6 py-2 sm:py-2.5 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/15 transition-all group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-display text-sm sm:text-lg tracking-wider text-white font-bold">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-[0.65rem] sm:text-sm text-white/40 group-hover:text-white/70 transition-colors">61 reviews</span>
          </a>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm sm:text-base tracking-[3px] uppercase bg-white text-charcoal px-8 sm:px-12 py-3.5 sm:py-4 hover:bg-white/90 transition-all w-full sm:w-auto text-center shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            >
              Start Your Free Week
            </a>
            <a
              href="#start"
              className="group/arrow inline-flex items-center gap-2 font-display text-xs sm:text-sm tracking-[2px] uppercase text-white/50 hover:text-white transition-colors py-2"
            >
              See How We Start Beginners
              <svg
                className="w-4 h-4 transition-transform group-hover/arrow:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats bar — pinned to bottom, gradient fades into video above ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        {/* Gradient bleed — extends upward to smooth the transition from video to stats */}
        <div className="h-16 sm:h-20" style={{
          background: 'linear-gradient(to bottom, rgba(26,26,26,0) 0%, rgba(26,26,26,0.80) 100%)'
        }} />
        <div className="bg-charcoal/80 backdrop-blur-lg border-t border-white/[0.06] py-5 sm:py-6">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
          <div className="flex justify-center gap-5 sm:gap-16">
            {[
              { number: `${site.awardsCount}x`, label: site.awardName },
              { number: String(site.established), label: 'Established' },
              { number: String(coaches.length), label: 'Coaches' },
              { number: '5 AM', label: 'First Class' },
            ].map((stat) => (
              <div key={stat.label} className="text-center min-w-0">
                <div className="font-display text-xl sm:text-3xl text-white tracking-wider">{stat.number}</div>
                <div className="text-[0.5rem] sm:text-[0.7rem] text-white/50 tracking-[1px] sm:tracking-[2px] uppercase mt-1 truncate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
