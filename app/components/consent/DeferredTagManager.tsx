'use client'

import { useEffect, useState } from 'react'

import { GoogleTagManager } from '@next/third-parties/google'

export default function DeferredTagManager({ gtmId }: { gtmId: string }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const start = () => setReady(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(start, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(start, 2500)
    return () => window.clearTimeout(id)
  }, [])

  if (!ready) return null

  return <GoogleTagManager gtmId={gtmId} />
}
