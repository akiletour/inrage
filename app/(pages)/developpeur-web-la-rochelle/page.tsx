import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Character from '@/components/Character'
import ButtonLink from '@component/ButtonLink'
import ContactForm from '@component/ContactForm'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import ExpertisePrestashop from '@image/expertises/prestashop.png'
import ExpertiseReact from '@image/expertises/react.svg'
import ExpertiseSymfony from '@image/expertises/symfony.png'
import ExpertiseWordPress from '@image/expertises/wordpress.png'
import PrestationHosting from '@image/prestations/hebergement-optimise-rapide.png'
import PrestationTma from '@image/prestations/infogerance-tma-maintenance.png'
import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink, getCanonicalUrl } from '@lib/router'

const PAGE_TITLE = 'Développeur web freelance à La Rochelle'

export const metadata = {
  title: 'Développeur web freelance à La Rochelle | Pascal Gault',
  description:
    'Développeur web freelance à La Rochelle depuis 2008 : sites WordPress, boutiques Prestashop, applications React et Symfony, maintenance. Devis gratuit sous 24h.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.developpeurLaRochelle),
  },
  openGraph: {
    title: 'Développeur web freelance à La Rochelle | Pascal Gault',
    description:
      'Création de sites WordPress, boutiques Prestashop, applications React et Symfony, maintenance. Développeur indépendant basé à La Rochelle, en Charente-Maritime.',
    url: getCanonicalUrl(RouteLink.developpeurLaRochelle),
    siteName: 'inRage',
    locale: 'fr_FR',
    type: 'website',
  },
}

const LOCAL_PROJECT_SLUGS = [
  'camping-la-mouette-rieuse',
  'graphiste-romain-ouvrard',
  'kamelab',
  'santeenvironnement-nouvelleaquitaine',
]

const KEY_FIGURES = [
  { value: '2008', label: 'Développeur web à La Rochelle depuis' },
  { value: '150+', label: 'Sites WordPress et Prestashop en maintenance' },
  { value: '5,0', label: 'Note moyenne des avis Google' },
  { value: '24 h', label: 'Pour recevoir votre devis détaillé' },
]

type Service = {
  title: string
  text: string
  href?: string
  image: StaticImageData
}

const SERVICES: Service[] = [
  {
    title: 'Site vitrine WordPress',
    text: 'Thèmes sur mesure avec Sage, ACF et blocs Gutenberg. Vous administrez vos contenus en autonomie sur un site rapide, sécurisé et pensé pour le référencement local.',
    href: RouteLink.prestationWordPress,
    image: ExpertiseWordPress,
  },
  {
    title: 'Boutique Prestashop et WooCommerce',
    text: 'Création de boutiques, développement de modules, migrations et connexion à votre ERP ou vos transporteurs, de Prestashop 1.6 aux versions actuelles.',
    href: RouteLink.prestationPrestashop,
    image: ExpertisePrestashop,
  },
  {
    title: 'Applications React et Next.js',
    text: 'Interfaces modernes, outils internes et sites à fort trafic développés en TypeScript, performants et maintenables.',
    href: RouteLink.prestationReact,
    image: ExpertiseReact,
  },
  {
    title: 'Applications métier Symfony',
    text: 'Extranet, outil de gestion, API ou plateforme sur mesure : des applications robustes, comme l’outil de picking d’entrepôt ou le logiciel Invoicer.',
    href: RouteLink.prestationSymfony,
    image: ExpertiseSymfony,
  },
  {
    title: 'Maintenance et infogérance',
    text: 'Mises à jour, sécurité, sauvegardes, surveillance et corrections. Vous vous concentrez sur votre activité, je m’occupe de la technique.',
    href: RouteLink.prestationTma,
    image: PrestationTma,
  },
  {
    title: 'Hébergement infogéré',
    text: 'Votre site tourne en France sur une infrastructure que j’administre moi-même : supervision 24h/24, sauvegardes chaque nuit, serveurs doublés et protection contre les attaques.',
    href: RouteLink.prestationHosting,
    image: PrestationHosting,
  },
]

const STEPS = [
  {
    title: 'Échange et cadrage',
    text: 'Nous discutons de votre activité, de vos objectifs et de vos contraintes, à La Rochelle ou en visio. Je vous remets un devis détaillé sous 24 heures.',
  },
  {
    title: 'Conception',
    text: 'Arborescence, maquettes et choix techniques sont validés ensemble avant la première ligne de code, avec des designers et consultants webmarketing freelances rochelais si besoin.',
  },
  {
    title: 'Développement',
    text: 'Intégration sur mesure, performance, accessibilité et référencement naturel sont intégrés dès le développement. Vous suivez l’avancement en préproduction.',
  },
  {
    title: 'Mise en ligne et suivi',
    text: 'Déploiement, formation à l’administration de votre site, puis maintenance et hébergement si vous le souhaitez. Je reste votre interlocuteur unique.',
  },
]

const REASONS = [
  {
    title: 'Un contact direct',
    text: 'Pas de chef de projet ni de sous-traitance : vous échangez avec celui qui développe, à La Rochelle, par téléphone ou autour d’un café.',
  },
  {
    title: 'Quinze ans de terrain',
    text: 'Des centaines de projets livrés depuis 2008, en agence puis en indépendant, pour des TPE, des PME, des collectivités et des grands comptes.',
  },
  {
    title: 'Un réseau local',
    text: 'Graphistes, webdesigners, rédacteurs et consultants SEO : je m’appuie sur des collectifs de freelances rochelais pour couvrir l’ensemble de votre projet.',
  },
]

const FAQ = [
  {
    question: 'Travaillez-vous uniquement avec des clients de La Rochelle ?',
    answer:
      'Non. Je suis basé à La Rochelle, rue Jean Perrin, et je rencontre volontiers mes clients de La Rochelle, de l’agglomération et de Charente-Maritime sur place. Je travaille aussi à distance avec des entreprises de toute la France, comme les Éditions Delcourt, l’Institut Imagine ou VMZinc.',
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'WordPress (thèmes sur mesure avec Sage, ACF et Gutenberg), Prestashop et WooCommerce pour l’e-commerce, Symfony pour les applications métier, React et Next.js pour les interfaces modernes. Côté serveur : Debian, Docker, Kubernetes et AWS.',
  },
  {
    question: 'Combien coûte la création d’un site internet à La Rochelle ?',
    answer:
      'Chaque projet est chiffré sur devis, gratuitement et sous 24 heures, après un échange sur vos besoins. Un site vitrine WordPress, une boutique Prestashop ou une application React n’ont pas le même périmètre ni le même budget. Le devis détaille chaque poste pour que vous sachiez exactement ce que vous payez.',
  },
  {
    question: 'Quels sont les délais pour un site vitrine ou une boutique ?',
    answer:
      'Un site vitrine WordPress se réalise généralement en quelques semaines, une boutique Prestashop ou WooCommerce en un à trois mois selon le catalogue et les intégrations. Le planning est fixé ensemble au démarrage et respecté.',
  },
  {
    question: 'Assurez-vous la maintenance après la mise en ligne ?',
    answer:
      'Oui. Je propose des forfaits d’infogérance WordPress et Prestashop qui couvrent les mises à jour, la sécurité, les sauvegardes et la surveillance. Plus de 150 sites sont aujourd’hui sous maintenance. Des interventions ponctuelles à l’heure sont aussi possibles.',
  },
  {
    question: 'Peut-on se rencontrer à La Rochelle ?',
    answer:
      'Bien sûr. Je reçois au 10-14 rue Jean Perrin à La Rochelle, du lundi au samedi de 9h à 18h, et je me déplace dans vos locaux sur La Rochelle, Périgny, Aytré, Lagord, Puilboreau, Châtelaillon et le reste de la Charente-Maritime.',
  },
]

function buildJsonLd() {
  const pageUrl = getCanonicalUrl(RouteLink.developpeurLaRochelle)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Développement web freelance à La Rochelle',
      serviceType: 'Développement web',
      description:
        'Création de sites internet WordPress, boutiques Prestashop et WooCommerce, applications React, Next.js et Symfony, maintenance et infogérance, par un développeur freelance basé à La Rochelle.',
      url: pageUrl,
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
        itemListElement: SERVICES.filter((service) => service.href).map(
          (service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              url: getCanonicalUrl(service.href),
            },
          })
        ),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
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
          name: PAGE_TITLE,
          item: pageUrl,
        },
      ],
    },
  ]
}

function ServiceCard({ title, text, href, image }: Service) {
  return (
    <li className="flex flex-col gap-4 p-6 bg-gray-dark border border-[#2f2f2f] rounded-lg transition-colors duration-150 hover:border-orange/60">
      <div className="relative w-14 h-14">
        <Image
          src={image}
          alt=""
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
      <h3 className="text-white font-medium text-xl text-balance">{title}</h3>
      <p className="text-sm text-gray-light flex-1">{text}</p>
      {href && <ButtonLink href={href}>En savoir plus</ButtonLink>}
    </li>
  )
}

export default async function DeveloppeurWebLaRochelle() {
  const jsonLd = buildJsonLd()
  const allProjects = await getPortfolioItems(-1)
  const localProjects = LOCAL_PROJECT_SLUGS.map((slug) =>
    allProjects.find((project) => project.slug === slug)
  ).filter((project) => project !== undefined)

  return (
    <Layout title={PAGE_TITLE}>
      {jsonLd.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="container mt-8 grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl text-balance">
            <span className="font-bold">
              PASCAL GAULT, DÉVELOPPEUR INDÉPENDANT
            </span>
            <br />
            <span className="font-light">
              INSTALLÉ À LA ROCHELLE DEPUIS 2008
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-light">
            Vous cherchez un développeur web à La Rochelle pour créer, refondre
            ou maintenir votre site internet ? Je suis Pascal Gault, développeur
            et intégrateur freelance, fondateur de inRage. Depuis plus de quinze
            ans, j’accompagne les entreprises, commerces, associations et
            agences de La Rochelle et de Charente-Maritime.
          </p>
          <p className="mt-4">
            Mon parcours a commencé dans les agences web rochelaises, chez
            Moonscoop puis Megami Production, avant de créer inRage en 2011.
            Être un freelance local ne m’empêche pas de travailler avec Paris ou
            Bordeaux : cela me permet surtout de vous rencontrer facilement, de
            comprendre votre marché et de rester joignable. Mon bureau est au
            10-14 rue Jean Perrin, et je me déplace dans toute l’agglomération,
            de Périgny à Châtelaillon-Plage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={RouteLink.contact}>
              <span className="button">Demander un devis gratuit</span>
            </Link>
            <a href="#realisations" className="button-outline">
              Voir mes réalisations
            </a>
          </div>
        </div>
        <div
          className="hidden md:flex justify-center self-start max-h-[420px] overflow-hidden"
          aria-hidden="true"
        >
          <Character />
        </div>
      </section>

      <section className="container mt-16">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-[#2f2f2f]">
          {KEY_FIGURES.map((figure) => (
            <li key={figure.value}>
              <div className="text-orange font-bold text-4xl tabular-nums">
                {figure.value}
              </div>
              <div className="mt-1 text-sm text-gray-light">{figure.label}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-darker mt-16 py-16">
        <div className="container">
          <SectionTitle
            title={['Mes prestations', 'à La Rochelle']}
            content="Un interlocuteur unique pour concevoir, développer, héberger et maintenir votre site internet ou votre application web, quel que soit votre secteur d’activité."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </ul>
        </div>
      </section>

      <section id="realisations" className="container py-16 scroll-mt-24">
        <SectionTitle
          title={['Des clients', 'à La Rochelle']}
          content="Camping, graphiste, agence de communication ou portail régional : quelques projets réalisés pour des clients de La Rochelle et de Nouvelle-Aquitaine, aux côtés de structures nationales comme les Éditions Delcourt, l’Institut Imagine ou VMZinc."
        />
        <div className="mt-10 grid gap-4 sm:gap-0 grid-cols-2 md:grid-cols-4">
          {localProjects.map((project) => (
            <ProjectItem
              key={project.slug}
              title={project.title}
              slug={project.slug}
              image={`/images/portfolio/${project.thumbnail}`}
              support={project.support}
            />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={RouteLink.portfolio}>
            Voir tout le portfolio
          </ButtonLink>
        </div>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container">
          <SectionTitle
            title={['Comment se déroule', 'un projet']}
            content="Une méthode simple et transparente, du premier échange à la mise en ligne, avec un seul interlocuteur du début à la fin."
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="pt-6 border-t-2 border-orange/60">
                <div className="text-orange font-bold text-3xl tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-medium text-xl mt-2">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-light">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container py-16">
        <SectionTitle
          title={['Pourquoi un freelance', 'à La Rochelle']}
          content="Choisir un développeur indépendant local, c’est parler directement à la personne qui code votre site, sans intermédiaire."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <h3 className="text-orange font-semibold text-lg">
                {reason.title}
              </h3>
              <p className="mt-3 text-gray-light">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-gray-light">
              Les questions que me posent le plus souvent les entreprises de La
              Rochelle avant de démarrer un projet web.
            </p>
            <p className="mt-6">
              <Link href={RouteLink.aboutMe}>
                <span className="text-orange underline">
                  Découvrir mon parcours
                </span>
              </Link>
            </p>
          </div>
          <div className="divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
            {FAQ.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-white font-medium text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="flex-none mt-1 text-orange text-2xl leading-none transition-transform duration-150 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-gray-light max-w-[65ch]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16" id="contact">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Parlons de votre projet web à La Rochelle
            </h2>
            <p className="mt-4 text-gray-light">
              Décrivez-moi votre besoin, je vous réponds dans la journée avec un
              devis détaillé. Vous préférez le téléphone ? Je suis joignable du
              lundi au samedi, de 9h à 18h.
            </p>
            <a
              href="tel:0682963889"
              className="mt-6 inline-block text-3xl font-bold text-orange whitespace-nowrap tabular-nums transition-colors duration-150 hover:text-orange-dark"
            >
              06 82 96 38 89
            </a>
            <address className="mt-4 not-italic text-sm text-gray-light">
              inRage, 10-14 rue Jean Perrin
              <br />
              17000 La Rochelle
            </address>
          </div>
          <ContactForm lg />
        </div>
      </section>
    </Layout>
  )
}
