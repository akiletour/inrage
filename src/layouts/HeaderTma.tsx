import Image from 'next/image';

import Diagonal from '@component/Diagonal';
import useSticky from '@hook/useSticky';
import BgTma from '@image/bg-tma.jpeg';
import NavPrimary from '@layout/NavPrimary';
import { PageExcerptType, PageTitleType } from '@type/header';

type Props = {
  pageTitle: PageTitleType;
  excerpt: PageExcerptType;
};

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

      <div className="container relative z-10 text-center md:-mb-10">
        <h1 className="mt-6 text-5xl font-thin text-white">
          {Array.isArray(pageTitle)
            ? pageTitle.map((ttl) => (
                <span className="block" key={ttl}>
                  {ttl}
                </span>
              ))
            : pageTitle}
        </h1>

        <div className="mx-auto mb-4 w-full max-w-xl text-xl font-light text-white">
          {Array.isArray(excerpt)
            ? excerpt.map((exc) => (
                <span className="mt-4 block" key={exc}>
                  {exc}
                </span>
              ))
            : excerpt}
        </div>

        <button
          className="button"
          type="button"
          onClick={() => scrollToContact()}
        >
          Demandez un devis
        </button>
      </div>

      <Image
        priority
        className="-z-10"
        src={BgTma}
        alt="Offres de maintenance TMA inRage"
        fill
        sizes="100vw"
      />
      <Diagonal
        preserveRatio
        bgCorner="fill-orange"
        bgClass="fill-gray-dark"
        className="h-auto w-full"
      />
    </div>
  );
}
