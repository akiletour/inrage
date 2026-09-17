import Image from 'next/image'
import Link from 'next/link'

import ContactForm from '@component/ContactForm'
import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink, getCanonicalUrl } from '@lib/router'

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

const PROMISES = [
  'Vitesse, sécurité et référencement passés au crible',
  'Un plan d’action priorisé, en langage clair',
  'Un échange de 30 minutes pour tout vous expliquer',
]

const CHECKS = [
  {
    title: 'Vitesse de chargement',
    text: 'Temps d’affichage sur mobile et ordinateur, poids des images, indicateurs Core Web Vitals que Google utilise pour classer les sites.',
  },
  {
    title: 'Sécurité',
    text: 'Version de votre CMS, extensions obsolètes, version de PHP, certificat HTTPS et failles connues qui exposent votre site.',
  },
  {
    title: 'Référencement naturel',
    text: 'Titres, descriptions, structure des pages, indexation par Google et visibilité sur les recherches locales.',
  },
  {
    title: 'Mobile et accessibilité',
    text: 'Affichage sur téléphone, lisibilité, contrastes et navigation au clavier pour ne perdre aucun visiteur.',
  },
  {
    title: 'Hébergement et sauvegardes',
    text: 'Qualité de l’hébergement, existence de sauvegardes récentes, renouvellement du nom de domaine.',
  },
  {
    title: 'Plan d’action priorisé',
    text: 'Ce qu’il faut corriger en premier, ce qui peut attendre, et une estimation si vous souhaitez que je m’en charge.',
  },
]

const STEPS = [
  {
    title: 'Vous m’envoyez l’adresse de votre site',
    text: 'Deux minutes pour remplir le formulaire. Aucun accès à votre site n’est nécessaire.',
  },
  {
    title: 'J’analyse votre site',
    text: 'Je passe votre site au crible avec les mêmes outils et la même méthode que pour mes clients en maintenance.',
  },
  {
    title: 'On en parle ensemble',
    text: 'Je vous présente le rapport en 30 minutes, en visio ou autour d’un café à La Rochelle. Vous repartez avec le document.',
  },
]

const FIGURES = [
  { value: 'Depuis 2008', label: 'développeur web à La Rochelle' },
  { value: '150+', label: 'sites sous maintenance' },
  { value: '5,0 / 5', label: 'note moyenne sur Google' },
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
          className="min-h-11 inline-flex items-center text-orange font-bold tabular-nums whitespace-nowrap transition-colors duration-150 hover:text-white"
        >
          {PHONE_DISPLAY}
        </a>
      </header>

      <section className="container pt-6 pb-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className="lg:pt-6">
          <p className="text-xs uppercase tracking-widest text-orange">
            Offert, sans engagement
          </p>
          <h1 className="mt-4 text-white font-bold text-balance leading-[1.05] tracking-tight text-4xl sm:text-5xl">
            Audit gratuit de votre site internet
          </h1>
          <p className="mt-6 max-w-[55ch] text-xl text-gray-light text-pretty">
            Votre site est lent, vieillit ou ne vous amène plus de clients ? Je
            l’analyse en détail et je vous remets un plan d’action clair pour le
            remettre à niveau.
          </p>
          <ul className="mt-8 space-y-3">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex gap-3 text-white">
                <span
                  aria-hidden="true"
                  className="flex-none mt-2 w-2 h-2 rounded-full bg-orange"
                />
                <span>{promise}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-light">
            Par Pascal Gault, développeur web freelance à La Rochelle depuis
            2008.
          </p>
        </div>

        <div
          id="audit-form"
          className="rounded-lg bg-gray-darker p-6 sm:p-8 shadow-[0_0_0_1px_rgba(229,126,33,0.5)] scroll-mt-8"
        >
          <h2 className="text-white text-2xl font-bold text-balance">
            Demandez votre audit
          </h2>
          <p className="mt-2 mb-6 text-gray-light">
            Réponse sous 24 heures, audit présenté sous 5 jours ouvrés.
          </p>
          <ContactForm variant="audit" />
        </div>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container">
          <h2 className="text-white text-3xl font-bold text-balance">
            Ce que contient l’audit
          </h2>
          <p className="mt-4 max-w-2xl text-gray-light">
            Six points que j’examine sur chaque site, avec des explications
            compréhensibles même si vous n’êtes pas technique.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CHECKS.map((check, index) => (
              <li
                key={check.title}
                className="flex flex-col gap-3 p-6 rounded-lg bg-gray-dark shadow-[0_0_0_1px_rgba(255,255,255,0.09)]"
              >
                <span className="text-orange font-bold text-2xl tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white font-medium text-lg text-balance">
                  {check.title}
                </h3>
                <p className="text-sm text-gray-light">{check.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-white text-3xl font-bold text-balance">
          Comment ça se passe
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="pt-6 border-t-2 border-orange/60">
              <div className="text-orange font-bold text-3xl tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-2 text-white font-medium text-xl text-balance">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-light">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-darker py-16">
        <div className="container">
          <h2 className="text-white text-3xl font-bold text-balance">
            Ils m’ont fait confiance
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-[#2f2f2f]">
            {FIGURES.map((figure) => (
              <li key={figure.value}>
                <div className="text-orange font-bold text-3xl tabular-nums">
                  {figure.value}
                </div>
                <div className="mt-1 text-sm text-gray-light">
                  {figure.label}
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4">
            {references.map((project) => (
              <li key={project.slug}>
                <div className="relative aspect-[257/400] overflow-hidden rounded-md">
                  <Image
                    src={`/images/portfolio/${project.thumbnail}`}
                    alt={`Site ${project.title} réalisé par inRage`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-top outline-1 -outline-offset-1 outline-white/10"
                  />
                </div>
                <p className="mt-3 text-white font-medium">{project.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container py-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2 className="text-white text-3xl font-bold text-balance">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-gray-light">
            Vous préférez en parler de vive voix ? Je suis joignable du lundi au
            samedi, de 9h à 18h.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-block text-3xl font-bold text-orange tabular-nums whitespace-nowrap transition-colors duration-150 hover:text-orange-dark"
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

      <section className="container pb-8">
        <div className="rounded-lg bg-gray-darker px-6 py-10 sm:px-10 text-center shadow-[0_0_0_1px_rgba(229,126,33,0.5)]">
          <h2 className="text-white text-3xl font-bold text-balance">
            Et si on regardait votre site ensemble ?
          </h2>
          <p className="mt-4 mx-auto max-w-[55ch] text-gray-light">
            Deux minutes pour la demande, un plan d’action clair à la clé.
          </p>
          <a href="#audit-form" className="button mt-8">
            Demander mon audit gratuit
          </a>
        </div>
      </section>
    </div>
  )
}
