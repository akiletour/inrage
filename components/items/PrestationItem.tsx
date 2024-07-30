import Image, { StaticImageData } from 'next/image';
import Link from '@component/NoScrollLink';
import { Button } from '@component/ui/button';

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
    <div className='flex h-full flex-col items-center text-center'>
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

      <h3 className='mt-1 text-xl font-medium leading-7 text-white'>
        {Array.isArray(title)
          ? title.map((ttl) => (
              <span key={ttl} className={'block'}>
                {ttl}
              </span>
            ))
          : title}
      </h3>

      <p className='mb-2 mt-1 text-base leading-5 md:text-sm lg:text-base lg:leading-5'>
        {children}
      </p>

      {link !== '' && (
        <Button asChild className='mt-auto'>
          <Link href={link}>{linkText}</Link>
        </Button>
      )}
    </div>
  );
}
