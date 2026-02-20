/**
 * Pike13 Class Capacity API Proxy
 *
 * Fetches today's class data from Pike13 and returns simplified capacity info.
 * Caches responses for 5 minutes via Next.js revalidation.
 *
 * Register an app at https://developer.pike13.com/oauth_clients/new to get a client_id.
 * The business subdomain is sms.pike13.com.
 *
 * Environment variable required: NEXT_PUBLIC_PIKE13_CLIENT_ID
 */

import { NextResponse } from 'next/server'

interface Pike13EventOccurrence {
  id: number
  name: string
  start_at: string
  end_at: string
  state: string
  full: boolean
  capacity_remaining: number
  staff_members: { id: number; name: string }[]
}

interface Pike13Response {
  event_occurrences: Pike13EventOccurrence[]
}

interface ClassCapacityItem {
  start_at: string
  name: string
  capacity_remaining: number
  full: boolean
}

// Simple in-memory cache
let cache: { data: ClassCapacityItem[]; timestamp: number } | null = null
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function getTodayRange(): { from: string; to: string } {
  // Get today in America/Chicago timezone
  const now = new Date()
  const chicagoFormatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const todayStr = chicagoFormatter.format(now) // YYYY-MM-DD format

  // Start and end of day in Chicago time, expressed as ISO strings
  const from = `${todayStr}T00:00:00-06:00`
  const to = `${todayStr}T23:59:59-06:00`

  return { from, to }
}

export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_PIKE13_CLIENT_ID

  if (!clientId || clientId === 'your_client_id_here') {
    return NextResponse.json(
      { error: 'Pike13 client_id not configured', classes: [] },
      { status: 200 } // Return 200 with empty data for graceful degradation
    )
  }

  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
    return NextResponse.json({ classes: cache.data })
  }

  try {
    const { from, to } = getTodayRange()
    const url = `https://sms.pike13.com/api/v2/front/event_occurrences?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&client_id=${clientId}`

    const response = await fetch(url, {
      next: { revalidate: 300 }, // 5-minute Next.js cache
    })

    if (!response.ok) {
      console.error(`Pike13 API error: ${response.status} ${response.statusText}`)
      return NextResponse.json({ classes: [] })
    }

    const data: Pike13Response = await response.json()

    const classes: ClassCapacityItem[] = (data.event_occurrences || []).map((ev) => ({
      start_at: ev.start_at,
      name: ev.name,
      capacity_remaining: ev.capacity_remaining,
      full: ev.full,
    }))

    // Update cache
    cache = { data: classes, timestamp: Date.now() }

    return NextResponse.json({ classes })
  } catch (error) {
    console.error('Pike13 API fetch error:', error)
    return NextResponse.json({ classes: [] })
  }
}
