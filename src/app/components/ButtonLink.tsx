import Link from '@component/NoScrollLink';

type Props = {
  href: string;
  children: string;
};

type RawProps =
  | { as?: 'span'; children: string; type?: never; onClick?: never }
  | {
      as?: 'button';
      onClick: () => void;
      type: 'button' | 'submit';
      children: string;
    };

export function ButtonLinkRaw({
  as = 'span',
  children,
  type,
  onClick,
}: RawProps) {
  const Tag = `${as}` as keyof JSX.IntrinsicElements;
  let props = {};

  if (as === 'button') {
    props = { type, onClick };
  }
  return (
    <Tag
      {...props}
      className="group hover:text-orange transition-all text-white font-medium flex items-center"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2 h-3 group-hover:animate-bouncex"
        viewBox="0 0 448 512"
      >
        <path
          className="fill-orange"
          fill="currentColor"
          d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
        />
      </svg>
    </Tag>
  );
}

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link href={href}>
      <ButtonLinkRaw>{children}</ButtonLinkRaw>
    </Link>
  );
}
