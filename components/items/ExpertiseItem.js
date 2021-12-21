import PropTypes from 'prop-types';
import Image from 'next/image';
import ButtonLink from '../ButtonLink';

export default function ExpertiseItem({
  image, title, excerpt, link,
}) {
  return (
    <div className="flex items-center">
      <div className="w-15 flex-none mr-2">
        <Image width={120} height={120} src={image} alt={title} />
      </div>
      <div>
        <h3 className="text-white text-2xl">{title}</h3>
        <p className="mb-1">{excerpt}</p>
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
