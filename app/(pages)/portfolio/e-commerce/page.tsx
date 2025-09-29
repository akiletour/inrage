import { type ReactElement } from 'react'
import Layout from '@component/Layout'
import EcommercePortfolioSection from '@component/portfolio/EcommercePortfolioSection'
import EcommerceExpertiseSection from '@component/portfolio/EcommerceExpertiseSection'
import LocalAdvantagesCTA from '@component/portfolio/LocalAdvantagesCTA'
import { getPortfolioItems, portfolioCategories } from '@lib/portfolio'
import { RouteLink } from '@lib/router'
import {
  generateEcommerceMetadata,
  generateEcommerceJsonLd,
  getEcommerceTechnologies,
  getEcommerceOfferings,
} from '@util/seo-generators'
import { ProjectList } from '@type/graphql'
import { EcommerceTechnology, EcommerceService } from '@type/seo'

export const metadata = generateEcommerceMetadata()

export const revalidate = 3600

interface PageData {
  projects: ProjectList[]
  technologies: readonly EcommerceTechnology[]
  offerings: readonly EcommerceService[]
}

export default async function Page(): Promise<ReactElement> {
  const [projects] = await Promise.all([getPortfolioItems(-1, 'e-commerce')])

  const technologies = getEcommerceTechnologies()
  const offerings = getEcommerceOfferings()

  const category = portfolioCategories['e-commerce']
  const jsonLd = generateEcommerceJsonLd()

  const pageData: PageData = {
    projects,
    technologies,
    offerings,
  }

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]}
      title="Portfolio E-commerce PrestaShop & WooCommerce"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <EcommercePortfolioSection
          projects={pageData.projects}
          categorySlug={category.slug}
        />

        <EcommerceExpertiseSection
          technologies={pageData.technologies}
          offerings={pageData.offerings}
        />

        <div className="mt-8">
          <LocalAdvantagesCTA />
        </div>
      </div>
    </Layout>
  )
}

