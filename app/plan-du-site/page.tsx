import Link from 'next/link';
import Layout from '@/components/Layout';
import sitemap from '@/graphql/sitemap.graphql';
import { getCanonicalUrl, RouteLink } from '@/libs/route';
import { Sitemap as SitemapType } from '@/types/graphql/sitemap';
import { fetcher } from '@/utils';

const getSitemap = (): Promise<SitemapType> => fetcher(sitemap);

function LegalTitle({ children }: { children: string }) {
  return (
    <h2 className={'mb-2 mt-6 text-3xl font-bold text-white'}>{children}</h2>
  );
}

export default async function Sitemap() {
  const data = await getSitemap();
  const {
    data: { projets, posts, supports },
  } = data;

  return (
    <Layout title='Plan du site'>
      <div className='container'>
        <div className='flex flex-col justify-between lg:flex-row'>
          <div>
            <LegalTitle>Pages</LegalTitle>

            <ul className='styled-list'>
              <li>
                <Link href='/'>Accueil</Link>
              </li>
              <li>
                <Link href={RouteLink.aboutMe}>A propos de moi</Link>
              </li>
              <li>
                <Link href={RouteLink.contact}>Contactez-moi</Link>
              </li>
            </ul>

            <LegalTitle>Prestations</LegalTitle>
            <ul className='styled-list'>
              <li>
                <Link href={RouteLink.prestations}>Prestations</Link>
                <ul className={'styled-list'}>
                  <li>
                    <Link href={RouteLink.prestationWeb}>Création de site</Link>
                    <ul className={'styled-list'}>
                      <li>
                        <Link href={RouteLink.prestationWordPress}>
                          WordPress
                        </Link>
                      </li>
                      <li>
                        <Link href={RouteLink.prestationPrestashop}>
                          Prestashop
                        </Link>
                      </li>
                      <li>
                        <Link href={RouteLink.prestationSymfony}>Symfony</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href={RouteLink.prestationTma}>
                      Maintenance de site
                    </Link>
                    <ul className={'styled-list'}>
                      <li>
                        <Link href={RouteLink.prestationTmaWordPress}>
                          Maintenance WordPress
                        </Link>
                      </li>
                      <li>
                        <Link href={RouteLink.prestationTmaPrestashop}>
                          Maintenance Prestashop
                        </Link>
                      </li>
                      <li>
                        <Link href={RouteLink.prestationTmaOnDemand}>
                          Maintenance ponctuelle
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <LegalTitle>Portfolio</LegalTitle>
            <ul className='styled-list'>
              {supports.edges.map(({ node: { title, uri } }) => (
                <li key={title}>
                  <Link href={uri}>{title}</Link>
                </li>
              ))}
            </ul>

            <ul className='styled-list mt-3'>
              {projets.edges.map(({ node: { title, uri } }) => (
                <li key={title}>
                  <Link href={uri}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LegalTitle>Blog</LegalTitle>

            <ul className='styled-list'>
              {posts.edges.map(({ node: { title, uri } }) => (
                <li key={title}>
                  <Link href={uri}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'Plan du site',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.sitemap),
  },
};
