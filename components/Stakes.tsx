import { site } from '@/lib/data'
import FadeIn from './FadeIn'

const stakes = [
  {
    number: '01',
    title: 'Another Year Goes By',
    text: "You tell yourself you'll start Monday. Then next month. Then January. The calendar doesn't care about your plans.",
  },
  {
    number: '02',
    title: 'Your Body Keeps Score',
    text: 'Energy drops. Sleep suffers. Confidence fades. The longer you wait, the harder the first step feels.',
  },
  {
    number: '03',
    title: 'One Decision Away',
    text: "You already know something needs to change. The question isn't whether. It's when.",
  },
]

export default function Stakes() {
  return (
    <section className="py-28 lg:py-36 bg-charcoal text-white relative diagonal-bottom">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Pull-quote headline — owns the viewport */}
        <FadeIn direction="scale">
          <div className="text-center mb-20 lg:mb-28">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-4 slash-accent justify-center">
              The Cost of Waiting
            </div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] uppercase tracking-wide max-w-[900px] mx-auto">
              You Already Know What Doing Nothing Looks Like.
            </h2>
            <p className="text-white/40 max-w-[550px] mx-auto leading-relaxed mt-6 text-lg">
              You&rsquo;ve been living it.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stakes.map((s, i) => (
            <FadeIn key={s.number} delay={i * 120} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 hover:bg-white/[0.07] transition-colors h-full relative overflow-hidden">
                {/* Athletic diagonal number accent */}
                <div className="font-display text-[5rem] leading-none text-white/[0.04] absolute -top-3 -right-2 select-none" style={{ transform: 'skewX(-8deg)' }} aria-hidden="true">{s.number}</div>
                <div className="relative">
                  <h3 className="font-display text-xl tracking-wider uppercase text-white mb-3">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            {/* Ghost CTA — not the primary action point */}
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-lg tracking-widest uppercase text-white border-2 border-white/40 px-10 py-4 hover:bg-white hover:text-charcoal transition-all"
            >
              Start Your Free Week
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
