import { site } from '@/lib/data'
import { coaches } from '@/lib/data'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center bg-charcoal overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-group.jpg"
        alt="CrossFit Aggieland community workout"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80 z-[1]" />

      {/* Content */}
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

        {/* Proof stats */}
        <div className="flex justify-center gap-12 mt-16 flex-wrap">
          {[
            { number: `${site.awardsCount}x`, label: site.awardName },
            { number: String(site.established), label: 'Established' },
            { number: String(coaches.length), label: 'Coaches' },
            { number: '5 AM', label: 'First Class' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-white tracking-wider">{stat.number}</div>
              <div className="text-[0.7rem] text-white/60 tracking-[2px] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Google Review Badge */}
        <a
          href="https://www.google.com/maps/place/CrossFit+Aggieland/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all group"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FBBF24" />
          </svg>
          <span className="font-display text-sm tracking-wider text-white/90">4.8</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < 5 ? 'fill-yellow-400' : 'fill-white/30'}`} viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">61 Google Reviews</span>
        </a>
      </div>
    </section>
  )
}
