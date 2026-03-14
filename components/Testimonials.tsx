import { testimonials } from '@/lib/data'
import FadeIn from './FadeIn'

export default function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section id="testimonials" className="py-28 lg:py-36 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-4 slash-accent justify-center">Member Reviews</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide">
              Real Results. Real People.
            </h2>
          </div>
        </FadeIn>

        {/* Featured testimonial — owns the viewport, editorial scale */}
        <FadeIn direction="scale">
          <div className="bg-maroon rounded-xl p-10 sm:p-14 lg:p-20 mb-8 text-center relative overflow-hidden">
            {/* Athletic diagonal slash accents */}
            <div className="absolute top-0 right-0 w-32 h-full opacity-[0.06]" style={{ background: 'linear-gradient(165deg, transparent 40%, white 40.5%, white 41.5%, transparent 42%)' }} />
            <div className="absolute top-0 right-12 w-32 h-full opacity-[0.04]" style={{ background: 'linear-gradient(165deg, transparent 40%, white 40.5%, white 41.5%, transparent 42%)' }} />

            <div className="relative">
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl text-white/15 leading-none mb-6 select-none">&ldquo;</div>
              <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-[750px] mx-auto mb-8 font-medium">
                {featured.text}
              </p>
              <div className="font-display text-sm tracking-[4px] uppercase text-white/60">
                &mdash; {featured.author}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Remaining testimonials — staggered directional entrances */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((t, i) => (
            <FadeIn key={t.author} delay={i * 100} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <div className="font-display text-4xl text-maroon/15 leading-none mb-2 select-none">&ldquo;</div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="font-display text-sm tracking-wider uppercase text-charcoal font-medium">
                  &mdash; {t.author}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
