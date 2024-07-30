import Image from 'next/image';
import Link from '@component/NoScrollLink';
import { ProjectSupports } from 'content/config/portfolio';
import { Portfolio } from 'contentlayer/generated';

type Props = {
  post: Portfolio;
  xl?: boolean;
};

export default function ProjectItem({ post, xl = false }: Props) {
  const { slug, image, title } = post;
  const support = ProjectSupports[post.category];

  return (
    <Link href={slug}>
      <div className='project-item group text-center'>
        <div className='relative block text-center transition-all sm:px-[10%] sm:pb-[7%] sm:pt-[5%] md:group-hover:scale-110'>
          <Image
            src={image}
            width={xl ? 343 : 257}
            height={xl ? 533 : 400}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={`text-base leading-5 text-white sm:text-2xl`}>
          {title}
        </div>
        {support && (
          <div className='mt-1 text-xs uppercase sm:text-base md:text-sm lg:text-base'>
            {support.name}
          </div>
        )}
      </div>
    </Link>
  );
}
