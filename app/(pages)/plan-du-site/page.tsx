import Link from 'next/link'

import Reveal from '@component/home/Reveal'
import Layout from '@component/Layout'
import { BLOG_CATEGORIES, getBlogItems } from '@lib/blog'
import { getPortfolioItems, portfolioCategories } from '@lib/portfolio'
import { RouteLink, getCanonicalUrl } from '@lib/router'
import { breadcrumbJsonLd, serializeJsonLd } from '@util/seo-generators'

export const metadata = {
  title: 'Plan du site | inRage',
  description:
    'Plan du site inrage.fr : prestations, portfolio, articles de blog et pages de Pascal Gault, développeur web freelance à La Rochelle.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.sitemap),
  },
}

type Entry = { href: string; label: string; children?: Entry[] }

const PAGES: Entry[] = [
  { href: '/', label: 'Accueil' },
  { href: RouteLink.aboutMe, label: 'À propos de moi' },
  {
    href: RouteLink.developpeurLaRochelle,
    label: 'Développeur web freelance à La Rochelle',
  },
  { href: RouteLink.portfolio, label: 'Portfolio' },
  { href: RouteLink.blog, label: 'Blog' },
  { href: RouteLink.contact, label: 'Contactez-moi' },
  { href: RouteLink.legals, label: 'Mentions légales' },
]

const PRESTATIONS: Entry[] = [
  {
    href: RouteLink.prestationWeb,
    label: 'Création de site',
    children: [
      { href: RouteLink.prestationWordPress, label: 'WordPress' },
      { href: RouteLink.prestationPrestashop, label: 'Prestashop' },
      { href: RouteLink.prestationSymfony, label: 'Symfony' },
      { href: RouteLink.prestationReact, label: 'React et Next.js' },
    ],
  },
  {
    href: RouteLink.prestationTma,
    label: 'Maintenance de site',
    children: [
      {
        href: RouteLink.prestationTmaWordPress,
        label: 'Maintenance WordPress',
      },
      {
        href: RouteLink.prestationTmaPrestashop,
        label: 'Maintenance Prestashop',
      },
      {
        href: RouteLink.prestationTmaOnDemand,
        label: 'Maintenance ponctuelle',
      },
    ],
  },
  { href: RouteLink.prestationHosting, label: 'Hébergement de site internet' },
]

function LinkList({
  entries,
  nested = false,
}: {
  entries: Entry[]
  nested?: boolean
}) {
  return (
    <ul
      className={
        nested
          ? 'mt-2 ml-4 space-y-2 border-l border-white/10 pl-4'
          : 'space-y-2'
      }
    >
      {entries.map((entry) => (
        <li key={entry.href}>
          <Link
            href={entry.href}
            className="home-link inline-block py-0.5 leading-6"
          >
            {entry.label}
          </Link>
          {entry.children && <LinkList entries={entry.children} nested />}
        </li>
      ))}
    </ul>
  )
}

function Column({
  title,
  i,
  children,
}: {
  title: string
  i: number
  children: React.ReactNode
}) {
  return (
    <Reveal i={i}>
      <h2 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <span className="home-rule mt-4" aria-hidden />
      <div className="mt-5 text-white/85">{children}</div>
    </Reveal>
  )
}

export default async function Sitemap() {
  const [posts, projects] = await Promise.all([
    getBlogItems(),
    getPortfolioItems(-1),
  ])
  const blogCategories = BLOG_CATEGORIES.filter((category) =>
    posts.some((post) => post.category === category.name)
  )
  const projectCategories = Object.values(portfolioCategories)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbJsonLd([
        { name: 'Plan du site', item: getCanonicalUrl(RouteLink.sitemap) },
      ]),
    ],
  }

  return (
    <Layout
      hero={
        <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-16 md:pb-20">
          <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
          <div className="container pt-6 md:pt-12">
            <Reveal>
              <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                Plan du site
              </h1>
            </Reveal>
            <Reveal i={1}>
              <p className="mt-6 max-w-[58ch] text-lg leading-8 text-(--home-muted)">
                Toutes les pages d’inrage.fr : {PRESTATIONS.length + 7}{' '}
                prestations et pages, {projects.length} projets et{' '}
                {posts.length} articles.
              </p>
            </Reveal>
          </div>
        </section>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="container grid gap-12 pt-4 pb-20 md:grid-cols-2 md:pb-28 lg:grid-cols-4 lg:gap-10">
        <Column title="Pages" i={0}>
          <LinkList entries={PAGES} />
        </Column>
        <Column title="Prestations" i={1}>
          <LinkList
            entries={[
              { href: RouteLink.prestations, label: 'Toutes les prestations' },
              ...PRESTATIONS,
            ]}
          />
        </Column>
        <Column title="Portfolio" i={2}>
          <LinkList
            entries={projectCategories.map((category) => ({
              href: RouteLink.portfolioCategory(category.slug),
              label: category.title,
            }))}
          />
          <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={RouteLink.portfolioProject(
                    project.support.slug,
                    project.slug
                  )}
                  className="home-link inline-block py-0.5 leading-6"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </Column>
        <Column title="Blog" i={3}>
          <LinkList
            entries={[
              { href: RouteLink.blog, label: 'Tous les articles' },
              ...blogCategories.map((category) => ({
                href: RouteLink.blogCategory(category.slug),
                label: category.name,
              })),
            ]}
          />
          <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={RouteLink.blogPost(post.slug)}
                  className="home-link inline-block py-0.5 leading-6"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </Column>
      </div>
    </Layout>
  )
}
