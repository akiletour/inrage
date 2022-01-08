import { PageHeaderStaticProps } from '@type/header';
import Layout from '@component/layouts/Layout';
import TextImage from '@component/TextImage';
import LogoGrey from '@image/logo-grey-inline-white.png';
import Diagonal from '@component/layouts/Diagonal';
import Image from 'next/image';
import BgTma from '@image/bg-tma.jpeg';
import SectionTitle from '@component/SectionTitle';
import ContactForm from '@component/ContactForm';
import TableHeader from '@component/tma/TableHeader';
import TableLine from '@component/tma/TableLine';

type EntriesType = Array<{
  name: string;
  excerpt: string;
  values: Array<string | boolean>
}>

type Props = {
  entries: EntriesType;
}
export default function TmaWordPress({ entries = [] }: Props) {
  return (
    <Layout>
      <div className="container">
        <TextImage position="right" image={LogoGrey}>
          <div className="text-left">
            <h2>
              <span className="text-orange uppercase text-4xl font-medium">Supervision et infogérance</span>
              <span className="block text-white font-light text-3xl">24h/24 et 7j/7</span>
            </h2>

            <p className="mt-3 text-xl text-gray-light">Avec plus de 150 clients en infogérance WordPress, nous avons mis en place plusieurs solutions pour nous assurer que votre site se comporte comme il le devrait.</p>
            <p className="mt-3 text-gray-light">Toutes les heures (configurable), nous inspectons chacune des pages de votre site pour y vérifier que tous les éléments sont à la bonne place et que le code source n’a pas été altéré.</p>
            <p className="mt-3 text-gray-light">Nos robots vérifient l’intégralité de vos fichiers et de la base de données pour prévenir un futur piratage.</p>
          </div>
        </TextImage>
      </div>

      <div className="relative">
        <Diagonal flipX flipY bgClass="fill-gray-dark" bgCorner="fill-orange" />
        <div className="container relative z-10">
          <TableHeader
            support="WordPress"
            types={[
              { name: 'Sérénité', price: '39€ ht/mois' },
              { name: 'Sérénité', price: '39€ ht/mois' },
              { name: 'Sérénité', price: '39€ ht/mois' },
            ]}
          />

          <div className="flex flex-col space-y-4 mt-4">
            {entries.map(({
              name,
              excerpt,
              values,
            }) => (
              <TableLine
                title={name}
                content={excerpt}
                values={values}
              />
            ))}
          </div>

          <div className="ml-4 mt-4">
            <span className="text-orange font-bold text-4xl leading-5">*</span>
            {' '}
            Le nombre d&apos;heures est personnalisable selon vos besoins.
          </div>

        </div>
        <Image className="-z-10" src={BgTma} layout="fill" alt="Offres de maintenance TMA inRage" />
        <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" />
      </div>

      <div className="container">
        <SectionTitle
          content={"Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serais ravis de vous répondre."}
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  );
}

type StaticProps = {
  props: {
    entries: EntriesType;
  }
}

export async function getStaticProps(): Promise<PageHeaderStaticProps & StaticProps> {
  return {
    props: {
      entries: [{
        name: "Sauvegarde de l'ensemble de vos données",
        excerpt: 'Sauvegarde journalière de votre base de données et de vos fichiers sur nos serveurs sécurisés.',
        values: ['1x|par jour', '1x|par jour', '2x|par jour'],
      }, {
        name: 'Supervision logicielle',
        excerpt: 'Scan de sécurité toutes les heures, rapport disponible dans une interface dédiée. Surveillance des mises à jour de vos extensions, WordPress et thème.',
        values: [false, true, true],
      }, {
        name: 'Environnement de pré-production',
        excerpt: 'Application des mises à jour et développement sur nos serveurs avant de les basculer sur votre site en production.',
        values: [false, true, true],
      }, {
        name: 'Supervision pro-active',
        excerpt: 'Robot de surveillance du parcours client pour tester que toutes les pages fonctionnent correctement.',
        values: [false, false, true],
      }, {
        name: 'Mise à jour et montée de version',
        excerpt: 'Lors de la prise en charge et tout au long de la maintenance de votre site WordPress. Je met à jour WordPress vers sa dernière version et je met à jour toutes les extensions pour qu\'elles soient compatible avec cette version.',
        values: [true, true, true],
      }, {
        name: 'Analyse de sécurité',
        excerpt: 'Application et surveillance quotidienne de 22 points de sécurité sur votre installation de WordPress',
        values: [true, true, true],
      }, {
        name: 'iThemes Security Pro',
        excerpt: 'Une licence de sécurité offerte pendant tout le contrat de TMA.',
        values: [true, true, true],
      }, {
        name: 'WP Rocket',
        excerpt: 'Une licence de cache pour votre site offerte pendant toute la durée de votre contrat TMA',
        values: [true, true, true],
      }, {
        name: 'Développement spécifique*',
        excerpt: 'Heures de développement d’infogérance pour corriger ou faire évoluer votre site.',
        values: ['1|heure', '3|heures', '8|heures'],
      }, {
        name: 'Supervision 24/7 et sur 365 jours',
        excerpt: 'Dans le forfait « Tranquilité », l’astreinte est de 9h à 19h, du lundi au vendredi inclus.',
        values: [false, true, true],
      }, {
        name: 'GTI',
        excerpt: 'Garantie de temps d\'intervention au moment ou vous déclarer l’intervention dans la console',
        values: ['6h', '4h', '2h'],
      }, {
        name: 'Certificat SSL',
        excerpt: 'Installation et configuration d’un certificat SSL avec modification (si besoin) sur le site pour prendre en charge le SSL',
        values: [true, true, true],
      }, {
        name: 'Engagement',
        excerpt: 'Durée de l\'engagement de votre contrat de maintenance inRage.',
        values: ['12 mois', '12 mois', '12 mois'],
      }],
      pageTitle: ['Infogérance & Maintenance TMA', 'WordPress'],
      excerpt: [
        'La sécurité de WordPress est un sujet critique et crucial pour tout administrateur de sites soucieux de préserver son site…',
        'WordPress est LA plus grosse plateforme connue à ce jour avec près de 30% des sites mondiaux qui utilise WordPress.',
      ],
      headerType: 'tma',
      breadcrumb: [{
        link: '/prestations',
        title: 'Prestations sous WordPress, Prestashop et Symfony',
      }],
    },
  };
}
