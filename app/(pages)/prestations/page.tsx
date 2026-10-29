import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import FaqSection from '@component/home/FaqSection'
import Layout from '@component/Layout'
import {
  AGENCY_POINTS,
  BACKSTAGE,
  CREATION_TECHS,
  FAQ,
  MAINTENANCE_OFFERS,
  STEPS,
  SUMMARY,
} from '@component/prestations/data'
import ImagePrestationBuildWebsite from '@image/prestations/creation-site-internet.png'
import ImagePrestationHosting from '@image/prestations/hebergement-optimise-rapide.png'
import ImagePrestationTma from '@image/prestations/infogerance-tma-maintenance.png'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
} from '@util/seo-generators'

export const metadata = {
  title: 'Prestations web à La Rochelle : sites, maintenance, DevOps | inRage',
  description:
    'Création de sites WordPress, Prestashop, Symfony et React, maintenance et hébergement en France par Pascal Gault, développeur freelance à La Rochelle.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestations),
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbJsonLd([
      { name: 'Prestations', item: getCanonicalUrl(RouteLink.prestations) },
    ]),
    faqJsonLd(FAQ),
  ],
}

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[10%] -left-[20%]" aria-hidden />
      <div className="home-beam top-[65%] left-[50%]" data-i="3" aria-hidden />
      <div className="container grid items-start gap-12 pt-6 md:pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Prestations web à La Rochelle
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Création et refonte de sites, boutiques en ligne, applications web
              et mobiles, maintenance et hébergement en France. La même personne
              conçoit, développe et surveille, pour des entreprises de La
              Rochelle, des groupes nationaux et les agences qui me confient
              leur technique.
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
                href={RouteLink.auditGratuit}
                className="home-btn-ghost home-glassy"
              >
                Audit gratuit de votre site
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal i={2}>
          <nav aria-label="Sommaire de la page">
            <Glass className="p-6 md:p-7">
              <p className="font-medium text-white">Sur cette page</p>
              <ol className="mt-3 divide-y divide-white/10">
                {SUMMARY.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block py-2.5 text-(--home-muted) transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </Glass>
          </nav>
        </Reveal>
      </div>
    </section>
  )
}

function OfferImage({ src }: { src: StaticImageData }) {
  return (
    <div className="home-float">
      <Image
        src={src}
        alt=""
        width={120}
        height={120}
        className="size-28 drop-shadow-[0_18px_30px_oklch(0.7_0.19_var(--home-glow-h)_/_0.35)]"
      />
    </div>
  )
}

export default function Prestations() {
  return (
    <Layout hero={<Hero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section id="creation" className="container scroll-mt-28 py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <Reveal>
            <Glass className="p-7 md:p-9">
              <div className="flex flex-wrap items-center gap-6">
                <OfferImage src={ImagePrestationBuildWebsite} />
                <div className="min-w-[16rem] flex-1">
                  <h2 className="text-2xl font-bold tracking-tight text-balance text-white md:text-3xl">
                    Création et refonte de sites internet
                  </h2>
                  <p className="mt-3 leading-7 text-(--home-muted)">
                    Site vitrine, boutique, outil métier ou application. Je
                    choisis la technologie selon ce que vous devez administrer
                    vous-même et ce qui devra évoluer dans trois ans.
                  </p>
                </div>
              </div>
              <ul className="mt-8 grid gap-x-8 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                {CREATION_TECHS.map((tech) => (
                  <li key={tech.href}>
                    <Link href={tech.href} className="home-link">
                      {tech.name}
                    </Link>
                    <p className="mt-1 text-sm leading-6 text-(--home-muted)">
                      {tech.text}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={RouteLink.prestationWeb}
                  className="home-btn home-btn-shine"
                >
                  Création de site internet à La Rochelle
                </Link>
              </div>
            </Glass>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal i={1}>
              <Glass className="p-7">
                <h3 className="text-xl font-medium text-white">
                  Refonte d’un site existant
                </h3>
                <p className="mt-3 text-sm leading-6 text-(--home-muted)">
                  Je reprends les sites développés par d’autres. D’abord un
                  audit du code, des mises à jour en retard et de l’hébergement.
                  Ensuite une remise à niveau si le socle tient, une refonte
                  s’il ne tient plus, avec migration des contenus et des URL
                  pour conserver votre référencement.
                </p>
                <p className="mt-4">
                  <Link href={RouteLink.auditGratuit} className="home-link">
                    Commencer par l’audit gratuit
                  </Link>
                </p>
              </Glass>
            </Reveal>
            <Reveal i={2}>
              <Glass className="p-7">
                <h3 className="text-xl font-medium text-white">
                  Logo, charte et maquettes
                </h3>
                <p className="mt-3 text-sm leading-6 text-(--home-muted)">
                  Les maquettes sont dessinées par Ludovic Boussion, graphiste
                  UI/UX du collectif, puis intégrées par mes soins. Vous gardez
                  un seul interlocuteur du premier croquis à la mise en ligne.
                </p>
              </Glass>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="maintenance"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <OfferImage src={ImagePrestationTma} />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Maintenance et infogérance
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[48ch] leading-7 text-(--home-muted)">
              Un site qui n’est pas mis à jour finit piraté ou cassé. Plus de
              150 sites WordPress et Prestashop sont suivis chaque semaine :
              mises à jour testées avant d’être appliquées, sauvegardes,
              surveillance, et quelqu’un qui répond quand ça casse.
            </p>
            <Link
              href={RouteLink.prestationTma}
              className="home-btn home-btn-shine mt-8"
            >
              Les offres de maintenance
            </Link>
          </Reveal>
          <ul className="grid gap-4">
            {MAINTENANCE_OFFERS.map((offer, i) => (
              <li key={offer.href}>
                <Reveal i={i + 1}>
                  <Link
                    href={offer.href}
                    className="home-card home-article home-glass block p-6"
                  >
                    <span className="home-card-title text-xl font-medium text-white">
                      {offer.name}
                    </span>
                    <span className="mt-2 block leading-7 text-(--home-muted)">
                      {offer.text}
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="hebergement"
        className="container scroll-mt-28 py-20 md:py-28"
      >
        <Reveal>
          <Glass className="p-7 md:p-9">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
              <div>
                <OfferImage src={ImagePrestationHosting} />
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-balance text-white md:text-3xl">
                  Hébergement infogéré en France
                </h2>
                <p className="mt-4">
                  <Link
                    href={RouteLink.prestationHosting}
                    className="home-link"
                  >
                    Découvrir l’hébergement
                  </Link>
                </p>
              </div>
              <div className="space-y-4 leading-7 text-(--home-muted)">
                <p>
                  Vos fichiers, votre base de données, vos sauvegardes et les
                  outils de supervision sont sur des serveurs situés en France,
                  que j’administre moi-même. Aucune copie chez un hébergeur
                  américain, aucun sous-traitant entre vous et la machine.
                </p>
                <p>
                  Les serveurs sont doublés, surveillés jour et nuit avec des
                  alertes, protégés par un pare-feu et par CrowdSec. Les
                  sauvegardes sont faites chaque nuit et testées en
                  restauration. Celui qui répond au téléphone est celui qui a
                  construit votre site et qui surveille ces serveurs.
                </p>
              </div>
            </div>
          </Glass>
        </Reveal>
      </section>

      <section
        id="coulisses"
        className="relative isolate scroll-mt-28 overflow-hidden py-20 md:py-28"
      >
        <div className="home-dots absolute inset-0 -z-10" aria-hidden />
        <div className="container">
          <SectionHeading text="Le portfolio montre des sites. Il ne montre pas les serveurs, les scripts et les outils qui les font tenir dans le temps. Voilà ce qu’il y a derrière.">
            Ce que le portfolio ne montre pas
          </SectionHeading>
          <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
            {BACKSTAGE.map((item, i) => (
              <Reveal key={item.title} i={i}>
                <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[260px_1fr]">
                  <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                    {item.title}
                  </h3>
                  <div>
                    <p className="leading-7 text-(--home-muted)">{item.text}</p>
                    <p className="mt-4">
                      <Link href={item.href} className="home-link">
                        {item.hrefText}
                      </Link>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="agences"
        className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
      >
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Pour les agences et les studios
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[48ch] leading-7 text-(--home-muted)">
              Une grande partie de mon activité se fait pour des agences de
              communication, dont certaines très grosses, le plus souvent en
              marque blanche. Vous gardez la relation client, je prends la
              technique, et je m’adapte à votre organisation.
            </p>
            <Link
              href={RouteLink.contact}
              className="home-btn-ghost home-glassy mt-8"
            >
              Parler d’un partenariat
            </Link>
          </Reveal>
          <Reveal i={1}>
            <ul className="home-list space-y-4 leading-7 text-white/85">
              {AGENCY_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="methode" className="container scroll-mt-28 py-20 md:py-28">
        <SectionHeading text="Un projet se construit par étapes visibles. Vous savez à chaque moment où on en est, ce qui est validé et ce qui reste à faire.">
          Comment se déroule un projet
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
        title="Questions fréquentes"
        intro="Celles qui reviennent au premier appel. Si la vôtre n’y est pas, le formulaire est en bas de page."
        items={FAQ}
        tone="deep"
      />

      <section className="container pt-16 pb-10 md:pt-24">
        <SectionHeading text="Décrivez votre projet en quelques lignes, je vous réponds dans la journée avec les bonnes questions et un ordre de grandeur.">
          Contact
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
