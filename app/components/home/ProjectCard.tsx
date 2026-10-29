'use client'

import { PointerEvent } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { RouteLink } from '@lib/router'

import { HomeProject } from './data'

function tilt(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return
  const r = e.currentTarget.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  e.currentTarget.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
  e.currentTarget.style.setProperty('--rx', `${(0.5 - y) * 10}deg`)
}

function untilt(e: PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty('--ry', '0deg')
  e.currentTarget.style.setProperty('--rx', '0deg')
}

export default function ProjectCard({ project }: { project: HomeProject }) {
  return (
    <Link
      href={RouteLink.portfolioProject(project.support.slug, project.slug)}
      className="home-tilt home-card group block"
      onPointerMove={tilt}
      onPointerLeave={untilt}
    >
      <div className="home-shot overflow-hidden rounded-xl">
        <Image
          src={`/images/portfolio/${project.thumbnail}`}
          alt=""
          width={257}
          height={400}
          className="h-auto w-full"
          sizes="(min-width: 768px) 25vw, 50vw"
        />
      </div>
      <div className="home-card-title mt-4 text-center text-base leading-5 text-white sm:text-xl">
        {project.title}
      </div>
      <div className="mt-1 text-center text-xs tracking-widest text-(--home-orange-text) uppercase">
        {project.support.title}
      </div>
    </Link>
  )
}
