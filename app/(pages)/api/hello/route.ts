import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'

import { isAkismetSpam } from '@util/akismet'
import { Mailjet } from '@util/mailjet'
import { notifySlack } from '@util/slack'

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/

function isText(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.trim() !== '' && value.length <= max
}

export async function POST(request: Request) {
  const referrer = request.headers.get('referer') ?? ''

  try {
    const { email, name, content, phone } = await request.json()

    if (
      !isText(name, 200) ||
      !isText(phone, 50) ||
      !isText(content, 5000) ||
      !isText(email, 254) ||
      !EMAIL_PATTERN.test(email)
    ) {
      throw new Error('Invalid parameters')
    }

    const isSpam = await isAkismetSpam(request, name, email, content)

    if (isSpam) {
      return new NextResponse(
        JSON.stringify({ message: 'Message marked as spam' }),
        {
          status: 422,
        }
      )
    }

    const emailSent = await new Mailjet(name, email, phone, content, referrer)
      .send()
      .then(
        () => true,
        () => false
      )

    const slackSent = await notifySlack({
      name,
      email,
      phone,
      content,
      referrer,
      emailSent,
    }).then(
      () => true,
      () => false
    )

    if (!emailSent && !slackSent) {
      throw new Error('Contact request could not be delivered')
    }

    return NextResponse.json({ success: true, message: 'Message sent' })
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        'api.route': 'contact-form',
        'api.action': 'send-email',
      },
      contexts: {
        contact_form: {
          referrer,
        },
      },
    })

    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    })
  }
}
