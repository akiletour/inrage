import { getAllMdxBy } from '@util/mdx'

export const portfolioCategories = {
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    icon: 'creation-wordpress.webp',
  },
  'application-web': {
    title: 'Application Web',
    slug: 'application-web',
    icon: 'developpement-application-web.webp',
  },
  'e-commerce': {
    title: 'E-commerce',
    slug: 'e-commerce',
    icon: 'creation-ecommerce.svg',
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
