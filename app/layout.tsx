import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Optiploy — AI-First Optimizely Talent Platform',
  description: 'Login to Optiploy - AI-powered talent optimization platform',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body style={{ fontFamily: 'var(--f)', background: 'var(--bg)', color: 'var(--t0)' }} className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
