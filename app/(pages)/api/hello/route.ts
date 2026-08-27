import { NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'

import { isAkismetSpam } from '@util/akismet'
import { Mailjet } from '@util/mailjet'

export async function POST(request: Request) {
  try {
    const { email, name, content, phone } = await request.json()

    if (!email || !name || !content || !phone) {
      throw new Error('Missing parameters')
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

    const mailjetApi = new Mailjet(
      name,
      email,
      phone,
      content,
      request.headers.get('referer') ?? ''
    )

    await mailjetApi.send()

    return NextResponse.json({ success: true, message: 'Message sent' })
  } catch (error) {
    Sentry.captureException(error, {
      tags: {
        'api.route': 'contact-form',
        'api.action': 'send-email',
      },
      contexts: {
        contact_form: {
          hasEmail: !!request,
          referrer: request.headers.get('referer'),
        },
      },
    })

    return new NextResponse(JSON.stringify({ message: 'Bad request' }), {
      status: 400,
    })
  }
}
