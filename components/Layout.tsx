'use client';

import React, { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layouts/Header';
import { motion } from 'framer-motion';

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
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header
        pageTitle={title}
        pageExcerpt={excerpt}
        headerType={tmaLayout === true ? 'tma' : 'default'}
        breadcrumb={breadcrumbs}
      />
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </div>
  );
}

export default Layout;
