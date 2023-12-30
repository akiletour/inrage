import Image from 'next/image';

import ContactForm from '@component/ContactForm';
import Diagonal from '@component/Diagonal';
import MoreIcon from '@component/icons/MoreIcon';
import ProjectItem from '@component/items/ProjectItem';
import Layout from '@component/Layout';
import Link from '@component/NoScrollLink';
import SectionTitle from '@component/SectionTitle';
import TextImage from '@component/TextImage';
import ImageBackgroundTma from '@image/bg-tma.jpeg';
import ProtectionShield from '@image/protection-shield.png';
import WebsitePrestashop from '@image/website-prestashop.png';
import WebsiteWP from '@image/website-wp.png';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import { allPortfolios } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata = {
  title:
    'Création de site e-commerce Prestashop | Freelance Prestashop - inRage',
  description:
    'Développeur web freelance, découvrez mes services de développement et création de site Prestashop sur-mesure avec développement de modules, de thèmes.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationPrestashop),
  },
};

export default async function PrestationPrestashop() {
  const data = allPortfolios
    .filter((post) => post.date && post.category === 'prestashop')
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);

  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
        {
          link: RouteLink.prestationWeb,
          title: 'Création de site internet',
        },
      ]}
      title="Création de site Prestashop"
    >
      <div className="container flex items-center">
        <div className="hidden md:block md:w-2/5">
          <Image
            src={WebsitePrestashop}
            alt="Développeur Prestashop Freelance sur La Rochelle"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className="pt-2 text-lg leading-6 md:w-3/5 md:pl-5">
          <h2 className="text-xl font-bold text-white md:text-3xl">
            Développeur Prestashop Freelance sur{' '}
            <br className="hidden md:block" />
            La Rochelle
          </h2>
          <p className="mt-2">
            Prestashop est un CMS gratuit et opensource. Il est 100%
            administrable et son interface d’administration est claire et sobre.
          </p>
          <p className="mt-2">
            A l’instar de Wordpress, Prestashop bénéficie d’une large
            communauté, très investie. Les plugins et thèmes disponibles pour ce
            CMS sont donc extrêmement nombreux. En somme, Prestashop est un CMS
            simple et fiable, c’est l’outil idéal pour la création de boutique
            e-commerce.
          </p>
          <p className="mt-2">
            Pour ma part, je développe sur Prestashop depuis 2013 lors de la
            sortie de la version 1.4 du CMS.
          </p>
        </div>
      </div>

      <div className="mt-4 bg-gray-darker">
        <Diagonal
          flipX
          flipY
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container py-8 text-center lg:py-0">
          <div className="text-lg md:px-18">
            <h2 className="mb-2 text-3xl font-bold text-white">
              Pourquoi choisir Prestashop ?
            </h2>

            <p>
              Prestashop est le CMS de référence pour la création de boutique en
              ligne et plus largement pour le e-commerce. Il permet à mes
              clients d’être entièrement autonomes dans la gestion des contenus
              de leur site, de gérer leur catalogue, d’ajouter des produits ou
              encore de créer des opérations commerciales.
            </p>
            <p>
              Depuis la refonte du CMS sous Symfony (version 1.7), les
              possibilités de Prestashop ont été élargies notamment en termes de
              personnalisation du backoffice. Le recours à Symfony a également
              permis d’améliorer les performances des sites développés sous
              Prestashop.
            </p>
            <p>
              Prestashop est la garantie pour mes clients de disposer d’une
              boutique en ligne fiable, sécurisée et performante.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <TextImage
          title={['Développment et intégration', 'de thèmes Prestashop']}
          image={WebsiteWP}
        >
          <p>
            Pour chaque projet, nous élaborons ensemble le design de votre site
            e-commerce puis je développe le thème prestashop dans le respect de
            vos choix graphiques et fonctionnels. Cette étape est cruciale car
            elle définit ce que les visiteurs pourront visualiser sur votre
            boutique. Tous les thèmes que je développe sont consultables sur
            tous les terminaux (responsive design).
          </p>

          <p className="mt-2">
            Je respecte scrupuleusement les bonnes pratiques dictées par
            Prestashop et sa communauté. C’est pourquoi je préfère développer
            intégralement un thème plutôt que d’en utiliser un existant. Ainsi,
            les sites que je développe sont plus rapides à l’affichage, plus
            fiables et plus pérennes dans le temps.
          </p>
        </TextImage>

        <TextImage
          position="right"
          title={['Développement', 'de modules Prestashop']}
          image={WebsitePrestashop}
        >
          <p>
            Comme pour le CMS Wordpress, la communauté Prestashop est importante
            et particulièrement investie. De fait, le catalogue de ses modules
            existants est très complet. Pourtant, selon vos besoins ou les
            enjeux de votre activité, il peut être nécessaire de développer
            entièrement une fonctionnalité ou un module. Pour chaque besoin, il
            existe une solution technique, ainsi je suis en mesure de développer
            pour vous la fonctionnalité qui convient à votre boutique
            e-commerce.
          </p>

          <p className="mt-2">
            Les modules développées par mes soins respectent les bonnes
            pratiques véhiculées par Prestashop et utilisent le système de
            “Hook” pour réaliser des actions sans modifier le coeur du CMS. Ces
            modules sont réplicables sur l’ensemble des sites développés sous
            Prestashop.
          </p>
        </TextImage>
      </div>

      <div className="mt-4 bg-gray-darker">
        <Diagonal
          flipX
          flipY
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="container py-8 text-center lg:py-0">
          <div className="">
            <h2 className="text-center text-3xl text-white">
              Migration de Prestashop 1.6 vers 1.7
              <span className="block text-xl">
                Un outil pour vous faciliter la vie
              </span>
            </h2>
            <p className="mt-3 text-xl text-gray-light">
              La dernière version de Prestashop (1.7.5) est très largement
              plébiscitée par la communauté pour ses performances et sa
              fiabilité. Notamment car elle est développée sur la base du
              framework Symfony.
            </p>
            <p className="mt-2">
              En 2019, de nombreuses sociétés ont fait part à leurs
              développeurs, de leur souhait de migrer leur boutique sur la
              nouvelle version de Prestashop. Afin de rendre cette migration
              plus simple et plus rapide, j’ai créé un outil dédié me permettant
              de réaliser cette migration et ainsi d’éviter la création d’un
              nouveau site.
            </p>
          </div>
        </div>
        <Diagonal
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <h2 className="mb-4 text-3xl font-bold text-white">
          L&apos;intégration de votre catalogue produit
        </h2>
        <p>
          L&apos;intégration de votre catalogue produit au sein de votre
          boutique e-commerce Prestashop est parfois très compliqué à mettre en
          place lors de la création ou de la refonte.
        </p>
        <p className="mt-2">
          Pour faciliter l&apos;intégration de vos catégories et produits dans
          votre catalogue, j&apos;ai développé des outils permettant
          d&apos;injecter facilement vos références dans Prestashop via une API,
          un tableau CSV ou XLS).
        </p>
        <p className="mt-2">
          Ainsi, vous pouvez l&apos;alimenter en quelques clics et cela, tout au
          long de la vie de votre site e-commerce.
        </p>
      </div>

      <div className="relative">
        <Diagonal
          className="-z-10 h-12 md:h-20 lg:h-[360px]"
          flipX
          flipY
          bgClass="fill-gray-dark"
          bgCorner="fill-orange"
        />
        <Image
          className="-z-10 opacity-30 md:opacity-100"
          src={ImageBackgroundTma}
          alt="Prestation de maintenance TMA"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="container relative z-10 my-4 flex items-center lg:-my-10">
          <div className="text-sm text-gray-light md:w-2/3">
            <h2 className="mb-3 text-2xl font-medium text-white sm:text-3xl">
              Garanti et suivi <br className="hidden sm:block" />
              <span className="font-light">pendant 3 mois inclus</span>
            </h2>
            <p>
              Lorsque votre site est en ligne, il peut être sujet à de nombreux
              problèmes tels des extensions obsolètes qui peuvent créer des
              failles et laisser le champ libre à des utilisateurs malveillants,
              ou encore une panne du serveur sur lequel il est hébergé.
            </p>

            <p className="mt-2">
              Pour remédier rapidement et efficacement à ce type de problème,
              j’ai développé une multitude d’outils pour inspecter et analyser
              votre site en temps réel et me prévenir si l’intégrité de votre
              site est altérée.
            </p>

            <p className="mt-2">
              Lorsqu’un problème m’est notifié, je suis en mesure d’intervenir
              rapidement pour le corriger et procéder si nécessaire à la mise à
              jour des modules obsolètes.
            </p>
            <p className="mt-2">
              Ainsi, votre site internet est protégé en permanence.
            </p>
            <div className="flex-start mt-4 flex flex-wrap">
              <Link href={RouteLink.prestationTmaPrestashop}>
                <span className="button">
                  Forfaits de maintenance Prestashop
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <Image
              src={ProtectionShield}
              alt={'Forfaits de maintenance Prestashop'}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <Diagonal
          className="-z-10 h-12 md:h-20 lg:h-[360px]"
          bgClass="fill-gray-darker"
          bgCorner="fill-orange"
        />
      </div>

      <div className="bg-gray-darker">
        <div className="container relative z-10 pb-8 lg:-mb-8 lg:pb-0">
          <SectionTitle
            title="Réalisations Prestashop"
            content="Retrouvez ci-dessous quelques projets auxquels j'ai eu l'occasion de collaborer dessus en tant que développeur freelance sur Prestashop."
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
            href: `${RouteLink.portfolio}/prestashop`,
            title: ['voir les projets', 'Prestashop'],
            icon: <MoreIcon />,
          }}
        />
      </div>
      <div className="container mt-4 md:mt-0">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire ci-dessous, je serais ravis de vous répondre."
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  );
}
