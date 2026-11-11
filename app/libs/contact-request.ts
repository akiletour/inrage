export type ContactVariant = 'contact' | 'audit'

export type ContactRequest = {
  variant: ContactVariant
  name: string
  email: string
  phone: string
  content: string
  website?: string
}

export type RequestFacts = {
  ip: string
  userAgent: string
  referrer: string
}

export type Delivery = {
  emailSent: boolean
  spamChecked: boolean
}

export type ContactChannels = {
  isSpam: (request: ContactRequest, facts: RequestFacts) => Promise<boolean>
  sendEmail: (request: ContactRequest, facts: RequestFacts) => Promise<unknown>
  notify: (
    request: ContactRequest,
    facts: RequestFacts,
    delivery: Delivery
  ) => Promise<unknown>
}

export type ContactOutcome =
  | { status: 'invalid' }
  | { status: 'spam' }
  | { status: 'undeliverable' }
  | { status: 'delivered'; emailSent: boolean; notified: boolean }

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const CONTENT_LIMIT = 5000

function text(value: unknown, max: number) {
  return typeof value === 'string' && value.trim() !== '' && value.length <= max
    ? value
    : null
}

export function parseContactRequest(payload: unknown): ContactRequest | null {
  if (typeof payload !== 'object' || payload === null) {
    return null
  }

  const fields = payload as Record<string, unknown>
  const variant = fields.variant ?? 'contact'
  const name = text(fields.name, 200)
  const email = text(fields.email, 254)
  const phone = text(fields.phone, 50)

  if (!name || !email || !phone || !EMAIL_PATTERN.test(email)) {
    return null
  }

  if (variant === 'contact') {
    const content = text(fields.content, CONTENT_LIMIT)
    return content ? { variant, name, email, phone, content } : null
  }

  if (variant !== 'audit') {
    return null
  }

  const website = text(fields.website, 255)
  const message =
    typeof fields.content === 'string' ? fields.content.trim() : ''

  if (!website || message.length > CONTENT_LIMIT) {
    return null
  }

  return {
    variant,
    name,
    email,
    phone,
    website,
    content: [
      "Demande d'audit gratuit",
      `Site à auditer : ${website}`,
      '',
      message || 'Aucun message complémentaire.',
    ].join('\n'),
  }
}

export function requestTitle(request: ContactRequest) {
  return request.variant === 'audit'
    ? `Demande d'audit : ${request.website}`
    : 'Demande de contact'
}

const succeeded = (attempt: Promise<unknown>) =>
  attempt.then(
    () => true,
    () => false
  )

export async function handleContactRequest(
  payload: unknown,
  facts: RequestFacts,
  channels: ContactChannels
): Promise<ContactOutcome> {
  const request = parseContactRequest(payload)

  if (!request) {
    return { status: 'invalid' }
  }

  const verdict = await channels.isSpam(request, facts).then(
    (isSpam) => ({ checked: true, isSpam }),
    () => ({ checked: false, isSpam: false })
  )

  if (verdict.isSpam) {
    return { status: 'spam' }
  }

  const emailSent = await succeeded(channels.sendEmail(request, facts))
  const notified = await succeeded(
    channels.notify(request, facts, { emailSent, spamChecked: verdict.checked })
  )

  if (!emailSent && !notified) {
    return { status: 'undeliverable' }
  }

  return { status: 'delivered', emailSent, notified }
}
