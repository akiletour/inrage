'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Script from 'next/script'

import { useCookieBannerOpen } from '@component/consent/CookieConsent'
import avatar from '@image/pascal-gault-avatar.jpg'

const CHATWOOT_URL = 'https://chat.inrage.tech'
const CHATWOOT_WEBSITE_TOKEN = 'LVDywwAJ2s1mSPJpg6AuxoxL'
const TEASER_DISMISSED_KEY = 'inrage-chat-teaser-dismissed'

type ChatwootWindow = Window & {
  chatwootSettings?: { hideMessageBubble: boolean }
  chatwootSDK?: {
    run: (options: { websiteToken: string; baseUrl: string }) => void
  }
  $chatwoot?: { toggle: (state?: 'open' | 'close') => void }
}

type InboxMembers = { payload?: { availability_status?: string }[] }

async function fetchIsOnline() {
  const response = await fetch(
    `${CHATWOOT_URL}/api/v1/widget/inbox_members?website_token=${CHATWOOT_WEBSITE_TOKEN}`
  )
  if (!response.ok) return false
  const { payload = [] } = (await response.json()) as InboxMembers
  return payload.some((member) => member.availability_status === 'online')
}

function toggleChat(state?: 'open') {
  ;(window as ChatwootWindow).$chatwoot?.toggle(state)
}

function ChatIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    </svg>
  )
}

export default function ChatwootWidget() {
  const bannerOpen = useCookieBannerOpen()
  const [ready, setReady] = useState(false)
  const [online, setOnline] = useState(false)
  const [teaserVisible, setTeaserVisible] = useState(false)

  useEffect(() => {
    const onReady = () => {
      setReady(true)
      setTeaserVisible(sessionStorage.getItem(TEASER_DISMISSED_KEY) === null)
      fetchIsOnline()
        .then(setOnline)
        .catch(() => setOnline(false))
    }
    window.addEventListener('chatwoot:ready', onReady)
    if ((window as ChatwootWindow).$chatwoot) onReady()
    return () => window.removeEventListener('chatwoot:ready', onReady)
  }, [])

  const hideTeaser = () => {
    sessionStorage.setItem(TEASER_DISMISSED_KEY, '1')
    setTeaserVisible(false)
  }

  const startChat = () => {
    hideTeaser()
    toggleChat('open')
  }

  return (
    <>
      <Script
        id="chatwoot"
        src={`${CHATWOOT_URL}/packs/js/sdk.js`}
        strategy="lazyOnload"
        onLoad={() => {
          const chatwootWindow = window as ChatwootWindow
          chatwootWindow.chatwootSettings = { hideMessageBubble: true }
          chatwootWindow.chatwootSDK?.run({
            websiteToken: CHATWOOT_WEBSITE_TOKEN,
            baseUrl: CHATWOOT_URL,
          })
        }}
      />
      {ready && !bannerOpen && (
        <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
          {teaserVisible ? (
            <section
              aria-label="Discuter avec Pascal"
              className="relative w-[22rem] max-w-[calc(100vw-2rem)] rounded-3xl border border-white/10 bg-gray-dark p-5 shadow-2xl shadow-black/50"
            >
              <button
                type="button"
                onClick={hideTeaser}
                aria-label="Masquer l’encart de discussion"
                className="absolute -top-3 -left-3 flex size-7 items-center justify-center rounded-full border border-white/10 bg-gray-darker text-gray-light transition-colors hover:text-white"
              >
                <span aria-hidden>×</span>
              </button>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">
                    Des questions ? Discutons !
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-sm text-gray-light">
                    <span
                      aria-hidden
                      className={`size-2.5 shrink-0 rounded-full ${online ? 'bg-green-500 ring-4 ring-green-500/20' : 'bg-gray'}`}
                    />
                    {online
                      ? 'Pascal est en ligne'
                      : 'Hors ligne, laissez un message'}
                  </p>
                </div>
                <Image
                  src={avatar}
                  alt="Pascal Gault"
                  width={44}
                  height={44}
                  className="size-11 shrink-0 rounded-full border-2 border-gray-dark"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={startChat}
                  aria-label="Ouvrir la discussion"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-darker text-white transition-colors hover:bg-black"
                >
                  <ChatIcon />
                </button>
                <button
                  type="button"
                  onClick={startChat}
                  className="flex-1 rounded-full bg-orange px-5 py-3 font-semibold text-gray-darker transition-colors hover:bg-white"
                >
                  Discuter avec Pascal
                </button>
              </div>
            </section>
          ) : (
            <button
              type="button"
              onClick={() => toggleChat()}
              aria-label="Ouvrir ou fermer la discussion"
              className="flex size-14 items-center justify-center rounded-full bg-orange text-gray-darker shadow-lg shadow-black/40 transition-colors hover:bg-white"
            >
              <ChatIcon />
            </button>
          )}
        </div>
      )}
    </>
  )
}
