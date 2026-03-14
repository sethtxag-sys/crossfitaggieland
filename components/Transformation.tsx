import { site } from '@/lib/data'
import FadeIn from './FadeIn'
import { IconShieldCheck, IconLightning, IconCommunity, IconTrophy } from './Icons'

const outcomes = [
  {
    title: "You're Stronger",
    text: "Not just in the gym. You carry groceries without thinking twice. You play with your kids without getting winded. You trust your body again.",
    Icon: IconShieldCheck,
  },
  {
    title: 'You Have More Energy',
    text: "The afternoon crash is gone. You sleep better. You wake up before your alarm and actually want to get out of bed.",
    Icon: IconLightning,
  },
  {
    title: 'You Found Your People',
    text: "The 5am crew knows your name. Saturday workouts turn into friendships. You have people who hold you accountable.",
    Icon: IconCommunity,
  },
  {
    title: "You're Confident",
    text: "You walk differently. You carry yourself differently. You stopped making excuses and started stacking proof.",
    Icon: IconTrophy,
  },
]

export default function Transformation() {
  return (
    <section className="py-20 lg:py-28 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">
              Your Life, 6 Months From Now
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              This Is What Happens When You Show Up.
            </h2>
            <p className="text-text-gray max-w-[550px] mx-auto leading-relaxed">
              You don&rsquo;t have to imagine it. Hundreds of people in College Station are living it right now.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {outcomes.map((o, i) => (
            <FadeIn key={o.title} delay={i * 100}>
            <div
              className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all h-full"
            >
              <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mb-5">
                <o.Icon className="w-6 h-6 text-maroon" />
              </div>
              <h3 className="font-display text-lg tracking-wider uppercase text-charcoal mb-3">{o.title}</h3>
              <p className="text-text-gray text-sm leading-relaxed">{o.text}</p>
            </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
        <div className="text-center">
          <a
            href={site.pikeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Start Your Free Week
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}
