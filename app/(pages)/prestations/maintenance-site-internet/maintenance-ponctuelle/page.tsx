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
  title: 'Dépannage et maintenance ponctuelle de site web | inRage',
  description:
    'Dépannage de site internet à La Rochelle et à distance : intervention à l’heure sur WordPress, WooCommerce ou Prestashop pour corriger un bug, débloquer une mise à jour ou ajouter une fonctionnalité.',
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
          title: 'Prestations',
        },
        {
          link: RouteLink.prestationTma,
          title: 'Maintenance de site internet',
        },
      ]}
      title="Dépannage et maintenance ponctuelle de site internet"
    >
      <div className="container">
        <TextImage position="right" image={TmaOnDemandIntro}>
          <div className="text-left">
            <h2 className="text-white uppercase text-3xl font-bold mb-6">
              <span className="block">
                Vous avez besoin de moi pour une tâche,
              </span>
              <span className="block text-2xl font-light">
                Ou vous êtes bloqué avec votre site ?
              </span>
            </h2>

            <p className="mt-6 text-xl text-gray-light">
              Site vitrine ou boutique en ligne, il arrive qu’une mise à jour
              bloque, qu’un module refuse de fonctionner ou qu’une page
              disparaisse sans que personne ne sache pourquoi.
            </p>
            <p className="mt-6 text-gray-light">
              J’interviens à l’heure, sans contrat, sur votre site WordPress,
              WooCommerce ou Prestashop : correction d’un bug, intégration d’un
              nouveau bloc ou d’une fonctionnalité, dépannage d’un module que
              vous venez d’installer, remise en route après une mise à jour
              ratée.
            </p>
            <p className="mt-6 text-gray-light">
              Décrivez le problème dans le formulaire en bas de page, avec
              l’adresse du site et ce que vous avez déjà tenté. Je vous réponds
              avec un diagnostic et le temps estimé avant d’intervenir. Je suis
              à La Rochelle, l’intervention se fait à distance.
            </p>
          </div>
        </TextImage>
      </div>

      <div className="bg-gray-darker mt-8 mb-8">
        <Diagonal
          flipX
          flipY
          className="h-16 md:h-32 lg:h-48"
          bgClass="fill-gray-dark"
          bgCorner="fill-gray-darker"
        />
        <div className="w-full max-w-3xl mx-auto text-center py-16 lg:py-0">
          <div>
            <h2 className="text-center text-white text-3xl">
              <span className="uppercase font-bold">
                Pourquoi faire appel à un support
              </span>
              <span className="block uppercase text-xl">
                WordPress, Prestashop ou encore Woocommerce ?
              </span>
            </h2>
            <p className="text-xl text-gray-light mt-6">
              Votre objectif est une boutique qui vend ou un site vitrine qui
              apporte des contacts, pas de passer vos soirées dans
              l’administration de WordPress.
            </p>
            <p className="mt-4">
              Une heure de développement règle souvent ce qui vous bloque depuis
              des semaines : un formulaire qui n’envoie plus, un module de
              paiement à reconfigurer, un bloc à ajouter sur la page d’accueil.
            </p>
            <p className="mt-4">
              Je développe sur WordPress et Prestashop depuis 2008, et je
              maintiens plus de 150 sites. Si le problème révèle un besoin plus
              large, je vous propose un forfait de maintenance, jamais
              l’inverse.
            </p>
          </div>
        </div>

        <div className="container text-center">
          <h3 className="mt-10 text-3xl font-bold text-white">
            Les raisons de vouloir
            <br />
            commander un ticket d&apos;heure :
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 relative z-10">
            <PrestationItem
              image={PrestationDesign}
              title={['Intégration', 'spécifique']}
            >
              Intégration spécifique sur votre site Prestashop ou WordPress
              d&apos;une nouvelle fonctionnalité (dans la limite possible de
              l&apos;heure).
            </PrestationItem>
            <div className="md:mt-12">
              <PrestationItem
                image={PrestationWebDev}
                title={["Réparation d'un", 'bug ou erreur']}
              >
                Identification et correction d&apos;une erreur ou un bug sur
                votre site dans l&apos;immédiat ou par devis après
                identification et analyse.
              </PrestationItem>
            </div>
            <div className="md:mt-12">
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
              Je n’attends pas le lundi matin pour intervenir sur votre site. Si
              un problème technique survient, je suis joignable 7j/7.
            </PrestationItem>
          </div>
        </div>
        <Diagonal
          className="h-16 md:h-32 lg:h-auto"
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
