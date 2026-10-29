import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { getBlogItems } from '@lib/blog'
import { RouteLink } from '@lib/router'

export default async function ArticleCards({
  category,
  limit = 4,
  exclude,
}: {
  category: string
  limit?: number
  exclude?: string
}) {
  const items = await getBlogItems()
  const articles = items
    .filter((item) => item.category === category && item.slug !== exclude)
    .slice(0, limit)

  return (
    <ul className="mt-14 grid gap-4 md:grid-cols-2">
      {articles.map((article, i) => (
        <li key={article.slug}>
          <Reveal i={i} className="h-full">
            <Link
              href={`${RouteLink.blog}/${article.slug}`}
              className="home-card home-article home-glass grid h-full grid-cols-[112px_1fr] items-center gap-5 p-4 sm:grid-cols-[150px_1fr]"
            >
              <span className="home-article-media relative block aspect-[2.15/1] overflow-hidden rounded-lg">
                <Image
                  src={article.thumbnail}
                  alt=""
                  fill
                  sizes="150px"
                  className="home-article-img object-cover"
                />
              </span>
              <span className="home-card-title line-clamp-3 text-base leading-snug font-medium text-white sm:text-lg">
                {article.title}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
