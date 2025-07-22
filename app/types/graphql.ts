export type FeaturedImageNode = {
  node: {
    sourceUrl: string
  }
}

export interface ProjectList {
  title: string
  slug: string
  thumbnail: string
  support: {
    title: string
    slug: string
  }
}

export interface ArticleList {
  title: string
  slug: string
  date: string
  excerpt: string
  featuredImage: FeaturedImageNode
}

export interface List<T> {
  data: Record<
    string,
    {
      edges: Array<{
        node: T
      }>
    }
  >
}
