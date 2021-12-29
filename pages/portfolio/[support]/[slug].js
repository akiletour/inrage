import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Image from 'next/image';
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
          <div className="flex items-center mb-10 flex-col md:flex-row">
            <div className="md:w-2/5 text-center md:text-right">
              <div className="text-4xl text-white font-bold">{post.title}</div>
              <a className="block text-3xl" href={post.detail.websiteLink} target="_blank" rel="noreferrer nofollow">
                {post.detail.websiteLink.replace(/(^\w+:|^)\/\//, '')}
              </a>
              <div className="my-4 text-lg">{post.detail.excerpt}</div>

              <div className="my-4">
                <div className="text-white text-xl font-light uppercase tracking-widest">Date</div>
                <div className="text-white font-bold text-3xl">{post.detail.year}</div>
              </div>

              <div className="my-4">
                <div className="text-white text-xl font-light uppercase tracking-widest mb-2">Technologies</div>
                <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
                  {post.technologies.edges.map((techno) => (
                    <div key={techno.node.name} className="flex items-center flex-col w-[80px] text-center">
                      {techno.node.acfDetail?.image?.sourceUrl && (
                        <div className="w-6 h-6 relative">
                          <Image
                            src={techno.node.acfDetail.image.sourceUrl}
                            layout="fill"
                            alt={techno.node.name}
                          />
                        </div>
                      )}

                      <div className="mt-1">{techno.node.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-white text-xl font-light uppercase tracking-widest">
                  Missions
                </div>
                <div>
                  {post.detail.missions.split('<br />').map((mission) => (
                    <div key={mission}>{mission}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-3/5 mt-4 md:mt-0 md:pl-4">
              <Image
                src={post.featuredImage.node.sourceUrl}
                width={640}
                height={1136}
                alt={post.title}
              />
            </div>
          </div>

          <SectionTitle
            content={`Retrouvez des projets similaires développés avec ${post.supports.edges[0].node.name} qui pourrait correspondre à ${post.title}`}
            title={post.supports.edges[0].node.name}
          />

          <div className="grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-4">
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
    technologies: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string.isRequired,
          acfDetail: PropTypes.shape({
            image: PropTypes.shape({
              sourceUrl: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired).isRequired,
    }).isRequired,
    detail: PropTypes.shape({
      year: PropTypes.string.isRequired,
      missions: PropTypes.string.isRequired,
      websiteLink: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
    featuredImage: PropTypes.shape({
      node: PropTypes.shape({
        sourceUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
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
