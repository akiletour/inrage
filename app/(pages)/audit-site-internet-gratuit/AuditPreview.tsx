'use client'

import { CSSProperties, useEffect, useLayoutEffect, useRef } from 'react'

const RADIUS = 26
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const INTRO_KEY = 'inrage-audit-intro'

const EXAMPLE_SCORES = [
  { label: 'Performance', value: 38 },
  { label: 'Sécurité', value: 52 },
  { label: 'Référencement', value: 61 },
  { label: 'Mobile', value: 74 },
]

const EXAMPLE_FINDINGS = [
  {
    tone: '#e5484d',
    text: 'Page d’accueil : 4,8 s pour s’afficher sur mobile',
  },
  {
    tone: '#e57e21',
    text: 'WordPress et 7 extensions sans mise à jour depuis 14 mois',
  },
  {
    tone: '#e57e21',
    text: '12 pages sans description pour Google',
  },
  {
    tone: '#30a46c',
    text: 'Certificat HTTPS valide jusqu’en mars',
  },
]

let introDecision: boolean | null = null

function shouldPlayIntro() {
  if (introDecision !== null) {
    return introDecision
  }
  let seen = false
  try {
    seen = window.sessionStorage.getItem(INTRO_KEY) === '1'
    window.sessionStorage.setItem(INTRO_KEY, '1')
  } catch {
    seen = false
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  introDecision = !seen && !reduced
  return introDecision
}

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

function ExampleScores() {
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
      number.textContent = String(Math.round(score.value * progress))
      arc.style.strokeDashoffset = String(
        CIRCUMFERENCE * (1 - (score.value / 100) * progress)
      )
    }

    if (!shouldPlayIntro()) {
      EXAMPLE_SCORES.forEach((_, index) => paint(index, 1))
      return
    }

    const duration = 1100
    const stagger = 140
    const delay = 300
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

function PendingScores() {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {EXAMPLE_SCORES.map((score) => (
        <li key={score.label} className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-16 h-16">
              <circle
                cx="32"
                cy="32"
                r={RADIUS}
                fill="none"
                stroke="#3a3a3a"
                strokeWidth="5"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-gray font-bold">
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

type Props = {
  website: string | null
  runKey: number
}

export default function AuditPreview({ website, runKey }: Props) {
  const isExample = website === null
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!shouldPlayIntro()) {
      rootRef.current?.classList.remove('audit-intro')
    }
    return () => {
      window.setTimeout(() => {
        introDecision = null
      }, 0)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="audit-intro select-none pointer-events-none rounded-lg bg-gray-darker shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_24px_48px_rgba(0,0,0,0.45)]"
    >
      <div className="flex items-baseline justify-between gap-4 px-5 pt-5 pb-4 border-b border-[#2f2f2f]">
        <div className="min-w-0">
          <p className="text-xs text-gray">Rapport d’audit</p>
          <p className="mt-1 text-white font-medium truncate">
            {isExample ? 'exemple-boutique.fr' : website}
          </p>
        </div>
        <p className="flex-none text-xs text-gray">
          {isExample ? 'Exemple' : 'À réaliser'}
        </p>
      </div>

      <div className="px-5 pt-5">
        {isExample ? <ExampleScores /> : <PendingScores />}
      </div>

      <div className="relative mt-5 overflow-hidden border-t border-[#2f2f2f]">
        <ul className="divide-y divide-[#2f2f2f] text-sm">
          {EXAMPLE_FINDINGS.map((finding, index) => (
            <li
              key={finding.text}
              data-reveal={isExample ? '' : undefined}
              style={
                isExample
                  ? ({
                      '--reveal-delay': `${1500 + index * 220}ms`,
                    } as CSSProperties)
                  : undefined
              }
              className="flex items-center gap-3 px-5 py-3 min-h-11"
            >
              <span
                className="w-2 h-2 flex-none rounded-full"
                style={{
                  backgroundColor: isExample ? finding.tone : '#3a3a3a',
                }}
              />
              {isExample ? (
                <span className="text-gray-light">{finding.text}</span>
              ) : (
                <span className="h-2 w-2/3 rounded bg-[#2f2f2f]" />
              )}
            </li>
          ))}
        </ul>
        {!isExample && (
          <div
            key={runKey}
            className="absolute inset-0 animate-[audit-scan_1.4s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:hidden"
            style={{
              background:
                'linear-gradient(to bottom, transparent 75%, rgba(229,126,33,0.16) 97%, #e57e21 100%)',
            }}
          />
        )}
      </div>

      <div className="px-5 py-4 border-t border-[#2f2f2f] text-xs">
        {isExample ? (
          <p className="text-gray">Site fictif, chiffres d’illustration.</p>
        ) : (
          <p
            key={runKey}
            className="text-gray-light animate-[audit-reveal_300ms_cubic-bezier(0.32,0.72,0,1)_1.3s_both] motion-reduce:animate-none"
          >
            Adresse notée. Il me reste à savoir où vous envoyer le rapport.
          </p>
        )}
      </div>
    </div>
  )
}
