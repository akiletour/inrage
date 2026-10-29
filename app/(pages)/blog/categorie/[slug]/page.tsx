import { notFound } from 'next/navigation'

import BlogListing from '@component/blog/BlogListing'
import { BLOG_CATEGORIES, blogCategoryBySlug, getBlogItems } from '@lib/blog'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'

type Props = {
  params: Promise<{ slug: string }>
}

async function hasArticles(name: string) {
  const items = await getBlogItems(1, 'date', undefined, name)
  return items.length > 0
}

export async function generateStaticParams() {
  const params = []
  for (const category of BLOG_CATEGORIES) {
    if (await hasArticles(category.name)) {
      params.push({ slug: category.slug })
    }
  }
  return params
}

export async function generateMetadata(props: Props) {
  const { slug } = await props.params
  const category = blogCategoryBySlug(slug)
  if (!category) {
    return {}
  }
  return {
    title: `Articles ${category.name} | Blog inRage`,
    description: `Tutoriels et retours d'expérience ${category.name} de Pascal Gault, développeur freelance à La Rochelle.`,
    alternates: {
      canonical: getCanonicalUrl(RouteLink.blogCategory(category.slug)),
    },
  }
}

export default async function BlogCategoryPage(props: Props) {
  const { slug } = await props.params
  const category = blogCategoryBySlug(slug)
  if (!category || !(await hasArticles(category.name))) {
    return notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Blog', item: getCanonicalUrl(RouteLink.blog) },
        {
          name: category.name,
          item: getCanonicalUrl(RouteLink.blogCategory(category.slug)),
        },
      ]),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <BlogListing active={category} />
    </>
  )
}
