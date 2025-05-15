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
  category: keyof typeof portfolioCategories // Restrict to valid keys of portfolioCategories
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
  // Add blog-specific metadata properties when needed
  date?: string
  author?: string
  tags?: string[]
}

export type MdxMetadata<T extends 'blog' | 'portfolio'> = T extends 'blog'
  ? BlogMdxMetadata
  : PortfolioMdxMetadata

export interface MdxResult<T extends 'blog' | 'portfolio'> {
  content: React.ComponentType
  metadata: MdxMetadata<T>
}

export async function getMdx<T extends 'blog' | 'portfolio'>(
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

export async function getAllMdxSlugs(folder: string) {
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

  // Filter out null entries
  return result.filter(Boolean)
}

export interface GetRelatedMdxParams {
  frontmatterKey: string
  type: string
  currentSlug?: string
  limit?: number
  category?: string
  sort?: 'date' | 'random'
}

export async function getRelatedMdx(params: GetRelatedMdxParams) {
  const {
    frontmatterKey,
    type,
    currentSlug,
    limit = -1,
    category,
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
      // Get the project name (filename without extension)
      const project = file.replace(/\.mdx$/, '')

      // Import the MDX file to access frontmatter directly
      const content = await import(`@/content/${type}/${project}.mdx`)

      // Access the category from frontmatter
      const frontmatter = content.frontmatter as {
        [key: string]:
          | string
          | number
          | string[]
          | { thumbnail: string; large: string }
      }
      if (!frontmatter || !frontmatter[frontmatterKey]) return null

      // Filter by category if provided
      if (category && frontmatter.category !== category) return null

      return {
        title: content.frontmatter.title,
        image: content.frontmatter.image.thumbnail,
        slug: project,
        support:
          portfolioCategories[
            content.frontmatter.category as keyof typeof portfolioCategories
          ],
        // Include the date or year for sorting
        sortValue: sort === 'date' ? (frontmatter.date || frontmatter.year) : undefined,
      }
    })
  )

  // Filter out null entries and exclude the current slug if provided
  let filteredResults = result.filter(Boolean) as Array<{
    title: string
    image: string
    slug: string
    support: typeof portfolioCategories[keyof typeof portfolioCategories]
    sortValue: string | number | string[] | { thumbnail: string; large: string } | undefined
  }>

  if (currentSlug) {
    filteredResults = filteredResults.filter(
      (item) => item.slug !== currentSlug
    )
  }

  // Sort the results based on the sort parameter
  let sortedResults

  if (sort === 'random') {
    // Randomize the results
    sortedResults = [...filteredResults].sort(() => 0.5 - Math.random())
  } else {
    // Sort by date in descending order
    sortedResults = [...filteredResults].sort((a, b) => {
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

  if (limit !== -1) {
    // If limit is -1, return all results
    return sortedResults.slice(0, limit)
  }

  return sortedResults
}
