import { site } from '@/lib/data'
import { coaches } from '@/lib/data'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-charcoal overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon/30 to-black/60" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-black/[0.52] z-[1]" />

      {/* Content — Customer is the hero, not the brand */}
      <div className="relative z-[2] pt-20 max-w-[900px] px-6">
        <h1 className="font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95] uppercase text-white mb-6 tracking-wide">
          The Hour That<br />Changes Everything.
        </h1>
        <p className="text-lg text-white/70 max-w-[520px] mx-auto mb-4 leading-relaxed font-light">
          Elite coaching and a real community in College Station. Your first week is free. No commitment. No strings.
        </p>

        <div className="w-[60px] h-px bg-white/30 mx-auto my-6" />

        <div className="font-display text-2xl text-white tracking-[4px] uppercase mb-8">
          7 Days. Unlimited Classes. Zero Cost.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={site.pikeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg tracking-widest uppercase bg-white text-charcoal border-2 border-white px-10 py-4 hover:bg-transparent hover:text-white transition-all w-[280px] sm:w-auto text-center"
          >
            Claim My Free Week
          </a>
          <a
            href="#start"
            className="font-display text-lg tracking-widest uppercase border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-charcoal transition-all w-[280px] sm:w-auto text-center"
          >
            See How It Works
          </a>
        </div>

        {/* Proof stats — guide authority in support position */}
        <div className="flex justify-center gap-12 mt-16 flex-wrap">
          {[
            { number: `${site.awardsCount}x`, label: site.awardName },
            { number: String(site.established), label: 'Established' },
            { number: String(coaches.length), label: 'Coaches' },
            { number: '5am', label: 'First Class' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-white tracking-wider">{stat.number}</div>
              <div className="text-[0.7rem] text-white/60 tracking-[2px] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
