import '@component/home/home.css'

import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import ClientsMarquee from '@component/home/ClientsMarquee'
import CountUp from '@component/home/CountUp'
import { EXPERTISES, KEYPOINTS, PRESTATIONS } from '@component/home/data'
import Glass from '@component/home/Glass'
import HomeHero from '@component/home/HomeHero'
import LatestArticles from '@component/home/LatestArticles'
import ProjectCard from '@component/home/ProjectCard'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import ImageDiscoverTma from '@image/prestations/presentation-integration-web.jpeg'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'inRage, sites web et applications à La Rochelle | Pascal Gault',
  description:
    'Pascal Gault, développeur freelance à La Rochelle : sites WordPress, boutiques Prestashop, applications Symfony et React, maintenance et hébergement en France. Devis gratuit.',
  alternates: {
    canonical: getCanonicalUrl(),
  },
}

export default async function Homepage() {
  const items = await getPortfolioItems(4)
  const projects = items.map(({ title, slug, thumbnail, support }) => ({
    title,
    slug,
    thumbnail,
    support: support ? { slug: support.slug, title: support.title } : undefined,
  }))

  return (
    <div className="home">
      <Layout hero={<HomeHero />}>
        <section className="container relative pt-14 pb-20 md:pt-20 md:pb-28">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-xl font-medium text-balance text-white sm:text-2xl">
              Je m’appuie sur des collectifs de freelances rochelais, créatifs,
              designers et développeurs, pour mener des projets inspirants et
              engagés.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            {PRESTATIONS.map((prestation, i) => (
              <Reveal key={prestation.link} i={i}>
                <Glass className="flex h-full flex-col items-center p-7 text-center">
                  <div className="home-float">
                    <Image
                      src={prestation.image}
                      alt=""
                      width={150}
                      height={150}
                      className="size-36 drop-shadow-[0_18px_30px_oklch(0.7_0.19_var(--home-glow-h)_/_0.35)]"
                    />
                  </div>
                  <h2 className="mt-4 text-xl font-medium text-balance text-white">
                    {prestation.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-(--home-muted)">
                    {prestation.text}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={prestation.link}
                      className={
                        i === 0 ? 'home-btn home-btn-shine' : 'home-btn-ghost'
                      }
                    >
                      {prestation.linkText}
                    </Link>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-28 md:py-40">
          <div className="absolute inset-0 -z-20 opacity-25 md:opacity-40">
            <Image
              src={ImageDiscoverTma}
              alt=""
              fill
              sizes="100vw"
              className="home-fade-x object-cover"
            />
          </div>
          <div className="home-orb -top-[20%] -left-[10%]" aria-hidden />
          <div className="container relative">
            <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                  Besoin d’une estimation de votre site ou de sa maintenance ?
                </h2>
                <p className="mt-5 max-w-[58ch] leading-7 text-white/80">
                  Simple et en toute transparence : demandez-moi une estimation
                  gratuite pour la création de votre site web ou sa maintenance,
                  que vous soyez à La Rochelle ou ailleurs en France. Vous
                  recevez votre devis dans la journée et nous définissons
                  ensemble les tâches à réaliser.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={RouteLink.contact}
                    className="home-btn home-btn-shine home-btn-glow"
                  >
                    Demander mon devis
                  </Link>
                  <Link
                    href={RouteLink.prestationTma}
                    className="home-btn-ghost home-glassy"
                  >
                    Mes offres de maintenance
                  </Link>
                </div>
              </Reveal>
              <Reveal i={1}>
                <Glass className="grid grid-cols-2 gap-x-6 gap-y-8 p-7">
                  {KEYPOINTS.map((keypoint) => (
                    <div key={keypoint.label}>
                      <div className="text-3xl font-semibold text-white md:text-4xl">
                        <CountUp
                          to={keypoint.to}
                          from={keypoint.from}
                          decimals={keypoint.decimals}
                          prefix={keypoint.prefix}
                          suffix={keypoint.suffix}
                        />
                      </div>
                      <div className="mt-1 text-sm text-(--home-muted)">
                        {keypoint.label}
                      </div>
                    </div>
                  ))}
                </Glass>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-20 md:py-28">
          <div className="home-dots absolute inset-0 -z-10" aria-hidden />
          <div className="container">
            <SectionHeading text="Mes dernières créations pour des clients de La Rochelle et de toute la France : l’esthétique du détail et la fonctionnalité qui me démarquent en tant que développeur freelance.">
              Dernières réalisations
            </SectionHeading>
            <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
              {projects.map((project, i) => (
                <Reveal key={project.slug} i={i}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                href={RouteLink.portfolio}
                className="home-btn-ghost home-glassy"
              >
                Voir tous les projets
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-10 md:py-16">
          <SectionHeading text="Quatre technologies maîtrisées depuis des années pour répondre à chaque type de projet, du site vitrine à l’application métier, pour les entreprises de La Rochelle comme d’ailleurs.">
            Expertises techniques
          </SectionHeading>
          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            {EXPERTISES.map((expertise, i) => (
              <Reveal key={expertise.link} i={i}>
                <Glass className="grid grid-cols-[88px_1fr] items-center gap-x-6 p-6">
                  <div className="relative size-22">
                    <Image src={expertise.image} alt="" fill sizes="88px" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white md:text-2xl">
                      {expertise.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-(--home-muted)">
                      {expertise.text}
                    </p>
                    <Link
                      href={expertise.link}
                      className="home-arrow mt-3 inline-flex items-center gap-2 font-medium text-white"
                    >
                      En savoir plus <span aria-hidden>→</span>
                    </Link>
                  </div>
                </Glass>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="home-orb top-[10%] right-[-10%]" aria-hidden />
          <div className="container">
            <SectionHeading>Ils me font confiance</SectionHeading>
          </div>
          <ClientsMarquee />
        </section>

        <section className="relative isolate overflow-hidden py-20 md:py-28">
          <div className="home-orb -right-[15%] bottom-[-20%]" aria-hidden />
          <div className="container">
            <SectionHeading text="Passionné par les nouvelles technologies, je partage mes découvertes, mes retours d’expérience et mes solutions aux problèmes rencontrés sur WordPress, PrestaShop et les serveurs.">
              Derniers articles
            </SectionHeading>
            <LatestArticles />
            <div className="mt-12 flex justify-center">
              <Link
                href={RouteLink.blog}
                className="home-btn-ghost home-glassy"
              >
                Voir tous les articles
              </Link>
            </div>
          </div>
        </section>

        <section className="container pt-16 pb-10 md:pt-24">
          <SectionHeading text="Un projet web à La Rochelle, en Charente-Maritime ou ailleurs ? Remplissez le formulaire ci-dessous, je vous réponds dans la journée.">
            Contact
          </SectionHeading>
          <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
            <ContactForm />
          </Reveal>
        </section>
      </Layout>
    </div>
  )
}
