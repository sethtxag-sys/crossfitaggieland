'use client'

import { useState, useEffect } from 'react'
import { site } from '@/lib/data'

const navLinks = [
  { label: 'Start Here', href: '#start' },
  { label: 'About Us', href: '#about' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? 'py-2.5 shadow-lg bg-charcoal/95'
          : 'py-4 bg-charcoal/95'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" onClick={(e) => handleClick(e, '#hero')}>
          <svg viewBox="0 0 40 44" fill="none" className="w-10 h-11">
            <path
              d="M20 0L40 8V28C40 36 30 42 20 44C10 42 0 36 0 28V8L20 0Z"
              fill="#500000"
              stroke="#fff"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            <polygon
              points="20,9 21.2,12.7 25,12.7 21.9,14.8 23.1,18.5 20,16.4 16.9,18.5 18.1,14.8 15,12.7 18.8,12.7"
              fill="#fff"
              fillOpacity="0.5"
            />
            <line x1="4" y1="22" x2="36" y2="22" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.3" />
            <text x="20" y="30" textAnchor="middle" fontFamily="Bebas Neue, sans-serif" fontSize="7" fill="#fff" letterSpacing="1">
              CFA
            </text>
          </svg>
          <div className="font-display text-white text-xl tracking-widest uppercase leading-tight">
            CrossFit
            <span className="block text-[0.65rem] tracking-[5px] opacity-70">Aggieland</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-body text-[0.78rem] font-medium tracking-wider uppercase text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={site.pikeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block font-display text-sm tracking-widest uppercase text-white border border-white/40 px-6 py-2.5 hover:bg-white hover:text-charcoal hover:border-white transition-all"
        >
          Start Your Free Week!
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] z-[1001]"
          aria-label="Toggle menu"
        >
          <span className={`w-[26px] h-[2px] bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-[26px] h-[2px] bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-[26px] h-[2px] bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-charcoal/[0.98] z-[999] flex flex-col items-center justify-center gap-7 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-body text-lg text-white tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm tracking-widest uppercase text-white border border-white/40 px-8 py-3 hover:bg-white hover:text-charcoal transition-all mt-4"
            >
              Start Your Free Week!
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
