import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN =
  'https://3cae5dbc5b710cdf00ae08542256b8f6@sentry.tech.inr.ag/3'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

export const getSentryBaseConfig = (): Sentry.BrowserOptions => ({
  dsn: SENTRY_DSN,

  environment: process.env.NODE_ENV || 'development',

  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || undefined,

  tracesSampleRate: IS_PRODUCTION ? 0.1 : 1.0,

  enableLogs: true,

  sendDefaultPii: false,

  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications',
    'Non-Error promise rejection captured',
    'cancelled',
    'timeout',
    'network error',
    'NetworkError',
    'fetch failed',
    'Load failed',
    'AbortError',
  ],

  denyUrls: [
    /extensions\//i,
    /^chrome:\/\//i,
    /^moz-extension:\/\//i,
    /^safari-extension:\/\//i,
  ],

  beforeSend(event, hint) {
    const error = hint.originalException

    if (error && typeof error === 'object' && 'message' in error) {
      const message = String(error.message).toLowerCase()
      if (
        message.includes('network') ||
        message.includes('timeout') ||
        message.includes('cancelled')
      ) {
        return null
      }
    }

    if (event.request?.url?.includes('/api/')) {
      if (event.request.data) {
        const data = event.request.data as Record<string, unknown>
        if (data.email) data.email = '[Filtered]'
        if (data.phone) data.phone = '[Filtered]'
        if (data.name) data.name = '[Filtered]'
        if (data.authorEmail) data.authorEmail = '[Filtered]'
        if (data.author) data.author = '[Filtered]'
      }

      if (event.request.headers) {
        delete event.request.headers['Authorization']
        delete event.request.headers['Cookie']
      }
    }

    if (event.exception?.values) {
      event.exception.values = event.exception.values.map((exception) => {
        if (exception.value) {
          exception.value = exception.value
            .replace(/\b[\w._%+-]+@[\w.-]+\.[A-Z|a-z]{2,}\b/gi, '[email]')
            .replace(/\b\d{10}\b/g, '[phone]')
            .replace(/\b\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\b/g, '[phone]')
        }
        return exception
      })
    }

    return event
  },

  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb.category === 'console' && IS_DEVELOPMENT) {
      return null
    }

    if (breadcrumb.category === 'fetch' || breadcrumb.category === 'xhr') {
      if (breadcrumb.data) {
        delete breadcrumb.data['Authorization']
        delete breadcrumb.data['Cookie']
      }
    }

    return breadcrumb
  },

  integrations: (integrations) => {
    return integrations.filter((integration) => {
      if (IS_DEVELOPMENT && integration.name === 'Breadcrumbs') {
        return false
      }
      return true
    })
  },
})

export const addSentryContext = (context: {
  tags?: Record<string, string>
  extra?: Record<string, unknown>
  user?: Sentry.User
}) => {
  if (context.tags) {
    Object.entries(context.tags).forEach(([key, value]) => {
      Sentry.setTag(key, value)
    })
  }

  if (context.extra) {
    Object.entries(context.extra).forEach(([key, value]) => {
      Sentry.setContext(key, value as Record<string, unknown>)
    })
  }

  if (context.user) {
    Sentry.setUser(context.user)
  }
}

export const captureApiError = (
  error: Error,
  context: {
    apiName: string
    endpoint?: string
    method?: string
    statusCode?: number
    responseData?: unknown
  }
) => {
  Sentry.withScope((scope) => {
    scope.setTag('api.name', context.apiName)
    scope.setTag('api.type', 'external')

    if (context.endpoint) {
      scope.setTag('api.endpoint', context.endpoint)
    }

    if (context.method) {
      scope.setTag('api.method', context.method)
    }

    if (context.statusCode) {
      scope.setTag('api.status_code', String(context.statusCode))
    }

    scope.setContext('api_details', {
      name: context.apiName,
      endpoint: context.endpoint,
      method: context.method,
      statusCode: context.statusCode,
      responseData: context.responseData,
    })

    Sentry.captureException(error)
  })
}

export const captureGraphQLError = (
  errors: unknown,
  query: string,
  variables?: Record<string, unknown>
) => {
  Sentry.withScope((scope) => {
    scope.setTag('api.name', 'WordPress')
    scope.setTag('api.type', 'graphql')

    scope.setContext('graphql_details', {
      query: query.substring(0, 200),
      variables: variables,
      errors: errors,
    })

    Sentry.captureException(
      new Error('GraphQL Error: ' + JSON.stringify(errors))
    )
  })
}