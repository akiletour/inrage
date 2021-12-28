import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getAllProjectsWithSlug, getSingleProject } from '../../../lib/api';

export default function PortfolioDetail({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? <p>Chargement en cours...</p> : (
        <div>
          {post.title}
        </div>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSingleProject(params.slug);
  return {
    props: {
      post: data,
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
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
