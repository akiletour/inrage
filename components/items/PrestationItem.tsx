import Image, { StaticImageData } from 'next/image';

import Link from '@component/NoScrollLink';

type Props = {
  title: string | string[];
  children: JSX.Element | string;
  image: string | StaticImageData;
  link?: string;
  linkText?: string;
};

export default function PrestationItem({
  image,
  title,
  children,
  link = '',
  linkText = '',
}: Props) {
  return (
    <div className="text-center h-full flex flex-col items-center">
      <Image
        width={178}
        height={178}
        src={image}
        alt={Array.isArray(title) ? title.join(' ') : title}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <h3 className="text-xl text-white font-medium mt-1 leading-7">
        {Array.isArray(title)
          ? title.map((ttl) => (
              <span key={ttl} className={'block'}>
                {ttl}
              </span>
            ))
          : title}
      </h3>

      <p className="text-base md:text-sm lg:text-base leading-5 lg:leading-5 mt-1 mb-2">
        {children}
      </p>

      {link !== '' && (
        <div className="mt-auto">
          <Link href={link}>
            <span className="button">{linkText}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
