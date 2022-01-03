import '../styles/globals.css';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[{
          rel: 'icon',
          href: '/favicon.png',
        }]}
        openGraph={{
          type: 'website',
          locale: 'fr_FR',
          url: 'https://www.inrage.fr/',
          site_name: 'inRage',
        }}
        twitter={{
          handle: '@akiletour',
          site: '@akiletour',
          cardType: 'summary_large_image',
        }}
      />
      <Header pageTitle={pageProps.pageTitle || ''} breadcrumb={pageProps.breadcrumb} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
