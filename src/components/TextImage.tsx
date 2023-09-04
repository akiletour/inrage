import { ReactNode } from 'react';

import Image, { StaticImageData } from 'next/image';

type Props = {
  image: string | StaticImageData;
  title?: string | string[];
  titlePosition?: 'left' | 'right';
  children: ReactNode;
  position?: 'right' | 'left';
  duoTone?: boolean;
  imageProps?: {
    width?: number;
    height?: number;
    layout?: 'fill' | 'responsive';
  };
};

export default function TextImage({
  image,
  title = '',
  children,
  imageProps = {},
  position = 'left',
  titlePosition,
  duoTone = false,
}: Props) {
  return (
    <div
      className={`${
        position === 'left'
          ? 'md:flex-row'
          : 'md:flex-row-reverse md:text-right'
      } mt-6 flex flex-col md:items-center`}
    >
      <div className="md:w-2/5">
        <Image
          src={image}
          alt={Array.isArray(title) ? title.join(' ') : title}
          {...imageProps}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div
        className={`md:w-3/5 ${position === 'left' ? 'md:pl-4' : 'md:pr-4'}`}
      >
        {title && (
          <h3
            className={`${
              titlePosition ? `md:text-${titlePosition}` : `md:text-${position}`
            } my-2 text-2xl font-bold text-white md:mb-3 md:mt-0 md:text-4xl`}
          >
            {Array.isArray(title)
              ? title.map((ttl, index) => (
                  <span
                    className={`block ${
                      index > 0 && duoTone && 'text-xl font-light'
                    }`}
                    key={ttl}
                  >
                    {ttl}
                  </span>
                ))
              : title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}
