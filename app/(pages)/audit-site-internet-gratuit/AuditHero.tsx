'use client'

import { useState } from 'react'

import ContactForm from '@component/ContactForm'

import AuditPreview from './AuditPreview'

const PROMISES = [
  'Vitesse, sécurité, référencement',
  'Plan d’action priorisé',
  '30 minutes d’échange',
]

export default function AuditHero() {
  const [website, setWebsite] = useState<string | null>(null)
  const [runKey, setRunKey] = useState(0)

  const handleAnalyze = (value: string) => {
    setWebsite(value || null)
    setRunKey((key) => key + 1)
  }

  return (
    <div className="container relative grid gap-14 pt-8 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:pt-14 lg:pb-28">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1.5 text-xs uppercase tracking-widest text-orange shadow-[0_0_0_1px_rgba(229,126,33,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-orange" />
          Offert, sans engagement
        </p>
        <h1 className="mt-6 text-white font-bold text-balance leading-[1.02] tracking-tight text-5xl sm:text-6xl xl:text-7xl">
          Audit{' '}
          <span className="bg-linear-to-r from-orange to-[#f7b36b] bg-clip-text text-transparent">
            gratuit
          </span>{' '}
          de votre site internet
        </h1>
        <p className="mt-6 max-w-[52ch] text-xl text-gray-light text-pretty">
          Votre site est lent, vieillit ou ne vous amène plus de clients ?
          Donnez-moi son adresse : je l’analyse à la main et je vous remets un
          plan d’action clair.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white">
          {PROMISES.map((promise) => (
            <li key={promise} className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-orange"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              {promise}
            </li>
          ))}
        </ul>

        <div
          id="audit-form"
          className="mt-8 rounded-xl bg-gray-darker/80 p-5 sm:p-6 backdrop-blur-sm shadow-[0_0_0_1px_rgba(229,126,33,0.35),0_24px_64px_rgba(0,0,0,0.35)] scroll-mt-8"
        >
          <ContactForm variant="audit" onAnalyze={handleAnalyze} />
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-light">
          <span className="text-orange tracking-widest" aria-hidden="true">
            ★★★★★
          </span>
          <span>5,0 sur Google</span>
          <span aria-hidden="true" className="text-gray">
            ·
          </span>
          <span>Développeur web à La Rochelle depuis 2008</span>
        </p>
      </div>

      <div className="relative lg:pl-4 lg:self-start lg:sticky lg:top-10 lg:mt-28">
        <AuditPreview website={website} runKey={runKey} />
      </div>
    </div>
  )
}
