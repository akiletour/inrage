import '../styles/globals.css';
import PropTypes from 'prop-types';
import Header from '../components/layouts/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
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
