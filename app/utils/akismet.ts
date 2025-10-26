import { AkismetClient } from 'akismet-api'
import * as Sentry from '@sentry/nextjs'
import { captureApiError } from '@lib/sentry-config'

const Client = new AkismetClient({
  key: process.env.AKISMET_API_KEY as string,
  blog: 'https://www.inrage.fr',
})

let keyVerified = false
let keyValid = false

const verifyAkismetKey = async (): Promise<boolean> => {
  if (keyVerified) {
    return keyValid
  }

  try {
    keyValid = await Client.verifyKey()
    keyVerified = true

    if (!keyValid) {
      const error = new Error('Akismet API key is invalid')
      captureApiError(error, {
        apiName: 'Akismet',
        endpoint: '/verify-key',
        method: 'POST',
      })
    }

    return keyValid
  } catch (error) {
    keyVerified = true
    keyValid = false

    captureApiError(error as Error, {
      apiName: 'Akismet',
      endpoint: '/verify-key',
      method: 'POST',
    })

    return false
  }
}

export const isAkismetSpam = async (
  request: Request,
  author: string,
  email: string,
  content: string
): Promise<boolean> => {
  const isKeyValid = await verifyAkismetKey()

  if (!isKeyValid) {
    Sentry.addBreadcrumb({
      category: 'spam-check',
      message: 'Akismet key invalid - skipping spam check',
      level: 'warning',
    })
    return false
  }

  Sentry.addBreadcrumb({
    category: 'spam-check',
    message: 'Akismet Spam Check',
    level: 'info',
    data: {
      service: 'akismet',
    },
  })

  try {
    const userAgent = request.headers.get('user-agent') ?? ''
    const userIp = request.headers.get('X-Forwarded-For') || '127.0.0.1'

    const isSpam = await Client.checkSpam({
      user_ip: userIp,
      user_agent: userAgent,
      comment_author: author,
      comment_author_email: email,
      comment_content: content,
    })

    if (isSpam) {
      return true
    }

    return false
  } catch (error) {
    captureApiError(error as Error, {
      apiName: 'Akismet',
      endpoint: '/spam-check',
      method: 'POST',
    })

    return true
  }
}
