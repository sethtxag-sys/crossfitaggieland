import { site } from '@/lib/data'
import FadeIn from './FadeIn'

const outcomes = [
  {
    title: "You're Stronger",
    text: "Not just in the gym. You carry groceries without thinking twice. You play with your kids without getting winded. You trust your body again.",
    icon: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ),
  },
  {
    title: 'You Have More Energy',
    text: "The afternoon crash is gone. You sleep better. You wake up before your alarm and actually want to get out of bed.",
    icon: (
      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    ),
  },
  {
    title: 'You Found Your People',
    text: "The 5am crew knows your name. Saturday workouts turn into friendships. You have people who hold you accountable.",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "You're Confident",
    text: "You walk differently. You carry yourself differently. You stopped making excuses and started stacking proof.",
    icon: (
      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
    ),
  },
]

export default function Transformation() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 section-divider">
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
                <svg className="w-6 h-6 fill-maroon" viewBox="0 0 24 24">
                  {o.icon}
                </svg>
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
            className="inline-block font-display text-lg tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-10 py-4 hover:bg-maroon-dark hover:border-maroon-dark hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
          >
            Start Your Free Week
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}
