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
export const portfolioCategories = {
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    icon: 'creation-wordpress.webp',
  },
  'application-web': {
    title: 'Application Web',
    slug: 'application-web',
    icon: 'developpement-application-web.webp',
  },
  prestashop: {
    title: 'PrestaShop',
    slug: 'prestashop',
    icon: 'creation-prestashop.webp',
  },
}


export const getPortfolioCategories = async () => {
  return Object.values(portfolioCategories)
}
