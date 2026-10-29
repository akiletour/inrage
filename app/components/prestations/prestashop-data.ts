import { RouteLink } from '@lib/router'

export const SERVICES = [
  {
    title: 'Création de boutique Prestashop',
    text: 'Un thème écrit pour votre maquette, pas un thème acheté sur Addons et bricolé. Tunnel de commande, fiches produits, déclinaisons, moteur de recherche, transporteurs et moyens de paiement sont configurés pour votre activité, puis testés commande par commande avant la mise en ligne.',
  },
  {
    title: 'Modules Prestashop sur mesure',
    text: 'Quand le catalogue de modules ne couvre pas votre besoin, je développe le module. Il s’appuie sur les hooks de Prestashop et ne touche jamais au cœur du CMS, pour rester compatible avec les mises à jour. Un module écrit proprement se réinstalle sur une autre boutique sans réécriture.',
  },
  {
    title: 'Connecteurs ERP, caisse et marketplaces',
    text: 'J’ai relié Prestashop au logiciel de gestion LGPI d’une parapharmacie de 16 000 références, aux ERP Sollo et MVS d’un distributeur, et aux API de marketplaces pour une boutique multiboutique B2B et B2C. Stocks, prix, commandes et clients circulent dans les deux sens sans ressaisie.',
    href: RouteLink.portfolioProject('e-commerce', 'parapharmacie-moins-chere'),
    hrefText: 'Voir le projet Parapharmacie Moins Chère',
  },
  {
    title: 'Import et reprise de catalogue',
    text: 'L’intégration du catalogue est l’étape la plus longue d’une création ou d’une refonte. Mes outils d’import injectent catégories, produits, déclinaisons et images depuis un fichier CSV, Excel ou une API, et restent utilisables ensuite pour les mises à jour de stock et de prix.',
  },
  {
    title: 'Migration vers Prestashop 9',
    text: 'Les boutiques en 1.6, 1.7 ou 8 ne reçoivent plus de correctifs de sécurité et leurs modules cessent un à un d’être maintenus. En 2019 j’ai écrit un outil pour passer des boutiques de la 1.6 à la 1.7 sans repartir de zéro ; la même démarche s’applique à Prestashop 9 : catalogue, clients et commandes repris, thème et modules réécrits ou remplacés, bascule sur pré-production.',
  },
  {
    title: 'Performance, sécurité et maintenance',
    text: 'Cache, images, requêtes lourdes, modules qui ralentissent le tunnel : je mesure avant de corriger. Une fois en ligne, la maintenance Prestashop prend le relais avec les mises à jour, la surveillance du tunnel d’achat et les sauvegardes, sur mes serveurs en France ou sur les vôtres.',
    href: RouteLink.prestationTmaPrestashop,
    hrefText: 'La maintenance Prestashop',
  },
]

export const PROJECTS = [
  {
    slug: 'parapharmacie-moins-chere',
    note: '16 000 références, connecteur LGPI et marketplaces, outil de picking. Client depuis 2017.',
  },
  {
    slug: 'moloo',
    note: 'Multiboutique B2B et B2C, outils de gestion des commandes, API marketplaces.',
  },
  {
    slug: 'esc-distribution',
    note: 'Refonte de l’accueil et des fiches produits, connecteurs ERP Sollo et MVS.',
  },
]

export const CHOICE = [
  'Prestashop quand le catalogue est volumineux, avec beaucoup de déclinaisons, des tarifs par client ou par groupe, du B2B, un ERP ou un logiciel de caisse à relier.',
  'WooCommerce quand la boutique accompagne un site de contenu WordPress et que le catalogue reste simple à gérer.',
  'J’ai migré Guédelon et Jemapub de Prestashop vers WooCommerce parce que c’était le bon outil pour eux. Je ne vends pas Prestashop par principe.',
]

export const STEPS = [
  {
    title: 'Cadrage de la boutique',
    text: 'Catalogue, déclinaisons, transporteurs, paiements, taxes, outils à relier. C’est là que se décide Prestashop ou WooCommerce. Devis sous 24 heures.',
  },
  {
    title: 'Maquettes',
    text: 'Ludovic Boussion, graphiste UI/UX, dessine l’accueil, la catégorie, la fiche produit et le tunnel de commande sur Figma ou Adobe XD. Vous validez avant le développement.',
  },
  {
    title: 'Thème, modules et connecteurs',
    text: 'Développement sur une pré-production protégée, déployé automatiquement à chaque fonctionnalité terminée. Vous testez le tunnel avec de vraies commandes de test.',
  },
  {
    title: 'Catalogue',
    text: 'Import de vos références par fichier ou par API, contrôle des images, des déclinaisons et des prix, puis vérification des pages par échantillon.',
  },
  {
    title: 'Mise en ligne et suivi',
    text: 'Redirections des anciennes adresses, paiement en production, e-mails de commande, formation à l’administration. Trois mois de garantie, puis la maintenance si vous le souhaitez.',
  },
]

export const PRICES = [
  {
    name: 'Boutique Prestashop',
    price: 'à partir de 5 000 €',
    text: 'Thème sur mesure, tunnel configuré, import du catalogue, formation. Le prix monte avec les connecteurs, le multiboutique et le multilingue.',
  },
  {
    name: 'Module ou connecteur',
    price: 'sur devis',
    text: 'Chiffré sur la spécification de ce que le module doit faire, avec les cas limites écrits avant de commencer.',
  },
  {
    name: 'Maintenance Prestashop',
    price: 'forfait annuel',
    text: 'Mises à jour, sécurité, sauvegardes, surveillance du tunnel d’achat, délai d’intervention garanti.',
    href: RouteLink.prestationTmaPrestashop,
  },
]

export const FAQ = [
  {
    question: 'Prestashop ou WooCommerce pour ma boutique ?',
    answer:
      'Prestashop pour un catalogue structuré, des déclinaisons nombreuses, du B2B avec des tarifs par client ou une liaison avec un ERP. WooCommerce quand la boutique accompagne un site éditorial WordPress et que le catalogue reste simple. Je développe sur les deux, le choix se fait sur votre catalogue et vos outils, pas sur une préférence.',
  },
  {
    question: 'Combien coûte une boutique Prestashop ?',
    answer:
      'Une boutique Prestashop sur mesure démarre à 5 000 €, avec le thème, le tunnel configuré, l’import du catalogue et la formation. Les connecteurs ERP ou marketplaces, le multiboutique et le multilingue s’ajoutent sur devis. La maintenance est un forfait annuel séparé.',
  },
  {
    question: 'Pouvez-vous reprendre ma boutique Prestashop existante ?',
    answer:
      'Oui, qu’elle ait été créée par une agence, un freelance ou vous-même. Je commence par un état des lieux de la version, des modules et du thème, puis je propose soit une remise à niveau, soit une migration vers Prestashop 9 en conservant le catalogue, les clients et les commandes.',
  },
  {
    question: 'Comment mettre à jour Prestashop sans casser la boutique ?',
    answer:
      'Jamais directement en production. La mise à jour se fait d’abord sur une copie de la boutique, module par module, avec un test complet du tunnel de commande. Les modules abandonnés sont remplacés avant la bascule. Pour une 1.6 ou 1.7, il s’agit d’une migration vers Prestashop 9 plutôt que d’une simple mise à jour.',
  },
  {
    question:
      'Comment relier Prestashop à mon ERP, mon OMS ou mon logiciel de caisse ?',
    answer:
      'Par un connecteur développé pour votre logiciel : échange de fichiers planifié ou API, selon ce que l’outil permet. Je l’ai fait avec LGPI, Sollo, MVS et des API de marketplaces. Stocks, prix et commandes se synchronisent dans les deux sens, et un journal garde la trace de chaque échange.',
  },
  {
    question:
      'Ma boutique Prestashop est lente ou affiche une erreur 500, que faire ?',
    answer:
      'Une erreur 500 vient le plus souvent d’un module, d’une mise à jour PHP ou d’un thème incompatible ; une boutique lente d’un cache mal configuré, de modules qui chargent sur toutes les pages ou d’images trop lourdes. L’intervention ponctuelle sert à ça : diagnostic, correction, et un rapport de ce qui a été fait.',
  },
  {
    question: 'Travaillez-vous en sous-traitance pour des agences ?',
    answer:
      'Oui, en marque blanche : développement du thème à partir de vos maquettes, modules, connecteurs, migrations, puis maintenance si vous le souhaitez. Je m’intègre à vos outils et vos clients ne voient que vous.',
  },
  {
    question: 'Intervenez-vous à distance ?',
    answer:
      'Oui. Je suis basé à La Rochelle et la majorité de mes clients Prestashop sont ailleurs en France. Les échanges se font en visio, le suivi sur votre outil ou le mien, et je me déplace quand le projet le justifie.',
  },
]
