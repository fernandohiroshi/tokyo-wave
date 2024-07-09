import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Montserrat } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/header'

const m = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tokyo Wave',
  description: 'Model Agency Based in Tokyo, Japan',
  keywords: [
    'Tokyo Wave',
    'Modeling Agency',
    'Shibuya',
    'Tokyo',
    'Fashion',
    'Diversity',
    'Authenticity',
    'Individuality',
    'Unique Models',
    'Modern Fashion',
    'Underground Fashion',
    'Cool Fashion',
    'Model Opportunities',
    'Fashion Industry',
    'Innovative Agency',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={m.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
