import Image from 'next/image';

import Link from '@component/NoScrollLink';

type Props = {
  slug: string;
  image: string;
  title: string;
  support?: {
    slug: string;
    name: string;
  };
  xl?: boolean;
};

export default function ProjectItem({
  slug,
  image,
  title,
  support,
  xl = false,
}: Props) {
  return (
    <Link href={`/portfolio/${support ? `${support.slug}/` : ''}${slug}`}>
      <a className="group text-center">
        <div className="group-hover:scale-110 transition-all block text-center sm:pt-[5%] sm:px-[10%] sm:pb-[7%]">
          <Image
            src={image}
            width={xl ? 343 : 257}
            height={xl ? 533 : 400}
            alt={title}
          />
        </div>
        <div className="text-white text-base leading-5 sm:text-2xl">
          {title}
        </div>
        {support && (
          <div className="text-xs mt-1 sm:text-base md:text-sm lg:text-base uppercase">
            {support.name}
          </div>
        )}
      </a>
    </Link>
  );
}
