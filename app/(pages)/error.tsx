'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Une erreur est survenue</h1>
        <p className="mb-8 text-gray-600">
          Nous nous excusons pour la gêne occasionnée.
        </p>
        <button
          onClick={() => reset()}
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
