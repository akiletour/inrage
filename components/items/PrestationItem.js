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

      <h3 className="text-lg text-white mt-1 leading-6">
        {Array.isArray(title) ? title.map((ttl) => <Fragment key={ttl}>{ttl}</Fragment>) : title}
      </h3>

      <p className="leading-5 mt-1 mb-2">{children}</p>

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
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  title: PropTypes.oneOf(
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string,
    ),
  ).isRequired,
};

PrestationItem.defaultProps = {
  link: '',
  linkText: '',
};
