import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import PrestationItem from '@component/items/PrestationItem'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import TextImage from '@component/TextImage'
import TmaOnDemandIntro from '@image/character_back_build.png'
import PrestationDesign from '@image/prestations/charte_graphique.png'
import PrestationWebDev from '@image/prestations/developpement_site_web.png'
import PrestationFormation from '@image/prestations/formation_offerte.png'
import PrestationSupport from '@image/prestations/support_technique_772424.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title:
    'Développement, maintenance et intervention ponctuelle site web | Freelance - inRage',
  description:
    'Développeur freelance, je peux intervenir ponctuellement sur votre site sous forme d’heures de développement, que ce soit pour l’intégration d’un nouveau bloc ou une nouvelle fonctionnalité.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationTmaOnDemand),
  },
}

export default function TmaOnDemand() {
  return (
    <Layout
      breadcrumbs={[
        {
          link: RouteLink.prestations,
          title: 'Prestations sous WordPress, Prestashop et Symfony',
        },
        {
          link: RouteLink.prestationTma,
          title: 'Maintenance de site web',
        },
      ]}
      title="Maintenance ponctuelle"
    >
      <div className="container">
        <TextImage position="right" image={TmaOnDemandIntro}>
          <div className="text-left">
            <h2 className="text-white uppercase text-3xl font-bold mb-3">
              <span className="block">
                Vous avez besoin de moi pour une tâche,
              </span>
              <span className="block text-2xl font-light">
                Ou vous êtes bloqué avec votre site ?
              </span>
            </h2>

            <p className="mt-3 text-xl text-gray-light">
              Que ce soit un site e-commerce ou vitrine, il peut que vous soyez
              confronté à des difficultés techniques dans la création ou la
              maintenance de votre site internet.
            </p>
            <p className="mt-3 text-gray-light">
              Je peux intervenir ponctuellement sur votre site sous forme
              d’heure de développement. Que ce soit pour l’intégration d’un
              nouveau bloc ou une fonctionnalité, le dépannage sur un module que
              vous venez d’installer ou le développement d’une partie de votre
              site.
            </p>
            <p className="mt-3 text-gray-light">
              N’hésitez pas à me contacter pour que l’on en discute et que je
              puisse établir avec vous la marche à suivre pour vous dépanner le
              plus rapidement possible.
            </p>
          </div>
        </TextImage>
      </div>

      <div className="bg-gray-darker mt-4 mb-4">
        <Diagonal
          flipX
          flipY
          className="h-8 md:h-16 lg:h-24"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="w-full max-w-3xl mx-auto text-center py-8 lg:py-0">
          <div>
            <h2 className="text-center text-white text-3xl">
              <span className="uppercase font-bold">
                Pourquoi faire appel à un support
              </span>
              <span className="block uppercase text-xl">
                WordPress, Prestashop ou encore Woocommerce ?
              </span>
            </h2>
            <p className="text-xl text-gray-light mt-3">
              Je comprends parfaitement que votre but est d’avoir une boutique
              en ligne performance et de générer des ventes, ou un bien un site
              vitrine fonctionnel, attractif avec une bonne conversion dessus.
            </p>
            <p className="mt-2">
              Mon but est de vous accompagner dans cette démarche en vous
              faisant gagner du temps pour corriger, améliorer voir même
              développer votre site WordPress ou Prestashop.
            </p>
            <p className="mt-2">
              Plus de 10 années dans le développement de solution comme
              WordPress ou Prestashop. Je suis là pour répondre à vos besoins et
              vous aider dans son développement.
            </p>
          </div>
        </div>

        <div className="container text-center">
          <h3 className="mt-5 text-3xl font-bold text-white">
            Les raisons de vouloir
            <br />
            commander un ticket d&apos;heure :
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 relative z-10">
            <PrestationItem
              image={PrestationDesign}
              title={['Intégration', 'spécifique']}
            >
              Intégration spécifique sur votre site Prestashop ou WordPress
              d&apos;une nouvelle fonctionnalité (dans la limite possible de
              l&apos;heure).
            </PrestationItem>
            <div className="md:mt-6">
              <PrestationItem
                image={PrestationWebDev}
                title={["Réparation d'un", 'bug ou erreur']}
              >
                Identification et correction d&apos;une erreur ou un bug sur
                votre site dans l&apos;immédiat ou par devis après
                identification et analyse.
              </PrestationItem>
            </div>
            <div className="md:mt-6">
              <PrestationItem
                image={PrestationFormation}
                title={['Conseil, question', 'ou analyse']}
              >
                Besoin d&apos;un réglage particulier dans votre administration ?
                D&apos;un conseil technique ou d&apos;une analyse d&apos;un code
                ? Je suis là !
              </PrestationItem>
            </div>
            <PrestationItem
              image={PrestationSupport}
              title={['Support technique', '7j/7']}
            >
              Chez inRage, Nous n’attendons pas le Lundi matin pour intervenir
              sur votre site Internet. Nous sommes disponibles 7j/7 si un
              problème technique survient sur votre site web.
            </PrestationItem>
          </div>
        </div>
        <Diagonal
          className="h-8 md:h-16 lg:h-auto"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
      </div>

      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à me contacter en remplissant le formulaire de la page contact, je serai ravi de vous répondre."
          }
          title="Contact"
        />

        <ContactForm />
      </div>
    </Layout>
  )
}
