import CheckMark from '@component/CheckMark'
import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import FaqSection, { FaqItem } from '@component/FaqSection'
import MoreIcon from '@component/icons/MoreIcon'
import ProjectItem from '@component/items/ProjectItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import BusStation from '@image/prestations/bus-station.png'
import SymfonyComponents from '@image/prestations/symfony-components.jpg'
import SymfonyHero from '@image/prestations/symfony-hero.jpg'
import TwigImage from '@image/prestations/twig.jpg'
import SchemaMercure from '@image/schema-mercure.png'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Développeur Symfony freelance : applications métier | inRage',
  description:
    'Prestataire Symfony freelance à La Rochelle : applications métier, extranets, API et consoles d’administration sur mesure, reprise et montée de version d’applications existantes. Devis gratuit.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationSymfony),
  },
}

const FAQ: FaqItem[] = [
  {
    question: 'Symfony ou WordPress pour mon projet ?',
    answer:
      'WordPress quand le cœur du projet est du contenu que vous publiez vous-même. Symfony quand le cœur est un processus métier : gestion de commandes, extranet client, outil interne, API reliée à d’autres logiciels. Les deux peuvent cohabiter, par exemple un site WordPress adossé à une application Symfony.',
  },
  {
    question: 'Pouvez-vous reprendre une application Symfony existante ?',
    answer:
      'Oui. Je commence par un audit du code, des dépendances et de la version de Symfony, puis je propose une montée de version vers une LTS maintenue avant toute évolution fonctionnelle. Les applications en Symfony 3 ou 4 sont les cas les plus fréquents.',
  },
  {
    question: 'Combien de temps dure le développement d’une application ?',
    answer:
      'Un premier périmètre utilisable est livré en quelques semaines, puis l’application évolue par lots, chacun testé sur pré-production avant sa mise en ligne. Le découpage est défini avec vous au démarrage, à partir d’un cahier des charges ou d’un atelier.',
  },
]

export default async function Symfony() {
  const projects = await getPortfolioItems(4, 'application-web')

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
      title="Développement Symfony : applications et outils métier"
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
          <p className={'mt-4'}>
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
          <p className={'mt-4'}>
            Je développe avec Symfony depuis 2012, pour des outils internes, des
            extranets et des API reliées à des sites WordPress ou Prestashop.
            Cette expérience me permet d&apos;estimer et de réaliser des besoins
            métier précis, de La Rochelle ou à distance.
          </p>
        </TextImage>
      </div>

      <div className="bg-gray-darker mt-20">
        <Diagonal
          flipX
          flipY
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container">
          <div className="lg:px-36 text-lg">
            <h2 className="text-white text-center text-4xl font-bold mb-12">
              Les plus grandes forces
              <br />
              de Symfony
            </h2>

            <div className="lg:flex lg:space-x-12 lg:justify-between">
              <div className="lg:w-1/2 text-center">
                <h3 className="mb-4 text-white inline-flex items-center mt-4 text-xl">
                  <span className="mr-4 flex-none text-gray-darker font-black text-2xl w-8 h-8 bg-gray rounded-full flex justify-center items-center">
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
                <h3 className="mb-4 text-white inline-flex items-center mt-4 text-xl">
                  <span className="mr-4 flex-none text-gray-darker font-black text-2xl w-8 h-8 bg-gray rounded-full flex justify-center items-center">
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

            <div className="mt-20">
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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
          className="h-24 md:h-40 lg:h-[360px] -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container lg:-mb-20">
        <div className="relative z-10">
          <SectionTitle
            title={'Mon choix Numéro 1'}
            content="Je préconise Symfony pour les applications métier et les consoles d'administration qui doivent durer."
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

            <p className={'mt-4'}>
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
              , un outil qui permet de faire communiquer plusieurs systèmes en
              temps réel, comme le ferait Node.
            </p>

            <p className={'mt-4'}>
              Depuis les premières Alpha, je suis tombé amoureux de la façon de
              faire de Mercure avec son Bundle de Symfony. Je l&apos;utilise au
              quotidien et principalement avec React et NextJS.
            </p>

            <p className={'mt-4'}>
              Par exemple, j&apos;ai dû mettre en place Mercure entre le CMS
              Prestashop et console Symfony.
            </p>
            <p className={'mt-4'}>
              Mon client appuie sur un bouton pour demander la mise à jour de
              ses produits dans l&apos;administration de Prestashop, on envoie
              l&apos;information à la console Symfony. Et Mercure récupère en
              temps réel la progression de cette tâche et l&apos;affiche sur le
              backoffice Prestashop de mon client.
            </p>
          </TextImage>

          <div className="mt-16">
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
                <p className="mt-4">
                  Il compile les modèles en un simple code PHP optimisé. La
                  surcharge par rapport au code PHP normal a été réduite au
                  strict minimum.
                </p>

                <p className="mt-4">
                  Il dispose d&apos;un mode &quot;sandbox&quot; pour évaluer le
                  code des modèles non fiables. Cela permet à Twig d&apos;être
                  utilisé comme un langage de modèles pour des applications où
                  les utilisateurs peuvent modifier la conception des modèles.
                </p>

                <p className="mt-4">
                  Il est alimenté par un lexer et un analyseur syntaxique
                  flexibles. Cela permet au développeur de définir ses propres
                  balises et filtres personnalisés, et de créer son propre DSL.
                </p>
              </div>
            </TextImage>
          </div>

          <div className="mt-16">
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
                <p className="mt-4">
                  Grâce à leur documentation et à leur API, je développe
                  rapidement des fonctionnalités sans redévelopper des méthodes
                  disponibles dans ces composants.
                </p>

                <a
                  href="https://symfony.com/components"
                  target={'_blank'}
                  rel="noreferrer"
                  className="button mt-6"
                >
                  Liste des composants Symfony
                </a>
              </div>
            </TextImage>
          </div>

          <div className="mt-16">
            <TextImage
              position="right"
              titlePosition="left"
              title={[
                'Créer des interfaces de commandes',
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
                <p className="mt-4">
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
        className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
        bgCorner={'fill-orange'}
        bgClass={'fill-gray-darker'}
      />

      <div className="bg-gray-darker">
        <div className="container pb-20 lg:pb-0 lg:-mb-16 relative z-10">
          <SectionTitle
            title={['Réalisations', 'Symfony']}
            content="Retrouvez ci-dessous quelques projets Symfony auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance sur le framework Symfony."
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
            href: `${RouteLink.portfolio}/application-web`,
            title: ['voir les projets', 'Symfony'],
            icon: <MoreIcon />,
          }}
        />
      </div>

      <FaqSection
        intro="Ce que me demandent les entreprises avant de lancer ou de reprendre une application Symfony."
        items={FAQ}
      />

      <div className="container mt-20">
        <SectionTitle
          content="Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
