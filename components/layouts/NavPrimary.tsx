import { RouteLink } from '@lib/route';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  title: string
  isActive?: boolean
  href: string
}

function LinkItem({ title, href, isActive = false }: Props) {
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
            <LinkItem isActive={pathname === RouteLink.aboutMe} href={RouteLink.aboutMe} title="À propos de moi" />
            <LinkItem isActive={pathname === RouteLink.prestations} href={RouteLink.prestations} title="Prestations" />
            <LinkItem isActive={pathname === RouteLink.portfolio} href={RouteLink.portfolio} title="Portfolio" />
            <LinkItem href={RouteLink.blog} title="Blog" />
            <Link href={RouteLink.contact}>
              <a className="py-1 px-2 bg-orange uppercase text-gray-darker font-medium">Contactez-moi</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
