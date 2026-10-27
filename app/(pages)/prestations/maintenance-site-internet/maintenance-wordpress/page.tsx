import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import Layout from '@component/Layout'
import NoScrollLink from '@component/NoScrollLink'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import TableHeader from '@component/tma/TableHeader'
import TableLine from '@component/tma/TableLine'
import BgTma from '@image/bg-tma.jpeg'
import LogoGrey from '@image/logo-grey-inline-white.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { EntriesType } from '@type/portfolio'

export const metadata = {
  title: 'Maintenance WordPress à La Rochelle | Freelance - inRage',
  description:
    'Maintenance, support et dépannage WordPress à La Rochelle par un développeur freelance. Plus de 150 sites en infogérance : mises à jour, sécurité, sauvegardes, intervention garantie.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaWordPress),
  },
}

const entries: EntriesType = [
  {
    id: 1,
    name: "Sauvegarde de l'ensemble de vos données",
    excerpt:
      'Sauvegarde journalière de votre base de données et de vos fichiers sur nos serveurs sécurisés',
    values: ['1x|par jour', '1x|par jour', '2x|par jour'],
  },
  {
    id: 2,
    name: 'Supervision logicielle',
    excerpt:
      'Scan de sécurité toutes les heures, rapport disponible dans une interface dédiée. Surveillance des mises à jour de vos extensions, WordPress et thème',
    values: [false, true, true],
  },
  {
    id: 3,
    name: 'Environnement de pré-production',
    excerpt:
      'Application des mises à jour et développement sur nos serveurs avant de les basculer sur votre site en production',
    values: [false, true, true],
  },
  {
    id: 4,
    name: 'Supervision pro-active',
    excerpt:
      'Robot de surveillance du parcours client pour tester que toutes les pages fonctionnent correctement',
    values: [false, false, true],
  },
  {
    id: 5,
    name: 'Mise à jour et montée de version majeure',
    excerpt:
      "Lors de la prise en charge et tout au long de la maintenance de votre site WordPress. Je met à jour WordPress vers sa dernière version et ainsi que toutes les extensions pour qu'elles soient compatible avec cette version",
    values: [true, true, true],
  },
  {
    id: 6,
    name: 'Analyse de sécurité',
    excerpt:
      'Application et surveillance quotidienne de 22 points de sécurité sur votre installation de WordPress',
    values: [true, true, true],
  },
  {
    id: 7,
    name: 'iThemes Security Pro',
    excerpt: 'Une licence de sécurité offerte pendant tout le contrat de TMA',
    values: [true, true, true],
  },
  {
    id: 8,
    name: 'WP Rocket',
    excerpt:
      'Une licence de cache pour votre site offerte pendant toute la durée de votre contrat TMA',
    values: [true, true, true],
  },
  {
    id: 15,
    name: 'Mise à niveau de la version PHP',
    excerpt:
      'Je vous accompagne pour monter la version de PHP de votre hébergement pour rester compatible avec vos plugins et le coeur de WordPress. Sous réserve de faisabilité avec votre thème et votre hébergeur',
    values: [false, true, true],
  },
  {
    id: 14,
    name: 'Rapport de maintenance',
    excerpt:
      'Chaque mois, vous recevez un rapport de maintenance de toutes les actions effectuées sur votre site au format PDF avec les dernières recommandations et les points clé de vigilance de votre site WordPress',
    values: [true, true, true],
  },
  {
    id: 9,
    name: 'Développement spécifique*',
    excerpt:
      'Heures de développement d’infogérance pour corriger ou faire évoluer votre site',
    values: ['1|heure', '3|heures', '8|heures'],
  },
  {
    id: 10,
    name: 'Supervision 24/7 et sur 365 jours',
    excerpt:
      'Dans le forfait « Tranquilité », l’astreinte est de 9h à 19h, du lundi au vendredi inclus',
    values: [false, true, true],
  },
  {
    id: 11,
    name: 'GTI',
    excerpt:
      "Garantie de temps d'intervention au moment ou vous déclarer l’intervention dans la console",
    values: ['6h', '4h', '2h'],
  },
  {
    id: 12,
    name: 'Certificat SSL',
    excerpt:
      'Installation et configuration d’un certificat SSL avec modification (si besoin) sur le site pour prendre en charge le SSL',
    values: [true, true, true],
  },
  {
    id: 13,
    name: 'Engagement',
    excerpt: "Durée de l'engagement de votre contrat de maintenance inRage",
    values: ['12 mois', '12 mois', '12 mois'],
  },
]

const FAQ: FaqItem[] = [
  {
    question:
      'Mon site WordPress a été développé par quelqu’un d’autre, pouvez-vous le reprendre ?',
    answer:
      'Oui, c’est le cas de la majorité des sites que je maintiens. La prise en charge commence par un audit du thème, des extensions et de l’hébergement, puis par une mise à jour complète sur un environnement de pré-production avant toute modification en ligne.',
  },
  {
    question: 'Que se passe-t-il si mon site est piraté ou tombe en panne ?',
    answer:
      'Vous déclarez l’incident dans la console et j’interviens dans le délai garanti par votre forfait, de 6 h à 2 h. Le site est restauré depuis la sauvegarde la plus récente, la faille est identifiée et corrigée, puis vous recevez un compte rendu.',
  },
  {
    question: 'Intervenez-vous sur place à La Rochelle ?',
    answer:
      'La maintenance se fait à distance, mais je reçois au 10-14 rue Jean Perrin à La Rochelle et je me déplace dans vos locaux sur l’agglomération et la Charente-Maritime pour la prise en charge, une formation ou un point annuel.',
  },
  {
    question: 'Faut-il un engagement ?',
    answer:
      'Les forfaits sont engagés sur 12 mois, ce qui permet de planifier les mises à jour majeures et la montée de version PHP. Pour une correction isolée sans contrat, la maintenance ponctuelle est facturée à l’heure.',
  },
]

const SERVICE_JSON_LD = {
  '@context': 'https://schema.org',
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
    { name: 'Tranquilité', price: '39', priceCurrency: 'EUR' },
    { name: 'Standard', price: '55', priceCurrency: 'EUR' },
    { name: 'Sérénité', price: '75', priceCurrency: 'EUR' },
  ].map((offer) => ({
    '@type': 'Offer',
    name: `Forfait ${offer.name}`,
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      unitText: 'mois HT',
    },
  })),
}

export default function TmaWordPress() {
  return (
    <Layout
      title={['Maintenance et support WordPress', 'à La Rochelle']}
      excerpt={[
        'Mises à jour, sécurité, sauvegardes et dépannage de votre site WordPress, par un développeur freelance installé à La Rochelle.',
        'Plus de 150 sites sont sous infogérance inRage, en Charente-Maritime et dans toute la France.',
      ]}
      tmaLayout={true}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <div className="container">
        <TextImage position="right" image={LogoGrey}>
          <div className="text-left">
            <h2>
              <span className="text-orange uppercase text-4xl font-medium">
                Supervision et infogérance
              </span>
              <span className="block text-white font-light text-3xl">
                24h/24 et 7j/7
              </span>
            </h2>

            <p className="mt-6 text-xl text-gray-light">
              Avec plus de 150 clients en infogérance WordPress, nous avons mis
              en place plusieurs solutions pour nous assurer que votre site se
              comporte comme il le devrait.
            </p>
            <p className="mt-6 text-gray-light">
              Toutes les heures (configurable), nous inspectons chacune des
              pages de votre site pour y vérifier que tous les éléments sont à
              la bonne place et que le code source n’a pas été altéré.
            </p>
            <p className="mt-6 text-gray-light">
              Nos robots vérifient l’intégralité de vos fichiers et de la base
              de données pour prévenir un futur piratage.
            </p>

            <p className="mt-6 text-gray-light">
              Pour vous permettre d&apos;avoir un meilleur suivi ainsi
              qu&apos;une maintenance fiable, nos forfaits sont à engagement de
              12 mois. Si vous désirez une intervention ponctuelle sur votre
              site, vous pouvez vous rendre dans la section{' '}
              <NoScrollLink href={RouteLink.prestationTmaOnDemand}>
                <span className="underline text-orange">
                  Maintenance ponctuelle
                </span>
              </NoScrollLink>
              .
            </p>
          </div>
        </TextImage>

        <section
          className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16"
          aria-labelledby="support-wordpress"
        >
          <div>
            <h2
              id="support-wordpress"
              className="text-3xl font-medium leading-tight text-white text-balance"
            >
              Support et dépannage WordPress à La Rochelle
            </h2>
            <p className="mt-6 text-gray-light">
              La plupart des sites que je reprends ont été créés par une autre
              agence ou un autre freelance, parfois il y a dix ans. Ils arrivent
              avec un thème plus mis à jour, une version de PHP dépassée et des
              extensions abandonnées.
            </p>
            <p className="mt-4 text-gray-light">
              Je commence par un audit sur pré-production, je remets le site à
              niveau, puis je le surveille. Vous avez un seul interlocuteur,
              joignable, qui connaît votre site, et que vous pouvez rencontrer à
              La Rochelle.
            </p>
            <p className="mt-6">
              <NoScrollLink href={RouteLink.developpeurLaRochelle}>
                <span className="text-orange underline">
                  Mon activité de développeur à La Rochelle
                </span>
              </NoScrollLink>
            </p>
          </div>
          <div>
            <p className="text-white text-xl font-medium">
              Les demandes qui arrivent le plus souvent
            </p>
            <ul className="styled-list mt-4 text-gray-light">
              <li>
                Une mise à jour de WordPress ou d’une extension a cassé une
                page, un formulaire ou le paiement.
              </li>
              <li>
                Le site affiche une page blanche, une erreur 500 ou un avis de
                sécurité de l’hébergeur.
              </li>
              <li>
                Le site a été piraté : redirections, spam, contenus injectés,
                blocage par Google.
              </li>
              <li>
                Le site est lent, le cache n’est pas configuré, les images ne
                sont pas optimisées.
              </li>
              <li>
                L’hébergeur impose une montée de version PHP et le thème ne la
                supporte pas.
              </li>
              <li>
                Personne ne sait plus où sont les accès, les sauvegardes ni le
                nom de domaine.
              </li>
            </ul>
            <p className="mt-6 text-gray-light">
              Pour une intervention isolée sans contrat, voyez la{' '}
              <NoScrollLink href={RouteLink.prestationTmaOnDemand}>
                <span className="text-orange underline">
                  maintenance ponctuelle
                </span>
              </NoScrollLink>
              . Si l’hébergement est en cause, je peux aussi{' '}
              <NoScrollLink href={RouteLink.prestationHosting}>
                <span className="text-orange underline">
                  héberger votre site en France
                </span>
              </NoScrollLink>
              .
            </p>
          </div>
        </section>
      </div>

      <div className="relative">
        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <div className="container relative z-10">
          <TableHeader
            support="WordPress"
            types={[
              { name: 'Tranquilité', price: '39€ ht/mois' },
              { name: 'Standard', price: '55€ ht/mois' },
              { name: 'Sérénité', price: '75€ ht/mois' },
            ]}
          />

          <div className="flex flex-col space-y-8 mt-8">
            {entries.map(({ id, name, excerpt, values }) => (
              <TableLine
                key={id}
                title={name}
                content={excerpt}
                values={values}
              />
            ))}
          </div>

          <div className="ml-8 mt-8">
            <span className="text-orange font-bold text-4xl leading-5">*</span>{' '}
            Le nombre d&apos;heures est personnalisable selon vos besoins.
          </div>
        </div>
        <Image
          className="-z-10"
          src={BgTma}
          alt="Offres de maintenance TMA inRage"
          fill
          sizes="100vw"
        />
        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
      </div>

      <FaqSection
        intro="Ce que me demandent les entreprises de La Rochelle et de Charente-Maritime avant de confier la maintenance de leur site WordPress."
        items={FAQ}
      />

      <div className="container" id="contact">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
