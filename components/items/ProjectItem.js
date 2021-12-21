import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ProjectItem({ image, title, category }) {
  return (
    <Link href="/">
      <a className="group text-center">
        <div className="group-hover:scale-110 transition-all block text-center pt-[5%] px-[10%] pb-[7%]">
          <Image src={image} width={325} height={505} />
        </div>
        <div className="text-white text-2xl">{title}</div>
        <div className="uppercase">{category}</div>
      </a>
    </Link>
  );
}

ProjectItem.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
