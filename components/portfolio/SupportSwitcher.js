import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function SupportSwitcher({ supports }) {
  const { asPath } = useRouter();

  return (
    <div className="grid grid-cols-4 text-center">
      <Link href="/portfolio">
        <a className={asPath === '/portfolio' ? 'underline' : ''}>TOUS</a>
      </Link>
      {supports.length > 0 && supports.map(({ node: support }) => (
        <Link key={support.id} href={`/portfolio/${support.slug}`}>
          <a className={asPath === `/portfolio/${support.slug}` ? 'underline' : ''}>
            <div className="w-10 h-10 relative mx-auto">
              <Image layout="fill" src={support.acfSupport.image.sourceUrl} />
            </div>
            {support.name}
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
