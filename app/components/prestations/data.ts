import { RouteLink } from '@lib/router'

export const SUMMARY = [
  { id: 'creation', label: 'Création et refonte' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'hebergement', label: 'Hébergement' },
  { id: 'coulisses', label: 'DevOps, sécurité, mobile et tracking' },
  { id: 'agences', label: 'Pour les agences' },
  { id: 'methode', label: 'Déroulé d’un projet' },
  { id: 'faq', label: 'Questions fréquentes' },
]

export const CREATION_TECHS = [
  {
    name: 'WordPress',
    text: 'Site vitrine ou éditorial, thème sur mesure avec Octa, blocs Gutenberg adaptés à vos contenus.',
    href: RouteLink.prestationWordPress,
  },
  {
    name: 'Prestashop et WooCommerce',
    text: 'Boutique en ligne, catalogue, modules, connexion à votre ERP ou votre logiciel de caisse.',
    href: RouteLink.prestationPrestashop,
  },
  {
    name: 'Symfony',
    text: 'Extranet, outil métier, API : quand le besoin ne rentre pas dans un CMS.',
    href: RouteLink.prestationSymfony,
  },
  {
    name: 'React et Next.js',
    text: 'Interfaces rapides, applications web et sites statiques performants.',
    href: RouteLink.prestationReact,
  },
]

export const MAINTENANCE_OFFERS = [
  {
    name: 'Maintenance WordPress',
    text: 'Forfait annuel : mises à jour testées, sauvegardes, surveillance, délai d’intervention garanti.',
    href: RouteLink.prestationTmaWordPress,
  },
  {
    name: 'Maintenance Prestashop',
    text: 'Montées de version, modules, sécurité du back-office et des paiements.',
    href: RouteLink.prestationTmaPrestashop,
  },
  {
    name: 'Intervention ponctuelle',
    text: 'Un bug, une mise à jour bloquée, un site piraté : facturé à l’heure, sans engagement.',
    href: RouteLink.prestationTmaOnDemand,
  },
]

export const BACKSTAGE = [
  {
    title: 'DevOps et infrastructure',
    text: 'J’administre moi-même les serveurs qui font tourner les sites que je maintiens : plusieurs clusters et des grappes Docker Swarm en production, sous Debian, avec des déploiements automatisés. Chaque serveur et chaque site est supervisé avec des alertes, les sauvegardes couvrent les sites et les machines, et elles sont testées en restauration, pas seulement stockées.',
    href: RouteLink.prestationHosting,
    hrefText: 'Voir l’offre d’hébergement',
  },
  {
    title: 'Sécurité',
    text: 'CrowdSec filtre les adresses malveillantes signalées par des milliers de serveurs dans le monde. Quand une attaque passe ce premier niveau, j’ai les outils pour l’analyser et comprendre ce qui s’est passé plutôt que de remettre une sauvegarde en croisant les doigts. Chaque image Docker est scannée avec Trivy avant d’être déployée. En octobre 2026, une faille PHP sous embargo a été corrigée sur tout le parc en une nuit.',
    href: `${RouteLink.blog}/faille-securite-php-octobre-2026-recit`,
    hrefText: 'Lire le récit de cette nuit',
  },
  {
    title: 'Outillage de maintenance WordPress',
    text: 'Avec 150 sites à suivre, je ne fais pas les mises à jour à la main. J’ai écrit un générateur de scripts WP-CLI qui prépare chaque intervention à partir des failles publiées et des montées de version à passer, puis un outil macOS en Swift qui produit le rapport de maintenance envoyé au client. Résultat : des interventions reproductibles et un rapport lisible à chaque passage.',
    href: RouteLink.prestationTmaWordPress,
    hrefText: 'Voir la maintenance WordPress',
  },
  {
    title: 'Applications mobiles React Native',
    text: 'Quand un projet a besoin d’une application iOS et Android en plus du site, je la développe en React Native, avec la même API que la partie web. Vous gardez un seul interlocuteur pour le site, l’application et le serveur derrière.',
    href: RouteLink.prestationReact,
    hrefText: 'Voir React et Next.js',
  },
  {
    title: 'Tracking GTM et GA4',
    text: 'J’ai mené la partie technique de gros projets de tracking pour de grandes entreprises : plan de taggage, conteneur Google Tag Manager, événements GA4, conversions, gestion du consentement. Je branche votre plan de mesure existant ou je le construis avec votre équipe marketing, côté code comme côté conteneur.',
    href: RouteLink.auditGratuit,
    hrefText: 'Faire auditer votre site',
  },
]

export const AGENCY_POINTS = [
  'Vos outils, pas les miens : votre dépôt Git, votre gestion de tickets, vos maquettes Figma, vos environnements de recette.',
  'Méthode agile si vous la pratiquez, cadrage classique sinon.',
  'Accessibilité RGAA, responsive et performance : conseil en amont, livraison conforme avec les rapports d’audit.',
  'Données structurées et contenus lisibles par les moteurs et les assistants IA, pour que vos pages soient citées.',
  'Tracking GTM et GA4 branché proprement, côté code comme côté conteneur.',
  'Marque blanche : vos clients ne voient que vous, je reste joignable pour vos équipes.',
]

export const STEPS = [
  {
    title: 'On parle de votre activité, pas de technique',
    text: 'Un échange d’une heure sur ce que le site doit produire : des demandes de devis, des ventes, du temps gagné. Le devis arrive sous 24 heures, détaillé poste par poste.',
  },
  {
    title: 'Maquettes avec Ludovic, graphiste UI/UX',
    text: 'Si votre projet le demande, Ludovic dessine les écrans et les parcours. Vous validez avant la première ligne de code.',
  },
  {
    title: 'Développement par étapes, visibles en pré-production',
    text: 'Vous suivez l’avancement sur un serveur de recette et vous testez chaque fonctionnalité au fur et à mesure.',
  },
  {
    title: 'Mise en ligne et formation',
    text: 'Je migre, je configure le domaine et les e-mails, puis je vous forme à l’administration du site. Vous êtes autonome sur vos contenus.',
  },
  {
    title: 'Maintenance et hébergement',
    text: 'Le site vit sur mon infrastructure, surveillé et sauvegardé. Un problème technique trouve une réponse 7 jours sur 7.',
  },
]

export const FAQ = [
  {
    question: 'WordPress, Prestashop ou sur mesure : comment choisir ?',
    answer:
      'WordPress convient à un site vitrine ou éditorial que vous administrez vous-même. Prestashop ou WooCommerce s’imposent pour vendre en ligne. Symfony ou React prennent le relais quand le besoin est un outil métier, un extranet ou une application qu’aucun CMS ne couvre proprement. Je vous dis lequel convient avant le devis, et je refuse de surdimensionner.',
  },
  {
    question: 'Travaillez-vous avec des agences ?',
    answer:
      'Oui, une grande partie de mon activité se fait pour des agences de communication et des studios, souvent en marque blanche. Je m’intègre à leurs outils et à leurs méthodes, et je prends en charge le développement, l’hébergement ou la maintenance selon ce qu’elles souhaitent déléguer.',
  },
  {
    question:
      'Pouvez-vous reprendre un site que je n’ai pas fait développer par vous ?',
    answer:
      'Oui. Je commence par un audit du code, des mises à jour en retard et de l’hébergement, puis je vous propose soit une remise à niveau, soit une refonte si le socle ne tient plus. L’audit de votre site est gratuit.',
  },
  {
    question: 'Où sont hébergés les sites ?',
    answer:
      'Sur des serveurs situés en France, que j’administre moi-même : supervision 24h/24, sauvegardes chaque nuit, protection CrowdSec. Aucune donnée ne part chez un hébergeur américain.',
  },
  {
    question: 'Que couvre la maintenance ?',
    answer:
      'Les mises à jour du CMS, du thème et des extensions, testées avant d’être appliquées, les sauvegardes, la surveillance de disponibilité, les correctifs de sécurité et un délai d’intervention garanti. Les évolutions fonctionnelles sont chiffrées à part.',
  },
  {
    question: 'Faites-vous aussi des applications mobiles ?',
    answer:
      'Oui, en React Native, pour iOS et Android, en général en complément d’un site ou d’une application web qui partage la même API.',
  },
]
