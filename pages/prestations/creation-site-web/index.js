import Image from 'next/image';
import Link from 'next/link';
import Diagonal from '../../../components/layouts/Diagonal';
import SectionTitle from '../../../components/SectionTitle';

export default function PrestationBuildWebsite() {
  return (
    <div>
      <div className="flex relative container mt-6 lg:-mt-12">
        <div className="hidden lg:block overflow-hidden absolute lg:right-[60%]">
          <div className="w-[697px] h-[736px] relative">
            <Image
              className="max-h-[736px]"
              src="/images/build-website.png"
              width={697}
              priority
              height={736}
              alt="Création de site Internet sur la rochelle"
            />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>

            <h2 className="font-bold text-white text-4xl">
              Développement spécialisé dans la création de site web
            </h2>

            <div className="text-gray-light font-medium text-xl mt-4">
              <p>
                Développeur web freelance sur La Rochelle depuis 15 ans, j’interviens pour toutes
                demandes de création de sites internet.
              </p>
            </div>

            <p className="mt-2">
              Je réalise pour vous tout type d’applications web, du site vitrine à
              la boutique en ligne, en passant par les sites applicatifs spécifiques à vos attentes.
              Je suis spécialisé dans le développement sur les CMS les plus plébiscités comme Joomla
              et WordPress ainsi que la création de sites e-commerce avec Prestashop.
            </p>
            <p className="mt-2">
              Je vous propose également une solution d’hébergement professionnel
              sur mesure, dimensionné pour le trafic de votre site.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-darker mt-10">
        <Diagonal
          flipX
          flipY
          className="h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center">
          <div className="px-18 text-lg">
            <h2 className="text-white text-4xl font-bold mb-6">
              Un processus de développement
              <br />
              qui fonctionne
            </h2>

            <p className="mt-2">
              J’interviens pour vous sur l’ensemble de la chaîne de production. Je
              vous accompagne tout d’abord dans la conception de votre outil puis réalise pour vous
              les maquettes graphiques de votre site.
            </p>
            <p className="mt-2">
              J’intègre ensuite ces différentes maquettes afin de rendre vos
              attentes interactives. Je développe également les fonctionnalités spécifiques
              nécessaires à votre activité avant de rendre votre site entièrement consultable en
              ligne.
            </p>
            <p className="mt-2">
              Pour plus de transparence et de sécurité dans le développement de
              votre outil, j’ai mis en place les méthodes d’intégration et de déploiement
              continu.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <SectionTitle
          title="Services"
          content="L'utilisation de CMS aussi populaires que Prestashop et Wordpress, disposant de communauté active et importante, vous garanti d'avoir d'une solution qui pourra évoluer au fur et à mesure de vos besoins et des évolutions technologiques."
        />

        <div className="flex">
          <div className="w-2/5">Left</div>
          <div className="w-3/5">
            <h3>
              Développement site vitrine
              <br />
              avec WordPress
            </h3>

            Wordpress est un CMS simple et rapide d’accès, c’est mon CMS de prédilection !
            <p>
              Idéal pour la création de site vitrine, Wordpress permet de développer rapidement des
              sites entièrement administrables.
            </p>
            <p>
              C’est un outil open source qui permet également la personnalisation avancée de son
              backoffice afin qu’il réponde le plus efficacement à vos besoins.
            </p>
            <p>
              De plus, Wordpress dispose d’une communauté importante et investie. Ainsi, de
              nombreux plugins et fonctionnalités sont existants, ils permettent de faire évoluer
              votre site au gré de vos besoins.
            </p>
            <Link href="/">
              <a className="button">Développer avec WordPress</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Création de site internet',
      breadcrumb: {
        parent: {
          link: '/prestations',
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      },
    },
  };
}
