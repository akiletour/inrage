import Image from 'next/image';
import { NextSeo } from 'next-seo';

import ContactForm from '@component/ContactForm';
import Diagonal from '@component/layouts/Diagonal';
import Layout from '@component/layouts/Layout';
import SectionTitle from '@component/SectionTitle';
import TextImage from '@component/TextImage';
import TableHeader from '@component/tma/TableHeader';
import TableLine from '@component/tma/TableLine';
import BgTma from '@image/bg-tma.jpeg';
import LogoGrey from '@image/logo-grey-inline-white.png';
import { RouteLink } from '@lib/route';
import { PageHeaderStaticProps } from '@type/header';

type EntriesType = Array<{
  id: number;
  name: string;
  excerpt: string;
  values: Array<string | boolean>;
}>;

type Props = {
  entries: EntriesType;
};

export default function TmaPrestashop({ entries = [] }: Props) {
  return (
    <Layout>
      <NextSeo
        title="Maintenance et sécurité e-commerce Prestashop - inRage"
        description="Une boutique performante et sécurisé est la clé de la sérénité. Que vous vendiez 10 produits ou 5 000, la maintenance de votre boutique e- commerce Prestashop est cruciale pour son bon déroulement. Contactez-moi pour la maintenance et la sécurité de votre site Prestashop."
      />

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

            <p className="mt-3 text-xl text-gray-light">
              Depuis des années j’administre et assiste les créateurs e-commerce
              dans ce vaste monde qui est Internet.
            </p>
            <p className="mt-3 text-gray-light">
              Chaque jour, des boutiques sont victimes de failles de sécurité ou
              d’attaques. J’ai appris et développé au fil des années des outils
              me permettant de surveiller, protéger et réparer ces failles et
              bloquer ces attaques.
            </p>
            <p className="mt-3 text-gray-light">
              Toutes les heures, mes outils inspectent chacune de vos pages pour
              en vérifier l’intégrité de son contenu. Tester les formulaires
              d’inscription, de connexion et panier.
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
            support="Prestashop"
            types={[
              { name: 'Sérénité', price: '39€ ht/mois' },
              { name: 'Avancée', price: '55€ ht/mois' },
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
          layout="fill"
          alt="Offres de maintenance TMA inRage"
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

type StaticProps = {
  props: {
    entries: EntriesType;
  };
};

export async function getStaticProps(): Promise<
  PageHeaderStaticProps & StaticProps
> {
  return {
    props: {
      entries: [
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
          excerpt:
            "Durée de l'engagement de votre contrat de maintenance inRage.",
          values: ['12 mois', '12 mois'],
        },
      ],
      pageTitle: ['Maintenance et sécurité', 'e-commerce Prestashop'],
      excerpt: [
        'Une boutique performante et sécurisé est la clé de la sérénité. Que vous vendiez 10 produits ou 5 000, la maintenance de votre boutique e-commerce Prestashop est cruciale pour son bon déroulement.',
        "Prestashop est l'un des plus puissant CMS pour le e-commerce et donc très vulnérable aux personnes malveillantes.",
      ],
      headerType: 'tma',
      breadcrumb: [
        {
          link: RouteLink.prestationTma,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      ],
    },
  };
}
