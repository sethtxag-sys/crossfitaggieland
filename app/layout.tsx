import type { Metadata } from 'next'
import { site } from '@/lib/data'
import './globals.css'

export const metadata: Metadata = {
  title: `${site.name} | ${site.awardsCount}x ${site.awardName} | ${site.address.city}, ${site.address.state}`,
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-charcoal bg-white leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
