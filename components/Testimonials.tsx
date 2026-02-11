import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section id="testimonials" className="py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Testimonials</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide">
            Don&rsquo;t Take Our Word for It
          </h2>
        </div>

        {/* Featured testimonial — Chinwe's transformation story */}
        <div className="bg-maroon rounded-lg p-10 lg:p-14 mb-6 text-center">
          <div className="font-display text-6xl text-white/20 leading-none mb-4">&ldquo;</div>
          <p className="text-white/90 text-lg lg:text-xl leading-relaxed max-w-[700px] mx-auto mb-6">
            {featured.text}
          </p>
          <div className="font-display text-sm tracking-[3px] uppercase text-white/70">
            &mdash; {featured.author}
          </div>
        </div>

        {/* Remaining testimonials — clean 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 border border-gray-100 rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="font-display text-5xl text-maroon/20 leading-none mb-2">&ldquo;</div>
              <p className="text-text-gray text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="font-display text-sm tracking-wider uppercase text-charcoal">
                &mdash; {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
