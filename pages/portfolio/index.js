import PropTypes from 'prop-types';
import { getPortfolioProjects } from '../../lib/api';
import PortfolioLayout from '../../components/portfolio/PortfolioLayout';

export default function Portfolio({
  pageTitle,
  projects: { edges },
  supports: { edges: supports },
}) {
  return (
    <PortfolioLayout
      projects={edges}
      supports={supports}
      pageTitle={pageTitle}
    />
  );
}

Portfolio.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  projects: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string,
          featuredImage: PropTypes.shape({
            node: PropTypes.shape({
              sourceUrl: PropTypes.string,
            }),
          }),
          slug: PropTypes.string.isRequired,
          supports: PropTypes.shape({
            edges: PropTypes.arrayOf(
              PropTypes.shape({
                node: PropTypes.shape({
                  name: PropTypes.string,
                }),
              }),
            ),
          }),
        }),
      }),
    ),
  }).isRequired,
  supports: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
  }).isRequired,
};

export async function getStaticProps() {
  const projects = await getPortfolioProjects();

  return {
    props: {
      projects: projects.projets,
      supports: projects.supports,
      pageTitle: 'Portfolio',
    },
  };
}
