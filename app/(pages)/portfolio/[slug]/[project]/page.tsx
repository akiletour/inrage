import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Reveal from '@component/home/Reveal'
import Layout from '@component/Layout'
import ListingGrid from '@component/portfolio/ListingGrid'
import {
  getPortfolioItems,
  portfolioCategories,
  portfolioTools,
} from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'
import { getAllMdxSlugs, getSingleMdx } from '@util/mdx'

type Props = {
  params: Promise<{
    project: string
    slug: string
  }>
}

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const projects = await getAllMdxSlugs('portfolio')

  return projects.map((project) => ({
    slug: project.slug,
    project: project.project,
  }))
}

export async function generateMetadata(props: Props) {
  const params = await props.params

  const mdxContent = await getSingleMdx<'portfolio'>(
    'portfolio',
    params.project
  )

  if (!mdxContent) {
    return {}
  }

  const { metadata } = mdxContent

  return {
    title: `${metadata.title} - Portfolio`,
    description: metadata.excerpt ?? '',
    alternates: {
      canonical: getCanonicalUrl(
        RouteLink.portfolioProject(metadata.category, params.project)
      ),
    },
  }
}

export default async function Page(props: Props) {
  const params = await props.params

  const mdxResult = await getSingleMdx<'portfolio'>('portfolio', params.project)

  if (!mdxResult) {
    return notFound()
  }

  const { content: Content, metadata } = mdxResult

  if (metadata.category !== params.slug) {
    return notFound()
  }

  const category =
    portfolioCategories[metadata.category as keyof typeof portfolioCategories]
  const prestation = category.prestation
  const website = metadata.website
    .replace(/(^\w+:|^)\/\//, '')
    .replace(/\/$/, '')
  const tools = metadata.tools
    .map((key) => portfolioTools[key as keyof typeof portfolioTools])
    .filter((tool) => tool !== undefined)

  const relatedProjects = await getPortfolioItems(
    3,
    params.slug,
    params.project,
    'random'
  )

  const pageUrl = getCanonicalUrl(
    RouteLink.portfolioProject(metadata.category, params.project)
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Portfolio', item: getCanonicalUrl(RouteLink.portfolio) },
        {
          name: category.title,
          item: getCanonicalUrl(RouteLink.portfolioCategory(category.slug)),
        },
        { name: metadata.title, item: pageUrl },
      ]),
      {
        '@type': 'CreativeWork',
        name: metadata.title,
        url: pageUrl,
        description: metadata.excerpt ?? metadata.summary,
        dateCreated: String(metadata.year),
        image: getCanonicalUrl(`/images/portfolio/${metadata.image.large}`),
        author: { '@id': getCanonicalUrl('/#business') },
        sameAs: metadata.website,
      },
    ],
  }

  return (
    <Layout
      hero={
        <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-20 md:pb-28">
          <div className="home-beam top-[15%] -left-[20%]" aria-hidden />
          <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
          <div className="container grid items-start gap-12 pt-6 md:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <Reveal>
                <p className="home-num text-sm text-(--home-muted)">
                  <Link
                    href={RouteLink.portfolioCategory(category.slug)}
                    className="transition-colors hover:text-white"
                  >
                    {category.title}
                  </Link>{' '}
                  · {metadata.year}
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                  {metadata.title}
                </h1>
              </Reveal>
              <Reveal i={1}>
                <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                  {metadata.summary}
                </p>
              </Reveal>
              <Reveal i={2}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={metadata.website}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className="home-btn home-btn-shine home-btn-glow"
                  >
                    Voir {website}
                  </a>
                  <Link
                    href={RouteLink.contact}
                    className="home-btn-ghost home-glassy"
                  >
                    Un projet similaire ?
                  </Link>
                </div>
              </Reveal>
              <Reveal i={3}>
                <div className="mt-12 grid gap-10 sm:grid-cols-[1.3fr_1fr]">
                  <div>
                    <h2 className="text-sm font-medium tracking-wide text-white">
                      Ce qui a été fait
                    </h2>
                    <ul className="home-list mt-4 space-y-2 text-sm leading-6 text-white/80">
                      {metadata.actions.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </div>
                  {tools.length > 0 && (
                    <div>
                      <h2 className="text-sm font-medium tracking-wide text-white">
                        Outils
                      </h2>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                        {tools.map((tool) => (
                          <li
                            key={tool.title}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <span className="relative h-6 w-6">
                              <Image
                                src={`/images/portfolio/tools/${tool.icon}`}
                                alt=""
                                fill
                                sizes="24px"
                                className="object-contain"
                              />
                            </span>
                            {tool.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
            <Reveal i={1}>
              <div className="home-frame">
                <div className="home-frame-bar" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  src={`/images/portfolio/${metadata.image.large}`}
                  alt={`Capture de la page d’accueil de ${metadata.title}`}
                  width={649}
                  height={1149}
                  priority
                  sizes="(min-width: 1280px) 550px, (min-width: 1024px) 45vw, 100vw"
                  className="home-frame-shot"
                />
              </div>
            </Reveal>
          </div>
        </section>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-8 md:py-16">
        <div className="article prose prose-lg prose-invert mx-auto max-w-none">
          <Content />
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Un projet du même genre ?
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Décrivez votre activité et ce que le site ou l’application doit
                produire. Je vous réponds dans la journée avec les bonnes
                questions et une première estimation, et le devis détaillé
                arrive sous 24 heures.
              </p>
              <p className="flex flex-wrap gap-x-6 gap-y-2">
                <Link href={prestation.href} className="home-link">
                  {prestation.label}
                </Link>
                <Link href={RouteLink.contact} className="home-link">
                  Me contacter
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="container py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              D’autres projets {category.title}
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <div className="mt-12">
            <ListingGrid projects={relatedProjects} />
          </div>
          <p className="mt-10">
            <Link
              href={RouteLink.portfolioCategory(category.slug)}
              className="home-btn-ghost home-glassy"
            >
              Tous les projets {category.title}
            </Link>
          </p>
        </section>
      )}
    </Layout>
  )
}
