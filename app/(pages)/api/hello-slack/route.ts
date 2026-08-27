import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { captureApiError } from '@lib/sentry-config'

export async function POST(req: NextRequest) {
  try {
    const { email, name, content, phone, emailSent } = await req.json()

    if (!email || !name || !content || !phone) {
      throw new Error('Missing parameters')
    }

    if (!process.env.SLACK_WEBHOOK_URL) {
      return new NextResponse(
        JSON.stringify({ message: 'Slack webhook URL is not defined' }),
        {
          status: 500,
        }
      )
    }

    Sentry.addBreadcrumb({
      category: 'notification',
      message: 'Slack Webhook Request',
      level: 'info',
      data: {
        service: 'slack',
        type: 'contact_form',
        emailSent: emailSent ?? true,
      },
    })

    const emailStatus =
      emailSent === false
        ? '⚠️ *Email non envoyé* (erreur Mailjet)'
        : '✅ Email envoyé'

    const response = await fetch(process.env.SLACK_WEBHOOK_URL as string, {
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
              text: content,
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
                text: `*Identité* : ${name}`,
              },
              {
                type: 'mrkdwn',
                text: `*E-mail* : ${email}`,
              },
              {
                type: 'mrkdwn',
                text: `*Téléphone* : ${phone}`,
              },
            ],
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `*Depuis* : ${req.headers.get('referer')}`,
              },
              {
                type: 'mrkdwn',
                text: emailStatus,
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error')

      captureApiError(
        new Error(
          `Slack Webhook error: ${response.status} ${response.statusText}`
        ),
        {
          apiName: 'Slack',
          endpoint: 'webhook',
          method: 'POST',
          statusCode: response.status,
          responseData: errorText,
        }
      )

      throw new Error('Slack webhook failed')
    }

    return NextResponse.json({ success: true, message: 'Message sent' })
  } catch (error) {
    if (
      !(error instanceof Error && error.message === 'Slack webhook failed')
    ) {
      Sentry.captureException(error, {
        tags: {
          'api.name': 'Slack',
          'api.type': 'webhook',
        },
      })
    }

    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    })
  }
}
