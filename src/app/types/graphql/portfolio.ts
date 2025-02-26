import { FeaturedImageNode, ProjectList } from '@type/graphql'

export type EntriesType = Array<{
  id: number
  name: string
  excerpt: string
  values: Array<string | boolean>
}>

export interface ProjectsSlugs {
  data: {
    projets: {
      edges: Array<{
        node: {
          slug: string
          supports: {
            edges: Array<{
              node: {
                slug: string
              }
            }>
          }
        }
      }>
    }
  }
}

export interface SupportProjects {
  data: {
    support: {
      id: string
      name: string
      slug: string
      excerpt: string
      projets: {
        edges: Array<{
          node: ProjectList
        }>
      }
    }
  }
}

export interface PortfolioCategory {
  slug: string
  name: string
  id: number
  acfSupport: {
    image: {
      sourceUrl: string
    }
  }
}

interface TechnologyType {
  name: string
  acfDetail: {
    image: {
      sourceUrl: string
    }
  }
}

export interface SingleProject {
  data: {
    projet: {
      id: string
      title: string
      slug: string
      content: string | null
      featuredImage: FeaturedImageNode
      technologies: {
        edges: Array<{
          node: TechnologyType
        }>
      }
      supports: {
        edges: Array<{
          node: {
            name: string
            slug: string
          }
        }>
      }
      detail: {
        websiteLink: string
        year: string
        missions: string
        excerpt: string
      }
    }
    projets: {
      edges: Array<{
        node: {
          slug: string
          title: string
          id: number
          featuredImage: {
            node: {
              sourceUrl: string
            }
          }
          support: {
            edges: Array<{
              node: {
                slug: string
              }
            }>
          }

          supports: {
            edges: Array<{
              node: {
                name: string
                slug: string
              }
            }>
          }
        }
      }>
    }
  }
}
