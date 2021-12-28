import PropTypes from 'prop-types';
import SectionTitle from '../../components/SectionTitle';
import { getPortfolioProjects } from '../../lib/api';
import ProjectItem from '../../components/items/ProjectItem';

export default function Portfolio({ projects: { edges } }) {
  return (
    <div className="container">
      <SectionTitle
        content={"Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."}
        title="Portfolio"
      />

      <div className="grid grid-cols-3">
        {edges.length > 0 && edges.map(({ node }) => (
          <ProjectItem
            key={node.id}
            image={node.featuredImage.node.sourceUrl}
            title={node.title}
            slug={node.slug}
            category={node.supports?.edges[0]?.node?.name}
          />
        ))}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
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
};

export async function getStaticProps() {
  const projects = await getPortfolioProjects();

  return {
    props: {
      projects,
    },
  };
}
