import ArticleItem from '@component/items/ArticleItem'
import Layout from '@component/Layout'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { getBlogItems } from '@lib/blog'

export const metadata = {
  title: 'Liste des articles de développement - inRage',
  description:
    'Passionné par les nouvelles technologies, J&#039;adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.blog),
  },
}

export default async function BlogList() {
  const data = await getBlogItems(-1)
  return (
    <Layout title="Blog sur le développement web">
      <div className="container mb-10">
        <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
          {data.map(({ title, slug, excerpt, date, thumbnail }) => (
            <ArticleItem
              slug={slug}
              key={slug}
              featuredImage={thumbnail}
              title={title}
              excerpt={excerpt}
              date={date}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
