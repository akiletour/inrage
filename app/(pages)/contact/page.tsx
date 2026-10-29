import '@component/home/home.css'

import Link from 'next/link'

import { GOOGLE_PLACE_URL } from '@component/about/data'
import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import Layout from '@component/Layout'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Un projet web ? Parlons-en - Contactez-moi - Pascal GAULT',
  description:
    'Un projet web à La Rochelle ? Développeur freelance, je vous réponds dans la journée. Contactez-moi par formulaire ou au 06 82 96 38 89 pour un devis gratuit.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.contact),
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
          name: 'Contact',
          item: getCanonicalUrl(RouteLink.contact),
        },
      ],
    },
    {
      '@type': 'ContactPage',
      url: getCanonicalUrl(RouteLink.contact),
      name: 'Contactez-moi',
      about: { '@id': getCanonicalUrl('/#business') },
    },
  ],
}

const linkClass =
  'font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)'

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
      <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
      <div className="container pt-6 md:pt-12">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Contactez-moi
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Un site à créer, une boutique à reprendre, un site en panne ou une
              question sur la maintenance : décrivez votre besoin en quelques
              lignes, je vous réponds dans la journée.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <div className="home">
      <Layout hero={<Hero />}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="container pt-4 pb-16 md:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <Reveal>
              <ContactForm lg />
              <p className="mt-6 max-w-[60ch] text-sm leading-6 text-(--home-muted)">
                Pour aller plus vite, indiquez l’adresse de votre site s’il
                existe, la technologie si vous la connaissez (WordPress,
                Prestashop, autre) et le délai souhaité.
              </p>
            </Reveal>
            <Reveal i={1}>
              <div className="divide-y divide-white/10">
                <div className="pb-8">
                  <h2 className="text-xl font-semibold text-white">
                    Par téléphone
                  </h2>
                  <a
                    href="tel:+33682963889"
                    className="home-num mt-3 block text-3xl font-bold text-(--home-orange-text) transition-colors hover:text-white"
                  >
                    06 82 96 38 89
                  </a>
                  <p className="mt-2 leading-7 text-(--home-muted)">
                    Du lundi au samedi, de 9 h à 18 h. Si je suis en
                    rendez-vous, je rappelle dans la journée.
                  </p>
                </div>
                <div className="py-8">
                  <h2 className="text-xl font-semibold text-white">
                    À La Rochelle
                  </h2>
                  <p className="mt-3 leading-7 text-white/85">
                    inRage SARL
                    <br />
                    10-14 rue Jean Perrin
                    <br />
                    17000 La Rochelle
                  </p>
                  <p className="mt-3 leading-7 text-(--home-muted)">
                    Je reçois sur rendez-vous et je me déplace en
                    Charente-Maritime. La plupart des projets se mènent à
                    distance, en visio et sur vos outils.
                  </p>
                  <p className="mt-3">
                    <a
                      href={GOOGLE_PLACE_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={linkClass}
                    >
                      Les avis sur la fiche Google
                    </a>
                  </p>
                </div>
                <div className="pt-8">
                  <h2 className="text-xl font-semibold text-white">
                    Un site en panne ?
                  </h2>
                  <p className="mt-3 leading-7 text-(--home-muted)">
                    Décrivez le problème ici ou passez par la{' '}
                    <Link
                      href={RouteLink.prestationTmaOnDemand}
                      className={linkClass}
                    >
                      maintenance ponctuelle
                    </Link>
                    , facturée à l’heure et sans engagement.
                  </p>
                </div>
              </div>
              <p className="home-num mt-10 text-xs leading-5 text-white/40">
                Siret 813 430 592 00010, NAF 6201Z, RCS La Rochelle 813 430 592
              </p>
            </Reveal>
          </div>
        </section>
      </Layout>
    </div>
  )
}
