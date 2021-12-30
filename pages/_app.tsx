import '../styles/globals.css';
import { AppProps } from 'next/app';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header pageTitle={pageProps.pageTitle || ''} breadcrumb={pageProps.breadcrumb} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
