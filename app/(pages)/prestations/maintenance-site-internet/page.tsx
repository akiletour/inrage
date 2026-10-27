import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import Link from '@component/NoScrollLink'
import TmaItem from '@component/items/TmaItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import TmaImage from '@image/tma.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Maintenance de site internet à La Rochelle | inRage',
  description:
    'Maintenance de site internet à La Rochelle : forfaits d’infogérance WordPress et Prestashop, dépannage ponctuel, mises à jour, sécurité et sauvegardes. Plus de 150 sites suivis.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTma),
  },
}

const FAQ: FaqItem[] = [
  {
    question:
      'Forfait de maintenance ou intervention ponctuelle : que choisir ?',
    answer:
      'Le forfait convient à un site qui doit rester en ligne sans interruption : mises à jour planifiées, sauvegardes quotidiennes, surveillance et délai d’intervention garanti. L’intervention ponctuelle, facturée à l’heure, répond à un besoin isolé : corriger un bug, ajouter un bloc, débloquer une mise à jour.',
  },
  {
    question:
      'Mon site n’est ni sous WordPress ni sous Prestashop, pouvez-vous le maintenir ?',
    answer:
      'Oui pour WooCommerce, Symfony et les sites développés sur mesure que j’ai réalisés ou audités. Pour une autre plateforme, un premier échange permet de vérifier ce que je peux prendre en charge, et je vous oriente si ce n’est pas le cas.',
  },
  {
    question: 'Où sont stockées les sauvegardes ?',
    answer:
      'Sur des serveurs situés en France, distincts de l’hébergement de votre site. Une sauvegarde conservée au même endroit que le site ne sert à rien le jour où le serveur tombe ou est compromis.',
  },
]

export default function WebsiteTMA() {
  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations',
        },
      ]}
      title="Maintenance de site internet à La Rochelle"
    >
      <div className="container">
        <TextImage
          position="right"
          duoTone
          image={TmaImage}
          title={["L'infogérance & maintenance TMA", "Qu'est-ce que c'est ?"]}
        >
          <p className="mt-4 text-gray-light text-2xl">
            Un site en ligne vieillit chaque jour : WordPress, Prestashop, le
            thème, les extensions et la version de PHP évoluent sans lui.
          </p>

          <p className="mt-4">
            Une extension plus mise à jour est la porte d’entrée la plus
            courante d’un piratage, et une mise à jour faite sans précaution
            peut casser une page ou le paiement. La maintenance consiste à
            appliquer ces mises à jour sur un environnement de test, à vérifier
            le site, puis à les passer en production.
          </p>
          <p className="mt-4">
            Plus de 150 sites sont aujourd’hui sous infogérance inRage, à La
            Rochelle, en Charente-Maritime et partout en France. Les sauvegardes
            quotidiennes sont stockées sur des serveurs situés en France,
            distincts de votre hébergement. Pour un besoin isolé sans contrat,
            voyez la{' '}
            <Link href={RouteLink.prestationTmaOnDemand}>
              <span className="text-orange underline transition-colors duration-150 hover:text-white">
                maintenance ponctuelle
              </span>
            </Link>
            .
          </p>
        </TextImage>

        <div className="mt-16 text-3xl text-white text-center">
          Les performances de votre site internet
          <br /> sont importantes pour le référencement de ce dernier.{' '}
        </div>
        <div className="md:px-20 text-center mt-6 text-xl">
          Après une analyse approfondie, nous pouvons vous conseiller de
          plusieurs manières afin d’optimiser vos temps de chargement et la
          réduction des appels à la base de données pour y garantir une
          navigation fluide.
        </div>
      </div>
      <div className="bg-gray-darker">
        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <div className="container relative z-10 py-10 xl:py-0 md:-my-20">
          <div className="md:px-40 flex flex-col space-y-12 md:space-y-0 md:flex-row md:divide-x md:divide-gray-dark items-start justify-center">
            <TmaItem
              title="Infogérance et maintenance TMA"
              subject="WordPress"
              position="right"
              excerpt="Forfait d’infogérance WordPress sans surcoût : mises à jour, sécurité, sauvegardes et surveillance pour garder votre site à jour et prévenir les failles liées aux extensions."
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
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
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

      <div className="flex flex-col lg:flex-row relative container mt-12">
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
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>
            <h3 className="font-bold text-white text-2xl md:text-4xl">
              Une console d&apos;infogérance dédiée
            </h3>
            <p className="mt-4">
              Nous vous mettons à disposition une interface entièrement pensée
              pour vos besoins et intégralement personnalisable à votre
              solution, que vous soyez sur Prestashop, WordPress ou une solution
              propriétaire.
            </p>
            <h3 className="mt-8 font-bold text-white text-2xl md:text-4xl">
              Notification immédiate
            </h3>
            <p className="mt-4">
              Dès que votre message est publié sur notre interface de console,
              nous recevons une notification. Un technicien prend effet de votre
              message et le règle directement.
            </p>
            <h3 className="mt-8 font-bold text-white text-2xl md:text-4xl">
              Aucune fil d&apos;attente
            </h3>
            <p className="mt-4">
              Chez inRage, il n&apos;y a pas de notion de file d&apos;attente,
              votre message sera toujours traité en priorité et un technicien
              prendra en charge votre ticket directement.
            </p>
          </div>
        </div>
      </div>

      <FaqSection
        intro="Ce que me demandent les entreprises avant de confier la maintenance de leur site."
        items={FAQ}
      />
    </Layout>
  )
}
