import { RouteLink } from '@lib/route';
import Image from 'next/image';
import Link from '@component/NoScrollLink';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import ExpertPrestashop from '@image/platinum-300x300.png';
import ExpertWordPress from '@image/wordpress-expert.png';
import FeaturedProjectMenu from '@component/items/FeaturedProjectMenu';
import FeaturedProjectImage from '@image/featured-projects/parapharmaciemoinschere.jpeg';

type Props = {
  title: string;
  isActive?: boolean;
  href: string;
  children?: ReactNode;
}

function LinkItem({
  title, href, isActive = false, children,
}: Props) {
  if (children) {
    return (
      <div className="group">
        <Link href={href}>
          <a className={`uppercase text-lg py-2 group-hover:text-orange ${isActive ? 'text-orange' : 'text-white'}`}>{title}</a>
        </Link>
        <div className="hidden group-hover:block  absolute w-[800px] right-0 top-full pt-2">
          <div className="border-t-4 bg-gray-darker border-orange bg-opacity-90 p-2">
            {children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <Link href={href}>
      <a className={`uppercase text-lg ${isActive ? 'text-orange' : 'text-white hover:text-orange'}`}>{title}</a>
    </Link>
  );
}

export default function NavPrimary() {
  const router = useRouter();

  const { pathname } = router;

  const n1TitleClassnames = 'uppercase text-white font-bold block hover:text-orange my-1';
  const n2TitleClassnames = 'text-white font-medium text-orange text-sm leading-4 hover:text-orange-dark';

  return (
    <div className="h-11 relative z-50">
      <div>
        <div className="container flex items-center justify-between py-2">
          <Link href="/">
            <a><Image src="/logo.svg" width="150" height="56" alt="Pascal GAULT, développeur Freelance sur La Rochelle" /></a>
          </Link>

          <div className="hidden lg:flex items-center space-x-3 relative">
            <LinkItem isActive={pathname === RouteLink.aboutMe} href={RouteLink.aboutMe} title="À propos de moi" />
            <LinkItem isActive={pathname === RouteLink.prestations} href={RouteLink.prestations} title="Prestations">
              <div className="flex">
                <div>
                  <Link href={RouteLink.prestationWeb}>
                    <a className={n1TitleClassnames}>Création de site</a>
                  </Link>
                  <ul className="list-disc pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={RouteLink.prestationWordPress}>
                        <a className={n2TitleClassnames}>WordPress</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestationPrestashop}>
                        <a className={n2TitleClassnames}>Prestashop</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className={n2TitleClassnames}>Symfony</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <Link href={RouteLink.prestationTma}>
                    <a className={n1TitleClassnames}>Maintenance de site</a>
                  </Link>
                  <ul className="list-disc pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={RouteLink.prestashopTmaWordPress}>
                        <a className={n2TitleClassnames}>WordPress</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={RouteLink.prestashopTmaPrestashop}>
                        <a className={n2TitleClassnames}>Prestashop</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className={n2TitleClassnames}>Maintenance ponctuelle</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-2 ml-auto">
                  <div><Image src={ExpertPrestashop} width={150} height={150} alt="Expert développeur Prestashop" /></div>
                  <div><Image src={ExpertWordPress} width={150} height={150} alt="Expert développeur Prestashop" /></div>
                </div>
              </div>
            </LinkItem>
            <LinkItem isActive={pathname === RouteLink.portfolio} href={RouteLink.portfolio} title="Portfolio">
              <div className="flex">
                <div className="pt-1">
                  <Link href={RouteLink.portfolio}>
                    <a className={n1TitleClassnames}>Les différentes thématiques</a>
                  </Link>
                  <ul className="list-disc pl-2 marker:text-orange-dark">
                    <li>
                      <Link href={`${RouteLink.portfolio}/wordpress`}>
                        <a className={n2TitleClassnames}>Projets WordPress</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${RouteLink.portfolio}/prestashop`}>
                        <a className={n2TitleClassnames}>Projets Prestashop</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`${RouteLink.portfolio}/application-web/`}>
                        <a className={n2TitleClassnames}>Projets Symfony & ReactJS</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="ml-auto">
                  <FeaturedProjectMenu
                    image={FeaturedProjectImage}
                    title="Parapharmacie moins chere"
                    link={`${RouteLink.portfolio}/prestashop/parapharmacie-moins-chere`}
                  />
                </div>
              </div>
            </LinkItem>
            <LinkItem
              href={RouteLink.blog}
              title="Blog"
            />
            <Link href={RouteLink.contact}>
              <a className="py-1 px-2 bg-orange uppercase text-gray-darker font-medium">Contactez-moi</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
