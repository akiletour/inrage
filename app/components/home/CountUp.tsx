'use client'

import { useEffect, useRef } from 'react'

type Props = {
  to: number
  from?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

function format(
  value: number,
  decimals: number,
  prefix: string,
  suffix: string
) {
  return (
    prefix +
    value.toLocaleString('fr-FR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix
  )
}

export default function CountUp({
  to,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.textContent = format(from, decimals, prefix, suffix)
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = format(
            from + (to - from) * eased,
            decimals,
            prefix,
            suffix
          )
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, from, decimals, prefix, suffix])

  return (
    <span ref={ref} className="home-num">
      {format(to, decimals, prefix, suffix)}
    </span>
  )
}
