import BlogListing from '@component/blog/BlogListing'
import { getBlogItems } from '@lib/blog'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'

export const metadata = {
  title: 'Blog WordPress, Prestashop et serveurs | inRage',
  description:
    "Tutoriels et retours d'expérience de Pascal Gault, développeur freelance à La Rochelle : WordPress, Contact Form 7, Prestashop, serveurs, et ce que j'apprends en maintenant 150 sites.",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.blog),
  },
}

export default async function BlogList() {
  const items = await getBlogItems()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Blog', item: getCanonicalUrl(RouteLink.blog) },
      ]),
      {
        '@type': 'Blog',
        '@id': `${getCanonicalUrl(RouteLink.blog)}#blog`,
        url: getCanonicalUrl(RouteLink.blog),
        name: 'Blog inRage',
        author: { '@id': getCanonicalUrl('/#person') },
        publisher: { '@id': getCanonicalUrl('/#business') },
        blogPost: items.map((item) => ({
          '@type': 'BlogPosting',
          headline: item.title,
          url: getCanonicalUrl(`${RouteLink.blog}/${item.slug}`),
          datePublished: item.date,
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <BlogListing />
    </>
  )
}
