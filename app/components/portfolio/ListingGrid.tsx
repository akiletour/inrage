import { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { PortfolioProject } from '@lib/portfolio'
import { RouteLink } from '@lib/router'

export default function ListingGrid<T extends PortfolioProject>({
  projects,
  muted = false,
  eager = 0,
  meta,
  className = '',
}: {
  projects: T[]
  muted?: boolean
  eager?: number
  meta?: (project: T) => ReactNode
  className?: string
}) {
  return (
    <ul
      className={`grid gap-x-5 gap-y-10 md:gap-x-8 ${
        muted ? 'grid-cols-3 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-3'
      } ${className}`}
    >
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Reveal i={i % 3}>
            <Link
              href={RouteLink.portfolioProject(
                project.support.slug,
                project.slug
              )}
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
                {meta ? meta(project) : project.year}
                {!meta && !muted && ` · ${project.support.title}`}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
