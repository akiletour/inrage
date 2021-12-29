import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getAllProjectsWithSlug, getSingleProject } from '../../../lib/api';
import SectionTitle from '../../../components/SectionTitle';
import ProjectItem from '../../../components/items/ProjectItem';

export default function PortfolioDetail({ post, similarProjects }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="container">
      {router.isFallback ? <p>Chargement en cours...</p> : (
        <div>
          {post.title}

          <SectionTitle
            content={`Retrouvez des projets similaires développés avec ${post.supports.edges[0].node.name} qui pourrait correspondre à ${post.title}`}
            title={post.supports.edges[0].node.name}
          />

          <div>
            <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
              {similarProjects.length > 0 && similarProjects.map(({ node }) => (
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
        </div>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { projet, projets } = await getSingleProject(params.slug);
  return {
    props: {
      post: projet,
      pageTitle: projet.title,
      similarProjects: projets.edges
        .filter((r) => r.node.supports.edges[0].node.slug === projet.supports.edges[0].node.slug)
        .sort(() => 0.5 - Math.random()).slice(0, 4),
      breadcrumb: [{
        link: '/portfolio',
        title: 'Portfolio',
      }, {
        link: `/portfolio/${projet.supports.edges[0].node.slug}`,
        title: projet.supports.edges[0].node.name,
      }],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllProjectsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/portfolio/${node.supports.edges[0].node.slug}/${node.slug}`) || [],
    fallback: true,
  };
}

PortfolioDetail.propTypes = {
  similarProjects: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      supports: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    supports: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          slug: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      })).isRequired,
    }).isRequired,
  }).isRequired,
};
