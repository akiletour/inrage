'use client'

import { MouseEvent, ReactNode } from 'react'

let frame = 0

function spotlight(e: MouseEvent<HTMLElement>) {
  if (frame) return
  const el = e.currentTarget
  const x = e.clientX
  const y = e.clientY
  frame = requestAnimationFrame(() => {
    frame = 0
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${x - r.left}px`)
    el.style.setProperty('--my', `${y - r.top}px`)
  })
}

export default function Glass({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`home-glass ${className}`} onMouseMove={spotlight}>
      {children}
    </div>
  )
}
