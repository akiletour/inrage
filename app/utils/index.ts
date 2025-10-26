import { cache } from 'react'
import * as Sentry from '@sentry/nextjs'
import { captureGraphQLError } from '@lib/sentry-config'

export const getApi = process.env.WORDPRESS_API_URL as string

type HeaderType = {
  'Content-Type': string
  Authorization?: string
}

export const REVALIDATE = {
  ONE_DAY: 60 * 60 * 24,
  ONE_HOUR: 60 * 60,
  ONE_MINUTE: 60,
}

type VariableProps = {
  id?: string
  authorEmail?: string
  comment?: string
  author?: string
  parent?: string
}

export const fetcher = cache(
  async (query: string, variables: VariableProps = {}) => {
    const headers: HeaderType = { 'Content-Type': 'application/json' }

    Sentry.addBreadcrumb({
      category: 'graphql',
      message: 'WordPress GraphQL Request',
      level: 'info',
      data: {
        operationType: query.trim().split(' ')[0],
        hasVariables: Object.keys(variables).length > 0,
      },
    })

    try {
      const res = await fetch(getApi, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      })

      if (!res.ok) {
        throw new Error(
          `WordPress API HTTP error: ${res.status} ${res.statusText}`
        )
      }

      const data = await res.json()

      if (data.errors && data.errors.length > 0) {
        captureGraphQLError(data.errors, query, variables)
      }

      return data
    } catch (error) {
      Sentry.captureException(error, {
        tags: {
          'api.name': 'WordPress',
          'api.type': 'graphql',
        },
        contexts: {
          graphql: {
            query: query.substring(0, 200),
            variables,
          },
        },
      })
      throw error
    }
  }
)
