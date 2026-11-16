import { RouteLink } from './router'

export const MATOMO_URL = 'https://tr.inrage.cloud'
export const MATOMO_SITE_ID = '2'

export type Tracked = {
  event: string
  params: Record<string, string>
  matomo: [category: string, action: string, name: string]
}

declare global {
  interface Window {
    _paq?: unknown[][]
  }
}

export function matomo(...command: unknown[]) {
  window._paq = window._paq || []
  window._paq.push(command)
}

export function track({ event, params, matomo: details }: Tracked) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
  matomo('trackEvent', ...details)
}

export function linkClick(href: string, location: string): Tracked | null {
  if (href.startsWith('tel:')) {
    return {
      event: 'phone_click',
      params: { click_location: location },
      matomo: ['contact', 'phone_click', location],
    }
  }
  if (href === RouteLink.contact || href === RouteLink.auditGratuit) {
    return {
      event: 'cta_click',
      params: { cta_location: location, cta_target: href },
      matomo: ['cta', 'cta_click', `${location} ${href}`],
    }
  }
  return null
}
