import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxime Maillary — Développeur Fullstack',
  description: 'Portfolio de Maxime Maillary, développeur fullstack Node.js, Express, MySQL et Next.js.',
  openGraph: {
    title: 'Maxime Maillary — Développeur Fullstack',
    description: 'Portfolio de Maxime Maillary, développeur fullstack Node.js, Express, MySQL et Next.js.',
    url: 'https://maxime-maillary.fr',
    siteName: 'Maxime Maillary',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maxime Maillary — Développeur Fullstack',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxime Maillary — Développeur Fullstack',
    description: 'Portfolio de Maxime Maillary, développeur fullstack Node.js, Express, MySQL et Next.js.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${outfit.className} bg-background text-text-primary min-h-screen`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}