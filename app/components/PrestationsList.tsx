import ImagePrestationBuildWebsite from '@image/prestations/creation-site-internet.png'
import ImagePrestationHosting from '@image/prestations/hebergement-optimise-rapide.png'
import ImagePrestationTma from '@image/prestations/infogerance-tma-maintenance.png'
import { RouteLink } from '@lib/router'

import PrestationItem from './items/PrestationItem'

export default function PrestationsList() {
  return (
    <div className="grid md:grid-cols-3 gap-12 md:gap-6 lg:gap-12">
      <PrestationItem
        image={ImagePrestationBuildWebsite}
        title={['Création et refonte', 'de sites internet']}
        link={RouteLink.prestationWeb}
        linkText="Découvrir mes prestations"
      >
        Sites vitrines, associatifs, e-commerce ou applications métier. Je vous
        accompagne dès la genèse de votre projet pour vous proposer des
        solutions performantes, sur WordPress, Prestashop, Symfony ou React.
      </PrestationItem>

      <PrestationItem
        image={ImagePrestationTma}
        title={['Maintenance', 'et infogérance']}
        link={RouteLink.prestationTma}
        linkText="Mes offres de maintenance"
        secondary
      >
        Mises à jour, sauvegardes, sécurité et surveillance de votre site
        WordPress ou Prestashop. Je prends le relais sur ces tâches techniques
        et chronophages pour que vous restiez concentré sur votre activité.
      </PrestationItem>

      <PrestationItem
        image={ImagePrestationHosting}
        title={['Hébergement infogéré', 'et supervisé']}
        link={RouteLink.prestationHosting}
        linkText="Découvrir l’hébergement"
        secondary
      >
        Votre site hébergé en France sur une infrastructure que j’administre
        moi-même : supervision 24h/24, sauvegardes chaque nuit, serveurs doublés
        et protection contre les attaques, avec un seul interlocuteur.
      </PrestationItem>
    </div>
  )
}
