import Image from 'next/image'
import Link from 'next/link'

import AboutHero from '@component/about/AboutHero'
import {
  COMMITMENTS,
  GOOGLE_PLACE_URL,
  REVIEWS,
  TEAM,
} from '@component/about/data'
import Timeline from '@component/about/Timeline'
import ContactForm from '@component/ContactForm'
import Glass from '@component/home/Glass'
import Reveal from '@component/home/Reveal'
import SectionHeading from '@component/home/SectionHeading'
import Layout from '@component/Layout'
import Socials from '@component/Socials'
import ImageInvoicer from '@image/articles/invoicer-cover.jpg'
import ImageOcta from '@image/articles/octa-wordpress.jpg'
import { getCanonicalUrl, RouteLink } from '@lib/router'
import { breadcrumbJsonLd } from '@util/seo-generators'

export const metadata = {
  title: 'Pascal Gault, développeur web freelance à La Rochelle',
  description:
    'Développeur web freelance à La Rochelle depuis 2008 : WordPress, Prestashop, Symfony et React. Mon parcours en agence, mes expériences et ma façon de travailler.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.aboutMe),
  },
}

const SKILLS = [
  {
    title: 'Sites WordPress sur mesure',
    text: 'avec Octa, mon thème de départ',
    href: RouteLink.prestationWordPress,
  },
  {
    title: 'Boutiques Prestashop et WooCommerce',
    text: 'catalogue, modules, intégrations ERP',
    href: RouteLink.prestationPrestashop,
  },
  {
    title: 'Applications Symfony',
    text: 'extranets, outils de gestion, API',
    href: RouteLink.prestationSymfony,
  },
  {
    title: 'Applications React et Next.js',
    text: 'interfaces rapides, SEO soigné',
    href: RouteLink.prestationReact,
  },
  {
    title: 'Hébergement infogéré en France',
    text: 'serveurs que j’administre, supervisés 24h/24',
    href: RouteLink.prestationHosting,
  },
  {
    title: 'Maintenance et sécurité',
    text: 'mises à jour, sauvegardes, interventions',
    href: RouteLink.prestationTma,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': getCanonicalUrl(RouteLink.aboutMe),
      name: 'Pascal Gault, développeur web freelance à La Rochelle',
      mainEntity: { '@id': getCanonicalUrl('/#person') },
      breadcrumb: breadcrumbJsonLd([
        { name: 'À propos de moi', item: getCanonicalUrl(RouteLink.aboutMe) },
      ]),
    },
    {
      '@type': 'Person',
      '@id': getCanonicalUrl('/#person'),
      name: 'Pascal Gault',
      image: getCanonicalUrl('/images/pascal-gault-bureau.jpg'),
      jobTitle: 'Développeur web freelance',
      worksFor: { '@id': getCanonicalUrl('/#business') },
      alumniOf: [
        { '@type': 'Organization', name: 'Com’On Screen' },
        { '@type': 'Organization', name: 'Moonscoop Digital Media' },
      ],
      knowsAbout: [
        'WordPress',
        'PrestaShop',
        'WooCommerce',
        'Symfony',
        'React',
        'Next.js',
        'Hébergement web',
        'Maintenance de site web',
      ],
      sameAs: [
        'https://www.linkedin.com/in/akiletour/',
        'https://twitter.com/akiletour',
        'https://github.com/akiletour',
        'https://www.malt.fr/profile/pascalgault',
        GOOGLE_PLACE_URL,
      ],
    },
  ],
}

export default function AboutMe() {
  return (
    <Layout hero={<AboutHero />}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container py-16 md:py-24">
        <div className="grid items-start gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <Reveal>
            <Glass className="p-7 md:p-9">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ce que je fais moi-même
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {SKILLS.map((skill) => (
                  <li key={skill.title}>
                    <Link href={skill.href} className="group block">
                      <span className="font-medium text-white transition-colors group-hover:text-(--home-orange-text)">
                        {skill.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-(--home-muted)">
                        {skill.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>
          <Reveal i={1}>
            <Glass className="p-7 md:p-9">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ce que je confie au collectif
              </h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <span className="font-medium text-white">
                    Identité visuelle et maquettes
                  </span>
                  <span className="mt-0.5 block text-sm text-(--home-muted)">
                    Ludovic Boussion, graphiste UI/UX
                  </span>
                </li>
                <li>
                  <span className="font-medium text-white">
                    Référencement, Google Ads, visibilité dans les IA
                  </span>
                  <span className="mt-0.5 block text-sm text-(--home-muted)">
                    un partenaire spécialisé, en marque blanche
                  </span>
                </li>
                <li>
                  <span className="font-medium text-white">
                    Conseil et cadrage des projets
                  </span>
                  <span className="mt-0.5 block text-sm text-(--home-muted)">
                    Matthieu Verdier, directeur conseil
                  </span>
                </li>
              </ul>
              <p className="mt-8 border-t border-white/10 pt-6 leading-7 text-(--home-muted)">
                Je ne vends pas ce que je ne sais pas faire. Quand un projet
                demande un graphiste ou un référenceur, je le dis, je l’intègre
                au devis et je reste votre seul interlocuteur.
              </p>
            </Glass>
          </Reveal>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb top-[-10%] right-[-15%]" aria-hidden />
        <div className="container">
          <SectionHeading text="Dix-huit ans de développement web à La Rochelle, en agence puis en freelance.">
            Parcours
          </SectionHeading>
          <div className="mx-auto max-w-4xl">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading text="Au-delà des sites clients, deux outils que j’ai construits et que j’utilise tous les jours. Ils disent plus sur ma façon de travailler qu’une liste de compétences.">
          Ce que j’ai construit
        </SectionHeading>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <Reveal>
            <a
              href="https://invoicer.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="home-card home-article home-glass flex h-full flex-col"
            >
              <div className="home-article-media relative aspect-[2.15/1] overflow-hidden">
                <Image
                  src={ImageInvoicer}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="home-article-img object-cover"
                />
                <span className="home-chip absolute top-4 left-4">
                  Logiciel, depuis 2017
                </span>
              </div>
              <div className="flex grow flex-col p-7">
                <h3 className="home-card-title text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Invoicer
                </h3>
                <p className="mt-3 leading-7 text-(--home-muted)">
                  Le logiciel de facturation que j’ai écrit pour inRage, puis
                  ouvert aux auto-entrepreneurs : devis, factures, relances,
                  déclaration URSSAF. Édité par inRage, hébergé en France.
                </p>
                <span className="home-arrow mt-auto inline-flex items-center gap-2 pt-6 font-medium text-white">
                  invoicer.fr <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </Reveal>
          <div className="flex flex-col gap-6">
            <Reveal i={1} className="grow">
              <a
                href="https://github.com/inrage/octa"
                target="_blank"
                rel="noreferrer noopener"
                className="home-card home-article home-glass flex h-full flex-col"
              >
                <div className="home-article-media relative aspect-[2.15/1] overflow-hidden">
                  <Image
                    src={ImageOcta}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="home-article-img object-cover"
                  />
                  <span className="home-chip absolute top-4 left-4">
                    Open source
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="home-card-title text-xl font-semibold text-white">
                    Octa, thème de départ WordPress
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-(--home-muted)">
                    La base de tous mes sites WordPress : Sage, Tailwind, blocs
                    Gutenberg sur mesure. Public sur GitHub.
                  </p>
                </div>
              </a>
            </Reveal>
            <Reveal i={2}>
              <a
                href="https://github.com/akiletour/inrage"
                target="_blank"
                rel="noreferrer noopener"
                className="home-card home-article home-glass block p-6"
              >
                <h3 className="home-card-title text-xl font-semibold text-white">
                  Ce site
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--home-muted)">
                  Next.js, Tailwind et MDX, hébergé sur mon infrastructure. Son
                  code source est public, erreurs comprises.
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-oblique-both relative isolate overflow-hidden bg-(--home-bg-deep) py-24 md:py-32">
        <div className="home-orb bottom-[-20%] left-[-15%]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Le collectif
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[48ch] leading-7 text-(--home-muted)">
              Je travaille seul sur le code, jamais seul sur un projet. Trois
              personnes avec qui je collabore depuis des années, à La Rochelle.
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
            {TEAM.map((person, i) => (
              <li key={person.name}>
                <Reveal i={i} className="h-full">
                  <Glass className="h-full p-6">
                    <div className="text-lg font-medium text-white">
                      {person.href ? (
                        <Link
                          href={person.href}
                          className="transition-colors hover:text-(--home-orange-text)"
                        >
                          {person.name}
                        </Link>
                      ) : (
                        person.name
                      )}
                    </div>
                    <div className="mt-1 text-xs tracking-widest text-(--home-orange-text) uppercase">
                      {person.role}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-(--home-muted)">
                      {person.text}
                    </p>
                  </Glass>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-5xl">
              Mes engagements
            </h2>
            <span className="home-rule mt-5" aria-hidden />
            <p className="mt-5 max-w-[44ch] leading-7 text-(--home-muted)">
              Cinq règles que je tiens depuis le premier devis d’inRage.
            </p>
          </Reveal>
          <ol className="divide-y divide-white/10">
            {COMMITMENTS.map((item, i) => (
              <li key={item.title}>
                <Reveal i={i}>
                  <div className="grid grid-cols-[48px_1fr] gap-x-4 py-6">
                    <span className="home-num text-2xl font-semibold text-(--home-orange-text)">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[60ch] leading-7 text-(--home-muted)">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <div className="home-dots absolute inset-0 -z-10" aria-hidden />
        <div className="container">
          <SectionHeading text="Neuf avis, tous à cinq étoiles, laissés sur la fiche Google d’inRage. En voici trois, mot pour mot.">
            Ils en parlent mieux que moi
          </SectionHeading>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <Reveal key={review.author} i={i} className="h-full">
                <Glass className="flex h-full flex-col p-7">
                  <span className="home-quote" aria-hidden>
                    “
                  </span>
                  <blockquote className="-mt-6 leading-7 text-white/85">
                    {review.text}
                  </blockquote>
                  <footer className="mt-auto pt-6">
                    <div
                      className="home-stars text-sm"
                      aria-label="5 étoiles sur 5"
                    >
                      ★★★★★
                    </div>
                    <div className="mt-2 font-medium text-white">
                      {review.author}
                    </div>
                    <div className="text-sm text-(--home-muted)">
                      {review.since}
                    </div>
                  </footer>
                </Glass>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href={GOOGLE_PLACE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="home-btn-ghost home-glassy"
            >
              Lire les 9 avis sur Google
            </a>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-[260px_1fr] md:gap-16">
          <Reveal className="mx-auto w-full max-w-[260px]">
            <div className="home-shot home-portrait relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/pascal-gault-portrait.jpg"
                alt="Portrait de Pascal Gault"
                fill
                sizes="260px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Hors écran
            </h2>
            <p className="mt-5 max-w-[60ch] leading-7 text-(--home-muted)">
              J’ai écrit mes premières pages web adolescent, pour les
              associations de jeux vidéo dont je faisais partie. Plus de la
              moitié de ma vie plus tard, c’est toujours le même plaisir :
              prendre un problème concret et le résoudre avec du code.
            </p>
            <p className="mt-4 max-w-[60ch] leading-7 text-(--home-muted)">
              Je vis près de La Rochelle avec Christelle, ma femme, et notre
              fille Octavia. Entre deux projets, je bricole ce site, qui me sert
              de carnet de croquis et de terrain d’essai.
            </p>
            <div className="mt-6">
              <Socials />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container pt-16 pb-10 md:pt-24">
        <SectionHeading text="Un projet web à La Rochelle, en Charente-Maritime ou ailleurs ? Remplissez le formulaire, je vous réponds dans la journée.">
          Contact
        </SectionHeading>
        <Reveal i={1} className="mx-auto mt-12 max-w-4xl">
          <ContactForm />
        </Reveal>
      </section>
    </Layout>
  )
}
