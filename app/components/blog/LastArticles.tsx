import ArticleItem from '@component/items/ArticleItem'
import { getBlogItems } from '@lib/blog'

export default async function LastArticles() {
  const items = await getBlogItems(2, 'date')

  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8 lg:-mb-8 mt-6">
      {items.map(({ slug, title, thumbnail, excerpt, date }) => (
        <div key={slug}>
          <ArticleItem
            slug={slug}
            featuredImage={thumbnail}
            title={title}
            date={date}
            excerpt={excerpt}
          />
        </div>
      ))}
    </div>
  )
}
