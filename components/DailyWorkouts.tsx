import { site } from '@/lib/data'
import Image from 'next/image'
import FadeIn from './FadeIn'

export default function DailyWorkouts() {
  return (
    <section id="wods" className="py-20 lg:py-28 bg-gray-50 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Training photo */}
          <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[350px] lg:h-[450px]">
            <Image
              src="/images/front-squat.jpg"
              alt="Athlete performing a front squat at CrossFit Aggieland"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Daily Workouts</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              World-Class Programming, Coach-Led.
            </h2>
            <p className="text-text-gray leading-relaxed mb-8 max-w-prose">
              We follow <strong className="text-charcoal">{site.programming} programming</strong>, the same system used by some of the world&rsquo;s top CrossFit athletes. We scale and coach every workout to fit every athlete in the room, from day-one beginners to competitors.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: `Track Progress with ${site.tracking}.`,
                  text: 'Track lifts, benchmark workouts, and see your progress over time. No guessing. Your results are right there.',
                },
                {
                  title: 'Scaled to You.',
                  text: 'New here? We scale everything. You\'ll never be "behind."',
                },
                {
                  title: 'Coach-Led, Every Class.',
                  text: 'Every class is coach-led. They learn your name, correct your form, and guide you through every workout.',
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-maroon/10 flex items-center justify-center mt-0.5 shrink-0">
                    <svg className="w-3 h-3 fill-maroon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <p className="text-text-gray leading-relaxed">
                    <strong className="text-charcoal">{feature.title}</strong> {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}
