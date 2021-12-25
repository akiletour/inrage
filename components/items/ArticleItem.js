import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ButtonLink from '../ButtonLink';

export default function ArticleItem({ image, title, excerpt }) {
  return (
    <Link href="/">
      <a className="relative flex flex-col">
        <div className="absolute top-1 w-6 text-center left-1 z-10 bg-white">
          <div className="py-1 bg-orange font-medium text-gray-darker text-2xl">26</div>
          <div>OCT</div>
        </div>
        <Image src={image} width={595} height={265} alt={title} />
        <h3 className="text-white text-2xl font-medium mt-1">{title}</h3>
        <p className="mt-1 mb-2">{excerpt}</p>
        <ButtonLink href="/">Lire la suite</ButtonLink>
      </a>
    </Link>
  );
}

ArticleItem.propTypes = {
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
