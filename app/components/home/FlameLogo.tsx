'use client'

import { useEffect, useRef } from 'react'

const PETALS = [0, 1, 2, 3, 4, 5]
const ASHES = 42

export default function FlameLogo({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let stop: (() => void) | undefined
    const frame = requestAnimationFrame(() => {
      import('./flame-intro').then(({ runFlameIntro }) => {
        if (!cancelled && root.current) stop = runFlameIntro(root.current)
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      stop?.()
    }
  }, [])

  return (
    <div
      ref={root}
      className={`home-flame relative ${className}`}
      aria-hidden
      style={{ aspectRatio: '119 / 128' }}
    >
      <span className="home-flame-flash" />
      <span className="home-flame-ring" />
      {Array.from({ length: ASHES }, (_, i) => (
        <span key={i} className="home-flame-ash" />
      ))}
      <div className="home-flame-stage absolute inset-0">
        {PETALS.map((i) => (
          <span
            key={i}
            data-petal={i}
            className="home-flame-wrap absolute inset-0"
          >
            <span
              className="home-flame-color home-flame-petal absolute inset-0"
              style={{
                backgroundImage: `url(/images/logo/petal-colored-${i}.svg)`,
              }}
            />
            <span
              className="home-flame-ghost home-flame-petal absolute inset-0"
              style={{
                backgroundImage: `url(/images/logo/petal-white-${i}.svg)`,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
