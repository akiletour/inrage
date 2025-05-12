import Layout from '@component/Layout'
import SupportSwitcher from '@component/portfolio/SupportSwitcher'
import SectionTitle from '@component/SectionTitle'
import { getPortfolioCategories } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { SupportProjects } from '@type/graphql/portfolio'
import { fetcher } from '@util/index'

import PortfolioGrid from '../PortfolioGrid'

type Props = {
  params: Promise<{
    slug: string
  }>
}

const getData = (category: string): Promise<SupportProjects> =>
  fetcher(
    `query PortfolioProjects($id: ID!) {
      support(id: $id, idType: SLUG) {
        id
        slug
        name
        projets(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
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
      }
    }`,
    { id: category }
  )

export async function generateMetadata(props: Props) {
  const params = await props.params
  const { data } = await getData(params.slug)
  return {
    title: `${data.support.name} - Portfolio`,
    description: data.support.excerpt,
    alternates: {
      canonical: getCanonicalUrl(`${RouteLink.portfolio}/${data.support.slug}`),
    },
  }
}

export async function generateStaticParams() {
  const { data } = await getPortfolioCategories()

  return (
    data?.supports?.edges.map(({ node }) => ({
      slug: node.slug,
    })) ?? []
  )
}

export default async function Page(props: Props) {
  const params = await props.params
  const { data } = await getData(params.slug)

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]}
      title={data.support.name}
    >
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          }
          title={data.support.name}
        />
        <SupportSwitcher pathname={`/portfolio/${params.slug}`} />

        <PortfolioGrid projects={data.support.projets.edges} />
      </div>
    </Layout>
  )
}
