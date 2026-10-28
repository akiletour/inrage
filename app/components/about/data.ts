import { StaticImageData } from 'next/image'

import ExpCOS from '@image/experiences/comonscreen.png'
import ExpKamelab from '@image/experiences/kamelab.png'
import ExpMoonscoop from '@image/experiences/moonscoop.png'
import ExpPhenix from '@image/experiences/phenix-studio.svg'
import ExpInrage from '@image/inline-logo.png'
import { RouteLink } from '@lib/router'

export const GOOGLE_PLACE_URL =
  'https://www.google.com/maps/place/inRage/@46.1403464,-1.1585285,17z/data=!4m6!3m5!1s0x480153c0be2dbed9:0x35f608744dda7224!8m2!3d46.1403464!4d-1.1585285!16s%2Fg%2F11xnq9982'

export const TIMELINE = [
  {
    year: 'Aujourd’hui',
    title: 'Membre du collectif Phénix Studio',
    company: 'Phénix Studio, La Rochelle',
    text: 'Un collectif à trois : Matthieu au conseil, Ludovic au design, moi au développement. inRage porte la relation client et la technique.',
    logo: ExpPhenix as StaticImageData,
    logoClassName: 'h-14',
  },
  {
    year: '2019',
    title: 'inRage à temps plein',
    company: 'inRage, La Rochelle',
    text: 'Création de sites WordPress, boutiques Prestashop, applications Symfony et React, hébergement et maintenance. L’activité démarrée le soir et le week-end en 2011 devient mon métier à plein temps.',
    logo: ExpInrage as StaticImageData,
    logoClassName: 'h-10',
  },
  {
    year: '2018',
    title: 'Co-gérant et responsable technique',
    company: 'Kamélab, La Rochelle',
    text: 'Agence créée avec Johann Hébert, consultant webmarketing, et Romain Ouvrard, graphiste. Développement, DevOps et direction technique jusqu’à sa fermeture en 2022.',
    logo: ExpKamelab as StaticImageData,
    logoClassName: 'h-16',
  },
  {
    year: '2017',
    title: 'Naissance d’Invoicer',
    company: 'inRage',
    text: 'Le logiciel de facturation que j’utilise pour inRage devient un produit à part entière, pensé pour les auto-entrepreneurs.',
  },
  {
    year: '2012',
    title: 'Lead développeur fullstack',
    company: 'Com’On Screen, La Rochelle',
    text: 'Responsable de toute la partie web et réseau : Symfony, WordPress, Prestashop, et l’infrastructure serveur sur AWS, Debian et Docker.',
    logo: ExpCOS as StaticImageData,
    logoClassName: 'h-16',
  },
  {
    year: '2008',
    title: 'Développeur web',
    company: 'Moonscoop Digital Media, La Rochelle',
    text: 'Premier poste, dans une équipe de trois développeurs. Sites clients sur Joomla et Zencart, bases de données MySQL.',
    logo: ExpMoonscoop as StaticImageData,
    logoClassName: 'h-14',
  },
]

export const TEAM = [
  {
    name: 'Matthieu Verdier',
    role: 'Directeur conseil, Phénix Studio',
    text: 'Cadrage, stratégie et accompagnement des clients sur les projets du collectif.',
  },
  {
    name: 'Ludovic Boussion',
    role: 'Graphiste UI/UX, Phénix Studio',
    text: 'Identités visuelles, maquettes et parcours utilisateurs des sites que je développe.',
  },
  {
    name: 'Johann Hébert',
    role: 'Consultant webmarketing',
    text: 'Stratégie de contenu et acquisition, mon associé du temps de Kamélab.',
    href: `${RouteLink.portfolio}/wordpress/webmarketing-johann-hebert`,
  },
]

export const COMMITMENTS = [
  {
    title: 'Une réponse dans la journée',
    text: 'Un e-mail ou un appel reçu en semaine trouve une réponse avant le soir, même si c’est pour dire « je regarde demain ».',
  },
  {
    title: 'Un devis sous 24 heures',
    text: 'Chiffré poste par poste, sans forfait opaque. Vous savez ce que vous payez et ce que vous pouvez retirer.',
  },
  {
    title: 'Un seul interlocuteur',
    text: 'Celui qui cadre le projet est celui qui le développe, l’héberge et le maintient. Pas de chef de projet entre nous.',
  },
  {
    title: 'Vos données en France',
    text: 'Les sites que j’héberge tournent sur des serveurs français que j’administre moi-même, sauvegardés chaque nuit.',
  },
  {
    title: 'Du code que vous pouvez lire',
    text: 'Ce site et mon thème WordPress Octa sont publics sur GitHub. Vous repartez avec un code propre, documenté, reprenable par une autre équipe.',
  },
]

export const REVIEWS = [
  {
    author: 'Ricardo Pinto Maia',
    since: 'Client depuis plus de 7 ans',
    text: 'Il ne se contente jamais d’exécuter un brief : il le dépasse, propose, améliore et tire systématiquement le projet vers le haut. Ses conseils sont toujours pertinents, son suivi irréprochable, et son code propre, clair et facilement exploitable par toute équipe technique.',
  },
  {
    author: 'Parapharmacie Moins Chère',
    since: '6 ans de collaboration',
    text: 'Réactifs et à l’écoute, ils ont su nous aider sur tous les plans de développement de notre site. Évidemment par la conception, l’hébergement ou encore la TMA. Au-delà de ça, l’équipe et particulièrement Pascal font preuve de réactivité et d’un accompagnement sans faille !',
  },
  {
    author: 'Christophe Lemaire',
    since: 'Client',
    text: 'Suite aux problèmes rencontrés avec les 2 webmasters précédents, je suis très content d’avoir croisé la route de Inrage, enfin quelqu’un de sérieux. Le conseil et la maintenance sont excellents ! Les prix sont compétitifs, et cerise sur le gâteau, devenu rare de nos jours, c’est le côté humain bien présent.',
  },
]
