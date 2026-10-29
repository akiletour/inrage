export const FEATURED = [
  {
    slug: 'quadria',
    note: 'Refonte du site WordPress avec Octa : parcours particuliers et collectivités, catalogue produits et fiches détaillées sur mesure.',
  },
  {
    slug: 'invoicer',
    note: 'Logiciel de facturation pour auto-entrepreneurs, édité par inRage : Symfony côté API, Next.js côté interface, Stripe Connect, Bridge et Pennylane.',
  },
  {
    slug: 'boutique-guedelon',
    note: 'Migration de Prestashop vers WooCommerce, boutique multilingue avec WPML et champs de personnalisation des produits.',
  },
  {
    slug: 'santeenvironnement-nouvelleaquitaine',
    note: 'Portail d’information sur la santé environnementale en Nouvelle-Aquitaine : filtres Ajax, cartographie et contenus structurés.',
  },
]

export const ARCHIVE_BEFORE = 2017

export const CATEGORY_CONTENT: Record<
  string,
  {
    expertise: { title: string; paragraphs: string[] }
    local: { title: string; paragraphs: string[] }
    links: Array<{ label: string; href: string }>
  }
> = {
  wordpress: {
    expertise: {
      title: 'Expertise WordPress à La Rochelle et en Charente-Maritime',
      paragraphs: [
        'Je développe sur WordPress depuis sa version 3, en 2010. Chaque site ci-dessus repose sur un thème écrit pour le client, jamais acheté, construit avec Sage puis avec Octa, le socle de thème que j’ai publié, et des blocs Gutenberg adaptés aux contenus à administrer. Les boutiques WooCommerce de la liste ont été créées ou migrées depuis Prestashop avec reprise des produits et des clients.',
        'Plus de 150 sites WordPress sont aujourd’hui sous maintenance inRage, dont la plupart ont été créés par d’autres : la liste ci-dessus ne montre que ceux que j’ai développés et que leurs propriétaires acceptent de voir publiés.',
      ],
    },
    local: {
      title: 'Pourquoi un développeur WordPress à La Rochelle',
      paragraphs: [
        'Basé à La Rochelle, je reçois sur rendez-vous et je me déplace en Charente-Maritime pour le cadrage, la formation à l’administration et le point annuel. Le reste se mène à distance, en visio et sur vos outils, comme pour les clients du reste de la France.',
        'Le même interlocuteur développe le site, l’héberge en France et le maintient. Le code est versionné et documenté, et le site vous appartient : pas d’abonnement à un constructeur de pages, pas de thème sous licence.',
      ],
    },
    links: [
      {
        label: 'Création de site WordPress',
        href: '/prestations/creation-site-web/site-wordpress',
      },
      {
        label: 'Maintenance WordPress',
        href: '/prestations/maintenance-site-internet/maintenance-wordpress',
      },
    ],
  },
  'application-web': {
    expertise: {
      title: 'Applications métier avec Symfony, React et Next.js',
      paragraphs: [
        'Quand le besoin ne rentre pas dans un CMS, je développe l’application : API Symfony, interface React ou Next.js, application mobile React Native. Invoicer, le logiciel de facturation que j’édite depuis 2017, et l’outil de picking d’entrepôt de Parapharmacie Moins Chère sont les deux exemples les plus complets de cette liste.',
        'Les projets les plus anciens de la catégorie sont des plateformes et des multisites Joomla réalisés entre 2014 et 2016, conservés en archives : ils documentent le parcours, pas l’offre actuelle.',
      ],
    },
    local: {
      title: 'Freelance ou renfort d’équipe',
      paragraphs: [
        'Une application se construit par lots, visibles sur une pré-production dès les premières semaines, avec un devis découpé poste par poste. Les maquettes sont dessinées par Ludovic Boussion, graphiste UI/UX du collectif, quand le projet le demande.',
        'Pour les agences et les équipes techniques, j’interviens aussi en renfort Symfony, React ou React Native, dans votre dépôt et vos outils, en marque blanche.',
      ],
    },
    links: [
      {
        label: 'Développement Symfony',
        href: '/prestations/creation-site-web/symfony',
      },
      { label: 'React, Next.js et React Native', href: '/prestations/react' },
    ],
  },
}
