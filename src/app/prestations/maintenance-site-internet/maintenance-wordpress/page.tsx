import Image from 'next/image';

import ContactForm from '@component/ContactForm';
import Diagonal from '@component/Diagonal';
import Layout from '@component/Layout';
import NoScrollLink from '@component/NoScrollLink';
import SectionTitle from '@component/SectionTitle';
import TextImage from '@component/TextImage';
import TableHeader from '@component/tma/TableHeader';
import TableLine from '@component/tma/TableLine';
import BgTma from '@image/bg-tma.jpeg';
import LogoGrey from '@image/logo-grey-inline-white.png';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import { EntriesType } from '@type/graphql/portfolio';

export const metadata = {
  title: 'Maintenance site WordPress | Freelance - inRage',
  description:
    'Développeur freelance, découvrez mon offre de maintenance WordPress sur mesure. Avec plus de 150 clients en infogérance WordPress, je suis expert dans la maintenance TMA WordPress.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaWordPress),
  },
};

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
];

export default function TmaWordPress() {
  return (
    <Layout
      title={['Infogérance & Maintenance TMA', 'WordPress']}
      excerpt={[
        'La sécurité de WordPress est un sujet critique et crucial pour tout administrateur de sites soucieux de préserver son site…',
        'WordPress est LA plus grosse plateforme connue à ce jour avec près de 30% des sites mondiaux qui utilise WordPress.',
      ]}
      tmaLayout={true}
    >
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

            <p className="mt-3 text-xl text-gray-light">
              Avec plus de 150 clients en infogérance WordPress, nous avons mis
              en place plusieurs solutions pour nous assurer que votre site se
              comporte comme il le devrait.
            </p>
            <p className="mt-3 text-gray-light">
              Toutes les heures (configurable), nous inspectons chacune des
              pages de votre site pour y vérifier que tous les éléments sont à
              la bonne place et que le code source n’a pas été altéré.
            </p>
            <p className="mt-3 text-gray-light">
              Nos robots vérifient l’intégralité de vos fichiers et de la base
              de données pour prévenir un futur piratage.
            </p>

            <p className="mt-3 text-gray-light">
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
      </div>

      <div className="relative">
        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
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

          <div className="flex flex-col space-y-4 mt-4">
            {entries.map(({ id, name, excerpt, values }) => (
              <TableLine
                key={id}
                title={name}
                content={excerpt}
                values={values}
              />
            ))}
          </div>

          <div className="ml-4 mt-4">
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
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
      </div>

      <div className="container" id="contact">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serais ravis de vous répondre."
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  );
}
