import fs from 'node:fs'
import path from 'node:path'

export type Heading = { id: string; text: string }

const WORDS_PER_MINUTE = 200

const ENTITIES: Record<string, string> = {
  nbsp: ' ',
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
}

export function decodeEntities(text: string) {
  return text.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const code =
        entity[1]?.toLowerCase() === 'x'
          ? parseInt(entity.slice(2), 16)
          : parseInt(entity.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : match
    }
    return ENTITIES[entity.toLowerCase()] ?? match
  })
}

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

const sources = new Map<string, string>()

function readMdxSource(type: 'blog' | 'portfolio', slug: string) {
  const key = `${type}/${slug}`
  const cached = sources.get(key)
  if (cached !== undefined && process.env.NODE_ENV !== 'development') {
    return cached
  }
  const file = path.join(process.cwd(), 'app', 'content', type, `${slug}.mdx`)
  try {
    const source = fs.readFileSync(file, 'utf8')
    sources.set(key, source)
    return source
  } catch (error) {
    console.warn(`headings: unable to read ${file}`, error)
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
    const text = decodeEntities(
      (match[1] ?? '')
        .replace(/\*\*/g, '')
        .replace(/`/g, '')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    ).trim()
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
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
