import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import {
  getAllSupportsWithSlug,
  getSingleSupport,
} from '../../../lib/api';
import PortfolioLayout from '../../../components/portfolio/PortfolioLayout';

export default function PortfolioSupport({
  pageTitle, support, projects, supports,
}) {
  const router = useRouter();

  if (!router.isFallback && !support?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? <p>Chargement en cours...</p> : (
        <PortfolioLayout
          projects={projects}
          supports={supports}
          pageTitle={pageTitle}
        />
      )}
    </div>
  );
}

PortfolioSupport.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  support: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  supports: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PortfolioSupport.defaultProps = {
  support: {},
};

export async function getStaticProps({ params }) {
  const data = await getSingleSupport(params.support);
  return {
    props: {
      support: data.support,
      supports: data.supports.edges,
      projects: data.support.projets.edges,
      pageTitle: data.support.name,
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
