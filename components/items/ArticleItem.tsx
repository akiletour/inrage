import Image from 'next/image';
import Link from '@component/NoScrollLink';
import { BlogItem } from '@type/blog';
import moment from 'moment';
import { RouteLink } from '@lib/route';
import ButtonLink from '../ButtonLink';
import 'moment/locale/fr';
import sanitize from 'sanitize-html';

moment.locale('fr');

export default function ArticleItem({
  featuredImage, title, excerpt, date, slug,
}: BlogItem) {
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
      <Link href={`${RouteLink.blog}/${slug}`}>
        <a>
          <Image src={featuredImage.node.sourceUrl} width={595} height={265} alt={title} />
        </a>
      </Link>
      <h3 className="text-white text-2xl font-medium mt-1">{title}</h3>
      <div
        className="mt-1 mb-2"
        dangerouslySetInnerHTML={{
          __html: sanitize(excerpt, {
            allowedTags: ['p'],
          }),
        }}
      />
      <ButtonLink href={`${RouteLink.blog}/${slug}`}>
        Lire la suite
      </ButtonLink>
    </div>
  );
}
