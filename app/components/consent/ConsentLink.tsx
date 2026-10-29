'use client'

import { openConsent } from '@lib/consent'

export default function ConsentLink() {
  return (
    <button
      type="button"
      onClick={openConsent}
      className="inline-block py-1 text-left text-gray-light transition-colors hover:text-orange"
    >
      Gérer les cookies
    </button>
  )
}
