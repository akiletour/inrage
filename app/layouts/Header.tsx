import { Fragment, ReactNode } from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import Link from '@component/NoScrollLink'
import useSticky from '@hook/useSticky'
import NavPrimary from '@layout/NavPrimary'
import { RouteLink } from '@lib/router'
import { HeaderType, PageExcerptType, PageTitleType } from '@type/header'

const DynamicHeaderTma = dynamic(() => import('@layout/HeaderTma'))

interface Props {
  pageTitle?: PageTitleType
  breadcrumb: Array<{
    title: string
    link: string
  }>
  headerType?: HeaderType
  pageExcerpt?: PageExcerptType
  pageMeta?: ReactNode
  hero?: ReactNode
}

export default function Header({
  pageTitle = '',
  pageExcerpt = '',
  pageMeta,
  breadcrumb = [],
  headerType = 'default',
  hero,
}: Props) {
  const [ref, sticky] = useSticky<HTMLDivElement>()
  if (headerType === 'tma') {
    return <DynamicHeaderTma pageTitle={pageTitle} excerpt={pageExcerpt} />
  }

  if (hero) {
    return (
      <div className="relative h-auto w-full" ref={ref}>
        <NavPrimary isSticky={sticky} />
        {hero}
      </div>
    )
  }

  return (
    <div className="relative h-auto w-full" ref={ref}>
      <NavPrimary isSticky={sticky} />
      {pageTitle && pageMeta ? (
        <div className="container relative z-10 mt-8 pb-6 md:mt-14 md:pb-8">
          <div className="mx-auto max-w-[44rem] lg:max-w-[64rem]">
            <nav
              aria-label="Fil d’Ariane"
              className="hidden gap-2 text-sm text-white/70 sm:flex"
            >
              <Link href="/">
                <span className="hover:text-white">Accueil</span>
              </Link>
              {breadcrumb.map((bc) => (
                <Fragment key={bc.link}>
                  <span aria-hidden>/</span>
                  <Link href={bc.link}>
                    <span className="hover:text-white">{bc.title}</span>
                  </Link>
                </Fragment>
              ))}
            </nav>
            <h1 className="mt-4 text-3xl leading-[1.15] font-bold tracking-tight text-balance text-white md:text-[2.75rem] lg:text-[3.25rem] lg:text-pretty">
              {pageTitle}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 text-sm text-white/80">
              {pageMeta}
            </div>
          </div>
        </div>
      ) : pageTitle ? (
        <div className="container z-10 relative mt-6 md:mt-16 md:-mb-16">
          <h1 className="font-bold max-w-4xl tracking-wider text-2xl sm:text-4xl text-white">
            {pageTitle}
          </h1>
          <div className="hidden sm:grid mt-4 uppercase text-xs grid-flow-col gap-2 justify-start text-white opacity-80">
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
        <div className="container text-center flex flex-col items-center text-white mt-14 mb-12 md:mb-0">
          <span className="text-orange text-6xl md:text-8xl font-thin">
            inRage
          </span>
          <span className="text-3xl md:text-5xl mt-4">Pascal GAULT</span>
          <h1 className="text-xl md:text-2xl mt-4 font-normal">
            Développeur web freelance à La Rochelle
            <br />
            spécialisé dans la création de sites internet
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={RouteLink.contact}>
              <span className="button">Demander un devis gratuit</span>
            </Link>
            <Link href={RouteLink.developpeurLaRochelle}>
              <span className="button-outline bg-gray-darker/40">
                Mon activité à La Rochelle
              </span>
            </Link>
          </div>
        </div>
      )}

      <Image
        priority
        className="-z-10"
        src="/images/iledere-pont.jpeg"
        alt="Pont de l'île de Ré, près de La Rochelle"
        fill
        sizes="100vw"
      />
      {pageTitle && pageMeta ? (
        <Diagonal
          stretch
          bgCorner="fill-orange"
          bgClass="fill-gray-dark"
          className="h-20 w-full md:h-28"
        />
      ) : (
        <Diagonal
          preserveRatio
          bgCorner="fill-orange"
          bgClass="fill-gray-dark"
          className="h-auto w-full"
        />
      )}
    </div>
  )
}
