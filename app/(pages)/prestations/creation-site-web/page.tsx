import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import {
  CASES,
  FAQ,
  INCLUDED,
  LOCAL_PROJECTS,
  NOT_INCLUDED,
  PRICE_FACTORS,
  PRICES,
  STEPS,
} from '@component/prestations/creation-data'
import ListingGrid from '@component/portfolio/ListingGrid'
import { getPortfolioItems, pickProjects } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Création de site internet à La Rochelle | Freelance - inRage',
  description:
    'Création de site internet à La Rochelle : vitrine WordPress de 2 000 à 3 000 €, boutique à partir de 5 000 €, sur mesure Symfony et React. Devis sous 24 h.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationWeb),
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
    ]),
    {
      '@type': 'Service',
      name: 'Création de site internet à La Rochelle',
      serviceType: 'Création de site internet',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'Country', name: 'France' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Site vitrine WordPress',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 2000,
            maxPrice: 3000,
            priceCurrency: 'EUR',
          },
        },
        {
          '@type': 'Offer',
          name: 'Boutique en ligne',
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
              Création de site internet à La Rochelle
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Site vitrine, boutique en ligne ou application : je conçois,
              développe, héberge et maintiens les sites des entreprises de La
              Rochelle et de Charente-Maritime depuis 2008. Les prix sont
              annoncés, le devis arrive sous 24 heures, et plus de 150 sites que
              j’ai livrés sont encore suivis aujourd’hui.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={RouteLink.contact}
                className="home-btn home-btn-shine home-btn-glow"
              >
                Demander un devis
              </Link>
              <Link
                href={RouteLink.auditGratuit}
                className="home-btn-ghost home-glassy"
              >
                Faire auditer mon site actuel
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default async function PrestationBuildWebsite() {
  const items = await getPortfolioItems()
  const projects = pickProjects(items, LOCAL_PROJECTS)

  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <SectionHeading text="Je ne commence pas par la technologie, je commence par ce que le site doit produire pour vous. Voici les quatre situations que je rencontre le plus souvent, et ce que je propose pour chacune.">
          Quel site pour votre activité
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {CASES.map((item, i) => (
            <Reveal key={item.title} i={i}>
              <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[280px_1fr]">
                <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                  {item.title}
                </h3>
                <div>
                  <p className="leading-7 text-(--home-muted)">{item.text}</p>
                  <p className="mt-4">
                    <Link href={item.href} className="home-link">
                      {item.hrefText}
                    </Link>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Des sites conçus pour des entreprises de La Rochelle, de l’Île de Ré et de Nouvelle-Aquitaine, que vous pouvez visiter aujourd’hui.">
            Des sites créés ici
          </SectionHeading>
          <ListingGrid projects={projects} eager={3} className="mt-14" />
          <div className="mt-12 flex justify-center">
            <Link
              href={RouteLink.portfolioCategory('wordpress')}
              className="home-btn-ghost home-glassy"
            >
              Voir toutes les réalisations WordPress
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Ce qui est compris dans un site inRage
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Le devis liste chaque poste. Voici ce qu’il contient toujours, et
              ce qu’il ne contient pas pour que vous ne le découvriez pas après.
            </p>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-medium text-white">
              Ce qui n’est pas compris
            </h3>
            <ul className="home-list mt-4 space-y-4 leading-7 text-(--home-muted)">
              {NOT_INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        id="refonte"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Refonte de site internet à La Rochelle
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Le cas le plus fréquent : un site WordPress créé il y a six ou
              huit ans, lent sur mobile, impossible à mettre à jour sans casser
              une page, et que plus personne n’ose toucher.
            </p>
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Une refonte ne repart pas de zéro. Je commence par lister ce qui
                fonctionne : les pages qui apportent des visites, les contenus à
                garder, les outils reliés au site. Les adresses des pages sont
                conservées ou redirigées une par une pour ne pas perdre le
                référencement acquis.
              </p>
              <p>
                Le nouveau site est construit à côté, sur pré-production, puis
                bascule en une fois. Pour{' '}
                <Link
                  href={RouteLink.portfolioProject('wordpress', 'quadria')}
                  className="home-link"
                >
                  Quadria
                </Link>
                , le catalogue produits et ses fiches ont été repris de cette
                façon. Pour le{' '}
                <Link
                  href={RouteLink.portfolioProject(
                    'wordpress',
                    'camping-la-mouette-rieuse'
                  )}
                  className="home-link"
                >
                  Camping La Mouette Rieuse
                </Link>
                , la refonte du site a accompagné celle de l’identité visuelle.
              </p>
              <p>
                Vous ne savez pas si votre site mérite une refonte ou une simple
                remise à niveau ? Commencez par un{' '}
                <Link href={RouteLink.auditGratuit} className="home-link">
                  audit gratuit de votre site
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="prix" className="container scroll-mt-28 py-20 md:py-28">
        <SectionHeading text="Des fourchettes plutôt qu’un « sur devis » partout. Elles couvrent la majorité des projets, le devis précis arrive sous 24 heures après notre échange.">
          Combien coûte un site internet à La Rochelle
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
              </Glass>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <p className="leading-7 text-(--home-muted)">
            Ce qui fait varier le prix d’un site :
          </p>
          <ul className="home-list mt-4 space-y-3 leading-7 text-white/85">
            {PRICE_FACTORS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 leading-7 text-(--home-muted)">
            L’hébergement et la maintenance sont facturés à part, à l’année. Pas
            d’abonnement caché, pas de licence à renouveler : le site vous
            appartient.
          </p>
        </Reveal>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="container">
          <SectionHeading text="Cinq étapes, toutes visibles. Vous savez à chaque moment ce qui est validé et ce qui reste à faire.">
            Comment se déroule la création de votre site
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

      <FaqSection
        title="Questions fréquentes"
        intro="Les questions que me posent les entreprises de La Rochelle et de Charente-Maritime avant de lancer la création de leur site."
        items={FAQ}
        tone="plain"
      />

      <section className="container pt-6 pb-10 md:pt-10">
        <SectionHeading text="Décrivez votre projet en quelques lignes : votre activité, ce que le site doit produire, votre échéance. Je vous réponds dans la journée.">
          Demander un devis
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
