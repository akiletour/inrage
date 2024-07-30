export type FeaturedImageNode = {
  node: {
    sourceUrl: string
  }
}

export interface ProjectList {
  id: string
  title: string
  slug: string
  status: "publish" | "draft" | "private" | "future"
  featuredImage: FeaturedImageNode
  supports: {
    edges: Array<{
      node: {
        name: string
        slug: string
      }
    }>
  }
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
