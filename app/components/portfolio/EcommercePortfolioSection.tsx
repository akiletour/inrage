import { Suspense } from 'react'
import SectionTitle from '@component/SectionTitle'
import PortfolioGrid from '@component/portfolio/PortfolioGrid'
import SupportSwitcher from '@component/portfolio/SupportSwitcher'
import { ProjectList } from '@type/graphql'

interface EcommercePortfolioSectionProps {
  projects: ProjectList[]
  categorySlug: string
}

export default function EcommercePortfolioSection({
  projects,
  categorySlug
}: EcommercePortfolioSectionProps) {
  return (
    <>
      <div className="mb-8 lg:mb-12">
        <SectionTitle
          content={
            `Développeur freelance spécialisé PrestaShop et WooCommerce basé à La Rochelle. Découvrez ${projects.length} projets e-commerce réalisés pour des entreprises de Charente-Maritime : boutiques B2B, migrations, optimisations performance et développements sur mesure.`
          }
          title="E-commerce"
        />
      </div>

      <div className="space-y-6 lg:space-y-8 mb-20 lg:mb-24">
        <Suspense fallback={<div className="animate-pulse bg-gray-dark h-12 rounded-lg" />}>
          <SupportSwitcher pathname={`/portfolio/${categorySlug}`} />
        </Suspense>

        <Suspense fallback={<div className="animate-pulse bg-gray-dark h-64 rounded-lg" />}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent pointer-events-none rounded-lg" />
            <PortfolioGrid projects={projects} />
          </div>
        </Suspense>
      </div>
    </>
  )
}