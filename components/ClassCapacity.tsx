'use client'

import { useState, useEffect } from 'react'

interface ClassCapacityItem {
  start_at: string
  name: string
  capacity_remaining: number
  full: boolean
}

interface CapacityBadgeProps {
  /** The class time string displayed in the schedule, e.g. "5:00 AM" */
  classTime: string
}

// Map schedule display times to their 24h hour values for matching
function parseScheduleTime(time: string): number {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return -1

  let hour = parseInt(match[1], 10)
  const period = match[3].toUpperCase()

  if (period === 'AM' && hour === 12) hour = 0
  else if (period === 'PM' && hour !== 12) hour += 12

  return hour
}

function parseApiHour(startAt: string): number {
  // Convert ISO string to Chicago hour
  const date = new Date(startAt)
  const chicagoTime = date.toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    hour12: false,
  })
  return parseInt(chicagoTime, 10)
}

// Singleton fetch — all badges share one API call
let fetchPromise: Promise<ClassCapacityItem[]> | null = null
let fetchedData: ClassCapacityItem[] | null = null

function fetchCapacity(): Promise<ClassCapacityItem[]> {
  if (fetchedData) return Promise.resolve(fetchedData)
  if (fetchPromise) return fetchPromise

  fetchPromise = fetch('/api/class-capacity')
    .then((res) => {
      if (!res.ok) throw new Error('Failed to fetch')
      return res.json()
    })
    .then((json) => {
      fetchedData = json.classes || []
      return fetchedData!
    })
    .catch(() => {
      fetchedData = []
      return []
    })

  return fetchPromise
}

export default function ClassCapacityBadge({ classTime }: CapacityBadgeProps) {
  const [badge, setBadge] = useState<{ text: string; color: string } | null>(null)

  useEffect(() => {
    const scheduleHour = parseScheduleTime(classTime)
    if (scheduleHour === -1) return

    fetchCapacity().then((classes) => {
      // Find matching class by hour
      const match = classes.find((c) => parseApiHour(c.start_at) === scheduleHour)
      if (!match) return // No data = show nothing (graceful degradation)

      if (match.full || match.capacity_remaining === 0) {
        setBadge({ text: 'Full', color: 'text-red-400 font-bold' })
      } else if (match.capacity_remaining <= 5) {
        setBadge({ text: `Only ${match.capacity_remaining} spots left`, color: 'text-yellow-400 font-semibold' })
      } else if (match.capacity_remaining <= 15) {
        setBadge({ text: `${match.capacity_remaining} spots open`, color: 'text-emerald-400' })
      } else {
        setBadge({ text: `${match.capacity_remaining} spots open`, color: 'text-emerald-400/70' })
      }
    })
  }, [classTime])

  if (!badge) return null

  return (
    <div className={`text-[0.6rem] tracking-[1px] uppercase mt-1.5 font-display ${badge.color}`}>
      {badge.text}
    </div>
  )
}
