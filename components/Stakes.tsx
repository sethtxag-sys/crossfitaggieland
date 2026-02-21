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
    <section className="py-20 lg:py-28 bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon-accent mb-3">
              The Cost of Waiting
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              You Already Know What Doing Nothing Looks Like.
            </h2>
            <p className="text-white/50 max-w-[550px] mx-auto leading-relaxed">
              You&rsquo;ve been living it. Another year of &ldquo;I&rsquo;ll start Monday.&rdquo;
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stakes.map((s, i) => (
            <FadeIn key={s.number} delay={i * 100}>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 hover:bg-white/[0.07] transition-colors h-full">
                <div className="font-display text-4xl text-white/15 mb-3" aria-hidden="true">{s.number}</div>
                <h3 className="font-display text-xl tracking-wider uppercase text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
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
