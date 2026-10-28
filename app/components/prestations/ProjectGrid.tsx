import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink } from '@lib/router'

export type PortfolioProject = Awaited<
  ReturnType<typeof getPortfolioItems>
>[number]

export type AnnotatedProject = PortfolioProject & { note: string }

export function pickProjects(
  items: PortfolioProject[],
  wanted: Array<{ slug: string; note: string }>
): AnnotatedProject[] {
  return wanted
    .map((local) => {
      const item = items.find((candidate) => candidate.slug === local.slug)
      return item ? { ...item, note: local.note } : null
    })
    .filter((project) => project !== null)
}

export default function ProjectGrid({
  projects,
}: {
  projects: AnnotatedProject[]
}) {
  return (
    <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Reveal i={i}>
            <Link
              href={`${RouteLink.portfolio}/${project.support ? `${project.support.slug}/` : ''}${project.slug}`}
              className="home-card group block"
            >
              <span className="home-shot block overflow-hidden rounded-xl">
                <Image
                  src={`/images/portfolio/${project.thumbnail}`}
                  alt=""
                  width={257}
                  height={400}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 33vw, 50vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </span>
              <span className="home-card-title mt-4 block text-lg font-medium text-white">
                {project.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-(--home-muted)">
                {project.note}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
