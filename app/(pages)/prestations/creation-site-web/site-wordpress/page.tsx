import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import MoreIcon from '@component/icons/MoreIcon'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import Link from '@component/NoScrollLink'
import Quote from '@component/Quote'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import AcfImage from '@image/acf.png'
import ImageBackgroundTma from '@image/bg-tma.jpeg'
import WordpressSage from '@image/developpement-theme-sage.jpeg'
import PageBuilderImage from '@image/page-builder.png'
import ProtectionShield from '@image/protection-shield.png'
import WebsitePrestashop from '@image/website-prestashop.png'
import WebsiteWP from '@image/website-wp.png'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Création de site WordPress | Freelance Wordpress - inRage',
  description:
    'Développeur Freelance à La Rochelle, spécialisé dans la création et le développement de site WordPress. ACF, Contact Form et Roots Sage. Contactez-moi pour votre création ou refonte de site Wordpress.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationWordPress),
  },
}

export default async function PrestationWordPress() {
  const projects = await getPortfolioItems(4, 'wordpress')

  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
        {
          link: RouteLink.prestationWeb,
          title: 'Création de site internet',
        },
      ]}
      title="Création de site WordPress"
    >
      <div className="container flex items-center">
        <div className="md:w-2/5 hidden md:block">
          <Image
            src={WebsiteWP}
            alt="Développeur WordPress Freelance sur La Rochelle"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="md:w-3/5 text-lg md:pl-10 leading-6 pt-4">
          <h2 className="text-white text-xl md:text-3xl font-bold">
            Développeur WordPress Freelance sur{' '}
            <br className="hidden md:block" />
            La Rochelle
          </h2>
          <p className="mt-4">
            Développeur freelance, je me spécialise avant tout sur la création
            de site Wordpress. En effet, le développement wordpress est mon
            domaine de prédilection, et ce, pour plusieurs raisons :
          </p>
          <ul className="styled-list mt-4">
            <li>Wordpress est un CMS gratuit et opensource.</li>
            <li>
              Il est 100% administrable et son interface d’administration est
              claire, fiable et sobre.
            </li>
            <li>
              De plus, cette inter ace est entièrement personnalisable afin de
              l’adapter à l’usage du client.
            </li>
            <li>
              Wordpress bénéficie d’une large communauté, il est le CMS le plus
              utilisé au monde soit 30% des sites en ligne à ce jour. Sa
              communauté est également très investie, les plugins et thèmes
              disponibles pour ce CMS sont extrêmement nombreux.
            </li>
          </ul>
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
            <Quote message="WordPress est un CMS simple et fiables, plébiscité autant par les développeurs que par leurs clients" />
          </div>
        </div>
        <Diagonal
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container mt-8 md:mt-0">
        <SectionTitle
          title={['Backoffice sur-mesure', 'orienté utilisateur']}
          content="Sur Wordpress, pour faciliter la prise en main de mes clients et leur permettre d’ajouter du contenu en toute autonomie, il est possible de personnaliser intégralement l’espace d’administration d’un site."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center">
            <div className="flex-none lg:mr-4 h-36 flex items-center">
              <Image
                src={PageBuilderImage}
                alt="Construction de page avec Gutenberg"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div>
              <h3 className="text-white mb-2 font-medium text-xl">Gutenberg</h3>
              <p>
                Depuis la version 5.5, WordPress propose un formidable outil
                Gutenberg pour vous permettre de construire vos pages
                dynamiquement. Je peux mettre en place toute la construction des
                blocs Gutenberg pour vous permettre d&apos;avoir la main à 100%
                sur votre site.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-start lg:items-center">
            <div className="flex-none mr-4 flex h-36 items-center">
              <Image
                src={AcfImage}
                alt="Construction de page avec Advanced Custom Fields"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div>
              <h3 className="text-white mb-2 font-medium text-xl">
                Champs personnalisés ACF
              </h3>
              <p>
                Les Advanced Custom Fields (ACF) permettent de simplifier
                l’intégration de contenus sur les pages d’un site. Les ACF sont
                des blocs définis en amont avec le client, ils présentent des
                champs précis qui une fois remplis par l’administrateur
                apparaissent sous la forme de contenus structurés sur les pages
                du site.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-xl text-gray-light">
            Les ACF ou Advanced Custom Fields permettent à l’administrateur d’un
            site, d&apos;interagir avec l&apos;ensemble des contenus des sites
            que je développe. Ils se matérialisent par des champs à remplir sur
            le backoffice et sont transformés automatiquement en contenus
            structurés et mis en page en frontoffice.
          </p>

          <p className="mt-8">
            Les pages comportant des ACF nécessitent dans un premier temps
            d’adapter le thème afin d’afficher les contenus tout en respectant
            la charte graphique imposées.
            <br />
            L’administrateur du site est alors entièrement autonome dans l’ajout
            des contenus.
          </p>

          <p>
            Cette méthode est évolutive, il est donc aisé d’ajouter des ACF sur
            les pages souhaitées lorsque cela devient nécessaire.
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
          <div className="">
            <h2 className="text-center text-white text-3xl">
              Déploiement continu
              <span className="block text-xl">Réactivité, rapidité</span>
            </h2>
            <p className="text-xl text-gray-light mt-6">
              Le déploiement continu permet à mes clients de rester au coeur de
              leur projet de création de site. Grâce à cette méthode, ils sont
              en mesure de consulter à tout moment, les différentes évolutions
              ou modifications apportés à leur site.
            </p>
            <p className="mt-4">
              En phase de développement, lorsqu&apos;une fonctionnalité est
              réalisée, elle est déployée sur mon outil de versioning Git, puis
              mon serveur d’intégration continue (Gitlab CI) déploie
              automatiquement la fonctionnalité sur mon serveur de
              préproduction. Ainsi, les modifications sont visibles par mon
              client, 5 minutes après son intégration.
            </p>

            <p className="mt-4">
              Cette environnement de préproduction est protégé par un
              identifiant et un mot de passe, il n’est accessible qu’au client
              et n’est pas indexé sur les moteurs de recherche. Ainsi, le client
              peut valider une à une les différentes modifications à distance et
              il m’est possible de réagir rapidement si une fonctionnalité
              venait à dysfonctionner.
            </p>

            <p className="mt-4">
              Le site est alors mis en production seulement lorsque mon client
              est pleinement satisfait du résultat.
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
          position="right"
          title={['Développement', "d'extensions sur-mesure"]}
          image={WebsiteWP}
        >
          <p>
            Si la communauté Wordpress est colossale, le catalogue de ses
            extensions existantes l’est tout autant. Pourtant, selon vos besoins
            ou les enjeux de votre activité, il peut être nécessaire de
            développer entièrement une fonctionnalité ou une extension. Pour
            chaque besoin, il existe une solution technique, ainsi je suis en
            mesure de développer pour vous la fonctionnalité qui vous convient.
            <br />
            Les extensions (plugins) développées par mes soins respectent les
            bonnes pratiques véhiculées par Wordpress et sont à même d’évoluer
            au gré des mises à jour du coeur de Wordpress. Si vous disposez de
            plusieurs sites sous Wordpress, il est aisé de migrer les extensions
            d’un site à l’autre.
          </p>

          <p className="mt-4">
            Selon les besoins de votre activité, je vous conseille les
            extensions idéales pour vous simplifier le quotidien.
          </p>
        </TextImage>

        <TextImage
          title={[
            'Développement et intégration',
            'de thème WordPress sur-mesure',
          ]}
          image={WebsitePrestashop}
        >
          <p>
            Pour chaque projet, nous élaborons ensemble le design de votre site
            puis je développe le thème inhérent à vos choix graphiques et
            fonctionnels. Cette étape est cruciale car elle définit ce que les
            visiteurs pourront visualiser sur votre site. Tous les thèmes que je
            développe répondent systématiquement à différents besoins :
          </p>

          <ul className="styled-list">
            <li>
              Le responsive design, pour permettre à votre site d’être consulté
              quelque soit le support (mobile, desktop…)
            </li>
            <li>
              L’usage des dernières technologies, telles que SASS pour
              structurer les feuilles de style CSS, Webpack pour structurer les
              modules javaScript ou encore ACF pour structurer les contenus d’un
              site.
            </li>
            <li>
              La compilation des feuilles de style CSS et modules JS afin de
              limiter le poids d’un site et en accélérer l’affichage.
            </li>
            <li>
              Ainsi que la gestion du format des images pour un affichage plus
              rapide des pages.
            </li>
          </ul>

          <p className="mt-4">
            Je respecte scrupuleusement les bonnes pratiques dictées par
            Wordpress et sa communauté. C’est pourquoi je préfère développer
            intégralement un thème plutôt que d’en utiliser un existant. Ce qui
            rend les sites que je développe, plus rapides à l’affichage, plus
            fiables et plus pérennes dans le temps.
          </p>
        </TextImage>

        <TextImage
          image={WordpressSage}
          title={[
            'Développement et création',
            'de thème WordPress Sage 9 et 10',
          ]}
        >
          <p>
            Depuis 2017, j&apos;ai commencé le développement de mes thèmes avec
            le support de Sage 8 (par roots).
          </p>
          <p className="mt-4">
            En 2019, j&apos;ai migré vers Sage 9 avec la prise en charge du
            moteur de template blade, l&apos;intégration stricte de Webpack et
            Eslint.
          </p>
          <p className="mt-4">
            J&apos;ai eu l&apos;occasion de développer des thèmes pour
            WooCommerce et Sage comme le{' '}
            <Link href={`${RouteLink.portfolio}/wordpress/biosalines`}>
              <span className="text-orange">projet Biosalines.</span>
            </Link>
          </p>

          <p className="mt-4">
            Au fil des années, j&apos;ai pu mettre pas mal de solution en place
            :
          </p>

          <ul className="styled-list">
            <li>
              Création d&apos;un système complexe de block Gutenberg avec Sage
              et ACF avec chargement automatique, CSS dédié et preview image,
            </li>
            <li>
              Des utilitaires pour retirer Gutenberg sur certaine page en
              fonction des controlleurs et des pages en cours,
            </li>
            <li>
              Chargement automatique des champs ACF grace à Sage et
              <a
                className="text-orange ml-2"
                href="https://github.com/wordplate/extended-acf"
                rel="noreferrer"
                target="_blank"
              >
                Wordplate ACF
              </a>
            </li>
            <li>
              Une stack qui auto-install une stack WordPress avec Sage et ses
              extensions tiers,
            </li>
            <li>Un système de gestion de CSS par page pour Sage.</li>
          </ul>
        </TextImage>
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
              <Link href={RouteLink.prestationTmaWordPress}>
                <span className="button">
                  Forfaits de maintenance WordPress
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:w-1/3 md:flex justify-center">
            <Image
              src={ProtectionShield}
              alt={'Garanti et suivi de maintenance WordPress'}
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
        <div className="container py-20 lg:py-0 lg:-mb-16 relative z-10">
          <SectionTitle
            title="Réalisations WordPress"
            content="Retrouvez ci-dessous quelques projets auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance."
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
            href: `${RouteLink.portfolio}/wordpress`,
            title: ['voir les projets', 'WordPress'],
            icon: <MoreIcon />,
          }}
        />
      </div>
      <div className="container mt-8 md:mt-0">
        <SectionTitle
          content="Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
