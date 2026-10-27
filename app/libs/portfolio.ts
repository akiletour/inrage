import { getAllMdxBy } from '@util/mdx'

export const portfolioCategories = {
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    icon: 'creation-wordpress.webp',
    intro:
      'Sites vitrines, portfolios et boutiques WooCommerce développés sur WordPress avec un thème sur mesure, pour des entreprises de La Rochelle, de Charente-Maritime et de toute la France. Chaque fiche décrit le contexte du projet, ce qui a été développé et les outils utilisés.',
  },
  'application-web': {
    title: 'Application Web',
    slug: 'application-web',
    icon: 'developpement-application-web.webp',
    intro:
      'Applications métier, extranets, outils internes et plateformes développés avec Symfony, React et Next.js. Des projets où le site est un outil de travail : gestion de catalogue, logistique, facturation, suivi d’activité.',
  },
  'e-commerce': {
    title: 'E-commerce',
    slug: 'e-commerce',
    icon: 'creation-ecommerce.svg',
    intro:
      'Boutiques en ligne Prestashop et WooCommerce, B2C et B2B : création, refonte, migration, import de catalogue et liaison avec les outils de gestion. Les fiches détaillent les intégrations réalisées et les contraintes de chaque catalogue.',
  },
}

export const portfolioTools = {
  'adobe-xd': {
    title: 'Adobe XD',
    icon: 'adobe-xd.png',
  },
  'google-map': {
    title: 'API Google Map',
    icon: 'api-google-map.svg',
  },
  prestashop: {
    title: 'PrestaShop',
    icon: 'prestashop.svg',
  },
  wordpress: {
    title: 'WordPress',
    icon: 'wordpress.svg',
  },
  figma: {
    title: 'Figma',
    icon: 'figma.svg',
  },
  react: {
    title: 'ReactJS',
    icon: 'reactjs.svg',
  },
  nextjs: {
    title: 'NextJS',
    icon: 'nextjs.svg',
  },
  sketch: {
    title: 'Sketch',
    icon: 'sketch.svg',
  },
  sage10: {
    title: 'Sage 10',
    icon: 'sage.svg',
  },
  sage9: {
    title: 'Sage 9',
    icon: 'sage.svg',
  },
  joomla: {
    title: 'Joomla',
    icon: 'joomla.svg',
  },
  woocommerce: {
    title: 'WooCommerce',
    icon: 'woocommerce.svg',
  },
}

export const getPortfolioCategories = async () => {
  return Object.values(portfolioCategories)
}

export const getPortfolioItems = async (
  limit: number = -1,
  category?: string,
  excludeSlug?: string,
  sort: 'random' | 'date' = 'date'
) => {
  const items = await getAllMdxBy({
    frontmatterKey: 'year',
    type: 'portfolio',
    limit,
    filterValue: category,
    filterKey: 'category',
    currentSlug: excludeSlug,
    sort,
  })

  return items.map(({ title, frontmatter, slug }) => ({
    title,
    slug,
    support:
      portfolioCategories[
        frontmatter.category as keyof typeof portfolioCategories
      ],
    thumbnail: frontmatter.image?.thumbnail || '',
  }))
}
