'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong.')
      }

      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl tracking-wider uppercase text-charcoal mb-2">Message Sent</h3>
        <p className="text-text-gray text-sm">We will get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-maroon hover:opacity-70 transition-opacity font-medium"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-1.5">
          Phone <span className="text-mid-gray/50">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors"
          placeholder="(979) 555-0000"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-charcoal text-sm focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon/20 transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="font-display text-base tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-8 py-3.5 hover:bg-maroon-dark hover:border-maroon-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
