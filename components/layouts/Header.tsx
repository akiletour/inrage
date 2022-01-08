import Image from 'next/image';
import Link from '@component/NoScrollLink';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { HeaderType, pageExcerptType, pageTitleType } from '@type/header';
import NavPrimary from './NavPrimary';
import Diagonal from './Diagonal';
import useSticky from '../../hooks/useSticky';
const DynamicHeaderTma = dynamic(() => import('./HeaderTma'));

interface Props {
  pageTitle?: pageTitleType;
  breadcrumb?: Array<{
    title: string;
    link: string;
  }>;
  headerType: HeaderType;
  pageExcerpt: pageExcerptType;
}

export default function Header({
  pageTitle = '', pageExcerpt = '', breadcrumb = [], headerType = 'default',
}: Props) {
  

const [ref, sticky] = useSticky<HTMLDivElement>();
  if (headerType === 'tma') {
    return <DynamicHeaderTma pageTitle={pageTitle} excerpt={pageExcerpt} />;
  }

  return (
    <div className="relative h-auto w-full" ref={ref}>
      <NavPrimary isSticky={sticky} />
      {pageTitle ? (
        <div className="container z-10 relative mt-3 md:mt-8 md:-mb-8">
          <h1 className="font-bold tracking-wider text-2xl sm:text-4xl text-white">{pageTitle}</h1>
          <div className="hidden sm:grid mt-2 uppercase text-xs grid-flow-col gap-1 justify-start text-white opacity-80">
            <Link href="/"><a className="underline">Accueil</a></Link>
            {breadcrumb.length > 0 && breadcrumb.map((bc) => (
              <Fragment key={bc.link}>
                <span>/</span>
                <Link href={bc.link}><a className="underline">{bc.title}</a></Link>
              </Fragment>
            ))}
            <span>/</span>
            <span className="font-medium">{pageTitle}</span>
          </div>
        </div>
      ) : (
        <h1 className="container text-center flex flex-col items-center text-white mt-7 mb-6 md:mb-0">
          <span className="text-orange text-6xl md:text-8xl font-thin">inRage</span>
          <span className="text-3xl md:text-5xl mt-2">Pascal GAULT</span>
          <span className="text-xl md:text-2xl mt-2">
            Développeur Freelance spécialisé dans
            <br />
            la création de sites web
          </span>
        </h1>
      )}

      <Image priority className="-z-10" src="/images/iledere-pont.jpeg" layout="fill" alt="Pont de l'ile de ré" />
      <Diagonal preserveRatio bgCorner="fill-orange" bgClass="fill-gray-dark" className="h-auto w-full" />
    </div>
  );
}
