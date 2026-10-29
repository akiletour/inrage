import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import {
  CASES,
  FAQ,
  PROOFS,
  STACK,
  STEPS,
} from '@component/prestations/react-data'
import ImageInvoicer from '@image/articles/invoicer-cover.jpg'
import ImagePicking from '@image/portfolio/outil-de-picking-dentrepot-1.png'
import ImageSite from '@image/screenshot.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Développeur React, Next.js et React Native freelance | inRage',
  description:
    'Développeur React, Next.js et React Native freelance à La Rochelle : applications web et mobiles, tableaux de bord, SaaS, en direct ou pour les agences.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationReact),
  },
}

const IMAGES: Record<string, StaticImageData> = {
  invoicer: ImageInvoicer,
  picking: ImagePicking,
  site: ImageSite,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([
      { name: 'Prestations', item: getCanonicalUrl(RouteLink.prestations) },
      {
        name: 'Développement React et React Native',
        item: getCanonicalUrl(RouteLink.prestationReact),
      },
    ]),
    {
      '@type': 'Service',
      name: 'Développement React, Next.js et React Native',
      serviceType: 'Développement d’applications web et mobiles',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'Country', name: 'France' },
      ],
    },
    faqJsonLd(FAQ),
  ],
}

const cardClass = 'home-card home-article home-glass flex h-full flex-col'

function SmartLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: React.ReactNode
}) {
  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[10%] -left-[20%]" aria-hidden />
      <div className="home-beam top-[65%] left-[50%]" data-i="3" aria-hidden />
      <div className="container pt-6 md:pt-12">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Développeur React, Next.js et React Native&nbsp;: applications web
              et mobiles sur mesure
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Tableaux de bord, logiciels en ligne, sites qui chargent en moins
              d’une seconde, applications iOS et Android. Je développe
              l’interface en React, Next.js ou React Native, et l’API derrière
              en Symfony quand elle n’existe pas. Depuis La Rochelle, pour des
              entreprises de toute la France et les agences qui me confient leur
              front.
            </p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={RouteLink.contact}
                className="home-btn home-btn-shine home-btn-glow"
              >
                Décrire votre projet
              </Link>
              <a
                href="https://github.com/akiletour/inrage"
                target="_blank"
                rel="noreferrer noopener"
                className="home-btn-ghost home-glassy"
              >
                Le code de ce site
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function PrestationReact() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <SectionHeading text="React n’est pas un choix par défaut, c’est une réponse à des besoins précis. Voici les cinq que je rencontre, et ce que je livre pour chacun.">
          Ce que je développe avec React
        </SectionHeading>
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
          {CASES.map((item, i) => (
            <Reveal key={item.title} i={i}>
              <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[280px_1fr]">
                <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                  {item.title}
                </h3>
                <div>
                  <p className="leading-7 text-(--home-muted)">{item.text}</p>
                  {item.href && (
                    <p className="mt-4">
                      <SmartLink href={item.href} className="home-link">
                        {item.hrefText}
                      </SmartLink>
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Trois applications React que vous pouvez voir tourner, dont deux que j’exploite moi-même. Pas de maquette, pas de chiffres inventés.">
            Ce qui tourne déjà
          </SectionHeading>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {PROOFS.map((proof, i) => (
              <li key={proof.title}>
                <Reveal i={i} className="h-full">
                  <SmartLink href={proof.href} className={cardClass}>
                    <span className="home-article-media relative block aspect-[2.15/1] overflow-hidden">
                      <Image
                        src={IMAGES[proof.image]!}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="home-article-img object-cover object-top"
                      />
                    </span>
                    <span className="flex grow flex-col p-6">
                      <span className="home-card-title text-xl font-semibold text-white">
                        {proof.title}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-(--home-muted)">
                        {proof.text}
                      </span>
                    </span>
                  </SmartLink>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Applications mobiles React Native
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Une application iOS et Android à partir d’une seule base de code,
              à La Rochelle ou à distance.
            </p>
          </Reveal>
          <Reveal i={1}>
            <div className="space-y-4 leading-7 text-white/85">
              <p>
                La plupart des applications mobiles d’entreprise n’ont pas
                besoin de deux équipes, une pour iOS et une pour Android. React
                Native partage le code entre les deux plateformes et réutilise
                l’API, les règles métier et souvent les composants de votre
                application web. Vous payez une application, vous en obtenez
                deux, et vous gardez un seul interlocuteur.
              </p>
              <p>
                Je conçois l’application avec son API, en Symfony si elle
                n’existe pas, je la relie à vos outils, je prépare la
                publication sur l’App Store et Google Play, et je la suis après
                la sortie. Pour un commerce, une association, un outil de
                terrain pour vos équipes ou le prolongement mobile d’un site
                existant.
              </p>
              <p>
                <Link href={RouteLink.contact} className="home-link">
                  Parler d’une application mobile
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Comment je construis une application React
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Des choix faits pour qu’une application dure et qu’un autre
              développeur puisse la reprendre.
            </p>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              {STACK.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Une application se construit par lots, avec vous aux commandes dès le premier écran utilisable.">
          Comment se déroule un projet React
        </SectionHeading>
        <ol className="home-timeline mx-auto mt-14 max-w-3xl">
          {STEPS.map((step, i) => (
            <li key={step.title} className="home-timeline-item">
              <Reveal i={i}>
                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[60ch] leading-7 text-(--home-muted)">
                  {step.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <FaqSection
        title="Questions fréquentes sur React"
        intro="React ou WordPress, Next.js, React Native, prix, référencement : ce qu’on me demande avant de lancer une application."
        items={FAQ}
        tone="deep"
      />

      <section className="container pt-16 pb-10 md:pt-24">
        <SectionHeading text="Décrivez l’interface ou l’application dont vous avez besoin, pour qui, et ce qui existe déjà derrière. Je vous réponds dans la journée.">
          Décrire votre projet
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
