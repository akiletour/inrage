import Image from 'next/image'

import Link from '@component/NoScrollLink'
import { RouteLink } from '@lib/router'

import LogoWhite from '../../public/logo-white.svg'
import Socials from '../components/Socials'

const PRESTATION_LINKS = [
  {
    href: RouteLink.developpeurLaRochelle,
    label: 'Développeur web La Rochelle',
  },
  { href: RouteLink.prestationWordPress, label: 'Création de site WordPress' },
  {
    href: RouteLink.prestationPrestashop,
    label: 'Création de site Prestashop',
  },
  { href: RouteLink.prestationReact, label: 'Développement React & Next.js' },
  { href: RouteLink.prestationSymfony, label: 'Développement Symfony' },
  { href: RouteLink.prestationTmaWordPress, label: 'Maintenance WordPress' },
  { href: RouteLink.prestationTmaPrestashop, label: 'Maintenance Prestashop' },
  { href: RouteLink.prestationHosting, label: 'Hébergement web infogéré' },
]

const SITE_LINKS = [
  { href: RouteLink.aboutMe, label: 'À propos de moi' },
  { href: RouteLink.prestations, label: 'Prestations' },
  { href: RouteLink.portfolio, label: 'Portfolio' },
  { href: RouteLink.blog, label: 'Blog' },
  { href: RouteLink.contact, label: 'Contactez-moi' },
  { href: RouteLink.legals, label: 'Mentions légales' },
  { href: RouteLink.sitemap, label: 'Plan du site' },
]

function FooterTitle({ children }: { children: string }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-gray mb-4">
      {children}
    </h2>
  )
}

function FooterLinks({
  links,
}: {
  links: Array<{ href: string; label: string }>
}) {
  return (
    <ul className="flex flex-col gap-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <span className="text-gray-light transition-colors hover:text-orange">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="mt-10">
      <svg
        className="relative w-full h-[15vh] max-h-20 -mb-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(20,20,20,0.7" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(20,20,20,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(20,20,20,0.3)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#141414" />
        </g>
      </svg>

      <div className="bg-gray-darker pt-8 pb-10">
        <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <Image
              className="opacity-30"
              src={LogoWhite}
              alt="inRage - Pascal GAULT"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <p className="text-sm max-w-xs">
              Pascal Gault, développeur web freelance à La Rochelle. Création de
              sites WordPress, Prestashop, Symfony et React, maintenance et
              hébergement.
            </p>
            <Socials />
          </div>

          <div>
            <FooterTitle>Prestations</FooterTitle>
            <FooterLinks links={PRESTATION_LINKS} />
          </div>

          <div>
            <FooterTitle>inRage</FooterTitle>
            <FooterLinks links={SITE_LINKS} />
          </div>

          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <FooterTitle>Contact</FooterTitle>
            <a
              href="tel:0682963889"
              className="text-2xl font-bold text-orange whitespace-nowrap tabular-nums transition-colors hover:text-orange-dark"
            >
              06 82 96 38 89
            </a>
            <address className="not-italic text-sm text-gray-light">
              10-14 rue Jean Perrin
              <br />
              17000 La Rochelle
            </address>
            <p className="text-xs">
              SIRET 813 430 592 00010
              <br />
              RCS La Rochelle 813 430 592
            </p>
            <Link href={RouteLink.contact}>
              <span className="button self-start">Demandez un devis</span>
            </Link>
          </div>
        </div>

        <div className="container mt-10 pt-6 border-t border-[#2a2a2a] flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs">
          <div>
            © 2008-{new Date().getFullYear()} inRage SARL. Tous droits réservés.
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span>
              Nous éditons aussi{' '}
              <a
                href="https://invoicer.fr"
                className="text-orange hover:underline"
              >
                Invoicer
              </a>
              , logiciel de facturation pour auto-entrepreneurs.
            </span>
            <a
              href="https://github.com/akiletour/inrage"
              className="inline-flex items-center gap-2 text-gray-light hover:text-white"
            >
              Code open-source sur
              <Image
                width={72}
                height={16}
                src="/images/github-inline.svg"
                alt="GitHub"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
