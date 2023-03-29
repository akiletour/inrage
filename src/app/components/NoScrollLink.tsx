import React, { ReactNode } from 'react';

import Link, { LinkProps } from 'next/link';

interface IProps extends LinkProps {
  children: ReactNode;
}

function NoScrollLink({ children, href, passHref }: IProps): JSX.Element {
  return (
    <Link href={href} passHref={passHref} scroll={false}>
      {children}
    </Link>
  );
}

export default NoScrollLink;
