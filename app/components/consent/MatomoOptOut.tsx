'use client'

import { useEffect, useState } from 'react'

import { matomo } from '@lib/analytics'

type Tracker = { isUserOptedOut: () => boolean }

export default function MatomoOptOut() {
  const [optedOut, setOptedOut] = useState<boolean | null>(null)

  useEffect(() => {
    matomo(function (this: Tracker) {
      setOptedOut(this.isUserOptedOut())
    })
  }, [])

  if (optedOut === null) return null

  const toggle = () => {
    matomo(optedOut ? 'forgetUserOptOut' : 'optUserOut')
    setOptedOut(!optedOut)
  }

  return (
    <p className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={optedOut}
        className="button-outline min-h-11"
      >
        {optedOut
          ? 'Réactiver la mesure Matomo'
          : 'M’opposer à la mesure Matomo'}
      </button>
      <span role="status">
        {optedOut
          ? 'Vos visites ne sont plus mesurées par Matomo.'
          : 'Vos visites sont mesurées par Matomo.'}
      </span>
    </p>
  )
}
