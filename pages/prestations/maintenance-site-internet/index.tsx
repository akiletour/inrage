import Image from "next/image";
import { NextSeo } from 'next-seo';

import TmaItem from '@component/items/TmaItem';
import Diagonal from '@component/layouts/Diagonal';
import Layout from '@component/layouts/Layout';
import SectionTitle from '@component/SectionTitle';
import TextImage from '@component/TextImage';
import TmaImage from '@image/tma.png';
import { RouteLink } from '@lib/route';
import { PageHeaderStaticProps } from '@type/header';

export default function WebsiteTMA() {
  return (
    <Layout>
      <NextSeo
        title="Maintenance site web | Freelance maintenance site internet - inRage"
        description="Développeur freelance pour la maintenance de votre site web. Forfait infogérance de votre site WordPress et Prestashop clé en main, sans surcout. Une infogérance complète pour maintenir à jour votre site."
      />
      <div className="container">
        <TextImage
          position="right"
          duoTone
          image={TmaImage}
          title={["L'infogérance & maintenance TMA", "Qu'est-ce que c'est ?"]}
        >
          <p className="mt-2 text-gray-light text-2xl">
            C’est d’être accompagné chaque jour dans le bon fonctionnement de
            son site WordPress.
          </p>

          <p className="mt-2">
            Lors du développement de votre site, votre développeur a surement dû
            faire appel aux extensions disponibles à la communauté. Ces
            extensions requièrent une attention particulière pour corriger des
            dysfonctionnements (alias bugs) ou d’apporter de nouvelles
            fonctionnalités pour votre bien-être et doivent être mise à jours.
          </p>
          <p className="mt-2">
            Avec plus de 90 000 sites piratés (en avril 2013), il est crucial de
            devoir apporter une solution de sauvegardes journalière de vos
            fichiers ainsi que de votre base de données et cela sur une
            plateforme entièrement sécurisée. Beaucoup de personnes font encore
            l’erreur de sauvegarder leur site au même endroit où ils sont
            hébergés.
          </p>
        </TextImage>

        <div className="mt-8 text-3xl text-white text-center">
          Les performances de votre internet sont importantes pour le
          référencement de ce dernier.{' '}
        </div>
        <div className="md:px-10 text-center mt-3 text-xl">
          Après une analyse approfondie, nous pouvons vous conseiller de
          plusieurs manières afin d’optimiser vos temps de chargement et la
          réduction des appels à la base de données pour y garantir une
          navigation fluide.
        </div>
      </div>
      <div className="bg-gray-darker">
        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <div className="container relative z-10 py-5 xl:py-0 md:-my-10">
          <div className="md:px-20 flex flex-col space-y-6 md:space-y-0 md:flex-row md:divide-x md:divide-gray-dark items-start justify-center">
            <TmaItem
              title="Infogérance et maintenance TMA"
              subject="WordPress"
              position="right"
              excerpt="Forfait infogérance de votre site WordPress clé en main, sans surcout. Une infogérance complète pour maintenir à jours votre site et prévenir de toutes failles de sécurité liées aux extensions."
              cta={{
                link: RouteLink.prestationTmaWordPress,
                text: 'Découvrez les offres WordPress',
              }}
            />
            <TmaItem
              title="Infogérance et maintenance TMA"
              subject="Prestashop"
              excerpt="Une supervision complète de votre solution e-commerce Prestashop pour vous aider à maintenir votre processus d’achat, de contact et votre catalogue dans les meilleures conditions."
              cta={{
                link: RouteLink.prestationTmaPrestashop,
                text: 'Découvrez les offres Prestashop',
              }}
            />
          </div>
        </div>
        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
      </div>

      <div className="container">
        <SectionTitle
          title="Interface TMA"
          content="Développé spécialement pour l'occasion. Mise en place d'une console d'administration permettant de gérer vos demandes, de voir vos factures et de suivre l'évolution de votre projet."
        />
      </div>

      <div className="flex flex-col lg:flex-row relative container mt-6">
        <div className="block overflow-hidden lg:absolute lg:right-[60%]">
          <div className="lg:w-[945px] lg:h-[666px] relative">
            <Image
              className="max-h-[666px]"
              src="/images/tma-example.png"
              width={945}
              priority
              height={666}
              alt="Une console d'infogérance et de maintenance TMA dédiée"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>
            <h3 className="font-bold text-white text-2xl md:text-4xl">
              Une console d&apos;infogérance dédiée
            </h3>
            <p className="mt-2">
              Nous vous mettons à disposition une interface entièrement pensée
              pour vos besoins et intégralement personnalisable à votre
              solution, que vous soyez sur Prestashop, WordPress ou une solution
              propriétaire.
            </p>
            <h3 className="mt-4 font-bold text-white text-2xl md:text-4xl">
              Notification immédiate
            </h3>
            <p className="mt-2">
              Dès que votre message est publié sur notre interface de console,
              nous recevons une notification. Un technicien prend effet de votre
              message et le règle directement.
            </p>
            <h3 className="mt-4 font-bold text-white text-2xl md:text-4xl">
              Aucune fil d&apos;attente
            </h3>
            <p className="mt-2">
              Chez inRage, il n&apos;y a pas de notion de file d&apos;attente,
              votre message sera toujours traité en priorité et un technicien
              prendra en charge votre ticket directement.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(): Promise<PageHeaderStaticProps> {
  return {
    props: {
      pageTitle: 'Maintenance de site web',
      breadcrumb: [
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      ],
    },
  };
}
