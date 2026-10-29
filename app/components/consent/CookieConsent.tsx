'use client'

import { useSyncExternalStore } from 'react'

import Link from 'next/link'

import { CONSENT_EVENT, readConsent, saveConsent } from '@lib/consent'
import { RouteLink } from '@lib/router'

let forcedOpen = false
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  const onOpen = () => {
    forcedOpen = true
    listener()
  }
  listeners.add(listener)
  window.addEventListener(CONSENT_EVENT, onOpen)
  return () => {
    listeners.delete(listener)
    window.removeEventListener(CONSENT_EVENT, onOpen)
  }
}

function isOpen() {
  return forcedOpen || readConsent() === null
}

export default function CookieConsent() {
  const open = useSyncExternalStore(subscribe, isOpen, () => false)

  if (!open) return null

  const choose = (granted: boolean) => {
    saveConsent(granted)
    forcedOpen = false
    listeners.forEach((listener) => listener())
  }

  return (
    <section
      aria-label="Cookies de mesure d’audience"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-gray-darker/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <div className="container flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8">
        <p className="flex-1 text-sm leading-6 text-white/85">
          Ce site mesure son audience avec Google Analytics, via Google Tag
          Manager. Sans votre accord, aucun cookie de mesure n’est déposé.{' '}
          <Link href={`${RouteLink.legals}#cookies`} className="home-link">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="button-outline min-h-11 flex-1 md:flex-none"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="button min-h-11 flex-1 md:flex-none"
          >
            Accepter
          </button>
        </div>
      </div>
    </section>
  )
}
