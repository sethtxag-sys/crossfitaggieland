'use client'

import { useState, useEffect, useRef } from 'react'
import { site } from '@/lib/data'
import { coaches } from '@/lib/data'

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

      {/* ── Content — centered between nav and stats bar ── */}
      {/* pb must match stats bar total height (gradient + bar) so content centers in the live zone */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center pt-[48px] pb-[90px] sm:pt-[52px] sm:pb-[120px] px-6 sm:px-8">
        <div className="max-w-[860px] w-full flex flex-col items-center">

          {/* ── Group 1: Identity ── */}
          <h1 className="font-display text-[clamp(0.7rem,2vw,1.15rem)] text-white/85 tracking-[3px] sm:tracking-[4px] uppercase mb-2 sm:mb-3" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            CrossFit in College Station.
          </h1>
          <p className="font-display text-[clamp(2.65rem,8vw,5.25rem)] leading-[0.92] uppercase text-white mb-5 sm:mb-6 tracking-wide drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            The Hour That<br />Changes Everything.
          </p>

          {/* ── Group 2: Pitch ── */}
          <p className="text-[clamp(0.84rem,1.5vw,1rem)] text-white/85 sm:text-white/90 max-w-[360px] sm:max-w-[530px] mx-auto mb-2 sm:mb-3 leading-relaxed font-medium" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            Voted Best of the Brazos {site.awardsCount} years running. Elite coaching, a real community,
            and your first week is free.
          </p>
          <div className="font-display text-[clamp(0.75rem,1.7vw,1.05rem)] text-white tracking-[2px] sm:tracking-[4px] uppercase mb-5 sm:mb-6" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            7 Days. Unlimited Classes. Zero Cost.
          </div>

          {/* ── CTA ── */}
          <a
            href={site.pikeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[0.7rem] sm:text-xs tracking-[3px] uppercase bg-white text-charcoal px-6 sm:px-8 py-2.5 sm:py-2.5 rounded-full hover:bg-white/90 transition-all text-center shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          >
            Start Your Free Week
          </a>
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
