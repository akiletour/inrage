'use client'

import { useEffect, useRef } from 'react'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

import {
  linkClick,
  matomo,
  MATOMO_SITE_ID,
  MATOMO_URL,
  track,
} from '@lib/analytics'

function locate(link: Element) {
  if (link.closest('#nav-menu')) return 'header'
  if (link.closest('footer')) return 'footer'
  return 'page'
}

function onClick(event: MouseEvent) {
  const link =
    event.target instanceof Element ? event.target.closest('a[href]') : null
  if (!link) return
  const tracked = linkClick(link.getAttribute('href') ?? '', locate(link))
  if (tracked) track(tracked)
}

export default function MatomoTracker() {
  const pathname = usePathname()
  const previous = useRef<string | null>(null)

  useEffect(() => {
    const url = window.location.href
    if (previous.current === url) return
    if (previous.current === null) {
      matomo('setTrackerUrl', `${MATOMO_URL}/matomo.php`)
      matomo('setSiteId', MATOMO_SITE_ID)
      matomo('enableHeartBeatTimer')
    } else {
      matomo('setReferrerUrl', previous.current)
    }
    previous.current = url
    matomo('setCustomUrl', url)
    matomo('setDocumentTitle', document.title)
    matomo('trackPageView')
    matomo('enableLinkTracking')
  }, [pathname])

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <Script
      id="matomo"
      src={`${MATOMO_URL}/matomo.js`}
      strategy="afterInteractive"
    />
  )
}
