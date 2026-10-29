import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { getBlogItems } from '@lib/blog'
import { RouteLink } from '@lib/router'
import { formatDate } from '@util/date'

type BlogItem = Awaited<ReturnType<typeof getBlogItems>>[number]

export default function ArticleCard({
  article,
  i = 0,
  featured = false,
}: {
  article: BlogItem
  i?: number
  featured?: boolean
}) {
  const href = RouteLink.blogPost(article.slug)

  if (featured) {
    return (
      <Reveal>
        <Link
          href={href}
          className="home-card group grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12"
        >
          <span className="home-shot block overflow-hidden rounded-xl">
            <Image
              src={article.thumbnail}
              alt=""
              width={1190}
              height={530}
              className="h-auto w-full"
              sizes="(min-width: 1280px) 690px, (min-width: 768px) 60vw, 100vw"
              priority
            />
          </span>
          <span className="block">
            <span className="home-num block text-sm text-(--home-muted)">
              {article.category} · {formatDate(article.date)} ·{' '}
              {article.readingMinutes} min de lecture
            </span>
            <span className="home-card-title mt-3 block text-2xl font-semibold tracking-tight text-balance text-white md:text-4xl">
              {article.title}
            </span>
            <span className="mt-4 block leading-7 text-(--home-muted)">
              {article.excerpt}
            </span>
          </span>
        </Link>
      </Reveal>
    )
  }

  return (
    <Reveal i={i % 3} className="h-full">
      <Link href={href} className="home-card group flex h-full flex-col">
        <span className="home-shot block overflow-hidden rounded-xl">
          <Image
            src={article.thumbnail}
            alt=""
            width={595}
            height={265}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </span>
        <span className="home-num mt-4 block text-sm text-(--home-muted)">
          {article.category} · {formatDate(article.date)} ·{' '}
          {article.readingMinutes} min
        </span>
        <span className="home-card-title mt-2 block text-lg leading-snug font-medium text-white">
          {article.title}
        </span>
      </Link>
    </Reveal>
  )
}
