import * as Sentry from '@sentry/nextjs'

import {
  requestTitle,
  type ContactRequest,
  type Delivery,
  type RequestFacts,
} from '@lib/contact-request'
import { captureApiError } from '@lib/sentry-config'
import { escapeMarkup } from '@util/escape'

const SLACK_TEXT_LIMIT = 2900
const SLACK_HEADER_LIMIT = 150

export async function notifySlack(
  request: ContactRequest,
  facts: RequestFacts,
  { emailSent, spamChecked }: Delivery
) {
  const { name, email, phone, content } = request

  if (!process.env.SLACK_WEBHOOK_URL) {
    const error = new Error('Slack webhook URL is not defined')

    captureApiError(error, {
      apiName: 'Slack',
      endpoint: 'webhook',
      method: 'POST',
    })

    throw error
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
            text: requestTitle(request).slice(0, SLACK_HEADER_LIMIT),
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
              text: `*Depuis* : ${escapeMarkup(facts.referrer)}`,
            },
            {
              type: 'mrkdwn',
              text: emailSent
                ? '✅ Email envoyé'
                : '⚠️ *Email non envoyé* (erreur Mailjet)',
            },
            ...(spamChecked
              ? []
              : [
                  {
                    type: 'mrkdwn',
                    text: '⚠️ *Anti-spam indisponible*',
                  },
                ]),
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
