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
  isPrivate?: boolean;
};

export default function ProjectItem({
  slug,
  image,
  title,
  support,
  xl = false,
  isPrivate = false,
}: Props) {
  return (
    <Link href={`/portfolio/${support ? `${support.slug}/` : ''}${slug}`}>
      <a className="project-item group text-center">
        <div className="md:group-hover:scale-110 relative transition-all block text-center sm:pt-[5%] sm:px-[10%] sm:pb-[7%]">
          <Image
            src={image}
            width={xl ? 343 : 257}
            height={xl ? 533 : 400}
            alt={title}
          />
          {isPrivate && (
            <div className="absolute inset-0 bg-gray-dark opacity-50 z-50 flex items-center justify-center">
              <div className="text-white text-center text-2xl">Private</div>
            </div>
          )}
        </div>
        <div
          className={`${
            isPrivate === false ? 'text-white' : 'text-[red]'
          } text-base leading-5 sm:text-2xl`}
        >
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
