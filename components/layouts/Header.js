import Image from 'next/image';
import NavPrimary from './NavPrimary';

export default function Header() {
  return (
    <div className="relative h-auto w-full">
      <NavPrimary />
      <h1 className="container text-center flex flex-col items-center text-white mt-7 mb-6 md:mb-0">
        <span className="text-orange text-6xl md:text-8xl font-thin">inRage</span>
        <span className="text-3xl md:text-5xl mt-2">Pascal GAULT</span>
        <span className="text-xl md:text-2xl mt-2">
          Développeur Freelance spécialisé dans
          <br />
          la création de sites web
        </span>
      </h1>
      <Image className="-z-10" src="/images/iledere-pont.jpeg" layout="fill" alt="Pont de l'ile de ré" />
      <svg className="block w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 351">
        <defs>
          <path id="a" d="M1350 224 1920 0v351H0z" />
          <path id="c" d="M475 0v240L0 186.666z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <g fill="#252525" mask="url(#b)">
            <path d="M0 0h1920v351H0z" />
          </g>
          <g transform="translate(1445 3)">
            <mask id="d" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
            <g fill="#E57E21" mask="url(#d)">
              <path d="M0 0h475v241H0z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
