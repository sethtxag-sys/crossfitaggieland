import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',

  /* ── SEO: Security & performance headers ── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        /* Cache static assets aggressively */
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  /* ── SEO: Redirect non-www → www (canonical) ── */
  async redirects() {
    return [
      /* Catch any old routes from the previous site that Google may have indexed */
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/about/:path*',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/schedule-pricing',
        destination: '/#schedule',
        permanent: true,
      },
      {
        source: '/start-here',
        destination: '/#start',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
