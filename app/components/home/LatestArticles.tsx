import Image from 'next/image'
import Link from 'next/link'

import { getBlogItems } from '@lib/blog'
import { RouteLink } from '@lib/router'
import { formatDate } from '@util/date'

import Reveal from './Reveal'

export default async function LatestArticles() {
  const [featured, ...others] = await getBlogItems(4, 'date')
  if (!featured) return null

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
      <Reveal>
        <Link
          href={RouteLink.blogPost(featured.slug)}
          className="home-card home-article home-glass flex h-full flex-col"
        >
          <div className="home-article-media relative aspect-[2.15/1] overflow-hidden">
            <Image
              src={featured.thumbnail}
              alt=""
              fill
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="home-article-img object-cover"
            />
            <span className="home-chip absolute top-4 left-4">
              {featured.category}
            </span>
          </div>
          <div className="flex grow flex-col p-7">
            <time
              dateTime={featured.date}
              className="text-xs tracking-widest text-(--home-orange-text) uppercase"
            >
              {formatDate(featured.date)}
            </time>
            <h3 className="home-card-title mt-3 text-2xl font-semibold tracking-tight text-balance text-white md:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-4 line-clamp-3 leading-7 text-(--home-muted)">
              {featured.excerpt}
            </p>
            <span className="home-arrow mt-auto inline-flex items-center gap-2 pt-6 font-medium text-white">
              Lire l’article <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </Reveal>
      <div className="flex flex-col gap-4">
        {others.map((article, i) => (
          <Reveal key={article.slug} i={i + 1} className="grow">
            <Link
              href={RouteLink.blogPost(article.slug)}
              className="home-card home-article home-glass grid h-full grid-cols-[112px_1fr] items-center gap-5 p-4 sm:grid-cols-[150px_1fr]"
            >
              <div className="home-article-media relative aspect-[2.15/1] overflow-hidden rounded-lg">
                <Image
                  src={article.thumbnail}
                  alt=""
                  fill
                  sizes="150px"
                  className="home-article-img object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-widest uppercase">
                  <span className="text-(--home-orange-text)">
                    {article.category}
                  </span>
                  <time dateTime={article.date} className="text-(--home-muted)">
                    {formatDate(article.date)}
                  </time>
                </div>
                <h3 className="home-card-title mt-2 line-clamp-2 text-base leading-snug font-medium text-white sm:text-lg">
                  {article.title}
                </h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
