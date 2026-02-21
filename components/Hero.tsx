'use client'

import { useState, useEffect, useRef } from 'react'
import { site } from '@/lib/data'
import { coaches } from '@/lib/data'
import FreeWeekDate from './FreeWeekDate'

const googleReviewsUrl = site.googleReviewsUrl

const DESKTOP_VIDEO = '/crossfit-aggieland-highlight.mp4'
const PORTRAIT_VIDEO = '/crossfit-aggieland-highlight-portrait.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPortrait, setIsPortrait] = useState(false)

  // Swap source based on viewport — never unmount the <video> element
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')

    const update = (e: { matches: boolean }) => {
      setIsPortrait(!e.matches)
      // When src changes, reload and play
      const v = videoRef.current
      if (v) {
        v.load()
        v.play().catch(() => {})
      }
    }

    // Set initial without triggering load (the JSX default handles first paint)
    setIsPortrait(!mql.matches)

    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  // Belt-and-suspenders: force play on mount + after any load
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [isPortrait])

  return (
    <section
      id="hero"
      className="relative h-[100svh] text-center bg-charcoal overflow-hidden"
    >
      {/* ── Background video — always in DOM, src swapped via state ── */}
      <video
        ref={videoRef}
        src={isPortrait ? PORTRAIT_VIDEO : DESKTOP_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.3] -translate-y-[5%] object-bottom"
        onLoadedData={(e) => {
          const v = e.currentTarget
          v.muted = true
          v.play().catch(() => {})
        }}
      />

      {/* ── Cinematic overlay — heavy on mobile, lighter on desktop ── */}
      <div className="absolute inset-0 z-[1] sm:hidden" style={{
        background: 'linear-gradient(to bottom, rgba(26,26,26,0.40) 0%, rgba(26,26,26,0.55) 30%, rgba(26,26,26,0.65) 55%, rgba(26,26,26,0.75) 80%, rgba(26,26,26,0.82) 100%)'
      }} />
      <div className="absolute inset-0 z-[1] hidden sm:block" style={{
        background: 'linear-gradient(to bottom, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.10) 25%, rgba(26,26,26,0.35) 55%, rgba(26,26,26,0.55) 80%, rgba(26,26,26,0.65) 100%)'
      }} />

      {/* ── Content — positioned between nav (top) and stats bar (bottom) ── */}
      {/* Mobile: top-aligned with generous pt to clear nav, bottom pb clears stats */}
      {/* Desktop: centered with optical lift via negative margin */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center pt-[68px] pb-[70px] sm:pt-[72px] sm:pb-[85px] px-6 sm:px-8">
        <div className="max-w-[860px] w-full flex flex-col items-center sm:-mt-[3vh]">

          {/* ── Group 1: Identity ── */}
          <h1 className="font-display text-[clamp(2.65rem,8vw,5.25rem)] leading-[0.92] uppercase text-white mb-1 sm:mb-1.5 tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            CrossFit in<br />College Station.
          </h1>
          <p className="font-display text-[clamp(0.7rem,2vw,1.15rem)] text-white/85 tracking-[3px] sm:tracking-[4px] uppercase mb-4 sm:mb-5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            The Hour That Changes Everything.
          </p>

          {/* ── Group 2: Pitch ── */}
          <p className="text-[clamp(0.84rem,1.5vw,1rem)] text-white/80 sm:text-white/90 max-w-[360px] sm:max-w-[530px] mx-auto mb-2 sm:mb-3 leading-relaxed font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Voted Best of the Brazos {site.awardsCount} years running. Elite coaching, a real community,
            and your first week is free.
          </p>
          <div className="font-display text-[clamp(0.75rem,1.7vw,1.05rem)] text-white tracking-[2px] sm:tracking-[4px] uppercase mb-1 sm:mb-1.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            7 Days. Unlimited Classes. Zero Cost.
          </div>
          <div className="mb-4 sm:mb-5">
            <FreeWeekDate variant="hero" />
          </div>

          {/* ── Group 3: Social proof + Action ── */}
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Rated ${site.googleRating} out of 5 stars from ${site.googleReviewCount} Google reviews`}
            className="inline-flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-3.5 px-4 sm:px-5 py-1.5 sm:py-2 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/15 transition-all group"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span className="font-display text-xs sm:text-sm tracking-wider text-white font-bold">{site.googleRating}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-yellow-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
            <span className="text-[0.6rem] sm:text-xs text-white/40 group-hover:text-white/70 transition-colors">{site.googleReviewCount} reviews</span>
          </a>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[0.7rem] sm:text-xs tracking-[3px] uppercase bg-white text-charcoal px-6 sm:px-8 py-2.5 sm:py-2.5 hover:bg-white/90 transition-all text-center shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            >
              Start Your Free Week
            </a>
            <a
              href="#start"
              className="group/arrow inline-flex items-center gap-1.5 font-display text-[0.6rem] sm:text-xs tracking-[2px] uppercase text-white/50 hover:text-white transition-colors py-1"
            >
              See How We Start Beginners
              <svg
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/arrow:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
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
        <div className="h-10 sm:h-14" style={{
          background: 'linear-gradient(to bottom, rgba(26,26,26,0) 0%, rgba(26,26,26,0.80) 100%)'
        }} />
        <div className="bg-charcoal/80 backdrop-blur-lg border-t border-white/[0.06] py-2.5 sm:py-4">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-center gap-7 sm:gap-14">
            {[
              { number: `${site.awardsCount}x`, label: site.awardName, mobileLabel: 'Awards' },
              { number: String(site.established), label: 'Established', mobileLabel: 'Since' },
              { number: String(coaches.length), label: 'Coaches', mobileLabel: 'Coaches' },
              { number: '5 AM', label: 'First Class', mobileLabel: 'First Class' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-[0.95rem] sm:text-[1.35rem] text-white tracking-wider">{stat.number}</div>
                <div className="text-[0.45rem] sm:text-[0.6rem] text-white/35 tracking-[1px] sm:tracking-[2px] uppercase mt-0.5">
                  <span className="sm:hidden">{stat.mobileLabel}</span>
                  <span className="hidden sm:inline">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
