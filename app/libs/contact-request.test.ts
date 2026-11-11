import { describe, expect, it } from 'vitest'

import {
  handleContactRequest,
  type ContactChannels,
  type ContactRequest,
  type Delivery,
} from './contact-request'

const facts = { ip: '203.0.113.7', userAgent: 'test', referrer: '/contact' }

const contact = {
  name: 'Ada',
  email: 'ada@example.fr',
  phone: '0600000000',
  content: 'Bonjour',
}

function channels(overrides: Partial<ContactChannels> = {}) {
  const emails: ContactRequest[] = []
  const notifications: Array<{ request: ContactRequest; delivery: Delivery }> =
    []

  return {
    emails,
    notifications,
    isSpam: async () => false,
    sendEmail: async (request: ContactRequest) => {
      emails.push(request)
    },
    notify: async (
      request: ContactRequest,
      _facts: unknown,
      delivery: Delivery
    ) => {
      notifications.push({ request, delivery })
    },
    ...overrides,
  }
}

const failing = async () => {
  throw new Error('down')
}

describe('handleContactRequest', () => {
  it('delivers a valid contact request by e-mail and notification', async () => {
    const deps = channels()

    expect(await handleContactRequest(contact, facts, deps)).toEqual({
      status: 'delivered',
      emailSent: true,
      notified: true,
    })
    expect(deps.emails).toHaveLength(1)
    expect(deps.notifications[0]?.delivery).toEqual({
      emailSent: true,
      spamChecked: true,
    })
  })

  it.each([
    ['a non-object payload', null],
    ['a non-string name', { ...contact, name: { a: 1 } }],
    ['a malformed e-mail', { ...contact, email: '<a>@b.fr' }],
    ['an empty message', { ...contact, content: '  ' }],
    ['an oversized message', { ...contact, content: 'x'.repeat(5001) }],
    ['an unknown variant', { ...contact, variant: 'other' }],
    ['an audit without a website', { ...contact, variant: 'audit' }],
  ])('rejects %s without contacting any channel', async (_label, payload) => {
    const deps = channels({ isSpam: failing })

    expect(await handleContactRequest(payload, facts, deps)).toEqual({
      status: 'invalid',
    })
    expect(deps.emails).toHaveLength(0)
    expect(deps.notifications).toHaveLength(0)
  })

  it('stops at spam without delivering', async () => {
    const deps = channels({ isSpam: async () => true })

    expect(await handleContactRequest(contact, facts, deps)).toEqual({
      status: 'spam',
    })
    expect(deps.emails).toHaveLength(0)
    expect(deps.notifications).toHaveLength(0)
  })

  it('lets the request through and flags it when the spam check is down', async () => {
    const deps = channels({ isSpam: failing })

    expect(await handleContactRequest(contact, facts, deps)).toMatchObject({
      status: 'delivered',
    })
    expect(deps.notifications[0]?.delivery.spamChecked).toBe(false)
  })

  it('still succeeds through the notification when the e-mail fails', async () => {
    const deps = channels({ sendEmail: failing })

    expect(await handleContactRequest(contact, facts, deps)).toEqual({
      status: 'delivered',
      emailSent: false,
      notified: true,
    })
    expect(deps.notifications[0]?.delivery.emailSent).toBe(false)
  })

  it('still succeeds through the e-mail when the notification fails', async () => {
    const deps = channels({ notify: failing })

    expect(await handleContactRequest(contact, facts, deps)).toEqual({
      status: 'delivered',
      emailSent: true,
      notified: false,
    })
  })

  it('reports the request undeliverable when both channels fail', async () => {
    const deps = channels({ sendEmail: failing, notify: failing })

    expect(await handleContactRequest(contact, facts, deps)).toEqual({
      status: 'undeliverable',
    })
  })

  it('builds an audit request from the website and an optional message', async () => {
    const deps = channels()
    const payload = {
      ...contact,
      variant: 'audit',
      website: 'exemple.fr',
      content: '',
    }

    await handleContactRequest(payload, facts, deps)

    expect(deps.emails[0]).toMatchObject({
      variant: 'audit',
      website: 'exemple.fr',
      content:
        "Demande d'audit gratuit\nSite à auditer : exemple.fr\n\nAucun message complémentaire.",
    })
  })
})
