import FeatureList from '@component/ui/FeatureList'
import InfoCard from '@component/ui/InfoCard'
import Link from 'next/link'
import { RouteLink } from '@lib/router'
import { EcommerceTechnology, EcommerceService } from '@type/seo'

interface EcommerceExpertiseSectionProps {
  technologies: readonly EcommerceTechnology[]
  offerings: readonly EcommerceService[]
}

export default function EcommerceExpertiseSection({
  technologies,
  offerings,
}: EcommerceExpertiseSectionProps) {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray/30 to-transparent" />

      <div className="pt-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 lg:mb-16 text-white tracking-tight">
          Expertise E-commerce à La Rochelle et en Charente-Maritime
        </h2>

        <div className="prose prose-lg prose-invert max-w-none mb-16 lg:mb-24">
          <p className="text-base sm:text-lg lg:text-xl text-gray-light leading-relaxed mb-12">
            <strong className="text-white">
              Développeur freelance spécialisé en e-commerce
            </strong>{' '}
            basé à La Rochelle, je vous accompagne dans la création, la
            migration et l&apos;optimisation de vos boutiques en ligne{' '}
            <strong className="text-orange">PrestaShop et WooCommerce</strong>.
          </p>
          <p className="text-base sm:text-lg text-gray leading-relaxed">
            Mes réalisations incluent des migrations PrestaShop vers
            WooCommerce, des boutiques B2B sur-mesure, des optimisations de
            performance et des intégrations ERP pour des entreprises de toutes
            tailles.
          </p>
        </div>

        <div className="mb-16 lg:mb-24">
          <Link
            href={RouteLink.prestationPrestashop}
            className="inline-flex items-center gap-4 px-6 py-4 md:px-8 md:py-4.5 border border-orange/50 rounded-lg text-sm md:text-base text-orange font-medium hover:border-orange hover:bg-orange/10 transition-all duration-300 group"
          >
            <span>Découvrez nos prestations PrestaShop complètes</span>
            <svg
              className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <InfoCard className="mb-24 lg:mb-32">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <FeatureList
              title="Technologies maîtrisées :"
              items={technologies.map((tech) =>
                tech.versions ? `${tech.name} (${tech.versions})` : tech.name
              )}
            />
            <FeatureList
              title="Services proposés :"
              items={offerings.map((offering) => offering.name)}
            />
          </div>
        </InfoCard>
      </div>
    </section>
  )
}

