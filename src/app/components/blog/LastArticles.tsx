import ArticleItem from '@component/items/ArticleItem'
import { ArticleList, List } from '@type/graphql'
import { fetcher } from '@util/index'

export const getLatestPosts = (): Promise<List<ArticleList>> =>
  fetcher(`query posts {
  posts(first: 2) {
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

export default async function LastArticles() {
  const { data } = await getLatestPosts()

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8 lg:-mb-8 mt-6">
      {data?.posts?.edges.map(
        ({ node: { slug, title, featuredImage, excerpt, date } }) => (
          <div key={slug}>
            <ArticleItem
              slug={slug}
              featuredImage={featuredImage}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          </div>
        )
      )}
    </div>
  )
}
