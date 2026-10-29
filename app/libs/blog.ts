import { cache } from 'react'

import { getMdxHeadings, getMdxReadingMinutes } from '@util/headings'
import { getAllMdxBy, getSingleMdx } from '@util/mdx'

import { RouteLink } from './router'

export const getSingleBlogItem = cache(async (slug: string) => {
  const item = await getSingleMdx<'blog'>('blog', slug)

  if (!item) {
    return null
  }

  return {
    post: {
      slug,
      title: item.metadata.title,
      date: item.metadata.date,
      category: item.metadata.category,
      thumbnail: item.metadata.thumbnail,
      content: item.content,
      excerpt: item.metadata.excerpt ?? '',
      headings: getMdxHeadings('blog', slug),
      readingMinutes: getMdxReadingMinutes('blog', slug),
      seo: {
        title: item.metadata.seoTitle ?? item.metadata.title,
        metaDesc: item.metadata.excerpt,
      },
    },
  }
})

export const getBlogItems = cache(
  async (
    limit: number = -1,
    sort: 'random' | 'date' = 'date',
    excludeSlug?: string,
    category?: string
  ) => {
    const items = await getAllMdxBy({
      frontmatterKey: 'date',
      type: 'blog',
      filterKey: category ? 'category' : 'title',
      filterValue: category,
      currentSlug: excludeSlug,
      limit,
      sort,
    })

    return items.map((item) => ({
      title: item.title,
      slug: item.slug,
      thumbnail: item.frontmatter.thumbnail,
      excerpt: item.frontmatter.excerpt,
      date: item.frontmatter.date,
      category: item.frontmatter.category,
      readingMinutes: getMdxReadingMinutes('blog', item.slug),
    }))
  }
)

type NextStep = { title: string; text: string; href: string; label: string }

export type BlogCategory = { name: string; slug: string; nextStep?: NextStep }

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'WordPress',
    slug: 'wordpress',
    nextStep: {
      title: 'Ce problème sur votre site WordPress ?',
      text: 'Les procédures de ce blog sont celles que j’applique sur les 150 sites que je maintiens. Si vous préférez que quelqu’un s’en charge, les forfaits couvrent les mises à jour, la sécurité et ce genre de correctifs.',
      href: RouteLink.prestationTmaWordPress,
      label: 'La maintenance WordPress',
    },
  },
  {
    name: 'PrestaShop',
    slug: 'prestashop',
    nextStep: {
      title: 'Une boutique Prestashop à faire suivre ?',
      text: 'Modules, montées de version, erreurs du back-office : les forfaits de maintenance Prestashop couvrent ce travail, avec un délai d’intervention garanti.',
      href: RouteLink.prestationTmaPrestashop,
      label: 'La maintenance Prestashop',
    },
  },
  {
    name: 'Serveur',
    slug: 'serveur',
    nextStep: {
      title: 'Un serveur à surveiller ?',
      text: 'J’héberge et j’administre les sites que je maintiens sur mes serveurs en France, avec sauvegardes, supervision et CrowdSec. Ces procédures en font partie.',
      href: RouteLink.prestationHosting,
      label: 'L’hébergement infogéré',
    },
  },
  { name: 'SaaS', slug: 'saas' },
  { name: 'Navigateur', slug: 'navigateur' },
]

export const blogCategoryBySlug = (slug: string) =>
  BLOG_CATEGORIES.find((category) => category.slug === slug)

export const blogCategoryByName = (name?: string) =>
  BLOG_CATEGORIES.find((category) => category.name === name)
