import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { site } from '@/lib/data'
import './globals.css'


const siteUrl = 'https://www.crossfitaggieland.com'


export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: `CrossFit College Station | ${site.name} | ${site.awardsCount}x ${site.awardName}`,
    description: `CrossFit gym in College Station, TX. ${site.awardsCount}x ${site.awardName} winner since ${site.established}. Coach-led classes from 5 AM to 6:30 PM. Your first week is free. No contract.`,
    keywords: [
          'CrossFit College Station',
          'CrossFit Aggieland',
          'gym College Station TX',
          'CrossFit near me',
          'College Station gym',
          'CrossFit Bryan College Station',
          'best gym College Station',
          'CrossFit classes College Station',
          'personal training College Station TX',
          'fitness College Station',
        ],
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    alternates: {
          canonical: '/',
    },
    openGraph: {
          title: `${site.name} | Free Week. No Strings. No Excuses.`,
          description: `${site.awardsCount}x ${site.awardName} winner. Coach-led CrossFit classes from 5 AM to 6:30 PM. First week free. No contract.`,
          url: siteUrl,
          siteName: site.name,
          locale: 'en_US',
          type: 'website',
    },
    twitter: {
          card: 'summary_large_image',
          title: `${site.name} | Free Week. No Strings. No Excuses.`,
          description: `${site.awardsCount}x ${site.awardName} winner. Coach-led CrossFit classes from 5 AM to 6:30 PM. First week free. No contract.`,
    },
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
          <html lang="en">
                <body className="antialiased">
                  {children}
                        <Analytics />
                </body>
          </html>
        )
}
