type Sdk = typeof import('@sentry/nextjs')

let sdk: Sdk | null = null
let loading: Promise<Sdk> | null = null
const pending: Array<(sentry: Sdk) => void> = []

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export function loadSentry() {
  if (!loading) {
    loading = Promise.all([
      import('@sentry/nextjs'),
      import('./sentry-config'),
    ]).then(([module, { getSentryBaseConfig }]) => {
      module.init({
        ...getSentryBaseConfig(),
        integrations: [
          module.browserTracingIntegration({ enableInp: true }),
          module.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
            maskAllInputs: true,
          }),
        ],
        replaysSessionSampleRate: IS_PRODUCTION ? 0.1 : 0,
        replaysOnErrorSampleRate: IS_PRODUCTION ? 1.0 : 0,
      })
      sdk = module
      pending.splice(0).forEach((callback) => callback(module))
      return module
    })
  }
  return loading
}

function withSentry(callback: (sentry: Sdk) => void) {
  if (sdk) {
    callback(sdk)
  } else {
    pending.push(callback)
    void loadSentry()
  }
}

export function captureException(
  error: unknown,
  context?: Parameters<Sdk['captureException']>[1]
) {
  withSentry((sentry) => sentry.captureException(error, context))
}

export function captureRouterTransitionStart(
  ...args: Parameters<Sdk['captureRouterTransitionStart']>
) {
  withSentry((sentry) => sentry.captureRouterTransitionStart(...args))
}
