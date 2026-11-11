import * as Sentry from '@sentry/nextjs'

import type { ContactRequest, RequestFacts } from '@lib/contact-request'
import { captureApiError } from '@lib/sentry-config'
import { escapeMarkup } from '@util/escape'

const OWNER = {
  Email: 'pascal@inrage.fr',
  Name: 'Pascal GAULT',
}

function subject(request: ContactRequest) {
  return request.variant === 'audit'
    ? `[inRage] Demande d'audit ${request.website}`
    : `[inRage] Demande de contact ${request.name}`
}

function htmlBody(request: ContactRequest, facts: RequestFacts) {
  const contentWithBreaks = escapeMarkup(request.content).replace(
    /\n/g,
    '<br />'
  )

  return `<p>
            <strong>Provenant de :</strong> ${escapeMarkup(facts.referrer)}<br />
            <strong>Nom :</strong> ${escapeMarkup(request.name)}<br />
            <strong>Email :</strong> ${escapeMarkup(request.email)}<br />
            <strong>Téléphone :</strong> ${escapeMarkup(request.phone)}<br />
            <strong>Message :</strong> ${contentWithBreaks}
          </p>`
}

export async function sendContactEmail(
  request: ContactRequest,
  facts: RequestFacts
) {
  Sentry.addBreadcrumb({
    category: 'email',
    message: 'Mailjet API Request',
    level: 'info',
    data: {
      service: 'mailjet',
      referrer: facts.referrer,
    },
  })

  const token = Buffer.from(
    `${process.env.MJ_APIKEY_PUBLIC}:${process.env.MJ_APIKEY_PRIVATE}`
  ).toString('base64')

  const response = await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Messages: [
        {
          From: OWNER,
          To: [OWNER],
          Subject: subject(request),
          HTMLPart: htmlBody(request, facts),
          ReplyTo: {
            Email: request.email,
            Name: request.name,
          },
        },
      ],
    }),
  }).catch((error: Error) => {
    captureApiError(error, {
      apiName: 'Mailjet',
      endpoint: '/v3.1/send',
      method: 'POST',
    })

    throw error
  })

  if (!response.ok) {
    const error = new Error(
      `Mailjet API error: ${response.status} ${response.statusText}`
    )

    captureApiError(error, {
      apiName: 'Mailjet',
      endpoint: '/v3.1/send',
      method: 'POST',
      statusCode: response.status,
      responseData: await response.json().catch(() => null),
    })

    throw error
  }

  Sentry.addBreadcrumb({
    category: 'email',
    message: 'Mailjet Email Sent Successfully',
    level: 'info',
  })
}
