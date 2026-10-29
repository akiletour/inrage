import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { RouteLink } from '@lib/router'

import { PortfolioProject } from '@lib/portfolio'

export type FeaturedProject = PortfolioProject & { note: string }

export default function FeaturedCases({
  projects,
}: {
  projects: FeaturedProject[]
}) {
  return (
    <ul className="grid gap-8 md:grid-cols-2 md:gap-10">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Reveal i={i % 2} className="h-full">
            <Link
              href={RouteLink.portfolioProject(
                project.support.slug,
                project.slug
              )}
              className="home-card group grid h-full grid-cols-[38%_1fr] items-start gap-6 md:gap-8"
            >
              <span className="home-shot block overflow-hidden rounded-xl">
                <Image
                  src={`/images/portfolio/${project.large || project.thumbnail}`}
                  alt=""
                  width={649}
                  height={1149}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 20vw, 38vw"
                  loading="eager"
                />
              </span>
              <span className="block pt-1">
                <span className="home-num block text-sm text-(--home-muted)">
                  {project.year} · {project.support.title}
                </span>
                <span className="home-card-title mt-2 block text-2xl font-semibold tracking-tight text-balance text-white md:text-3xl">
                  {project.title}
                </span>
                <span className="mt-3 block leading-7 text-(--home-muted)">
                  {project.note}
                </span>
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
