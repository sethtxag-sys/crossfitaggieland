import { site } from '@/lib/data'
import FadeIn from './FadeIn'

export default function FreeWeekCTA() {
  return (
    <section id="free" className="py-20 lg:py-28 bg-maroon text-white text-center">
      <div className="max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
            Your Future Self Will Thank You.
          </h2>
          <p className="text-white/70 leading-relaxed max-w-[550px] mx-auto mb-10 lg:mb-12">
            One week. Unlimited classes. Zero risk. Show up, see what happens, and decide for yourself why we&rsquo;ve been voted #1 for {site.awardsCount} straight years.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-10 lg:mb-12">
          {[
            { num: '01', text: 'Sign Up' },
            { num: '02', text: 'Show Up' },
            { num: '03', text: 'Get Coached' },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="font-display text-4xl text-white/20" aria-hidden="true">{step.num}</div>
              <div className="font-display text-lg tracking-wider mt-1">{step.text}</div>
            </div>
          ))}
        </div>

        <a
          href={site.pikeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-display text-lg tracking-widest uppercase bg-white text-charcoal border-2 border-white px-10 py-4 hover:bg-transparent hover:text-white transition-all"
        >
          Start Your Free Week
        </a>

        <p className="text-white/60 text-xs tracking-wider mt-6 max-w-[400px] mx-auto">
          No credit card. No contract. Just walk in and see what happens.
        </p>
        </FadeIn>
      </div>
    </section>
  )
}
