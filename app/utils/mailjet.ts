import * as Sentry from '@sentry/nextjs'
import { captureApiError } from '@lib/sentry-config'

export class Mailjet {
  name: string

  email: string

  phone: string

  message: string

  referrer: string

  constructor(
    name: string,
    email: string,
    phone: string,
    message: string,
    referrer: string
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.message = message
    this.referrer = referrer
  }

  getToken() {
    return Buffer.from(
      `${process.env.MJ_APIKEY_PUBLIC}:${process.env.MJ_APIKEY_PRIVATE}`
    ).toString('base64')
  }

  getMessageBody() {
    const contentWithBreaks = this.message.replace(/\n/g, '<br />')

    return `<p>
            <strong>Provenant de :</strong> ${this.referrer}<br />
            <strong>Nom :</strong> ${this.name}<br />
            <strong>Email :</strong> ${this.email}<br />
            <strong>Téléphone :</strong> ${this.phone}<br />
            <strong>Message :</strong> ${contentWithBreaks}
          </p>`
  }

  prepareMailjetBody() {
    return JSON.stringify({
      Messages: [
        {
          From: {
            Email: 'pascal@inrage.fr',
            Name: 'Pascal GAULT',
          },
          To: [
            {
              Email: 'pascal@inrage.fr',
              Name: 'Pascal GAULT',
            },
          ],
          Subject: `[inRage] Demande de contact ${this.name}`,
          HTMLPart: this.getMessageBody(),
          ReplyTo: {
            Email: this.email,
            Name: this.name,
          },
        },
      ],
    })
  }

  async send() {
    Sentry.addBreadcrumb({
      category: 'email',
      message: 'Mailjet API Request',
      level: 'info',
      data: {
        service: 'mailjet',
        referrer: this.referrer,
      },
    })

    try {
      const response = await fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${this.getToken()}`,
          'Content-Type': 'application/json',
        },
        body: this.prepareMailjetBody(),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)

        captureApiError(
          new Error(
            `Mailjet API error: ${response.status} ${response.statusText}`
          ),
          {
            apiName: 'Mailjet',
            endpoint: '/v3.1/send',
            method: 'POST',
            statusCode: response.status,
            responseData: errorData,
          }
        )

        throw new Error('Mailjet API error')
      }

      Sentry.addBreadcrumb({
        category: 'email',
        message: 'Mailjet Email Sent Successfully',
        level: 'info',
      })

      return response
    } catch (error) {
      if (error instanceof Error && error.message === 'Mailjet API error') {
        throw error
      }

      captureApiError(error as Error, {
        apiName: 'Mailjet',
        endpoint: '/v3.1/send',
        method: 'POST',
      })

      throw new Error('Mailjet API error')
    }
  }
}
