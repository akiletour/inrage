import Image from 'next/image'
import sanitize from 'sanitize-html'

import PostBody from '@component/blog/PostBody'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import {
  getCanonicalUrl,
  replaceBackendUrlContent,
  RouteLink,
} from '@lib/router'
import { ProjectsSlugs, SingleProject } from '@type/graphql/portfolio'
import { fetcher } from '@util/index'

type Props = {
  params: Promise<{
    project: string
  }>
}

const getAllProjectsSlugs = (): Promise<ProjectsSlugs> =>
  fetcher(`query projectSlugs {
  projets(first: 100) {
    edges {
      node {
        slug
        supports {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
}`)

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const { data } = await getAllProjectsSlugs()

  return data.projets.edges.map(({ node }) => ({
    slug: node.supports.edges[0]?.node.slug,
    project: node.slug,
  }))
}

const getSingleProject = (slug: string): Promise<SingleProject> =>
  fetcher(
    `query ProjectBySlug($id: ID!) {
  projet(id: $id, idType: SLUG) {
    id
    title
    slug
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    technologies {
      edges {
        node {
          name
          acfDetail {
            image {
              sourceUrl
            }
          }
        }
      }
    }
    supports {
      edges {
        node {
          name
          slug
        }
      }
    }
    detail {
      websiteLink
      year
      missions
      excerpt
    }
  }
  projets(where: { notIn: [$id] }, first: 1000) {
    edges {
      node {
        id
        title
        slug
        status
        featuredImage {
          node {
            sourceUrl
          }
        }
        supports {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
}`,
    { id: slug }
  )

export async function generateMetadata(props: Props) {
  const params = await props.params
  const { data } = await getSingleProject(params.project)
  return {
    title: `${data.projet.title} - Portfolio`,
    description: data.projet.detail.excerpt,
    alternates: {
      canonical: getCanonicalUrl(
        `${RouteLink.portfolio}/${data.projet.supports.edges[0]?.node.slug}/${data.projet.slug}`
      ),
    },
  }
}

export default async function Page(props: Props) {
  const params = await props.params
  const {
    data: { projet: data, projets: relatedRawProjects },
  } = await getSingleProject(params.project)

  const relatedProjects = relatedRawProjects.edges
    .filter((r) => {
      if (r.node.supports.edges[0] && data.supports.edges[0]) {
        return (
          r.node.supports.edges[0].node.slug ===
            data.supports.edges[0].node.slug && data.slug !== r.node.slug
        )
      }
      return false
    })
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <Layout
      breadcrumbs={[
        { link: RouteLink.portfolio, title: 'Portfolio' },
        {
          link: `${RouteLink.portfolio}/${data?.supports?.edges[0]?.node?.slug}`,
          title: data.supports.edges[0]?.node.name ?? '',
        },
      ]}
      title={data.title}
    >
      <div className="container">
        <div className="flex items-center mb-10 flex-col md:flex-row">
          <div className="md:w-2/5 text-center md:text-right">
            <div className="text-4xl text-white font-bold">{data.title}</div>

            <a
              className="block text-3xl"
              href={data.detail.websiteLink}
              target="_blank"
              rel="noreferrer nofollow"
            >
              {data.detail.websiteLink.replace(/(^\w+:|^)\/\//, '')}
            </a>

            <div className="my-4 text-lg">
              {sanitize(data.detail.excerpt, {
                allowedTags: [],
              })}
            </div>

            <div className="my-4">
              <div className="text-white text-xl font-light uppercase tracking-widest">
                Date
              </div>
              <div className="text-white font-bold text-3xl">
                {data.detail.year}
              </div>
            </div>

            <div className="my-4">
              <div className="text-white text-xl font-light uppercase tracking-widest mb-2">
                Technologies
              </div>
              <div className="text-white font-medium text-sm flex space-x-2 justify-center flex-wrap md:justify-end">
                {data.technologies.edges.map((techno) => (
                  <div
                    key={techno.node.name}
                    className="flex items-center flex-col w-[80px] text-center"
                  >
                    {techno.node.acfDetail?.image?.sourceUrl && (
                      <div className="w-6 h-6 relative">
                        {/* @ts-ignore */}
                        <Image
                          src={techno.node.acfDetail.image.sourceUrl}
                          alt={techno.node.name}
                          fill
                          sizes="100vw"
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
                {data.detail.missions.split('<br />').map((mission) => (
                  <div key={mission}>{mission}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-3/5 mt-4 md:mt-0 md:pl-4">
            <Image
              src={data.featuredImage.node.sourceUrl}
              width={640}
              height={1136}
              alt={data.title}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>

        {data.content && (
          <div className="my-8">
            <PostBody content={replaceBackendUrlContent(data?.content) || ''} />
          </div>
        )}

        <SectionTitle
          content={`Retrouvez des projets similaires développés avec ${data?.supports?.edges[0]?.node.name} qui pourrait correspondre à ${data.title}`}
          title={data?.supports?.edges[0]?.node.name || ''}
        />

        <div className="grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4 mt-4">
          {relatedProjects.length > 0 &&
            relatedProjects.map(({ node }) => (
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
    </Layout>
  )
}
