import Image from 'next/image';
import Link from '@component/NoScrollLink';
import ButtonLink from '../ButtonLink';

type Props = {
  image: string;
  title: string;
  excerpt: string;
}

export default function ArticleItem({ image, title, excerpt }: Props) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute top-1 w-6 text-center left-1 z-10 bg-white">
        <div className="py-1 bg-orange font-medium text-gray-darker text-2xl">26</div>
        <div className="text-gray-darker">OCT</div>
      </div>
      <Link href="/">
        <a>
          <Image src={image} width={595} height={265} alt={title} />
        </a>
      </Link>
      <h3 className="text-white text-2xl font-medium mt-1">{title}</h3>
      <p className="mt-1 mb-2">{excerpt}</p>
      <ButtonLink href="/">Lire la suite</ButtonLink>
    </div>
  );
}
