import { Suspense } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import LastArticles from '@component/blog/LastArticles'
import ButtonLink from '@component/ButtonLink'
import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import LeafHeartIcon from '@component/icons/LeafHeartIcon'
import MoreIcon from '@component/icons/MoreIcon'
import ExpertiseItem from '@component/items/ExpertiseItem'
import Keypoints from '@component/Keypoints'
import Layout from '@component/Layout'
import LastProjects from '@component/portfolio/LastProjects'
import PrestationsList from '@component/PrestationsList'
import SectionTitle from '@component/SectionTitle'
import ExpertiseReact from '@image/expertises/react.svg'
import ExpertisePrestashop from '@image/expertises/prestashop.png'
import ExpertiseSymfony from '@image/expertises/symfony.png'
import ExpertiseWordPress from '@image/expertises/wordpress.png'
import ImageDiscoverTma from '@image/prestations/presentation-integration-web.jpeg'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Développeur web freelance à La Rochelle - Pascal Gault',
  description:
    'Pascal Gault, développeur web freelance à La Rochelle : création de sites WordPress, Prestashop, Symfony et React, maintenance et hébergement. Devis gratuit.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
}

export default function Homepage() {
  return (
    <Layout>
      <div className="container">
        <SectionTitle
          className="mt-6 md:mt-0"
          title={['Développeur web', 'à La Rochelle']}
          content="Développeur freelance créatif et innovant basé au cœur de La Rochelle, en Charente-Maritime, et spécialisé dans la création de sites internet. Depuis l'âge de 14 ans, je développe, compose et crée des projets web pour des entreprises de La Rochelle, de Nouvelle-Aquitaine et de toute la France."
        />

        <div className="my-8 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white text-balance">
          Je m&apos;appuie sur des collectifs de freelances rochelais, créatifs,
          designers et développeurs, pour mener des projets inspirants et
          engagés.
        </div>

        <div className="mb-12 flex justify-center">
          <ButtonLink href={RouteLink.developpeurLaRochelle}>
            Mon activité de développeur web à La Rochelle
          </ButtonLink>
        </div>

        <PrestationsList />
      </div>

      <div className="relative">
        <Diagonal
          className="-z-10 h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageDiscoverTma}
          alt="Site e-commerce Soleil Productions affiché sur tablette"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="container relative z-10 py-10 xl:py-0 md:-my-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl text-white font-medium mb-6">
              Besoin d’une estimation de votre site
              <br className="hidden sm:block" />
              et/ou de sa maintenance
            </h2>
            <p>
              Simple et en toute transparence : demandez-moi une estimation
              gratuite pour la création de votre site web ou sa maintenance, que
              vous soyez à La Rochelle ou ailleurs en France.
            </p>
            <p>
              Vous recevez votre devis dans la journée et nous définissons
              ensemble les tâches à réaliser.
            </p>

            <div className="flex flex-wrap flex-start">
              <Link href={RouteLink.contact}>
                <span className="button mt-6 mr-4">
                  Demandez votre devis maintenant
                </span>
              </Link>
              <Link href={RouteLink.prestationTma}>
                <span className="button-outline mt-6">
                  Mes offres de maintenance
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Diagonal
          bgClass="fill-gray-darker"
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker pt-16 md:pt-6">
        <div className="container mb-20 lg:-mb-16 z-10 relative">
          <SectionTitle
            content="Mes dernières créations pour des clients de La Rochelle et de toute la France : l’esthétique du détail et la fonctionnalité qui me démarquent en tant que développeur freelance."
            title={['Dernières', 'réalisations']}
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastProjects />
          </Suspense>
        </div>
        <Diagonal
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container">
        <SectionTitle
          title={['Expertises', 'techniques']}
          content="Quatre technologies maîtrisées depuis des années pour répondre à chaque type de projet, du site vitrine à l’application métier, pour les entreprises de La Rochelle comme d’ailleurs."
        />

        <div className="my-8 grid md:grid-cols-2 gap-x-4 gap-y-12">
          <ExpertiseItem
            title="Création de site WordPress"
            excerpt="Le CMS le plus répandu, avec un thème sur mesure : vous administrez vos contenus en autonomie sur un site rapide et pensé pour le référencement."
            link={RouteLink.prestationWordPress}
            image={ExpertiseWordPress}
          />
          <ExpertiseItem
            title="Développement Symfony"
            excerpt="Le framework PHP de référence pour les extranets, outils de gestion et plateformes sur mesure, avec une architecture robuste et évolutive."
            link={RouteLink.prestationSymfony}
            image={ExpertiseSymfony}
          />
          <ExpertiseItem
            title="Boutique Prestashop"
            excerpt="Création de boutiques en ligne, développement de modules, migrations et intégrations ERP pour vendre efficacement, en B2B comme en B2C."
            link={RouteLink.prestationPrestashop}
            image={ExpertisePrestashop}
          />
          <ExpertiseItem
            title="Applications React et Next.js"
            excerpt="Les technologies modernes de référence pour des applications web performantes, scalables et agréables à utiliser."
            link={RouteLink.prestationReact}
            image={ExpertiseReact}
          />
        </div>
      </div>

      <Keypoints />

      <div className="bg-gray-darker">
        <div className="container py-8">
          <SectionTitle
            content={
              "Passionné par les nouvelles technologies, j'adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !"
            }
            title={['Derniers', 'articles']}
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastArticles />
          </Suspense>
        </div>

        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <LeafHeartIcon />,
            title: ['Voir tous', 'les articles'],
            href: RouteLink.blog,
          }}
        />
      </div>

      <div className="container mt-16 md:mt-0">
        <SectionTitle
          content={
            'Un projet web à La Rochelle, en Charente-Maritime ou ailleurs ? Contactez-moi en remplissant le formulaire ci-dessous, je vous réponds dans la journée.'
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
