import Link from '@component/NoScrollLink';
import Image from 'next/image';

type Props = {
  image: StaticImageData;
  link: string;
  title: string;
}

export default function FeaturedProjectMenu({ image, link, title }: Props) {
  return (
    <Link href={link}>
      <a>
        <div>
          <Image src={image} alt={title} />
        </div>
        <div className="text-white font-medium text-center">{title}</div>
      </a>
    </Link>
  );
}
