import PostBody from '@component/blog/PostBody'
import PostComments from '@component/blog/PostComments'
import ArticleItem from '@component/items/ArticleItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import {
  getCanonicalUrl,
  replaceBackendUrlContent,
  RouteLink,
} from '@lib/route'
import { BlogPostsSlugs, SinglePostType } from '@type/graphql/blog'
import { fetcher } from '@util/index'

type Props = {
  params: Promise<{
    slug: string
  }>
}

const getAllBlogPostsSlugs = (): Promise<BlogPostsSlugs> => {
  return fetcher(
    `query articlesSlug { posts(first: 100) { edges { node { slug } } } } `
  )
}

export async function generateStaticParams() {
  const { data } = await getAllBlogPostsSlugs()

  return data.posts.edges.map(({ node }) => ({
    slug: node.slug,
  }))
}

const getData = (slug: string): Promise<SinglePostType> =>
  fetcher(
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
      posts {
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
  }`,
    { id: slug }
  )

export async function generateMetadata(props: Props) {
  const params = await props.params
  const {
    data: { post },
  } = await getData(params.slug)

  return {
    title: post.seo.title,
    description: post.seo.metaDesc,
    alternates: {
      canonical: getCanonicalUrl(`${RouteLink.blog}/${post.slug}`),
    },
  }
}

export default async function Page(props: Props) {
  const params = await props.params
  const {
    data: { post, posts },
  } = await getData(params.slug)

  const shuffled = posts.edges
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const relatedPosts = shuffled.slice(0, 2)

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.blog, title: 'Blog' }]}
      title={post.title}
    >
      <div className="container">
        <PostBody content={replaceBackendUrlContent(post.content)} />
      </div>

      <PostComments postDatabaseId={post.databaseId} identifier={post.id} />

      <div className="container">
        <SectionTitle
          content="Retrouvez ci-dessous quelques articles qui pourrait vous intéresser."
          title="Articles reliés"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {relatedPosts.map(
            ({ node: { id, slug, featuredImage, title, date, excerpt } }) => (
              <div key={id}>
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
      </div>
    </Layout>
  )
}
