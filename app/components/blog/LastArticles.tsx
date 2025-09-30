import ArticleItem from '@component/items/ArticleItem'
import { getBlogItems } from '@lib/blog'

export default async function LastArticles() {
  const items = await getBlogItems(2, 'date')

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16 lg:-mb-16 mt-12">
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
