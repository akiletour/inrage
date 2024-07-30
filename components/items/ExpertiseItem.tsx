import Image, { StaticImageData } from 'next/image';
import ButtonLink from '@component/ButtonLink';

type Props = {
  image: string | StaticImageData;
  title: string;
  excerpt: string;
  link: string;
};

export default function ExpertiseItem({ image, title, excerpt, link }: Props) {
  return (
    <div className='grid grid-cols-[80px_auto] items-center gap-x-3 md:grid-cols-[120px_auto]'>
      <div className='relative row-span-2 mr-2 h-10 w-10 md:h-15 md:w-15'>
        <Image src={image} alt={title} fill sizes='100vw' />
      </div>
      <h3 className='text-xl font-medium text-white md:text-2xl'>{title}</h3>
      <div className='col-auto'>
        <p className='sm:text-md mb-1 text-sm md:text-base'>{excerpt}</p>
        <ButtonLink href={link}>En savoir plus</ButtonLink>
      </div>
    </div>
  );
}
