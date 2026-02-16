import { site } from '@/lib/data'
import FadeIn from './FadeIn'

export default function FirstDay() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-[900px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">Your First Gym Class</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              Here&rsquo;s Exactly What Happens.
            </h2>
            <p className="text-white/50 max-w-[550px] mx-auto leading-relaxed">
              No surprises. No awkward moments. Just show up to your first workout class and we take care of the rest.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6 sm:space-y-8">
          {[
            {
              step: '01',
              title: 'You Walk In',
              text: 'Show up 10 minutes early. A coach will greet you by name, show you around, and answer any questions. No clipboard. No sales pitch. Just a handshake.',
            },
            {
              step: '02',
              title: 'We Warm Up Together',
              text: 'The whole class starts together. Your coach walks you through every movement. If something is too advanced, they give you a version that works for where you are right now.',
            },
            {
              step: '03',
              title: 'You Do The Workout',
              text: 'It is one hour. Your coach watches your form, adjusts your weights, and keeps you moving safely. Everyone in the room was new once. Nobody is judging you.',
            },
            {
              step: '04',
              title: 'You Leave Feeling It',
              text: 'Tired but accomplished. You did something most people talk about but never do. Your coach checks in, and you already know when your next class is.',
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 100}>
            <div className="flex gap-5 sm:gap-6 items-start">
              <div className="font-display text-3xl sm:text-4xl text-maroon-accent/30 leading-none shrink-0 w-10 sm:w-12">
                {item.step}
              </div>
              <div>
                <div className="font-display text-xl tracking-wider uppercase text-white mb-2">
                  {item.title}
                </div>
                <p className="text-white/60 leading-relaxed text-[0.9rem] sm:text-base">{item.text}</p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center mt-12 sm:mt-16">
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-lg tracking-widest uppercase text-white border-2 border-white/40 px-10 py-4 hover:bg-white hover:text-charcoal hover:border-white transition-all"
            >
              Start Your Free Week
            </a>
            <p className="text-white/40 text-sm mt-4">Free. No credit card. No commitment.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
