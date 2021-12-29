import Head from 'next/head';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import SupportSwitcher from './SupportSwitcher';
import ProjectItem from '../items/ProjectItem';

export default function PortfolioLayout({ pageTitle, supports, projects }) {
  return (
    <div className="container">
      <Head>
        <title>Portfolio des projets de création de site Internet</title>
        <meta name="description" content="Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionTitle
        content={"Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."}
        title={pageTitle}
      />

      <SupportSwitcher supports={supports} />

      <div className="grid grid-cols-3">
        {projects.length > 0 && projects.map(({ node }) => (
          <ProjectItem
            key={node.id}
            image={node.featuredImage.node.sourceUrl}
            title={node.title}
            slug={node.slug}
            support={node.supports?.edges[0]?.node}
          />
        ))}
      </div>
    </div>
  );
}

PortfolioLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  supports: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      slug: PropTypes.string,
      featuredImage: PropTypes.shape({
        node: PropTypes.shape({
          sourceUrl: PropTypes.string,
        }),
      }),
      supports: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
          }),
        })),
      }),
    }),
  })).isRequired,
};
