import Image from 'next/image';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function PrestationItem({
  image, title, children, link, linkText,
}) {
  return (
    <div className="text-center h-full flex flex-col">
      <div>
        <Image
          width={178}
          height={178}
          src={image}
          alt="Conception / Refonte de sites Internet"
        />
      </div>

      <h3 className="text-xl text-white font-medium mt-1 leading-7">
        {Array.isArray(title) ? title.map((ttl) => <Fragment key={ttl}>{ttl}</Fragment>) : title}
      </h3>

      <p className="text-base md:text-sm lg:text-base leading-5 lg:leading-5 mt-1 mb-2">{children}</p>

      {link !== '' && (
        <div className="mt-auto">
          <Link href={link}>
            <a className="button">{linkText}</a>
          </Link>
        </div>
      )}
    </div>
  );
}

PrestationItem.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.oneOfType([PropTypes.object]).isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

PrestationItem.defaultProps = {
  link: '',
  linkText: '',
};
