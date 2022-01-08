import { PageHeaderStaticProps } from '@type/header';
import Layout from '@component/layouts/Layout';
import TextImage from '@component/TextImage';
import LogoGrey from '@image/logo-grey-inline-white.png';
import Diagonal from '@component/layouts/Diagonal';
import Image from 'next/image';
import BgTma from '@image/bg-tma.jpeg';

export default function TmaWordPress() {
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
        <Image className="-z-10" src={BgTma} layout="fill" alt="Offres de maintenance TMA inRage" />
        <Diagonal bgClass="fill-gray-dark" bgCorner="fill-orange" />
      </div>
    </Layout>
  );
}

export async function getStaticProps(): Promise<PageHeaderStaticProps> {
  return {
    props: {
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
