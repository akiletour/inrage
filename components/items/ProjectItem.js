import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ProjectItem({
  slug, image, title, category,
}) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <a className="group text-center">
        <div className="group-hover:scale-110 transition-all block text-center sm:pt-[5%] sm:px-[10%] sm:pb-[7%]">
          <Image src={image} width={257} height={400} alt={title} />
        </div>
        <div className="text-white text-base leading-5 sm:text-2xl">{title}</div>
        {category && (
          <div className="text-xs mt-1 sm:text-base md:text-sm lg:text-base uppercase">
            {category}
          </div>
        )}
      </a>
    </Link>
  );
}

ProjectItem.propTypes = {
  category: PropTypes.string,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ProjectItem.defaultProps = {
  category: '',
};
