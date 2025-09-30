import Image from 'next/image'

import Link from '@component/NoScrollLink'
import { RouteLink } from '@lib/router'

import LogoWhite from '../../public/logo-white.svg'
import Socials from '../components/Socials'

export default function Footer() {
  return (
    <div className="mt-10">
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

      <div className="bg-gray-darker pt-6 pb-12">
        <div className="container flex flex-col sm:flex-row justify-between">
          <div>
            <div>
              <Image
                className="opacity-30"
                src={LogoWhite}
                alt="inRage - Pascal GAULT"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="mt-2 grid grid-flow-col gap-2 text-sm text-orange justify-start">
              <Link href={RouteLink.aboutMe}>
                <span>A propos de moi</span>
              </Link>
              <Link href={RouteLink.prestations}>
                <span>Prestations</span>
              </Link>
              <Link href={RouteLink.portfolio}>
                <span>Portfolio</span>
              </Link>
              <Link href={RouteLink.blog}>
                <span>Blog</span>
              </Link>
              <Link href={RouteLink.contact}>
                <span>Contactez-moi</span>
              </Link>
            </div>
            <div className="my-4">
              <Socials />
            </div>
            <div>© 2008-2021 - inRage SARL. Tous droits réservés.</div>
            <a
              href="https://github.com/akiletour/inrage"
              className="text-white block md:flex mt-4 items-center"
            >
              Code open-source inrage.fr disponible sur{' '}
              <span className="inline-block md:block md:ml-2">
                <Image
                  width={72}
                  height={16}
                  src="/images/github-inline.svg"
                  alt="Code open-source disponible sur Github"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </span>
            </a>
            <div className="mt-2 grid grid-flow-col gap-4 justify-start text-sm text-orange">
              <Link href={RouteLink.legals}>
                <span>Mentions légales</span>
              </Link>
              <Link href={RouteLink.sitemap}>
                <span>Plan du site</span>
              </Link>
            </div>
          </div>
          <div className="text-center sm:text-right flex sm:items-end flex-col pt-4">
            <Link href={RouteLink.contact}>
              <span className="button">Demandez un devis</span>
            </Link>
            <div className="my-4 text-3xl font-bold text-orange">
              <a href="tel:0682963889">06 82 96 38 89</a>
            </div>
            <div className="text-center md:text-right text-sm">
              SIRET : 813 430 592 00010
              <br />
              R.C.S : La Rochelle 813 430 592
              <br />
              <br />
              10-14 rue Jean Perrin,
              <br />
              17000 LA ROCHELLE
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
