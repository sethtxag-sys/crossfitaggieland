'use client'

import { useState, useEffect } from 'react'
import { coaches } from '@/lib/data'
import type { Coach } from '@/lib/types'
import Image from 'next/image'
import FadeIn from './FadeIn'

export default function Coaches() {
  const [selected, setSelected] = useState<Coach | null>(null)

  useEffect(() => {
    if (!selected) return

    document.body.style.overflow = 'hidden'

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selected])

  return (
    <section id="coaches" className="py-20 lg:py-28 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Your Coaches</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              The People in Your Corner.
            </h2>
            <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
              You won&rsquo;t be left guessing. Our coaches learn your name, correct your movement, and push you to be better than yesterday.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {coaches.map((coach, i) => (
            <FadeIn key={coach.name} delay={i * 80}>
            <div
              onClick={() => setSelected(coach)}
              className={`group relative rounded-xl overflow-hidden text-center p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer h-full ${
                coach.isOwner
                  ? 'bg-maroon text-white min-[420px]:col-span-2 md:col-span-1'
                  : 'bg-gray-50 hover:bg-white border border-gray-100'
              }`}
            >
              {coach.image ? (
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-offset-2 ${
                    coach.isOwner
                      ? 'ring-white/30 ring-offset-maroon'
                      : 'ring-maroon/20 ring-offset-gray-50 group-hover:ring-offset-white'
                  }`}
                >
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-display tracking-wider ${
                    coach.isOwner
                      ? 'bg-white/20 text-white'
                      : 'bg-maroon/10 text-maroon'
                  }`}
                >
                  {coach.initials}
                </div>
              )}
              <h3 className={`font-display text-lg tracking-wider uppercase ${coach.isOwner ? 'text-white' : 'text-charcoal'}`}>
                {coach.name}
              </h3>
              <div className={`text-xs tracking-[2px] uppercase mt-1 ${coach.isOwner ? 'text-white/60' : 'text-mid-gray'}`}>
                {coach.role}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`px-8 pt-8 pb-6 text-center ${selected.isOwner ? 'bg-maroon' : 'bg-charcoal'}`}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selected.image ? (
                <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-white/20 ring-offset-4 ring-offset-transparent">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-display tracking-wider bg-white/20 text-white">
                  {selected.initials}
                </div>
              )}
              <h3 className="font-display text-2xl tracking-wider uppercase text-white">
                {selected.name}
              </h3>
              <div className="text-xs tracking-[3px] uppercase mt-1 text-white/60">
                {selected.role}
              </div>
            </div>
            <div className="px-8 py-6">
              <p className="text-text-gray leading-relaxed">
                {selected.bio || 'Bio coming soon.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
