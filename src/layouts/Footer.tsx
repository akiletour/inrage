import Image from 'next/image';

import Link from '@component/NoScrollLink';
import { RouteLink } from '@lib/route';

import LogoWhite from '../../public/logo-white.svg';
import Socials from '../components/Socials';

export default function Footer() {
  return (
    <div className="mt-5">
      <svg
        className="relative -mb-1 h-[15vh] max-h-20 w-full"
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

      <div className="bg-gray-darker pb-6 pt-3">
        <div className="container flex flex-col justify-between sm:flex-row">
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
            <div className="mt-1 grid grid-flow-col justify-start gap-1 text-sm text-orange">
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
            <div className="my-2">
              <Socials />
            </div>
            <div>
              © 2008-{new Date().getFullYear()} - inRage SARL. Tous droits
              réservés.
            </div>
            <a
              href="https://github.com/akiletour/inrage"
              className="mt-2 block items-center text-white md:flex"
            >
              Code open-source inrage.fr disponible sur{' '}
              <span className="inline-block md:ml-1 md:block">
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
            <div className="mt-1 grid grid-flow-col justify-start gap-2 text-sm text-orange">
              <Link href={RouteLink.legals}>
                <span>Mentions légales</span>
              </Link>
              <Link href={RouteLink.sitemap}>
                <span>Plan du site</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col pt-2 text-center sm:items-end sm:text-right">
            <Link href={RouteLink.contact}>
              <span className="button">Demandez un devis</span>
            </Link>
            <div className="my-2 text-3xl font-bold text-orange">
              06 51 89 89 17
            </div>
            <div className="text-center text-sm md:text-right">
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
  );
}
