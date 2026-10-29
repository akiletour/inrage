import { ReactNode } from 'react'

import Header from '@layout/Header'

type Props = {
  children: ReactNode
  title?: string
  hero?: ReactNode
  breadcrumbs?: Array<{
    link: string
    title: string
  }>
}

function Layout({
  children,
  title = '',
  hero,
  breadcrumbs = [],
}: Props): ReactNode {
  return (
    <div className={hero ? 'home' : undefined}>
      <Header pageTitle={title} hero={hero} breadcrumb={breadcrumbs} />
      <div key={title} className="page-enter">
        {children}
      </div>
    </div>
  )
}

export default Layout
