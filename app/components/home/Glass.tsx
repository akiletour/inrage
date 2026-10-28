'use client'

import { MouseEvent, ReactNode } from 'react'

function spotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
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
