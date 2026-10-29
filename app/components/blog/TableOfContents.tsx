'use client'

import { useEffect, useState } from 'react'

import type { Heading } from '@util/headings'

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id)

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el) => el !== null)
    if (elements.length === 0) return
    const update = () => {
      const line = window.innerHeight * 0.3
      let current = elements[0]
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) current = el
      }
      setActive(current?.id)
    }
    let frame = 0
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0
          update()
        })
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [headings])

  return (
    <nav aria-label="Sommaire de l’article" className="lg:sticky lg:top-28">
      <p className="text-sm font-medium text-white">Dans cet article</p>
      <ol className="mt-4 space-y-2 border-l border-white/10">
        {headings.map((heading) => {
          const isActive = heading.id === active
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l pl-4 text-sm leading-6 transition-colors ${
                  isActive
                    ? 'border-(--home-orange) text-white'
                    : 'border-transparent text-(--home-muted) hover:border-(--home-orange) hover:text-white'
                }`}
              >
                {heading.text}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
