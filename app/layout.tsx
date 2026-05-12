import type { Metadata } from 'next'
import { Oswald, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })
const _lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export const metadata: Metadata = {
  title: 'Pizza Twice | More Than Just Great Pizza',
  description: 'Visit Pizza Twice in Oromocto for mouth-watering pizzas, wings, donairs, subs, garlic fingers, and more. For fast delivery, call the pizza restaurant now.',
  generator: 'v0.app',
  keywords: ['pizza', 'wings', 'donairs', 'subs', 'Oromocto', 'pizza delivery', 'restaurant'],
  openGraph: {
    title: 'Pizza Twice | More Than Just Great Pizza',
    description: 'Tantalize Your Taste Buds at Pizza Twice in Oromocto.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${_oswald.variable} ${_lato.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
