import { ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink, getCanonicalUrl } from '@lib/router'

import AuditHero from './AuditHero'
import SpotlightCard from './SpotlightCard'

export const metadata = {
  title: 'Audit gratuit de votre site internet - inRage',
  description:
    'Vitesse, sécurité, référencement : Pascal Gault, développeur web à La Rochelle, analyse votre site et vous remet un plan d’action clair. Gratuit et sans engagement.',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.auditGratuit),
  },
  robots: {
    index: false,
    follow: true,
  },
}

const PHONE_DISPLAY = '06 82 96 38 89'
const PHONE_HREF = 'tel:0682963889'

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="flex w-11 h-11 items-center justify-center rounded-lg bg-orange/10 text-orange shadow-[0_0_0_1px_rgba(229,126,33,0.25)]">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </span>
  )
}

const CHECKS = [
  {
    title: 'Vitesse de chargement',
    text: 'Temps d’affichage sur mobile et ordinateur, poids des images, indicateurs Core Web Vitals que Google utilise pour classer les sites.',
    icon: (
      <>
        <path d="M12 14l4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
  },
  {
    title: 'Sécurité',
    text: 'Version de votre CMS, extensions obsolètes, version de PHP, certificat HTTPS et failles connues qui exposent votre site.',
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Référencement naturel',
    text: 'Titres, descriptions, structure des pages, indexation par Google et visibilité sur les recherches locales.',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </>
    ),
  },
  {
    title: 'Mobile et accessibilité',
    text: 'Affichage sur téléphone, lisibilité, contrastes et navigation au clavier pour ne perdre aucun visiteur.',
    icon: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: 'Hébergement et sauvegardes',
    text: 'Qualité de l’hébergement, existence de sauvegardes récentes, renouvellement du nom de domaine.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="13" width="18" height="7" rx="2" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
  },
  {
    title: 'Plan d’action priorisé',
    text: 'Ce qu’il faut corriger en premier, ce qui peut attendre, et une estimation si vous souhaitez que je m’en charge.',
    icon: (
      <>
        <path d="M9 6h11M9 12h11M9 18h11" />
        <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
      </>
    ),
  },
]

const STEPS = [
  {
    title: 'Vous m’envoyez l’adresse',
    text: 'Deux minutes pour remplir le formulaire. Aucun accès à votre site n’est nécessaire.',
  },
  {
    title: 'J’analyse votre site',
    text: 'À la main, avec les mêmes outils et la même méthode que pour mes clients en maintenance.',
  },
  {
    title: 'On en parle ensemble',
    text: 'Trente minutes en visio ou autour d’un café à La Rochelle. Vous repartez avec le rapport.',
  },
]

const FIGURES = [
  { value: '18 ans', label: 'De développement web à La Rochelle' },
  { value: '150+', label: 'Sites sous maintenance' },
  { value: '5,0', label: 'Note moyenne sur Google' },
]

const REFERENCE_SLUGS = [
  'editions-delcourt',
  'institut-imagine',
  'camping-la-mouette-rieuse',
  'boutique-guedelon',
]

const FAQ = [
  {
    question: 'L’audit est-il vraiment gratuit ?',
    answer:
      'Oui, sans engagement. Vous repartez avec le rapport et vous en faites ce que vous voulez. Si vous souhaitez que je réalise les corrections ou une refonte, je vous fais un devis séparé.',
  },
  {
    question: 'Dois-je vous donner des accès à mon site ?',
    answer:
      'Non. L’analyse se fait depuis l’extérieur, comme le ferait un visiteur ou Google. Rien n’est modifié sur votre site. Si vous voulez aller plus loin ensuite, on en discute.',
  },
  {
    question: 'Quels types de sites auditez-vous ?',
    answer:
      'WordPress, WooCommerce, Prestashop, Joomla, Symfony, React ou site développé sur mesure. Les sites anciens sont justement ceux où l’audit est le plus utile.',
  },
  {
    question: 'Sous quel délai ?',
    answer:
      'Je vous recontacte sous 24 heures pour caler l’échange, et l’audit vous est présenté sous 5 jours ouvrés.',
  },
  {
    question: 'Pourquoi le proposez-vous gratuitement ?',
    answer:
      'C’est la meilleure façon de vous montrer comment je travaille. Beaucoup de refontes et de contrats de maintenance commencent ainsi, mais vous n’avez aucune obligation.',
  },
]

export default async function AuditGratuit() {
  const projects = await getPortfolioItems(-1)
  const references = REFERENCE_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug)
  ).filter((project) => project !== undefined)

  return (
    <div>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 65% 35%, black 20%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 65% 35%, black 20%, transparent 75%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] -z-10 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(229,126,33,0.22), rgba(229,126,33,0.06) 55%, transparent)',
          }}
        />

        <header className="container flex items-center justify-between py-5">
          <Link href="/" aria-label="inRage, retour à l’accueil">
            <Image
              src="/logo.svg"
              width={140}
              height={48}
              alt="inRage"
              priority
            />
          </Link>
          <a
            href={PHONE_HREF}
            className="min-h-11 inline-flex items-center gap-2 rounded-full px-4 text-white font-medium tabular-nums whitespace-nowrap shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-[color,box-shadow] duration-150 hover:text-orange hover:shadow-[0_0_0_1px_rgba(229,126,33,0.5)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-orange"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </header>

        <AuditHero />
      </div>

      <section className="bg-gray-darker py-20">
        <div className="container">
          <p className="text-xs uppercase tracking-widest text-orange">
            Six points passés au crible
          </p>
          <h2 className="mt-3 text-white text-4xl font-bold text-balance tracking-tight">
            Ce que contient l’audit
          </h2>
          <p className="mt-4 max-w-2xl text-gray-light">
            Des explications compréhensibles même si vous n’êtes pas technique,
            et des priorités claires plutôt qu’une liste de problèmes.
          </p>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CHECKS.map((check) => (
              <SpotlightCard key={check.title}>
                <Icon>{check.icon}</Icon>
                <h3 className="mt-5 text-white font-medium text-xl text-balance">
                  {check.title}
                </h3>
                <p className="mt-2 text-sm text-gray-light">{check.text}</p>
              </SpotlightCard>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-20">
        <p className="text-xs uppercase tracking-widest text-orange">
          Simple et rapide
        </p>
        <h2 className="mt-3 text-white text-4xl font-bold text-balance tracking-tight">
          Comment ça se passe
        </h2>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3">
          <span
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-6 right-[calc(33.333%-1.5rem)] h-px"
            style={{
              background:
                'linear-gradient(to right, #e57e21, rgba(229,126,33,0.15))',
            }}
          />
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="relative flex w-12 h-12 items-center justify-center rounded-full bg-gray-dark text-orange font-bold text-lg tabular-nums shadow-[0_0_0_1px_rgba(229,126,33,0.6),0_0_24px_rgba(229,126,33,0.25)]">
                {index + 1}
              </span>
              <h3 className="mt-6 text-white font-medium text-xl text-balance">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[36ch] text-gray-light">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-darker py-20 overflow-hidden">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange">
                Références
              </p>
              <h2 className="mt-3 text-white text-4xl font-bold text-balance tracking-tight">
                Ils m’ont fait confiance
              </h2>
            </div>
            <ul className="grid grid-cols-3 gap-6">
              {FIGURES.map((figure) => (
                <li key={figure.label}>
                  <div className="text-4xl sm:text-5xl font-bold tracking-tight tabular-nums bg-linear-to-b from-white to-gray bg-clip-text text-transparent">
                    {figure.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-light">
                    {figure.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-14 grid gap-6 grid-cols-2 lg:grid-cols-4">
            {references.map((project) => (
              <li key={project.slug} className="group">
                <div className="overflow-hidden rounded-xl bg-gray-dark shadow-[0_0_0_1px_rgba(255,255,255,0.09),0_12px_32px_rgba(0,0,0,0.35)] transition-shadow duration-150 group-hover:shadow-[0_0_0_1px_rgba(229,126,33,0.45),0_12px_32px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-1.5 px-3 h-7 border-b border-[#2f2f2f]">
                    <span className="w-2 h-2 rounded-full bg-[#3a3a3a]" />
                    <span className="w-2 h-2 rounded-full bg-[#3a3a3a]" />
                    <span className="w-2 h-2 rounded-full bg-[#3a3a3a]" />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`/images/portfolio/${project.thumbnail}`}
                      alt={`Site ${project.title} réalisé par inRage`}
                      width={379}
                      height={671}
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="w-full h-auto transition-transform duration-[2400ms] ease-in-out will-change-transform group-hover:-translate-y-[57%] motion-reduce:transition-none"
                    />
                  </div>
                </div>
                <p className="mt-3 text-white font-medium">{project.title}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray">
            Survolez une réalisation pour la faire défiler.
          </p>
        </div>
      </section>

      <section className="container py-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2 className="text-white text-4xl font-bold text-balance tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-gray-light">
            Vous préférez en parler de vive voix ? Je suis joignable du lundi au
            samedi, de 9h à 18h.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-block text-3xl font-bold text-orange tabular-nums whitespace-nowrap transition-colors duration-150 hover:text-white"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <div className="divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
          {FAQ.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-white font-medium text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex-none mt-1 text-orange text-2xl leading-none transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-10 text-gray-light max-w-[65ch]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="container pb-12">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gray-darker px-6 py-16 sm:px-12 text-center shadow-[0_0_0_1px_rgba(229,126,33,0.45)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(229,126,33,0.35), transparent 70%)',
            }}
          />
          <h2 className="text-white text-4xl sm:text-5xl font-bold text-balance tracking-tight">
            Et si on regardait votre site ensemble ?
          </h2>
          <p className="mt-4 mx-auto max-w-[50ch] text-lg text-gray-light">
            Deux minutes pour la demande, un plan d’action clair à la clé.
          </p>
          <a
            href="#audit-form"
            className="button mt-8 h-auto! py-4 px-8 text-lg active:scale-[0.96] transition-[scale,background-color,color] duration-150"
          >
            Demander mon audit gratuit
          </a>
        </div>
      </section>
    </div>
  )
}
