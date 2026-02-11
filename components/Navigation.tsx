'use client'

import { useState, useEffect } from 'react'
import { site } from '@/lib/data'
import Image from 'next/image'

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen
            ? 'py-4 bg-[#0d0d0d]'
            : scrolled
              ? 'py-2.5 shadow-lg bg-charcoal/95 backdrop-blur-xl'
              : 'py-4 bg-charcoal/95 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 relative z-[1002]" onClick={(e) => handleClick(e, '#hero')}>
            <Image
              src="/images/logo.png"
              alt="CrossFit Aggieland"
              width={44}
              height={44}
              className="w-11 h-11 object-contain"
              priority
            />
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
            Start Your Free Week
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] z-[1002] relative"
            aria-label="Toggle menu"
          >
            <span className={`w-[26px] h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-[26px] h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-[26px] h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu — completely separate from nav, own stacking context */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[1000] lg:hidden"
          style={{ background: 'linear-gradient(165deg, #0d0d0d 0%, #1a1a1a 40%, #500000 100%)' }}
        >
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M5 0h1L0 5V4zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative h-full flex flex-col items-center justify-center gap-7 px-8">
            {/* Maroon accent line */}
            <div className="w-10 h-[2px] bg-white/20 mb-2" />

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-display text-[1.75rem] text-white tracking-[4px] uppercase hover:text-white/80 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <div className="w-10 h-[2px] bg-white/20 mt-2" />

            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-base tracking-[3px] uppercase text-charcoal bg-white px-10 py-4 mt-2 hover:bg-white/90 transition-all"
            >
              Start Your Free Week
            </a>
          </div>
        </div>
      )}
    </>
  )
}
