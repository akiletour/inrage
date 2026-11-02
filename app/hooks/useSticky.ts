import { useEffect, useRef, useState } from 'react'

export type StickyPhase = 'off' | 'on' | 'leaving'

const LEAVE_DURATION = 200

export default function useSticky<T extends HTMLElement>() {
  const stickyRef = useRef<T>(null)
  const [phase, setPhase] = useState<StickyPhase>('off')

  useEffect(() => {
    let frame = 0
    let leaveTimer = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observe = () => {
      frame = 0
      if (!stickyRef.current) return
      const isPast = stickyRef.current.getBoundingClientRect().bottom <= 0
      if (isPast) {
        window.clearTimeout(leaveTimer)
        leaveTimer = 0
        setPhase('on')
        return
      }
      setPhase((current) => {
        if (current !== 'on') return current
        if (reduced.matches) return 'off'
        if (!leaveTimer) {
          leaveTimer = window.setTimeout(() => {
            leaveTimer = 0
            setPhase((p) => (p === 'leaving' ? 'off' : p))
          }, LEAVE_DURATION)
        }
        return 'leaving'
      })
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(observe)
    }
    observe()
    document.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('orientationchange', schedule)

    return () => {
      document.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('orientationchange', schedule)
      if (frame) cancelAnimationFrame(frame)
      window.clearTimeout(leaveTimer)
    }
  }, [])

  return [stickyRef, phase] as const
}
