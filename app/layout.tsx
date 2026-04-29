import type { Metadata, Viewport } from 'next'
import { Bona_Nova, Ephesis, Red_Hat_Display } from 'next/font/google'
import './globals.css'

/* ─── Fontes ────────────────────────────────────────────────── */
const bonaNova = Bona_Nova({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bona-nova',
  display: 'swap',
})

const ephesis = Ephesis({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-ephesis',
  display: 'swap',
})

const redHat = Red_Hat_Display({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-red-hat',
  display: 'swap',
})

/* ─── Viewport ───────────────────────────────────────────────── */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#73061B',
}

/* ─── Metadata ──────────────────────────────────────────────── */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mirellemanheze.adv.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dra. Mirelle Manheze | Advocacia e Assessoria Jurídica',
    template: '%s | Dra. Mirelle Manheze',
  },
  description:
    'Advocacia sólida, estratégica e confiável em Santo André, SP. Dra. Mirelle Manheze oferece assessoria jurídica com ética, preparo e dedicação. OAB/SP 540.038. Agende sua consulta.',
  keywords: [
    'advogada',
    'advocacia',
    'assessoria jurídica',
    'direito de família',
    'direito civil',
    'inventário',
    'contratos',
    'Mirelle Manheze',
    'advogada Santo André',
    'OAB SP 540038',
  ],
  authors:  [{ name: 'Dra. Mirelle Manheze' }],
  creator: 'Dra. Mirelle Manheze',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Dra. Mirelle Manheze — Advocacia e Assessoria Jurídica',
    title: 'Dra. Mirelle Manheze | Advocacia e Assessoria Jurídica',
    description:
      'Advocacia sólida, estratégica e confiável em Santo André, SP. OAB/SP 540.038. Agende sua consulta.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Dra. Mirelle Manheze — Advocacia e Assessoria Jurídica',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Mirelle Manheze | Advocacia e Assessoria Jurídica',
    description:
      'Advocacia sólida, estratégica e confiável em Santo André, SP. OAB/SP 540.038. Agende sua consulta.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
}

/* ─── Schema.org JSON-LD ─────────────────────────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Dra. Mirelle Manheze — Advocacia e Assessoria Jurídica',
  description:
    'Advocacia sólida, estratégica e confiável, com foco em Direito de Família, Direito Civil, Inventários, Contratos e Assessoria Preventiva.',
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  telephone: '+5511979881341',
  email: 'contato@mirellemanheze.adv.br',
  priceRange: 'Consultar',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Pereira Barreto, 1395, sala 75, Torre Norte',
    addressLocality: 'Santo André',
    addressRegion: 'SP',
    postalCode: '09190-610',
    addressCountry: 'BR',
  },
  sameAs: [
    'https://www.instagram.com/mirellemanheze.adv',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Áreas de Atuação',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito de Família' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito Civil' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventários e Sucessões' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contratos e Negócios' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Direito do Consumidor' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assessoria Preventiva' } },
    ],
  },
}

/* ─── Root Layout ────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={[bonaNova.variable, ephesis.variable, redHat.variable].join(' ')}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-linen text-bordeaux font-red-hat antialiased">
        {children}
      </body>
    </html>
  )
}
