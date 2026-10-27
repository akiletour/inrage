import Character from '@/components/Character'
import Diagonal from '@component/Diagonal'
import MoreIcon from '@component/icons/MoreIcon'
import ExperienceItem from '@component/items/ExperienceItem'
import Layout from '@component/Layout'
import Link from '@component/NoScrollLink'
import SectionTitle from '@component/SectionTitle'
import Socials from '@component/Socials'
import ExpCOS from '@image/experiences/comonscreen.png'
import ExpKamelab from '@image/experiences/kamelab.png'
import ExpMoonscoop from '@image/experiences/moonscoop.png'
import ExpPhenix from '@image/experiences/phenix-studio.svg'
import ExpInrage from '@image/inline-logo.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Pascal Gault, développeur web freelance à La Rochelle',
  description:
    'Développeur web freelance à La Rochelle depuis 2008 : WordPress, Prestashop, Symfony et React. Mon parcours en agence, mes expériences et ma façon de travailler.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.aboutMe),
  },
}

export default function AboutMe() {
  return (
    <Layout title="À propos de moi">
      <div className="container mt-8 -mb-40">
        <h2 className="text-white text-3xl">
          <span className="font-bold">
            PASCAL GAULT, DÉVELOPPEUR ET CRÉATEUR
          </span>
          <br />
          <span className="font-light">FREELANCE BASÉ À LA ROCHELLE</span>
        </h2>

        <p className="mt-4 text-xl text-gray-light">
          Développeur web depuis 2008 dans les agences de La Rochelle, en
          Charente-Maritime. Expert dans le développement et spécialisé sur
          Symfony, WordPress, Prestashop et React. Je travaille aujourd&apos;hui
          en tant que{' '}
          <Link href={RouteLink.developpeurLaRochelle}>
            <span className="text-orange underline transition-colors duration-150 hover:text-white">
              développeur web freelance à La Rochelle
            </span>
          </Link>
          , pour des clients locaux comme pour des entreprises de toute la
          France.
        </p>
        <p className="mt-2">
          Passer en freelance m’a permis de suivre un projet de bout en bout :
          cadrage, conception, développement, hébergement, puis maintenance. Je
          m’appuie sur un collectif de freelances rochelais, graphiste,
          webmarketing et développeurs, quand un projet le demande.
        </p>
        <p className="mt-2">
          Avec le temps, je me suis autant intéressé à ce que le site doit
          produire pour votre activité qu’à la façon de le construire. Un site
          réussi est un site qui apporte des contacts ou des ventes, et qui
          reste simple à faire vivre.
        </p>
        <p className="mt-2 mb-6">
          Un projet, des questions ? N&apos;hésitez pas à me contacter pour en
          discuter !
        </p>

        <Link href={RouteLink.contact}>
          <span className="button">Contactez-moi</span>
        </Link>
      </div>

      <Diagonal bgClass="fill-gray-darker" bgCorner="fill-gray-dark" />

      <div className="bg-gray-darker">
        <div className="container lg:-mb-20">
          <SectionTitle
            content="Dix-huit ans de développement web à La Rochelle, en agence puis en freelance."
            title="Expériences"
          />

          <div className="flex flex-col space-y-12 pt-12 pb-20">
            <ExperienceItem
              logo={ExpPhenix}
              logoClassName="max-h-24"
              title="Membre du collectif Phénix Studio"
              company="Phénix Studio, La Rochelle"
              year="Aujourd'hui"
              excerpt="Un collectif de trois développeurs freelances, avec Matthieu et Ludovic. inRage porte les projets et la relation client, et nous nous répartissons le développement selon les compétences de chacun : WordPress, Prestashop, Symfony, React."
            />

            <ExperienceItem
              logo={ExpInrage}
              title="Développeur web freelance, fondateur d'inRage"
              company="inRage, La Rochelle"
              year="Depuis 2011, à temps plein depuis 2019"
              excerpt="Création de sites WordPress, boutiques Prestashop, applications Symfony et React, hébergement et maintenance. inRage a commencé le soir et le week-end, en parallèle de mon poste en agence, avant de devenir mon activité principale. Depuis 2017, j'y développe aussi Invoicer, notre logiciel de facturation."
            />

            <ExperienceItem
              logo={ExpKamelab}
              title="Co-gérant et responsable technique"
              company="Kamélab, La Rochelle"
              year="2018 - 2022"
              excerpt="SAS créée avec Johann Hébert, consultant webmarketing, et Romain Ouvrard, graphiste. Développement, DevOps et direction technique des projets de l'agence jusqu'à sa fermeture en 2022."
            />

            <ExperienceItem
              logo={ExpCOS}
              title="Lead développeur fullstack"
              company="Com'On Screen, La Rochelle"
              year="2012 - 2019"
              excerpt="Responsable de toute la partie web et réseau de la société : développement Symfony, WordPress et Prestashop, intégration, gestion et maintenance de l'infrastructure serveur (AWS, Debian, Docker)."
            />

            <ExperienceItem
              logo={ExpMoonscoop}
              title="Développeur web"
              company="Moonscoop Digital Media, La Rochelle"
              year="2008 - 2012"
              excerpt="Membre d'une équipe de trois développeurs front et back. Développement de sites clients sur Joomla et Zencart, gestion de bases de données MySQL."
            />
          </div>
        </div>

        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container mt-8 md:mt-0">
        <SectionTitle
          content="Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          title="En savoir plus"
        />

        <div className="flex items-center mt-6 md:mt-20">
          <div className="hidden md:block">
            <Character />
          </div>
          <div className="md:pl-8">
            <h3 className="text-white font-medium text-3xl mb-2">
              Pascal GAULT
            </h3>
            <p>
              Dès mon plus jeune âge, j&apos;ai commencé à découvrir le monde du
              développement en créant mes premiers sites liés à mes associations
              de jeux vidéo. C’est à partir de cette époque que j’ai continué
              dans cette voie pour me professionnaliser dans la création
              numérique et en faire mon métier à La Rochelle.
            </p>
            <p className="mt-4">
              L’art et la technologie ont toujours été deux inspirations de ma
              vie quotidienne. Je viens d’un milieu artistique, qui a fusionné
              avec la technologie pour finir par évoluer dans le développement
              web.
            </p>
            <p className="mt-4">
              J&apos;ai passé plus de la moitié de ma vie à être guidé par la
              passion du développement. Cela semble un peu bizarre, non ?
              C&apos;est un vaste monde où tout va vite, avec de nouvelles
              fonctionnalités et des technologies excitantes chaque jour. Même
              dans mon quotidien, je me sers de mon métier pour optimiser et
              résoudre des problèmes de ma vie quotidienne.
            </p>

            <p className="mt-4">
              Je vis actuellement dans une petite ville proche de La Rochelle,
              dans une super maison aux côtés de Christelle, ma femme, et de
              notre petite princesse Octavia ♥.
            </p>
            <p className="mt-4">
              Je continue à travailler et à apprendre tous les jours, à trouver
              de nouvelles technologies pour faire évoluer cette passion et
              pouvoir appliquer cela tous les jours dans mon travail.
            </p>
            <h3 className="text-white font-medium text-3xl mt-8 mb-2">
              Ce site
            </h3>
            <p>
              Ce site est mon croquis numérique, mon journal et mon aire de jeu
              dans l’expérimentation de nouvelles technologies. Je suis
              constamment en train d’y implémenter de nouvelles fonctionnalités,
              et parfois même de faire des erreurs. Tout cela pour un seul
              objectif : continuer d’apprendre.
            </p>
            <p className="mt-4">
              J’espère que les gens qui visiteront mon portfolio l&apos;aimeront
              autant que j’ai apprécié de le développer. En espérant qu’ils
              trouveront de l’inspiration et, pourquoi pas, nous permettront de
              travailler ensemble.
            </p>

            <p className="mt-4">
              Ce site est actuellement développé en ReactJS avec le formidable
              framework NextJS. Si vous voulez en savoir plus sur sa conception,
              le code source est{' '}
              <a
                className="text-orange underline transition-colors duration-150 hover:text-white"
                href="https://github.com/akiletour/inrage"
              >
                disponible sur GitHub
              </a>
              .
            </p>
            <h3 className="text-white font-medium text-3xl mt-8 mb-2">
              Mes réseaux sociaux
            </h3>
            <Socials />
          </div>
        </div>
      </div>
    </Layout>
  )
}
