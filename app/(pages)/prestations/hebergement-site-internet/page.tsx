import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import FranceMap from '@component/FranceMap'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import {
  COMPARISON,
  FAQ,
  PATH,
  PLEDGES,
} from '@component/prestations/hebergement-data'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd, faqJsonLd } from '@util/seo-generators'

const STATUS_URL = 'https://status.inrage.fr'

export const metadata = {
  title: 'Hébergement web infogéré et souverain en France - inRage',
  description:
    'Hébergement infogéré en France, administré par inRage : supervision chaque minute, sauvegardes quotidiennes, grappe de serveurs, CrowdSec. WordPress, Prestashop, React, Symfony.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationHosting),
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([
      { name: 'Prestations', item: getCanonicalUrl(RouteLink.prestations) },
      {
        name: 'Hébergement de site internet',
        item: getCanonicalUrl(RouteLink.prestationHosting),
      },
    ]),
    {
      '@type': 'Service',
      '@id': `${getCanonicalUrl(RouteLink.prestationHosting)}#service`,
      name: 'Hébergement de site internet infogéré',
      serviceType: 'Hébergement web infogéré',
      url: getCanonicalUrl(RouteLink.prestationHosting),
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: { '@type': 'Country', name: 'France' },
    },
    faqJsonLd(FAQ),
  ],
}

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[20%] -left-[20%]" aria-hidden />
      <div className="home-orb top-[-10%] right-[-10%]" aria-hidden />
      <div className="container grid items-center gap-12 pt-6 md:pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        <div>
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Hébergement web infogéré, en France
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-(--home-muted)">
              Vos données ne quittent pas la France. Votre site WordPress,
              Prestashop, React ou Symfony tourne sur une infrastructure que
              j’administre moi-même, surveillée chaque minute, sauvegardée
              chaque nuit, protégée par CrowdSec, et suivie par la personne qui
              l’a développé.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="home-btn home-btn-shine home-btn-glow"
              >
                Demander un devis
              </Link>
              <a
                href={STATUS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="home-btn-ghost home-glassy"
              >
                État de l’infrastructure
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal i={2} className="hidden lg:block">
          <FranceMap className="mx-auto w-full max-w-xs" />
        </Reveal>
      </div>
    </section>
  )
}

export default function PrestationHebergement() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Trois engagements, sans petite ligne
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <div className="divide-y divide-white/10">
            {PLEDGES.map((item, i) => (
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

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Entre votre visiteur et votre site, trois couches que vous ne voyez jamais et qui font la différence le jour où quelque chose se passe mal.">
            Le chemin d’une visite sur votre site
          </SectionHeading>
          <div className="relative mt-14">
            <div
              className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-white/15 lg:block"
              aria-hidden
            />
            <ol className="grid gap-6 lg:grid-cols-3">
              {PATH.map((node, i) => (
                <li key={node.title}>
                  <Reveal i={i} className="h-full">
                    <Glass className="flex h-full flex-col p-7">
                      <span className="flex items-center gap-3">
                        <span className="home-pulse" aria-hidden />
                        <span className="text-sm text-(--home-muted)">
                          {node.tools}
                        </span>
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                        {node.title}
                      </h3>
                      <p className="mt-3 leading-7 text-(--home-muted)">
                        {node.text}
                      </p>
                    </Glass>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="leading-7 text-(--home-muted)">
              En octobre 2026, une faille PHP sous embargo a été corrigée sur
              tout le parc en une nuit.{' '}
              <Link
                href={`${RouteLink.blog}/faille-securite-php-octobre-2026-recit`}
                className="home-link"
              >
                Le récit de cette nuit
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Un hébergeur généraliste loue de l’espace. Ici, la responsabilité du site est prise de bout en bout, et voici ce que cela change concrètement.">
          Hébergement classique ou hébergement inRage
        </SectionHeading>
        <Reveal className="mt-14 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  scope="col"
                  className="w-[22%] pb-5 text-sm font-medium text-(--home-muted)"
                >
                  Critère
                </th>
                <th
                  scope="col"
                  className="w-[36%] pb-5 pr-6 text-sm font-medium text-(--home-muted)"
                >
                  Hébergement classique
                </th>
                <th
                  scope="col"
                  className="pb-5 text-sm font-medium text-(--home-orange-text)"
                >
                  Hébergement inRage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {COMPARISON.map((row) => (
                <tr key={row.criteria}>
                  <th
                    scope="row"
                    className="py-5 pr-6 align-top text-lg font-medium text-white"
                  >
                    {row.criteria}
                  </th>
                  <td className="py-5 pr-6 align-top leading-7 text-white/50">
                    {row.generic}
                  </td>
                  <td className="py-5 align-top leading-7 text-white/85">
                    {row.inrage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <div className="mt-12 divide-y divide-white/10 md:hidden">
          {COMPARISON.map((row, i) => (
            <Reveal key={row.criteria} i={i}>
              <div className="py-5">
                <h3 className="text-lg font-medium text-white">
                  {row.criteria}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  Classique : {row.generic}
                </p>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  inRage : {row.inrage}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Changer d’hébergeur sans coupure
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Tout commence par un point sur votre site, son trafic et votre
                hébergeur actuel. Je copie ensuite le site, la base de données
                et les e-mails sur l’infrastructure, je le vérifie en
                pré-production, puis je fais pointer le nom de domaine, qui
                reste à votre nom. Vos visiteurs ne voient rien.
              </p>
              <p>
                Chaque site est installé avec la configuration que son outil
                demande :{' '}
                <Link
                  href={RouteLink.prestationWordPress}
                  className="home-link"
                >
                  WordPress
                </Link>
                ,{' '}
                <Link
                  href={RouteLink.prestationPrestashop}
                  className="home-link"
                >
                  Prestashop
                </Link>
                ,{' '}
                <Link href={RouteLink.prestationReact} className="home-link">
                  React et Next.js
                </Link>{' '}
                ou{' '}
                <Link href={RouteLink.prestationSymfony} className="home-link">
                  Symfony
                </Link>
                . La supervision est active dès la première minute.
              </p>
              <p>
                L’hébergement couvre le serveur. Les mises à jour du site
                lui-même, de ses extensions et de ses modules relèvent des{' '}
                <Link href={RouteLink.prestationTma} className="home-link">
                  forfaits de maintenance
                </Link>
                , que la plupart des clients combinent avec l’hébergement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Questions fréquentes sur l’hébergement"
        intro="Ce que me demandent les clients avant de confier l’hébergement de leur site."
        items={FAQ}
        tone="plain"
      />

      <section
        id="contact"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="container">
          <SectionHeading text="Décrivez votre site et votre hébergement actuel. Je vous réponds dans la journée avec une proposition claire, ou au 06 82 96 38 89 du lundi au samedi, de 9 h à 18 h.">
            Confier l’hébergement de votre site
          </SectionHeading>
          <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
