import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import Layout from '@component/Layout'
import Link from '@component/NoScrollLink'
import References from '@component/References'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import DevOps from '@image/devops.png'
import Lighthouse from '@image/lighthouse-100percent-inrage.png'
import BuildSymfony from '@image/prestations/symfony.png'
import SketchLogo from '@image/sketch_logo.png'
import BuildPrestashop from '@image/website-prestashop.png'
import BuildWordPress from '@image/website-wp.png'
import { RouteLink, getCanonicalUrl } from '@lib/router'

export const metadata = {
  title: 'Création de site internet à La Rochelle | Freelance - inRage',
  description:
    'Développeur et intégrateur freelance à La Rochelle, spécialisé dans la création de sites internet WordPress, Prestashop, Symfony et React. Découvrez mes prestations.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationWeb),
  },
}

const FAQ: FaqItem[] = [
  {
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer:
      'Un site vitrine WordPress demande généralement quelques semaines entre le premier échange et la mise en ligne, une boutique Prestashop ou WooCommerce un à trois mois selon le catalogue et les intégrations. Le planning est fixé au démarrage, et vous suivez l’avancement sur un serveur de pré-production.',
  },
  {
    question: 'WordPress, Prestashop ou sur mesure : comment choisir ?',
    answer:
      'WordPress pour un site vitrine ou éditorial, WooCommerce ou Prestashop pour une boutique, Symfony ou React pour un outil métier ou une application. Le choix se fait lors du premier rendez-vous, selon ce que vous devez administrer vous-même et ce qui doit évoluer plus tard.',
  },
  {
    question: 'Qui rédige les textes et fournit les photos ?',
    answer:
      'Vous connaissez votre activité mieux que personne : les contenus viennent de vous, et je vous indique ce dont chaque page a besoin. Si vous manquez de temps, je travaille avec des rédacteurs, graphistes et photographes de La Rochelle.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      'Le site est garanti et suivi pendant trois mois. Ensuite, vous pouvez le confier à un forfait de maintenance qui couvre les mises à jour, la sécurité et les sauvegardes, et l’héberger sur une infrastructure située en France que j’administre.',
  },
]

export default function PrestationBuildWebsite() {
  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
      ]}
      title="Création de site internet à La Rochelle"
    >
      <div className="flex relative container mt-12 lg:-mt-24">
        <div className="hidden lg:block overflow-hidden absolute lg:right-[60%]">
          <div className="w-[697px] h-[736px] relative">
            <Image
              className="max-h-[736px]"
              src="/images/build-website.png"
              width={697}
              priority
              height={736}
              alt="Création de site Internet sur la rochelle"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>
            <h2 className="font-bold text-white text-2xl md:text-4xl">
              Développement spécialisé dans la création de site web
            </h2>

            <div className="text-gray-light font-medium text-xl mt-8">
              <p>
                Développeur web freelance sur La Rochelle depuis 15 ans,
                j’interviens pour toutes demandes de création de sites internet.
              </p>
            </div>

            <p className="mt-4">
              Je réalise pour vous tout type d’applications web, du site vitrine
              à la boutique en ligne, en passant par les sites applicatifs
              spécifiques à vos attentes. Je suis spécialisé dans le
              développement sur WordPress, Symfony et React ainsi que dans la
              création de sites e-commerce avec Prestashop.
            </p>
            <p className="mt-4">
              Je vous propose également une{' '}
              <Link href={RouteLink.prestationHosting}>
                <span className="text-orange underline transition-colors duration-150 hover:text-white">
                  solution d’hébergement infogéré
                </span>
              </Link>{' '}
              sur mesure, supervisée 24h/24 et dimensionnée pour le trafic de
              votre site.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-darker mt-20">
        <Diagonal
          flipX
          flipY
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center">
          <div className="md:px-36 text-lg">
            <h2 className="text-white text-4xl font-bold mb-12">
              Un processus de développement
              <br />
              qui fonctionne
            </h2>

            <p className="mt-4">
              J’interviens pour vous sur l’ensemble de la chaîne de production.
              Je vous accompagne tout d’abord dans la conception de votre outil
              puis réalise pour vous les maquettes graphiques de votre site.
            </p>
            <p className="mt-4">
              J’intègre ensuite ces différentes maquettes afin de rendre vos
              attentes interactives. Je développe également les fonctionnalités
              spécifiques nécessaires à votre activité avant de rendre votre
              site entièrement consultable en ligne.
            </p>
            <p className="mt-4">
              Pour plus de transparence et de sécurité dans le développement de
              votre outil, j’ai mis en place les méthodes d’intégration et de
              déploiement continu.
            </p>
          </div>
        </div>
        <Diagonal
          bgClass="fill-gray-dark"
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container mt-8 md:mt-0 lg:-mb-20 relative z-10">
        <SectionTitle
          title={['Mes solutions', 'pour vos sites']}
          content="L'utilisation de CMS aussi populaires que Prestashop et Wordpress, disposant de communauté active et importante, vous garanti d'avoir d'une solution qui pourra évoluer au fur et à mesure de vos besoins et des évolutions technologiques."
        />

        <TextImage
          image={BuildWordPress}
          title={['Développement site vitrine', 'avec WordPress']}
        >
          <p>
            Wordpress est un CMS simple et rapide d’accès, c’est mon CMS de
            prédilection !
          </p>
          <p className="mt-4">
            Idéal pour la création de site vitrine, Wordpress permet de
            développer rapidement des sites entièrement administrables.
          </p>
          <p className="mt-4">
            C’est un outil open source qui permet également la personnalisation
            avancée de son backoffice afin qu’il réponde le plus efficacement à
            vos besoins.
          </p>
          <p className="mt-4 mb-6">
            De plus, Wordpress dispose d’une communauté importante et investie.
            Ainsi, de nombreux plugins et fonctionnalités sont existants, ils
            permettent de faire évoluer votre site au gré de vos besoins.
          </p>
          <Link href={RouteLink.prestationWordPress}>
            <span className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">WordPress</span>
            </span>
          </Link>
        </TextImage>

        <TextImage
          position="right"
          image={BuildPrestashop}
          title={['Développement site e-commerce', 'avec Prestashop']}
        >
          <p className="mt-4">
            Prestashop est le CMS phare dans la création de boutique en ligne.
          </p>
          <p className="mt-4">
            A la manière de Wordpress, la création de site prestashop permet de
            développer rapidement un outil de e-commerce entièrement
            administrable en toute autonomie.
          </p>
          <p className="mt-4 mb-6">
            C’est également un outil open source qui dispose d’une communauté
            solide.
          </p>

          <Link href={RouteLink.prestationPrestashop}>
            <span className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">Prestashop</span>
            </span>
          </Link>
        </TextImage>

        <TextImage
          image={BuildSymfony}
          title={['Développement site', 'avec Symfony']}
        >
          <p>
            Pour un outil métier, un extranet ou une application web, je
            développe avec Symfony.
          </p>
          <p className="mt-4">
            Symfony a su s&apos;imposer comme référence dans les frameworks PHP
            et me permet de construire des applications sur-mesure.
          </p>
          <p className="mt-4">
            La grande communauté qui s&apos;est construite autour de cet outil
            rend possible des utilisations très variées : de la plateforme
            e-commerce en passant par Sylius à la réalisation d&apos;une API
            avec API Platform.
          </p>
          <p className="mt-4 mb-6"></p>
          <Link href={RouteLink.prestationSymfony}>
            <span className="button">
              Développer son site avec
              <span className="font-bold ml-[4px] underline">Symfony</span>
            </span>
          </Link>
        </TextImage>

        <section
          id="refonte"
          className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16 scroll-mt-24"
          aria-labelledby="refonte-title"
        >
          <div>
            <h2
              id="refonte-title"
              className="text-3xl font-medium leading-tight text-white text-balance"
            >
              Refonte de site internet à La Rochelle
            </h2>
            <p className="mt-6 text-gray-light">
              Le cas le plus fréquent : un site WordPress créé il y a six ou
              huit ans, lent sur mobile, impossible à mettre à jour sans casser
              une page, et que plus personne n’ose toucher.
            </p>
          </div>
          <div className="text-gray-light">
            <p>
              Une refonte ne repart pas de zéro. Je commence par lister ce qui
              fonctionne : les pages qui apportent des visites, les contenus à
              garder, les outils reliés au site. Les adresses des pages sont
              conservées ou redirigées une par une pour ne pas perdre le
              référencement acquis.
            </p>
            <p className="mt-4">
              Le nouveau site est construit à côté, sur pré-production, puis
              bascule en une fois. Pour{' '}
              <Link href={`${RouteLink.portfolio}/wordpress/quadria`}>
                <span className="text-orange underline transition-colors duration-150 hover:text-white">
                  Quadria
                </span>
              </Link>
              , le catalogue produits et ses fiches ont été repris de cette
              façon. Pour le{' '}
              <Link
                href={`${RouteLink.portfolio}/wordpress/camping-la-mouette-rieuse`}
              >
                <span className="text-orange underline transition-colors duration-150 hover:text-white">
                  Camping La Mouette Rieuse
                </span>
              </Link>
              , la refonte du site a accompagné celle de l’identité visuelle.
            </p>
            <p className="mt-4">
              Vous ne savez pas si votre site mérite une refonte ou une simple
              remise à niveau ? Commencez par un{' '}
              <Link href={RouteLink.auditGratuit}>
                <span className="text-orange underline transition-colors duration-150 hover:text-white">
                  audit gratuit de votre site
                </span>
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16"
          aria-labelledby="prix-title"
        >
          <div>
            <h2
              id="prix-title"
              className="text-3xl font-medium leading-tight text-white text-balance"
            >
              Combien coûte un site internet à La Rochelle ?
            </h2>
            <p className="mt-6 text-gray-light">
              Vous recevez un devis détaillé sous 24 h après notre échange,
              poste par poste, sans abonnement caché ni licence à renouveler.
            </p>
          </div>
          <div className="text-gray-light">
            <p>Ce qui fait varier le prix d’un site :</p>
            <ul className="styled-list mt-4">
              <li>
                Le nombre de gabarits de pages à concevoir et à intégrer, bien
                plus que le nombre de pages.
              </li>
              <li>
                Le design : maquettes réalisées avec vous, ou fournies par votre
                graphiste.
              </li>
              <li>
                Les fonctionnalités : formulaires, prise de rendez-vous,
                boutique, espace client, liaison avec un logiciel existant.
              </li>
              <li>
                Les contenus : reprise d’un site existant, rédaction, photos,
                traduction.
              </li>
            </ul>
            <p className="mt-4">
              Un site vitrine WordPress et une boutique en ligne ne se situent
              pas dans la même fourchette, et un outil sur mesure se chiffre sur
              un cahier des charges. Décrivez votre projet dans le formulaire en
              bas de page, ou appelez-moi : la première discussion est gratuite
              et sans engagement.
            </p>
          </div>
        </section>
      </div>

      <Diagonal
        className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
        bgCorner="fill-orange"
        bgClass="fill-gray-darker"
      />

      <div className="bg-gray-darker">
        <div className="container mb-8 md:mb-0">
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
            <p className="mt-4">
              Une des forces de Sketch est son approche 100% vectorielle :
              pratique, simple et rapide.
            </p>
            <p className="mt-4">
              Sketch est conçu pour créer des UI : C’est à dire, tout ce que
              vous avez créer sur cet outil est réalisable en HTML/CSS.
            </p>
            <p className="mt-4">
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

            <p className="mt-4">
              De plus, elle permet d&apos;automatiser l&apos;exécution des tests
              et de voir l&apos;évolution du développement du site internet.
              Cette méthode de travail est également largement plébiscitée pour
              les projets nécessitant l’intervention de plusieurs développeurs.
            </p>

            <p className="mt-4">
              Cette méthode est efficace lorsqu’elle est associée à une autre
              méthode : le déploiement continu. Cette dernière permet à mes
              clients de consulter les modifications apportées à leur site en
              temps réel sur mon serveur de préproduction.
            </p>
          </TextImage>

          <TextImage image={Lighthouse} title="Google Lighthouse et GTMetrix">
            <p className="mt-4">
              Dès lors que l&apos;intégration de votre maquette commence, que ce
              soit sur WordPress, Symfony, Prestashop ou encore React JS. Je
              contrôle à chaque déploiement les performances de votre site.{' '}
            </p>

            <p className="mt-4">
              Cela permet de garder un oeil sur les dernières recommandations du
              web, que ce soit en terme de performance, accessibilité, meilleurs
              pratiques ou encore le SEO naturel.
            </p>
          </TextImage>
        </div>

        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgCorner="fill-orange"
          bgClass="fill-gray-dark"
        />
      </div>

      <References />

      <FaqSection
        intro="Les questions que me posent les entreprises de La Rochelle et de Charente-Maritime avant de lancer la création de leur site."
        items={FAQ}
      />

      <div className="container mt-8 md:mt-0">
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
