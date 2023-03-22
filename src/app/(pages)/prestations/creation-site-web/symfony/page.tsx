import CheckMark from '@component/CheckMark';
import ContactForm from '@component/ContactForm';
import Diagonal from '@component/Diagonal';
import MoreIcon from '@component/icons/MoreIcon';
import ProjectItem from '@component/items/ProjectItem';
import Layout from '@component/Layout';
import SectionTitle from '@component/SectionTitle';
import TextImage from '@component/TextImage';
import LastProjectsBySupports from '@graphql-query/last-projects-bysupport.graphql';
import BusStation from '@image/prestations/bus-station.png';
import SymfonyComponents from '@image/prestations/symfony-components.jpg';
import SymfonyHero from '@image/prestations/symfony-hero.jpg';
import TwigImage from '@image/prestations/twig.jpg';
import SchemaMercure from '@image/schema-mercure.png';
import { RouteLink } from '@lib/route';
import { SupportProjects } from '@type/graphql/portfolio';
import { fetcher } from '@util/index';

const getLastProjectsBySupports = (slug: string): Promise<SupportProjects> =>
  fetcher(LastProjectsBySupports, {
    id: slug,
  });

export default async function Symfony() {
  const { data } = await getLastProjectsBySupports('application-web');

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
      title="Symfony"
    >
      <div className="container">
        <TextImage
          title={['Pourquoi utiliser Symfony ?', 'Une architecture solide']}
          duoTone
          image={SymfonyHero}
        >
          <p className={'text-xl text-gray-light'}>
            Symfony a su s&apos;imposer comme référence dans les frameworks PHP
            et me permet de construire des applications sur-mesure.
          </p>
          <p className={'mt-2'}>
            La grande communauté qui s&apos;est construite autour de cet outil
            rend possible des utilisations très variées : de la plateforme
            e-commerce en passant par{' '}
            <a
              href={'https://sylius.com/fr/'}
              target={'_blank'}
              rel="noreferrer"
              className={'text-orange'}
            >
              Sylius
            </a>{' '}
            à la réalisation d&apos;une API avec{' '}
            <a
              href={'https://api-platform.com/'}
              target={'_blank'}
              rel="noreferrer"
              className={'text-orange'}
            >
              API Platform
            </a>
            .
          </p>
          <p className={'mt-2'}>
            La longévité de Symfony me permet d&apos;avoir une expertise pointue
            et de pouvoir estimer et réaliser des besoins métiers spécifique et
            divers.
          </p>
        </TextImage>
      </div>

      <div className="bg-gray-darker mt-10">
        <Diagonal
          flipX
          flipY
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container">
          <div className="lg:px-18 text-lg">
            <h2 className="text-white text-center text-4xl font-bold mb-6">
              Les plus grandes forces
              <br />
              de Symfony
            </h2>

            <div className="lg:flex lg:space-x-6 lg:justify-between">
              <div className="lg:w-1/2 text-center">
                <h3 className="mb-2 text-white inline-flex items-center mt-2 text-xl">
                  <span className="mr-2 flex-none text-gray-darker font-black text-2xl w-4 h-4 bg-gray rounded-full flex justify-center items-center">
                    1
                  </span>
                  <span className={'font-bold'}>Performance</span>
                </h3>
                <p>
                  Rapidité, flexibilité, composants réutilisables et stabilité
                  sont les atouts de Symfony. Toutes les applications
                  développées avec ce framework assurent de bonnes pratiques de
                  développement avec un code structuré
                </p>
              </div>

              <div className="lg:w-1/2 text-center">
                <h3 className="mb-2 text-white inline-flex items-center mt-2 text-xl">
                  <span className="mr-2 flex-none text-gray-darker font-black text-2xl w-4 h-4 bg-gray rounded-full flex justify-center items-center">
                    2
                  </span>
                  <span className={'font-bold'}>Interopérabilité</span>
                </h3>
                <p>
                  Une application développée avec Symfony sera facilement
                  interfacée avec le reste du système d’information. Afin de
                  pouvoir créer une application qui correspondent aux besoins,
                  il est possible d’associer d’autres briques logicielles
                </p>
              </div>
            </div>

            <div className="mt-10">
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <li>
                  <CheckMark>Communauté très active</CheckMark>
                </li>
                <li>
                  <CheckMark>Solution connue et éprouvée</CheckMark>
                </li>
                <li>
                  <CheckMark>
                    Mises à jour de sécurité continue sur les LTS
                  </CheckMark>
                </li>
                <li>
                  <CheckMark>
                    S&apos;adapte à tous les besoins grâce à la flexibilité du
                    framework
                  </CheckMark>
                </li>
                <li>
                  <CheckMark>
                    Interopérabilité (respect des standards)
                  </CheckMark>
                </li>
                <li>
                  <CheckMark>Transparent, open source, gratuit</CheckMark>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Diagonal
          className="h-12 md:h-20 lg:h-[360px] -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container lg:-mb-10">
        <div className="relative z-10">
          <SectionTitle
            title={'Mon choix Numéro 1'}
            content="Je préconise très souvent l'utilisation de Symfony pour diverse application ou console d'administration."
          />

          <TextImage
            title={[
              'Communication en temps réel',
              'même sur PHP, grace à Mercure',
            ]}
            duoTone
            image={SchemaMercure}
          >
            <p>
              Même si PHP est un langage de programmation très puissant, il
              n&apos;est pas du tout adapté aux besoins d&apos;échange en
              direct.
            </p>

            <p className={'mt-2'}>
              Mais Kévin Dunglas a fait un travail fantastique avec la création
              de{' '}
              <a
                className="text-orange"
                href="https://mercure.rocks/"
                target="_blank"
                rel="noreferrer"
              >
                Mercure
              </a>
              , un outil permet de faire communiquer plusieurs systèmes en temps
              réel comme le ferait node.
            </p>

            <p className={'mt-2'}>
              Depuis les premières Alpha, je suis tombé amoureux de la façon de
              faire de Mercure avec son Bundle de Symfony. Je l&apos;utilise au
              quotidien et principalement avec React et NextJS.
            </p>

            <p className={'mt-2'}>
              Par exemple, j&apos;ai dû mettre en place Mercure entre le CMS
              Prestashop et console Symfony.
            </p>
            <p className={'mt-2'}>
              Mon client appui sur un bouton pour demander la mise à jour de ses
              produits sur l&apos;administration de Prestashop, on envoi
              l&apos;information à la console Symfony. Et Mercure récupère en
              temps réel la progression de cette tâche et l&apos;affiche sur le
              backoffice Prestashop de mon client.
            </p>
          </TextImage>

          <div className="mt-8">
            <TextImage
              title={[
                'Moteur de template Twig',
                'Flexible, rapide et sécurisé !',
              ]}
              duoTone
              position="right"
              titlePosition="left"
              image={TwigImage}
            >
              <div className="text-left">
                <p>
                  Twig est MON moteur de template de choix ! Je suis
                  littéralement tombé amoureux de Twig, j&apos;essaye de
                  l&apos;intégrer partout et tout le temps !
                </p>
                <p className="mt-2">
                  Il compile les modèles en un simple code PHP optimisé. La
                  surcharge par rapport au code PHP normal a été réduite au
                  strict minimum.
                </p>

                <p className="mt-2">
                  Il dispose d&apos;un mode &quot;sandbox&quot; pour évaluer le
                  code des modèles non fiables. Cela permet à Twig d&apos;être
                  utilisé comme un langage de modèles pour des applications où
                  les utilisateurs peuvent modifier la conception des modèles.
                </p>

                <p className="mt-2">
                  Il est alimenté par un lexer et un analyseur syntaxique
                  flexibles. Cela permet au développeur de définir ses propres
                  balises et filtres personnalisés, et de créer son propre DSL.
                </p>
              </div>
            </TextImage>
          </div>

          <div className="mt-8">
            <TextImage
              title={[
                'Une multitude de composants',
                'Symfony disponible pour tous mes besoins',
              ]}
              duoTone
              image={SymfonyComponents}
            >
              <div className="text-left">
                <p>
                  La grande force de Symfony est la disponibilité de composants
                  qui sont aussi utilisable en dehors de Symfony.
                </p>
                <p className="mt-2">
                  Grace à leur documentation et leur API, je peux développer
                  rapidement des fonctionnalités sans perdre de temps à
                  re-développer des méthodes disponible dans ces composants.
                </p>

                <a
                  href="https://symfony.com/components"
                  target={'_blank'}
                  rel="noreferrer"
                  className="button mt-3"
                >
                  Liste des composants Symfony
                </a>
              </div>
            </TextImage>
          </div>

          <div className="mt-8">
            <TextImage
              position="right"
              titlePosition="left"
              title={[
                'Créer des interface de commandes',
                'Avec Symfony Console',
              ]}
              duoTone
              image={BusStation}
            >
              <div className="text-left">
                <p>
                  Depuis des années, j&apos;utilise le composant{' '}
                  <a
                    className="text-orange"
                    href="https://symfony.com/doc/current/components/console.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Symfony Console
                  </a>{' '}
                  pour me permettre de créer des interfaces visuelles en ligne
                  de commande.
                </p>
                <p className="mt-2">
                  Cela me permet par exemple de créer des interfaces en posant
                  des questions et me permettre de créer la structure d&apos;un
                  projet de A à Z
                </p>
              </div>
            </TextImage>
          </div>
        </div>
      </div>

      <Diagonal
        className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
        bgCorner={'fill-orange'}
        bgClass={'fill-gray-darker'}
      />

      <div className="bg-gray-darker">
        <div className="container pb-10 lg:pb-0 lg:-mb-8 relative z-10">
          <SectionTitle
            title={['Réalisations', 'Symfony']}
            content="Retrouvez ci-dessous quelques projets Symfony auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance sur le framework Symfony."
          />

          <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
            {data.support.projets.edges.length > 0 &&
              data.support.projets.edges.map(({ node }) => (
                <ProjectItem
                  key={node.id}
                  image={node.featuredImage.node.sourceUrl}
                  title={node.title}
                  slug={node.slug}
                  support={node?.supports?.edges[0]?.node}
                />
              ))}
          </div>
        </div>
        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            href: `${RouteLink.portfolio}/application-web`,
            title: ['voir les projets', 'Symfony'],
            icon: <MoreIcon />,
          }}
        />
      </div>

      <div className="container mt-10">
        <SectionTitle
          content="Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serais ravis de vous répondre."
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  );
}
