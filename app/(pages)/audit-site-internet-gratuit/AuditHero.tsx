'use client'

import { useState } from 'react'

import ContactForm from '@component/ContactForm'

import AuditPreview from './AuditPreview'

export default function AuditHero() {
  const [website, setWebsite] = useState<string | null>(null)
  const [runKey, setRunKey] = useState(0)

  const handleAnalyze = (value: string) => {
    setWebsite(value || null)
    setRunKey((key) => key + 1)
  }

  return (
    <div className="container grid gap-14 pt-10 pb-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20 lg:pt-16">
      <div>
        <h1 className="text-white font-light text-balance leading-[1.05] text-5xl sm:text-6xl">
          Audit <span className="font-bold text-orange">gratuit</span> de votre
          site internet
        </h1>
        <p className="mt-6 max-w-[48ch] text-xl text-gray-light text-pretty">
          Envoyez-moi l’adresse de votre site. Je le passe en revue moi-même,
          puis on en parle trente minutes, en visio ou autour d’un café à La
          Rochelle.
        </p>

        <div id="audit-form" className="mt-10 max-w-xl scroll-mt-8">
          <ContactForm variant="audit" onAnalyze={handleAnalyze} />
        </div>

        <p className="mt-6 text-sm text-gray">
          Noté 5,0 sur Google. Développeur web à La Rochelle depuis 2008.
        </p>
      </div>

      <div className="lg:self-start lg:sticky lg:top-10 lg:mt-4">
        <AuditPreview website={website} runKey={runKey} />
      </div>
    </div>
  )
}
