import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkItem({ title, href }) {
  return (
    <Link href={href}>
      <a className="uppercase text-lg text-white">{title}</a>
    </Link>
  );
}

export default function NavPrimary() {
  return (
    <div className="h-11">
      <div>
        <div className="container flex items-center justify-between py-2">
          <Image src="/logo.svg" width="150" height="56" />

          <div className="hidden lg:flex items-center space-x-3">
            <LinkItem href="/" title="À propos de moi" />
            <LinkItem href="/" title="Prestations" />
            <LinkItem href="/" title="Portfolio" />
            <LinkItem href="/" title="Blog" />
            <Link href="/">
              <a className="py-1 px-2 bg-orange uppercase text-gray-darker font-medium">Contactez-moi</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

LinkItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
