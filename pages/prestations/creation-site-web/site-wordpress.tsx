import { GetStaticProps } from 'next';
import { PageHeaderStaticProps } from '@type/header';
import Image from 'next/image';
import Head from 'next/head';
import Diagonal from 'components/layouts/Diagonal';
import Quote from 'components/Quote';
import SectionTitle from 'components/SectionTitle';
import PageBuilderImage from '@image/page-builder.png';
import AcfImage from '@image/acf.png';
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
          <Image
            src={WebsiteWP}
            alt="Développeur WordPress Freelance sur La Rochelle"
          />
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
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center py-8 lg:py-0">
          <div className="md:px-18 text-lg">
            <Quote
              message="WordPress est un CMS simple et fiables, plébiscité autant par les développeurs que par leurs clients"
            />
          </div>
        </div>
        <Diagonal
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container mt-4 md:mt-0">
        <SectionTitle
          title={['Backoffice sur-mesure', 'orienté utilisateur']}
          content="Sur Wordpress, pour faciliter la prise en main de mes clients et leur permettre d’ajouter du contenu en toute autonomie, il est possible de personnaliser intégralement l’espace d’administration d’un site."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center">
            <div className="flex-none lg:mr-2 h-18 flex items-center">
              <Image src={PageBuilderImage} alt="Construction de page avec Gutenberg" />
            </div>
            <div>
              <h3 className="text-white mb-1 font-medium text-xl">Gutenberg</h3>
              <p>
                Depuis la version 5.5, WordPress propose un formidable outil
                Gutenberg pour vous permettre de construire vos pages
                dynamiquement. Je peux mettre en place toute la construction des
                blocs Gutenberg pour vous permettre d&apos;avoir la main à 100% sur
                votre site.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-start lg:items-center">
            <div className="flex-none mr-2 flex h-18 items-center">
              <Image src={AcfImage} alt="Construction de page avec Advanced Custom Fields" />
            </div>
            <div>
              <h3 className="text-white mb-1 font-medium text-xl">Champs personnalisés ACF</h3>
              <p>
                Les Advanced Custom Fields (ACF) permettent de simplifier
                l’intégration de contenus sur les pages d’un site. Les ACF sont
                des blocs définis en amont avec le client, ils présentent des
                champs précis qui une fois remplis par l’administrateur
                apparaissent sous la forme de contenus structurés sur les pages
                du site.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-xl text-gray-light">
            Les ACF ou Advanced Custom Fields permettent à l’administrateur d’un
            site, d&apos;interagir avec l&apos;ensemble des contenus des sites que je
            développe. Ils se matérialisent par des champs à remplir sur le
            backoffice et sont transformés automatiquement en contenus structurés
            et mis en page en frontoffice.
          </p>

          <p className="mt-4">
            Les pages comportant des ACF nécessitent dans un premier temps
            d’adapter le thème afin d’afficher les contenus tout en respectant la
            charte graphique imposées.
            <br />
            L’administrateur du site est alors
            entièrement autonome dans l’ajout des contenus.
          </p>

          <p>
            Cette méthode est évolutive, il est donc aisé d’ajouter des ACF sur
            les pages souhaitées lorsque cela devient nécessaire.
          </p>
        </div>
      </div>

      <div className="bg-gray-darker mt-4">
        <Diagonal
          flipX
          flipY
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container text-center py-8 lg:py-0">
          <div className="">
            <h2 className="text-center text-white text-3xl">
              Déploiement continu
              <span className="block text-xl">Réactivité, rapidité</span>
            </h2>
            <p className="text-xl text-gray-light mt-3">
              Le déploiement continu
              permet à mes clients de rester au coeur de leur projet de création
              de site. Grâce à cette méthode, ils sont en mesure de consulter à
              tout moment, les différentes évolutions ou modifications apportés à
              leur site.
            </p>
            <p className="mt-2">
              En phase de développement, lorsqu&apos;une fonctionnalité est réalisée, elle est
              déployée sur mon outil de versioning Git, puis mon serveur
              d’intégration continue (Gitlab CI) déploie automatiquement la
              fonctionnalité sur mon serveur de préproduction. Ainsi, les
              modifications sont visibles par mon client, 5 minutes après son
              intégration.
            </p>

            <p className="mt-2">
              Cette environnement de préproduction est protégé par un identifiant et un
              mot de passe, il n’est accessible qu’au client et n’est pas indexé
              sur les moteurs de recherche. Ainsi, le client peut valider une à
              une les différentes modifications à distance et il m’est possible
              de réagir rapidement si une fonctionnalité venait à
              dysfonctionner.
            </p>

            <p className="mt-2">
              Le site est alors mis en production seulement lorsque mon client est
              pleinement satisfait du résultat.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-8 md:h-16 lg:h-24"
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
