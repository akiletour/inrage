import PropTypes from 'prop-types';
import Image from 'next/image';
import ButtonLink from '../ButtonLink';

export default function ExpertiseItem({
  image, title, excerpt, link,
}) {
  return (
    <div className="grid gap-x-3 grid-cols-[80px_auto] md:grid-cols-[120px_auto] items-center">
      <div className="relative mr-2 w-10 h-10 md:w-15 md:h-15 row-span-2">
        <Image layout="fill" src={image} alt={title} />
      </div>
      <h3 className="text-white font-medium text-xl md:text-2xl">{title}</h3>
      <div className="col-span-2 col-auto">
        <p className="mb-1 text-sm sm:text-md md:text-base">{excerpt}</p>
        <ButtonLink href={link}>En savoir plus</ButtonLink>
      </div>
    </div>
  );
}

ExpertiseItem.propTypes = {
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
