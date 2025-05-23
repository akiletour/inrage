import Link from 'next/link'

import Layout from '@component/Layout'
import { RouteLink, getCanonicalUrl } from '@lib/router'
import { Sitemap as SitemapType } from '@type/graphql/sitemap-type'
import { fetcher } from '@util/index'
import { portfolioCategories } from '@lib/portfolio'
import { getRelatedMdx } from '@util/mdx'

const getSitemap = (): Promise<SitemapType> =>
  fetcher(`query sitemap {
  posts(first: 100) {
    edges {
      node {
        title
        uri
      }
    }
  }
}`)

function LegalTitle({ children }: { children: string }) {
  return (
    <h2 className={'mt-6 mb-2 text-white font-bold text-3xl'}>{children}</h2>
  )
}

export default async function Sitemap() {
  const data = await getSitemap()
  const {
    data: { posts },
  } = data

  const projectCategories = Object.values(portfolioCategories)
  const projects = await getRelatedMdx({
    frontmatterKey: 'category',
    type: 'portfolio',
  })

  return (
    <Layout title="Plan du site">
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
              {projectCategories.map(({ title, slug }) => (
                <li key={title}>
                  <Link href={`${RouteLink.portfolio}/${slug}`}>{title}</Link>
                </li>
              ))}
            </ul>

            <ul className="styled-list mt-3">
              {projects.map(({ title, slug, support }) => (
                <li key={title}>
                  <Link href={`${RouteLink.portfolio}/${support.slug}/${slug}`}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <LegalTitle>Blog</LegalTitle>

            <ul className="styled-list">
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
  )
}

export const metadata = {
  title: 'Plan du site',
  alternates: {
    canonical: getCanonicalUrl(RouteLink.sitemap),
  },
}
