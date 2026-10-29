import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import {
  CONSOLE_POINTS,
  FAQ,
  OFFERS,
  RHYTHM,
  STAKES,
} from '@component/prestations/maintenance-data'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Maintenance de site internet à La Rochelle | inRage',
  description:
    'Maintenance, TMA et infogérance de site internet à La Rochelle : forfaits WordPress et Prestashop dès 39 € HT par mois, dépannage à l’heure, sauvegardes en France. Plus de 150 sites suivis.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTma),
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
    ]),
    {
      '@type': 'Service',
      name: 'Maintenance de site internet à La Rochelle',
      serviceType: 'Maintenance et infogérance de site internet',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'Country', name: 'France' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Maintenance WordPress',
          url: getCanonicalUrl(RouteLink.prestationTmaWordPress),
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 39,
            maxPrice: 75,
            priceCurrency: 'EUR',
            unitText: 'mois HT',
          },
        },
        {
          '@type': 'Offer',
          name: 'Maintenance Prestashop',
          url: getCanonicalUrl(RouteLink.prestationTmaPrestashop),
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 39,
            maxPrice: 55,
            priceCurrency: 'EUR',
            unitText: 'mois HT',
          },
        },
        {
          '@type': 'Offer',
          name: 'Intervention ponctuelle',
          url: getCanonicalUrl(RouteLink.prestationTmaOnDemand),
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
              Maintenance de site internet à La Rochelle
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Un site en ligne vieillit chaque jour : WordPress, Prestashop, le
              thème, les extensions et la version de PHP évoluent sans lui. Plus
              de 150 sites sont aujourd’hui sous maintenance inRage, à La
              Rochelle, en Charente-Maritime et partout en France : mis à jour
              sur pré-production, sauvegardés sur des serveurs en France,
              surveillés toutes les heures, réparés dans un délai garanti.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#forfaits"
                className="home-btn home-btn-shine home-btn-glow"
              >
                Voir les forfaits
              </Link>
              <Link
                href={RouteLink.prestationTmaOnDemand}
                className="home-btn-ghost home-glassy"
              >
                Mon site est en panne
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function WebsiteTMA() {
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
              Ce qui arrive à un site que personne ne maintient
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Quatre situations que je rencontre chaque mois, souvent sur des
              sites qui fonctionnaient très bien la veille. Aucune n’est une
              fatalité, toutes se préviennent.
            </p>
            <p className="mt-6 max-w-[44ch] leading-7 text-(--home-muted)">
              En octobre 2026, une faille PHP sous embargo a été corrigée sur
              tout le parc en une nuit.{' '}
              <Link
                href={RouteLink.blogPost(
                  'faille-securite-php-octobre-2026-recit'
                )}
                className="home-link"
              >
                Le récit de cette nuit
              </Link>
              .
            </p>
          </Reveal>
          <div className="divide-y divide-white/10">
            {STAKES.map((item, i) => (
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
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Deux contrats de maintenance selon votre plateforme, engagés sur 12 mois avec des heures de développement incluses, et le dépannage à l’heure pour tout le reste.">
            Trois façons de confier votre site
          </SectionHeading>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <Reveal key={offer.name} i={i} className="h-full">
                <Glass className="flex h-full flex-col p-7 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {offer.name}
                  </h3>
                  <p className="home-num mt-2 text-lg font-medium text-(--home-orange-text)">
                    {offer.price}
                  </p>
                  <p className="mt-4 leading-7 text-(--home-muted)">
                    {offer.text}
                  </p>
                  <ul className="home-list mt-6 space-y-3 text-sm leading-6 text-white/85">
                    {offer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-8">
                    <Link href={offer.href} className="home-link">
                      {offer.hrefText}
                    </Link>
                  </p>
                </Glass>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="La maintenance n’est pas une intervention de temps en temps, c’est une cadence. Voici ce qui se passe sur votre site une fois le contrat signé.">
          Au rythme de votre site
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {RHYTHM.map((item, i) => (
            <Reveal key={item.when} i={i}>
              <div className="grid gap-x-12 gap-y-2 py-8 md:grid-cols-[220px_1fr]">
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {item.when}
                </p>
                <p className="leading-7 text-(--home-muted)">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <Image
              src="/images/tma-example.png"
              width={945}
              height={666}
              alt="La console de maintenance inRage : liste des demandes, factures et suivi des interventions"
              className="home-shot w-full rounded-xl"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Une console de maintenance, pas une boîte mail
              </h2>
              <span className="home-rule mt-5" aria-hidden />
              <p className="mt-5 leading-7 text-(--home-muted)">
                J’ai développé la console que vous voyez pour suivre les 150
                sites du parc. Chaque client y a son accès, quelle que soit sa
                plateforme.
              </p>
            </Reveal>
            <div className="mt-8 space-y-7">
              {CONSOLE_POINTS.map((item, i) => (
                <Reveal key={item.title} i={i + 1}>
                  <h3 className="text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-(--home-muted)">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Maintenance et hébergement, deux choses différentes
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                La maintenance porte sur le site : son code, ses extensions, ses
                sauvegardes, sa sécurité. L’hébergement porte sur le serveur qui
                le fait tourner. Les forfaits s’appliquent sur votre hébergement
                actuel, chez OVH, o2switch, Ionos ou ailleurs.
              </p>
              <p>
                Quand l’hébergement est en cause, lenteurs, pannes à répétition,
                version de PHP figée, je peux déplacer le site sur mes serveurs
                en France. Il y est supervisé avec le reste du parc, derrière
                CrowdSec, avec des sauvegardes de la machine en plus de celles
                du site.
              </p>
              <p>
                <Link href={RouteLink.prestationHosting} className="home-link">
                  L’offre d’hébergement
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Questions fréquentes sur la maintenance"
        intro="Ce que me demandent les entreprises de La Rochelle et d’ailleurs avant de confier la maintenance de leur site."
        items={FAQ}
        tone="deep"
      />

      <section className="container pt-16 pb-10 md:pt-24">
        <SectionHeading text="Indiquez l’adresse de votre site, sa plateforme et ce qui vous préoccupe. Je vous réponds dans la journée avec un état des lieux et le forfait adapté.">
          Confier la maintenance de votre site
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
