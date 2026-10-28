import Image from 'next/image'
import Link from 'next/link'

import { RouteLink } from '@lib/router'

import FlameLogo from './FlameLogo'

export default function HomeHero() {
  return (
    <section className="home-hero home-oblique home-oblique-line relative isolate -mt-22 overflow-hidden pt-22">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <Image
          src="/images/iledere-pont.jpeg"
          alt="Pont de l’île de Ré, près de La Rochelle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="home-scrim absolute inset-0 -z-20" />
      <div className="home-beam top-[15%] -left-[15%]" aria-hidden />
      <div className="home-beam top-[70%] left-[50%]" data-i="3" aria-hidden />
      <div className="relative z-10">
        <div className="container relative flex flex-col items-center pt-10 pb-32 text-center md:pt-16 md:pb-48">
          <FlameLogo className="h-48 md:h-72" />
          <span
            data-hero-text
            className="mt-3 block text-2xl text-white md:text-4xl"
          >
            Pascal GAULT
          </span>
          <h1
            data-hero-text
            className="mt-5 max-w-3xl text-xl font-normal text-balance text-white/90 md:text-2xl"
          >
            Développeur web freelance à La Rochelle, spécialisé dans la création
            de sites internet
          </h1>
          <div
            data-hero-text
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href={RouteLink.contact}
              className="home-btn home-btn-shine home-btn-glow"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href={RouteLink.developpeurLaRochelle}
              className="home-btn-ghost home-glassy"
            >
              Mon activité à La Rochelle
            </Link>
          </div>
          <div
            data-hero-text
            className="mt-8 flex items-center gap-2 text-sm text-white/75"
          >
            <span className="home-stars" aria-hidden>
              ★★★★★
            </span>
            <span>
              <span className="home-num">5,0 / 5</span> sur Google · plus de 150
              sites suivis
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
