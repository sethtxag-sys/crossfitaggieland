'use client'

import { useState } from 'react'
import { schedule, site } from '@/lib/data'
import FadeIn from './FadeIn'
import ClassCapacityBadge from './ClassCapacity'

type TimeFilter = 'all' | 'morning' | 'lunch' | 'evening'

const timeGroups: Record<Exclude<TimeFilter, 'all'>, string[]> = {
  morning: ['5:00 AM', '6:00 AM', '8:30 AM'],
  lunch: ['12:00 PM'],
  evening: ['3:30 PM', '4:30 PM', '5:30 PM', '6:30 PM'],
}

const filterButtons: { key: TimeFilter; label: string; icon: React.ReactNode }[] = [
  {
    key: 'all',
    label: 'All Times',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
  },
  {
    key: 'morning',
    label: 'Morning',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
      </svg>
    ),
  },
  {
    key: 'lunch',
    label: 'Lunch',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm.5 9H11V8h1.5v3.5H16V13h-3.5z" />
      </svg>
    ),
  },
  {
    key: 'evening',
    label: 'After Work',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
      </svg>
    ),
  },
]

export default function Schedule() {
  const [filter, setFilter] = useState<TimeFilter>('all')

  const isVisible = (time: string) => {
    if (filter === 'all') return true
    return timeGroups[filter].includes(time)
  }

  const visibleTimes = schedule.classTimes.filter((ct) => isVisible(ct.time))

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">Class Schedule</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-4">
              CrossFit Class Times in College Station
            </h2>
            <p className="text-white/50 max-w-[500px] leading-relaxed">
              Classes from 5 AM to 7:30 PM. Life isn&rsquo;t 9-to-5. Neither are we.
            </p>
          </div>
        </FadeIn>

        {/* Time-of-day quick picks */}
        <FadeIn delay={50}>
          <div className="mb-6">
            <div className="text-[0.7rem] tracking-[2px] uppercase text-white/40 mb-3 font-display">When works for you?</div>
            <div className="flex flex-wrap gap-2">
              {filterButtons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setFilter(btn.key)}
                  className={`inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[2px] uppercase px-4 py-2.5 rounded-lg transition-all ${
                    filter === btn.key
                      ? 'bg-maroon text-white border border-maroon'
                      : 'bg-white/[0.05] text-white/60 border border-white/[0.08] hover:bg-white/[0.1] hover:text-white/80'
                  }`}
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Class times grid — each slot links to Pike13 */}
        <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {schedule.classTimes.map((ct) => {
            const visible = isVisible(ct.time)
            return (
              <a
                key={ct.time}
                href={site.pikeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl p-5 text-center transition-all cursor-pointer group ${
                  visible
                    ? 'bg-white/[0.05] border border-white/[0.08] hover:bg-maroon hover:border-maroon'
                    : 'bg-white/[0.02] border border-white/[0.04] opacity-25 pointer-events-none'
                }`}
              >
                <div className="font-display text-2xl tracking-wider text-white">{ct.time}</div>
                <div className="text-[0.7rem] tracking-[2px] uppercase text-white/55 mt-1 group-hover:text-white/80 transition-colors">{ct.label}</div>
                {visible && <ClassCapacityBadge classTime={ct.time} />}
                <div className={`text-[0.6rem] tracking-[2px] uppercase mt-2 transition-all font-display ${
                  visible ? 'text-white/0 group-hover:text-white/70' : 'text-white/0'
                }`}>Book Now</div>
              </a>
            )
          })}
        </div>
        </FadeIn>

        {/* Days row */}
        <FadeIn delay={200}>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {schedule.days.map((day) => (
            <div
              key={day.name}
              className={`rounded-xl p-3 sm:p-4 text-center w-[calc(25%-6px)] md:w-[calc(14.285%-7px)] min-w-0 ${
                day.special
                  ? 'bg-maroon border border-maroon-light'
                  : day.open
                  ? 'bg-white/[0.05] border border-white/[0.08]'
                  : 'bg-white/[0.02] border border-white/[0.04] opacity-50'
              }`}
            >
              <div className="font-display text-lg tracking-wider">{day.name}</div>
              <div className="text-xs text-white/50 mt-1">{day.hours}</div>
              {day.special && (
                <div className="text-[0.65rem] text-white font-semibold mt-1">{day.special}</div>
              )}
            </div>
          ))}
        </div>

        <p className="text-white/55 text-sm max-w-prose">
          <strong className="text-white/70">World-class {site.programming} programming, coach-led every session.</strong> Track your progress with {site.tracking}.
        </p>
        </FadeIn>
      </div>
    </section>
  )
}
