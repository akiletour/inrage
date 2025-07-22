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
  prestashop: {
    title: 'PrestaShop',
    slug: 'prestashop',
    icon: 'creation-prestashop.webp',
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

export const getLastProjectsBySupports = async (slug: string) => {
  return getAllMdxBy({
    frontmatterKey: 'category',
    type: 'portfolio',
    limit: 4,
    category: slug,
  })
}

export const getPortfolioCategories = async () => {
  return Object.values(portfolioCategories)
}
