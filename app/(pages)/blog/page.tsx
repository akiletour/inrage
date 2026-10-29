import '@component/home/home.css'

import Link from 'next/link'

import ArticleCard from '@component/blog/ArticleCard'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import { getBlogItems } from '@lib/blog'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { slugifyHeading } from '@util/headings'

export const metadata = {
  title: 'Blog WordPress, Prestashop et serveurs | inRage',
  description:
    "Tutoriels et retours d'expérience de Pascal Gault, développeur freelance à La Rochelle : WordPress, Contact Form 7, Prestashop, serveurs, et ce que j'apprends en maintenant 150 sites.",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.blog),
  },
}

type Props = {
  searchParams: Promise<{ categorie?: string }>
}

export default async function BlogList(props: Props) {
  const { categorie } = await props.searchParams
  const items = await getBlogItems(-1)
  const categories = [...new Set(items.map((item) => item.category))]
    .filter((category): category is string => Boolean(category))
    .map((category) => ({
      name: category,
      slug: slugifyHeading(category),
      count: items.filter((item) => item.category === category).length,
    }))
    .sort((a, b) => b.count - a.count)
  const active = categories.find((category) => category.slug === categorie)
  const list = active
    ? items.filter((item) => item.category === active.name)
    : items
  const featured = active ? undefined : list[0]
  const rest = active ? list : list.slice(1)
  const firstYear = Math.min(
    ...items.map((item) => new Date(item.date).getFullYear())
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
        ],
      },
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
    <div className="home">
      <Layout
        hero={
          <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
            <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
            <div className="container pt-6 md:pt-12">
              <Reveal>
                <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                  {active ? `Blog : ${active.name}` : 'Blog'}
                </h1>
              </Reveal>
              <Reveal i={1}>
                <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                  {items.length} articles depuis {firstYear}, écrits en
                  maintenant 150 sites : des tutoriels WordPress, Contact Form 7
                  et Prestashop, des procédures serveur, et des retours
                  d’expérience. Chaque article indique son temps de lecture.
                </p>
              </Reveal>
              <Reveal i={2} className="mt-10">
                <nav aria-label="Filtrer les articles">
                  <ul className="flex flex-wrap gap-x-8 gap-y-3">
                    {[
                      {
                        href: RouteLink.blog,
                        label: 'Tous les articles',
                        count: items.length,
                        isActive: !active,
                      },
                      ...categories.map((category) => ({
                        href: `${RouteLink.blog}?categorie=${category.slug}`,
                        label: category.name,
                        count: category.count,
                        isActive: active?.slug === category.slug,
                      })),
                    ].map((entry) => (
                      <li key={entry.href}>
                        <Link
                          href={entry.href}
                          aria-current={entry.isActive ? 'page' : undefined}
                          className={`inline-flex items-baseline gap-2 border-b pb-1 text-base transition-colors ${
                            entry.isActive
                              ? 'border-(--home-orange) text-white'
                              : 'border-transparent text-(--home-muted) hover:text-white'
                          }`}
                        >
                          {entry.label}
                          <span className="home-num text-xs text-(--home-muted)">
                            {entry.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            </div>
          </section>
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {featured && (
          <section className="container pt-4 pb-16 md:pb-24">
            <ArticleCard article={featured} featured />
          </section>
        )}

        <section
          className={
            featured
              ? 'home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32'
              : 'container pt-4 pb-20 md:pb-28'
          }
        >
          {featured && (
            <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
          )}
          <div className={featured ? 'container' : ''}>
            {featured && (
              <SectionHeading text="Du plus récent au plus ancien. Les articles sur Contact Form 7 et les serveurs sont les plus lus.">
                Tous les articles
              </SectionHeading>
            )}
            <ul
              className={`grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3 ${featured ? 'mt-14' : ''}`}
            >
              {rest.map((article, i) => (
                <li key={article.slug}>
                  <ArticleCard article={article} i={i} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                D’où viennent ces articles
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                <p>
                  Je n’écris pas pour publier. Chaque article vient d’un
                  problème rencontré sur un site que je maintiens ou que je
                  développe : un formulaire Contact Form 7 à personnaliser, un
                  serveur MySQL à répliquer après l’incendie d’OVH, une faille
                  PHP à corriger sur tout le parc en une nuit. Les procédures
                  sont celles que j’applique.
                </p>
                <p>
                  Si l’un de ces sujets touche votre site, les{' '}
                  <Link
                    href={RouteLink.prestationTma}
                    className="font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)"
                  >
                    forfaits de maintenance
                  </Link>{' '}
                  couvrent exactement ce travail, et je réponds aux questions en
                  commentaire ou par{' '}
                  <Link
                    href={RouteLink.contact}
                    className="font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)"
                  >
                    le formulaire de contact
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </Layout>
    </div>
  )
}
