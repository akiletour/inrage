import * as Sentry from '@sentry/nextjs'
import { getSentryBaseConfig } from '@lib/sentry-config'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

Sentry.init({
  ...getSentryBaseConfig(),

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
      maskAllInputs: true,
    }),
    Sentry.browserTracingIntegration({
      enableInp: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: 'light',
      autoInject: false,
    }),
  ],

  replaysSessionSampleRate: IS_PRODUCTION ? 0.1 : 0,

  replaysOnErrorSampleRate: IS_PRODUCTION ? 1.0 : 0,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
