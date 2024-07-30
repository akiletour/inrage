import { ReactNode, useCallback, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import FeaturedProjectMenu from "@component/FeaturedProjectMenu"
import Link from "@component/NoScrollLink"
import { Button } from "@component/ui/button"
import FeaturedProjectImage from "@image/featured-projects/parapharmaciemoinschere.jpeg"
import ExpertPrestashop from "@image/platinum-300x300.png"
import ExpertWordPress from "@image/wordpress-expert.png"
import { RouteLink } from "@lib/route"
import { useWindowSize } from "react-use"

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
            className={`block pt-2 text-lg uppercase group-hover:text-orange lg:py-2 ${
              isActive ? "text-orange" : "text-white"
            }`}
          >
            {title}
          </span>
        </Link>
        <div className="block w-full group-hover:block lg:absolute lg:right-0 lg:top-full lg:hidden lg:w-[800px] lg:pt-2">
          <div className="lg:border-t-4 lg:border-orange/90 lg:bg-gray-darker/90 lg:p-2">
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
        className={`block pt-2 text-lg uppercase lg:pt-0 ${
          isActive ? "text-orange" : "text-white hover:text-orange"
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
  const { width } = useWindowSize(1024)
  const [isOpen, setOpen] = useState(false)

  const n1TitleClassnames =
    "uppercase text-white text-sm lg:text-base font-bold block hover:text-orange my-1"
  const n2TitleClassnames =
    "text-white font-medium text-orange text-sm leading-4 hover:text-orange-dark"

  const toggleNavPrimary = useCallback(() => {
    setOpen((r) => !r)
  }, [])

  return (
    <div className="relative z-50 h-11">
      <div
        className={`sticky-menu ${
          isSticky ? "fixed inset-x-0 top-0 bg-gray-darker transition-all" : ""
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
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>

          <button
            onClick={toggleNavPrimary}
            type="button"
            className="burger-menu block rounded-md bg-orange p-1 text-white lg:hidden"
          >
            <svg
              className="h-4 w-4"
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
                ? "absolute left-0 top-full block w-full flex-col space-y-2 divide-y divide-gray-dark bg-gray-darker text-center lg:flex"
                : "relative hidden space-x-3"
            } items-center lg:flex`}
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
                  <ul className="marker:text-orange-dark lg:list-disc lg:pl-2">
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
                  <ul className="marker:text-orange-dark lg:list-disc lg:pl-2">
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
                <div className="ml-auto hidden space-x-2 lg:flex">
                  <div>
                    <Image
                      src={ExpertPrestashop}
                      width={150}
                      height={150}
                      alt="Expert développeur Prestashop"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
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
                        maxWidth: "100%",
                        height: "auto",
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
            <Button asChild>
              <Link href={RouteLink.contact}>Contactez-moi</Link>
            </Button>

            <div className="block pt-2 text-3xl font-bold text-orange lg:hidden">
              06 51 89 89 17
            </div>
            <button
              type="button"
              className="block w-full lg:hidden"
              onClick={toggleNavPrimary}
            >
              <div className="-mt-1 bg-gray-darker">
                <svg
                  className="translate block h-auto w-full translate-y-[30px]"
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
