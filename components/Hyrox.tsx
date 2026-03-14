'use client'

import Image from 'next/image'
import { site } from '@/lib/data'
import FadeIn from './FadeIn'
import PhotoFrame from './PhotoFrame'

const stations = [
  { name: 'SkiErg', detail: '1,000 m', station: 1, match: 'We have SkiErgs and train pulling power daily.' },
  { name: 'Sled Push', detail: '50 m', station: 2, match: 'Sled pushes build raw push strength. We program them regularly.' },
  { name: 'Sled Pull', detail: '50 m', station: 3, match: 'Rope pulls and sled drags build the grip and back strength you need.' },
  { name: 'Burpee Broad Jumps', detail: '80 m', station: 4, match: 'Explosive power under fatigue. Burpees show up in our classes constantly.' },
  { name: 'Rowing', detail: '1,000 m', station: 5, match: 'Concept2 rowers in every class. Pacing is coached.' },
  { name: 'Farmers Carry', detail: '200 m', station: 6, match: 'Heavy carries are built into our programming.' },
  { name: 'Sandbag Lunges', detail: '100 m', station: 7, match: 'Weighted lunges show up constantly. Your legs will be ready.' },
  { name: 'Wall Balls', detail: '75–100 reps', station: 8, match: 'The classic finisher. We train wall balls weekly. You will be ready.' },
]

export default function HYROX() {
  return (
    <section id="hyrox" className="py-20 lg:py-28 bg-charcoal text-white overflow-hidden section-grain chevron-bottom">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14 lg:mb-18">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">
              HYROX Training
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              Train for HYROX at CrossFit Aggieland
            </h2>
            <p className="text-white/60 max-w-[620px] mx-auto leading-relaxed">
              HYROX is the fastest-growing fitness race in the world. Eight 1 km runs. Eight workout stations. One finish line. Our training covers every station, every class.
            </p>
          </div>
        </FadeIn>

        {/* Two-column: image + value prop */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <PhotoFrame className="h-[300px] sm:h-[350px] lg:h-[420px]">
              <Image
                src="/images/rower-group.jpg"
                alt="Athletes rowing at CrossFit Aggieland, training for HYROX race preparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display text-white text-lg tracking-wider">HYROX Ready</div>
                <div className="text-white/60 text-sm">Every station. Every class.</div>
              </div>
            </PhotoFrame>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide mb-5 leading-tight">
                Your HYROX Training Ground
              </h3>
              <p className="text-white/60 leading-relaxed mb-4">
                Every HYROX station tests functional fitness. Rowing, sled pushes, wall balls, carries, lunges. These movements are the foundation of what we train every day.
              </p>
              <p className="text-white/60 leading-relaxed mb-4">
                Our coaches program for strength, endurance, and work capacity under fatigue. That is exactly what HYROX demands. One gym. All 8 stations. Race-day ready.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                College Station does not have many options for HYROX-specific prep. We have the equipment, the coaching, and the programming to get you to the finish line.
              </p>

              <div className="flex flex-wrap gap-3">
                {['SkiErgs', 'Sleds', 'Rowers', 'Wall Balls', 'Sandbags + Handles'].map((item) => (
                  <span
                    key={item}
                    className="text-xs font-display tracking-[2px] uppercase text-white/70 border border-white/15 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 8 Stations Grid */}
        <FadeIn>
          <div className="text-center mb-10">
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide">
              All 8 HYROX Stations. Trained Here.
            </h3>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stations.map((s, i) => (
            <FadeIn key={s.name} delay={i * 60}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 hover:bg-white/[0.07] transition-colors h-full">
                <div className="font-display text-xs tracking-[3px] uppercase text-maroon-accent mb-3">Station {s.station}</div>
                <div className="font-display text-base tracking-wider uppercase text-white mb-1">{s.name}</div>
                <div className="text-xs text-maroon-accent font-medium mb-2">{s.detail}</div>
                <p className="text-white/50 text-sm leading-relaxed">{s.match}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <p className="text-white/50 mb-6 max-w-[500px] mx-auto leading-relaxed">
              Whether your HYROX race is 12 weeks out or 12 months away, the best time to start training is now.
            </p>
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-ghost"
            >
              Start Your Free Week
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
