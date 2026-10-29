import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink } from '@lib/router'

export type ListingProject = Awaited<
  ReturnType<typeof getPortfolioItems>
>[number]

export default function ListingGrid({
  projects,
  muted = false,
  eager = 0,
}: {
  projects: ListingProject[]
  muted?: boolean
  eager?: number
}) {
  return (
    <ul
      className={`grid gap-x-5 gap-y-10 md:gap-x-8 ${
        muted ? 'grid-cols-3 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-3'
      }`}
    >
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Reveal i={i % 3}>
            <Link
              href={`${RouteLink.portfolio}/${project.support.slug}/${project.slug}`}
              className={`home-card group block ${muted ? 'opacity-70 transition-opacity hover:opacity-100' : ''}`}
            >
              <span className="home-shot block overflow-hidden rounded-xl">
                <Image
                  src={`/images/portfolio/${project.thumbnail}`}
                  alt=""
                  width={379}
                  height={671}
                  className="h-auto w-full"
                  sizes={
                    muted
                      ? '(min-width: 768px) 20vw, 33vw'
                      : '(min-width: 768px) 33vw, 50vw'
                  }
                  loading={i < eager ? 'eager' : 'lazy'}
                />
              </span>
              <span
                className={`home-card-title mt-4 block font-medium text-white ${muted ? 'text-sm' : 'text-lg'}`}
              >
                {project.title}
              </span>
              <span className="home-num mt-1 block text-sm leading-6 text-(--home-muted)">
                {project.year}
                {!muted && ` · ${project.support.title}`}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
