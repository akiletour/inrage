import { GoogleTagManager } from '@next/third-parties/google'
import { ReactNode } from 'react'

import Footer from '@layout/Footer'

import './globals.css'

export async function generateMetadata() {
  return {
    openGraph: {
      locale: 'fr-FR',
      url: 'https://www.inrage.fr',
      siteName: 'inRage',
      images: [
        {
          url: 'https://www.inrage.fr/images/screenshot.png',
          width: 1200,
          height: 900,
          alt: 'inRage',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@akiletour',
      site: '@akiletour',
    },
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://www.inrage.fr/#corporation',
    logo: 'https://static.inrage.fr/signature/logo-inrage-square200.png',
    legalName: 'inRage SARL',
    name: 'inRage',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10 rue Jean Perrin',
      addressLocality: 'La Rochelle',
      addressRegion: 'Charente Maritime',
      postalCode: '17000',
      addressCountry: 'FR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+33 (0)6 82 96 38 39',
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
      },
    ],
    url: 'https://www.inrage.fr',
    sameAs: [
      'https://www.facebook.com/inragefr/',
      'https://www.instagram.com/akiletour/',
      'https://www.linkedin.com/in/akiletour/',
      'https://twitter.com/akiletour',
    ],
  }
  return (
    <html lang="fr">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
