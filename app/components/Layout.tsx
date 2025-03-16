'use client'

import React, { Fragment, ReactNode } from 'react'

import { motion } from 'motion/react'

import Header from '@layout/Header'

type Props = {
  children: ReactNode
  title?: string | string[]
  excerpt?: string | string[]
  tmaLayout?: boolean
  breadcrumbs?: Array<{
    link: string
    title: string
  }>
}

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function Layout({
  children,
  title = '',
  excerpt = '',
  tmaLayout = false,
  breadcrumbs = [],
}: Props): ReactNode {
  return (
    <div>
      <Header
        pageTitle={title}
        pageExcerpt={excerpt}
        headerType={tmaLayout === true ? 'tma' : 'default'}
        breadcrumb={breadcrumbs}
      />
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        layout
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <Fragment key={Array.isArray(title) ? title.join(',') : title}>
          {children}
        </Fragment>
      </motion.div>
    </div>
  )
}

export default Layout
