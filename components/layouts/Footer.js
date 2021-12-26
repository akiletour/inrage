import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '../../public/logo-white.svg';
import Socials from './Socials';

export default function Footer() {
  return (
    <div className="mt-5">
      <svg
        className="relative w-full h-[15vh] max-h-20 -mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(20,20,20,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(20,20,20,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(20,20,20,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#141414" />
        </g>
      </svg>

      <div className="bg-gray-darker pt-3 pb-6">
        <div className="container flex justify-between">
          <div>
            <div>
              <Image className="opacity-30" src={LogoWhite} alt="inRage - Pascal GAULT" />
            </div>
            <div className="mt-1 grid grid-flow-col gap-1 text-sm text-orange justify-start">
              <Link href="/"><a>A propos de moi</a></Link>
              <Link href="/"><a>Prestations</a></Link>
              <Link href="/"><a>Portfolio</a></Link>
              <Link href="/"><a>Blog</a></Link>
              <Link href="/"><a>Contactez-moi</a></Link>
            </div>
            <div className="my-2">
              <Socials />
            </div>
            <div>
              © 2008-2021 - inRage SARL. Tous droits réservés.
            </div>
            <div className="mt-1 grid grid-flow-col gap-2 justify-start text-sm text-orange">
              <Link href="/"><a>Mentions légales</a></Link>
              <Link href="/"><a>Plan du site</a></Link>
            </div>
          </div>
          <div className="flex items-end flex-col pt-2">
            <Link href="/contact"><a className="button">Demandez un devis</a></Link>
            <div className="my-2 text-3xl font-bold text-orange">06 51 89 89 17</div>
            <div className="text-right text-sm">
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
