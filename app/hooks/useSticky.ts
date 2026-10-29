import { useEffect, useRef, useState } from 'react'

export default function useSticky<T extends HTMLElement>() {
  const stickyRef = useRef<T>(null)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    let frame = 0
    const observe = () => {
      frame = 0
      if (!stickyRef.current) return
      setSticky(stickyRef.current.getBoundingClientRect().bottom <= 0)
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
    }
  }, [])

  return [stickyRef, sticky] as const
}
