import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import sanitize from 'sanitize-html';

import ProjectItem from '@component/items/ProjectItem';
import Layout from '@component/layouts/Layout';
import SectionTitle from '@component/SectionTitle';
import { getAllProjectsWithSlug, getSingleProject } from '@lib/portfolio';
import { RouteLink } from '@lib/route';
import { ProjectItemType } from '@type/portfolio';
import Custom404 from 'pages/404';

type Props = {
  post: {
    slug: string;
    title: string;
    technologies: {
      edges: Array<{
        node: {
          name: string;
          acfDetail: {
            image: {
              sourceUrl: string;
            };
          };
        };
      }>;
    };
    detail: {
      excerpt: string;
      websiteLink: string;
      year: string;
      missions: string;
    };
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    supports: {
      edges: Array<{
        node: {
          name: string;
        };
      }>;
    };
  };
  similarProjects: ProjectItemType[];
};

export default function PortfolioDetail({ post, similarProjects }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <Custom404 />;
  }

  return (
    <Layout>
      <div className="container">
        {router.isFallback ? (
          <p>Chargement en cours...</p>
        ) : (
          <div>
            <NextSeo
              title={`${post.title} - Portfolio`}
              description={post.detail.excerpt}
            />
            <div className="flex items-center mb-10 flex-col md:flex-row">
              <div className="md:w-2/5 text-center md:text-right">
                <div className="text-4xl text-white font-bold">
                  {post.title}
                </div>
                <a
                  className="block text-3xl"
                  href={post.detail.websiteLink}
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  {post.detail.websiteLink.replace(/(^\w+:|^)\/\//, '')}
                </a>
                <div className="my-4 text-lg">
                  {sanitize(post.detail.excerpt, {
                    allowedTags: [],
                  })}
                </div>

                <div className="my-4">
                  <div className="text-white text-xl font-light uppercase tracking-widest">
                    Date
                  </div>
                  <div className="text-white font-bold text-3xl">
                    {post.detail.year}
                  </div>
                </div>

                <div className="my-4">
                  <div className="text-white text-xl font-light uppercase tracking-widest mb-2">
                    Technologies
                  </div>
                  <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
                    {post.technologies.edges.map((techno) => (
                      <div
                        key={techno.node.name}
                        className="flex items-center flex-col w-[80px] text-center"
                      >
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
              content={`Retrouvez des projets similaires développés avec ${post?.supports?.edges[0]?.node.name} qui pourrait correspondre à ${post.title}`}
              title={post?.supports?.edges[0]?.node.name || ''}
            />

            <div className="grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-4">
              {similarProjects.length > 0 &&
                similarProjects.map(({ node }) => (
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
    </Layout>
  );
}
export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { slug: string };
  preview?: boolean;
}) => {
  const { projet, projets } = await getSingleProject(params.slug, preview);
  if (!projet) {
    return {
      props: {
        post: null,
        similarProjects: [],
      },
    };
  }
  return {
    props: {
      post: projet,
      pageTitle: projet.title,
      similarProjects: projets.edges
        .filter((r: { node: { supports: { edges: ProjectItemType[] } } }) => {
          if (r?.node?.supports?.edges[0]) {
            return (
              r.node.supports.edges[0].node.slug ===
              projet.supports.edges[0].node.slug
            );
          }

          return false;
        })
        .sort(() => 0.5 - Math.random())
        .slice(0, 4),
      breadcrumb: [
        {
          link: RouteLink.portfolio,
          title: 'Portfolio',
        },
        {
          link: `${RouteLink.portfolio}/${projet.supports.edges[0].node.slug}`,
          title: projet.supports.edges[0].node.name,
        },
      ],
    },
  };
};

type StaticProps = {
  node: {
    slug: string;
    supports: {
      edges: Array<{
        node: {
          slug: string;
        };
      }>;
    };
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllProjectsWithSlug();

  return {
    paths:
      allPosts.edges.map(
        ({ node }: StaticProps) =>
          `/portfolio/${
            node?.supports?.edges[0]
              ? `${node.supports.edges[0].node.slug}/`
              : ''
          }${node.slug}`
      ) || [],
    fallback: true,
  };
}
