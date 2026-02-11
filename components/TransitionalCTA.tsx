'use client'

import { useState } from 'react'

export default function TransitionalCTA() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('guide-name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('guide-email') as HTMLInputElement).value.trim(),
      phone: '',
      message: '[Transitional CTA] Requested the free beginner guide.',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 lg:py-28 bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">
          Not Ready Yet?
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] uppercase tracking-wide mb-5">
          No Problem. Start Here Instead.
        </h2>
        <p className="text-text-gray leading-relaxed mb-10 max-w-[500px] mx-auto">
          Get our free beginner guide. What to expect your first week, what to wear, and how we scale every workout to your level.
        </p>

        {status === 'sent' ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-xl tracking-wider uppercase text-charcoal mb-1">Check Your Inbox</h3>
            <p className="text-text-gray text-sm">Your guide is on its way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[550px] mx-auto">
            <input
              type="text"
              id="guide-name"
              name="guide-name"
              required
              placeholder="First name"
              className="flex-1 px-4 py-3.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors"
            />
            <input
              type="email"
              id="guide-email"
              name="guide-email"
              required
              placeholder="Email address"
              className="flex-1 px-4 py-3.5 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-display text-sm tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-6 py-3.5 hover:bg-maroon-dark hover:border-maroon-dark transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {status === 'sending' ? 'Sending...' : 'Send Me the Guide'}
            </button>
          </form>
        )}

        <p className="text-mid-gray text-xs mt-4 tracking-wide">No spam. Just the guide.</p>

        {status === 'error' && (
          <p className="text-red-600 text-sm mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  )
}
