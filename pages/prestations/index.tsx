import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { RouteLink } from '@lib/route';
import Layout from '@component/layouts/Layout';
import Diagonal from '../../components/layouts/Diagonal';
import LeafHeartIcon from '../../components/icons/LeafHeartIcon';
import PrestationsList from '../../components/PrestationsList';
import SectionTitle from '../../components/SectionTitle';
import PrestationItem from '../../components/items/PrestationItem';
import PrestationDesign from '../../public/images/prestations/charte_graphique.png';
import PrestationWebDev from '../../public/images/prestations/developpement_site_web.png';
import PrestationFormation from '../../public/images/prestations/formation_offerte.png';
import PrestationSupport from '../../public/images/prestations/support_technique_772424.png';

export default function Prestations() {
  return (
    <Layout>
      <NextSeo
        title="Prestations sous WordPress, Prestashop et Symfony - inRage"
        description="Développeur freelance spécialisé dans la création de sites internet WordPress, Prestashop et Symfony. 15 ans d'expertise dans le développement web."
      />

      <div className="flex relative container mt-6 lg:-mt-12">
        <div className="hidden lg:block overflow-hidden absolute lg:right-[60%]">
          <div className="w-[697px] h-[736px] relative">
            <Image
              className="max-h-[736px]"
              src="/images/presentation-prestations.png"
              width={697}
              priority
              height={736}
              alt="Création de site Internet sur la rochelle"
            />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>

            <h2 className="uppercase font-bold text-white text-2xl leading-7">
              CRÉATION DE SITE INTERNET SUR LA ROCHELLE
              <span className="font-light block text-xl">ET PARTOUT EN FRANCE</span>
            </h2>

            <div className="text-gray-light text-xl mt-4">
              <p>
                Je vous accompagne de A à Z dans la création de votre site internet et vous propose
                la solution idéale pour répondre à vos problématiques techniques, graphiques et
                budgétaires.
              </p>
              <p>
                Afin de mener à bien votre projet, j’analyse en détail les besoins de votre activité
                pour identifier vos enjeux et y répondre le plus efficacement par une solution
                sur-mesure.
              </p>
            </div>

            <p className="mt-2">
              Je reste constamment à l&apos;affût des nouvelles technologies web et assure une
              veille
              graphique régulière afin de vous proposer les fonctionnalités les plus récentes et
              performantes, au sein d’un design élégant et percutant.
            </p>
            <p className="mt-2">
              Je suis en mesure d’intervenir sur tous types de projets (boutique,
              site vitrine, apps...) grâce à mon expertise sur des CMS variés, tels que Joomla,
              Prestashop ou encore Wordpress. Et comme la création d’un site internet ne s’achève
              pas à sa mise en ligne, j’assure le support technique de votre outil 7j/7 et vous
              propose des offres de maintenance TMA pour le protéger tout au long de l’année.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="px-3">
          <svg
            className="block w-full h-auto -mb-[5.75%]"
            height="279"
            viewBox="0 0 1473 279"
            width="1473"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="evenodd" fill="none">
              <path
                d="M334.926 194.637L932.094 87.268 1060.546 0l128.081 194.637z"
                fillRule="nonzero"
                fill="#50B66D"
                opacity=".5"
              />
              <path
                d="M1212.891 194.637l95.067-39.75 164.357 39.75z"
                fillRule="nonzero"
                fill="#35495E"
                opacity=".5"
              />
              <path
                d="M1092.242 194.637l65.72-132.275 111.37 132.275z"
                fillRule="nonzero"
                fill="#ECF0F1"
                opacity=".5"
              />
              <path
                d="M421.827 194.447l78.789-145.995 57.478 55.816 214.471 90.179z"
                fillRule="nonzero"
                fill="#925BA1"
                opacity=".5"
              />
              <text
                fill="#C92480"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="184.0942" y="265.2684">GESTION DE PROJET</tspan>
              </text>
              <text
                fill="#F19D32"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="0" y="98.3187">DEBUT DU PROJET</tspan>
              </text>
              <text
                fill="#3F96CF"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="329.4956" y="56.991">VEILLE</tspan>
              </text>
              <text
                fill="#925BA1"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="565.0662" y="24.7987">GRAPHISME</tspan>
              </text>
              <text
                fill="#E74C3C"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="649.1442" y="270.2156">INTEGRATION</tspan>
              </text>
              <text
                fill="#50B66D"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="976.7459" y="278.5486">DEVELOPPEMENT</tspan>
              </text>
              <text
                fill="#ECF0F1"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="1185.0481" y="21.7688">MISE EN PRODUCTION</tspan>
              </text>
              <text
                fill="#35495E"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="1299.0454" y="278.5486">MAINTENANCE</tspan>
              </text>
              <path d="M73.13 107.757c-6.491 22.066 3.004 44.26 21.23 49.621" stroke="#F19D32" />
              <path
                d="M68.355 109.24l6.567-5.769 1.713 8.572z"
                fillRule="nonzero"
                fill="#F19D32"
              />
              <path
                d="M308.065 237.902c17.752-14.626 17.635-27.698 15.391-43.264"
                stroke="#C92480"
              />
              <path
                d="M312.85 239.352l-8.673 1.093 3.391-8.058z"
                fillRule="nonzero"
                fill="#C92480"
              />
              <path
                d="M367.378 67.802c-1.08 22.975-26.171 52.561-39.95 62.009"
                stroke="#3F96CF"
              />
              <path
                d="M371.406 70.765l-4.321-7.599-4.421 7.541z"
                fillRule="nonzero"
                fill="#3F96CF"
              />
              <path
                d="M585.683 36.512c-16.127 16.4-20.792 54.911-18.366 71.441"
                stroke="#925BA1"
              />
              <path
                d="M580.772 35.569l8.512-1.992-2.531 8.367z"
                fillRule="nonzero"
                fill="#925BA1"
              />
              <path
                d="M711.519 237.902c-17.752-14.626-17.635-27.698-15.391-43.264"
                stroke="#E74C3C"
              />
              <path
                d="M706.734 239.352l8.673 1.093-3.391-8.058z"
                fillRule="nonzero"
                fill="#E74C3C"
              />
              <path
                d="M1072.391 252.748c17.752-14.626 19.427-42.544 17.183-58.111"
                stroke="#50B66D"
              />
              <path
                d="M1077.177 254.199l-8.673 1.092 3.39-8.057z"
                fillRule="nonzero"
                fill="#50B66D"
              />
              <path
                d="M1287.293 33.676c-1.08 22.975-64.164 80.272-77.943 89.721"
                stroke="#ECF0F1"
              />
              <path
                d="M1291.32 36.639L1287 29.04l-4.421 7.541z"
                fillRule="nonzero"
                fill="#ECF0F1"
              />
              <path
                d="M1361.688 253.262c-17.752-14.626-36.464-43.059-34.22-58.625"
                stroke="#35495E"
              />
              <path
                d="M1356.903 254.713l8.673 1.092-3.391-8.057z"
                fillRule="nonzero"
                fill="#35495E"
              />
              <path
                d="M211.987 194.637l80.562-80.972 174.915 80.972z"
                fillRule="nonzero"
                fill="#3F96CF"
                opacity=".5"
              />
              <path
                d="M4.558 194.637l173.787-69.409 80.335 67.409z"
                fillRule="nonzero"
                fill="#F19D32"
                opacity=".5"
              />
              <path
                d="M624.81 194.44l102.28-83.18 30.51-45.23 96.494 84.517 95.26 43.9z"
                fillRule="nonzero"
                fill="#E74C3C"
                opacity=".7"
              />
              <path
                d="M1471.692 194.637l-65.756-11.105-98.105 4.947-126.841-8.451-118.527 6.661-131.685-10.421-185.684 11.685-177.565-7.878-202.435 7.035-128.421-3.894-134.21 6.21-40.948-1.263-59.013 6.474h1469.813z"
                fillRule="nonzero"
                fill="#CA2381"
                opacity=".5"
              />
            </g>
          </svg>
        </div>
        <div className="bg-gray-darker pt-16">
          <div className="container -mb-10">
            <p className="text-gray-light text-xl">
              La réussite d’un projet web réside en grande partie dans son organisation et la
              méthodologie de travail employée. Pour ma part, l’ensemble de mes projets sont
              construits autour de la méthode agile.
            </p>

            <p className="mt-2">
              Elle permet de segmenter un projet en différentes étapes clés afin de vous présenter
              de manière évolutive les avancements de la création
              de votre site. Cette méthode offre à mes clients une transparence accrue sur l’avancée
              de leurs projets mais également la possibilité de tester et de faire évoluer les
              fonctionnalités développées.
            </p>

            <p className="mt-2">
              En somme, cette méthodologie permet d’intégrer mon client dans le processus de
              création
              en le sollicitant à chaque étape de la construction de son outil web. Il s’assure
              ainsi
              au jour le jour de la qualité du produit attendu.
            </p>
          </div>

          <Diagonal
            bgClass="fill-gray-dark"
            bgCorner="fill-gray-darker"
            cta={{
              icon: <LeafHeartIcon />,
              title: ['Demandez votre', <br />, 'devis'],
              href: RouteLink.contact,
            }}
          />
        </div>
      </div>

      <div className="container">
        <div
          className="mt-4 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white"
        >
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et développeurs.
          Nous travaillons ensemble pour créer des choses inspirantes et engagées.
        </div>

        <div className="text-center max-w-4xl mx-auto text-lg mt-4 mb-7">
          Fort d’une expérience de 15 ans dans le domaine du web, j’ai acquis au fil des années des
          compétences diverses et complémentaires qui me permettent aujourd’hui de concevoir
          intégralement l’outil répondant le plus précisément à vos attentes.
        </div>

        <PrestationsList />

        <div className="mt-10">
          <SectionTitle
            title="Pourquoi moi ?"
            content="Consulter en détail les prestations que nous mettrons en place pour vos projets web tout au long de sa création."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <PrestationItem
              image={PrestationDesign}
              title={['Identité visuelle &', <br />, 'Charte graphique']}
            >
              Conscient et engagé, nous sommes à l’affut des nouvelles technologies web, nous
              assurons des veilles graphiques et techniques nous permettant de vous proposer des
              fonctionnalités au gout du jours.
            </PrestationItem>
            <PrestationItem
              image={PrestationWebDev}
              title={['Développment de', <br />, 'votre projet']}
            >
              Expert dans son domaine et sur les CMS comme Joomla, Prestashop et WordPress. inRage
              respectera précisément votre cahier des charges pour développer les fonctionnalités de
              vos sites.
            </PrestationItem>
            <PrestationItem
              image={PrestationFormation}
              title={['Formation offerte', <br />, 'lors de la création']}
            >
              À la fin de la création de votre projet, nous offrons une formation complète à
              l’utilisation de vos nouveaux outils web. Vous offrant une administration optimale de
              votre site.
            </PrestationItem>
            <PrestationItem
              image={PrestationSupport}
              title={['Support technique', <br />, '7j/7']}
            >
              Chez inRage, Nous n’attendons pas le Lundi matin pour intervenir sur votre site
              Internet.
              Nous sommes disponibles 7j/7 si un problème technique survient sur votre site web.
            </PrestationItem>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Prestations sous WordPress, Prestashop et Symfony',
    },
  };
}
