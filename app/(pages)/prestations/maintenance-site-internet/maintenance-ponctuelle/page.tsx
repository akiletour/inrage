import '@component/home/home.css'

import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import { CASES, FAQ } from '@component/prestations/maintenance-ponctuelle-data'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Dépannage et maintenance ponctuelle de site web | inRage',
  description:
    'Dépannage de site internet à La Rochelle et à distance : intervention à l’heure sur WordPress, WooCommerce ou Prestashop pour corriger un bug, débloquer une mise à jour ou ajouter une fonctionnalité.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaOnDemand),
  },
}

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
          name: 'Prestations',
          item: getCanonicalUrl(RouteLink.prestations),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Maintenance de site internet',
          item: getCanonicalUrl(RouteLink.prestationTma),
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Maintenance ponctuelle',
          item: getCanonicalUrl(RouteLink.prestationTmaOnDemand),
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Dépannage et maintenance ponctuelle de site internet',
      serviceType: 'Dépannage de site internet',
      url: getCanonicalUrl(RouteLink.prestationTmaOnDemand),
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'Country', name: 'France' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

const linkClass =
  'font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)'

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-20 md:pb-28">
      <div
        className="home-orb top-[-30%] left-1/2 -translate-x-1/2"
        aria-hidden
      />
      <div className="container flex flex-col items-center pt-6 text-center md:pt-12">
        <Reveal>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
            Dépannage et maintenance ponctuelle de site internet
          </h1>
        </Reveal>
        <Reveal i={1}>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-8 text-(--home-muted)">
            Une mise à jour qui bloque, un module qui refuse de fonctionner, une
            page qui disparaît : j’interviens à l’heure, sans contrat, sur votre
            site WordPress, WooCommerce ou Prestashop. À La Rochelle, et à
            distance partout en France.
          </p>
        </Reveal>
        <Reveal i={2}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="home-btn home-btn-shine home-btn-glow"
            >
              Décrire mon problème
            </Link>
            <a href="tel:+33682963889" className="home-btn-ghost home-glassy">
              06 82 96 38 89
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function TmaOnDemand() {
  return (
    <div className="home">
      <Layout hero={<Hero />}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="container py-16 md:py-24">
          <SectionHeading text="Une heure de développement règle souvent ce qui bloque depuis des semaines. Voici ce qui m’arrive le plus souvent par ce formulaire.">
            Ce qu’une intervention ponctuelle règle
          </SectionHeading>
          <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
            {CASES.map((item, i) => (
              <Reveal key={item.title} i={i}>
                <article className="grid gap-x-12 gap-y-3 py-8 md:grid-cols-[280px_1fr]">
                  <h3 className="text-xl font-semibold tracking-tight text-balance text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-(--home-muted)">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
        >
          <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Décrivez le problème
              </h2>
              <span className="home-rule mt-5" aria-hidden />
              <div className="mt-5 max-w-[44ch] space-y-4 leading-7 text-(--home-muted)">
                <p>
                  Indiquez l’adresse du site, sa plateforme, ce qui ne
                  fonctionne plus et ce que vous avez déjà tenté. Une capture
                  d’écran du message d’erreur aide.
                </p>
                <p>
                  Je vous réponds dans la journée avec un diagnostic et le temps
                  estimé. Vous validez, j’interviens à distance, et vous recevez
                  un compte rendu de ce qui a été fait.
                </p>
                <p>
                  Je développe sur WordPress et Prestashop depuis 2008 et je
                  maintiens plus de 150 sites. Si le problème révèle un besoin
                  plus large, je vous propose un{' '}
                  <Link href={RouteLink.prestationTma} className={linkClass}>
                    forfait de maintenance
                  </Link>
                  , jamais l’inverse.
                </p>
              </div>
            </Reveal>
            <Reveal i={1}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Quand un forfait vaut mieux qu’un dépannage
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                <p>
                  Un dépannage remet le site en route. Il ne le met pas à jour
                  chaque semaine, ne le sauvegarde pas chaque jour et ne
                  surveille pas que le formulaire ou le panier fonctionnent
                  encore à trois heures du matin. Si vous m’appelez une deuxième
                  fois dans l’année pour le même site, le forfait revient moins
                  cher et vous évite la panne suivante.
                </p>
                <p>
                  Les forfaits{' '}
                  <Link
                    href={RouteLink.prestationTmaWordPress}
                    className={linkClass}
                  >
                    WordPress
                  </Link>{' '}
                  et{' '}
                  <Link
                    href={RouteLink.prestationTmaPrestashop}
                    className={linkClass}
                  >
                    Prestashop
                  </Link>{' '}
                  démarrent à 39 € HT par mois, avec des heures de développement
                  incluses et un délai d’intervention garanti.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="faq"
          className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
        >
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Questions fréquentes sur le dépannage
              </h2>
              <span className="home-rule mt-5" aria-hidden />
              <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
                Prix, délai, accès nécessaires : ce qu’on me demande avant une
                intervention.
              </p>
            </Reveal>
            <div className="divide-y divide-white/10">
              {FAQ.map((item, i) => (
                <Reveal key={item.question} i={i}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-(--home-muted) transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[64ch] leading-7 text-(--home-muted)">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
