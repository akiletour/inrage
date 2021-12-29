import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SupportSwitcher({ supports }) {
  const { asPath } = useRouter();

  return (
    <div className="grid grid-cols-4 gap-4 text-center my-6">
      <Link href="/portfolio">
        <a className={asPath === '/portfolio' ? 'text-orange' : 'text-white'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 md:w-10 h-6 md:h-10 mx-auto"
            viewBox="0 0 320 512"
          >
            <path
              fill="#fff"
              d="M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"
            />
          </svg>
          <span className="mt-1 block text-sm md:text-lg">Tous les projets</span>
        </a>
      </Link>
      {supports.length > 0 && supports.map(({ node: support }) => (
        <Link key={support.id} href={`/portfolio/${support.slug}`}>
          <a className={asPath === `/portfolio/${support.slug}` ? 'text-orange' : 'text-white'}>
            <div className="w-6 md:w-10 h-6 md:h-10 relative mx-auto">
              <Image layout="fill" src={support.acfSupport.image.sourceUrl} alt={support.name} />
            </div>
            <span className="mt-1 block text-sm md:text-lg">{support.name}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}

SupportSwitcher.propTypes = {
  supports: PropTypes.arrayOf(PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};
