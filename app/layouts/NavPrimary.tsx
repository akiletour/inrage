'use client'

import Image from 'next/image'
import { ReactNode, useCallback, useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'
import { useWindowSize } from 'react-use'

import FeaturedProjectMenu from '@component/FeaturedProjectMenu'
import Link from '@component/NoScrollLink'
import FeaturedProjectImage from '@image/featured-projects/parapharmaciemoinschere.jpeg'
import ExpertPrestashop from '@image/platinum-300x300.png'
import ExpertWordPress from '@image/wordpress-expert.png'
import { RouteLink } from '@lib/router'

type LinkProps = {
  title: string
  isActive?: boolean
  href: string
  children?: ReactNode
  closePrimaryNav: () => void
}

function LinkItem({
  title,
  href,
  isActive = false,
  children,
  closePrimaryNav,
}: LinkProps) {
  if (children) {
    return (
      <div className="group">
        <Link href={href} onClick={() => closePrimaryNav()}>
          <span
            className={`uppercase block text-lg pt-4 lg:py-4 group-hover:text-orange ${
              isActive ? 'text-orange' : 'text-white'
            }`}
          >
            {title}
          </span>
        </Link>
        <div className="block lg:hidden group-hover:block group-focus-within:block lg:absolute w-full lg:w-[800px] lg:right-0 lg:top-full lg:pt-4">
          <div className="lg:border-t-4 lg:bg-gray-darker/90 lg:border-orange lg:p-4">
            {children}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Link href={href} onClick={() => closePrimaryNav()}>
      <span
        className={`block pt-4 lg:pt-0 uppercase text-lg ${
          isActive ? 'text-orange' : 'text-white hover:text-orange'
        }`}
      >
        {title}
      </span>
    </Link>
  )
}

type Props = {
  isSticky?: boolean
}

export default function NavPrimary({ isSticky = false }: Props) {
  const pathname = usePathname()
  const { width } = useWindowSize({ initialWidth: 1024 })
  const [isOpen, setOpen] = useState(false)

  const n1TitleClassnames =
    'uppercase text-white text-sm lg:text-base font-bold block hover:text-orange my-2'
  const n2TitleClassnames =
    'block py-2 lg:py-1 font-medium text-orange text-sm leading-4 hover:text-white'

  const toggleNavPrimary = useCallback(() => {
    setOpen((r) => !r)
  }, [])

  return (
    <div className="h-22 relative z-50">
      <div
        className={`sticky-menu ${
          isSticky
            ? 'fixed top-0 left-0 right-0 bg-gray-darker pt-[env(safe-area-inset-top)] transition-colors'
            : ''
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              width="150"
              height="56"
              priority
              alt="Pascal GAULT, développeur Freelance sur La Rochelle"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Link>

          <button
            onClick={toggleNavPrimary}
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            className="burger-menu block lg:hidden bg-orange text-white p-2 rounded-md"
          >
            <svg
              aria-hidden
              className="w-8 h-8"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h18v18H0z" fill="none" />
              <path
                fill="currentColor"
                d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"
              />
            </svg>
          </button>

          <div
            id="nav-menu"
            className={`nav-menu ${
              width < 1025 && isOpen
                ? 'block lg:flex bg-gray-darker divide-y divide-gray-dark space-y-4 text-center flex-col absolute top-full left-0 w-full max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain'
                : 'hidden relative space-x-6'
            } lg:flex items-center`}
          >
            <LinkItem
              closePrimaryNav={() => setOpen(false)}
              isActive={pathname === RouteLink.aboutMe}
              href={RouteLink.aboutMe}
              title="À propos de moi"
            />
            <LinkItem
              closePrimaryNav={() => setOpen(false)}
              isActive={pathname === RouteLink.prestations}
              href={RouteLink.prestations}
              title="Prestations"
            >
              <div className="flex justify-evenly lg:justify-start">
                <div>
                  <Link
                    href={RouteLink.prestationWeb}
                    onClick={() => setOpen(false)}
                  >
                    <span className={n1TitleClassnames}>Création de site</span>
                  </Link>
                  <ul className="lg:list-disc lg:pl-4 marker:text-orange-dark">
                    <li>
                      <Link
                        href={RouteLink.prestationWordPress}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>WordPress</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationPrestashop}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>Prestashop</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationSymfony}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>Symfony</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationReact}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          React & Next.js
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.developpeurLaRochelle}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          Développeur web La Rochelle
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="ml-12">
                  <Link
                    href={RouteLink.prestationTma}
                    onClick={() => setOpen(false)}
                  >
                    <span className={n1TitleClassnames}>
                      Maintenance de site
                    </span>
                  </Link>
                  <ul className="lg:list-disc lg:pl-4 marker:text-orange-dark">
                    <li>
                      <Link
                        href={RouteLink.prestationTmaWordPress}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>WordPress</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationTmaPrestashop}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>Prestashop</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationTmaOnDemand}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          Maintenance ponctuelle
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.prestationHosting}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          Hébergement web
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden lg:flex space-x-4 ml-auto">
                  <div>
                    <Image
                      src={ExpertPrestashop}
                      width={150}
                      height={150}
                      alt="Expert développeur Prestashop"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                  <div>
                    <Image
                      src={ExpertWordPress}
                      width={150}
                      height={150}
                      alt="Expert développeur WordPress"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </div>
              </div>
            </LinkItem>
            <LinkItem
              closePrimaryNav={() => setOpen(false)}
              isActive={pathname === RouteLink.portfolio}
              href={RouteLink.portfolio}
              title="Portfolio"
            >
              <div className="hidden lg:flex">
                <div className="pt-2">
                  <Link href={RouteLink.portfolio}>
                    <span className={n1TitleClassnames}>
                      Les différentes thématiques
                    </span>
                  </Link>
                  <ul className="list-disc pl-4 marker:text-orange-dark">
                    <li>
                      <Link
                        href={RouteLink.portfolioCategory('wordpress')}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          Projets WordPress
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.portfolioCategory('e-commerce')}
                        onClick={() => setOpen(false)}
                      >
                        <span className={n2TitleClassnames}>
                          Projets E-commerce
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={RouteLink.portfolioCategory('application-web')}
                      >
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Projets Symfony & ReactJS
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="ml-auto">
                  <FeaturedProjectMenu
                    image={FeaturedProjectImage}
                    title="Parapharmacie moins chere"
                    link={RouteLink.portfolioProject(
                      'e-commerce',
                      'parapharmacie-moins-chere'
                    )}
                  />
                </div>
              </div>
            </LinkItem>
            <LinkItem
              closePrimaryNav={() => setOpen(false)}
              isActive={pathname === RouteLink.blog}
              href={RouteLink.blog}
              title="Blog"
            />
            <Link
              href={RouteLink.contact}
              onClick={() => {
                sendGTMEvent({ event: 'contact', position: 'header' })
                setOpen(false)
              }}
            >
              <span className="mt-4 lg:mt-0 inline-flex py-2 px-4 bg-orange uppercase text-gray-darker font-medium">
                Contactez-moi
              </span>
            </Link>

            <a
              href="tel:0682963889"
              className="block lg:hidden text-3xl text-orange font-bold pt-4"
            >
              06 82 96 38 89
            </a>
            <button
              type="button"
              aria-label="Fermer le menu"
              className="block lg:hidden w-full"
              onClick={toggleNavPrimary}
            >
              <div className="bg-gray-darker -mt-2">
                <svg
                  aria-hidden
                  className="translate translate-y-[30px] block w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 415 76"
                >
                  <defs>
                    <path id="a" d="M291.516 48.222L414.422.36v75h-414z" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="none" xlinkHref="#a" />
                    <path fill="#E57E21" d="M414.422 1v51.282L312 40.886z" />
                    <path
                      fill="#FFF"
                      fillRule="nonzero"
                      d="M402.422 23.273l-1.914-1.914-7.586 7.586-7.587-7.586-1.913 1.914 7.586 7.586-7.586 7.586 1.913 1.914 7.587-7.586 7.586 7.586 1.914-1.914-7.587-7.586z"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
