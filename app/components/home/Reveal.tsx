'use client'

import { CSSProperties, ReactNode, useEffect, useRef } from 'react'

type Props = {
  i?: number
  className?: string
  children: ReactNode
}

export default function Reveal({ i = 0, className = '', children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.setAttribute('data-in', '')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`home-reveal ${className}`}
      style={{ '--i': i } as CSSProperties}
    >
      {children}
    </div>
  )
}
