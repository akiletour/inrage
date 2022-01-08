import NavPrimary from '@component/layouts/NavPrimary';
import Diagonal from '@component/layouts/Diagonal';
import { pageExcerptType, pageTitleType } from '@type/header';
import Image from 'next/image';
import BgTma from '@image/bg-tma.jpeg';
import useSticky from '../../hooks/useSticky';

type Props = {
  pageTitle: pageTitleType;
  excerpt: pageExcerptType;
}

export default function HeaderTma({ pageTitle, excerpt }: Props) {
  const [ref, sticky] = useSticky<HTMLDivElement>();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="relative h-auto w-full" ref={ref}>
      <NavPrimary isSticky={sticky} />

      <div className="container text-center md:-mb-10 relative z-10">
        <h1 className="text-5xl font-thin text-white mt-6">
          {Array.isArray(pageTitle) ? pageTitle.map((ttl) => <span className="block" key={ttl}>{ttl}</span>) : pageTitle}
        </h1>

        <div className="max-w-xl w-full mx-auto text-white font-light mb-4 text-xl">
          {Array.isArray(excerpt) ? excerpt.map((exc) => <span className="block mt-4" key={exc}>{exc}</span>) : excerpt}
        </div>

        <button className="button" type="button" onClick={() => scrollToContact()}>
          Demandez un devis
        </button>
      </div>

      <Image priority className="-z-10" src={BgTma} layout="fill" alt="Offres de maintenance TMA inRage" />
      <Diagonal preserveRatio bgCorner="fill-orange" bgClass="fill-gray-dark" className="h-auto w-full" />
    </div>
  );
}
