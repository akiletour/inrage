import ArticleItem from '@component/items/ArticleItem'
import Layout from '@component/Layout'
import Link from 'next/link'
import SectionTitle from '@component/SectionTitle'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { notFound } from 'next/navigation'
import { getBlogItems, getSingleBlogItem } from '@lib/blog'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const data = await getBlogItems()

  return data.map(({ slug }) => ({
    slug,
  }))
}

const getData = async (slug: string) => await getSingleBlogItem(slug)

type Post = Awaited<ReturnType<typeof getData>>['post']

const AUTHOR_NAME = 'Pascal Gault'

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

const hashString = (str: string): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

const seededShuffle = <T,>(array: T[], seed: string): T[] => {
  const hash = hashString(seed)
  return array
    .map((value, index) => ({
      value,
      sort: Math.sin(hash + index) * 10000,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export async function generateMetadata(props: Props) {
  const params = await props.params
  const { post } = await getData(params.slug)

  if (!post) {
    return {}
  }

  const url = getCanonicalUrl(`${RouteLink.blog}/${post.slug}`)

  return {
    title: post.seo.title,
    description: post.seo.metaDesc,
    authors: [{ name: AUTHOR_NAME, url: getCanonicalUrl(RouteLink.aboutMe) }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.seo.title,
      description: post.seo.metaDesc,
      siteName: 'inRage',
      locale: 'fr_FR',
      publishedTime: post.date,
      authors: [getCanonicalUrl(RouteLink.aboutMe)],
      section: post.category,
      images: [{ url: getCanonicalUrl(post.thumbnail), alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.metaDesc,
      images: [getCanonicalUrl(post.thumbnail)],
    },
  }
}

const buildJsonLd = (post: NonNullable<Post>) => {
  const url = getCanonicalUrl(`${RouteLink.blog}/${post.slug}`)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.seo.metaDesc,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'fr-FR',
        articleSection: post.category,
        image: getCanonicalUrl(post.thumbnail),
        mainEntityOfPage: url,
        author: {
          '@type': 'Person',
          '@id': getCanonicalUrl('/#person'),
          name: AUTHOR_NAME,
          url: getCanonicalUrl(RouteLink.aboutMe),
        },
        publisher: { '@id': getCanonicalUrl('/#business') },
        isPartOf: { '@id': getCanonicalUrl('/#website') },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: getCanonicalUrl(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: getCanonicalUrl(RouteLink.blog),
          },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
}

export default async function Page(props: Props) {
  const params = await props.params
  const { post, posts } = await getData(params.slug)

  if (!post) {
    return notFound()
  }

  const shuffled = seededShuffle(posts, params.slug)
  const relatedPosts = shuffled.slice(0, 2)

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.blog, title: 'Blog' }]}
      title={post.title}
      meta={
        <>
          {post.category && (
            <>
              <span className="font-semibold text-orange">{post.category}</span>
              <span aria-hidden>·</span>
            </>
          )}
          <span>
            Publié par{' '}
            <Link
              href={RouteLink.aboutMe}
              rel="author"
              className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              {AUTHOR_NAME}
            </Link>{' '}
            le{' '}
            <time dateTime={post.date}>
              {dateFormatter.format(new Date(post.date))}
            </time>
          </span>
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(post)) }}
      />
      <div className="container">
        <div className="article mt-6 mb-16 md:mt-10 prose prose-lg prose-invert !max-w-5xl mx-auto">
          <post.content />
        </div>
      </div>

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
