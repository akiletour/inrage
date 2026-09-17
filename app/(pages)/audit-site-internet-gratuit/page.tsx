import Image from 'next/image'
import Link from 'next/link'

import Diagonal from '@component/Diagonal'
import { getPortfolioItems } from '@lib/portfolio'
import { RouteLink, getCanonicalUrl } from '@lib/router'

import AuditHero from './AuditHero'

export const metadata = {
  title: 'Audit gratuit de votre site internet - inRage',
  description:
    'Pascal Gault, développeur web à La Rochelle, passe votre site en revue (vitesse, sécurité, référencement) et vous présente ses recommandations en trente minutes. Gratuit.',
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

const CHECKS = [
  {
    title: 'Vitesse',
    text: 'Le temps d’affichage réel sur mobile et sur ordinateur, ce qui alourdit les pages et les indicateurs que Google prend en compte.',
  },
  {
    title: 'Sécurité',
    text: 'La version de votre CMS et de PHP, les extensions laissées sans mise à jour, le certificat HTTPS.',
  },
  {
    title: 'Référencement',
    text: 'Les titres et descriptions, les pages que Google n’indexe pas, votre présence sur les recherches locales.',
  },
  {
    title: 'Mobile et accessibilité',
    text: 'La lisibilité sur téléphone, les contrastes, des formulaires utilisables au doigt comme au clavier.',
  },
  {
    title: 'Hébergement et domaine',
    text: 'La qualité de l’hébergement, la date de renouvellement du nom de domaine, les réglages qui envoient vos e-mails en spam.',
  },
  {
    title: 'Ce qu’il faut faire',
    text: 'Ce qu’il faut corriger d’abord, ce qui peut attendre, et ce que ça coûterait si vous voulez que je m’en occupe.',
  },
]

const REFERENCE_SLUGS = [
  'editions-delcourt',
  'institut-imagine',
  'camping-la-mouette-rieuse',
  'boutique-guedelon',
]

const FAQ = [
  {
    question: 'C’est vraiment gratuit ?',
    answer:
      'Oui. Vous repartez avec le rapport et vous en faites ce que vous voulez. Si vous voulez que je réalise les corrections ou une refonte, je vous fais un devis à part.',
  },
  {
    question: 'Dois-je vous donner des accès à mon site ?',
    answer:
      'Non. Je regarde votre site depuis l’extérieur, comme le ferait un visiteur ou Google, et je ne modifie rien.',
  },
  {
    question: 'Quels sites auditez-vous ?',
    answer:
      'WordPress, WooCommerce, Prestashop, Joomla, Symfony, React ou site sur mesure. Plus le site est ancien, plus l’audit a de chances de vous être utile.',
  },
  {
    question: 'Sous quel délai ?',
    answer:
      'Je vous rappelle sous 24 heures pour fixer l’échange, et je vous présente l’audit sous 5 jours ouvrés.',
  },
  {
    question: 'Pourquoi le faire gratuitement ?',
    answer:
      'Parce que c’est comme ça que beaucoup de mes clients ont commencé. Vous voyez comment je travaille avant de signer quoi que ce soit, et vous n’êtes engagé à rien.',
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
          className="min-h-11 inline-flex items-center text-white font-medium tabular-nums whitespace-nowrap transition-colors duration-150 hover:text-orange"
        >
          {PHONE_DISPLAY}
        </a>
      </header>

      <AuditHero />

      <Diagonal
        className="h-16 sm:h-24 lg:h-40"
        bgClass="fill-gray-darker"
        bgCorner="fill-orange"
      />

      <section className="bg-gray-darker pb-20">
        <div className="container">
          <h2 className="text-white text-3xl sm:text-4xl font-light text-balance">
            Ce que <span className="font-bold">je regarde</span>
          </h2>
          <dl className="mt-10 grid gap-x-16 md:grid-cols-2 border-t border-[#2f2f2f]">
            {CHECKS.map((check) => (
              <div key={check.title} className="py-6 border-b border-[#2f2f2f]">
                <dt className="text-white font-medium text-lg">
                  {check.title}
                </dt>
                <dd className="mt-2 text-gray-light max-w-[52ch]">
                  {check.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-light text-balance">
              Qui va regarder <span className="font-bold">votre site</span>
            </h2>
            <p className="mt-6 text-lg text-gray-light max-w-[52ch]">
              Moi, Pascal Gault. Je développe des sites à La Rochelle depuis
              2008, d’abord en agence, puis à mon compte avec inRage depuis
              2011.
            </p>
            <p className="mt-4 text-lg text-gray-light max-w-[52ch]">
              J’en maintiens aujourd’hui plus de 150, pour des commerces du coin
              comme pour les Éditions Delcourt. Ce sont les mêmes vérifications
              que je fais pour eux chaque mois.
            </p>
          </div>

          <ul className="grid gap-5 grid-cols-2">
            {references.map((project) => (
              <li key={project.slug} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md outline-1 -outline-offset-1 outline-white/10">
                  <Image
                    src={`/images/portfolio/${project.thumbnail}`}
                    alt={`Site ${project.title} réalisé par inRage`}
                    width={379}
                    height={671}
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="w-full h-auto transition-transform duration-[2400ms] ease-in-out group-hover:-translate-y-[57%] motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-light">{project.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-darker py-20">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-light text-balance">
              Vos <span className="font-bold">questions</span>
            </h2>
            <p className="mt-6 text-gray-light">
              Vous préférez en parler de vive voix ? Appelez-moi du lundi au
              samedi, de 9h à 18h.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-3 inline-block text-3xl font-bold text-orange tabular-nums whitespace-nowrap transition-colors duration-150 hover:text-white"
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
        </div>
      </section>

      <section className="container py-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white text-2xl sm:text-3xl font-light text-balance">
          Votre site mérite <span className="font-bold">un second regard</span>.
        </p>
        <a href="#audit-form" className="button h-auto! py-4 px-6 self-start">
          Demander mon audit
        </a>
      </section>
    </div>
  )
}
