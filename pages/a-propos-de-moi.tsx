import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import Character from '@component/Character';
import MoreIcon from '@component/icons/MoreIcon';
import ExperienceItem from '@component/items/ExperienceItem';
import Diagonal from '@component/layouts/Diagonal';
import Layout from '@component/layouts/Layout';
import Socials from '@component/layouts/Socials';
import Link from '@component/NoScrollLink';
import SectionTitle from '@component/SectionTitle';
import ExpCOS from '@image/experiences/comonscreen.png';
import ExpKamelab from '@image/experiences/kamelab.png';
import ExpMegami from '@image/experiences/megami-productions.png';
import ExpMoonscoop from '@image/experiences/moonscoop.png';
import { RouteLink } from '@lib/route';

export default function AboutMe() {
  return (
    <Layout>
      <NextSeo
        title="Pascal GAULT - Développeur et intégrateur Freelance à La Rochelle"
        description="15 ans d&#039;expertise dans la création de site Internet sous Joomla, WordPress, Prestashop et Symfony. Avec une très bonne maitrise de l'intégration web"
      />
      <div className="container mt-4 -mb-20">
        <h2 className="text-white text-3xl">
          <span className="font-bold">
            PASCAL GAULT, DÉVELOPPEUR ET CRÉATEUR
          </span>
          <br />
          <span className="font-light">FREELANCE BASÉ À LA ROCHELLE</span>
        </h2>

        <p className="mt-2 text-xl text-gray-light">
          Développeur Web depuis 15 ans dans les agences web à La Rochelle.
          Expert dans le développement et spécialisé sur Symfony, WordPress et
          Prestashop. Je travaille aujourd&apos;hui en tant que Développeur Web
          Freelance à La Rochelle.
        </p>
        <p className="mt-1">
          Une de mes plus importantes et gratifiantes décisions pour ma carrière
          que j’ai faite. De ce fait, j’ai l’opportunité de travailler sur les
          différents aspects de la conception, de la stratégie, de la gestion et
          de la planification jusqu’à la production complète de ce projet.
        </p>
        <p className="mt-1">
          Je suis aussi devenu plus intéressé par l’aspect commercial des
          projets, de plus en plus conscient de l’importance d’intégrer les
          décisions commerciales responsables de l’atteinte des objectifs
          d’affaires.
        </p>
        <p className="mt-1 mb-3">
          Un projet, des questions ? N&apos;hésitez pas à me contacter pour en
          discuter !
        </p>

        <Link href={RouteLink.contact}>
          <a className="button">Contactez-moi</a>
        </Link>
      </div>

      <Diagonal bgClass="fill-gray-darker" bgCorner="fill-gray-dark" />

      <div className="bg-gray-darker">
        <div className="container lg:-mb-10">
          <SectionTitle
            content="La liste de mes expériences professionnelles que j'ai acquise au fil de mes années de Développeur en tant que salarié et indépendant."
            title="Expériences"
          />

          <div className="flex flex-col space-y-6 pt-6 pb-10">
            <ExperienceItem
              logo={ExpMoonscoop}
              title="Développeur Joomla"
              company="Moonscoop Digital Media, La Rochelle, France"
              year="2008 - 4 ans"
              excerpt="Membre d'une équipe de 3 développeurs frontend et backend. Développement de site client basé principalement sur le CMS Joomla et PHP."
            />

            <ExperienceItem
              logo={ExpMegami}
              title="Développeur Joomla, WordPress et administrateur système"
              company="Megami Production, La Rochelle, France"
              year="2012 - 7 ans"
              excerpt="Responsable de toute la partie Web et réseau de la société. Développeur et Intégrateur. Gestion et maintenance de l'architecture des serveurs AWS, Debian, Docker."
            />

            <ExperienceItem
              logo={ExpCOS}
              title="Développeur Symfony, WordPress et Prestashop"
              company="Com' On Screen, Paris, France"
              year="2012 - 7 ans"
              excerpt="Responsable de toute la partie Web et réseau de la société. Développeur et Intégrateur. Gestion et maintenance de l'architecture des serveurs AWS, Debian, Docker."
            />

            <ExperienceItem
              logo={ExpKamelab}
              title="Développeur Symfony, WordPress, Prestashop et DevOps"
              company="Kamélab, La Rochelle, France"
              year="Depuis 2018"
              excerpt="Responsable technique; développeur, DevOps et co-gérant de la société Kamélab aux côtés de notre spécialiste webmarketing Johann Hébert et notre graphiste Romain Ouvrard."
            />
          </div>
        </div>

        <Diagonal
          className="h-10 sm:h-16 md:h-25 lg:h-36 xl:h-45 -z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
          cta={{
            icon: <MoreIcon />,
            title: ['Voir tous', 'les projets'],
            href: RouteLink.portfolio,
          }}
        />
      </div>

      <div className="container mt-4 md:mt-0">
        <SectionTitle
          content="Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serais ravis de vous répondre."
          title="En savoir plus"
        />

        <div className="flex items-center mt-3 md:mt-10">
          <div className="hidden md:block">
            <Character />
          </div>
          <div className="md:pl-4">
            <h3 className="text-white font-medium text-3xl mb-1">
              Pascal GAULT
            </h3>

            <p>
              Dès mon plus jeune âge, je commence à découvrir le monde du
              développement en créant mes premiers sites liés à mes associations
              de jeux vidéos. C’est à partir de cette époque que j’ai continué
              dans cette voie pour me professionnaliser dans la création
              numérique et en faire mon métier sur La Rochelle.
            </p>

            <p className="mt-2">
              L’art et la technologie ont toujours été deux inspirations de ma
              vie courante. Je viens d’un milieu artistique, qui a fusionné avec
              la technologie pour finir par évoluer dans le développement web.
            </p>

            <p className="mt-2">
              Je suis guidé par la passion, le souci du détail individuel,
              structuré et organisé. Je suis impatient de voir où ma carrière va
              m’emmener dans les mois ou les années à venir.
            </p>

            <p className="mt-2">
              Je continue à travailler et apprendre tous les jours, trouver de
              nouvelles technologies pour faire évoluer cette passion; et
              pouvoir appliquer cela tous les jours dans mon travail.
            </p>

            <h3 className="text-white font-medium text-3xl mt-4 mb-1">
              Ce site
            </h3>

            <p>
              Ce site est mon croquis numérique, mon journal et mon air de jeu
              dans l’expérimentation de nouvelles technologies. Je suis
              constamment en train d’y implémenter de nouvelles fonctionnalités,
              et parfois même faire des erreurs. Tout pour un seul objectif,
              continuer d’apprendre.
            </p>

            <p className="mt-2">
              J’espère que les gens qui visiteront mon portfolio aimeront autant
              que j’ai apprécié de le développer. En espérant qu’ils trouveront
              de l’inspiration et pourquoi pas, nous permettre de travailler
              ensemble.
            </p>

            <h3 className="text-white font-medium text-3xl mt-4 mb-1">
              Mes réseaux sociaux
            </h3>

            <Socials />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    pageTitle: 'A propos de moi',
  },
});
