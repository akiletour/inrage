import Link from 'next/link'
import { notFound } from 'next/navigation'

import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import CategoryNav from '@component/portfolio/CategoryNav'
import ListingGrid from '@component/portfolio/ListingGrid'
import { ARCHIVE_BEFORE } from '@component/portfolio/listing-data'
import { getPortfolioItems, portfolioCategories } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props) {
  const params = await props.params

  const category =
    portfolioCategories[params.slug as keyof typeof portfolioCategories]

  if (!category) {
    return {}
  }

  return {
    title: `${category.title} - Portfolio de Pascal Gault, développeur freelance`,
    description: `Réalisations ${category.title} : sites et applications développés par Pascal Gault, développeur web freelance à La Rochelle, pour des clients locaux et nationaux.`,
    alternates: {
      canonical: getCanonicalUrl(RouteLink.portfolioCategory(category.slug)),
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioCategories).map((slug) => ({ slug }))
}

export default async function Page(props: Props) {
  const params = await props.params
  const category =
    portfolioCategories[params.slug as keyof typeof portfolioCategories]

  if (!category) {
    return notFound()
  }

  const items = await getPortfolioItems(-1, params.slug)
  const old = items.filter((item) => item.year < ARCHIVE_BEFORE)
  const archives = old.length >= 3 ? old : []
  const recent =
    archives.length > 0
      ? items.filter((item) => item.year >= ARCHIVE_BEFORE)
      : items
  const pageUrl = getCanonicalUrl(RouteLink.portfolioCategory(category.slug))
  const content = 'content' in category ? category.content : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Portfolio', item: getCanonicalUrl(RouteLink.portfolio) },
        { name: category.title, item: pageUrl },
      ]),
      {
        '@type': 'CollectionPage',
        url: pageUrl,
        name: `Portfolio ${category.title}`,
        about: { '@id': getCanonicalUrl('/#business') },
        hasPart: items.map((item) => ({
          '@type': 'CreativeWork',
          name: item.title,
          url: getCanonicalUrl(
            RouteLink.portfolioProject(item.support.slug, item.slug)
          ),
          dateCreated: String(item.year),
        })),
      },
    ],
  }

  return (
    <Layout
      hero={
        <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
          <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
          <div className="container pt-6 md:pt-12">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                {category.title}
              </h1>
            </Reveal>
            <Reveal i={1}>
              <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                {category.intro}
              </p>
            </Reveal>
            <Reveal i={2} className="mt-10">
              <CategoryNav
                current={RouteLink.portfolioCategory(category.slug)}
              />
            </Reveal>
          </div>
        </section>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container pt-4 pb-20 md:pb-28">
        <ListingGrid projects={recent} eager={3} />
      </section>

      {content && (
        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
          <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                {content.expertise.title}
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                {content.expertise.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  {content.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="home-link"
                    >
                      {link.label}
                    </Link>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {content && (
        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                {content.local.title}
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                {content.local.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  <Link href={RouteLink.contact} className="home-link">
                    Parler de votre projet
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {archives.length > 0 && (
        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="container">
            <SectionHeading
              text={`Les projets ${category.title} d’avant ${ARCHIVE_BEFORE}. Certains ont été refaits depuis par d’autres, les fiches racontent ce qui a été fait à l’époque.`}
            >
              Archives
            </SectionHeading>
            <div className="mt-14">
              <ListingGrid projects={archives} muted />
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
