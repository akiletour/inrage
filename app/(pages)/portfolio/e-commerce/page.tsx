import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import Layout from '@component/Layout'
import CategoryNav from '@component/portfolio/CategoryNav'
import ListingGrid from '@component/portfolio/ListingGrid'
import { getPortfolioItems, portfolioCategories } from '@lib/portfolio'
import { RouteLink } from '@lib/router'
import {
  generateEcommerceJsonLd,
  generateEcommerceMetadata,
  getEcommerceOfferings,
  getEcommerceTechnologies,
} from '@util/seo-generators'

export const metadata = generateEcommerceMetadata()

export default async function Page() {
  const projects = await getPortfolioItems(-1, 'e-commerce')
  const technologies = getEcommerceTechnologies()
  const offerings = getEcommerceOfferings()
  const category = portfolioCategories['e-commerce']
  const jsonLd = generateEcommerceJsonLd()

  return (
    <Layout
      hero={
        <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
          <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
          <div className="container pt-6 md:pt-12">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                Portfolio e-commerce Prestashop et WooCommerce
              </h1>
            </Reveal>
            <Reveal i={1}>
              <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                {projects.length} boutiques en ligne Prestashop et WooCommerce,
                B2C et B2B : création, refonte, migration, import de catalogue
                et liaison avec les outils de gestion. Les fiches détaillent les
                intégrations réalisées et les contraintes de chaque catalogue.
              </p>
            </Reveal>
            <Reveal i={2} className="mt-10">
              <CategoryNav
                current={`${RouteLink.portfolio}/${category.slug}`}
              />
            </Reveal>
          </div>
        </section>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container pt-4 pb-20 md:pb-28">
        <ListingGrid projects={projects} eager={3} />
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Expertise e-commerce à La Rochelle et en Charente-Maritime
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Développeur freelance basé à La Rochelle, je crée, migre et
                optimise des boutiques Prestashop et WooCommerce depuis 2008.
                Les réalisations ci-dessus comptent des migrations de Prestashop
                vers WooCommerce, des boutiques B2B sur mesure, des
                optimisations de performance et des intégrations avec des ERP et
                des logiciels de caisse.
              </p>
              <p>
                Les prestations correspondantes sont décrites sur la{' '}
                <Link
                  href={RouteLink.prestationPrestashop}
                  className="home-link"
                >
                  page Prestashop
                </Link>{' '}
                et la{' '}
                <Link
                  href={RouteLink.prestationTmaPrestashop}
                  className="home-link"
                >
                  maintenance Prestashop
                </Link>
                .
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Technologies
                  </h3>
                  <ul className="home-list mt-3 space-y-2 text-(--home-muted)">
                    {technologies.map((tech) => (
                      <li key={tech.name}>
                        {tech.versions
                          ? `${tech.name} (${tech.versions})`
                          : tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Services</h3>
                  <ul className="home-list mt-3 space-y-2 text-(--home-muted)">
                    {offerings.map((offering) => (
                      <li key={offering.name}>{offering.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Pourquoi un développeur e-commerce à La Rochelle
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Basé à La Rochelle, je suis disponible pour des rendez-vous dans
                toute la Charente-Maritime. Cette proximité facilite les
                échanges sur le catalogue, la logistique et les moyens de
                paiement, qui sont les sujets où une boutique se joue.
              </p>
              <p>
                Les migrations complexes et les optimisations de performance
                sont les interventions que je mène le plus souvent, sur des
                boutiques que j’ai créées comme sur des boutiques reprises. Le
                code livré est versionné, testé et documenté pour être repris
                par un autre développeur si besoin.
              </p>
              <p>
                <Link href={RouteLink.contact} className="home-link">
                  Parler de votre boutique
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
