import { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  image: string | StaticImageData;
  title: string | string[];
  children: ReactNode;
  position?: 'right' | 'left';
  imageProps?: {
    width?: number;
    height?: number;
    layout?: 'fill' | 'responsive';
  };
}

export default function TextImage({
  image, title, children, imageProps = {}, position = 'left',
}: Props) {
  return (
    <div className={`${position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'} flex flex-col md:items-center mt-6`}>
      <div className="md:w-2/5">
        <Image
          src={image}
          alt={Array.isArray(title) ? title.join(' ') : title}
          {...imageProps}
        />
      </div>
      <div className={`md:w-3/5 ${position === 'left' ? 'md:pl-4' : 'md:pr-4'}`}>
        <h3 className="text-white text-4xl font-bold mb-3">
          {Array.isArray(title)
            ? title.map((ttl) => <span className="block" key={ttl}>{ttl}</span>)
            : title}
        </h3>

        {children}
      </div>
    </div>
  );
}
