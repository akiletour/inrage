'use client'

import Image from 'next/image'
import {
  FocusEvent,
  KeyboardEvent,
  PointerEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'

import FeaturedProjectMenu from '@component/FeaturedProjectMenu'
import type { StickyPhase } from '@hook/useSticky'
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

function anchorMegaMenu(e: PointerEvent<HTMLDivElement>) {
  const group = e.currentTarget
  const trigger = group.querySelector('a')
  const panel = group.querySelector<HTMLElement>('.nav-mega')
  if (!trigger || !panel || !panel.offsetWidth) return
  const t = trigger.getBoundingClientRect()
  const nav = group.closest('#nav-menu')?.getBoundingClientRect()
  const panelLeft = nav ? nav.right - panel.offsetWidth : 0
  panel.style.setProperty('--origin-x', `${t.left + t.width / 2 - panelLeft}px`)
}

function dismissMegaMenu(e: KeyboardEvent<HTMLDivElement>) {
  if (e.key !== 'Escape') return
  const group = e.currentTarget
  group.dataset.dismissed = ''
  group.querySelector('a')?.focus()
}

function restoreMegaMenu(
  e: FocusEvent<HTMLDivElement> | PointerEvent<HTMLDivElement>
) {
  const group = e.currentTarget
  if ('relatedTarget' in e && group.contains(e.relatedTarget as Node)) return
  delete group.dataset.dismissed
}

const DESKTOP_QUERY = '(min-width: 64rem)'

function subscribeDesktop(onChange: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true
  )
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
      <div
        className="nav-group group"
        onPointerEnter={anchorMegaMenu}
        onPointerLeave={restoreMegaMenu}
        onKeyDown={dismissMegaMenu}
        onBlur={restoreMegaMenu}
      >
        <Link href={href} onClick={() => closePrimaryNav()}>
          <span
            className={`uppercase block text-lg pt-4 lg:py-4 transition-colors duration-150 group-hover:text-orange ${
              isActive ? 'text-orange' : 'text-white'
            }`}
          >
            {title}
          </span>
        </Link>
        <div className="nav-mega w-full lg:absolute lg:w-[800px] lg:right-0 lg:top-full lg:pt-4">
          <div className="nav-mega-surface lg:border-t-4 lg:border-orange lg:p-4">
            {children}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Link href={href} onClick={() => closePrimaryNav()}>
      <span
        className={`block pt-4 lg:pt-0 uppercase text-lg transition-colors duration-150 ${
          isActive ? 'text-orange' : 'text-white hover:text-orange'
        }`}
      >
        {title}
      </span>
    </Link>
  )
}

type Props = {
  sticky?: StickyPhase
}

export default function NavPrimary({ sticky = 'off' }: Props) {
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)
  const isDesktop = useIsDesktop()
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const close = () => setOpen(false)
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== 'Escape') return
      close()
      burgerRef.current?.focus()
    }
    const onPointer = (e: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close()
    }
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onDesktop = () => {
      if (desktop.matches) close()
    }
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    desktop.addEventListener('change', onDesktop)
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.documentElement.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [isOpen])

  const n1TitleClassnames =
    'uppercase text-white text-sm lg:text-base font-bold block hover:text-orange my-2'
  const n2TitleClassnames =
    'block py-2 lg:py-1 font-medium text-orange text-sm leading-4 hover:text-white'

  const toggleNavPrimary = useCallback(() => {
    setOpen((r) => !r)
  }, [])

  return (
    <div className="h-22 relative z-50" ref={rootRef}>
      <div
        className={sticky === 'off' ? undefined : 'nav-fixed'}
        data-leaving={sticky === 'leaving' || undefined}
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
            ref={burgerRef}
            onClick={toggleNavPrimary}
            type="button"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            className="block lg:hidden bg-orange text-gray-darker p-2 rounded-md transition-[scale,background-color] duration-150 active:scale-95"
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
            ref={panelRef}
            data-open={isOpen || undefined}
            inert={!isOpen && !isDesktop}
            className="nav-panel absolute top-full left-0 w-full max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain divide-y divide-gray-dark space-y-4 bg-gray-darker text-center lg:relative lg:top-auto lg:left-auto lg:w-auto lg:max-h-none lg:overflow-visible lg:items-center lg:divide-y-0 lg:space-y-0 lg:space-x-6 lg:bg-transparent lg:text-left"
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
              <span className="mt-4 lg:mt-0 inline-flex py-2 px-4 bg-orange uppercase text-gray-darker font-medium transition-[background-color,color,scale] duration-150 hover:bg-orange-dark hover:text-white active:scale-[0.96]">
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
