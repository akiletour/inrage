import Image from 'next/image';
import Diagonal from '@/components/Diagonal';
import TmaItem from '@/components/items/TmaItem';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import TextImage from '@/components/TextImage';
import TmaImage from '@image/tma.png';
import { getCanonicalUrl, RouteLink } from '@/libs/route';

export const metadata = {
  title: 'Maintenance site web | Freelance maintenance site internet - inRage',
  description:
    'Développeur freelance pour la maintenance de votre site web. Forfait infogérance de votre site WordPress et Prestashop clé en main, sans surcout. Une infogérance complète pour maintenir à jour votre site.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTma),
  },
};

export default function WebsiteTMA() {
  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      ]}
      title='Maintenance de site web'
    >
      <div className='container'>
        <TextImage
          position='right'
          duoTone
          image={TmaImage}
          title={["L'infogérance & maintenance TMA", "Qu'est-ce que c'est ?"]}
        >
          <p className='mt-2 text-2xl text-gray-light'>
            C’est d’être accompagné chaque jour dans le bon fonctionnement de
            son site WordPress.
          </p>

          <p className='mt-2'>
            Lors du développement de votre site, votre développeur a surement dû
            faire appel aux extensions disponibles à la communauté. Ces
            extensions requièrent une attention particulière pour corriger des
            dysfonctionnements (alias bugs) ou d’apporter de nouvelles
            fonctionnalités pour votre bien-être et doivent être mise à jours.
          </p>
          <p className='mt-2'>
            Avec plus de 90 000 sites piratés (en avril 2013), il est crucial de
            devoir apporter une solution de sauvegardes journalière de vos
            fichiers ainsi que de votre base de données et cela sur une
            plateforme entièrement sécurisée. Beaucoup de personnes font encore
            l’erreur de sauvegarder leur site au même endroit où ils sont
            hébergés.
          </p>
        </TextImage>

        <div className='mt-8 text-center text-3xl text-white'>
          Les performances de votre site internet
          <br /> sont importantes pour le référencement de ce dernier.{' '}
        </div>
        <div className='mt-3 text-center text-xl md:px-10'>
          Après une analyse approfondie, nous pouvons vous conseiller de
          plusieurs manières afin d’optimiser vos temps de chargement et la
          réduction des appels à la base de données pour y garantir une
          navigation fluide.
        </div>
      </div>
      <div className='bg-gray-darker'>
        <Diagonal
          className='h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          flipX
          flipY
          bgClass='fill-gray-dark'
          bgCorner='fill-orange'
        />
        <div className='container relative z-10 py-5 md:-my-10 xl:py-0'>
          <div className='flex flex-col items-start justify-center space-y-6 md:flex-row md:space-y-0 md:divide-x md:divide-gray-dark md:px-20'>
            <TmaItem
              title='Infogérance et maintenance TMA'
              subject='WordPress'
              position='right'
              excerpt='Forfait infogérance de votre site WordPress clé en main, sans surcout. Une infogérance complète pour maintenir à jours votre site et prévenir de toutes failles de sécurité liées aux extensions.'
              cta={{
                link: RouteLink.prestationTmaWordPress,
                text: 'Découvrez les offres WordPress',
              }}
            />
            <TmaItem
              title='Infogérance et maintenance TMA'
              subject='Prestashop'
              excerpt='Une supervision complète de votre solution e-commerce Prestashop pour vous aider à maintenir votre processus d’achat, de contact et votre catalogue dans les meilleures conditions.'
              cta={{
                link: RouteLink.prestationTmaPrestashop,
                text: 'Découvrez les offres Prestashop',
              }}
            />
          </div>
        </div>
        <Diagonal
          className='h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          bgClass='fill-gray-dark'
          bgCorner='fill-orange'
        />
      </div>

      <div className='container'>
        <SectionTitle
          title='Interface TMA'
          content="Développé spécialement pour l'occasion. Mise en place d'une console d'administration permettant de gérer vos demandes, de voir vos factures et de suivre l'évolution de votre projet."
        />
      </div>

      <div className='container relative mt-6 flex flex-col lg:flex-row'>
        <div className='block overflow-hidden lg:absolute lg:right-[60%]'>
          <div className='relative lg:h-[666px] lg:w-[945px]'>
            <Image
              className='max-h-[666px]'
              src='/images/tma-example.png'
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
        <div className='relative flex items-center lg:ml-[45%] lg:h-[736px]'>
          <div>
            <h3 className='text-2xl font-bold text-white md:text-4xl'>
              Une console d&apos;infogérance dédiée
            </h3>
            <p className='mt-2'>
              Nous vous mettons à disposition une interface entièrement pensée
              pour vos besoins et intégralement personnalisable à votre
              solution, que vous soyez sur Prestashop, WordPress ou une solution
              propriétaire.
            </p>
            <h3 className='mt-4 text-2xl font-bold text-white md:text-4xl'>
              Notification immédiate
            </h3>
            <p className='mt-2'>
              Dès que votre message est publié sur notre interface de console,
              nous recevons une notification. Un technicien prend effet de votre
              message et le règle directement.
            </p>
            <h3 className='mt-4 text-2xl font-bold text-white md:text-4xl'>
              Aucune fil d&apos;attente
            </h3>
            <p className='mt-2'>
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
