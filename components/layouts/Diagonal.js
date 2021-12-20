import PropTypes from 'prop-types';

export default function Diagonal({
  className, flipX, flipY, bgClass, bgCorner, preserveRatio,
}) {
  const classeNames = [`${className} w-full block`];

  if (flipX) {
    classeNames.push('-scale-x-100');
  }

  if (flipY) {
    classeNames.push('-scale-y-100');
  }

  return (
    <svg
      className={classeNames.join(' ')}
      height="361"
      preserveAspectRatio={preserveRatio ? 'xMinYMin meet' : 'xMidYMax slice'}
      viewBox="0 0 1920 361"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={bgClass} d="M1349 234L1920 0v361H0z" fill="#000" />
      <path className={bgCorner} d="M1445 197.5L1920 4v249z" fill="#BE4C4C" />
    </svg>
  );
}

Diagonal.propTypes = {
  bgClass: PropTypes.string,
  bgCorner: PropTypes.string,
  className: PropTypes.string,
  flipX: PropTypes.bool,
  flipY: PropTypes.bool,
  preserveRatio: PropTypes.bool,
};

Diagonal.defaultProps = {
  bgClass: '',
  bgCorner: '',
  className: '',
  flipX: false,
  flipY: false,
  preserveRatio: false,
};
