'use client'

import Script from 'next/script'

const CHATWOOT_URL = 'https://chat.inrage.tech'
const CHATWOOT_WEBSITE_TOKEN = 'LVDywwAJ2s1mSPJpg6AuxoxL'

type ChatwootWindow = Window & {
  chatwootSDK?: {
    run: (options: { websiteToken: string; baseUrl: string }) => void
  }
}

export default function ChatwootWidget() {
  return (
    <Script
      id="chatwoot"
      src={`${CHATWOOT_URL}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onLoad={() => {
        ;(window as ChatwootWindow).chatwootSDK?.run({
          websiteToken: CHATWOOT_WEBSITE_TOKEN,
          baseUrl: CHATWOOT_URL,
        })
      }}
    />
  )
}
