import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function LinkItem({ title, href, isActive }) {
  return (
    <Link href={href}>
      <a className={`uppercase text-lg ${isActive ? 'text-orange' : 'text-white'}`}>{title}</a>
    </Link>
  );
}

export default function NavPrimary() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className="h-11 relative z-50">
      <div>
        <div className="container flex items-center justify-between py-2">
          <Link href="/">
            <a><Image src="/logo.svg" width="150" height="56" alt="Pascal GAULT, développeur Freelance sur La Rochelle" /></a>
          </Link>

          <div className="hidden lg:flex items-center space-x-3">
            <LinkItem isActive={pathname === '/a-propos-de-moi'} href="/a-propos-de-moi" title="À propos de moi" />
            <LinkItem isActive={pathname === '/prestations'} href="/prestations" title="Prestations" />
            <LinkItem isActive={pathname === '/portfolio'} href="/portfolio" title="Portfolio" />
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
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

LinkItem.defaultProps = {
  isActive: false,
};
