'use client'

import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { sendGTMEvent } from '@next/third-parties/google'
import { captureException } from '@lib/sentry-client'

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
  stacked?: boolean
  variant?: 'contact' | 'audit'
  onAnalyze?: (website: string) => void
}

export function formatWebsite(value: string) {
  return value
    .trim()
    .replace(/^https?:\/\//i, '')
    .replace(/\/+$/, '')
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
  stacked = false,
  variant = 'contact',
  onAnalyze,
}: Props) {
  const isAudit = variant === 'audit'
  const [step, setStep] = useState<1 | 2>(1)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    trigger,
    getValues,
    setFocus,
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
          captureException(err, {
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
            'Votre message a été identifié comme spam. Reformulez-le sans lien, ou appelez-moi au 06 82 96 38 89.'
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

        captureException(error, {
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
              'L’envoi a échoué. Réessayez dans un instant ou appelez-moi au 06 82 96 38 89.'
            )
          })
      })
  }

  if (isAudit) {
    const analyze = async () => {
      const valid = await trigger('website')
      if (!valid) {
        return
      }
      onAnalyze?.(formatWebsite(getValues('website') ?? ''))
      if (step === 1) {
        setStep(2)
        requestAnimationFrame(() => setFocus('name'))
      }
    }

    return (
      <form
        noValidate
        onSubmit={
          step === 1
            ? (event) => {
                event.preventDefault()
                analyze()
              }
            : handleSubmit(onSubmit)
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
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
              <span className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs">
                Champ requis
              </span>
            )}
          </div>
          {step === 1 && (
            <button
              type="button"
              onClick={analyze}
              className="button h-auto! min-h-[74px] px-6 whitespace-nowrap active:scale-[0.96] transition-[scale,background-color,color] duration-150"
            >
              Analyser mon site
            </button>
          )}
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${
            step === 2
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
          inert={step === 1}
        >
          <div className="overflow-hidden">
            <p className="mt-5 mb-3 text-sm text-gray-light">
              Parfait. Où dois-je vous envoyer le rapport ?
            </p>
            <div className="grid gap-3">
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
                  {...register('name', { required: step === 2 })}
                />
                {errors.name && (
                  <span className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs">
                    Champ requis
                  </span>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
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
                    {...register('email', {
                      required: step === 2,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    })}
                  />
                  {errors.email && (
                    <span className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs">
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
                    {...register('phone', { required: step === 2 })}
                  />
                  {errors.phone && (
                    <span className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs">
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
                  className="input-field min-h-[96px] border-gray"
                  placeholder="Ce que vous aimeriez améliorer (facultatif)"
                  {...register('content')}
                />
              </div>
            </div>

            {state.success && (
              <p className="mt-4 text-[#27ae60]" role="status">
                <span className="font-bold">Merci !</span> Votre demande est
                bien reçue. Je vous recontacte sous 24 heures pour caler
                l&apos;audit.
              </p>
            )}
            {state.error && (
              <p className="mt-4 text-red-300 font-bold" role="alert">
                {state.error}
              </p>
            )}

            <Button
              submit
              isLoading={state.loading || isSubmitting}
              className="button mt-5 py-6 px-8 w-full"
            >
              Recevoir mon audit gratuit
            </Button>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray">
          Aucun accès à votre site n&apos;est nécessaire.
        </p>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className={`relative order-1 ${stacked ? 'md:col-span-2' : ''}`}>
          <label htmlFor="contact-name" className="sr-only">
            Nom
          </label>
          <input
            id="contact-name"
            className={`input-field ${
              errors.name ? 'border-red' : 'border-gray'
            }`}
            placeholder="Prénom NOM"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span
              id="contact-name-error"
              className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs"
            >
              Champ requis
            </span>
          )}
        </div>

        <div className="relative order-3">
          <label htmlFor="contact-email" className="sr-only">
            Adresse e-mail
          </label>
          <input
            id="contact-email"
            className={`input-field ${
              errors.email ? 'border-red' : 'border-gray'
            }`}
            placeholder="Votre adresse e-mail"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            {...register('email', {
              required: 'Champ requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Adresse e-mail invalide',
              },
            })}
          />
          {errors.email && (
            <span
              id="contact-email-error"
              className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs"
            >
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="relative order-4">
          <label htmlFor="contact-phone" className="sr-only">
            Téléphone
          </label>
          <input
            id="contact-phone"
            className={`input-field ${
              errors.phone ? 'border-red' : 'border-gray'
            }`}
            placeholder="Numéro de téléphone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span
              id="contact-phone-error"
              className="pointer-events-none absolute text-red-300 top-8 right-4 text-xs"
            >
              Champ requis
            </span>
          )}
        </div>
        <div
          className={`order-10 relative ${stacked ? 'md:col-span-2' : 'md:row-span-3 md:order-2'}`}
        >
          <label htmlFor="contact-content" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-content"
            className={`input-field min-h-[200px] h-full ${
              errors.content ? 'border-red' : 'border-gray'
            }`}
            placeholder="Laissez-moi un petit message"
            aria-invalid={errors.content ? true : undefined}
            aria-describedby={
              errors.content ? 'contact-content-error' : undefined
            }
            {...register('content', { required: true })}
          />
          {errors.content && (
            <span
              id="contact-content-error"
              className="pointer-events-none absolute text-red-300 bottom-full mb-2 right-0 text-xs"
            >
              Champ requis
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-end">
        {state.success && (
          <div
            role="status"
            className="md:mr-8 flex-1 text-center mb-4 md:mb-0 md:text-right text-[#27ae60]"
          >
            <span className="font-bold underline">Merci !</span> Je vous
            répondrai très prochainement dès que j&apos;aurai pris connaissance
            de votre message.
          </div>
        )}
        {state.error && (
          <div
            role="alert"
            className="md:mr-8 flex-1 text-center mb-4 md:mb-0 md:text-right text-red-300"
          >
            <span className="font-bold">{state.error}</span>
          </div>
        )}
        <Button
          submit
          isLoading={state.loading || isSubmitting}
          className="button py-6 px-8 w-full md:w-auto"
        >
          Envoyer mon message
        </Button>
      </div>
    </form>
  )
}
