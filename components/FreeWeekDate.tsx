'use client'

import { useState, useEffect } from 'react'

function getNextMondayText(): string {
  const now = new Date()
  // Use America/Chicago timezone
  const chicagoDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Chicago' }))
  const dayOfWeek = chicagoDate.getDay() // 0 = Sunday, 1 = Monday, ...

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Chicago',
    })
  }

  if (dayOfWeek === 1) {
    // Today is Monday
    return `Your free week starts today \u2014 ${formatDate(chicagoDate)}`
  }

  // Calculate next Monday
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek
  const nextMonday = new Date(chicagoDate)
  nextMonday.setDate(chicagoDate.getDate() + daysUntilMonday)

  return `Next free week starts Monday, ${formatDate(nextMonday)}`
}

interface FreeWeekDateProps {
  variant?: 'hero' | 'cta'
}

export default function FreeWeekDate({ variant = 'hero' }: FreeWeekDateProps) {
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    setText(getNextMondayText())
  }, [])

  // Don't render on server to avoid hydration mismatch
  if (!text) return null

  if (variant === 'hero') {
    return (
      <div className="text-[clamp(0.7rem,1.4vw,0.875rem)] text-white/50 tracking-wider">
        {text}
      </div>
    )
  }

  // CTA variant
  return (
    <div className="text-sm text-white/50 tracking-wider">
      {text}
    </div>
  )
}
