import { site } from '@/lib/data'
import Image from 'next/image'
import FadeIn from './FadeIn'

const values = [
  {
    title: 'Coaching That Meets You Where You Are',
    text: 'We learn your name, correct your form, and scale your workouts so you are always progressing.',
  },
  {
    title: 'Built for the Long Game',
    text: "This isn't a 30-day challenge. It's the hour of your day that makes the rest of your day better.",
  },
  {
    title: 'Your People Are Here',
    text: 'Students, parents, professionals, and grandparents. Everyone is welcome, and everyone is coached.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Community photo */}
          <FadeIn>
            <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[500px]">
              <Image
                src="/images/women-group.jpg"
                alt="CrossFit Aggieland women's group at the gym"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
                <div className="font-display text-white text-lg tracking-wider">Since {site.established}</div>
                <div className="text-white/60 text-sm">{site.address.city}, {site.address.state}</div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={150}>
            <div className="max-w-prose">
              <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Your Guide</div>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
                We&rsquo;ve Been Where You Are.
              </h2>
              <p className="text-text-gray leading-relaxed mb-4">
                We know what it feels like to walk into a gym and wonder if you belong. To look around and think everyone else is ahead of you. That&rsquo;s exactly why we built {site.name} the way we did.
              </p>
              <p className="text-text-gray leading-relaxed mb-4">
                Every class is coached. Every workout is scaled to you. Every person in the room was once the new person. We didn&rsquo;t earn <strong>{site.awardsCount}x {site.awardName}</strong> by being the hardest gym in town. We earned it by being the gym that keeps people coming back.
              </p>
              <p className="text-text-gray leading-relaxed mb-8">
                Whether you&rsquo;re a D1 athlete or brand new, the standard is the same: show up, be coachable, and do the work. We&rsquo;ll handle the rest.
              </p>

              <div className="space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-maroon mt-2 shrink-0" />
                    <p className="text-text-gray leading-relaxed">
                      <strong className="text-charcoal">{v.title}:</strong> {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
