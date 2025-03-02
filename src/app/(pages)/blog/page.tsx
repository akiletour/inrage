import ArticleItem from '@component/items/ArticleItem'
import Layout from '@component/Layout'
import { getCanonicalUrl, RouteLink } from '@lib/route'
import { ArticleList, List } from '@type/graphql'
import { fetcher } from '@util/index'

export const metadata = {
  title: 'Liste des articles de développement - inRage',
  description:
    'Passionné par les nouvelles technologies, J&#039;adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.blog),
  },
}

const allPosts = (): Promise<List<ArticleList>> =>
  fetcher(`query posts {
  posts(first: 200) {
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

export default async function BlogList() {
  const { data } = await allPosts()
  return (
    <Layout title="Blog sur le développement web">
      <div className="container mb-10">
        <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
          {data?.posts?.edges.map(
            ({ node: { title, slug, excerpt, date, featuredImage } }) => (
              <ArticleItem
                slug={slug}
                key={slug}
                featuredImage={featuredImage}
                title={title}
                excerpt={excerpt}
                date={date}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  )
}
