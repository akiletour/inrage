import '@component/home/home.css'

import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import CategoryNav from '@component/portfolio/CategoryNav'
import FeaturedCases from '@component/portfolio/FeaturedCases'
import ListingGrid from '@component/portfolio/ListingGrid'
import { ARCHIVE_BEFORE, FEATURED } from '@component/portfolio/listing-data'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Portfolio : sites, boutiques et applications réalisés | inRage',
  description:
    'Les sites WordPress, boutiques Prestashop et WooCommerce et applications Symfony et React développés par Pascal Gault, développeur freelance à La Rochelle, depuis 2014.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
}

const linkClass =
  'font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)'

export default async function Page() {
  const items = await getPortfolioItems()
  const featured = FEATURED.map((entry) => {
    const item = items.find((candidate) => candidate.slug === entry.slug)
    return item ? { ...item, note: entry.note } : null
  }).filter((project) => project !== null)
  const featuredSlugs = new Set(featured.map((project) => project.slug))
  const recent = items.filter(
    (item) => item.year >= ARCHIVE_BEFORE && !featuredSlugs.has(item.slug)
  )
  const archives = items.filter((item) => item.year < ARCHIVE_BEFORE)
  const firstYear = Math.min(...items.map((item) => item.year))

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
            name: 'Portfolio',
            item: getCanonicalUrl(RouteLink.portfolio),
          },
        ],
      },
      {
        '@type': 'CollectionPage',
        url: getCanonicalUrl(RouteLink.portfolio),
        name: 'Portfolio inRage',
        about: { '@id': getCanonicalUrl('/#business') },
        hasPart: items.map((item) => ({
          '@type': 'CreativeWork',
          name: item.title,
          url: getCanonicalUrl(
            `${RouteLink.portfolio}/${item.support.slug}/${item.slug}`
          ),
          dateCreated: String(item.year),
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
                  Portfolio
                </h1>
              </Reveal>
              <Reveal i={1}>
                <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                  {items.length} projets livrés depuis {firstYear} : sites
                  WordPress, boutiques Prestashop et WooCommerce, applications
                  Symfony et React, pour des entreprises de La Rochelle et de
                  toute la France. Chaque fiche décrit le contexte, ce qui a été
                  développé et les outils utilisés.
                </p>
              </Reveal>
              <Reveal i={2} className="mt-10">
                <CategoryNav />
              </Reveal>
            </div>
          </section>
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="container pt-4 pb-16 md:pb-24">
          <FeaturedCases projects={featured} />
        </section>

        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
          <div className="container">
            <SectionHeading text="Sites vitrines, boutiques, portails et outils métier livrés ces dernières années, du plus récent au plus ancien.">
              Les autres réalisations
            </SectionHeading>
            <div className="mt-14">
              <ListingGrid projects={recent} eager={3} />
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Ce que le portfolio ne montre pas
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                <p>
                  Ces fiches sont la partie visible. Plus de 150 sites sont sous
                  maintenance inRage, dont la plupart ont été créés par d’autres
                  et ne figurent pas ici. Une partie de mon activité se fait en
                  marque blanche pour des agences, sous leur nom, et plusieurs
                  projets récents sont couverts par un accord de
                  confidentialité.
                </p>
                <p>
                  Le portfolio ne montre pas non plus ce qui tourne derrière :
                  l’infrastructure, la sécurité, l’outillage de maintenance et
                  le tracking. Tout cela est décrit sur la{' '}
                  <Link href={RouteLink.prestations} className={linkClass}>
                    page des prestations
                  </Link>
                  . Pour parler d’un projet, le plus simple reste de{' '}
                  <Link href={RouteLink.contact} className={linkClass}>
                    me contacter
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {archives.length > 0 && (
          <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
            <div className="container">
              <SectionHeading
                text={`Les projets d’avant ${ARCHIVE_BEFORE}, pour la plupart sous Joomla ou sur des versions de WordPress d’époque. Certains ont été refaits depuis par d’autres, les fiches racontent ce qui a été fait à l’époque.`}
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
    </div>
  )
}
