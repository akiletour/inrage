import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import ContactForm from '@component/ContactForm';
import LeafHeartIcon from '@component/icons/LeafHeartIcon';
import MoreIcon from '@component/icons/MoreIcon';
import ArticleItem from '@component/items/ArticleItem';
import ExpertiseItem from '@component/items/ExpertiseItem';
import ProjectItem from '@component/items/ProjectItem';
import Keypoints from '@component/Keypoints';
import Diagonal from '@component/layouts/Diagonal';
import Layout from '@component/layouts/Layout';
import Link from '@component/NoScrollLink';
import PrestationsList from '@component/PrestationsList';
import SectionTitle from '@component/SectionTitle';
import ExpertiseJoomla from '@image/expertises/joomla.png';
import ExpertisePrestashop from '@image/expertises/prestashop.png';
import ExpertiseSymfony from '@image/expertises/symfony.png';
import ExpertiseWordPress from '@image/expertises/wordpress.png';
import ImageDiscoverTma from '@image/prestations/presentation-integration-web.jpeg';
import fetchAPI from '@lib/api';
import { ArticleListItemLayout } from '@lib/blog';
import { ProjectListItemLayout } from '@lib/portfolio';
import { RouteLink } from '@lib/route';
import { BlogPostType } from '@type/blog';
import { ProjectItemType } from '@type/portfolio';

interface ProductList {
  lastProjects: {
    edges: ProjectItemType[];
  };
  articles: {
    edges: BlogPostType[];
  };
}

export default function Home({
  lastProjects: { edges },
  articles: { edges: edgesPosts },
}: ProductList) {
  return (
    <Layout>
      <NextSeo
        title="Développeur Freelance, Pascal GAULT - La Rochelle WordPress et Prestashop"
        description="Pascal GAULT, Intégrateur web et développeur Freelance à La Rochelle spécialisé dans la création de sites internet WordPress, Joomla, Symfony et Prestashop."
      />
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
          className="-z-10"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          layout="fill"
          objectFit="cover"
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageDiscoverTma}
          alt="Prestation de maintenance TMA"
        />
        <div className="container relative z-10 -my-10">
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
                <a className="button mt-3 mr-2">
                  Demandez votre devis maintenant
                </a>
              </Link>
              <Link href={RouteLink.prestationTma}>
                <a className="button-outline mt-3">Mes offres de maintenance</a>
              </Link>
            </div>
          </div>
        </div>
        <Diagonal
          className="-z-10"
          bgClass="fill-gray-darker"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker">
        <div className="container -mb-8 z-10 relative">
          <SectionTitle
            content="Consultez mes dernières créations, atteignant tous, l’esthétique du détail et de la fonctionnalité qui me démarque du reste en tant que développeur Freelance."
            title="Projets"
          />

          <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
            {edges.length > 0 &&
              edges.map(({ node }) => (
                <ProjectItem
                  key={node.id}
                  image={node.featuredImage.node.sourceUrl}
                  title={node.title}
                  slug={node.slug}
                  support={node.supports?.edges[0]?.node}
                />
              ))}
          </div>
        </div>

        <Diagonal
          className="-z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
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
            title="Joomla"
            excerpt="Joomla est un CMS puissant en terme de pérénité, modularité et de puissance dans la gestion de contenu et de l’ajout de vos développement spécifique."
            link={RouteLink.portfolio}
            image={ExpertiseJoomla}
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

          <div className="grid md:grid-cols-2 gap-4 -mb-8 mt-6">
            {edgesPosts.map(
              ({ node: { slug, title, featuredImage, excerpt, date } }) => (
                <div key={slug}>
                  <ArticleItem
                    slug={slug}
                    featuredImage={featuredImage}
                    title={title}
                    date={date}
                    excerpt={excerpt}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <Diagonal
          className="-z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <LeafHeartIcon />,
            title: ['Voir tous', 'les articles'],
            href: RouteLink.blog,
          }}
        />
      </div>

      <div className="container">
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

export const getStaticProps: GetStaticProps = async () => {
  const lastProjects = await fetchAPI(`
    {
      projets(first: 4) {
        edges {
          ${ProjectListItemLayout}
        }
      }
      posts(first: 2) {
        edges {
          ${ArticleListItemLayout}
        }
      }
    }
  `);

  return {
    props: {
      lastProjects: lastProjects.projets,
      articles: lastProjects.posts,
    },
  };
};
