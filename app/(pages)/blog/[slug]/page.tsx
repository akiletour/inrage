import '@component/home/home.css'

import Link from 'next/link'
import { notFound } from 'next/navigation'

import { formatDate } from '@component/blog/ArticleCard'
import ReadingProgress from '@component/blog/ReadingProgress'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import ArticleCards from '@component/prestations/ArticleCards'
import { getBlogItems, getSingleBlogItem } from '@lib/blog'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { slugifyHeading } from '@util/headings'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const data = await getBlogItems()

  return data.map(({ slug }) => ({
    slug,
  }))
}

const getData = async (slug: string) => await getSingleBlogItem(slug)

type Post = NonNullable<Awaited<ReturnType<typeof getData>>['post']>

const AUTHOR_NAME = 'Pascal Gault'

const linkClass =
  'font-medium text-white underline decoration-(--home-orange) decoration-1 underline-offset-4 transition-colors hover:text-(--home-orange-text)'

const NEXT_STEP: Record<
  string,
  { title: string; text: string; href: string; label: string }
> = {
  WordPress: {
    title: 'Ce problème sur votre site WordPress ?',
    text: 'Les procédures de ce blog sont celles que j’applique sur les 150 sites que je maintiens. Si vous préférez que quelqu’un s’en charge, les forfaits couvrent les mises à jour, la sécurité et ce genre de correctifs.',
    href: RouteLink.prestationTmaWordPress,
    label: 'La maintenance WordPress',
  },
  PrestaShop: {
    title: 'Une boutique Prestashop à faire suivre ?',
    text: 'Modules, montées de version, erreurs du back-office : les forfaits de maintenance Prestashop couvrent ce travail, avec un délai d’intervention garanti.',
    href: RouteLink.prestationTmaPrestashop,
    label: 'La maintenance Prestashop',
  },
  Serveur: {
    title: 'Un serveur à surveiller ?',
    text: 'J’héberge et j’administre les sites que je maintiens sur mes serveurs en France, avec sauvegardes, supervision et CrowdSec. Ces procédures en font partie.',
    href: RouteLink.prestationHosting,
    label: 'L’hébergement infogéré',
  },
}

const DEFAULT_STEP = {
  title: 'Un projet dans ce sens ?',
  text: 'Site, boutique, application ou maintenance : décrivez votre besoin, je vous réponds dans la journée.',
  href: RouteLink.prestations,
  label: 'Les prestations',
}

export async function generateMetadata(props: Props) {
  const params = await props.params
  const { post } = await getData(params.slug)

  if (!post) {
    return {}
  }

  const url = getCanonicalUrl(`${RouteLink.blog}/${post.slug}`)

  return {
    title: post.seo.title,
    description: post.seo.metaDesc,
    authors: [{ name: AUTHOR_NAME, url: getCanonicalUrl(RouteLink.aboutMe) }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.seo.title,
      description: post.seo.metaDesc,
      siteName: 'inRage',
      locale: 'fr_FR',
      publishedTime: post.date,
      authors: [getCanonicalUrl(RouteLink.aboutMe)],
      section: post.category,
      images: [{ url: getCanonicalUrl(post.thumbnail), alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.metaDesc,
      images: [getCanonicalUrl(post.thumbnail)],
    },
  }
}

const buildJsonLd = (post: Post) => {
  const url = getCanonicalUrl(`${RouteLink.blog}/${post.slug}`)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.seo.metaDesc,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'fr-FR',
        articleSection: post.category,
        timeRequired: `PT${post.readingMinutes}M`,
        image: getCanonicalUrl(post.thumbnail),
        mainEntityOfPage: url,
        author: {
          '@type': 'Person',
          '@id': getCanonicalUrl('/#person'),
          name: AUTHOR_NAME,
          url: getCanonicalUrl(RouteLink.aboutMe),
        },
        publisher: { '@id': getCanonicalUrl('/#business') },
        isPartOf: { '@id': getCanonicalUrl('/#website') },
      },
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
            name: 'Blog',
            item: getCanonicalUrl(RouteLink.blog),
          },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  }
}

export default async function Page(props: Props) {
  const params = await props.params
  const { post } = await getData(params.slug)

  if (!post) {
    return notFound()
  }

  const step = (post.category && NEXT_STEP[post.category]) || DEFAULT_STEP
  const categoryHref = post.category
    ? `${RouteLink.blog}?categorie=${slugifyHeading(post.category)}`
    : RouteLink.blog

  return (
    <div className="home">
      <ReadingProgress target="article" />
      <Layout
        hero={
          <section className="home-oblique relative isolate -mt-22 overflow-hidden pt-22 pb-12 md:pb-16">
            <div className="home-beam top-[30%] -left-[20%]" aria-hidden />
            <div className="container pt-6 md:pt-12">
              <div className="max-w-4xl">
                <Reveal>
                  <p className="home-num flex flex-wrap gap-x-3 text-sm text-(--home-muted)">
                    {post.category && (
                      <Link
                        href={categoryHref}
                        className="transition-colors hover:text-white"
                      >
                        {post.category}
                      </Link>
                    )}
                    <span aria-hidden>·</span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden>·</span>
                    <span>{post.readingMinutes} min de lecture</span>
                  </p>
                  <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
                    {post.title}
                  </h1>
                </Reveal>
                <Reveal i={1}>
                  <p className="mt-6 text-base text-(--home-muted)">
                    Par{' '}
                    <Link
                      href={RouteLink.aboutMe}
                      rel="author"
                      className={linkClass}
                    >
                      {AUTHOR_NAME}
                    </Link>
                    , développeur freelance à La Rochelle.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd(post)),
          }}
        />

        <div className="container pt-4 pb-16 md:pb-24 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[260px_minmax(0,1fr)]">
          {post.headings.length > 1 && (
            <aside className="mb-12 lg:mb-0">
              <nav
                aria-label="Sommaire de l’article"
                className="lg:sticky lg:top-28"
              >
                <p className="text-sm font-medium text-white">
                  Dans cet article
                </p>
                <ol className="mt-4 space-y-2 border-l border-white/10">
                  {post.headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="-ml-px block border-l border-transparent pl-4 text-sm leading-6 text-(--home-muted) transition-colors hover:border-(--home-orange) hover:text-white"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
          <article
            id="article"
            className={`article prose prose-lg prose-invert max-w-none ${post.headings.length > 1 ? '' : 'lg:col-span-2'}`}
          >
            <post.content />
          </article>
        </div>

        <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
          <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
          <div className="container grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
                {step.title}
              </h2>
              <span className="home-rule mt-5" aria-hidden />
            </Reveal>
            <Reveal i={1}>
              <div className="space-y-4 leading-7 text-white/85">
                <p>{step.text}</p>
                <p className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link href={step.href} className={linkClass}>
                    {step.label}
                  </Link>
                  <Link href={RouteLink.contact} className={linkClass}>
                    Me contacter
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {post.category && (
          <section className="container py-20 md:py-28">
            <SectionHeading>À lire ensuite</SectionHeading>
            <ArticleCards
              category={post.category}
              limit={4}
              exclude={post.slug}
            />
            <div className="mt-12 flex justify-center">
              <Link href={categoryHref} className="home-btn-ghost home-glassy">
                Tous les articles {post.category}
              </Link>
            </div>
          </section>
        )}
      </Layout>
    </div>
  )
}
