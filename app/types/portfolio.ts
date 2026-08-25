export interface ProjectList {
  title: string
  slug: string
  thumbnail: string
  support: {
    title: string
    slug: string
  }
}

export type EntriesType = Array<{
  id: number
  name: string
  excerpt: string
  values: Array<string | boolean>
}>
