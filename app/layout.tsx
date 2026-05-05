import type { Metadata, Viewport } from 'next'
import { Bona_Nova, Ephesis, Red_Hat_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-3N4XJYRHW0'

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

// URL absoluta da imagem OG — obrigatória para WhatsApp, LinkedIn e Twitter
const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dra. Mirelle Manheze | Advocacia e Assessoria Jurídica',
    template: '%s | Dra. Mirelle Manheze',
  },
  description:
    'Assessoria jurídica com estratégia, ética e dedicação. Atendimento personalizado para proteger seus direitos com segurança e confiança.',
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
    siteName: 'Mirelle Manheze',
    title: 'Dra. Mirelle Manheze',
    description: 'Advocacia e Assessoria Jurídica',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Dra. Mirelle Manheze — Advocacia e Assessoria Jurídica',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Mirelle Manheze',
    description: 'Advocacia e Assessoria Jurídica',
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: '3DkjYQ9af73ayyszcqxq72PAQzg_kem56NCbfTv36oA',
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
  image: ogImageUrl,
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="bg-linen text-bordeaux font-red-hat antialiased">
        {children}
      </body>
    </html>
  )
}
