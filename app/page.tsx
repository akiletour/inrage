import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LastArticles from '@/components/blog/LastArticles';
import ContactForm from '@/components/ContactForm';
import Diagonal from '@/components/Diagonal';
import LeafHeartIcon from '@/components/icons/LeafHeartIcon';
import MoreIcon from '@/components/icons/MoreIcon';
import ExpertiseItem from '@/components/items/ExpertiseItem';
import Keypoints from '@/components/Keypoints';
import Layout from '@/components/Layout';
import LastProjects from '@/components/portfolio/LastProjects';
import PrestationsList from '@/components/PrestationsList';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import ExpertiseJoomla from '@image/expertises/joomla.png';
import ExpertisePrestashop from '@image/expertises/prestashop.png';
import ExpertiseSymfony from '@image/expertises/symfony.png';
import ExpertiseWordPress from '@image/expertises/wordpress.png';
import ImageDiscoverTma from '@image/prestations/presentation-integration-web.jpeg';
import { getCanonicalUrl, RouteLink } from '@/libs/route';

export const metadata = {
  title:
    'Développeur Freelance, Pascal GAULT - La Rochelle WordPress et Prestashop',
  description:
    'Pascal GAULT, Intégrateur web et développeur Freelance à La Rochelle spécialisé dans la création de sites internet WordPress, Joomla, Symfony et Prestashop.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

export default function Homepage() {
  return (
    <Layout>
      <div className='container'>
        <SectionTitle
          className='mt-3 md:mt-0'
          title='A propos'
          content="Développeur Freelance créatif et innovant basé au coeur de La Rochelle et spécialisé dans la création de site internet. Depuis l'âge de 14 ans, je développe, compose et crée des projets web."
        />

        <div className='mx-auto my-4 max-w-4xl text-center text-xl font-medium text-white sm:text-2xl'>
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et
          développeurs. Nous travaillons ensemble pour créer des choses
          inspirantes et engagées.
        </div>

        <PrestationsList />
      </div>

      <div className='relative'>
        <Diagonal
          className='-z-10 h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          flipX
          flipY
          bgClass='fill-gray-dark'
          bgCorner='fill-orange'
        />
        <Image
          className='-z-10 opacity-30 md:opacity-100'
          src={ImageDiscoverTma}
          alt='Prestation de maintenance TMA'
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='container relative z-10 py-5 md:-my-10 xl:py-0'>
          <div className='md:w-1/2'>
            <h2 className='mb-3 text-2xl font-medium text-white sm:text-3xl'>
              Besoin d’une estimation de votre site
              <br className='hidden sm:block' />
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

            <div className='flex-start flex flex-wrap'>
              <Button asChild className='mr-2 mt-3'>
                <Link href={RouteLink.contact}>
                  Demandez votre devis maintenant
                </Link>
              </Button>
              <Button asChild variant='outline' className='mt-3'>
                <Link href={RouteLink.prestationTma}>
                  Mes offres de maintenance
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Diagonal
          bgClass='fill-gray-darker'
          className='h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          bgCorner='fill-orange'
        />
      </div>

      <div className='bg-gray-darker pt-8 md:pt-3'>
        <div className='container relative z-10 mb-10 lg:-mb-8'>
          <SectionTitle
            content='Consultez mes dernières créations, atteignant tous, l’esthétique du détail et de la fonctionnalité qui me démarque du reste en tant que développeur Freelance.'
            title='Projets'
          />

          <Suspense fallback={<p>Loading</p>}>
            <LastProjects />
          </Suspense>
        </div>
        <Diagonal
          bgClass='fill-gray-dark'
          bgCorner='fill-orange'
          className='h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className='container'>
        <SectionTitle
          title='Expertises'
          content='Je propose un large éventail de services axés sur les résultats pour les marques, en veillant à ce que leur présence en ligne reflète réellement leurs objectifs et leurs inspirations.'
        />

        <div className='my-4 grid gap-x-2 gap-y-6 md:grid-cols-2'>
          <ExpertiseItem
            title='WordPress'
            excerpt='WordPress est le plus populaire des CMS en ce moment, il vous permet d’administrer facilement votre site et de personnaliser intégralement le frontoffice.'
            link={RouteLink.prestationWordPress}
            image={ExpertiseWordPress}
          />
          <ExpertiseItem
            title='Symfony'
            excerpt='Symfony est un framework PHP qui nous permet d’accélèrer le développement de sites ou d’applications grace à sa méthodologie et architecture évolutive.'
            link={RouteLink.prestationSymfony}
            image={ExpertiseSymfony}
          />
          <ExpertiseItem
            title='Prestashop'
            excerpt='Prestashop est un CMS très puissant pour les sites de commerce électronique (e-commerce) avec plus de 5 000 modules et thèmes.'
            link={RouteLink.prestationPrestashop}
            image={ExpertisePrestashop}
          />
          <ExpertiseItem
            title='Joomla'
            excerpt='Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique.'
            link={RouteLink.portfolio}
            image={ExpertiseJoomla}
          />
        </div>
      </div>

      <Keypoints />

      <div className='bg-gray-darker'>
        <div className='container py-4'>
          <SectionTitle
            content={
              "Passionné par les nouvelles technologies, j'adore partager mes compétences et mes découvertes avec des personnes qui ont cette même passion pour le web !"
            }
            title='Articles'
          />

          <LastArticles />
        </div>

        <Diagonal
          className='h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45'
          bgClass='fill-gray-dark'
          bgCorner='fill-orange'
          cta={{
            icon: <LeafHeartIcon />,
            title: ['Voir tous', 'les articles'],
            href: RouteLink.blog,
          }}
        />
      </div>

      <div className='container mt-8 md:mt-0'>
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serais ravis de vous répondre."
          }
          title='Contact'
        />

        <ContactForm />
      </div>
    </Layout>
  );
}
