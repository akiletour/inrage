import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import FranceMap from '@component/FranceMap'
import Layout from '@component/Layout'
import ExpertisePrestashop from '@image/expertises/prestashop.png'
import ExpertiseReact from '@image/expertises/react.svg'
import ExpertiseSymfony from '@image/expertises/symfony.png'
import ExpertiseWordPress from '@image/expertises/wordpress.png'
import { RouteLink, getCanonicalUrl } from '@lib/router'

const PAGE_TITLE = 'Hébergement de site internet infogéré'
const STATUS_URL = 'https://status.inrage.fr'

export const metadata = {
  title: 'Hébergement web souverain et infogéré en France - inRage',
  description:
    'Hébergement en France géré par inRage : supervision 24h/24, sauvegardes quotidiennes, serveurs redondants et protection contre les attaques. WordPress, Prestashop, React.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationHosting),
  },
  openGraph: {
    title: 'Hébergement web souverain et infogéré en France - inRage',
    description:
      'Votre site hébergé en France et surveillé par celui qui le développe : supervision 24h/24, sauvegardes, redondance et sécurité, sans jargon.',
    url: getCanonicalUrl(RouteLink.prestationHosting),
    siteName: 'inRage',
    locale: 'fr_FR',
    type: 'website',
  },
}

const PLEDGES = [
  {
    title: 'Aucune donnée ne quitte le pays',
    text: 'Fichiers, base de données, sauvegardes, journaux : tout est stocké sur des serveurs situés en France. Pas de copie chez un géant américain, pas de transfert vers un sous-traitant hors d’Europe.',
  },
  {
    title: 'Aucune dépendance à un hyperscaler',
    text: 'L’infrastructure est administrée par inRage, pas louée sur une plateforme dont les conditions changent chaque année. Vous savez où sont vos données et qui y a accès.',
  },
  {
    title: 'Un humain, à La Rochelle',
    text: 'Pas de ticket dans une file d’attente. Celui qui répond au téléphone est celui qui a construit votre site et qui surveille ses serveurs, jour et nuit.',
  },
]

const JOURNEY = [
  {
    title: 'Votre visiteur',
    text: 'Il tape votre adresse ou clique sur un lien.',
  },
  {
    title: 'Le bouclier',
    text: 'Un pare-feu et un bouclier collaboratif filtrent les robots et les adresses malveillantes signalées par des milliers de serveurs dans le monde. Une attaque est bloquée avant d’atteindre votre site.',
  },
  {
    title: 'Les serveurs',
    text: 'Votre site tourne sur plusieurs machines qui se relaient automatiquement. Si l’une tombe, les autres prennent la suite sans coupure visible.',
  },
  {
    title: 'Le coffre',
    text: 'Chaque nuit, une copie complète de vos fichiers et de votre base de données est déposée sur un espace séparé. On restaure en quelques minutes si besoin.',
  },
]

const DAY = [
  {
    time: 'En continu',
    title: 'Supervision',
    text: 'Chaque minute, un robot vérifie que votre site répond correctement. À la moindre anomalie, je reçois une alerte, souvent avant que vous ne remarquiez quoi que ce soit.',
  },
  {
    time: 'À chaque visite',
    title: 'Filtrage',
    text: 'Le bouclier laisse passer vos visiteurs et bloque les robots indésirables et les tentatives d’intrusion.',
  },
  {
    time: 'Chaque nuit',
    title: 'Sauvegarde',
    text: 'Fichiers et base de données sont copiés sur un espace séparé, en France, et conservés plusieurs semaines.',
  },
  {
    time: 'Chaque semaine',
    title: 'Mises à jour',
    text: 'Système, PHP et base de données sont maintenus à jour et sécurisés, sans interruption pour vos visiteurs.',
  },
  {
    time: 'Avant chaque évolution',
    title: 'Espace de test',
    text: 'Un environnement de préproduction permet d’essayer une nouveauté ou une mise à jour avant de la publier sur le site réel.',
  },
]

const COMPARISON = [
  {
    criteria: 'Interlocuteur',
    generic: 'Un support par tickets, séparé de votre développeur',
    inrage: 'La même personne développe, héberge et maintient votre site',
  },
  {
    criteria: 'Supervision',
    generic: 'À votre charge, ou en option',
    inrage: 'Incluse, 24h/24, avec intervention en cas d’alerte',
  },
  {
    criteria: 'Sauvegardes',
    generic: 'Souvent en option, restauration payante',
    inrage: 'Chaque nuit, conservées à part, restauration comprise',
  },
  {
    criteria: 'Panne matérielle',
    generic: 'Site indisponible le temps de la réparation',
    inrage: 'Un autre serveur prend le relais automatiquement',
  },
  {
    criteria: 'Sécurité',
    generic: 'Pare-feu de base',
    inrage: 'Pare-feu, bouclier collaboratif et filtrage des robots',
  },
  {
    criteria: 'Localisation des données',
    generic: 'Variable, parfois hors d’Europe',
    inrage: 'France uniquement, aucune donnée à l’étranger',
  },
  {
    criteria: 'Réglages',
    generic: 'Configuration générique',
    inrage: 'Serveurs réglés pour WordPress, Prestashop, React et Symfony',
  },
]

type Stack = {
  title: string
  href: string
  image: StaticImageData
}

const STACKS: Stack[] = [
  {
    title: 'WordPress',
    href: RouteLink.prestationWordPress,
    image: ExpertiseWordPress,
  },
  {
    title: 'Prestashop',
    href: RouteLink.prestationPrestashop,
    image: ExpertisePrestashop,
  },
  {
    title: 'React & Next.js',
    href: RouteLink.prestationReact,
    image: ExpertiseReact,
  },
  {
    title: 'Symfony',
    href: RouteLink.prestationSymfony,
    image: ExpertiseSymfony,
  },
]

const STEPS = [
  {
    title: 'Audit de l’existant',
    text: 'Le point sur votre site, son trafic et votre hébergeur actuel.',
  },
  {
    title: 'Migration sans coupure',
    text: 'Transfert complet du site, des e-mails et du nom de domaine, sans interruption visible.',
  },
  {
    title: 'Mise en service',
    text: 'Supervision active dès la première minute, point régulier et interlocuteur joignable.',
  },
]

const FAQ = [
  {
    question: 'Où sont hébergées mes données ?',
    answer:
      'En France, uniquement. Les serveurs qui font tourner votre site, ceux qui conservent vos sauvegardes et les outils de supervision sont tous situés sur le territoire français. Aucune donnée n’est transférée à l’étranger, ce qui facilite votre conformité au RGPD.',
  },
  {
    question: 'Puis-je garder mon nom de domaine ?',
    answer:
      'Oui. Votre nom de domaine reste à votre nom et vous en restez propriétaire. Je m’occupe seulement de le faire pointer vers la nouvelle infrastructure, et je peux le gérer pour vous si vous le souhaitez.',
  },
  {
    question: 'Que se passe-t-il si mon site est attaqué ?',
    answer:
      'La plupart des attaques sont bloquées avant d’atteindre votre site grâce au bouclier collaboratif et au pare-feu. Si une tentative passe malgré tout, je suis alerté, j’interviens et, au pire, je restaure la sauvegarde de la veille. Vous êtes informé à chaque étape.',
  },
  {
    question: 'Combien coûte l’hébergement ?',
    answer:
      'Le tarif dépend de la taille de votre site, de son trafic et de vos besoins. Il est établi sur devis, gratuitement et sous 24 heures, et il est souvent couplé à un forfait de maintenance pour couvrir aussi les mises à jour de votre site.',
  },
  {
    question: 'Hébergez-vous uniquement les sites que vous avez créés ?',
    answer:
      'Non. J’héberge aussi des sites WordPress, Prestashop, React ou Symfony développés par d’autres, après un audit rapide pour vérifier qu’ils sont sains et compatibles.',
  },
  {
    question: 'Puis-je changer d’hébergeur plus tard ?',
    answer:
      'Bien sûr. Vous restez propriétaire de votre site, de vos données et de votre nom de domaine. Si vous partez, je vous remets une copie complète et je facilite la transition.',
  },
]

function buildJsonLd() {
  const pageUrl = getCanonicalUrl(RouteLink.prestationHosting)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Hébergement de site internet infogéré',
      serviceType: 'Hébergement web',
      description:
        'Hébergement infogéré en France pour sites WordPress, Prestashop, React et Symfony : supervision 24h/24, sauvegardes quotidiennes, serveurs redondants, protection contre les attaques. Aucune donnée transférée hors de France.',
      url: pageUrl,
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: { '@type': 'Country', name: 'France' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Hébergement infogéré',
        itemListElement: DAY.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.title },
        })),
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
          name: 'Prestations',
          item: getCanonicalUrl(RouteLink.prestations),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: PAGE_TITLE,
          item: pageUrl,
        },
      ],
    },
  ]
}

export default function PrestationHebergement() {
  const jsonLd = buildJsonLd()

  return (
    <Layout
      title={PAGE_TITLE}
      breadcrumbs={[{ link: RouteLink.prestations, title: 'Prestations' }]}
    >
      {jsonLd.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="container mt-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-orange">
              Hébergement souverain
            </p>
            <h2 className="mt-4 text-white font-bold text-balance leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
              Vos données ne quittent pas la France.
            </h2>
            <p className="mt-6 max-w-[60ch] text-xl text-gray-light text-pretty">
              Votre site WordPress, Prestashop, React ou Symfony, hébergé et
              surveillé par celui qui l’a développé, sur une infrastructure
              française administrée par inRage. Aucune exception, aucune petite
              ligne.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={RouteLink.contact}>
                <span className="button">Demander un devis gratuit</span>
              </Link>
              <a href="#engagements" className="button-outline">
                Nos trois engagements
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <FranceMap className="w-full max-w-sm" />
          </div>
        </div>

        <ol
          id="engagements"
          className="mt-16 grid gap-0 md:grid-cols-3 border-t border-[#2f2f2f] scroll-mt-24"
        >
          {PLEDGES.map((pledge, index) => (
            <li
              key={pledge.title}
              className="pt-8 pb-4 md:pr-10 md:border-r md:border-[#2f2f2f] md:last:border-r-0 md:last:pr-0 md:[&:not(:first-child)]:pl-10"
            >
              <div className="text-orange font-bold text-4xl tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 text-white font-medium text-xl text-balance">
                {pledge.title}
              </h3>
              <p className="mt-3 text-gray-light text-pretty">{pledge.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-darker mt-16 py-16">
        <div className="container">
          <h2 className="text-white text-3xl font-bold text-balance">
            Le chemin d’une visite sur votre site
          </h2>
          <p className="mt-4 max-w-2xl text-gray-light">
            Entre votre visiteur et votre site, quatre étapes que vous ne voyez
            jamais et qui font toute la différence le jour où quelque chose se
            passe mal.
          </p>

          <div className="mt-12 rounded-lg border border-orange/50 px-4 pt-3 pb-6 md:px-6 md:pb-8">
            <div className="text-xs uppercase tracking-widest text-orange">
              Supervision 24h/24, 7j/7
            </div>
            <ol className="mt-6 grid gap-6 md:grid-cols-4">
              {JOURNEY.map((step, index) => (
                <li key={step.title} className="relative flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex-none w-9 h-9 rounded-full bg-orange text-gray-darker font-bold flex items-center justify-center tabular-nums">
                      {index + 1}
                    </span>
                    {index < JOURNEY.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden md:block flex-1 h-px bg-[#3a3a3a]"
                      />
                    )}
                  </div>
                  <h3 className="text-white font-medium text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-light">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Une journée type de votre hébergement
            </h2>
            <p className="mt-4 text-gray-light">
              Ce qui se passe pendant que vous vous occupez de votre activité.
            </p>
          </div>
          <ol className="relative border-l border-[#2f2f2f] pl-8 space-y-10">
            {DAY.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-orange bg-gray-dark"
                />
                <div className="text-xs uppercase tracking-widest text-orange">
                  {item.time}
                </div>
                <h3 className="mt-1 text-white font-medium text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-light max-w-[65ch]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container">
          <h2 className="text-white text-3xl font-bold text-balance">
            Hébergement classique ou hébergement inRage
          </h2>
          <p className="mt-4 max-w-2xl text-gray-light">
            Un hébergeur généraliste loue de l’espace. inRage prend la
            responsabilité de votre site de bout en bout.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-widest text-gray">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Critère
                  </th>
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Hébergement classique
                  </th>
                  <th scope="col" className="py-3 font-medium text-orange">
                    Hébergement inRage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
                {COMPARISON.map((row) => (
                  <tr key={row.criteria}>
                    <th
                      scope="row"
                      className="py-4 pr-4 align-top text-left font-medium text-white"
                    >
                      {row.criteria}
                    </th>
                    <td className="py-4 pr-4 align-top text-gray">
                      {row.generic}
                    </td>
                    <td className="py-4 align-top text-gray-light">
                      {row.inrage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Réglé pour vos technologies
            </h2>
            <p className="mt-4 text-gray-light">
              Pas d’offre générique : chaque site est installé avec la
              configuration que son outil demande pour être rapide et stable.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {STACKS.map((stack) => (
                <li key={stack.title}>
                  <Link href={stack.href}>
                    <span className="flex items-center gap-4 rounded-lg border border-[#2f2f2f] px-4 py-3 transition-colors duration-150 hover:border-orange/60">
                      <span className="relative w-10 h-10 flex-none">
                        <Image
                          src={stack.image}
                          alt=""
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </span>
                      <span className="text-white font-medium">
                        {stack.title}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Changer d’hébergeur sans coupure
            </h2>
            <p className="mt-4 text-gray-light">
              Je prends en charge l’intégralité du transfert pour que vos
              visiteurs ne voient rien.
            </p>
            <ol className="mt-8 space-y-6">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-none text-orange font-bold text-2xl tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-light">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div>
            <h2 className="text-white text-3xl font-bold text-balance">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-gray-light">
              Ce que me demandent le plus souvent les clients avant de confier
              l’hébergement de leur site.
            </p>
            <p className="mt-6">
              <a
                href={STATUS_URL}
                className="text-orange underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Voir l’état de l’infrastructure en temps réel
              </a>
            </p>
            <p className="mt-2">
              <Link href={RouteLink.prestationTma}>
                <span className="text-orange underline">
                  Voir aussi mes offres de maintenance
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
              Confiez-moi l’hébergement de votre site
            </h2>
            <p className="mt-4 text-gray-light">
              Décrivez-moi votre site et votre hébergement actuel, je vous
              réponds dans la journée avec une proposition claire. Vous préférez
              le téléphone ? Je suis joignable du lundi au samedi, de 9h à 18h.
            </p>
            <a
              href="tel:0682963889"
              className="mt-6 inline-block text-3xl font-bold text-orange whitespace-nowrap tabular-nums transition-colors duration-150 hover:text-orange-dark"
            >
              06 82 96 38 89
            </a>
          </div>
          <ContactForm lg />
        </div>
      </section>
    </Layout>
  )
}
