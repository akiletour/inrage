import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import TableHeader from '@component/tma/TableHeader'
import TableLine from '@component/tma/TableLine'
import BgTma from '@image/bg-tma.jpeg'
import LogoGrey from '@image/logo-grey-inline-white.png'
import { RouteLink, getCanonicalUrl } from '@lib/router'
import { EntriesType } from '@type/portfolio'

export const metadata = {
  title: 'Maintenance Prestashop par un freelance | Contrat TMA - inRage',
  description:
    'Contrat de maintenance Prestashop par un développeur freelance : mises à jour, sécurité, sauvegardes, surveillance du tunnel d’achat et heures de développement. Dès 39 € HT par mois.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaPrestashop),
  },
}

const entries: EntriesType = [
  {
    id: 1,
    name: "Sauvegarde de l'ensemble de vos données",
    excerpt:
      'Sauvegarde journalière de votre base de données et de vos fichiers sur nos serveurs sécurisés.',
    values: ['1x|par jour', '2x|par jour'],
  },
  {
    id: 2,
    name: 'Supervision logicielle',
    excerpt:
      'Scan de sécurité toutes les heures, rapport disponible dans une interface dédiée. Surveillance des mises à jour de vos extensions, Prestashop et thème.',
    values: [true, true],
  },
  {
    id: 3,
    name: 'Environnement de pré-production',
    excerpt:
      'Application des mises à jour et développement sur nos serveurs avant de les basculer sur votre site en production.',
    values: [false, true],
  },
  {
    id: 4,
    name: 'Supervision pro-active',
    excerpt:
      'Robot de surveillance du parcours client pour tester que toutes les pages fonctionnent correctement.',
    values: [false, true],
  },
  {
    id: 9,
    name: 'Développement spécifique*',
    excerpt:
      'Heures de développement d’infogérance pour corriger ou faire évoluer votre site.',
    values: ['1|heure', '4|heures'],
  },
  {
    id: 10,
    name: 'Supervision 24/7 et sur 365 jours',
    excerpt:
      'Dans le forfait « Sérénité », l’astreinte est de 9h à 19h, du lundi au vendredi inclus.',
    values: [false, true],
  },
  {
    id: 11,
    name: 'GTI',
    excerpt:
      "Garantie de temps d'intervention au moment ou vous déclarer l’intervention dans la console",
    values: ['4h', '2h'],
  },
  {
    id: 12,
    name: 'Certificat SSL',
    excerpt:
      'Installation et configuration d’un certificat SSL avec modification (si besoin) sur le site pour prendre en charge le SSL',
    values: [true, true],
  },
  {
    id: 13,
    name: 'Engagement',
    excerpt: "Durée de l'engagement de votre contrat de maintenance inRage.",
    values: ['12 mois', '12 mois'],
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Quelles versions de Prestashop prenez-vous en charge ?',
    answer:
      'Les boutiques de Prestashop 1.6 à 9.2. Pour une version ancienne, la prise en charge commence par un audit des modules et du thème, puis par un plan de migration vers une version maintenue, sur pré-production, avant toute bascule.',
  },
  {
    question: 'Que surveillez-vous exactement sur ma boutique ?',
    answer:
      'Toutes les heures, un robot parcourt les pages clés et teste les formulaires d’inscription, de connexion et le panier. Les fichiers et la base de données sont contrôlés pour détecter une modification non prévue. En cas d’anomalie, je suis prévenu avant vos clients.',
  },
  {
    question: 'Les mises à jour de modules tiers sont-elles comprises ?',
    answer:
      'Oui. Les modules du marketplace Prestashop et de vos éditeurs sont mis à jour dans le cadre du forfait, après test sur pré-production. Si une mise à jour demande une adaptation du thème ou d’un module sur mesure, elle est prise sur les heures de développement incluses.',
  },
  {
    question:
      'Ma boutique a été développée par une autre agence, est-ce un problème ?',
    answer:
      'Non, c’est le cas de la plupart des boutiques que je reprends. La prise en charge commence par un état des lieux : accès, hébergement, modules, sauvegardes, puis une remise à niveau complète avant la surveillance au quotidien.',
  },
]

export default function TmaPrestashop() {
  return (
    <Layout
      title={['Maintenance et sécurité', 'de votre boutique Prestashop']}
      excerpt={[
        'Que vous vendiez dix produits ou cinq mille, une boutique Prestashop doit rester à jour, sauvegardée et surveillée pour continuer à encaisser.',
        'Un développeur freelance qui connaît votre boutique, un délai d’intervention garanti, et des sauvegardes en France.',
      ]}
      tmaLayout
    >
      <div className="container">
        <TextImage position="right" image={LogoGrey}>
          <div className="text-left">
            <h2>
              <span className="text-orange uppercase text-4xl font-medium">
                Maintenance et Sécurité
              </span>
              <span className="block text-white font-light text-3xl">
                Prestashop
              </span>
            </h2>

            <p className="mt-6 text-xl text-gray-light">
              J’administre des boutiques Prestashop depuis la version 1.6, pour
              des e-commerçants B2C et B2B de La Rochelle et de toute la France.
            </p>
            <p className="mt-6 text-gray-light">
              Une boutique en ligne est exposée en permanence : modules
              obsolètes, failles publiées, tentatives d’injection dans les
              formulaires. J’ai développé au fil des années des outils qui
              surveillent, protègent et réparent, et qui bloquent les attaques
              les plus courantes avant qu’elles n’atteignent la boutique.
            </p>
            <p className="mt-6 text-gray-light">
              Toutes les heures, ces outils parcourent vos pages, vérifient que
              leur contenu n’a pas été altéré et testent les formulaires
              d’inscription, de connexion et le panier. Si quelque chose casse,
              je le sais avant vos clients.
            </p>
          </div>
        </TextImage>
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
            support="Prestashop"
            types={[
              { name: 'Sérénité', price: '39€ ht/mois' },
              { name: 'Avancée', price: '55€ ht/mois' },
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
        intro="Ce que me demandent les e-commerçants avant de confier la maintenance de leur boutique Prestashop."
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
