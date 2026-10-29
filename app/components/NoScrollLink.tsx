import { MouseEventHandler, ReactNode } from 'react'

import Link, { LinkProps } from 'next/link'

interface IProps extends LinkProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
  className?: string
}

function NoScrollLink({
  children,
  href,
  passHref,
  onClick,
  className,
}: IProps): ReactNode {
  return (
    <Link
      href={href}
      passHref={passHref}
      onClick={onClick}
      className={className}
    >
      {children}
    </Link>
  )
}

export default NoScrollLink
