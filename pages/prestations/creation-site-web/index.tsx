import { NextSeo } from 'next-seo';
import Image from 'next/image';

import ContactForm from '@component/ContactForm';
import Diagonal from '@component/layouts/Diagonal';
import Layout from '@component/layouts/Layout';
import Link from '@component/NoScrollLink';
import SectionTitle from '@component/SectionTitle';
import DevOps from '@image/devops.png';
import Lighthouse from '@image/lighthouse-100percent-inrage.png';
import BuildSymfony from '@image/prestations/symfony.png';
import SketchLogo from '@image/sketch_logo.png';
import BuildPrestashop from '@image/website-prestashop.png';
import BuildWordPress from '@image/website-wp.png';
import { RouteLink } from '@lib/route';
import { PageHeaderStaticProps } from '@type/header';
import TextImage from 'components/TextImage';

export default function PrestationBuildWebsite() {
  return (
    <Layout>
      <NextSeo
        title="Création de site internet | Freelance création de site web - inRage"
        description="Développeur et intégrateur freelance, spécialisé dans la création de sites internet sur WordPress, Prestashop et Symfony. Découvrez toutes mesprestations Web !"
      />
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
            <h2 className="font-bold text-white text-2xl md:text-4xl">
              Développement spécialisé dans la création de site web
            </h2>

            <div className="text-gray-light font-medium text-xl mt-4">
              <p>
                Développeur web freelance sur La Rochelle depuis 15 ans,
                j’interviens pour toutes demandes de création de sites internet.
              </p>
            </div>

            <p className="mt-2">
              Je réalise pour vous tout type d’applications web, du site vitrine
              à la boutique en ligne, en passant par les sites applicatifs
              spécifiques à vos attentes. Je suis spécialisé dans le
              développement sur les CMS les plus plébiscités comme Joomla et
              WordPress ainsi que la création de sites e-commerce avec
              Prestashop.
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
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center">
          <div className="md:px-18 text-lg">
            <h2 className="text-white text-4xl font-bold mb-6">
              Un processus de développement
              <br />
              qui fonctionne
            </h2>

            <p className="mt-2">
              J’interviens pour vous sur l’ensemble de la chaîne de production.
              Je vous accompagne tout d’abord dans la conception de votre outil
              puis réalise pour vous les maquettes graphiques de votre site.
            </p>
            <p className="mt-2">
              J’intègre ensuite ces différentes maquettes afin de rendre vos
              attentes interactives. Je développe également les fonctionnalités
              spécifiques nécessaires à votre activité avant de rendre votre
              site entièrement consultable en ligne.
            </p>
            <p className="mt-2">
              Pour plus de transparence et de sécurité dans le développement de
              votre outil, j’ai mis en place les méthodes d’intégration et de
              déploiement continu.
            </p>
          </div>
        </div>
        <Diagonal
          bgClass="fill-gray-dark"
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container mt-4 md:mt-0 lg:-mb-10 relative z-10">
        <SectionTitle
          title={['Mes solutions', 'pour vos sites']}
          content="L'utilisation de CMS aussi populaires que Prestashop et Wordpress, disposant de communauté active et importante, vous garanti d'avoir d'une solution qui pourra évoluer au fur et à mesure de vos besoins et des évolutions technologiques."
        />

        <TextImage
          image={BuildWordPress}
          title={['Développment site vitrine', 'avec WordPress']}
        >
          <p>
            Wordpress est un CMS simple et rapide d’accès, c’est mon CMS de
            prédilection !
          </p>
          <p className="mt-2">
            Idéal pour la création de site vitrine, Wordpress permet de
            développer rapidement des sites entièrement administrables.
          </p>
          <p className="mt-2">
            C’est un outil open source qui permet également la personnalisation
            avancée de son backoffice afin qu’il réponde le plus efficacement à
            vos besoins.
          </p>
          <p className="mt-2 mb-3">
            De plus, Wordpress dispose d’une communauté importante et investie.
            Ainsi, de nombreux plugins et fonctionnalités sont existants, ils
            permettent de faire évoluer votre site au gré de vos besoins.
          </p>
          <Link href={RouteLink.prestationWordPress}>
            <a className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">WordPress</span>
            </a>
          </Link>
        </TextImage>

        <TextImage
          position="right"
          image={BuildPrestashop}
          title={['Développement site e-commerce', 'avec Prestashop']}
        >
          <p className="mt-2">
            Prestashop est le CMS phare dans la création de boutique en ligne.
          </p>
          <p className="mt-2">
            A la manière de Wordpress, la création de site prestashop permet de
            développer rapidement un outil de e-commerce entièrement
            administrable en toute autonomie.
          </p>
          <p className="mt-2 mb-3">
            C’est également un outil open source qui dispose d’une communauté
            solide.
          </p>

          <Link href={RouteLink.prestationPrestashop}>
            <a className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">Prestashop</span>
            </a>
          </Link>
        </TextImage>

        <TextImage
          image={BuildSymfony}
          title={['Développment site', 'avec Symfony']}
        >
          <p>
            Wordpress est un CMS simple et rapide d’accès, c’est mon CMS de
            prédilection !
          </p>
          <p className="mt-2">
            Symfony a su s&apos;imposer comme référence dans les frameworks PHP
            et me permet de construire des applications sur-mesure.
          </p>
          <p className="mt-2">
            La grande communauté qui s&apos;est construite autour de cet outil
            rend possible des utilisations très variées : de la plateforme
            e-commerce en passant par Sylius à la réalisation d&apos;une API
            avec API Platform.
          </p>
          <p className="mt-2 mb-3"></p>
          <Link href={RouteLink.prestationSymfony}>
            <a className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">Symfony</span>
            </a>
          </Link>
        </TextImage>
      </div>

      <Diagonal
        className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
        bgCorner="fill-orange"
        bgClass="fill-gray-darker"
      />

      <div className="bg-gray-darker">
        <div className="container mb-4 md:mb-0">
          <SectionTitle
            content="inRage est une agence créative et innovante basée au coeur de La Rochelle. Spécialisée dans la création de site Web."
            title="En savoir plus"
          />

          <TextImage
            title="Création et intégration avec Sketch"
            image={SketchLogo}
          >
            <p>
              Pour la création graphiques des maquettes de l’ensemble de mes
              projets digitaux, j’utilise le logiciel Sketch. Ce logiciel, très
              complet, fait le lien entre le web designer et le développeur.
            </p>
            <p className="mt-2">
              Une des forces de Sketch est son approche 100% vectorielle :
              pratique, simple et rapide.
            </p>
            <p className="mt-2">
              Sketch est conçu pour créer des UI : C’est à dire, tout ce que
              vous avez créer sur cet outil est réalisable en HTML/CSS.
            </p>
            <p className="mt-2">
              Enfin, une autre fonctionnalité permet d’exporter les assets d’un
              projet. En d’autres termes, grâce à sketch, le développeur dispose
              de l’ensemble des informations nécessaires pour intégrer la
              maquette d’un site.
            </p>
          </TextImage>

          <TextImage
            position="right"
            image={DevOps}
            title="Intégration et déploiement continu"
          >
            <p>
              L&apos;intégration continue consiste à segmenter le développement
              d’un site internet en différents blocs ou fonctionnalités. Ainsi,
              dès qu’une fonctionnalité est terminée, elle est implémentée sur
              un environnement de test afin d’en vérifier le bon fonctionnement.
              Le principal but de cette pratique est de détecter les problèmes
              d&apos;intégration au plus tôt lors du développement.
            </p>

            <p className="mt-2">
              De plus, elle permet d&apos;automatiser l&apos;exécution des tests
              et de voir l&apos;évolution du développement du site internet.
              Cette méthode de travail est également largement plébiscitée pour
              les projets nécessitant l’intervention de plusieurs développeurs.
            </p>

            <p className="mt-2">
              Cette méthode est efficace lorsqu’elle est associée à une autre
              méthode : le déploiement continu. Cette dernière permet à mes
              clients de consulter les modifications apportées à leur site en
              temps réel sur mon serveur de préproduction.
            </p>
          </TextImage>

          <TextImage image={Lighthouse} title="Google Lighthouse et GTMetrix">
            <p className="mt-2">
              Dès lors que l&apos;intégration de votre maquette commence, que ce
              soit sur WordPress, Symfony, Prestashop ou encore React JS. Je
              contrôle à chaque déploiement les performances de votre site.{' '}
            </p>

            <p className="mt-2">
              Cela permet de garder un oeil sur les dernières recommandations du
              web, que ce soit en terme de performance, accessibilité, meilleurs
              pratiques ou encore le SEO naturel.
            </p>
          </TextImage>
        </div>

        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgCorner="fill-orange"
          bgClass="fill-gray-dark"
        />
      </div>

      <div className="container mt-4 md:mt-0">
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

export async function getStaticProps(): Promise<PageHeaderStaticProps> {
  return {
    props: {
      pageTitle: 'Création de site internet',
      breadcrumb: [
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      ],
    },
  };
}
