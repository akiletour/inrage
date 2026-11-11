import { AkismetClient } from 'akismet-api'
import * as Sentry from '@sentry/nextjs'

import type { ContactRequest, RequestFacts } from '@lib/contact-request'
import { captureApiError } from '@lib/sentry-config'

const client = new AkismetClient({
  key: process.env.AKISMET_API_KEY as string,
  blog: 'https://www.inrage.fr',
})

export async function checkSpam(request: ContactRequest, facts: RequestFacts) {
  Sentry.addBreadcrumb({
    category: 'spam-check',
    message: 'Akismet Spam Check',
    level: 'info',
    data: {
      service: 'akismet',
    },
  })

  try {
    return await client.checkSpam({
      user_ip: facts.ip,
      user_agent: facts.userAgent,
      comment_author: request.name,
      comment_author_email: request.email,
      comment_content: request.content,
    })
  } catch (error) {
    captureApiError(error as Error, {
      apiName: 'Akismet',
      endpoint: '/spam-check',
      method: 'POST',
    })

    throw error
  }
}
