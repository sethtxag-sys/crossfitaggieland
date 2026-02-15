import { schedule, site } from '@/lib/data'
import FadeIn from './FadeIn'

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-12">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">Schedule</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-4">
              Come Train With Us.
            </h2>
            <p className="text-white/50 max-w-[500px] leading-relaxed">
              Classes from 5 AM to 6:30 PM. Life isn&rsquo;t 9-to-5. Neither are we.
            </p>
          </div>
        </FadeIn>

        {/* Class times grid — each slot links to Pike13 */}
        <FadeIn delay={100}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {schedule.classTimes.map((ct) => (
            <a
              key={ct.time}
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-5 text-center hover:bg-maroon hover:border-maroon transition-all cursor-pointer group"
            >
              <div className="font-display text-2xl tracking-wider text-white">{ct.time}</div>
              <div className="text-[0.7rem] tracking-[2px] uppercase text-white/55 mt-1 group-hover:text-white/80 transition-colors">{ct.label}</div>
              <div className="text-[0.6rem] tracking-[2px] uppercase text-white/0 group-hover:text-white/70 mt-2 transition-all font-display">Book Now</div>
            </a>
          ))}
        </div>
        </FadeIn>

        {/* Days row */}
        <FadeIn delay={200}>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-7 gap-2 mb-8">
          {schedule.days.map((day) => (
            <div
              key={day.name}
              className={`rounded-xl p-3 sm:p-4 text-center ${
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
          <strong className="text-white/70">{site.programming} Programming, Coach-Led.</strong> Track your progress with {site.tracking}.
        </p>
        </FadeIn>
      </div>
    </section>
  )
}
