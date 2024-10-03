import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import Link from '@/components/NoScrollLink';
import moment from 'moment';

import 'moment/locale/fr';

moment.locale('fr');

type Props = {
  image: string;
  title: string;
  description: string;
  date: string;
  slug: string;
};

export default function ArticleItem({
  image,
  title,
  description,
  date,
  slug,
}: Readonly<Props>) {
  const formattedDate = moment(date);

  return (
    <div className='relative flex flex-col'>
      <div className='absolute left-1 top-1 z-10 w-6 bg-white text-center'>
        <div className='bg-orange py-1 text-2xl font-medium text-gray-darker'>
          {formattedDate.format('DD')}
        </div>
        <div className='uppercase text-gray-darker'>
          {formattedDate.format('MMM').substring(0, 3)}
        </div>
      </div>
      <Link href={`${slug}`}>
        <span>
          <Image
            src={image}
            width={595}
            height={265}
            alt={title}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </span>
      </Link>
      <h3 className='mt-1 text-2xl font-medium text-white'>{title}</h3>
      <p className='mb-2 mt-1'>{description}</p>
      <ButtonLink href={`${slug}`}>Lire la suite</ButtonLink>
    </div>
  );
}
