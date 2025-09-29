import { Suspense } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import LastArticles from '@component/blog/LastArticles'
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
  title:
    'Développeur Freelance, Pascal GAULT - La Rochelle WordPress et Prestashop',
  description:
    'Pascal GAULT, Intégrateur web et développeur Freelance à La Rochelle spécialisé dans la création de sites internet WordPress, Joomla, Symfony et Prestashop.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
}

export default function Homepage() {
  return (
    <Layout>
      <div className="container">
        <SectionTitle
          className="mt-3 md:mt-0"
          title="A propos"
          content="Développeur Freelance créatif et innovant basé au coeur de La Rochelle et spécialisé dans la création de site internet. Depuis l'âge de 14 ans, je développe, compose et crée des projets web."
        />

        <div className="my-4 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white">
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et
          développeurs. Nous travaillons ensemble pour créer des choses
          inspirantes et engagées.
        </div>

        <PrestationsList />
      </div>

      <div className="relative">
        <Diagonal
          className="-z-10 h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageDiscoverTma}
          alt="Prestation de maintenance TMA"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="container relative z-10 py-5 xl:py-0 md:-my-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl text-white font-medium mb-3">
              Besoin d’une estimation de votre site
              <br className="hidden sm:block" />
              et/ou de sa maintenance
            </h2>
            <p>
              Simple et en toute transparence, n’hésitez pas à me demander une
              estimation gratuite pour la création de votre site web ou de la
              maintenance applicative.
            </p>
            <p>
              Vous recevrez dans la journée votre devis et nous pourrons prendre
              contact pour définir ensemble les tâches.
            </p>

            <div className="flex flex-wrap flex-start">
              <Link href={RouteLink.contact}>
                <span className="button mt-3 mr-2">
                  Demandez votre devis maintenant
                </span>
              </Link>
              <Link href={RouteLink.prestationTma}>
                <span className="button-outline mt-3">
                  Mes offres de maintenance
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Diagonal
          bgClass="fill-gray-darker"
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker pt-8 md:pt-3">
        <div className="container mb-10 lg:-mb-8 z-10 relative">
          <SectionTitle
            content="Consultez mes dernières créations, atteignant tous, l’esthétique du détail et de la fonctionnalité qui me démarque du reste en tant que développeur Freelance."
            title="Projets"
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastProjects />
          </Suspense>
        </div>
        <Diagonal
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container">
        <SectionTitle
          title="Expertises"
          content="Je propose un large éventail de services axés sur les résultats pour les marques, en veillant à ce que leur présence en ligne reflète réellement leurs objectifs et leurs inspirations."
        />

        <div className="my-4 grid md:grid-cols-2 gap-x-2 gap-y-6">
          <ExpertiseItem
            title="WordPress"
            excerpt="WordPress est le plus populaire des CMS en ce moment, il vous permet d’administrer facilement votre site et de personnaliser intégralement le frontoffice."
            link={RouteLink.prestationWordPress}
            image={ExpertiseWordPress}
          />
          <ExpertiseItem
            title="Symfony"
            excerpt="Symfony est un framework PHP qui nous permet d’accélèrer le développement de sites ou d’applications grace à sa méthodologie et architecture évolutive."
            link={RouteLink.prestationSymfony}
            image={ExpertiseSymfony}
          />
          <ExpertiseItem
            title="Prestashop"
            excerpt="Prestashop est un CMS très puissant pour les sites de commerce électronique (e-commerce) avec plus de 5 000 modules et thèmes."
            link={RouteLink.prestationPrestashop}
            image={ExpertisePrestashop}
          />
          <ExpertiseItem
            title="React & Next.js"
            excerpt="React et Next.js sont les technologies modernes de référence pour créer des applications web performantes, scalables et avec une excellente expérience utilisateur."
            link={RouteLink.prestationReact}
            image={ExpertiseReact}
          />
        </div>
      </div>

      <Keypoints />

      <div className="bg-gray-darker">
        <div className="container py-4">
          <SectionTitle
            content={
              "Passionné par les nouvelles technologies, j'adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !"
            }
            title="Articles"
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastArticles />
          </Suspense>
        </div>

        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <LeafHeartIcon />,
            title: ['Voir tous', 'les articles'],
            href: RouteLink.blog,
          }}
        />
      </div>

      <div className="container mt-8 md:mt-0">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serai ravi de vous répondre."
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
