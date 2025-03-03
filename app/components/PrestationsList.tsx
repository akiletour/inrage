import ImagePrestationBuildWebsite from '@image/prestations/creation-site-internet.png'
import ImagePrestationHosting from '@image/prestations/hebergement-optimise-rapide.png'
import ImagePrestationTma from '@image/prestations/infogerance-tma-maintenance.png'
import { RouteLink } from '@lib/router'

import PrestationItem from './items/PrestationItem'

export default function PrestationsList() {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-6">
      <PrestationItem
        image={ImagePrestationBuildWebsite}
        title={['Conception / Refonte', 'de sites Internet']}
        link={RouteLink.prestationWeb}
        linkText="Découvrir mes prestations"
      >
        Sites vitrines, associatifs, e-commerce ou dédiés. Je vous accompagne
        dès la genèse de votre projet pour vous proposer des solutions
        puissantes et performantes et répondre le plus efficacement aux enjeux
        de votre activité. Je suis expert dans la création de site sur les CMS
        Joomla, WordPress et Prestashop.
      </PrestationItem>

      <PrestationItem
        image={ImagePrestationTma}
        title={['Maintenance &', 'Infogérance']}
        link={RouteLink.prestationTma}
        linkText="Mes offres de maintenance"
      >
        La maintenance d’un site internet s’avère complexe lorsqu’on ne dispose
        pas du bagage technique nécessaire voire le temps de s’en occuper. Pour
        ces tâches délicates et chronophages, je vous propose de prendre le
        relai et d’assurer pour vous la gestion de vos sauvegardes, ainsi que la
        maintenance et la sécurité de votre serveur dans sa globalité.
      </PrestationItem>

      <PrestationItem
        image={ImagePrestationHosting}
        title={['Hébergement optimisé &', 'ultra rapide']}
        link={RouteLink.contact}
        linkText="Me contacter"
      >
        Lorsque vous souhaitez mettre en ligne un site, il est nécessaire de
        choisir une offre d’hébergement parmis une foule d’offres et de
        prestataires. Nos offres d’hébergement sont transparentes et sans frais
        cachés. Un expert de notre partenaire Dutiko analyse votre projet ainsi
        que votre demande pour vous proposer l’offre idéale pour la nature de
        votre site web.
      </PrestationItem>
    </div>
  )
}
