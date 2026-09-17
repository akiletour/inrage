'use client'

import { PointerEvent, ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
}

export default function SpotlightCard({ children }: Props) {
  const ref = useRef<HTMLLIElement>(null)

  const handlePointerMove = (event: PointerEvent<HTMLLIElement>) => {
    const element = ref.current
    if (!element || event.pointerType !== 'mouse') {
      return
    }
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <li
      ref={ref}
      onPointerMove={handlePointerMove}
      className="group relative isolate overflow-hidden rounded-xl bg-gray-dark p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.09)] transition-shadow duration-150 hover:shadow-[0_0_0_1px_rgba(229,126,33,0.45)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(280px circle at var(--spot-x, 50%) var(--spot-y, 0%), rgba(229,126,33,0.16), transparent 70%)',
        }}
      />
      {children}
    </li>
  )
}
