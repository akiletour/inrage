import { Fragment } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import Diagonal from '@component/Diagonal';
import Link from '@component/NoScrollLink';
import useSticky from '@hook/useSticky';
import NavPrimary from '@layout/NavPrimary';
import { HeaderType, PageExcerptType, PageTitleType } from '@type/header';

const DynamicHeaderTma = dynamic(() => import('@layout/HeaderTma'));

interface Props {
  pageTitle?: PageTitleType;
  breadcrumb: Array<{
    title: string;
    link: string;
  }>;
  headerType?: HeaderType;
  pageExcerpt?: PageExcerptType;
}

export default function Header({
  pageTitle = '',
  pageExcerpt = '',
  breadcrumb = [],
  headerType = 'default',
}: Props) {
  const [ref, sticky] = useSticky<HTMLDivElement>();
  if (headerType === 'tma') {
    return <DynamicHeaderTma pageTitle={pageTitle} excerpt={pageExcerpt} />;
  }

  return (
    <div className="relative h-auto w-full" ref={ref}>
      <NavPrimary isSticky={sticky} />
      {pageTitle ? (
        <div className="container relative z-10 mt-3 md:-mb-8 md:mt-8">
          <h1 className="max-w-4xl text-2xl font-bold tracking-wider text-white sm:text-4xl">
            {pageTitle}
          </h1>
          <div className="mt-2 hidden grid-flow-col justify-start gap-1 text-xs uppercase text-white opacity-80 sm:grid">
            <Link href="/">
              <span className="underline">Accueil</span>
            </Link>
            {breadcrumb.length > 0 &&
              breadcrumb.map((bc) => (
                <Fragment key={bc.link}>
                  <span>/</span>
                  <Link href={bc.link}>
                    <span className="underline">{bc.title}</span>
                  </Link>
                </Fragment>
              ))}
            <span>/</span>
            <span className="font-medium">{pageTitle}</span>
          </div>
        </div>
      ) : (
        <h1 className="container mb-6 mt-7 flex flex-col items-center text-center text-white md:mb-0">
          <span className="text-6xl font-thin text-orange md:text-8xl">
            inRage
          </span>
          <span className="mt-2 text-3xl md:text-5xl">Pascal GAULT</span>
          <span className="mt-2 text-xl md:text-2xl">
            Développeur Freelance spécialisé dans
            <br />
            la création de sites web
          </span>
        </h1>
      )}

      <Image
        priority
        className="-z-10"
        src="/images/iledere-pont.jpeg"
        alt="Pont de l'ile de ré"
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
