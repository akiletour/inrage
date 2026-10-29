import Link from 'next/link'

import ArticleCard from '@component/blog/ArticleCard'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import { BLOG_CATEGORIES, BlogCategory, getBlogItems } from '@lib/blog'
import { RouteLink } from '@lib/router'

export default async function BlogListing({
  active,
}: {
  active?: BlogCategory
}) {
  const items = await getBlogItems()
  const categories = BLOG_CATEGORIES.map((category) => ({
    ...category,
    count: items.filter((item) => item.category === category.name).length,
  })).filter((category) => category.count > 0)
  const list = active
    ? items.filter((item) => item.category === active.name)
    : items
  const featured = active ? undefined : list[0]
  const rest = active ? list : list.slice(1)
  const firstYear = Math.min(
    ...items.map((item) => new Date(item.date).getFullYear())
  )

  return (
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
                {items.length} articles depuis {firstYear}, écrits en maintenant
                150 sites : des tutoriels WordPress, Contact Form 7 et
                Prestashop, des procédures serveur, et des retours d’expérience.
                Chaque article indique son temps de lecture.
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
                      href: RouteLink.blogCategory(category.slug),
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
      {featured ? (
        <>
          <section className="container pt-4 pb-16 md:pb-24">
            <ArticleCard article={featured} featured />
          </section>
          <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
            <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
            <div className="container">
              <SectionHeading text="Du plus récent au plus ancien. Les articles sur Contact Form 7 et les serveurs sont les plus lus.">
                Tous les articles
              </SectionHeading>
              <ul className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((article, i) => (
                  <li key={article.slug}>
                    <ArticleCard article={article} i={i} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      ) : (
        <section className="container pt-4 pb-20 md:pb-28">
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <li key={article.slug}>
                <ArticleCard article={article} i={i} />
              </li>
            ))}
          </ul>
        </section>
      )}

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
                Je n’écris pas pour publier. Chaque article vient d’un problème
                rencontré sur un site que je maintiens ou que je développe : un
                formulaire Contact Form 7 à personnaliser, un serveur MySQL à
                répliquer après l’incendie d’OVH, une faille PHP à corriger sur
                tout le parc en une nuit. Les procédures sont celles que
                j’applique.
              </p>
              <p>
                Si l’un de ces sujets touche votre site, les{' '}
                <Link href={RouteLink.prestationTma} className="home-link">
                  forfaits de maintenance
                </Link>{' '}
                couvrent exactement ce travail, et je réponds aux questions par{' '}
                <Link href={RouteLink.contact} className="home-link">
                  le formulaire de contact
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
