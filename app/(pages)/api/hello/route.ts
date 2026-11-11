import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'

import { handleContactRequest } from '@lib/contact-request'
import { checkSpam } from '@util/akismet'
import { sendContactEmail } from '@util/mailjet'
import { notifySlack } from '@util/slack'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const facts = {
    ip:
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      '127.0.0.1',
    userAgent: request.headers.get('user-agent') ?? '',
    referrer: request.headers.get('referer') ?? '',
  }

  const outcome = await handleContactRequest(payload, facts, {
    isSpam: checkSpam,
    sendEmail: sendContactEmail,
    notify: notifySlack,
  })

  switch (outcome.status) {
    case 'invalid':
      return NextResponse.json({ message: 'Bad request' }, { status: 400 })
    case 'spam':
      return NextResponse.json(
        { message: 'Message marked as spam' },
        { status: 422 }
      )
    case 'undeliverable':
      Sentry.captureException(
        new Error('Contact request could not be delivered'),
        {
          tags: {
            'api.route': 'contact-form',
            'api.action': 'deliver',
          },
          contexts: {
            contact_form: {
              referrer: facts.referrer,
            },
          },
        }
      )

      return NextResponse.json({ message: 'Delivery failed' }, { status: 502 })
    case 'delivered':
      return NextResponse.json({ success: true, message: 'Message sent' })
  }
}
