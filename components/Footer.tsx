import { site } from '@/lib/data'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white py-12 pb-6">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top row: Logo, quick links, social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/[0.08] mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="CrossFit Aggieland"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-display text-lg tracking-widest uppercase">{site.name}</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Elite coaching and a real community in College Station since {site.established}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display text-xs tracking-[3px] uppercase text-white/60 mb-4">Quick Links</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {[
                { label: 'Schedule', href: '#schedule' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Coaches', href: '#coaches' },
                { label: 'Contact', href: '#contact' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Google Reviews', href: 'https://www.google.com/maps/search/?api=1&query=CrossFit+Aggieland+3815+General+Pkwy+College+Station+TX+77845' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-white/50 hover:text-white/90 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + Member login */}
          <div>
            <div className="font-display text-xs tracking-[3px] uppercase text-white/60 mb-4">Connect</div>
            <div className="flex gap-3 mb-5">
              <SocialLink href={site.social.facebook} label="Facebook">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </SocialLink>
              <SocialLink href={site.social.twitter} label="X">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </SocialLink>
              <SocialLink href={site.social.youtube} label="YouTube">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </SocialLink>
            </div>
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-display tracking-[2px] uppercase text-white/50 border border-white/20 px-4 py-2 rounded hover:bg-white/10 hover:text-white/80 transition-all"
            >
              Member Login
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
          <div className="text-xs text-white/50 text-center md:text-left">
            &copy; {year} {site.name}. {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href={`mailto:${site.email}`} className="text-xs text-white/50 hover:text-white/80 transition-colors">
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/-/g, '')}`} className="text-xs text-white/50 hover:text-white/80 transition-colors">
              {site.phone}
            </a>
            <a href="#contact" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center hover:bg-maroon hover:border-maroon transition-all group"
    >
      <svg className="w-4 h-4 fill-white/50 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  )
}
