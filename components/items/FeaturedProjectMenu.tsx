import Image, { StaticImageData } from 'next/image';

import Link from '@component/NoScrollLink';

type Props = {
  image: StaticImageData;
  link: string;
  title: string;
};

export default function FeaturedProjectMenu({ image, link, title }: Props) {
  return (
    <Link href={link}>
      <div>
        <Image
          src={image}
          alt={title}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="text-white font-medium text-center">{title}</div>
    </Link>
  );
}
