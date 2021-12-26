import Link from 'next/link';
import Head from 'next/head';
import Diagonal from '../components/layouts/Diagonal';
import SectionTitle from '../components/SectionTitle';

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Pascal GAULT - Développeur et intégrateur Freelance à La Rochelle</title>
        <meta name="description" content="15 ans d&#039;expertise dans la création de site Internet sous Joomla, WordPress, Prestashop et Symfony. Avec une très bonne maitrise de l&#039;intégration web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-4 -mb-20">
        <h2 className="text-white text-3xl">
          <span className="font-bold">PASCAL GAULT, DÉVELOPPEUR ET CRÉATEUR</span>
          <br />
          <span className="font-light">FREELANCE BASÉ À LA ROCHELLE</span>
        </h2>

        <p className="mt-2 text-xl text-gray-light">Développeur Web depuis 15 ans dans les agences web à La Rochelle. Expert dans le développement et spécialisé sur Symfony, WordPress et Prestashop. Je travaille aujourd&apos;hui en tant que Développeur Web Freelance à La Rochelle.</p>
        <p className="mt-1">Une de mes plus importantes et gratifiantes décisions pour ma carrière que j’ai faite. De ce fait, j’ai l’opportunité de travailler sur les différents aspects de la conception, de la stratégie, de la gestion et de la planification jusqu’à la production complète de ce projet.</p>
        <p className="mt-1">Je suis aussi devenu plus intéressé par l’aspect commercial des projets, de plus en plus conscient de l’importance d’intégrer les décisions commerciales responsables de l’atteinte des objectifs d’affaires.</p>
        <p className="mt-1 mb-3">Un projet, des questions ? N&apos;hésitez pas à me contacter pour en discuter !</p>

        <Link href="/contact">
          <a className="button">Contactez-moi</a>
        </Link>
      </div>

      <Diagonal
        bgClass="fill-gray-darker"
        bgCorner="fill-gray-dark"
      />

      <div className="bg-gray-darker">
        <div className="container">
          <SectionTitle
            content="La liste de mes expériences professionnelles que j'ai acquise au fil de mes années de Développeur en tant que salarié et indépendant."
            title="Expériences"
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'A propos de moi',
    },
  };
}
