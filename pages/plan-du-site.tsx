import { GetStaticProps } from 'next';

import Layout from '@component/layouts/Layout';
import Link from '@component/NoScrollLink';
import { SitemapData } from '@lib/api';
import { RouteLink } from '@lib/route';

function LegalTitle({ children }: { children: string }) {
  return (
    <h2 className={'mt-6 mb-2 text-white font-bold text-3xl'}>{children}</h2>
  );
}

type Items = {
  projects: Array<{ node: { title: string; uri: string } }>;
  posts: Array<{ node: { title: string; uri: string } }>;
  supports: Array<{ node: { name: string; uri: string } }>;
};

export default function SiteMap({ projects, posts, supports }: Items) {
  return (
    <Layout>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <LegalTitle>Pages</LegalTitle>

            <ul className="styled-list">
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href={RouteLink.aboutMe}>A propos de moi</Link>
              </li>
              <li>
                <Link href={RouteLink.contact}>Contactez-moi</Link>
              </li>
            </ul>

            <LegalTitle>Prestations</LegalTitle>
            <ul className="styled-list">
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

            <ul className="styled-list">
              {supports.map(({ node }) => (
                <li key={node.name}>
                  <Link href={node.uri}>{node.name}</Link>
                </li>
              ))}
            </ul>

            <ul className="styled-list mt-3">
              {projects.map(({ node }) => (
                <li key={node.title}>
                  <Link href={node.uri}>{node.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LegalTitle>Blog</LegalTitle>

            <ul className="styled-list">
              {posts.map(({ node }) => (
                <li key={node.title}>
                  <Link href={node.uri}>{node.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

type SProps = {
  props: {
    pageTitle: string;
    projects: Items['projects'];
    posts: Items['posts'];
    supports: Items['supports'];
  };
};

export const getStaticProps: GetStaticProps = async (): Promise<SProps> => {
  const sitemapDatas = await SitemapData();
  return {
    props: {
      pageTitle: 'Plan du site',
      projects: sitemapDatas.projets.edges,
      posts: sitemapDatas.posts.edges,
      supports: sitemapDatas.supports.edges,
    },
  };
};
