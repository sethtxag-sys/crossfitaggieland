import { site } from '@/lib/data'
import { coaches } from '@/lib/data'
import Image from 'next/image'

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=CrossFit+Aggieland+3815+General+Pkwy+College+Station+TX+77845'

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
      <div className="relative z-[2] pt-20 pb-16 sm:pb-20 max-w-[900px] px-6">
        <h1 className="font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95] uppercase text-white mb-6 tracking-wide">
          The Hour That<br />Changes Everything.
        </h1>
        <p className="text-lg text-white/70 max-w-[520px] mx-auto mb-4 leading-relaxed font-light">
          Elite coaching and a real community in College Station. Your first week is free. No commitment. No strings.
        </p>

        <div className="w-[60px] h-px bg-white/30 mx-auto mb-6" />

        <div className="font-display text-2xl text-white tracking-[4px] uppercase mb-4">
          7 Days. Unlimited Classes. Zero Cost.
        </div>

        {/* Google Review Badge — social proof before the ask */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/[0.07] backdrop-blur-sm border border-white/15 rounded-full hover:bg-white/15 transition-all group"
        >
          {/* Google "G" */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          {/* Rating number */}
          <span className="font-display text-lg tracking-wider text-white font-bold">4.8</span>
          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          {/* Review count */}
          <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">61 reviews</span>
        </a>

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
        <div className="flex justify-center gap-10 sm:gap-12 mt-14 sm:mt-16 flex-wrap">
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
      </div>
    </section>
  )
}
