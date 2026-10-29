import fs from 'node:fs'
import path from 'node:path'

export type Heading = { id: string; text: string }

export function slugifyHeading(text: string) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function headingText(children: unknown): string {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }
  if (Array.isArray(children)) {
    return children.map(headingText).join('')
  }
  if (children && typeof children === 'object' && 'props' in children) {
    const props = (children as { props?: { children?: unknown } }).props
    return headingText(props?.children)
  }
  return ''
}

function readMdxSource(type: 'blog' | 'portfolio', slug: string) {
  const file = path.join(process.cwd(), 'app', 'content', type, `${slug}.mdx`)
  try {
    return fs.readFileSync(file, 'utf8')
  } catch {
    return ''
  }
}

function stripSource(source: string) {
  return source
    .replace(/^---[\s\S]*?---/, '')
    .replace(/^import .*$/gm, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
}

export function getMdxHeadings(type: 'blog' | 'portfolio', slug: string) {
  const source = readMdxSource(type, slug)
    .replace(/^---[\s\S]*?---/, '')
    .replace(/```[\s\S]*?```/g, '')
  const headings: Heading[] = []
  for (const match of source.matchAll(/^##\s+(.+?)\s*$/gm)) {
    const text = (match[1] ?? '')
      .replace(/\*\*/g, '')
      .replace(/`/g, '')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .trim()
    if (text) {
      headings.push({ id: slugifyHeading(text), text })
    }
  }
  return headings
}

export function getMdxReadingMinutes(type: 'blog' | 'portfolio', slug: string) {
  const words = stripSource(readMdxSource(type, slug))
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
