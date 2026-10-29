export const CONSENT_KEY = 'inrage-consent'
export const CONSENT_EVENT = 'inrage:consent-open'
export const CONSENT_MAX_AGE = 13 * 30 * 24 * 60 * 60 * 1000

export type ConsentChoice = { granted: boolean; at: number }

type ConsentState = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentChoice
    if (typeof parsed.granted !== 'boolean' || typeof parsed.at !== 'number') {
      return null
    }
    if (Date.now() - parsed.at > CONSENT_MAX_AGE) return null
    return parsed
  } catch {
    return null
  }
}

export function saveConsent(granted: boolean) {
  const choice: ConsentChoice = { granted, at: Date.now() }
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
  } catch {}
  const state: ConsentState = granted ? 'granted' : 'denied'
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push([
    'consent',
    'update',
    {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    },
  ])
  window.dataLayer.push({
    event: granted ? 'consent_granted' : 'consent_denied',
  })
  return choice
}

export function openConsent() {
  window.dispatchEvent(new Event(CONSENT_EVENT))
}
