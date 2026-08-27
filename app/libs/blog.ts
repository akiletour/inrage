import { getAllMdxBy, getSingleMdx } from '@util/mdx'

export const getSingleBlogItem = async (slug: string) => {
  const item = await getSingleMdx<'blog'>('blog', slug)

  if (!item) {
    return { post: null, posts: [] }
  }

  return {
    post: {
      slug,
      title: item.metadata.title,
      content: item.content,
      seo: {
        title: item.metadata.title,
        metaDesc: item.metadata.excerpt,
      },
    },
    posts: await getBlogItems(2, 'random', slug),
  }
}

export const getBlogItems = async (
  limit: number = -1,
  sort: 'random' | 'date' = 'date',
  excludeSlug?: string
) => {
  const items = await getAllMdxBy({
    frontmatterKey: 'date',
    type: 'blog',
    filterKey: 'title',
    currentSlug: excludeSlug,
    limit,
    sort,
  })

  return items.map((item) => ({
    title: item.title,
    slug: item.slug,
    thumbnail: item.frontmatter.thumbnail,
    excerpt: item.frontmatter.excerpt,
    date: item.frontmatter.date,
  }))
}
