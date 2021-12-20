import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';
import PrestationItem from '../components/items/PrestationItem';
import ImagePrestationBuildWebsite from '../public/images/prestations/creation-site-internet.png';
import ImagePrestationTma from '../public/images/prestations/infogerance-tma-maintenance.png';
import ImagePrestationHosting from '../public/images/prestations/hebergement-optimise-rapide.png';
import Diagonal from '../components/layouts/Diagonal';
import ImageDiscoverTma from '../public/images/prestations/presentation-integration-web.jpeg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <SectionTitle
          className="mt-3 md:mt-0"
          title="A propos"
          content="Développeur Freelance créatif et innovant basé au coeur de La Rochelle et spécialisé dans la création de site internet. Depuis l'âge de 14 ans, je développe, compose et crée des projets web."
        />

        <div className="my-4 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white">
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et développeurs.
          Nous travaillons ensemble pour créer des choses inspirantes et engagées.
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-6">
          <PrestationItem
            image={ImagePrestationBuildWebsite}
            title={['Conception / Refonte', <br />, 'de sites Internet']}
            link="/"
            linkText="Découvrir mes prestations"
          >
            Sites vitrines, associatifs, e-commerce ou dédiés.
            Je vous accompagne dès la genèse de votre projet pour vous proposer
            des solutions puissantes et performantes et répondre le plus efficacement
            aux enjeux de votre activité. Je suis expert dans la création de site sur les CMS
            Joomla, WordPress et Prestashop.
          </PrestationItem>

          <PrestationItem
            image={ImagePrestationTma}
            title={['Maintenance &', <br />, 'Infogérance']}
            link="/"
            linkText="Mes offres de maintenance"
          >
            La maintenance d’un site internet s’avère complexe lorsqu’on ne dispose pas
            du bagage technique nécessaire voire le temps de s’en occuper.
            Pour ces tâches délicates et chronophages, je vous propose de prendre le
            relai et d’assurer pour vous la gestion de vos sauvegardes, ainsi que la
            maintenance et la sécurité de votre serveur dans sa globalité.
          </PrestationItem>

          <PrestationItem
            image={ImagePrestationHosting}
            title={['Hébergement optimisé &', <br />, 'ultra rapide']}
            link="/"
            linkText="Me contacter"
          >
            Lorsque vous souhaitez mettre en ligne un site, il est nécessaire de choisir
            une offre d’hébergement parmis une foule d’offres et de prestataires.
            Nos offres d’hébergement sont transparentes et sans frais cachés.
            Un expert de notre partenaire Dutiko analyse votre projet ainsi que votre demande
            pour vous proposer l’offre idéale pour la nature de votre site web.
          </PrestationItem>
        </div>
      </div>

      <div className="relative">
        <Diagonal
          className="-z-10"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image layout="fill" objectFit="cover" className="-z-10" src={ImageDiscoverTma} alt="Prestation de maintenance TMA" />
        <div className="container relative -my-10">
          <div className="w-1/2">
            <h2 className="text-3xl text-white font-medium mb-3">
              Besoin d’une estimation de votre site
              <br />
              et/ou de sa maintenance
            </h2>
            <p>Simple et en toute transparence, n’hésitez pas à me demander une estimation gratuite pour la création de votre site web ou de la maintenance applicative.</p>
            <p>Vous recevrez dans la journée votre devis et nous pourrons prendre contact pour définir ensemble les tâches.</p>

            <div className="flex flex-wrap flex-start">
              <Link href="/">
                <a className="button mt-3 mr-2">Demandez votre devis maintenant</a>
              </Link>
              <Link href="/">
                <a className="button-outline mt-3">Mes offres de maintenance</a>
              </Link>
            </div>
          </div>
        </div>
        <Diagonal
          className="-z-10"
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
      </div>
    </div>
  );
}
