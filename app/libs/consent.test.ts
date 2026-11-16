import { afterEach, describe, expect, it, vi } from 'vitest'

import { saveConsent } from './consent'

function stubWindow() {
  const gtag = vi.fn()
  const dataLayer: unknown[] = []
  vi.stubGlobal('window', {
    gtag,
    dataLayer,
    localStorage: { setItem: vi.fn() },
  })
  return { gtag, dataLayer }
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('saveConsent', () => {
  it('sends the update as a gtag command, the only form Tag Manager applies', () => {
    const { gtag, dataLayer } = stubWindow()

    saveConsent(true)

    expect(gtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
    expect(dataLayer).toEqual([{ event: 'consent_granted' }])
  })

  it('denies every signal when the visitor refuses', () => {
    const { gtag, dataLayer } = stubWindow()

    saveConsent(false)

    expect(gtag).toHaveBeenCalledWith('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
    expect(dataLayer).toEqual([{ event: 'consent_denied' }])
  })
})
