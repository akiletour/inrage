import { describe, expect, it } from 'vitest'

import { linkClick } from './analytics'

describe('linkClick', () => {
  it('tracks a phone link as a phone click with its location', () => {
    expect(linkClick('tel:0682963889', 'footer')).toEqual({
      event: 'phone_click',
      params: { click_location: 'footer' },
      matomo: ['contact', 'phone_click', 'footer'],
    })
  })

  it('tracks links to the contact and audit pages as call-to-action clicks', () => {
    expect(linkClick('/contact', 'header')?.matomo).toEqual([
      'cta',
      'cta_click',
      'header /contact',
    ])
    expect(linkClick('/audit-site-internet-gratuit', 'page')?.params).toEqual({
      cta_location: 'page',
      cta_target: '/audit-site-internet-gratuit',
    })
  })

  it('ignores every other link', () => {
    expect(linkClick('/blog', 'header')).toBeNull()
    expect(linkClick('https://inrage.cloud', 'footer')).toBeNull()
  })
})
