import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { DefaultSeo, OrganizationJsonLd } from 'next-seo';

import Footer from '@component/layouts/Footer';
import Header from '@component/layouts/Header';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://www.inrage.fr${router.asPath}`;
  return (
    <>
      <DefaultSeo
        canonical={`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_FRONT_URL}${router.asPath}`}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.png',
          },
        ]}
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.inrage.fr/',
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
        }}
        twitter={{
          handle: '@akiletour',
          site: '@akiletour',
          cardType: 'summary_large_image',
        }}
      />
      <OrganizationJsonLd
        organizationType="Corporation"
        id="https://www.inrage.fr/#corporation"
        logo="https://i1.wp.com/www.inrage.fr/wp-content/uploads/2019/12/logo-inrage.png?fit=150%2C56&ssl=1"
        legalName="inRage SARL"
        name="inRage"
        address={{
          streetAddress: '10 rue Jean Perrin',
          addressLocality: 'La Rochelle',
          addressRegion: 'Charente Maritime',
          postalCode: '17000',
          addressCountry: 'FR',
        }}
        contactPoints={[
          {
            telephone: '+33 (0)6 51 89 89 17',
            contactType: 'Pascal GAULT',
            areaServed: 'FR',
            availableLanguage: 'French',
          },
        ]}
        url="https://www.inrage.fr"
        sameAs={[
          'https://www.facebook.com/inragefr/',
          'https://www.instagram.com/akiletour/',
          'https://www.linkedin.com/in/akiletour/',
          'https://twitter.com/akiletour',
        ]}
      />
      <Header
        pageTitle={pageProps.pageTitle || ''}
        breadcrumb={pageProps.breadcrumb}
        headerType={pageProps.headerType || 'default'}
        pageExcerpt={pageProps.excerpt || ''}
      />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
