'use client'

import { captureException } from '@lib/sentry-client'
import { useEffect } from 'react'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    captureException(error)
  }, [error])

  return (
    <div className="flex min-h-svh items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Une erreur est survenue
        </h1>
        <p className="mb-8 text-gray">
          La page n’a pas pu s’afficher. Vous pouvez réessayer, revenir à
          l’accueil ou m’appeler au 06 82 96 38 89.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => reset()} className="button px-6">
            Réessayer
          </button>
          <Link href="/" className="button-outline">
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
