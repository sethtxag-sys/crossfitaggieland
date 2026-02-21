'use client'

import { useState, useEffect, useRef } from 'react'
import { site } from '@/lib/data'

const DESKTOP_VIDEO = '/crossfit-aggieland-highlight.mp4'
const PORTRAIT_VIDEO = '/crossfit-aggieland-highlight-portrait.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPortrait, setIsPortrait] = useState(false)
  const [chevronVisible, setChevronVisible] = useState(true)

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

  // Fade chevron out on scroll, back in at top
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setChevronVisible(window.scrollY <= 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] text-center bg-charcoal overflow-hidden flex flex-col"
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

      {/* ── Cinematic overlay — darkened + vignette for edge control ── */}
      <div className="absolute inset-0 z-[1] sm:hidden" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.60) 30%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.85) 100%)'
      }} />
      <div className="absolute inset-0 z-[1] hidden sm:block" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.70) 75%, rgba(0,0,0,0.80) 100%)'
      }} />
      {/* Vignette — darkens edges/corners on desktop */}
      <div className="absolute inset-0 z-[1] hidden sm:block" style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.30) 100%)'
      }} />

      {/* ── Main content area — flex-grows to fill space between nav and stats bar ── */}
      <div className="relative z-[2] flex-1 flex flex-col items-center justify-center px-6 sm:px-8 pt-[60px] pb-[24px] sm:pt-[68px] sm:pb-[28px]">
        <div className="max-w-[860px] w-full flex flex-col items-center mt-[1vh] sm:mt-[2vh]">

          {/* ── Eyebrow ── */}
          <h1 className="font-display text-[clamp(0.7rem,2vw,1.15rem)] text-white/90 tracking-[3px] sm:tracking-[4px] uppercase mb-3 sm:mb-3" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7), 0 2px 16px rgba(0,0,0,0.4)' }}>
            {site.awardsCount}x Best of the Brazos
          </h1>

          {/* ── Headline ── */}
          <p className="font-display text-[clamp(2.25rem,7vw,5.25rem)] leading-[0.92] uppercase text-white mb-6 sm:mb-5 tracking-wide max-w-[340px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-none" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 24px rgba(0,0,0,0.3)' }}>
            College Station&rsquo;s <span className="whitespace-nowrap">Top-Rated</span> Gym. {site.awardsCount} Years Running.
          </p>

          {/* ── Body ── */}
          <p className="text-[clamp(0.84rem,1.5vw,1rem)] text-white/85 sm:text-white/90 max-w-[360px] sm:max-w-[530px] lg:max-w-none mx-auto mb-7 sm:mb-7 leading-relaxed font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
            Elite coaching, workouts scaled to you, and a real community. Your first week is free.
          </p>

          {/* ── CTA ── */}
          <a
            href={site.pikeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[0.7rem] sm:text-xs tracking-[3px] uppercase bg-white text-maroon font-bold px-6 sm:px-8 py-2.5 sm:py-2.5 rounded-full hover:bg-maroon hover:text-white transition-all duration-200 ease-out text-center shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          >
            Start Your Free Week
          </a>
        </div>
      </div>

      {/* ── Scroll indicator — sits between content and stats bar ── */}
      <div
        className={`relative z-[2] flex justify-center pb-5 sm:pb-6 transition-opacity duration-300 ${
          chevronVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white/80 sm:text-white/90 animate-[hero-bounce_2s_ease-in-out_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* ── Stats bar — pinned to bottom of hero, gradient fades into video above ── */}
      <div className="relative z-[3]">
        {/* Gradient bleed — extends upward to smooth the transition from video to stats */}
        <div className="h-10 sm:h-14" style={{
          background: 'linear-gradient(to bottom, rgba(26,26,26,0) 0%, rgba(26,26,26,0.80) 100%)'
        }} />
        <div className="bg-charcoal/80 backdrop-blur-lg border-t border-white/[0.06] py-2.5 sm:py-4">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-center gap-5 sm:gap-14">
            {[
              { number: `${site.awardsCount}x`, label: 'Best of the Brazos' },
              { number: '40+', label: 'Classes per Week' },
              { number: 'FREE', label: 'First Week' },
              { number: '5 AM', label: 'Earliest Class' },
            ].map((stat) => (
              <div key={stat.label} className="text-center min-w-0">
                <div className="font-display text-[0.95rem] sm:text-[1.35rem] text-white tracking-wider">{stat.number}</div>
                <div className="text-[0.38rem] sm:text-[0.6rem] text-white/90 font-medium tracking-[0.5px] sm:tracking-[2px] uppercase mt-0.5 whitespace-nowrap">
                  {stat.label}
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
