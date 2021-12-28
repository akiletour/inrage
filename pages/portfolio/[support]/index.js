import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import {
  getAllSupportsWithSlug,
  getSingleSupport,
} from '../../../lib/api';

export default function PortfolioSupport({ support }) {
  const router = useRouter();

  if (!router.isFallback && !support?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? <p>Chargement en cours...</p> : (
        <div>
          {support.name}
        </div>
      )}
    </div>
  );
}

PortfolioSupport.propTypes = {
  support: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

PortfolioSupport.defaultProps = {
  support: {},
};

export async function getStaticProps({ params }) {
  const data = await getSingleSupport(params.support);
  return {
    props: {
      support: data,
      pageTitle: data.name,
      breadcrumb: {
        parent: {
          link: '/portfolio',
          title: 'Portfolio',
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllSupportsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/portfolio/${node.slug}`) || [],
    fallback: true,
  };
}
