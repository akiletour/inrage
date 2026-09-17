'use client'

import { useForm } from 'react-hook-form'
import { sendGTMEvent } from '@next/third-parties/google'
import * as Sentry from '@sentry/nextjs'

import Button from '@component/Button'
import { useFormState } from '@hook/useFormState'

type FormData = {
  name: string
  email: string
  content: string
  phone: string
  website?: string
}

type Props = {
  lg?: boolean
  variant?: 'contact' | 'audit'
}

interface SpamError extends Error {
  isSpam: boolean
}

function buildPayload(data: FormData, variant: Props['variant']) {
  if (variant !== 'audit') {
    return data
  }

  const { website, ...rest } = data
  const message = data.content?.trim()

  return {
    ...rest,
    content: [
      "Demande d'audit gratuit",
      `Site à auditer : ${website ?? ''}`,
      '',
      message || 'Aucun message complémentaire.',
    ].join('\n'),
  }
}

export default function ContactForm({
  lg = false,
  variant = 'contact',
}: Props) {
  const isAudit = variant === 'audit'
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const { state, submit, success, error: setError } = useFormState()

  const onSubmit = (formData: FormData) => {
    submit()
    const data = buildPayload(formData, variant)

    const sendSlackNotification = (emailSuccess: boolean) => {
      return fetch('/api/hello-slack', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          emailSent: emailSuccess,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Slack API error: ${response.status}`)
          }
          return response
        })
        .catch((err) => {
          Sentry.captureException(err, {
            tags: {
              component: 'ContactForm',
              action: 'slack-notification',
            },
          })
          throw err
        })
    }

    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((r) => {
        if (r.status === 422) {
          setError(
            'Votre message a été identifié comme spam. Veuillez réessayer.'
          )
          const spamError = new Error('Message marked as spam') as SpamError
          spamError.isSpam = true
          throw spamError
        }
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`)
        }
        return r.json()
      })
      .then(() => {
        success()
        reset()

        sendGTMEvent({
          event: 'contact_form_submit',
          form_type: variant,
          form_location: window.location.pathname,
          form_source: document.referrer || 'direct',
        })

        sendSlackNotification(true)
      })
      .catch((error) => {
        if ((error as SpamError).isSpam) {
          return
        }

        Sentry.captureException(error, {
          tags: {
            component: 'ContactForm',
            action: 'submit',
          },
          contexts: {
            form: {
              location: window.location.pathname,
            },
          },
        })

        sendSlackNotification(false)
          .then(() => {
            success()
            reset()

            sendGTMEvent({
              event: 'contact_form_submit',
              form_type: variant,
              form_location: window.location.pathname,
              form_source: document.referrer || 'direct',
            })
          })
          .catch(() => {
            setError(
              'Une erreur est survenue. Veuillez réessayer ultérieurement.'
            )
          })
      })
  }

  if (isAudit) {
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid gap-4">
          <div className="relative">
            <label htmlFor="audit-website" className="sr-only">
              Adresse de votre site
            </label>
            <input
              id="audit-website"
              className={`input-field ${
                errors.website ? 'border-red' : 'border-gray'
              }`}
              placeholder="Adresse de votre site (ex. monsite.fr)"
              type="text"
              inputMode="url"
              autoComplete="url"
              {...register('website', { required: true })}
            />
            {errors.website && (
              <span className="absolute text-red top-8 right-4 text-xs">
                Champ requis
              </span>
            )}
          </div>
          <div className="relative">
            <label htmlFor="audit-name" className="sr-only">
              Prénom et nom
            </label>
            <input
              id="audit-name"
              className={`input-field ${
                errors.name ? 'border-red' : 'border-gray'
              }`}
              placeholder="Prénom NOM"
              type="text"
              autoComplete="name"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="absolute text-red top-8 right-4 text-xs">
                Champ requis
              </span>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative">
              <label htmlFor="audit-email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="audit-email"
                className={`input-field ${
                  errors.email ? 'border-red' : 'border-gray'
                }`}
                placeholder="Votre adresse e-mail"
                type="email"
                autoComplete="email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="absolute text-red top-8 right-4 text-xs">
                  Champ requis
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="audit-phone" className="sr-only">
                Numéro de téléphone
              </label>
              <input
                id="audit-phone"
                className={`input-field ${
                  errors.phone ? 'border-red' : 'border-gray'
                }`}
                placeholder="Numéro de téléphone"
                type="tel"
                autoComplete="tel"
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <span className="absolute text-red top-8 right-4 text-xs">
                  Champ requis
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="audit-content" className="sr-only">
              Ce que vous aimeriez améliorer
            </label>
            <textarea
              id="audit-content"
              className="input-field min-h-[120px] border-gray"
              placeholder="Ce que vous aimeriez améliorer (facultatif)"
              {...register('content')}
            />
          </div>
        </div>

        {state.success && (
          <p className="mt-4 text-[#27ae60]" role="status">
            <span className="font-bold">Merci !</span> Votre demande est bien
            reçue. Je vous recontacte sous 24 heures pour caler l&apos;audit.
          </p>
        )}
        {state.error && (
          <p className="mt-4 text-red-600 font-bold" role="alert">
            {state.error}
          </p>
        )}

        <Button
          submit
          isLoading={state.loading}
          className="button mt-6 py-6 px-8 w-full"
        >
          Recevoir mon audit gratuit
        </Button>
        <p className="mt-3 text-xs text-gray text-center">
          Gratuit et sans engagement. Aucun accès à votre site n&apos;est
          nécessaire.
        </p>
      </form>
    )
  }

  return (
    <form className={!lg ? 'my-8' : ''} onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid gap-6 ${!lg && 'md:grid-cols-2'}`}>
        <div className="relative order-1">
          <input
            className={`input-field ${
              errors.name ? 'border-red' : 'border-gray'
            }`}
            placeholder="Prénom NOM"
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="absolute text-red top-8 right-4 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-3">
          <input
            className={`input-field ${
              errors.email ? 'border-red' : 'border-gray'
            }`}
            placeholder="Votre adresse e-mail"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="absolute text-red top-8 right-4 text-xs">
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-4">
          <input
            className={`input-field ${
              errors.phone ? 'border-red' : 'border-gray'
            }`}
            placeholder="Numéro de téléphone"
            type="tel"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="absolute text-red top-8 right-4 text-xs">
              Champ requis
            </span>
          )}
        </div>
        <div
          className={`md:row-span-3 order-10 ${!lg && 'md:order-2'} relative`}
        >
          <textarea
            className={`input-field min-h-[200px] h-full ${
              errors.content ? 'border-red' : 'border-gray'
            }`}
            placeholder="Laissez-moi un petit message"
            {...register('content', { required: true })}
          />
          {errors.content && (
            <span className="absolute text-red bottom-full mb-2 right-0 text-xs">
              Champ requis
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-end">
        {state.success && (
          <div className="md:mr-8 flex-1 text-center mb-4 md:mb-0 md:text-right text-[#27ae60]">
            <span className="font-bold underline">Merci !</span> Je vous
            répondrai très prochainement dès que j&apos;aurai pris connaissance
            de votre message.
          </div>
        )}
        {state.error && (
          <div className="md:mr-8 flex-1 text-center mb-4 md:mb-0 md:text-right text-red-600">
            <span className="font-bold">{state.error}</span>
          </div>
        )}
        <Button
          submit
          isLoading={state.loading}
          className="button py-6 px-8 w-full md:w-auto"
        >
          Envoyer mon message
        </Button>
      </div>
    </form>
  )
}
