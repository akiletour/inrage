import * as Sentry from '@sentry/nextjs'

import { captureApiError } from '@lib/sentry-config'
import { escapeMarkup } from '@util/escape'

type ContactNotification = {
  name: string
  email: string
  phone: string
  content: string
  referrer: string
  emailSent: boolean
}

const SLACK_TEXT_LIMIT = 2900

export async function notifySlack({
  name,
  email,
  phone,
  content,
  referrer,
  emailSent,
}: ContactNotification) {
  if (!process.env.SLACK_WEBHOOK_URL) {
    throw new Error('Slack webhook URL is not defined')
  }

  Sentry.addBreadcrumb({
    category: 'notification',
    message: 'Slack Webhook Request',
    level: 'info',
    data: {
      service: 'slack',
      type: 'contact_form',
      emailSent,
    },
  })

  const response = await fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'Demande de contact',
          },
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: content.slice(0, SLACK_TEXT_LIMIT),
            emoji: true,
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `*Identité* : ${escapeMarkup(name)}`,
            },
            {
              type: 'mrkdwn',
              text: `*E-mail* : ${escapeMarkup(email)}`,
            },
            {
              type: 'mrkdwn',
              text: `*Téléphone* : ${escapeMarkup(phone)}`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `*Depuis* : ${escapeMarkup(referrer)}`,
            },
            {
              type: 'mrkdwn',
              text: emailSent
                ? '✅ Email envoyé'
                : '⚠️ *Email non envoyé* (erreur Mailjet)',
            },
          ],
        },
      ],
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error')
    const error = new Error(
      `Slack Webhook error: ${response.status} ${response.statusText}`
    )

    captureApiError(error, {
      apiName: 'Slack',
      endpoint: 'webhook',
      method: 'POST',
      statusCode: response.status,
      responseData: errorText,
    })

    throw error
  }
}
