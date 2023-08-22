import Link from '@component/NoScrollLink';

type Props = {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  bgClass?: string;
  bgCorner?: string;
  preserveRatio?: boolean;
  cta?: {
    icon: JSX.Element;
    href: string;
    title: string | string[];
  };
};

export default function Diagonal({
  className = '',
  flipX = false,
  flipY = false,
  bgClass = '',
  bgCorner = '',
  preserveRatio = false,
  cta,
}: Props) {
  const classeNames = [`${className} w-full block`];

  if (flipX) {
    classeNames.push('-scale-x-100');
  }

  if (flipY) {
    classeNames.push('-scale-y-100');
  }

  return (
    <div className="relative">
      <svg
        className={classeNames.join(' ')}
        height="361"
        preserveAspectRatio={preserveRatio ? 'xMinYMin meet' : 'xMidYMax slice'}
        viewBox="0 0 1920 361"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={bgClass} d="M1349 234L1920 0v361H0z" fill="#000" />
        <path className={bgCorner} d="M1445 197.5L1920 4v249z" fill="#BE4C4C" />
      </svg>

      {cta?.href && (
        <Link href={cta.href}>
          <div className="absolute left-1/2 -bottom-2 md:bottom-1 -translate-x-1/2 w-14 md:w-18 h-14 md:h-18 bg-gray-dark text-gray hover:text-white rounded-full flex flex-col items-center pt-3">
            <div>{cta.icon}</div>
            <div className="mt-1 text-xs md:text-sm text-center leading-4">
              {Array.isArray(cta.title) ? (
                cta.title.map((ttl) => (
                  <span key={ttl} className={'block'}>
                    {ttl}
                  </span>
                ))
              ) : (
                <>ttl</>
              )}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
