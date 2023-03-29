'use client';

import React, { ReactNode } from 'react';

import { motion } from 'framer-motion';

import Header from '@layout/Header';

type Props = {
  children: ReactNode;
  title?: string | string[];
  excerpt?: string | string[];
  tmaLayout?: boolean;
  breadcrumbs?: Array<{
    link: string;
    title: string;
  }>;
};

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function Layout({
  children,
  title = '',
  excerpt = '',
  tmaLayout = false,
  breadcrumbs = [],
}: Props): JSX.Element {
  return (
    <div>
      <Header
        pageTitle={title}
        pageExcerpt={excerpt}
        headerType={tmaLayout === true ? 'tma' : 'default'}
        breadcrumb={breadcrumbs}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </div>
  );
}

export default Layout;
