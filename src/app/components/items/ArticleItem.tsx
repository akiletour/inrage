import moment from 'moment';
import Image from 'next/image';

import ButtonLink from '@component/ButtonLink';
import Link from '@component/NoScrollLink';
import 'moment/locale/fr';
import { ArticleList } from '@type/graphql';

moment.locale('fr');

export default function ArticleItem({
  image,
  title,
  description,
  date,
  slug,
}: ArticleList) {
  const formattedDate = moment(date);

  return (
    <div className="relative flex flex-col">
      <div className="absolute top-1 w-6 text-center left-1 z-10 bg-white">
        <div className="py-1 bg-orange font-medium text-gray-darker text-2xl">
          {formattedDate.format('DD')}
        </div>
        <div className="text-gray-darker uppercase">
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
      <h3 className="text-white text-2xl font-medium mt-1">{title}</h3>
      <p className="mt-1 mb-2">{description}</p>
      <ButtonLink href={`${slug}`}>Lire la suite</ButtonLink>
    </div>
  );
}
