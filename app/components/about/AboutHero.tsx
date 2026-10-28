import Image from 'next/image'
import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import { RouteLink } from '@lib/router'

import { GOOGLE_PLACE_URL } from './data'

const FACTS = [
  { value: 'Depuis 2008', label: 'développeur web à La Rochelle' },
  { value: '150+', label: 'sites hébergés et maintenus' },
  { value: '5,0 / 5', label: '9 avis Google', href: GOOGLE_PLACE_URL },
  {
    value: 'Invoicer',
    label: 'le logiciel que j’édite',
    href: 'https://invoicer.fr',
  },
]

export default function AboutHero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[10%] -left-[20%]" aria-hidden />
      <div className="home-beam top-[60%] left-[55%]" data-i="3" aria-hidden />
      <div className="container grid items-center gap-12 pt-6 md:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Pascal Gault, développeur web à La Rochelle depuis 2008
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[56ch] text-lg leading-8 text-(--home-muted)">
              Je conçois, développe, héberge et maintiens des sites WordPress,
              des boutiques Prestashop et des applications Symfony et React. Un
              seul interlocuteur, du cadrage à la maintenance, pour des
              entreprises de La Rochelle et de toute la France.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={RouteLink.contact}
                className="home-btn home-btn-shine home-btn-glow"
              >
                Demander un devis
              </Link>
              <Link
                href={RouteLink.portfolio}
                className="home-btn-ghost home-glassy"
              >
                Voir mes réalisations
              </Link>
            </div>
          </Reveal>
          <Reveal i={3}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="home-num text-2xl font-semibold text-white md:text-3xl">
                    {fact.value}
                  </dd>
                  <dd className="mt-1 text-sm text-(--home-muted)">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                      >
                        {fact.label}
                      </a>
                    ) : (
                      fact.label
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal i={2} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="home-shot home-portrait relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/pascal-gault-bureau.jpg"
              alt="Pascal Gault, développeur web freelance à La Rochelle"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
