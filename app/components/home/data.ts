import { StaticImageData } from 'next/image'

import ExpertiseReact from '@image/expertises/react.svg'
import ExpertisePrestashop from '@image/expertises/prestashop.png'
import ExpertiseSymfony from '@image/expertises/symfony.png'
import ExpertiseWordPress from '@image/expertises/wordpress.png'
import ImagePrestationBuildWebsite from '@image/prestations/creation-site-internet.png'
import ImagePrestationHosting from '@image/prestations/hebergement-optimise-rapide.png'
import ImagePrestationTma from '@image/prestations/infogerance-tma-maintenance.png'
import { RouteLink } from '@lib/router'

export type HomeProject = {
  title: string
  slug: string
  thumbnail: string
  support: { slug: string; title: string }
}

export const PRESTATIONS = [
  {
    title: 'Création et refonte de sites internet',
    text: 'Sites vitrines, associatifs, e-commerce ou applications métier. Je vous accompagne dès la genèse de votre projet pour vous proposer des solutions performantes, sur WordPress, Prestashop, Symfony ou React.',
    link: RouteLink.prestationWeb,
    linkText: 'Découvrir mes prestations',
    image: ImagePrestationBuildWebsite as StaticImageData,
  },
  {
    title: 'Maintenance et infogérance',
    text: 'Mises à jour, sauvegardes, sécurité et surveillance de votre site WordPress ou Prestashop. Je prends le relais sur ces tâches techniques et chronophages pour que vous restiez concentré sur votre activité.',
    link: RouteLink.prestationTma,
    linkText: 'Mes offres de maintenance',
    image: ImagePrestationTma as StaticImageData,
  },
  {
    title: 'Hébergement infogéré et supervisé',
    text: 'Votre site hébergé en France sur une infrastructure que j’administre moi-même : supervision 24h/24, sauvegardes chaque nuit, serveurs doublés et protection contre les attaques, avec un seul interlocuteur.',
    link: RouteLink.prestationHosting,
    linkText: 'Découvrir l’hébergement',
    image: ImagePrestationHosting as StaticImageData,
  },
]

export const EXPERTISES = [
  {
    title: 'Création de site WordPress',
    text: 'Le CMS le plus répandu, avec un thème sur mesure : vous administrez vos contenus en autonomie sur un site rapide et pensé pour le référencement.',
    link: RouteLink.prestationWordPress,
    image: ExpertiseWordPress as StaticImageData,
  },
  {
    title: 'Développement Symfony',
    text: 'Le framework PHP de référence pour les extranets, outils de gestion et plateformes sur mesure, avec une architecture robuste et évolutive.',
    link: RouteLink.prestationSymfony,
    image: ExpertiseSymfony as StaticImageData,
  },
  {
    title: 'Boutique Prestashop',
    text: 'Création de boutiques en ligne, développement de modules, migrations et intégrations ERP pour vendre efficacement, en B2B comme en B2C.',
    link: RouteLink.prestationPrestashop,
    image: ExpertisePrestashop as StaticImageData,
  },
  {
    title: 'Applications React et Next.js',
    text: 'Les technologies modernes de référence pour des applications web performantes, scalables et agréables à utiliser.',
    link: RouteLink.prestationReact,
    image: ExpertiseReact as StaticImageData,
  },
]

export const KEYPOINTS = [
  {
    to: 2008,
    from: 1990,
    prefix: 'Depuis ',
    label: 'développeur web à La Rochelle',
  },
  { to: 150, suffix: '+', label: 'sites sous maintenance' },
  { to: 5, decimals: 1, suffix: ' / 5', label: 'note moyenne sur Google' },
  { to: 24, suffix: ' h', label: 'pour recevoir votre devis' },
]

export const CLIENTS = [
  'Emil Frey France',
  'Groupe IDAIA',
  'Audilab',
  'Epitech',
  'Guédelon',
  'Quadria',
  'VMZinc',
  'Éditions Delcourt',
  'Camping La Mouette Rieuse',
  'Santé Environnement Nouvelle-Aquitaine',
  'Laboratoire Biosalines',
  'Romain Ouvrard',
]
