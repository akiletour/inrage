import { notFound } from 'next/navigation'

import BlogListing from '@component/blog/BlogListing'
import { BLOG_CATEGORIES, blogCategoryBySlug } from '@lib/blog'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd } from '@util/seo-generators'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ slug: category.slug }))
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
  if (!category) {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListing active={category} />
    </>
  )
}
