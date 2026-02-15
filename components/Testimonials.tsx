import { testimonials } from '@/lib/data'
import FadeIn from './FadeIn'

export default function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section id="testimonials" className="py-20 lg:py-28 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Testimonials</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide">
              Don&rsquo;t Take Our Word for It
            </h2>
          </div>
        </FadeIn>

        {/* Featured testimonial — open-quote mark instead of accent line for stronger visual punch */}
        <FadeIn>
          <div className="bg-maroon rounded-xl p-6 sm:p-10 lg:p-14 mb-6 text-center">
            <div className="font-display text-5xl sm:text-6xl text-white/20 leading-none mb-4 select-none">&ldquo;</div>
            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[700px] mx-auto mb-6">
              {featured.text}
            </p>
            <div className="font-display text-sm tracking-[3px] uppercase text-white/70">
              &mdash; {featured.author}
            </div>
          </div>
        </FadeIn>

        {/* Remaining testimonials — open-quote marks for visual consistency */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((t, i) => (
            <FadeIn key={t.author} delay={i * 80}>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all h-full">
                <div className="font-display text-4xl sm:text-5xl text-maroon/20 leading-none mb-2 select-none">&ldquo;</div>
                <p className="text-text-gray text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="font-display text-sm tracking-wider uppercase text-charcoal">
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
