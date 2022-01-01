import { GetStaticProps } from 'next';
import { PageHeaderStaticProps } from '@type/header';
import Image from 'next/image';
import Head from 'next/head';
import Diagonal from 'components/layouts/Diagonal';
import Quote from 'components/Quote';
import WebsiteWP from '../../../public/images/website-wp.png';

export default function PrestationWordPress() {
  return (
    <>
      <Head>
        <title>Création de site WordPress | Freelance Wordpress - inRage</title>
        <meta
          name="description"
          content="Développeur Freelance à La Rochelle, spécialisé dans la création et le développement de site WordPress. ACF, Contact Form et Roots Sage. Contactez-moi pour votre création ou refonte de site Wordpress."
        />
      </Head>

      <div className="container flex items-center">
        <div className="w-2/5">
          <Image src={WebsiteWP} />
        </div>
        <div className="w-3/5 text-lg pl-5 leading-6 pt-2">
          <h2 className="text-white text-3xl font-bold">
            Développeur WordPress Freelance sur
            <br />
            La Rochelle
          </h2>
          <p className="mt-2">
            Développeur freelance, je me spécialise avant tout
            sur la création de site Wordpress. En effet, le développement wordpress
            est mon domaine de prédilection, et ce, pour plusieurs raisons :
          </p>
          <ul className="styled-list mt-2">
            <li>Wordpress est un CMS gratuit et opensource.</li>
            <li>
              Il est 100% administrable et son interface d’administration est
              claire, fiable et sobre.
            </li>
            <li>
              De plus, cette inter ace est entièrement personnalisable afin de
              l’adapter à l’usage du client.
            </li>
            <li>
              Wordpress bénéficie d’une large communauté, il est le CMS le plus
              utilisé au monde soit 30% des sites en ligne à ce jour. Sa communauté
              est également très investie, les plugins et thèmes disponibles pour
              ce CMS sont extrêmement nombreux.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-darker mt-4">
        <Diagonal
          flipX
          flipY
          className="h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center">
          <div className="md:px-18 text-lg">
            <Quote
              message="WordPress est un CMS simple et fiables, plébiscité autant par les développeurs que par leurs clients"
            />
          </div>
        </div>
        <Diagonal
          className="h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<PageHeaderStaticProps> => ({
  props: {
    pageTitle: 'Création de site WordPress',
    breadcrumb: [{
      link: '/prestations',
      title: 'Prestations sous WordPress, Prestashop et Symfony',
    }, {
      link: '/prestations/creation-site-web',
      title: 'Création de site internet',
    }],
  },
});
