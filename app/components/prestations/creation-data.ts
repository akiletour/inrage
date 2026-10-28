import { RouteLink } from '@lib/router'

export const CASES = [
  {
    title: 'Présenter votre activité et recevoir des demandes',
    text: 'Un site vitrine WordPress, avec un thème dessiné pour vous et construit sur Octa, ma base de thème publique. Vous modifiez vos pages avec les blocs Gutenberg sans toucher au code, et chaque page est pensée pour apparaître sur les recherches locales : « plombier La Rochelle », « cabinet comptable Charente-Maritime », ce que cherchent vraiment vos clients.',
    href: RouteLink.prestationWordPress,
    hrefText: 'Création de site WordPress',
  },
  {
    title: 'Vendre en ligne',
    text: 'WooCommerce quand la boutique accompagne un site de contenu, avec un catalogue de quelques dizaines à quelques centaines de références. Prestashop quand le catalogue est lourd, le B2B présent ou la logistique spécifique. J’ai migré Guédelon et Jemapub de Prestashop vers WooCommerce, et je fais aussi le chemin inverse quand c’est le bon choix.',
    href: RouteLink.prestationPrestashop,
    hrefText: 'Création de boutique en ligne',
  },
  {
    title: 'Un outil que les CMS ne couvrent pas',
    text: 'Extranet, espace client, gestion de devis, catalogue connecté à votre ERP, API pour vos partenaires : quand le besoin est un métier et pas une plaquette, je développe avec Symfony. Vous gardez la main sur les données et personne ne vous vend une licence.',
    href: RouteLink.prestationSymfony,
    hrefText: 'Développement Symfony',
  },
  {
    title: 'Une interface très rapide ou une application',
    text: 'React et Next.js pour un site qui doit charger instantanément ou une application web riche, React Native quand il faut une application iOS et Android en plus du site. Ce site que vous lisez est construit avec Next.js, son code est public.',
    href: RouteLink.prestationReact,
    hrefText: 'Développement React et Next.js',
  },
]

export const LOCAL_PROJECTS = [
  {
    slug: 'camping-la-mouette-rieuse',
    note: 'La Rochelle. Logo, charte graphique et site WordPress refaits ensemble.',
  },
  {
    slug: 'quadria',
    note: 'Refonte 2026 avec Octa : catalogue produits et parcours particuliers ou collectivités.',
  },
  {
    slug: 'biosalines',
    note: 'Île de Ré. Boutique WooCommerce pour un laboratoire de cosmétiques.',
  },
  {
    slug: 'santeenvironnement-nouvelleaquitaine',
    note: 'Nouvelle-Aquitaine. Portail éditorial avec filtres et cartographie.',
  },
  {
    slug: 'boutique-guedelon',
    note: 'Boutique migrée de Prestashop vers WooCommerce, multilingue.',
  },
  {
    slug: 'jemapub',
    note: 'Grilles tarifaires importées automatiquement, recherche par référence.',
  },
]

export const INCLUDED = [
  'Les maquettes, dessinées sur Figma ou Adobe XD par Ludovic Boussion, graphiste UI/UX, et validées avant le développement.',
  'Un thème sur mesure, pas un thème acheté : le code appartient à votre site et ne dépend d’aucun éditeur tiers.',
  'Un affichage correct sur téléphone, tablette et ordinateur, et une attention à l’accessibilité (RGAA) dès la maquette.',
  'La performance mesurée à chaque mise en ligne avec Lighthouse : vitesse, bonnes pratiques, référencement.',
  'Le référencement technique : balisage, données structurées, plan de site, redirections, pages lisibles par Google comme par les assistants IA.',
  'La formation à l’administration de votre site le jour de la mise en ligne, pour que vous soyez autonome sur vos contenus.',
  'Trois mois de garantie après la mise en ligne, puis la maintenance et l’hébergement en France si vous le souhaitez.',
]

export const NOT_INCLUDED = [
  'La rédaction des textes et les photos : ils viennent de vous, ou de rédacteurs et photographes de La Rochelle avec qui je travaille.',
  'Le référencement suivi et les campagnes Google Ads, confiés à un partenaire spécialisé que j’intègre au devis si besoin.',
]

export const PRICES = [
  {
    name: 'Site vitrine WordPress',
    price: '2 000 à 3 000 €',
    text: 'Cinq à dix gabarits de pages, maquettes, intégration, formulaire de contact, référencement technique, formation. La majorité des sites d’artisans, de cabinets et d’associations de La Rochelle se situent ici.',
  },
  {
    name: 'Boutique en ligne',
    price: 'à partir de 5 000 €',
    text: 'WooCommerce ou Prestashop, catalogue, paiement, livraison, e-mails transactionnels. Le prix monte avec les intégrations : logiciel de caisse, ERP, import de catalogue, multilingue.',
  },
  {
    name: 'Site ou application sur mesure',
    price: 'sur devis',
    text: 'Symfony, React ou React Native, chiffrés sur un cahier des charges que nous écrivons ensemble si vous n’en avez pas.',
  },
]

export const PRICE_FACTORS = [
  'Le nombre de gabarits de pages à concevoir et à intégrer, bien plus que le nombre de pages.',
  'Le design : maquettes réalisées avec vous, ou fournies par votre graphiste.',
  'Les fonctionnalités : prise de rendez-vous, espace client, boutique, liaison avec un logiciel existant.',
  'Les contenus : reprise d’un site existant, rédaction, photos, traduction.',
]

export const STEPS = [
  {
    title: 'Cadrage',
    text: 'Un échange sur votre activité, vos clients et ce que le site doit produire. Le devis arrive sous 24 heures, poste par poste.',
  },
  {
    title: 'Maquettes',
    text: 'Ludovic dessine les écrans sur Figma ou Adobe XD. Vous validez l’arborescence et le design avant la première ligne de code.',
  },
  {
    title: 'Développement',
    text: 'Le site se construit sur un serveur de pré-production où vous suivez l’avancement et testez chaque page. Comptez quelques semaines pour un site vitrine, un à trois mois pour une boutique.',
  },
  {
    title: 'Mise en ligne et formation',
    text: 'Migration, domaine, e-mails, redirections des anciennes adresses, puis une session pour vous rendre autonome sur l’administration.',
  },
  {
    title: 'Garantie, maintenance, hébergement',
    text: 'Trois mois de garantie, puis un forfait de maintenance et l’hébergement sur mes serveurs en France si vous le souhaitez.',
  },
]

export const FAQ = [
  {
    question: 'Combien coûte la création d’un site internet à La Rochelle ?',
    answer:
      'Un site vitrine WordPress se situe entre 2 000 et 3 000 €, une boutique en ligne démarre à 5 000 €, un site ou une application sur mesure se chiffre sur devis. Ces fourchettes couvrent les maquettes, le développement, le référencement technique et la formation. L’hébergement et la maintenance sont facturés à part, à l’année.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site internet ?',
    answer:
      'Quelques semaines pour un site vitrine WordPress entre le premier échange et la mise en ligne, un à trois mois pour une boutique selon le catalogue et les intégrations. Le planning est fixé au démarrage et vous suivez l’avancement sur un serveur de pré-production.',
  },
  {
    question: 'Freelance ou agence web : quelle différence pour mon site ?',
    answer:
      'Avec inRage, la personne qui vous répond est celle qui développe, héberge et maintient votre site. Pour le design, je travaille avec Ludovic Boussion, graphiste UI/UX, et pour le référencement avec un partenaire spécialisé. Vous avez l’étendue d’une agence avec un seul interlocuteur, et sans la marge d’intermédiaire.',
  },
  {
    question: 'WordPress, Prestashop ou sur mesure : comment choisir ?',
    answer:
      'WordPress pour un site vitrine ou éditorial que vous administrez vous-même, WooCommerce ou Prestashop pour vendre en ligne, Symfony ou React pour un outil métier ou une application. Je vous dis lequel convient avant le devis, et je refuse de surdimensionner.',
  },
  {
    question: 'Qui rédige les textes et fournit les photos ?',
    answer:
      'Vous connaissez votre activité mieux que personne : les contenus viennent de vous, et je vous indique ce dont chaque page a besoin. Si vous manquez de temps, je travaille avec des rédacteurs et photographes de La Rochelle.',
  },
  {
    question: 'Pouvez-vous reprendre un site existant plutôt que le refaire ?',
    answer:
      'Oui. Je commence par un audit gratuit du code, des mises à jour en retard et de l’hébergement, puis je vous propose une remise à niveau si le socle tient, ou une refonte s’il ne tient plus, en conservant les adresses des pages pour ne pas perdre votre référencement.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      'Le site est garanti pendant trois mois. Ensuite, vous pouvez le confier à un forfait de maintenance qui couvre les mises à jour, la sécurité et les sauvegardes, et l’héberger sur une infrastructure située en France que j’administre moi-même.',
  },
]
