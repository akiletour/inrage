import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import MoreIcon from '@component/icons/MoreIcon'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import Link from '@component/NoScrollLink'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import ImageBackgroundTma from '@image/bg-tma.jpeg'
import ProtectionShield from '@image/protection-shield.png'
import WebsitePrestashop from '@image/website-prestashop.png'
import WebsiteWP from '@image/website-wp.png'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Freelance Prestashop : création de boutique en ligne | inRage',
  description:
    'Développeur Prestashop freelance depuis 2013 : création de boutique en ligne, thème sur mesure, modules, import de catalogue, migration vers Prestashop 8 et maintenance. Basé à La Rochelle.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationPrestashop),
  },
}

const FAQ: FaqItem[] = [
  {
    question: 'Prestashop ou WooCommerce pour ma boutique ?',
    answer:
      'Prestashop pour un catalogue structuré, des déclinaisons nombreuses, du B2B avec des tarifs par client ou une liaison avec un ERP. WooCommerce quand la boutique accompagne un site éditorial WordPress et que le catalogue reste simple. Je développe sur les deux, le choix se fait sur votre catalogue et vos outils, pas sur une préférence.',
  },
  {
    question: 'Pouvez-vous reprendre ma boutique Prestashop existante ?',
    answer:
      'Oui, qu’elle ait été créée par une agence, un freelance ou vous-même. Je commence par un état des lieux de la version, des modules et du thème, puis je propose soit une remise à niveau, soit une migration vers Prestashop 8 en conservant le catalogue, les clients et les commandes.',
  },
  {
    question: 'Comment mon catalogue est-il intégré ?',
    answer:
      'Par import depuis un fichier CSV ou Excel, ou par une liaison avec votre logiciel de gestion via une API. Les outils d’import que j’ai développés sont réutilisables tout au long de la vie de la boutique pour les mises à jour de stock et de prix.',
  },
]

export default async function PrestationPrestashop() {
  const projects = await getPortfolioItems(4, 'e-commerce')

  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations',
        },
        {
          link: RouteLink.prestationWeb,
          title: 'Création de site internet',
        },
      ]}
      title="Création de boutique Prestashop"
    >
      <div className="container flex items-center">
        <div className="md:w-2/5 hidden md:block">
          <Image
            src={WebsitePrestashop}
            alt="Développeur Prestashop Freelance sur La Rochelle"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="md:w-3/5 text-lg md:pl-10 leading-6 pt-4">
          <h2 className="text-white text-xl md:text-3xl font-bold">
            Développeur Prestashop freelance <br className="hidden md:block" />à
            La Rochelle
          </h2>
          <p className="mt-4">
            Je développe des boutiques Prestashop depuis 2013, de la version 1.5
            à Prestashop 8, pour des e-commerçants B2C et B2B : thème sur
            mesure, modules spécifiques, import de catalogue, liaison avec un
            ERP ou un logiciel de caisse.
          </p>
          <p className="mt-4">
            Prestashop est open source et entièrement administrable : vous gérez
            vous-même le catalogue, les stocks, les promotions et les commandes.
            Son catalogue de modules couvre la plupart des besoins, et ce qu’il
            ne couvre pas, je le développe.
          </p>
          <p className="mt-4">
            Une fois la boutique en ligne, la{' '}
            <Link href={RouteLink.prestationTmaPrestashop}>
              <span className="text-orange underline">
                maintenance Prestashop
              </span>
            </Link>{' '}
            prend le relais : mises à jour, sécurité, sauvegardes et
            surveillance du tunnel d’achat.
          </p>
        </div>
      </div>

      <div className="bg-gray-darker mt-8">
        <Diagonal
          flipX
          flipY
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center py-16 lg:py-0">
          <div className="md:px-36 text-lg">
            <h2 className="text-3xl text-white font-bold mb-4">
              Pourquoi choisir Prestashop ?
            </h2>

            <p>
              Prestashop est le CMS de référence pour la création de boutique en
              ligne et plus largement pour le e-commerce. Il permet à mes
              clients d’être entièrement autonomes dans la gestion des contenus
              de leur site, de gérer leur catalogue, d’ajouter des produits ou
              encore de créer des opérations commerciales.
            </p>
            <p>
              Depuis la refonte du CMS sous Symfony (version 1.7), les
              possibilités de Prestashop ont été élargies notamment en termes de
              personnalisation du backoffice. Le recours à Symfony a également
              permis d’améliorer les performances des sites développés sous
              Prestashop.
            </p>
            <p>
              Prestashop est la garantie pour mes clients de disposer d’une
              boutique en ligne fiable, sécurisée et performante.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <TextImage
          title={['Développement et intégration', 'de thèmes Prestashop']}
          image={WebsiteWP}
        >
          <p>
            Pour chaque projet, nous élaborons ensemble le design de votre site
            e-commerce puis je développe le thème prestashop dans le respect de
            vos choix graphiques et fonctionnels. Cette étape est cruciale car
            elle définit ce que les visiteurs pourront visualiser sur votre
            boutique. Tous les thèmes que je développe sont consultables sur
            tous les terminaux (responsive design).
          </p>

          <p className="mt-4">
            Je respecte scrupuleusement les bonnes pratiques dictées par
            Prestashop et sa communauté. C’est pourquoi je préfère développer
            intégralement un thème plutôt que d’en utiliser un existant. Ainsi,
            les sites que je développe sont plus rapides à l’affichage, plus
            fiables et plus pérennes dans le temps.
          </p>
        </TextImage>

        <TextImage
          position="right"
          title={['Développement', 'de modules Prestashop']}
          image={WebsitePrestashop}
        >
          <p>
            Comme pour le CMS Wordpress, la communauté Prestashop est importante
            et particulièrement investie. De fait, le catalogue de ses modules
            existants est très complet. Pourtant, selon vos besoins ou les
            enjeux de votre activité, il peut être nécessaire de développer
            entièrement une fonctionnalité ou un module. Pour chaque besoin, il
            existe une solution technique, ainsi je suis en mesure de développer
            pour vous la fonctionnalité qui convient à votre boutique
            e-commerce.
          </p>

          <p className="mt-4">
            Les modules développés par mes soins respectent les bonnes pratiques
            véhiculées par Prestashop et utilisent le système de “Hook” pour
            réaliser des actions sans modifier le coeur du CMS. Ces modules sont
            réplicables sur l’ensemble des sites développés sous Prestashop.
          </p>
        </TextImage>
      </div>

      <div className="bg-gray-darker mt-8">
        <Diagonal
          flipX
          flipY
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center py-16 lg:py-0">
          <div className="">
            <h2 className="text-center text-white text-3xl">
              Migration vers Prestashop 8
              <span className="block text-xl">Sans recréer votre boutique</span>
            </h2>
            <p className="text-xl text-gray-light mt-6">
              Les boutiques encore en 1.6 ou 1.7 ne reçoivent plus de correctifs
              de sécurité, et leurs modules cessent un à un d’être maintenus.
            </p>
            <p className="mt-4">
              En 2019, j’ai créé un outil de migration pour passer les boutiques
              de la 1.6 à la 1.7 sans repartir de zéro. La même démarche
              s’applique aujourd’hui au passage vers Prestashop 8 : catalogue,
              clients et commandes sont repris, le thème et les modules sont
              réécrits ou remplacés, et la bascule se fait sur pré-production
              avant la mise en ligne.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <h2 className="text-white text-3xl font-bold mb-8">
          L&apos;intégration de votre catalogue produit
        </h2>
        <p>
          L&apos;intégration de votre catalogue produit dans votre boutique
          Prestashop est souvent l&apos;étape la plus longue d&apos;une création
          ou d&apos;une refonte.
        </p>
        <p className="mt-4">
          Pour faciliter l&apos;intégration de vos catégories et produits dans
          votre catalogue, j&apos;ai développé des outils permettant
          d&apos;injecter vos références dans Prestashop depuis une API, un
          fichier CSV ou Excel.
        </p>
        <p className="mt-4">
          Ainsi, vous pouvez l&apos;alimenter en quelques clics et cela, tout au
          long de la vie de votre site e-commerce.
        </p>
      </div>

      <div className="relative">
        <Diagonal
          className="h-24 md:h-40 lg:h-[360px] -z-10"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageBackgroundTma}
          alt="Prestation de maintenance TMA"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="container flex items-center relative z-10 my-8 lg:-my-20">
          <div className="md:w-2/3 text-gray-light text-sm">
            <h2 className="text-2xl sm:text-3xl text-white font-medium mb-6">
              Garanti et suivi <br className="hidden sm:block" />
              <span className="font-light">pendant 3 mois inclus</span>
            </h2>
            <p>
              Lorsque votre site est en ligne, il peut être sujet à de nombreux
              problèmes tels des extensions obsolètes qui peuvent créer des
              failles et laisser le champ libre à des utilisateurs malveillants,
              ou encore une panne du serveur sur lequel il est hébergé.
            </p>

            <p className="mt-4">
              Pour remédier rapidement et efficacement à ce type de problème,
              j’ai développé une multitude d’outils pour inspecter et analyser
              votre site en temps réel et me prévenir si l’intégrité de votre
              site est altérée.
            </p>

            <p className="mt-4">
              Lorsqu’un problème m’est notifié, je suis en mesure d’intervenir
              rapidement pour le corriger et procéder si nécessaire à la mise à
              jour des modules obsolètes.
            </p>
            <p className="mt-4">
              Ainsi, votre site internet est protégé en permanence.
            </p>
            <div className="flex flex-wrap flex-start mt-8">
              <Link href={RouteLink.prestationTmaPrestashop}>
                <span className="button">
                  Forfaits de maintenance Prestashop
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:w-1/3 md:flex justify-center">
            <Image
              src={ProtectionShield}
              alt={'Forfaits de maintenance Prestashop'}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <Diagonal
          className="h-24 md:h-40 lg:h-[360px] -z-10"
          bgClass="fill-gray-darker"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker">
        <div className="container pb-16 lg:pb-0 lg:-mb-16 relative z-10">
          <SectionTitle
            title="Réalisations Prestashop"
            content="Retrouvez ci-dessous quelques projets auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance sur Prestashop."
          />

          <div className="mt-6 sm:mt-0 grid gap-4 sm:gap-0 grid-cols-2 md:grid-cols-4">
            {projects.length > 0 &&
              projects.map(({ title, thumbnail, slug, support }) => (
                <ProjectItem
                  key={title}
                  image={`/images/portfolio/${thumbnail}`}
                  title={title}
                  slug={slug}
                  support={support}
                />
              ))}
          </div>
        </div>
        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            href: `${RouteLink.portfolio}/e-commerce`,
            title: ['voir les projets', 'Prestashop'],
            icon: <MoreIcon />,
          }}
        />
      </div>
      <FaqSection
        intro="Ce que me demandent les e-commerçants avant de lancer ou de reprendre leur boutique Prestashop."
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
