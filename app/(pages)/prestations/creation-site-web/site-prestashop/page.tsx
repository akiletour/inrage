import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import ArticleCards from '@component/prestations/ArticleCards'
import {
  CHOICE,
  FAQ,
  PRICES,
  PROJECTS,
  SERVICES,
  STEPS,
} from '@component/prestations/prestashop-data'
import ListingGrid from '@component/portfolio/ListingGrid'
import { getPortfolioItems, pickProjects } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Freelance Prestashop : boutique, modules, migration | inRage',
  description:
    'Développeur Prestashop freelance depuis 2013, de la 1.5 à Prestashop 9 : création de boutique sur mesure, modules, connecteurs ERP et marketplaces, import de catalogue, migration et maintenance. Basé à La Rochelle, toute la France.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationPrestashop),
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([
      { name: 'Prestations', item: getCanonicalUrl(RouteLink.prestations) },
      {
        name: 'Création de site internet',
        item: getCanonicalUrl(RouteLink.prestationWeb),
      },
      {
        name: 'Boutique Prestashop',
        item: getCanonicalUrl(RouteLink.prestationPrestashop),
      },
    ]),
    {
      '@type': 'Service',
      name: 'Développement Prestashop freelance',
      serviceType: 'Création de boutique Prestashop',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: { '@type': 'Country', name: 'France' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Boutique Prestashop sur mesure',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 5000,
            priceCurrency: 'EUR',
          },
        },
      ],
    },
    faqJsonLd(FAQ),
  ],
}

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[10%] -left-[20%]" aria-hidden />
      <div className="home-beam top-[65%] left-[50%]" data-i="3" aria-hidden />
      <div className="container pt-6 md:pt-12">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Freelance Prestashop&nbsp;: développeur expert depuis 2013
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Je développe des boutiques Prestashop depuis la version 1.5
              jusqu’à Prestashop 9, pour des e-commerçants B2C et B2B et pour
              les agences qui me confient leur technique. Thème sur mesure,
              modules, connecteurs ERP et marketplaces, import de catalogue,
              migration et maintenance. Basé à La Rochelle, je travaille avec
              des boutiques dans toute la France.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={RouteLink.contact}
                className="home-btn home-btn-shine home-btn-glow"
              >
                Parler de votre boutique
              </Link>
              <Link
                href={RouteLink.prestationTmaPrestashop}
                className="home-btn-ghost home-glassy"
              >
                Maintenance Prestashop
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default async function PrestationPrestashop() {
  const items = await getPortfolioItems(-1, 'e-commerce')
  const projects = pickProjects(items, PROJECTS)

  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <SectionHeading text="Prestashop est un outil de vente avant d’être un site. Ce que je fais dessus tient en six métiers, et chacun a déjà servi sur de vraies boutiques.">
          Ce que je fais sur Prestashop
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {SERVICES.map((item, i) => (
            <Reveal key={item.title} i={i}>
              <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[280px_1fr]">
                <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                  {item.title}
                </h3>
                <div>
                  <p className="leading-7 text-(--home-muted)">{item.text}</p>
                  {item.href && (
                    <p className="mt-4">
                      <Link href={item.href} className="home-link">
                        {item.hrefText}
                      </Link>
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Trois boutiques Prestashop développées et suivies depuis des années, avec des connecteurs métier que vous ne verrez pas en vitrine mais qui font tourner l’activité.">
            Boutiques Prestashop réalisées
          </SectionHeading>
          <ListingGrid projects={projects} eager={3} className="mt-14" />
          <div className="mt-12 flex justify-center">
            <Link
              href={RouteLink.portfolioCategory('e-commerce')}
              className="home-btn-ghost home-glassy"
            >
              Toutes les réalisations e-commerce
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Prestashop ou WooCommerce
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              La question arrive à chaque premier appel. La réponse dépend de
              votre catalogue et de vos outils, pas d’une préférence.
            </p>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              {CHOICE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href={RouteLink.prestationWordPress} className="home-link">
                Voir la création de site WordPress et WooCommerce
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Une boutique se teste avec de vraies commandes avant d’ouvrir. Voici comment un projet Prestashop se déroule chez inRage.">
            Comment se construit votre boutique
          </SectionHeading>
          <ol className="home-timeline mx-auto mt-14 max-w-3xl">
            {STEPS.map((step, i) => (
              <li key={step.title} className="home-timeline-item">
                <Reveal i={i}>
                  <h3 className="text-xl font-medium text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[60ch] leading-7 text-(--home-muted)">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="prix" className="container scroll-mt-28 py-20 md:py-28">
        <SectionHeading text="Des ordres de grandeur annoncés, un devis détaillé poste par poste sous 24 heures. Prestashop est open source : aucune licence, la boutique vous appartient.">
          Combien coûte une boutique Prestashop
        </SectionHeading>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRICES.map((offer, i) => (
            <Reveal key={offer.name} i={i} className="h-full">
              <Glass className="flex h-full flex-col p-7">
                <h3 className="text-xl font-medium text-white">{offer.name}</h3>
                <p className="home-num mt-3 text-3xl font-semibold text-white">
                  {offer.price}
                </p>
                <p className="mt-4 text-sm leading-6 text-(--home-muted)">
                  {offer.text}
                </p>
                {offer.href && (
                  <p className="mt-auto pt-5">
                    <Link href={offer.href} className="home-link">
                      Les forfaits de maintenance
                    </Link>
                  </p>
                )}
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Pour les agences&nbsp;: sous-traitance Prestashop
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Une partie de mes boutiques Prestashop sont développées pour des
              agences, en marque blanche.
            </p>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              <li>
                Thème développé à partir de vos maquettes, dans votre dépôt Git
                et vos environnements si vous en avez.
              </li>
              <li>
                Modules, connecteurs ERP et migrations vers Prestashop 9 en
                renfort de vos équipes, sur une mission ou dans la durée.
              </li>
              <li>
                Maintenance et hébergement des boutiques livrées, avec un
                interlocuteur technique joignable pour vos chefs de projet.
              </li>
              <li>
                Vos clients ne voient que vous. Je reste en retrait, mais je
                réponds vite.
              </li>
            </ul>
            <p className="mt-6">
              <Link href={RouteLink.contact} className="home-link">
                Parler d’un partenariat
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Deux articles tirés de problèmes rencontrés sur de vraies boutiques, et comment je les ai résolus.">
          Ce que j’écris sur Prestashop
        </SectionHeading>
        <ArticleCards category="PrestaShop" limit={2} />
      </section>

      <FaqSection
        title="Questions fréquentes sur Prestashop"
        intro="Ce que me demandent les e-commerçants et les agences avant de lancer ou de reprendre une boutique Prestashop."
        items={FAQ}
        tone="deep"
      />

      <section className="container pt-16 pb-10 md:pt-24">
        <SectionHeading text="Décrivez votre boutique : catalogue, outils à relier, version actuelle si elle existe. Je vous réponds dans la journée.">
          Parler de votre boutique
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
