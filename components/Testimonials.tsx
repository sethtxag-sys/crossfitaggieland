import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Testimonials</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide">
            Don&rsquo;t Take Our Word for It
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
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
