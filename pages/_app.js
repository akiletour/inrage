import '../styles/globals.css';
import PropTypes from 'prop-types';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape(),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
