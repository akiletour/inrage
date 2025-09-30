import PostBody from '@component/blog/PostBody'
import PostComments from '@component/blog/PostComments'
import ArticleItem from '@component/items/ArticleItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import {
  getCanonicalUrl,
  replaceBackendUrlContent,
  RouteLink,
} from '@lib/router'
import { notFound } from 'next/navigation'
import { getBlogItems, getSingleBlogItem } from '@lib/blog'

type Props = {
  params: Promise<{
    slug: string
  }>
}

const getAllBlogPostsSlugs = async () => {
  return await getBlogItems()
}

export async function generateStaticParams() {
  const data = await getAllBlogPostsSlugs()

  return data.map(({ slug }) => ({
    slug,
  }))
}

const getData = async (slug: string) => await getSingleBlogItem(slug)

export async function generateMetadata(props: Props) {
  const params = await props.params
  const { post } = await getData(params.slug)

  if (!post) {
    return {}
  }

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
  const { post, posts } = await getData(params.slug)

  if (!post) {
    return notFound()
  }

  const shuffled = posts
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
        {post.databaseId !== 0 ? (
          <PostBody content={replaceBackendUrlContent(post.content)} />
        ) : (
          <div className="my-16 prose prose-lg prose-invert !max-w-5xl mx-auto">
            <post.content />
          </div>
        )}
      </div>

      {post.databaseId !== 0 && (
        <PostComments postDatabaseId={post.databaseId} identifier={post.id} />
      )}

      <div className="container">
        <SectionTitle
          content="Retrouvez ci-dessous quelques articles qui pourraient vous intéresser."
          title="Articles reliés"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {relatedPosts.map(({ slug, thumbnail, title, date, excerpt }) => (
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
      </div>
    </Layout>
  )
}
