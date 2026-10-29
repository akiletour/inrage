'use client'

import { useEffect, useRef } from 'react'

export default function ReadingProgress({ target }: { target: string }) {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const article = document.getElementById(target)
    const el = bar.current
    if (!article || !el) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = article.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
      el.style.transform = `scaleX(${total > 0 ? done / total : 1})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [target])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-white/10"
      aria-hidden
    >
      <div
        ref={bar}
        className="h-full origin-left bg-(--home-orange) will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
