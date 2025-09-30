import React from 'react'
import { portfolioCategories } from '@/libs/portfolio'
import path from 'path'
import * as fs from 'node:fs'
import { portfolioTools } from '@lib/portfolio'

// Define interfaces for MDX metadata
export interface BaseMdxMetadata {
  title: string
  summary: string
  excerpt?: string
}

export interface PortfolioMdxMetadata extends BaseMdxMetadata {
  category: keyof typeof portfolioCategories
  categories?: Array<keyof typeof portfolioCategories>
  tools: Array<keyof typeof portfolioTools>
  website: string
  year: number
  actions: string[]
  image: {
    thumbnail: string
    large: string
  }
}

export interface BlogMdxMetadata extends BaseMdxMetadata {
  date: string
  thumbnail: string
  excerpt: string
}

export type MdxMetadata<T extends 'blog' | 'portfolio'> = T extends 'blog'
  ? BlogMdxMetadata
  : PortfolioMdxMetadata

export interface MdxResult<T extends 'blog' | 'portfolio'> {
  content: React.ComponentType
  metadata: MdxMetadata<T>
}

export interface MdxListItem<T extends 'blog' | 'portfolio'> {
  title: string
  slug: string
  frontmatter: MdxMetadata<T>
  sortValue: string | number
}

export async function getSingleMdx<T extends 'blog' | 'portfolio'>(
  type: T,
  slug: string
): Promise<MdxResult<T> | null> {
  try {
    const content = await import(`@/content/${type}/${slug}.mdx`)
    return {
      content: content.default,
      metadata: content.frontmatter as MdxMetadata<T>,
    }
  } catch {
    return null
  }
}

export async function getAllMdxSlugs(
  folder: string
): Promise<Array<{ slug: string; project: string }>> {
  const watchDirectory = path.join(process.cwd(), 'app', 'content', folder)

  // Get all files in the directory
  const files = fs.readdirSync(watchDirectory)

  // Filter only MDX files
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  // Extract category and project name from each file using dynamic import
  const result = await Promise.all(
    mdxFiles.map(async (file) => {
      // Get the project name (filename without extension)
      const project = file.replace(/\.mdx$/, '')

      // Import the MDX file to access frontmatter directly
      const content = await import(`@/content/${folder}/${project}.mdx`)

      // Access the category from frontmatter
      const frontmatter = content.frontmatter as { category?: string }
      if (!frontmatter || !frontmatter.category) return null

      return {
        slug: frontmatter.category,
        project,
      }
    })
  )

  // Filter out null entries and explicitly type the return value
  return result.filter(
    (item): item is { slug: string; project: string } => item !== null
  )
}

export interface GetRelatedMdxParams<
  T extends 'blog' | 'portfolio' = 'blog' | 'portfolio',
> {
  frontmatterKey: string
  type: T
  currentSlug?: string
  limit?: number
  filterValue?: string
  filterKey?: keyof BlogMdxMetadata | keyof PortfolioMdxMetadata
  sort?: 'date' | 'random'
}

export async function getAllMdxBy<T extends 'blog' | 'portfolio'>(
  params: GetRelatedMdxParams<T>
): Promise<MdxListItem<T>[]> {
  const {
    frontmatterKey,
    type,
    currentSlug,
    limit = -1,
    filterValue,
    filterKey,
    sort = 'date',
  } = params
  const watchDirectory = path.join(process.cwd(), 'app', 'content', type)

  // Get all files in the directory
  const files = fs.readdirSync(watchDirectory)

  // Filter only MDX files
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  // Extract category and project name from each file using dynamic import
  const result = await Promise.all(
    mdxFiles.map(async (file) => {
      // Get the slug name (filename without extension)
      const slug = file.replace(/\.mdx$/, '')

      // Import the MDX file to access frontmatter directly
      const content = await import(`@/content/${type}/${slug}.mdx`)

      // Access the category from frontmatter
      const frontmatter = content.frontmatter as MdxMetadata<T>

      if (!frontmatter || !(frontmatterKey in frontmatter)) return null

      if (filterKey && filterValue) {
        const key = filterKey as keyof typeof frontmatter
        if (key === 'category') {
          const categories = (frontmatter as PortfolioMdxMetadata).categories
          const primaryCategory = frontmatter[
            key
          ] as keyof typeof portfolioCategories

          if (
            categories &&
            categories.includes(filterValue as keyof typeof portfolioCategories)
          ) {
            return {
              title: content.frontmatter.title,
              slug,
              sortValue:
                frontmatter[frontmatterKey as keyof typeof frontmatter],
              frontmatter: content.frontmatter,
            }
          } else if (primaryCategory === filterValue) {
            return {
              title: content.frontmatter.title,
              slug,
              sortValue:
                frontmatter[frontmatterKey as keyof typeof frontmatter],
              frontmatter: content.frontmatter,
            }
          } else {
            return null
          }
        } else if (frontmatter[key] !== filterValue) {
          return null
        }
      }

      return {
        title: content.frontmatter.title,
        slug,
        sortValue: frontmatter[frontmatterKey as keyof typeof frontmatter],
        frontmatter: content.frontmatter,
      }
    })
  )

  // Filter out null entries and exclude the current slug if provided
  let filteredResults = result.filter(Boolean) as MdxListItem<T>[]

  if (currentSlug) {
    filteredResults = filteredResults.filter(
      (item) => item?.slug !== currentSlug
    )
  }

  // Sort the results based on the sort parameter
  const sortedResults = sortMdxBy<T>(filteredResults, sort)

  if (limit !== -1) {
    // If limit is -1, return all results
    return sortedResults.slice(0, limit)
  }

  return sortedResults
}

export function sortMdxBy<T extends 'blog' | 'portfolio'>(
  results: MdxListItem<T>[],
  sort: 'date' | 'random'
) {
  if (sort === 'random') {
    return [...results].sort(() => 0.5 - Math.random())
  }

  return [...results].sort((a, b) => {
    // Handle null or undefined values
    if (!a || !b) return 0
    if (a.sortValue === undefined || b.sortValue === undefined) return 0

    // Sort dates in descending order
    if (typeof a.sortValue === 'string' && typeof b.sortValue === 'string') {
      return b.sortValue.localeCompare(a.sortValue)
    }
    // Sort numbers in descending order
    if (typeof a.sortValue === 'number' && typeof b.sortValue === 'number') {
      return b.sortValue - a.sortValue
    }
    return 0
  })
}
