import { ReactNode } from 'react';

import Footer from '@layout/Footer';

import './globals.css';

export async function generateMetadata() {
  return {
    openGraph: {
      type: 'website',
      locale: 'fr-FR',
      url: 'https://www.inrage.fr',
      site_name: 'inRage',
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
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    organizationType: 'Corporation',
    id: 'https://www.inrage.fr/#corporation',
    logo: 'https://i1.wp.com/www.inrage.fr/wp-content/uploads/2019/12/logo-inrage.png?fit=150%2C56&ssl=1',
    legalName: 'inRage SARL',
    name: 'inRage',
    address: {
      streetAddress: '10 rue Jean Perrin',
      addressLocality: 'La Rochelle',
      addressRegion: 'Charente Maritime',
      postalCode: '17000',
      addressCountry: 'FR',
    },
    contactPoints: [
      {
        telephone: '+33 (0)6 82 96 38 39',
        contactType: 'Pascal GAULT',
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
  };
  return (
    <html lang="fr">
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
  );
}
