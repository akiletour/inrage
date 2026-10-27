import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import LeafHeartIcon from '@component/icons/LeafHeartIcon'
import PrestationItem from '@component/items/PrestationItem'
import Layout from '@component/Layout'
import PrestationsList from '@component/PrestationsList'
import SectionTitle from '@component/SectionTitle'
import PrestationDesign from '@image/prestations/charte_graphique.png'
import PrestationWebDev from '@image/prestations/developpement_site_web.png'
import PrestationFormation from '@image/prestations/formation_offerte.png'
import PrestationSupport from '@image/prestations/support_technique_772424.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Prestations : création de site, maintenance, hébergement | inRage',
  description:
    'Les prestations de Pascal Gault, développeur freelance à La Rochelle : création de sites WordPress, Prestashop, Symfony et React, maintenance, hébergement en France. Devis sous 24 h.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestations),
  },
}

export default function Prestations() {
  return (
    <Layout title="Prestations web à La Rochelle : création, maintenance, hébergement">
      <div className="flex relative container mt-12 lg:-mt-24">
        <div className="hidden lg:block overflow-hidden absolute lg:right-[60%]">
          <div className="w-[697px] h-[736px] relative">
            <Image
              className="max-h-[736px]"
              src="/images/presentation-prestations.png"
              width={697}
              priority
              height={736}
              alt="Création de site Internet sur la rochelle"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div className="lg:ml-[45%] relative lg:h-[736px] flex items-center">
          <div>
            <h2 className="uppercase font-bold text-white text-2xl leading-7">
              CRÉATION DE SITE INTERNET SUR LA ROCHELLE
              <span className="font-light block text-xl">
                ET PARTOUT EN FRANCE
              </span>
            </h2>

            <div className="text-gray-light text-xl mt-8">
              <p>
                Je vous accompagne de A à Z dans la création de votre site
                internet et vous propose la solution idéale pour répondre à vos
                problématiques techniques, graphiques et budgétaires.
              </p>
              <p>
                Afin de mener à bien votre projet, j’analyse en détail les
                besoins de votre activité pour identifier vos enjeux et y
                répondre le plus efficacement par une solution sur-mesure.
              </p>
            </div>

            <p className="mt-4">
              Site vitrine, boutique en ligne, application métier : je développe
              sur WordPress, Prestashop, Symfony et React, selon ce que vous
              devez administrer vous-même et ce qui doit évoluer plus tard.
            </p>
            <p className="mt-4">
              La mise en ligne n’est pas la fin du projet. Je propose la
              maintenance de votre site, avec un délai d’intervention garanti,
              et son hébergement sur une infrastructure située en France que
              j’administre. Plus de 150 sites sont suivis de cette façon.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="px-6">
          <svg
            className="block max-w-[1280px] w-full mx-auto h-auto -mb-[5.75%] lg:-mb-18"
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
                <tspan x="184.0942" y="265.2684">
                  GESTION DE PROJET
                </tspan>
              </text>
              <text
                fill="#F19D32"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="0" y="98.3187">
                  DEBUT DU PROJET
                </tspan>
              </text>
              <text
                fill="#3F96CF"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="329.4956" y="56.991">
                  VEILLE
                </tspan>
              </text>
              <text
                fill="#925BA1"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="565.0662" y="24.7987">
                  GRAPHISME
                </tspan>
              </text>
              <text
                fill="#E74C3C"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="649.1442" y="270.2156">
                  INTEGRATION
                </tspan>
              </text>
              <text
                fill="#50B66D"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="976.7459" y="278.5486">
                  DEVELOPPEMENT
                </tspan>
              </text>
              <text
                fill="#ECF0F1"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="1185.0481" y="21.7688">
                  MISE EN PRODUCTION
                </tspan>
              </text>
              <text
                fill="#35495E"
                fontFamily="Helvetica"
                fontSize="22"
                transform="translate(-1 -1)"
              >
                <tspan x="1299.0454" y="278.5486">
                  MAINTENANCE
                </tspan>
              </text>
              <path
                d="M73.13 107.757c-6.491 22.066 3.004 44.26 21.23 49.621"
                stroke="#F19D32"
              />
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
        <div className="bg-gray-darker pt-32">
          <div className="container mb-20 md:-mb-20">
            <p className="text-gray-light text-xl">
              La réussite d’un projet web réside en grande partie dans son
              organisation et la méthodologie de travail employée. Pour ma part,
              l’ensemble de mes projets sont construits autour de la méthode
              agile.
            </p>

            <p className="mt-4">
              Elle permet de segmenter un projet en différentes étapes clés afin
              de vous présenter de manière évolutive les avancements de la
              création de votre site. Cette méthode offre à mes clients une
              transparence accrue sur l’avancée de leurs projets mais également
              la possibilité de tester et de faire évoluer les fonctionnalités
              développées.
            </p>

            <p className="mt-4">
              En somme, cette méthodologie permet d’intégrer mon client dans le
              processus de création en le sollicitant à chaque étape de la
              construction de son outil web. Il s’assure ainsi au jour le jour
              de la qualité du produit attendu.
            </p>
          </div>

          <Diagonal
            bgClass="fill-gray-dark"
            className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
            bgCorner="fill-gray-darker"
            cta={{
              icon: <LeafHeartIcon />,
              title: ['Demandez votre', 'devis'],
              href: RouteLink.contact,
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="mt-8 mx-auto text-xl sm:text-2xl max-w-4xl font-medium text-center text-white">
          Je suis entouré d&apos;une équipe fondée de créatifs, designers et
          développeurs. Nous travaillons ensemble pour créer des choses
          inspirantes et engagées.
        </div>

        <div className="text-center max-w-4xl mx-auto text-lg mt-8 mb-14">
          Développeur web depuis 2008, en agence puis en freelance à La
          Rochelle, je conçois, développe, héberge et maintiens les sites que je
          livre. Un seul interlocuteur, de la maquette à la mise en ligne, et
          après.
        </div>

        <PrestationsList />

        <div className="mt-20">
          <SectionTitle
            title="Pourquoi moi ?"
            content="Ce que je prends en charge sur un projet web, de la conception au suivi après la mise en ligne."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <PrestationItem
              image={PrestationDesign}
              title={['Identité visuelle &', 'Charte graphique']}
            >
              Maquettes, logo et charte graphique sont conçus avec le graphiste
              du collectif, puis intégrés par mes soins. Un seul interlocuteur
              du premier croquis à la mise en ligne.
            </PrestationItem>
            <PrestationItem
              image={PrestationWebDev}
              title={['Développement de', 'votre projet']}
            >
              Je développe sur WordPress, Prestashop, Symfony et React, en
              suivant votre cahier des charges, et je vous montre l’avancement
              sur un serveur de pré-production.
            </PrestationItem>
            <PrestationItem
              image={PrestationFormation}
              title={['Formation offerte', 'lors de la création']}
            >
              À la mise en ligne, je vous forme à l’administration de votre site
              pour que vous soyez autonome sur les contenus, les produits et les
              mises à jour courantes.
            </PrestationItem>
            <PrestationItem
              image={PrestationSupport}
              title={['Support technique', '7j/7']}
            >
              Je n’attends pas le lundi matin pour intervenir sur votre site. Si
              un problème technique survient, je suis joignable 7j/7.
            </PrestationItem>
          </div>
        </div>
      </div>
    </Layout>
  )
}
