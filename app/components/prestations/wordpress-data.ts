import { RouteLink } from '@lib/router'

export const PRINCIPLES = [
  {
    title: 'Toujours sur mesure, jamais un thème acheté',
    text: 'Pas de thème du commerce, pas de Divi, pas d’Elementor, pas de constructeur de pages. Chaque site part d’Octa, ma base de thème publique sur GitHub, et reçoit un thème écrit pour votre maquette. Le résultat ressemble à votre entreprise, pas au modèle de dix mille autres sites, et il n’embarque pas trois mégaoctets de scripts qui ne servent à rien.',
    href: RouteLink.blogPost('octa-starter-wordpress-theme'),
    hrefText: 'Lire la présentation d’Octa',
  },
  {
    title: 'Des blocs Gutenberg natifs, à votre image',
    text: 'Je m’appuie sur l’éditeur de blocs de WordPress, celui qui est maintenu par le cœur du CMS, pas sur une surcouche. Vos blocs sont définis avec vous au cadrage : une bannière, une grille de services, un témoignage, une carte. Chacun respecte la charte, vous ne pouvez pas casser la mise en page, et le site reste compatible avec les prochaines versions de WordPress.',
    href: RouteLink.blogPost('creation-blocs-gutenberg-wordpress-sage-9'),
    hrefText: 'Voir comment je construis un bloc',
  },
  {
    title: 'WordPress depuis la version 3',
    text: 'Je développe sur WordPress depuis 2010 et la version 3, celle qui a introduit les types de contenus personnalisés. Quinze ans à en connaître les recoins : le cycle de chargement, les hooks, la base de données, les multisites, les migrations, les plantages à trois heures du matin. En quinze ans, je n’ai pas encore rencontré de besoin WordPress sans solution.',
  },
  {
    title: 'Léger, nettoyé, mesuré',
    text: 'Le minimum d’extensions, et seulement celles que je connais. Tout ce qui ne sert pas est retiré : scripts et styles chargés pour rien, images non redimensionnées, options inutiles, révisions qui gonflent la base. Feuilles de style et scripts sont compilés, les images converties automatiquement, et chaque page passe dans Lighthouse avant la livraison. Un site WordPress lent est presque toujours un site surchargé.',
  },
  {
    title: 'Sécurisé, sauvegardé, hébergé en France',
    text: 'Mises à jour de WordPress, du thème et des extensions testées avant d’être appliquées, connexion protégée, pare-feu et CrowdSec devant les serveurs, sauvegardes chaque nuit testées en restauration. Le site vit sur mes serveurs en France. Plus de 150 sites, WordPress pour la plupart, sont suivis de cette façon.',
    href: RouteLink.prestationTmaWordPress,
    hrefText: 'La maintenance WordPress',
  },
  {
    title: 'Toute la chaîne, par la même personne',
    text: 'Spécifications, maquettes avec Ludovic, développement, référencement technique, hébergement, maintenance : rien n’est sous-traité à un inconnu. Ce cadre complet s’adapte à toutes les conditions, un site de cinq pages comme un portail régional, une agence qui impose ses outils comme un commerçant qui n’a jamais ouvert une administration.',
    href: RouteLink.prestations,
    hrefText: 'Toutes les prestations',
  },
]

export const LOCAL_PROJECTS = [
  {
    slug: 'quadria',
    note: 'Refonte 2026 sur Octa : catalogue produits, fiches détaillées et parcours par public.',
  },
  {
    slug: 'santeenvironnement-nouvelleaquitaine',
    note: 'Portail éditorial pour la Nouvelle-Aquitaine : filtres, agenda, cartographie.',
  },
  {
    slug: 'camping-la-mouette-rieuse',
    note: 'La Rochelle. Identité visuelle et site vitrine refaits ensemble.',
  },
  {
    slug: 'effy-proschool',
    note: 'Site de formation pour une entité d’Emil Frey France.',
  },
  {
    slug: 'ashler-manson',
    note: 'Site vitrine sur mesure, blocs Gutenberg dédiés.',
  },
  {
    slug: 'graphiste-romain-ouvrard',
    note: 'La Rochelle. Portfolio de graphiste, thème Gutenberg sur mesure.',
  },
]

export const WOOCOMMERCE_PROJECTS = [
  {
    slug: 'biosalines',
    note: 'Île de Ré. Cosmétiques, boutique WooCommerce sur Sage.',
  },
  {
    slug: 'boutique-guedelon',
    note: 'Migration de Prestashop vers WooCommerce, boutique multilingue.',
  },
  {
    slug: 'jemapub',
    note: 'Import automatique des grilles tarifaires, recherche par référence.',
  },
]

export const METHOD = [
  {
    title: 'Cadrage et arborescence',
    text: 'Nous listons les pages, les contenus que vous devrez modifier seul et ceux qui restent fixes. C’est là que se décident les blocs Gutenberg et les champs ACF dont vous aurez besoin. Devis sous 24 heures.',
  },
  {
    title: 'Maquettes',
    text: 'Ludovic Boussion, graphiste UI/UX, dessine les écrans sur Figma ou Adobe XD. Vous validez avant la première ligne de code.',
  },
  {
    title: 'Développement du thème',
    text: 'Le thème est écrit sur Octa, Sage et Blade, versionné sur Git. Chaque fonctionnalité terminée est déployée automatiquement sur un serveur de pré-production protégé par mot de passe, visible par vous cinq minutes après.',
  },
  {
    title: 'Contenus et recette',
    text: 'Vous intégrez vos textes et vos images dans votre administration, je vérifie chaque page sur mobile et sur ordinateur, et je corrige ce qui ne va pas.',
  },
  {
    title: 'Mise en ligne, formation, garantie',
    text: 'Domaine, e-mails, redirections des anciennes adresses, certificat, plan de site envoyé à Google. Une session de formation, puis trois mois de garantie.',
  },
]

export const PRICES = [
  {
    name: 'Site vitrine WordPress',
    price: '2 000 à 3 000 €',
    text: 'Cinq à dix gabarits, maquettes, thème sur mesure, blocs Gutenberg, formulaire, référencement technique, formation. La plupart des artisans, cabinets et associations de La Rochelle sont dans cette fourchette.',
  },
  {
    name: 'Boutique WooCommerce',
    price: 'à partir de 5 000 €',
    text: 'Catalogue, paiement, livraison, e-mails de commande. Le prix monte avec les intégrations : logiciel de caisse, import de catalogue, multilingue.',
  },
  {
    name: 'Maintenance WordPress',
    price: 'forfait annuel',
    text: 'Mises à jour testées, sauvegardes, surveillance, délai d’intervention garanti. Détaillé sur la page maintenance.',
    href: RouteLink.prestationTmaWordPress,
  },
]

export const FAQ = [
  {
    question: 'Combien coûte un site WordPress à La Rochelle ?',
    answer:
      'Un site vitrine WordPress sur mesure se situe entre 2 000 et 3 000 €, maquettes, thème, blocs Gutenberg, référencement technique et formation compris. Une boutique WooCommerce démarre à 5 000 €. L’hébergement et la maintenance sont à part, à l’année. Le devis détaillé arrive sous 24 heures.',
  },
  {
    question: 'Combien de temps pour créer un site WordPress ?',
    answer:
      'Comptez quelques semaines entre le premier échange et la mise en ligne pour un site vitrine, le temps des maquettes, du développement et de l’intégration de vos contenus. Une boutique WooCommerce demande un à trois mois selon le catalogue.',
  },
  {
    question: 'Pourquoi ne pas utiliser un thème acheté ou Elementor ?',
    answer:
      'Un thème du commerce embarque des centaines d’options que vous n’utiliserez jamais et qui ralentissent le site. Un constructeur de pages vous rend dépendant d’une extension payante et complique chaque mise à jour. Un thème écrit pour votre maquette est plus rapide, plus simple à administrer et reste à vous.',
  },
  {
    question: 'Mon site WordPress est lent, que faire ?',
    answer:
      'Dans la majorité des cas, le site cumule un thème lourd, trop d’extensions et des images non optimisées sur un hébergement mutualisé. L’audit gratuit mesure votre site et vous dit s’il faut alléger ou refaire. Souvent, un nouveau thème sur mesure et un hébergement adapté suffisent.',
  },
  {
    question: 'Comment sécuriser un site WordPress ?',
    answer:
      'Mises à jour régulières de WordPress, du thème et des extensions, extensions limitées au strict nécessaire, mots de passe forts, pare-feu et sauvegardes testées. C’est ce que couvre le forfait de maintenance, avec une surveillance qui me prévient avant que vous ne vous en rendiez compte.',
  },
  {
    question: 'Pourrai-je modifier mon site moi-même ?',
    answer:
      'Oui, c’est le principe. Vos pages se modifient dans l’éditeur WordPress avec des blocs conçus pour votre charte, et vous êtes formé le jour de la mise en ligne. Vous ajoutez une page, une actualité ou un produit sans me solliciter.',
  },
  {
    question: 'WooCommerce ou Prestashop pour ma boutique ?',
    answer:
      'WooCommerce quand la boutique accompagne un site de contenu avec un catalogue de taille raisonnable. Prestashop quand le catalogue est lourd, le B2B présent ou la logistique spécifique. Je travaille sur les deux et je vous dis lequel convient avant le devis.',
  },
  {
    question: 'Travaillez-vous avec des agences sur WordPress ?',
    answer:
      'Oui, souvent en marque blanche : développement du thème à partir de vos maquettes, intégration dans vos outils, puis maintenance et hébergement si vous le souhaitez. Vos clients ne voient que vous.',
  },
]
