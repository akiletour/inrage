import CheckMark from "@component/CheckMark"
import ContactForm from "@component/ContactForm"
import Diagonal from "@component/Diagonal"
import MoreIcon from "@component/icons/MoreIcon"
import ProjectItem from "@component/items/ProjectItem"
import Layout from "@component/Layout"
import SectionTitle from "@component/SectionTitle"
import TextImage from "@component/TextImage"
import { Button } from "@component/ui/button"
import BusStation from "@image/prestations/bus-station.png"
import SymfonyComponents from "@image/prestations/symfony-components.jpg"
import SymfonyHero from "@image/prestations/symfony-hero.jpg"
import TwigImage from "@image/prestations/twig.jpg"
import SchemaMercure from "@image/schema-mercure.png"
import { getCanonicalUrl, RouteLink } from "@lib/route"
import { allPortfolios } from "contentlayer/generated"
import { compareDesc } from "date-fns"

export const metadata = {
  title:
    "Développeur Freelance spécialisé dans la création de site avec Symfony",
  description:
    "Développeur Freelance Symfony spécialisé dans la création de site et application avec le Framework PHP Symfony.",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationSymfony),
  },
}

export default async function Symfony() {
  const data = allPortfolios
    .filter((post) => post.date && post.category === "application-web")
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, 4)

  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: "Prestations sous WordPress, Prestashop et Symfony",
        },
        {
          link: RouteLink.prestationWeb,
          title: "Création de site internet",
        },
      ]}
      title="Symfony"
    >
      <div className="container">
        <TextImage
          title={["Pourquoi utiliser Symfony ?", "Une architecture solide"]}
          duoTone
          image={SymfonyHero}
        >
          <p className={"text-xl text-gray-light"}>
            Symfony a su s&apos;imposer comme référence dans les frameworks PHP
            et me permet de construire des applications sur-mesure.
          </p>
          <p className={"mt-2"}>
            La grande communauté qui s&apos;est construite autour de cet outil
            rend possible des utilisations très variées : de la plateforme
            e-commerce en passant par{" "}
            <a
              href={"https://sylius.com/fr/"}
              target={"_blank"}
              rel="noreferrer"
              className={"text-orange"}
            >
              Sylius
            </a>{" "}
            à la réalisation d&apos;une API avec{" "}
            <a
              href={"https://api-platform.com/"}
              target={"_blank"}
              rel="noreferrer"
              className={"text-orange"}
            >
              API Platform
            </a>
            .
          </p>
          <p className={"mt-2"}>
            La longévité de Symfony me permet d&apos;avoir une expertise pointue
            et de pouvoir estimer et réaliser des besoins métiers spécifique et
            divers.
          </p>
        </TextImage>
      </div>

      <div className="mt-10 bg-gray-darker">
        <Diagonal
          flipX
          flipY
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container">
          <div className="text-lg lg:px-18">
            <h2 className="mb-6 text-center text-4xl font-bold text-white">
              Les plus grandes forces
              <br />
              de Symfony
            </h2>

            <div className="lg:flex lg:justify-between lg:space-x-6">
              <div className="text-center lg:w-1/2">
                <h3 className="my-2 inline-flex items-center text-xl text-white">
                  <span className="mr-2 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-gray text-2xl font-black text-gray-darker">
                    1
                  </span>
                  <span className={"font-bold"}>Performance</span>
                </h3>
                <p>
                  Rapidité, flexibilité, composants réutilisables et stabilité
                  sont les atouts de Symfony. Toutes les applications
                  développées avec ce framework assurent de bonnes pratiques de
                  développement avec un code structuré
                </p>
              </div>

              <div className="text-center lg:w-1/2">
                <h3 className="my-2 inline-flex items-center text-xl text-white">
                  <span className="mr-2 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-gray text-2xl font-black text-gray-darker">
                    2
                  </span>
                  <span className={"font-bold"}>Interopérabilité</span>
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
              <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
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
          className="-z-10 h-12 md:h-20 lg:h-[360px]"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container lg:-mb-10">
        <div className="relative z-10">
          <SectionTitle
            title={"Mon choix Numéro 1"}
            content="Je préconise très souvent l'utilisation de Symfony pour diverse application ou console d'administration."
          />

          <TextImage
            title={[
              "Communication en temps réel",
              "même sur PHP, grace à Mercure",
            ]}
            duoTone
            image={SchemaMercure}
          >
            <p>
              Même si PHP est un langage de programmation très puissant, il
              n&apos;est pas du tout adapté aux besoins d&apos;échange en
              direct.
            </p>

            <p className={"mt-2"}>
              Mais Kévin Dunglas a fait un travail fantastique avec la création
              de{" "}
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

            <p className={"mt-2"}>
              Depuis les premières Alpha, je suis tombé amoureux de la façon de
              faire de Mercure avec son Bundle de Symfony. Je l&apos;utilise au
              quotidien et principalement avec React et NextJS.
            </p>

            <p className={"mt-2"}>
              Par exemple, j&apos;ai dû mettre en place Mercure entre le CMS
              Prestashop et console Symfony.
            </p>
            <p className={"mt-2"}>
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
                "Moteur de template Twig",
                "Flexible, rapide et sécurisé !",
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
                "Une multitude de composants",
                "Symfony disponible pour tous mes besoins",
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

                <Button asChild className="mt-4">
                  <a
                    href="https://symfony.com/components"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Liste des composants Symfony
                  </a>
                </Button>
              </div>
            </TextImage>
          </div>

          <div className="mt-8">
            <TextImage
              position="right"
              titlePosition="left"
              title={[
                "Créer des interface de commandes",
                "Avec Symfony Console",
              ]}
              duoTone
              image={BusStation}
            >
              <div className="text-left">
                <p>
                  Depuis des années, j&apos;utilise le composant{" "}
                  <a
                    className="text-orange"
                    href="https://symfony.com/doc/current/components/console.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Symfony Console
                  </a>{" "}
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
        className="-z-10 h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
        bgCorner={"fill-orange"}
        bgClass={"fill-gray-darker"}
      />

      <div className="bg-gray-darker">
        <div className="container relative z-10 pb-10 lg:-mb-8 lg:pb-0">
          <SectionTitle
            title={["Réalisations", "Symfony"]}
            content="Retrouvez ci-dessous quelques projets Symfony auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance sur le framework Symfony."
          />

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-0 sm:gap-0 md:grid-cols-4">
            {data.map((node) => (
              <ProjectItem post={node} key={node.slug} />
            ))}
          </div>
        </div>
        <Diagonal
          className="-z-10 h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            href: `${RouteLink.portfolio}/application-web`,
            title: ["voir les projets", "Symfony"],
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
  )
}
