import { ReactNode, useCallback, useState } from 'react'

import Image from 'next/image'
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
        <Link href={href}>
          <span
            onClick={() => closePrimaryNav()}
            className={`uppercase block text-lg pt-2 lg:py-2 group-hover:text-orange ${
              isActive ? 'text-orange' : 'text-white'
            }`}
          >
            {title}
          </span>
        </Link>
        <div className="block lg:hidden group-hover:block lg:absolute w-full lg:w-[800px] lg:right-0 lg:top-full lg:pt-2">
          <div className="lg:border-t-4 lg:bg-gray-darker lg:border-orange lg:bg-opacity-90 lg:p-2">
            {children}
          </div>
        </div>
      </div>
    )
  }
  return (
    <Link href={href}>
      <span
        onClick={() => closePrimaryNav()}
        className={`block pt-2 lg:pt-0 uppercase text-lg ${
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
    'uppercase text-white text-sm lg:text-base font-bold block hover:text-orange my-1'
  const n2TitleClassnames =
    'text-white font-medium text-orange text-sm leading-4 hover:text-orange-dark'

  const toggleNavPrimary = useCallback(() => {
    setOpen((r) => !r)
  }, [])

  return (
    <div className="h-11 relative z-50">
      <div
        className={`sticky-menu ${
          isSticky
            ? 'fixed top-0 left-0 right-0 bg-gray-darker transition-all'
            : ''
        }`}
      >
        <div className="container flex items-center justify-between py-2">
          <Link href="/">
            <Image
              src="/logo.svg"
              width="150"
              height="56"
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
            className="burger-menu block lg:hidden bg-orange text-white p-1 rounded-md"
          >
            <svg
              className="w-4 h-4"
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
            className={`nav-menu ${
              width < 1025 && isOpen
                ? 'block lg:flex bg-gray-darker divide-y divide-gray-dark space-y-2 text-center flex-col absolute top-full left-0 w-full'
                : 'hidden relative space-x-3'
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
                  <Link href={RouteLink.prestationWeb}>
                    <span
                      onClick={() => setOpen(false)}
                      className={n1TitleClassnames}
                    >
                      Création de site
                    </span>
                  </Link>
                  <ul className="lg:list-disc lg:pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={RouteLink.prestationWordPress}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          WordPress
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestationPrestashop}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Prestashop
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestationSymfony}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Symfony
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <Link href={RouteLink.prestationTma}>
                    <span
                      onClick={() => setOpen(false)}
                      className={n1TitleClassnames}
                    >
                      Maintenance de site
                    </span>
                  </Link>
                  <ul className="lg:list-disc lg:pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={RouteLink.prestationTmaWordPress}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          WordPress
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestationTmaPrestashop}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Prestashop
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestationTmaOnDemand}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Maintenance ponctuelle
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden lg:flex space-x-2 ml-auto">
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
                      alt="Expert développeur Prestashop"
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
                <div className="pt-1">
                  <Link href={RouteLink.portfolio}>
                    <span className={n1TitleClassnames}>
                      Les différentes thématiques
                    </span>
                  </Link>
                  <ul className="list-disc pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={`${RouteLink.portfolio}/wordpress`}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Projets WordPress
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${RouteLink.portfolio}/prestashop`}>
                        <span
                          onClick={() => setOpen(false)}
                          className={n2TitleClassnames}
                        >
                          Projets Prestashop
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${RouteLink.portfolio}/application-web/`}>
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
                    link={`${RouteLink.portfolio}/prestashop/parapharmacie-moins-chere`}
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
            <Link href={RouteLink.contact}>
              <span
                onClick={() => setOpen(false)}
                className="mt-2 lg:mt-0 inline-flex py-1 px-2 bg-orange uppercase text-gray-darker font-medium"
              >
                Contactez-moi
              </span>
            </Link>

            <div className="block lg:hidden text-3xl text-orange font-bold pt-2">
              06 82 96 38 39
            </div>
            <button
              type="button"
              className="block lg:hidden w-full"
              onClick={toggleNavPrimary}
            >
              <div className="bg-gray-darker -mt-1">
                <svg
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
