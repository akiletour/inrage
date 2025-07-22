import { getAllMdxBy } from '@util/mdx'
import { ArticleList, List } from '@type/graphql'
import { fetcher } from '@/utils'

const getGQLBlogItems = async (limit: number = 200) => {
  const getLatestPosts: List<ArticleList> = await fetcher(`query posts {
  posts(first: ${limit}) {
    edges {
      node {
        title
        slug
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`)

  return (
    getLatestPosts?.data?.posts?.edges.map(({ node }) => ({
      title: node.title,
      slug: node.slug,
      thumbnail: node.featuredImage.node.sourceUrl,
      date: node.date,
      excerpt: node.excerpt,
    })) || []
  )
}

const getMdxBlogItems = async (
  limit: number = -1,
  sort: 'random' | 'date' = 'date'
) => {
  const items = await getAllMdxBy({
    frontmatterKey: 'date',
    type: 'blog',
    filterKey: 'title',
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

export const getBlogItems = async (
  limit: number = -1,
  sort: 'random' | 'date' = 'date'
) => {
  const gqlItems = await getGQLBlogItems(limit === -1 ? 200 : limit)
  const mdxItems = await getMdxBlogItems(limit, sort)

  // Combine and sort items by date
  const combinedItems = [...gqlItems, ...mdxItems]
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0, limit > 0 ? limit : undefined)

  return combinedItems.map(({ title, slug, thumbnail, date, excerpt }) => ({
    title,
    slug,
    thumbnail,
    date,
    excerpt,
  }))
}
