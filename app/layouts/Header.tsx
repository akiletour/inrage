import { Fragment, ReactNode } from 'react'

import Image from 'next/image'

import Diagonal from '@component/Diagonal'
import Link from '@component/NoScrollLink'
import useSticky from '@hook/useSticky'
import NavPrimary from '@layout/NavPrimary'

interface Props {
  pageTitle?: string
  breadcrumb: Array<{
    title: string
    link: string
  }>
  hero?: ReactNode
}

export default function Header({
  pageTitle = '',
  breadcrumb = [],
  hero,
}: Props) {
  const [ref, sticky] = useSticky<HTMLDivElement>()

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
      <div className="container z-10 relative mt-6 md:mt-16 md:-mb-16">
        <h1 className="font-bold max-w-4xl tracking-wider text-2xl sm:text-4xl text-white">
          {pageTitle}
        </h1>
        <div className="hidden sm:grid mt-4 uppercase text-xs grid-flow-col gap-2 justify-start text-white opacity-80">
          <Link href="/">
            <span className="underline">Accueil</span>
          </Link>
          {breadcrumb.map((bc) => (
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

      <Image
        priority
        className="-z-10"
        src="/images/iledere-pont.jpeg"
        alt="Pont de l'île de Ré, près de La Rochelle"
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
