import { getAllMdxBy, getSingleMdx } from '@util/mdx'
import { ArticleList, List } from '@type/graphql'
import { fetcher } from '@/utils'

const getSingleGQLBlogItem = async (slug: string) => {
  const item = await fetcher(
    `query getSingleArticle($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        databaseId
        slug
        date
        excerpt
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
          }
        }
        seo {
          title
          metaDesc
          canonical
        }
      }
  }`,
    { id: slug }
  )

  const data = item.data.post

  if (!data) {
    return null
  }

  return {
    id: data.id,
    databaseId: data.databaseId,
    title: data.title,
    slug: data.slug,
    content: data.content,
    seo: {
      title: data.seo.title,
      metaDesc: data.seo.metaDesc,
      canonical: data.seo.canonical,
    },
  }
}

const getSingleMdxBlogItem = async (slug: string) => {
  const item = await getSingleMdx<'blog'>('blog', slug)

  if (!item) {
    return null
  }

  return {
    id: slug,
    databaseId: 0,
    title: item.metadata.title,
    slug: slug,
    content: item.content,
    seo: {
      title: item.metadata.title || '',
      metaDesc: item.metadata.excerpt,
      canonical: '',
    },
  }
}

export const getSingleBlogItem = async (slug: string) => {
  let post = await getSingleMdxBlogItem(slug)

  if (!post) {
    post = await getSingleGQLBlogItem(slug)
  }

  if (!post) {
    return { post: null, posts: [] }
  }

  return {
    post: {
      ...post,
      content: post.content as unknown as string,
    },
    posts: await getBlogItems(2, 'random', slug),
  }
}

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
  sort: 'random' | 'date' = 'date',
  excludeSlug?: string
) => {
  const prefetchLimit = excludeSlug ? 200 : limit
  const gqlItems = await getGQLBlogItems(limit === -1 ? 200 : prefetchLimit)
  const mdxItems = await getMdxBlogItems(prefetchLimit, sort)

  // Combine and sort items by date
  const combinedItems = [...gqlItems, ...mdxItems]
    .filter((item) => !excludeSlug || item.slug !== excludeSlug)
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
