import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import ArticleCards from '@component/prestations/ArticleCards'
import {
  CHECKS,
  FAQ,
  PLANS,
  ROWS,
  WATCH,
} from '@component/prestations/maintenance-prestashop-data'
import PlanTable from '@component/prestations/PlanTable'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Maintenance Prestashop par un freelance | Contrat TMA - inRage',
  description:
    'Contrat de maintenance Prestashop par un développeur freelance : mises à jour, sécurité, sauvegardes, surveillance du tunnel d’achat et heures de développement. Dès 39 € HT par mois.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaPrestashop),
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([
      { name: 'Prestations', item: getCanonicalUrl(RouteLink.prestations) },
      {
        name: 'Maintenance de site internet',
        item: getCanonicalUrl(RouteLink.prestationTma),
      },
      {
        name: 'Maintenance Prestashop',
        item: getCanonicalUrl(RouteLink.prestationTmaPrestashop),
      },
    ]),
    {
      '@type': 'Service',
      '@id': `${getCanonicalUrl(RouteLink.prestationTmaPrestashop)}#service`,
      name: 'Maintenance et sécurité de boutique Prestashop',
      serviceType: 'Maintenance de boutique Prestashop',
      url: getCanonicalUrl(RouteLink.prestationTmaPrestashop),
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: { '@type': 'Country', name: 'France' },
      offers: [
        { name: 'Sérénité', price: '39' },
        { name: 'Avancée', price: '55' },
      ].map((offer) => ({
        '@type': 'Offer',
        name: `Forfait ${offer.name}`,
        price: offer.price,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: offer.price,
          priceCurrency: 'EUR',
          unitText: 'mois HT',
        },
      })),
    },
    faqJsonLd(FAQ),
  ],
}

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[20%] -left-[20%]" aria-hidden />
      <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
      <div className="container grid items-center gap-12 pt-6 md:pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Maintenance Prestashop par un freelance
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-(--home-muted)">
              Que vous vendiez dix produits ou cinq mille, une boutique
              Prestashop doit rester à jour, sauvegardée et surveillée pour
              continuer à encaisser. J’administre des boutiques depuis
              Prestashop 1.6, pour des e-commerçants de La Rochelle et de toute
              la France, avec un délai d’intervention garanti et des sauvegardes
              en France.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#forfaits"
                className="home-btn home-btn-shine home-btn-glow"
              >
                Voir les deux forfaits
              </Link>
              <Link href="#contact" className="home-btn-ghost home-glassy">
                Parler de ma boutique
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal i={2}>
          <Glass className="p-6 select-none md:p-7">
            <div
              role="img"
              aria-label="Passe de supervision horaire : chaque étape de la boutique est testée, de la page d’accueil au paiement."
              className="pointer-events-none"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-white">
                  Passe de supervision
                </span>
                <span className="flex items-center gap-2 text-sm text-(--home-muted)">
                  <span className="home-pulse" />
                  toutes les heures
                </span>
              </div>
              <ul className="mt-5 divide-y divide-white/10">
                {CHECKS.map((check) => (
                  <li
                    key={check}
                    className="flex items-center justify-between gap-4 py-2.5 text-sm"
                  >
                    <span className="text-white/85">{check}</span>
                    <span className="font-medium text-white">OK</span>
                  </li>
                ))}
              </ul>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  )
}

export default function TmaPrestashop() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Ce que je surveille sur votre boutique
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Une boutique en ligne est exposée en permanence : modules
              obsolètes, failles publiées, tentatives d’injection dans les
              formulaires. J’ai développé au fil des années des outils qui
              surveillent, protègent et réparent, et qui bloquent les attaques
              les plus courantes avant qu’elles n’atteignent la boutique.
            </p>
          </Reveal>
          <div className="divide-y divide-white/10">
            {WATCH.map((item, i) => (
              <Reveal key={item.title} i={i}>
                <article className="py-8 first:pt-0">
                  <h3 className="text-xl font-semibold tracking-tight text-balance text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-(--home-muted)">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="forfaits"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Deux forfaits engagés sur 12 mois, avec des heures de développement incluses. Le nombre d’heures se personnalise selon la taille de la boutique.">
            Les forfaits de maintenance Prestashop
          </SectionHeading>
          <div className="mt-14">
            <PlanTable plans={PLANS} rows={ROWS} support="Prestashop" />
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              De Prestashop 1.6 à Prestashop 9
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Je maintiens des boutiques sur toutes les versions encore en
                production, de la 1.6 à la 9. Une boutique en 1.6 ou 1.7 reçoit
                les correctifs de sécurité qui existent encore, puis un plan de
                migration vers une version maintenue, module par module, sur
                pré-production, avant la bascule.
              </p>
              <p>
                La prise en charge commence toujours par un état des lieux :
                accès, hébergement, modules installés, thème, sauvegardes. Une
                boutique trop lourde ou trop ancienne pour être migrée
                proprement peut aussi être{' '}
                <Link
                  href={RouteLink.prestationPrestashop}
                  className="home-link"
                >
                  refaite sur une base propre
                </Link>
                , avec reprise du catalogue et des clients.
              </p>
              <p>
                Si l’hébergement actuel est en cause, lenteurs ou version de PHP
                figée, je peux{' '}
                <Link href={RouteLink.prestationHosting} className="home-link">
                  héberger la boutique en France
                </Link>{' '}
                sur mon infrastructure.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="container">
          <SectionHeading text="Les problèmes que je rencontre en maintenant des boutiques Prestashop finissent en articles, pour les autres marchands et les autres développeurs.">
            Ce que j’écris sur Prestashop
          </SectionHeading>
          <ArticleCards category="PrestaShop" limit={2} />
        </div>
      </section>

      <FaqSection
        title="Questions fréquentes sur la maintenance Prestashop"
        intro="Ce que me demandent les e-commerçants avant de confier la maintenance de leur boutique."
        items={FAQ}
        tone="plain"
      />

      <section
        id="contact"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="container">
          <SectionHeading text="Indiquez l’adresse de votre boutique, sa version de Prestashop et ce qui vous préoccupe. Je vous réponds dans la journée avec un état des lieux et le forfait adapté.">
            Confier la maintenance de votre boutique
          </SectionHeading>
          <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
