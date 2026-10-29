import { GoogleTagManager } from '@next/third-parties/google'
import type { Viewport } from 'next'
import { ReactNode } from 'react'

import Footer from '@layout/Footer'
import { getCanonicalUrl, RouteLink } from '@lib/router'

import './globals.css'
import '@component/home/home.css'
import { serializeJsonLd } from '@util/seo-generators'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
  colorScheme: 'dark',
  themeColor: '#141414',
}

export async function generateMetadata() {
  return {
    metadataBase: new URL(getCanonicalUrl()),
    title: 'inRage, sites web et applications à La Rochelle | Pascal Gault',
    description:
      'Pascal Gault, développeur freelance à La Rochelle : sites WordPress, boutiques Prestashop, applications Symfony et React, maintenance et hébergement en France.',
    openGraph: {
      locale: 'fr_FR',
      type: 'website',
      siteName: 'inRage',
      images: [
        {
          url: getCanonicalUrl('/images/screenshot.png'),
          width: 1200,
          height: 900,
          alt: 'inRage - Pascal Gault, développeur web freelance à La Rochelle',
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

const BUSINESS_ID = getCanonicalUrl('/#business')
const PERSON_ID = getCanonicalUrl('/#person')
const WEBSITE_ID = getCanonicalUrl('/#website')

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '10-14 rue Jean Perrin',
  addressLocality: 'La Rochelle',
  addressRegion: 'Nouvelle-Aquitaine',
  postalCode: '17000',
  addressCountry: 'FR',
}

const PERSON_SAME_AS = [
  'https://www.linkedin.com/in/akiletour/',
  'https://twitter.com/akiletour',
  'https://github.com/akiletour',
  'https://www.instagram.com/akiletour/',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': BUSINESS_ID,
      name: 'inRage',
      legalName: 'inRage SARL',
      description:
        'Développeur web freelance à La Rochelle : création de sites WordPress, Prestashop, Symfony et React, maintenance et infogérance de sites internet.',
      url: getCanonicalUrl(),
      logo: 'https://static.inrage.fr/signature/logo-inrage-square200.png',
      image: getCanonicalUrl('/images/screenshot.png'),
      telephone: '+33682963889',
      priceRange: '€€',
      address: POSTAL_ADDRESS,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 46.1591,
        longitude: -1.152,
      },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        { '@type': 'Country', name: 'France' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      founder: { '@id': PERSON_ID },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33682963889',
          contactType: 'customer service',
          areaServed: 'FR',
          availableLanguage: 'French',
        },
      ],
      sameAs: [
        'https://www.facebook.com/inragefr/',
        'https://www.linkedin.com/in/akiletour/',
        'https://twitter.com/akiletour',
        'https://github.com/akiletour',
        'https://invoicer.fr',
      ],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Pascal Gault',
      jobTitle: 'Développeur web freelance',
      description:
        'Développeur et intégrateur web freelance à La Rochelle depuis 2008, fondateur de inRage.',
      url: getCanonicalUrl(RouteLink.aboutMe),
      worksFor: { '@id': BUSINESS_ID },
      address: POSTAL_ADDRESS,
      knowsAbout: [
        'WordPress',
        'PrestaShop',
        'WooCommerce',
        'Symfony',
        'React',
        'Next.js',
        'Maintenance de site web',
      ],
      sameAs: PERSON_SAME_AS,
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: getCanonicalUrl(),
      name: 'inRage',
      inLanguage: 'fr-FR',
      publisher: { '@id': BUSINESS_ID },
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-orange focus:px-4 focus:py-2 focus:text-gray-darker"
        >
          Aller au contenu
        </a>
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
