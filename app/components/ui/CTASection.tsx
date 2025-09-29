import { RouteLink } from '@lib/router'

interface CTASectionProps {
  title: string
  children: React.ReactNode
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  className?: string
}

export default function CTASection({
  title,
  children,
  primaryCTA = {
    label: 'Demander un devis gratuit',
    href: RouteLink.contact
  },
  secondaryCTA = {
    label: 'Voir tous les projets',
    href: RouteLink.portfolio
  },
  className = ''
}: CTASectionProps) {
  return (
    <div className={`bg-gray-dark/30 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-gray-dark/50 ${className}`}>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-white">
        {title}
      </h2>
      <div className="mb-8">
        {children}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href={primaryCTA.href}
          className="group inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg text-base lg:text-lg"
        >
          <span>{primaryCTA.label}</span>
          <svg className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href={secondaryCTA.href}
          className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 border-2 border-gray text-gray-light hover:text-white hover:border-gray-light font-medium rounded-lg transition-all duration-300 text-base lg:text-lg"
        >
          {secondaryCTA.label}
        </a>
      </div>
    </div>
  )
}