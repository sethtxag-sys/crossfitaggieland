'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { coaches } from '@/lib/data'
import type { Coach } from '@/lib/types'
import Image from 'next/image'
import FadeIn from './FadeIn'

export default function Coaches() {
  const [selected, setSelected] = useState<Coach | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  // Focus trap + body lock + Escape
  useEffect(() => {
    if (!selected) return

    document.body.style.overflow = 'hidden'

    // Move focus into modal
    const timer = setTimeout(() => {
      const closeBtn = modalRef.current?.querySelector<HTMLElement>('button')
      closeBtn?.focus()
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null)
        return
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
      // Return focus to trigger
      triggerRef.current?.focus()
    }
  }, [selected])

  const openCoach = useCallback((coach: Coach, buttonEl: HTMLButtonElement) => {
    triggerRef.current = buttonEl
    setSelected(coach)
  }, [])

  /* Split coaches into full rows of 4 and a centered remainder */
  const cols = 4
  const fullRowCount = Math.floor(coaches.length / cols) * cols
  const fullRows = coaches.slice(0, fullRowCount)
  const remainder = coaches.slice(fullRowCount)

  const renderCard = (coach: Coach, i: number) => (
    <FadeIn key={coach.name} delay={i * 80}>
      <button
        type="button"
        onClick={(e) => openCoach(coach, e.currentTarget)}
        className="group relative rounded-xl overflow-hidden text-center p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer h-full bg-gray-100 hover:bg-gray-50 border border-gray-200 w-full"
      >
        {coach.image ? (
          <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-offset-2 ring-maroon/20 ring-offset-gray-100 group-hover:ring-offset-gray-50">
            <Image
              src={coach.image}
              alt={coach.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-display tracking-wider bg-maroon/10 text-maroon">
            {coach.initials}
          </div>
        )}
        <h3 className="font-display text-lg tracking-wider uppercase text-charcoal">
          {coach.name}
        </h3>
        <div className="text-xs tracking-[2px] uppercase mt-1 text-mid-gray">
          {coach.role}
        </div>
      </button>
    </FadeIn>
  )

  return (
    <section id="coaches" className="py-20 lg:py-28 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3 slash-accent justify-center">Certified CrossFit Coaches</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              The People in Your Corner.
            </h2>
            <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
              You won&rsquo;t be left guessing. Our coaches learn your name, correct your movement, and push you to be better than yesterday.
            </p>
          </div>
        </FadeIn>

        {/* Full rows */}
        {fullRows.length > 0 && (
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {fullRows.map((coach, i) => renderCard(coach, i))}
          </div>
        )}

        {/* Remainder row — centered */}
        {remainder.length > 0 && (
          <div className={`flex flex-wrap justify-center gap-4 lg:gap-6 ${fullRows.length > 0 ? 'mt-4 lg:mt-6' : ''}`}>
            {remainder.map((coach, i) => (
              <div key={coach.name} className="w-full min-[420px]:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                {renderCard(coach, fullRowCount + i)}
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} bio`}
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            ref={modalRef}
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
