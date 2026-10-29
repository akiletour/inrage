import { cache } from 'react'

import { getAllMdxBy } from '@util/mdx'

import { RouteLink } from './router'

type CategoryContent = {
  expertise: { title: string; paragraphs: string[] }
  local: { title: string; paragraphs: string[] }
  links: Array<{ label: string; href: string }>
}

type PortfolioCategory = {
  title: string
  slug: string
  icon: string
  intro: string
  prestation: { href: string; label: string }
  content?: CategoryContent
}

export const portfolioCategories = {
  wordpress: {
    title: 'WordPress',
    slug: 'wordpress',
    icon: 'creation-wordpress.webp',
    prestation: {
      href: RouteLink.prestationWordPress,
      label: 'Création de site WordPress',
    },
    content: {
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
          href: RouteLink.prestationWordPress,
        },
        {
          label: 'Maintenance WordPress',
          href: RouteLink.prestationTmaWordPress,
        },
      ],
    },
    intro:
      'Sites vitrines, portfolios et boutiques WooCommerce développés sur WordPress avec un thème sur mesure, pour des entreprises de La Rochelle, de Charente-Maritime et de toute la France. Chaque fiche décrit le contexte du projet, ce qui a été développé et les outils utilisés.',
  },
  'application-web': {
    title: 'Applications et plateformes',
    slug: 'application-web',
    icon: 'developpement-application-web.webp',
    prestation: {
      href: RouteLink.prestationSymfony,
      label: 'Applications métier avec Symfony',
    },
    content: {
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
          href: RouteLink.prestationSymfony,
        },
        {
          label: 'React, Next.js et React Native',
          href: RouteLink.prestationReact,
        },
      ],
    },
    intro:
      'Applications métier, extranets, outils internes et plateformes développés avec Symfony, React et Next.js. Des projets où le site est un outil de travail : gestion de catalogue, logistique, facturation, suivi d’activité.',
  },
  'e-commerce': {
    title: 'E-commerce',
    slug: 'e-commerce',
    icon: 'creation-ecommerce.svg',
    prestation: {
      href: RouteLink.prestationPrestashop,
      label: 'Création de boutique Prestashop et WooCommerce',
    },
    intro:
      'Boutiques en ligne Prestashop et WooCommerce, B2C et B2B : création, refonte, migration, import de catalogue et liaison avec les outils de gestion. Les fiches détaillent les intégrations réalisées et les contraintes de chaque catalogue.',
  },
} satisfies Record<string, PortfolioCategory>

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

function categoryOf(slug: string, key: string) {
  const category = portfolioCategories[key as keyof typeof portfolioCategories]
  if (!category) {
    throw new Error(`${slug}.mdx: unknown portfolio category "${key}"`)
  }
  return category
}

export const getPortfolioItems = cache(
  async (
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

    return items.map(({ title, frontmatter, slug }) => {
      const year = Number(frontmatter.year)
      if (!Number.isFinite(year)) {
        throw new Error(
          `${slug}.mdx: year "${frontmatter.year}" is not a number`
        )
      }
      return {
        title,
        slug,
        support: categoryOf(slug, frontmatter.category),
        thumbnail: frontmatter.image?.thumbnail || '',
        large: frontmatter.image?.large || '',
        year,
        excerpt: frontmatter.excerpt || '',
        website: frontmatter.website || '',
        categories: (frontmatter.categories ?? [frontmatter.category]).map(
          (key) => categoryOf(slug, key)
        ),
        tools: (frontmatter.tools ?? [])
          .map(
            (key) => portfolioTools[key as keyof typeof portfolioTools]?.title
          )
          .filter((tool) => tool !== undefined),
      }
    })
  }
)

export type PortfolioProject = Awaited<
  ReturnType<typeof getPortfolioItems>
>[number]

export function pickProjects<T extends { slug: string }>(
  items: PortfolioProject[],
  wanted: T[]
) {
  return wanted.map((entry) => {
    const item = items.find((candidate) => candidate.slug === entry.slug)
    if (!item) {
      throw new Error(
        `pickProjects: no portfolio project with slug "${entry.slug}"`
      )
    }
    return { ...item, ...entry }
  })
}
