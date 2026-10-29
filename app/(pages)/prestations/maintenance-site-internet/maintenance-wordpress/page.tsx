import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import ArticleCards from '@component/prestations/ArticleCards'
import {
  FAQ,
  PLAN_HINTS,
  PLANS,
  REQUESTS,
  ROWS,
} from '@component/prestations/maintenance-wordpress-data'
import PlanTable from '@component/prestations/PlanTable'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Maintenance WordPress à La Rochelle | Freelance - inRage',
  description:
    'Maintenance et dépannage WordPress à La Rochelle par un développeur freelance : mises à jour, sécurité, sauvegardes, plus de 150 sites en infogérance.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaWordPress),
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
        name: 'Maintenance WordPress',
        item: getCanonicalUrl(RouteLink.prestationTmaWordPress),
      },
    ]),
    {
      '@type': 'Service',
      '@id': `${getCanonicalUrl(RouteLink.prestationTmaWordPress)}#service`,
      name: 'Maintenance et support WordPress à La Rochelle',
      serviceType: 'Maintenance de site WordPress',
      url: getCanonicalUrl(RouteLink.prestationTmaWordPress),
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'Country', name: 'France' },
      ],
      offers: [
        { name: 'Tranquilité', price: '39' },
        { name: 'Standard', price: '55' },
        { name: 'Sérénité', price: '75' },
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
      <div className="home-beam top-[15%] -left-[20%]" aria-hidden />
      <div className="home-orb top-[-20%] right-[-10%]" aria-hidden />
      <div className="container grid items-center gap-12 pt-6 md:pt-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Maintenance WordPress à La Rochelle
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-(--home-muted)">
              Mises à jour testées, sauvegardes en France, surveillance et
              dépannage de votre site WordPress ou WooCommerce, par un
              développeur freelance installé à La Rochelle. Plus de 150 sites
              sont sous infogérance inRage, en Charente-Maritime et dans toute
              la France.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="home-btn home-btn-shine home-btn-glow"
              >
                Confier mon site
              </Link>
              <Link
                href={RouteLink.prestationTmaOnDemand}
                className="home-btn-ghost home-glassy"
              >
                Juste un dépannage
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal i={2}>
          <ul className="grid gap-3">
            {PLANS.map((plan, i) => (
              <li key={plan.name}>
                <Link
                  href="#forfaits"
                  className="home-card home-glass flex items-center justify-between gap-6 px-6 py-5"
                >
                  <span>
                    <span className="home-card-title block text-xl font-semibold text-white">
                      {plan.name}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-(--home-muted)">
                      {PLAN_HINTS[i]}
                    </span>
                  </span>
                  <span className="home-num shrink-0 text-right text-lg font-medium text-(--home-orange-text)">
                    {plan.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default function TmaWordPress() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section id="forfaits" className="container scroll-mt-28 py-16 md:py-24">
        <SectionHeading text="Trois forfaits engagés sur 12 mois, avec des heures de développement incluses. Le nombre d’heures se personnalise selon vos besoins.">
          Les forfaits de maintenance WordPress
        </SectionHeading>
        <div className="mt-14">
          <PlanTable plans={PLANS} rows={ROWS} support="WordPress" />
        </div>
        <Reveal className="mx-auto mt-12 max-w-3xl text-center">
          <p className="leading-7 text-(--home-muted)">
            Vous comparez plusieurs offres ? J’ai écrit un{' '}
            <Link
              href={RouteLink.blogPost(
                'choisir-prestataire-maintenance-tma-wordpress'
              )}
              className="home-link"
            >
              guide pour choisir un prestataire TMA WordPress
            </Link>
            , avec les questions à poser avant de signer, chez moi comme
            ailleurs.
          </p>
        </Reveal>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Support et dépannage WordPress à La Rochelle
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              La plupart des sites que je reprends ont été créés par une autre
              agence ou un autre freelance, parfois il y a dix ans. Ils arrivent
              avec un thème plus mis à jour, une version de PHP dépassée et des
              extensions abandonnées.
            </p>
            <p className="mt-4 max-w-[44ch] leading-7 text-(--home-muted)">
              Je commence par un audit sur pré-production, je remets le site à
              niveau, puis je le surveille. Vous avez un seul interlocuteur,
              joignable, qui connaît votre site, et que vous pouvez rencontrer à
              La Rochelle.
            </p>
            <p className="mt-6">
              <Link
                href={RouteLink.developpeurLaRochelle}
                className="home-link"
              >
                Mon activité de développeur à La Rochelle
              </Link>
            </p>
          </Reveal>
          <Reveal i={1}>
            <h3 className="text-xl font-medium text-white">
              Les demandes qui arrivent le plus souvent
            </h3>
            <ul className="home-list mt-5 space-y-4 leading-7 text-white/85">
              {REQUESTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-8 leading-7 text-(--home-muted)">
              Pour une intervention isolée sans contrat, voyez la{' '}
              <Link
                href={RouteLink.prestationTmaOnDemand}
                className="home-link"
              >
                maintenance ponctuelle
              </Link>
              . Si l’hébergement est en cause, je peux aussi{' '}
              <Link href={RouteLink.prestationHosting} className="home-link">
                héberger votre site en France
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Je publie ce que j’apprends en maintenant 150 sites WordPress : failles, environnements, mode maintenance, et comment choisir un prestataire.">
          Ce que j’écris sur la maintenance WordPress
        </SectionHeading>
        <ArticleCards category="WordPress" limit={4} />
      </section>

      <FaqSection
        title="Questions fréquentes sur la maintenance WordPress"
        intro="Ce que me demandent les entreprises de La Rochelle et de Charente-Maritime avant de confier la maintenance de leur site WordPress."
        items={FAQ}
        tone="deep"
      />

      <section
        id="contact"
        className="container scroll-mt-28 pt-16 pb-10 md:pt-24"
      >
        <SectionHeading text="Indiquez l’adresse de votre site WordPress et ce qui vous préoccupe. Je vous réponds dans la journée avec un état des lieux et le forfait adapté.">
          Confier la maintenance de votre site WordPress
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
