import { FeaturedImageNode } from '@type/graphql'

export interface BlogPostsSlugs {
  data: {
    posts: {
      edges: Array<{
        node: {
          slug: string
        }
      }>
    }
  }
}

export interface SinglePostType {
  data: {
    post: {
      id: string
      databaseId: number
      content: string
      title: string
      slug: string
      seo: {
        title: string
        metaDesc: string
        canonical: string
      }
    }

    posts: {
      edges: Array<{
        node: {
          id: string
          slug: string
          featuredImage: FeaturedImageNode
          title: string
          date: string
          excerpt: string
        }
      }>
    }
  }
}
