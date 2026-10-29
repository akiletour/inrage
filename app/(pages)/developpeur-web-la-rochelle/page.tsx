import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import ListingGrid from '@component/portfolio/ListingGrid'
import { getPortfolioItems, pickProjects } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

const PAGE_TITLE = 'Développeur web freelance à La Rochelle'

export const metadata = {
  title: 'Développeur web freelance à La Rochelle | Pascal Gault',
  description:
    'Développeur web freelance à La Rochelle depuis 2008 : sites WordPress, boutiques Prestashop, applications React et Symfony, maintenance et hébergement en France. Devis gratuit sous 24 h.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.developpeurLaRochelle),
  },
}

const LOCAL_PROJECTS = [
  {
    slug: 'camping-la-mouette-rieuse',
    note: 'La Rochelle. Identité visuelle et site WordPress du camping.',
  },
  {
    slug: 'quadria',
    note: 'Refonte 2026 du site et du catalogue produits sur WordPress.',
  },
  {
    slug: 'biosalines',
    note: 'Île de Ré. Boutique WooCommerce d’un laboratoire de cosmétiques.',
  },
  {
    slug: 'graphiste-romain-ouvrard',
    note: 'La Rochelle. Portfolio d’un graphiste, thème Gutenberg sur mesure.',
  },
  {
    slug: 'santeenvironnement-nouvelleaquitaine',
    note: 'Portail régional d’information en santé environnementale.',
  },
  {
    slug: 'kamelab',
    note: 'La Rochelle. Site de l’agence de communication Kamélab.',
  },
]

const SERVICES = [
  {
    title: 'Site vitrine WordPress',
    text: 'Thème sur mesure, blocs Gutenberg définis avec vous, aucun thème acheté. Vous administrez vos contenus en autonomie sur un site rapide et pensé pour les recherches locales.',
    href: RouteLink.prestationWordPress,
  },
  {
    title: 'Boutique Prestashop et WooCommerce',
    text: 'Création de boutiques, modules, migrations et connexion à votre ERP, votre logiciel de caisse ou vos transporteurs, de Prestashop 1.6 à Prestashop 9.',
    href: RouteLink.prestationPrestashop,
  },
  {
    title: 'Applications React, Next.js et React Native',
    text: 'Tableaux de bord, logiciels en ligne, sites qui chargent instantanément, applications iOS et Android à partir d’une seule base de code.',
    href: RouteLink.prestationReact,
  },
  {
    title: 'Applications métier Symfony',
    text: 'Extranet, outil de gestion, API ou logiciel sur mesure, comme Invoicer, le logiciel de facturation que j’édite depuis La Rochelle.',
    href: RouteLink.prestationSymfony,
  },
  {
    title: 'Maintenance et infogérance',
    text: 'Mises à jour testées, sécurité, sauvegardes, surveillance et corrections. Plus de 150 sites sont suivis chaque semaine.',
    href: RouteLink.prestationTma,
  },
  {
    title: 'Hébergement en France',
    text: 'Votre site tourne sur des serveurs français que j’administre moi-même : supervision 24h/24, sauvegardes chaque nuit, serveurs doublés, protection CrowdSec.',
    href: RouteLink.prestationHosting,
  },
]

const STEPS = [
  {
    title: 'Échange et cadrage',
    text: 'Nous parlons de votre activité, de vos objectifs et de vos contraintes, à La Rochelle ou en visio. Le devis détaillé arrive sous 24 heures.',
  },
  {
    title: 'Conception',
    text: 'Arborescence, maquettes avec Ludovic Boussion, graphiste UI/UX, et choix techniques validés avant la première ligne de code.',
  },
  {
    title: 'Développement',
    text: 'Performance, accessibilité et référencement intégrés dès le développement. Vous suivez l’avancement sur une pré-production protégée.',
  },
  {
    title: 'Mise en ligne et suivi',
    text: 'Déploiement, formation à l’administration de votre site, puis maintenance et hébergement si vous le souhaitez. Je reste votre seul interlocuteur.',
  },
]

const FAQ = [
  {
    question: 'Travaillez-vous uniquement avec des clients de La Rochelle ?',
    answer:
      'Non. Je suis basé à La Rochelle, rue Jean Perrin, et je rencontre volontiers mes clients de La Rochelle, de l’agglomération et de Charente-Maritime sur place. Je travaille aussi à distance avec des entreprises de toute la France, comme les Éditions Delcourt, l’Institut Imagine ou VMZinc, et avec des agences en marque blanche.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'WordPress avec des thèmes sur mesure et des blocs Gutenberg, Prestashop et WooCommerce pour l’e-commerce, Symfony pour les applications métier, React, Next.js et React Native pour les interfaces web et mobiles. Côté serveur : Debian, Docker, Kubernetes, avec une supervision et des sauvegardes que j’administre moi-même.',
  },
  {
    question: 'Combien coûte la création d’un site internet à La Rochelle ?',
    answer:
      'Un site vitrine WordPress se situe entre 2 000 et 3 000 €, une boutique en ligne démarre à 5 000 €, une application sur mesure se chiffre sur devis. Le devis est gratuit, détaillé poste par poste et envoyé sous 24 heures après notre échange.',
  },
  {
    question: 'Quels sont les délais pour un site vitrine ou une boutique ?',
    answer:
      'Un site vitrine WordPress se réalise généralement en quelques semaines, une boutique Prestashop ou WooCommerce en un à trois mois selon le catalogue et les intégrations. Le planning est fixé ensemble au démarrage.',
  },
  {
    question: 'Assurez-vous la maintenance après la mise en ligne ?',
    answer:
      'Oui. Trois mois de garantie, puis des forfaits de maintenance WordPress et Prestashop qui couvrent les mises à jour, la sécurité, les sauvegardes et la surveillance. Plus de 150 sites sont aujourd’hui sous maintenance. Des interventions ponctuelles à l’heure sont aussi possibles.',
  },
  {
    question:
      'Faites-vous aussi du webmastering, du référencement, du graphisme ?',
    answer:
      'Les mises à jour de contenus et les petites évolutions font partie de la maintenance. Pour le graphisme, Ludovic Boussion, graphiste UI/UX du collectif, dessine les maquettes. Pour le référencement suivi et les campagnes Google Ads, un partenaire spécialisé intervient, intégré au devis. Vous gardez un seul interlocuteur.',
  },
  {
    question: 'Peut-on se rencontrer à La Rochelle ?',
    answer:
      'Bien sûr. Je reçois au 10-14 rue Jean Perrin à La Rochelle, du lundi au samedi de 9h à 18h, et je me déplace dans vos locaux à La Rochelle, Périgny, Aytré, Lagord, Puilboreau, Châtelaillon et dans le reste de la Charente-Maritime.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${getCanonicalUrl(RouteLink.developpeurLaRochelle)}#service`,
      name: 'Développement web freelance à La Rochelle',
      serviceType: 'Développement web',
      description:
        'Création de sites internet WordPress, boutiques Prestashop et WooCommerce, applications React, Next.js et Symfony, maintenance et hébergement, par un développeur freelance basé à La Rochelle.',
      url: getCanonicalUrl(RouteLink.developpeurLaRochelle),
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'AdministrativeArea', name: 'Nouvelle-Aquitaine' },
        { '@type': 'Country', name: 'France' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Prestations de développement web',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            url: getCanonicalUrl(service.href),
          },
        })),
      },
    },
    faqJsonLd(FAQ),
    breadcrumbJsonLd([
      {
        name: PAGE_TITLE,
        item: getCanonicalUrl(RouteLink.developpeurLaRochelle),
      },
    ]),
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
              {PAGE_TITLE}
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Je suis Pascal Gault, développeur et intégrateur web indépendant,
              installé à La Rochelle depuis 2008. Je conçois, développe, héberge
              et maintiens les sites et applications des commerces, cabinets,
              associations, PME et agences de La Rochelle, de Charente-Maritime
              et de toute la France. Vous parlez directement à la personne qui
              code votre site.
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
                href={RouteLink.aboutMe}
                className="home-btn-ghost home-glassy"
              >
                Qui je suis
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default async function DeveloppeurWebLaRochelle() {
  const items = await getPortfolioItems()
  const projects = pickProjects(items, LOCAL_PROJECTS)

  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <SectionHeading text="Un interlocuteur unique pour concevoir, développer, héberger et maintenir votre site internet ou votre application, quel que soit votre secteur.">
          Mes prestations à La Rochelle
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} i={i}>
              <article className="grid gap-x-12 gap-y-3 py-8 md:grid-cols-[280px_1fr]">
                <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                  {service.title}
                </h3>
                <div>
                  <p className="leading-7 text-(--home-muted)">
                    {service.text}
                  </p>
                  <p className="mt-3">
                    <Link href={service.href} className="home-link">
                      En savoir plus
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
          <SectionHeading text="Camping, laboratoire, graphiste, industriel, portail régional : des sites réalisés pour des clients de La Rochelle, de l’Île de Ré et de Nouvelle-Aquitaine, aux côtés de structures nationales comme les Éditions Delcourt, l’Institut Imagine ou VMZinc.">
            Des clients à La Rochelle
          </SectionHeading>
          <ListingGrid projects={projects} eager={3} className="mt-14" />
          <div className="mt-12 flex justify-center">
            <Link
              href={RouteLink.portfolio}
              className="home-btn-ghost home-glassy"
            >
              Voir tout le portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Du premier échange à la mise en ligne, avec un seul interlocuteur du début à la fin.">
          Comment se déroule un projet
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
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Pourquoi un freelance à La Rochelle
            </h2>
            <span className="home-rule mt-5" aria-hidden />
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                Pas de chef de projet ni de sous-traitant entre nous : vous
                échangez avec celui qui développe, par téléphone, en visio ou
                autour d’un café rue Jean Perrin. Les décisions se prennent vite
                et rien ne se perd en route.
              </p>
              <p>
                Dix-huit ans de terrain, en agence rochelaise puis en
                indépendant, pour des TPE, des PME, des collectivités et des
                grands comptes. Plus de 150 sites sont suivis aujourd’hui depuis
                La Rochelle, hébergés en France sur des serveurs que
                j’administre.
              </p>
              <p>
                Et je ne suis pas seul : Ludovic Boussion pour le design,
                Matthieu Verdier pour le conseil, un partenaire pour le
                référencement. Vous avez l’étendue d’une agence web à La
                Rochelle avec un seul interlocuteur.{' '}
                <Link href={RouteLink.aboutMe} className="home-link">
                  Découvrir mon parcours
                </Link>
                . Profil également référencé sur{' '}
                <a
                  href="https://www.jeveuxunfreelance.fr"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  jeveuxunfreelance.fr
                </a>
                , annuaire des freelances de La Rochelle.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Questions fréquentes"
        intro="Les questions que me posent le plus souvent les entreprises de La Rochelle avant de démarrer un projet web."
        items={FAQ}
        tone="plain"
      />

      <section className="container pt-6 pb-10 md:pt-10">
        <SectionHeading text="Décrivez-moi votre besoin, je vous réponds dans la journée avec un devis détaillé. Par téléphone, je suis joignable du lundi au samedi, de 9h à 18h, au 06 82 96 38 89. inRage, 10-14 rue Jean Perrin, 17000 La Rochelle.">
          Parlons de votre projet web à La Rochelle
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
