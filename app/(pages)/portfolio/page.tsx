import Layout from '@component/Layout'
import SupportSwitcher from '@component/portfolio/SupportSwitcher'
import SectionTitle from '@component/SectionTitle'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { List, ProjectList } from '@type/graphql'
import { fetcher } from '@util/index'

import PortfolioGrid from './PortfolioGrid'

export const metadata = {
  title: 'Portfolio des projets de création de site Internet',
  description:
    "Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
}

const getData = (): Promise<List<ProjectList>> =>
  fetcher(`query PortfolioProjects {
  projets(first: 1000, where: { orderby: { field: DATE, order: DESC } }) {
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
}`)

export default async function Page() {
  const { data } = await getData()

  if (!data.projets) {
    return null
  }

  return (
    <Layout title="Portfolio">
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."
          }
          title="Portfolio"
        />
        <SupportSwitcher pathname="/portfolio" />

        <PortfolioGrid projects={data.projets.edges} />
      </div>
    </Layout>
  )
}
