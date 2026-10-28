import '@component/home/home.css'

import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import {
  ARTICLE_SLUGS,
  FAQ,
  LOCAL_PROJECTS,
  METHOD,
  PRICES,
  PRINCIPLES,
  WOOCOMMERCE_PROJECTS,
} from '@component/prestations/wordpress-data'
import { getBlogItems } from '@lib/blog'
import { getPortfolioItems } from '@lib/portfolio'
import { getCanonicalUrl, RouteLink } from '@lib/router'

export const metadata = {
  title: 'Création de site WordPress à La Rochelle | Freelance inRage',
  description:
    'Développeur WordPress freelance à La Rochelle depuis 2008 : site vitrine sur mesure de 2 000 à 3 000 €, thème Octa, blocs Gutenberg, WooCommerce, hébergement en France. Devis sous 24 h.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationWordPress),
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: getCanonicalUrl(),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Prestations',
          item: getCanonicalUrl(RouteLink.prestations),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Création de site internet',
          item: getCanonicalUrl(RouteLink.prestationWeb),
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Site WordPress',
          item: getCanonicalUrl(RouteLink.prestationWordPress),
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Création de site WordPress à La Rochelle',
      serviceType: 'Création de site WordPress',
      provider: { '@id': getCanonicalUrl('/#business') },
      areaServed: [
        { '@type': 'City', name: 'La Rochelle' },
        { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
        { '@type': 'Country', name: 'France' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Site vitrine WordPress sur mesure',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 2000,
            maxPrice: 3000,
            priceCurrency: 'EUR',
          },
        },
        {
          '@type': 'Offer',
          name: 'Boutique WooCommerce',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'PriceSpecification',
            minPrice: 5000,
            priceCurrency: 'EUR',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

const linkClass =
  'font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)'

function Hero() {
  return (
    <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-24 md:pb-32">
      <div className="home-beam top-[10%] -left-[20%]" aria-hidden />
      <div className="home-beam top-[65%] left-[50%]" data-i="3" aria-hidden />
      <div className="container pt-6 md:pt-12">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
              Création de site WordPress à La Rochelle
            </h1>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
              Développeur WordPress freelance, sur le CMS depuis sa version 3 en
              2010, je conçois des sites vitrines et des boutiques WooCommerce
              pour les commerces, cabinets, associations et PME de La Rochelle,
              de Charente-Maritime et de toute la France. Un thème écrit pour
              vous, jamais acheté, une administration que vous maîtrisez, un
              hébergement en France, et la même personne des spécifications à la
              maintenance.
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
                href={`${RouteLink.portfolio}/wordpress`}
                className="home-btn-ghost home-glassy"
              >
                Voir mes sites WordPress
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

type Project = Awaited<ReturnType<typeof getPortfolioItems>>[number]

function ProjectGrid({
  projects,
}: {
  projects: Array<Project & { note: string }>
}) {
  return (
    <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Reveal i={i}>
            <Link
              href={`${RouteLink.portfolio}/${project.support ? `${project.support.slug}/` : ''}${project.slug}`}
              className="home-card group block"
            >
              <span className="home-shot block overflow-hidden rounded-xl">
                <Image
                  src={`/images/portfolio/${project.thumbnail}`}
                  alt=""
                  width={257}
                  height={400}
                  className="h-auto w-full"
                  sizes="(min-width: 768px) 33vw, 50vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </span>
              <span className="home-card-title mt-4 block text-lg font-medium text-white">
                {project.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-(--home-muted)">
                {project.note}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

function pick(items: Project[], wanted: Array<{ slug: string; note: string }>) {
  return wanted
    .map((local) => {
      const item = items.find((candidate) => candidate.slug === local.slug)
      return item ? { ...item, note: local.note } : null
    })
    .filter((project) => project !== null)
}

async function WordPressArticles() {
  const items = await getBlogItems()
  const articles = ARTICLE_SLUGS.map((slug) =>
    items.find((item) => item.slug === slug)
  ).filter((item) => item !== undefined)

  return (
    <ul className="mt-14 grid gap-4 md:grid-cols-2">
      {articles.map((article, i) => (
        <li key={article.slug}>
          <Reveal i={i} className="h-full">
            <Link
              href={`${RouteLink.blog}/${article.slug}`}
              className="home-card home-article home-glass grid h-full grid-cols-[112px_1fr] items-center gap-5 p-4 sm:grid-cols-[150px_1fr]"
            >
              <span className="home-article-media relative block aspect-[2.15/1] overflow-hidden rounded-lg">
                <Image
                  src={article.thumbnail}
                  alt=""
                  fill
                  sizes="150px"
                  className="home-article-img object-cover"
                />
              </span>
              <span className="home-card-title line-clamp-3 text-base leading-snug font-medium text-white sm:text-lg">
                {article.title}
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

export default async function PrestationWordPress() {
  const items = await getPortfolioItems(-1, 'wordpress')
  const projects = pick(items, LOCAL_PROJECTS)
  const shops = pick(items, WOOCOMMERCE_PROJECTS)

  return (
    <div className="home">
      <Layout hero={<Hero />}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="container py-16 md:py-24">
          <SectionHeading text="WordPress fait tourner quatre sites sur dix dans le monde, et la plupart se ressemblent parce qu’ils partent du même thème acheté. Voici ce qui distingue un site WordPress que je développe.">
            Un site WordPress inRage, concrètement
          </SectionHeading>
          <div className="mx-auto mt-14 max-w-4xl divide-y divide-white/10">
            {PRINCIPLES.map((item, i) => (
              <Reveal key={item.title} i={i}>
                <article className="grid gap-x-12 gap-y-3 py-10 md:grid-cols-[280px_1fr]">
                  <h3 className="text-2xl font-semibold tracking-tight text-balance text-white">
                    {item.title}
                  </h3>
                  <div>
                    <p className="leading-7 text-(--home-muted)">{item.text}</p>
                    {item.href && (
                      <p className="mt-4">
                        <Link href={item.href} className={linkClass}>
                          {item.hrefText}
                        </Link>
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
            <SectionHeading text="Dix-sept sites WordPress sont présentés dans le portfolio. En voici six, de La Rochelle à la Nouvelle-Aquitaine, que vous pouvez visiter.">
              Des sites WordPress que vous pouvez visiter
            </SectionHeading>
            <ProjectGrid projects={projects} />
            <div className="mt-12 flex justify-center">
              <Link
                href={`${RouteLink.portfolio}/wordpress`}
                className="home-btn-ghost home-glassy"
              >
                Les 17 réalisations WordPress
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <SectionHeading text="WooCommerce transforme WordPress en boutique, avec le même éditeur pour vos pages et vos produits. C’est le bon choix quand la vente accompagne un site de contenu, avec un catalogue de quelques dizaines à quelques centaines de références.">
            Boutique WooCommerce
          </SectionHeading>
          <ProjectGrid projects={shops} />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <p className="leading-7 text-(--home-muted)">
              J’ai migré Guédelon et Jemapub de Prestashop vers WooCommerce,
              avec reprise des produits, des clients et des adresses de pages.
              Pour un catalogue lourd ou du B2B, je vous orienterai vers{' '}
              <Link href={RouteLink.prestationPrestashop} className={linkClass}>
                Prestashop
              </Link>
              .
            </p>
          </Reveal>
        </section>

        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
          <div className="container">
            <SectionHeading text="La méthode compte autant que l’outil. Voici comment un site WordPress se construit chez inRage, du premier échange à la mise en ligne.">
              Comment je construis votre site WordPress
            </SectionHeading>
            <ol className="home-timeline mx-auto mt-14 max-w-3xl">
              {METHOD.map((step, i) => (
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
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Refonte ou migration vers WordPress
              </h2>
              <span className="home-rule mt-5" aria-hidden />
              <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
                Un site Wix ou Joomla qui plafonne, un WordPress de 2016 lent et
                impossible à mettre à jour, une boutique Prestashop trop lourde
                pour vingt produits : les trois cas que je rencontre le plus.
              </p>
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                <p>
                  Je commence par un audit gratuit de l’existant : ce qui
                  apporte des visites, ce qui doit être gardé, ce qui est relié
                  au site. Les contenus sont repris, les adresses des pages
                  conservées ou redirigées une par une, et le nouveau site se
                  construit à côté avant de basculer en une fois.
                </p>
                <p>
                  Pour{' '}
                  <Link
                    href={`${RouteLink.portfolio}/wordpress/quadria`}
                    className={linkClass}
                  >
                    Quadria
                  </Link>
                  , le catalogue de l’ancien site a été entièrement repris dans
                  des fiches produits sur mesure. Pour le{' '}
                  <Link
                    href={`${RouteLink.portfolio}/wordpress/camping-la-mouette-rieuse`}
                    className={linkClass}
                  >
                    Camping La Mouette Rieuse
                  </Link>
                  , la refonte a accompagné celle de l’identité visuelle.
                </p>
                <p>
                  <Link href={RouteLink.auditGratuit} className={linkClass}>
                    Faire auditer mon site actuel
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="prix"
          className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
        >
          <div className="container">
            <SectionHeading text="Des fourchettes annoncées, un devis détaillé poste par poste sous 24 heures. Le site vous appartient, sans abonnement ni licence de constructeur de pages.">
              Combien coûte un site WordPress à La Rochelle
            </SectionHeading>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PRICES.map((offer, i) => (
                <Reveal key={offer.name} i={i} className="h-full">
                  <Glass className="flex h-full flex-col p-7">
                    <h3 className="text-xl font-medium text-white">
                      {offer.name}
                    </h3>
                    <p className="home-num mt-3 text-3xl font-semibold text-white">
                      {offer.price}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-(--home-muted)">
                      {offer.text}
                    </p>
                    {offer.href && (
                      <p className="mt-auto pt-5">
                        <Link href={offer.href} className={linkClass}>
                          Les forfaits de maintenance
                        </Link>
                      </p>
                    )}
                  </Glass>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <SectionHeading text="Je publie depuis 2019 ce que j’apprends sur WordPress : thème, blocs, formulaires, maintenance. Ces articles sont lus par d’autres développeurs, ils vous diront comment je travaille.">
            Ce que j’écris sur WordPress
          </SectionHeading>
          <WordPressArticles />
          <div className="mt-12 flex justify-center">
            <Link href={RouteLink.blog} className="home-btn-ghost home-glassy">
              Tous les articles
            </Link>
          </div>
        </section>

        <section
          id="faq"
          className="home-oblique-both relative isolate scroll-mt-28 overflow-hidden bg-(--home-bg-deep) py-24 md:py-32"
        >
          <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                Questions fréquentes sur WordPress
              </h2>
              <span className="home-rule mt-5" aria-hidden />
              <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
                Prix, délais, lenteur, sécurité, autonomie : ce qu’on me demande
                avant de lancer un site WordPress.
              </p>
            </Reveal>
            <div className="divide-y divide-white/10">
              {FAQ.map((item, i) => (
                <Reveal key={item.question} i={i}>
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-(--home-muted) transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-[64ch] leading-7 text-(--home-muted)">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="container pt-16 pb-10 md:pt-24">
          <SectionHeading text="Décrivez votre activité et ce que le site doit produire. Je vous réponds dans la journée avec les bonnes questions et une première estimation.">
            Demander un devis WordPress
          </SectionHeading>
          <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
            <ContactForm />
          </Reveal>
        </section>
      </Layout>
    </div>
  )
}
