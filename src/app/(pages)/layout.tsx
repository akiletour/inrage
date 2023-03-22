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
  return (
    <html lang="fr">
      <head />
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
