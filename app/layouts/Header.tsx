import { Fragment } from 'react'

import dynamic from 'next/dynamic'
import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import Link from '@component/NoScrollLink'
import useSticky from '@hook/useSticky'
import NavPrimary from '@layout/NavPrimary'
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
}

export default function Header({
  pageTitle = '',
  pageExcerpt = '',
  breadcrumb = [],
  headerType = 'default',
}: Props) {
  const [ref, sticky] = useSticky<HTMLDivElement>()
  if (headerType === 'tma') {
    return <DynamicHeaderTma pageTitle={pageTitle} excerpt={pageExcerpt} />
  }

  return (
    <div className="relative h-auto w-full" ref={ref}>
      <NavPrimary isSticky={sticky} />
      {pageTitle ? (
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
        <h1 className="container text-center flex flex-col items-center text-white mt-14 mb-12 md:mb-0">
          <span className="text-orange text-6xl md:text-8xl font-thin">
            inRage
          </span>
          <span className="text-3xl md:text-5xl mt-4">Pascal GAULT</span>
          <span className="text-xl md:text-2xl mt-4">
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
  )
}
