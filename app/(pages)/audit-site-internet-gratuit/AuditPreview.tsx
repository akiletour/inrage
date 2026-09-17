'use client'

import { useEffect, useRef } from 'react'

const RADIUS = 26
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const INTRO_KEY = 'inrage-audit-intro'

const EXAMPLE_SCORES = [
  { label: 'Performance', value: 38 },
  { label: 'Sécurité', value: 52 },
  { label: 'Référencement', value: 61 },
  { label: 'Mobile', value: 74 },
]

function toneFor(value: number) {
  if (value < 50) {
    return '#e5484d'
  }
  if (value < 70) {
    return '#e57e21'
  }
  return '#30a46c'
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

type Props = {
  website: string | null
  runKey: number
}

function ExampleRings() {
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([])
  const arcRefs = useRef<Array<SVGCircleElement | null>>([])

  useEffect(() => {
    const paint = (index: number, progress: number) => {
      const score = EXAMPLE_SCORES[index]
      const number = numberRefs.current[index]
      const arc = arcRefs.current[index]
      if (!score || !number || !arc) {
        return
      }
      const current = Math.round(score.value * progress)
      number.textContent = String(current)
      arc.style.strokeDashoffset = String(
        CIRCUMFERENCE * (1 - (score.value / 100) * progress)
      )
    }

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    let seen = false
    try {
      seen = window.sessionStorage.getItem(INTRO_KEY) === '1'
      window.sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      seen = false
    }

    if (reduced || seen) {
      EXAMPLE_SCORES.forEach((_, index) => paint(index, 1))
      return
    }

    const duration = 1100
    const stagger = 140
    const delay = 350
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      let done = true
      EXAMPLE_SCORES.forEach((_, index) => {
        const elapsed = now - start - delay - index * stagger
        const t = Math.min(Math.max(elapsed / duration, 0), 1)
        if (t < 1) {
          done = false
        }
        paint(index, easeOutCubic(t))
      })
      if (!done) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <ul className="grid grid-cols-4 gap-2">
      {EXAMPLE_SCORES.map((score, index) => (
        <li key={score.label} className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-16 h-16 -rotate-90">
              <circle
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke="#2f2f2f"
                strokeWidth="5"
              />
              <circle
                ref={(el) => {
                  arcRefs.current[index] = el
                }}
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke={toneFor(score.value)}
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={CIRCUMFERENCE}
              />
            </svg>
            <span
              ref={(el) => {
                numberRefs.current[index] = el
              }}
              className="absolute inset-0 flex items-center justify-center text-white font-bold tabular-nums"
            >
              0
            </span>
          </div>
          <span className="text-[11px] text-gray-light text-center leading-tight">
            {score.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

function PendingRings() {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {EXAMPLE_SCORES.map((score, index) => (
        <li key={score.label} className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16">
            <svg
              viewBox="0 0 64 64"
              className="w-16 h-16 animate-[spin_6s_linear_infinite] motion-reduce:animate-none"
              style={{ animationDelay: `${index * -1.2}s` }}
            >
              <circle
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke="rgba(229,126,33,0.55)"
                strokeWidth="3"
                strokeDasharray="4 7"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-orange font-bold">
              ?
            </span>
          </div>
          <span className="text-[11px] text-gray-light text-center leading-tight">
            {score.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function AuditPreview({ website, runKey }: Props) {
  const isExample = website === null

  return (
    <div
      aria-hidden="true"
      className="relative select-none pointer-events-none"
    >
      {isExample && (
        <>
          <div className="absolute -right-4 top-20 z-10 hidden sm:flex items-center gap-2 rounded-lg bg-gray-darker px-3 py-2 text-xs text-white shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_8px_24px_rgba(0,0,0,0.45)] animate-[audit-reveal_400ms_cubic-bezier(0.32,0.72,0,1)_1.3s_both] motion-reduce:animate-none">
            <span className="w-2 h-2 rounded-full bg-[#e5484d]" />
            Chargement mobile : 4,8 s
          </div>
          <div className="absolute -left-6 -bottom-5 z-10 hidden sm:flex items-center gap-2 rounded-lg bg-gray-darker px-3 py-2 text-xs text-white shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_8px_24px_rgba(0,0,0,0.45)] animate-[audit-reveal_400ms_cubic-bezier(0.32,0.72,0,1)_1.6s_both] motion-reduce:animate-none">
            <span className="w-2 h-2 rounded-full bg-orange" />7 extensions à
            mettre à jour
          </div>
        </>
      )}

      <div className="relative rounded-xl bg-gray-darker shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_2px_4px_rgba(0,0,0,0.3),0_24px_64px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 px-4 h-11 border-b border-[#2f2f2f]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
          </div>
          <div className="flex-1 min-w-0 flex items-center gap-2 rounded-md bg-gray-dark px-3 h-7 text-xs text-gray-light">
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 flex-none text-gray"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            <span className="truncate">
              {isExample ? 'exemple-boutique.fr' : website}
            </span>
          </div>
          <span
            className={`flex-none rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest ${
              isExample ? 'bg-gray-dark text-gray' : 'bg-orange/15 text-orange'
            }`}
          >
            {isExample ? 'Exemple de rapport' : 'Votre audit'}
          </span>
        </div>

        <div className="p-5">
          <div className="relative h-40 overflow-hidden rounded-lg bg-gray-dark p-4">
            <div className="flex items-center justify-between">
              <span className="h-3 w-20 rounded bg-[#3a3a3a]" />
              <span className="flex gap-2">
                <span className="h-2 w-8 rounded bg-[#333]" />
                <span className="h-2 w-8 rounded bg-[#333]" />
                <span className="h-2 w-8 rounded bg-[#333]" />
              </span>
            </div>
            <div className="mt-5 grid grid-cols-[3fr_2fr] gap-4">
              <div className="space-y-2">
                <span className="block h-4 w-11/12 rounded bg-[#3a3a3a]" />
                <span className="block h-4 w-3/4 rounded bg-[#3a3a3a]" />
                <span className="block h-2 w-full rounded bg-[#333]" />
                <span className="block h-2 w-5/6 rounded bg-[#333]" />
                <span className="mt-3 block h-6 w-24 rounded bg-orange/70" />
              </div>
              <span className="block h-full rounded bg-[#333]" />
            </div>
            {!isExample && (
              <div
                key={runKey}
                className="absolute inset-0 animate-[audit-scan_1.6s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 70%, rgba(229,126,33,0.18) 96%, #e57e21 100%)',
                }}
              />
            )}
          </div>

          <div className="mt-5">
            {isExample ? <ExampleRings /> : <PendingRings />}
          </div>

          <div className="mt-5 pt-4 border-t border-[#2f2f2f] text-xs">
            {isExample ? (
              <p className="text-gray">
                Rapport d’exemple sur un site fictif. Le vôtre est réalisé et
                commenté par Pascal.
              </p>
            ) : (
              <p
                key={runKey}
                className="text-gray-light animate-[audit-reveal_300ms_cubic-bezier(0.32,0.72,0,1)_1.5s_both] motion-reduce:animate-none"
              >
                <span className="text-orange font-medium">
                  Adresse enregistrée.
                </span>{' '}
                Complétez vos coordonnées : l’analyse est réalisée à la main et
                présentée sous 5 jours ouvrés.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
