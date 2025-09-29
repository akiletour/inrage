import Link from '@component/NoScrollLink'
import { RouteLink } from '@lib/router'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  iconType:
    | 'nextjs'
    | 'react'
    | 'ecommerce'
    | 'dashboard'
    | 'migration'
    | 'mobile'
  imageAlt: string
  ctaText?: string
  ctaLink?: string
}

function ServiceIcon({
  type,
  className,
}: {
  type: ServiceCardProps['iconType']
  className?: string
}) {
  const iconProps = {
    className: `w-full h-full ${className}`,
    fill: 'currentColor',
    viewBox: '0 0 64 64',
  }

  switch (type) {
    case 'nextjs':
      return (
        <svg
          {...iconProps}
          xmlns="http://www.w3.org/2000/svg"
          viewBox=".5 -.2 1023 1024.1"
          fill="fill-orange"
        >
          <path
            fill="currentColor"
            d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3M687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2"
          />
          <path
            fill="currentColor"
            d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1m-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1m-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1m-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1m-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1"
          />
        </svg>
      )
    case 'react':
      return (
        <svg {...iconProps}>
          <circle cx="32" cy="32" r="4" className="fill-orange" />
          <ellipse
            cx="32"
            cy="32"
            rx="16"
            ry="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="16"
            ry="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange"
            transform="rotate(60 32 32)"
          />
          <ellipse
            cx="32"
            cy="32"
            rx="16"
            ry="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange"
            transform="rotate(120 32 32)"
          />
        </svg>
      )
    case 'ecommerce':
      return (
        <svg {...iconProps} viewBox="0 0 640 640">
          <path
            d="M64 80C64 71.2 71.2 64 80 64L125.3 64C145.9 64 163.9 77.1 170.6 96L594.4 96C619.9 96 638.8 119.5 633.5 144.4L601.1 295.1C594 328.3 564.7 352 530.7 352L217.7 352L223.4 383.2C226.9 402.2 243.4 416 262.8 416L528 416C536.8 416 544 423.2 544 432C544 440.8 536.8 448 528 448L262.7 448C227.9 448 198.1 423.1 191.9 388.9L141 109.1C139.6 101.5 133 96 125.3 96L80 96C71.2 96 64 88.8 64 80zM211.9 320L530.7 320C549.6 320 565.9 306.8 569.8 288.4L602.1 137.7C603.2 132.7 599.4 128 594.3 128L177 128L211.9 320zM272 544C283 544 292 535 292 524C292 513 283 504 272 504C261 504 252 513 252 524C252 535 261 544 272 544zM272 472C300.7 472 324 495.3 324 524C324 552.7 300.7 576 272 576C243.3 576 220 552.7 220 524C220 495.3 243.3 472 272 472zM516 524C516 513 507 504 496 504C485 504 476 513 476 524C476 535 485 544 496 544C507 544 516 535 516 524zM444 524C444 495.3 467.3 472 496 472C524.7 472 548 495.3 548 524C548 552.7 524.7 576 496 576C467.3 576 444 552.7 444 524zM16 160L80 160C88.8 160 96 167.2 96 176C96 184.8 88.8 192 80 192L16 192C7.2 192 0 184.8 0 176C0 167.2 7.2 160 16 160zM16 256L96 256C104.8 256 112 263.2 112 272C112 280.8 104.8 288 96 288L16 288C7.2 288 0 280.8 0 272C0 263.2 7.2 256 16 256zM16 352L112 352C120.8 352 128 359.2 128 368C128 376.8 120.8 384 112 384L16 384C7.2 384 0 376.8 0 368C0 359.2 7.2 352 16 352z"
            className="fill-orange"
          />
        </svg>
      )
    case 'dashboard':
      return (
        <svg {...iconProps}>
          <rect
            x="12"
            y="12"
            width="20"
            height="16"
            rx="2"
            className="fill-orange"
          />
          <rect
            x="36"
            y="12"
            width="16"
            height="8"
            rx="2"
            className="fill-orange/60"
          />
          <rect
            x="36"
            y="24"
            width="16"
            height="4"
            rx="2"
            className="fill-orange/60"
          />
          <rect
            x="12"
            y="32"
            width="12"
            height="20"
            rx="2"
            className="fill-orange/60"
          />
          <rect
            x="28"
            y="40"
            width="12"
            height="12"
            rx="2"
            className="fill-orange/60"
          />
          <rect
            x="44"
            y="36"
            width="8"
            height="16"
            rx="2"
            className="fill-orange"
          />
        </svg>
      )
    case 'migration':
      return (
        <svg {...iconProps}>
          <path
            d="M20 32h24M36 20l12 12-12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange"
          />
          <rect
            x="12"
            y="24"
            width="16"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-orange/60"
          />
          <circle cx="16" cy="28" r="1" className="fill-orange" />
          <circle cx="20" cy="28" r="1" className="fill-orange" />
          <circle cx="24" cy="28" r="1" className="fill-orange" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...iconProps}>
          <rect
            x="20"
            y="16"
            width="24"
            height="32"
            rx="2"
            className="fill-orange"
          />
          <circle cx="32" cy="54" r="2" className="fill-orange" />
          <rect
            x="28"
            y="12"
            width="8"
            height="2"
            rx="1"
            className="fill-orange/60"
          />
          <path
            d="M24 24h16M24 28h16M24 32h12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function ServiceCard({
  title,
  description,
  features,
  iconType,
  imageAlt,
  ctaText,
  ctaLink,
}: ServiceCardProps) {
  return (
    <div className="group bg-gray-dark rounded-xl p-6 hover:bg-gray-darker transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange/10 border border-transparent hover:border-orange/20 h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 relative flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-orange">
          <div className="absolute inset-0 bg-orange/20 rounded-full"></div>
          <div className="absolute inset-0 bg-orange/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div
            className="relative z-10 p-2 filter group-hover:brightness-110 transition-all duration-300"
            title={imageAlt}
          >
            <ServiceIcon type={iconType} />
          </div>
        </div>
        <h3 className="text-white text-xl font-bold ml-4 group-hover:text-orange transition-colors duration-300">
          {title}
        </h3>
      </div>

      <p className="text-gray-light mb-6 leading-relaxed flex-1 group-hover:text-gray-light/90 transition-colors duration-300">
        {description}
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start group/item"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 relative">
              <svg
                className="w-5 h-5 text-orange transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className="absolute inset-0 bg-orange/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-50"
                style={{ transitionDelay: `${index * 50}ms` }}
              ></div>
            </div>
            <span
              className="text-sm text-gray-light group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {ctaText && ctaLink && (
        <div className="mt-auto">
          <Link href={ctaLink}>
            <span className="button inline-flex items-center justify-center w-full px-6 py-3 bg-orange text-white font-semibold rounded-lg transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-orange/25 transition-all duration-300 hover:bg-orange-dark">
              {ctaText}
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default function ReactServicesGrid() {
  const services = [
    {
      title: 'Applications Next.js',
      description:
        "Développement d'applications web complètes avec Next.js, optimisées pour les performances et le SEO.",
      features: [
        'Server-Side Rendering (SSR)',
        'Static Site Generation (SSG)',
        'API Routes intégrées',
        'Optimisations automatiques',
        'TypeScript intégré',
      ],
      iconType: 'nextjs' as const,
      imageAlt: 'Développement application Next.js',
      ctaText: 'En savoir plus',
      ctaLink: RouteLink.contact,
    },
    {
      title: 'SPAs React',
      description:
        "Création d'applications single-page réactives et performantes avec React et l'écosystème moderne.",
      features: [
        'Components réutilisables',
        'State management (Redux/Zustand)',
        'Routing dynamique',
        'Intégration APIs REST/GraphQL',
        'Tests automatisés',
      ],
      iconType: 'react' as const,
      imageAlt: 'Application React Single Page',
      ctaText: 'Découvrir',
      ctaLink: RouteLink.contact,
    },
    {
      title: 'E-commerce React',
      description:
        'Boutiques en ligne modernes avec React, intégrant paiements, gestion de stock et expérience utilisateur optimisée.',
      features: [
        'Catalogue produits dynamique',
        'Panier et checkout fluides',
        'Intégration paiements',
        'Dashboard administrateur',
        'Performance optimisée',
      ],
      iconType: 'ecommerce' as const,
      imageAlt: 'E-commerce avec React',
      ctaText: 'Voir exemples',
      ctaLink: RouteLink.portfolio,
    },
    {
      title: 'Dashboards & SaaS',
      description:
        "Interfaces d'administration et plateformes SaaS avec tableaux de bord interactifs et visualisations de données.",
      features: [
        'Tableaux de bord interactifs',
        'Visualisations de données',
        'Authentification sécurisée',
        'Gestion des permissions',
        'Notifications temps réel',
      ],
      iconType: 'dashboard' as const,
      imageAlt: 'Dashboard React',
      ctaText: 'Consultation',
      ctaLink: RouteLink.contact,
    },
    {
      title: 'Migration & Modernisation',
      description:
        "Migration d'applications existantes vers React et modernisation de vos outils avec les dernières technologies.",
      features: [
        'Audit technique complet',
        'Migration progressive',
        'Amélioration des performances',
        'Modernisation UX/UI',
        'Formation équipes',
      ],
      iconType: 'migration' as const,
      imageAlt: 'Migration vers React',
      ctaText: 'Planifier',
      ctaLink: RouteLink.contact,
    },
    {
      title: 'Applications Mobile',
      description:
        "Développement d'applications mobiles hybrides avec React Native pour iOS et Android.",
      features: [
        'Code partagé iOS/Android',
        'Performance native',
        'Intégration API native',
        'Push notifications',
        'Publication App Stores',
      ],
      iconType: 'mobile' as const,
      imageAlt: 'Application React Native',
      ctaText: 'Découvrir',
      ctaLink: RouteLink.contact,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="animate-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ServiceCard
            title={service.title}
            description={service.description}
            features={service.features}
            iconType={service.iconType}
            imageAlt={service.imageAlt}
            ctaText={service.ctaText}
            ctaLink={service.ctaLink}
          />
        </div>
      ))}
    </div>
  )
}
