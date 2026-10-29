import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import { CASES, FAQ, STACK, STEPS } from '@component/prestations/symfony-data'
import ImageInvoicer from '@image/articles/invoicer-cover.jpg'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Développeur Symfony : application métier sur mesure | inRage',
  description:
    'Développeur Symfony freelance à La Rochelle depuis 2012 : extranets, outils internes, API Platform, SaaS, reprise et montée de version, partout en France.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationSymfony),
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
        name: 'Développement Symfony',
        item: getCanonicalUrl(RouteLink.prestationSymfony),
      },
    ]),
    {
      '@type': 'Service',
      name: 'Développement Symfony sur mesure',
      serviceType: 'Développement d’application métier',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: { '@type': 'Country', name: 'France' },
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
              Développeur Symfony freelance&nbsp;: applications métier sur
              mesure
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Quand le besoin est un processus et pas une plaquette, je
              développe avec Symfony depuis 2012 : extranets, outils internes,
              API, logiciels en ligne. Je spécifie, je développe, j’héberge et
              je maintiens, pour des entreprises de La Rochelle, des groupes
              nationaux et les agences qui ont besoin d’un renfort Symfony.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={RouteLink.contact}
                className="home-btn home-btn-shine home-btn-glow"
              >
                Décrire votre besoin
              </Link>
              <Link
                href={RouteLink.portfolioProject('application-web', 'invoicer')}
                className="home-btn-ghost home-glassy"
              >
                Voir Invoicer, application Symfony
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Symfony() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <SectionHeading text="Un CMS publie des pages. Une application exécute votre métier. Voici les cinq situations où Symfony est le bon outil, et ce que je livre dans chacune.">
          Quand Symfony plutôt qu’un CMS
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {CASES.map((item, i) => (
            <Reveal key={item.title} i={i}>
              <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[280px_1fr]">
                <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                  {item.title}
                </h3>
                <p className="leading-7 text-(--home-muted)">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Le meilleur argument pour une application Symfony, c’est une application Symfony qui tourne. Celle-ci est la mienne.">
            Invoicer, une application Symfony que j’exploite moi-même
          </SectionHeading>
          <Reveal className="mx-auto mt-14 max-w-5xl">
            <a
              href="https://invoicer.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="home-card home-article home-glass grid overflow-hidden md:grid-cols-[1.1fr_1fr]"
            >
              <span className="home-article-media relative block aspect-[2.15/1] md:aspect-auto md:min-h-[320px]">
                <Image
                  src={ImageInvoicer}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="home-article-img object-cover"
                />
              </span>
              <span className="block p-7 md:p-9">
                <span className="home-card-title block text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Invoicer, facturation pour auto-entrepreneurs
                </span>
                <span className="mt-4 block leading-7 text-(--home-muted)">
                  Symfony 7.4 derrière un front Next.js 16. Déclaration URSSAF
                  automatique, encaissement par carte avec Stripe Connect,
                  rapprochement bancaire avec Bridge, facturation électronique
                  2026 via Pennylane. Abonnements, factures, rôles, et des
                  utilisateurs qui comptent dessus tous les jours. Hébergé en
                  France, édité par inRage depuis 2017.
                </span>
                <span className="mt-5 block font-medium text-white">
                  invoicer.fr
                </span>
              </span>
            </a>
          </Reveal>
          <Reveal i={1} className="mx-auto mt-10 max-w-3xl">
            <p className="leading-7 text-(--home-muted)">
              Les autres applications que je développe appartiennent à leurs
              clients et ne se visitent pas : une console Symfony qui pilote la
              mise à jour du catalogue d’une boutique Prestashop et affiche la
              progression en temps réel avec Mercure, des connecteurs entre ERP
              et sites marchands, des outils internes. Je les décris de vive
              voix, exemples à l’appui, quand nous parlons de votre projet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Comment je construis une application Symfony
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Des choix techniques faits pour qu’une application tienne des
              années et qu’un autre développeur puisse la reprendre.
            </p>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              {STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Symfony, mon terrain de jeu
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Symfony n’est pas seulement l’outil que je facture. C’est celui
                avec lequel je construis mes projets personnels, dans tous les
                sens : un outil pour tester une idée, une réécriture pour
                mesurer ce qu’une nouvelle version apporte, un service interne
                pour mon propre parc de sites. Invoicer est né comme ça.
              </p>
              <p>
                Ces projets me servent à essayer les nouveautés de chaque
                version avant de les proposer à un client, à comparer des façons
                d’écrire la même chose et à garder un œil sur l’écosystème qui
                gravite autour du framework : API Platform, Mercure, les
                composants, les outils de qualité de code. Quand une
                fonctionnalité arrive dans votre application, je l’ai déjà
                utilisée ailleurs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Une application métier ne se livre pas en une fois. Elle se construit par lots, avec vous aux commandes dès le premier.">
            Comment se déroule un projet Symfony
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

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Freelance ou agence Symfony
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              La question se pose pour toute application qui doit durer. Ma
              réponse, et ce que je propose aux agences.
            </p>
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Avec moi, la personne qui a compris votre métier en atelier est
                celle qui écrit le code, le déploie et le maintient. Pas de chef
                de projet entre nous, pas de développeur qui change en cours de
                route. Ludovic Boussion dessine les interfaces quand elles le
                méritent, et un partenaire prend le référencement quand il y en
                a.
              </p>
              <p>
                Pour les agences, j’interviens en renfort Symfony, en marque
                blanche : API, back-office, connecteurs, montée de version d’une
                application que personne n’ose plus toucher. Dans vos outils,
                avec vos méthodes, sur une mission ou dans la durée.
              </p>
              <p>
                <Link href={RouteLink.contact} className="home-link">
                  Parler d’un projet ou d’un renfort
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Et si le besoin est ailleurs
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              <li>
                Votre projet est d’abord un site avec des contenus à publier :{' '}
                <Link
                  href={RouteLink.prestationWordPress}
                  className="home-link"
                >
                  création de site WordPress
                </Link>
                .
              </li>
              <li>
                Votre projet est une boutique avec un catalogue :{' '}
                <Link
                  href={RouteLink.prestationPrestashop}
                  className="home-link"
                >
                  boutique Prestashop ou WooCommerce
                </Link>
                .
              </li>
              <li>
                Votre projet est une interface riche ou une application mobile :{' '}
                <Link href={RouteLink.prestationReact} className="home-link">
                  React, Next.js et React Native
                </Link>
                , souvent branchés sur une API Symfony.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Questions fréquentes sur Symfony"
        intro="Ce que me demandent les entreprises et les agences avant de lancer ou de reprendre une application Symfony."
        items={FAQ}
        tone="plain"
      />

      <section className="container pt-6 pb-10 md:pt-10">
        <SectionHeading text="Décrivez le processus que l’application doit prendre en charge, les outils déjà en place et qui l’utilisera. Je vous réponds dans la journée.">
          Décrire votre besoin
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
