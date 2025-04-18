import { List } from '@type/graphql'
import { PortfolioCategory, SupportProjects } from '@type/graphql/portfolio'
import { fetcher } from '@util/index'

export const getLastProjectsBySupports = (
  slug: string
): Promise<SupportProjects> =>
  fetcher(
    `query LastProjectBySupport($id: ID!) {
  support(id: $id, idType: SLUG) {
    id
    projets(first: 4) {
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
    {
      id: slug,
    }
  )

export const getPortfolioCategories = (): Promise<List<PortfolioCategory>> =>
  fetcher(`query PortfolioCategories {
  supports {
    edges {
      node {
        slug
        name
        id
        acfSupport {
          image {
            sourceUrl
          }
        }
      }
    }
  }
}`)
