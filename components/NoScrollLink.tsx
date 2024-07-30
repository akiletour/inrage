import React, { ReactNode } from "react";

import Link, { LinkProps } from "next/link";

interface IProps extends LinkProps {
  children: ReactNode;
}

function NoScrollLink({
  children,
  href,
  passHref,
  ...props
}: IProps): JSX.Element {
  return (
    <Link href={href} passHref={passHref} scroll={false} {...props}>
      {children}
    </Link>
  );
}

export default NoScrollLink;
