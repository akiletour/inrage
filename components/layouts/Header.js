import Image from 'next/image';
import NavPrimary from './NavPrimary';
import Diagonal from './Diagonal';

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
      <Image priority className="-z-10" src="/images/iledere-pont.jpeg" layout="fill" alt="Pont de l'ile de ré" />
      <Diagonal preserveRatio bgCorner="fill-orange" bgClass="fill-gray-dark" className="h-auto w-full" />
    </div>
  );
}
