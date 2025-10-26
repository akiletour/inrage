'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import { usePathname } from 'next/navigation'

export const useSentryContext = (context?: {
  page?: string
  section?: string
  tags?: Record<string, string>
  extra?: Record<string, unknown>
}) => {
  const pathname = usePathname()

  useEffect(() => {
    if (context?.page) {
      Sentry.setTag('page', context.page)
    }

    if (context?.section) {
      Sentry.setTag('section', context.section)
    }

    if (context?.tags) {
      Object.entries(context.tags).forEach(([key, value]) => {
        Sentry.setTag(key, value)
      })
    }

    if (context?.extra) {
      Sentry.setContext('page_context', context.extra)
    }

    Sentry.addBreadcrumb({
      category: 'navigation',
      message: `Navigated to ${pathname}`,
      level: 'info',
      data: {
        pathname,
        ...context,
      },
    })
  }, [pathname, context])
}

export const useSentryPerformance = (componentName: string) => {
  useEffect(() => {
    const transaction = Sentry.startInactiveSpan({
      name: `Component: ${componentName}`,
      op: 'react.component',
    })

    return () => {
      transaction?.end()
    }
  }, [componentName])
}