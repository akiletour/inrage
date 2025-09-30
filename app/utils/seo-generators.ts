import { getCanonicalUrl, RouteLink } from '@lib/router'
import {
  JsonLdCollectionPage,
  PortfolioPageMetadata,
  EcommerceService,
  EcommerceTechnology,
} from '@type/seo'

const ECOMMERCE_SERVICES: EcommerceService[] = [
  {
    name: 'Développement boutique PrestaShop',
    description:
      'Création et personnalisation de boutiques e-commerce PrestaShop',
  },
  {
    name: 'Développement boutique WooCommerce',
    description:
      'Création et personnalisation de boutiques e-commerce WooCommerce',
  },
  {
    name: 'Migration e-commerce',
    description:
      'Migration de boutiques PrestaShop vers WooCommerce ou vice-versa',
  },
]

const ECOMMERCE_TECHNOLOGIES: EcommerceTechnology[] = [
  { name: 'PrestaShop', versions: 'versions 1.6 à 8.x' },
  { name: 'WooCommerce & WordPress' },
  { name: 'Migrations e-commerce' },
  { name: 'Intégrations ERP et API' },
]

const ECOMMERCE_OFFERINGS: EcommerceService[] = [
  { name: 'Création de boutiques sur-mesure', description: '' },
  { name: 'Optimisation de performance', description: '' },
  { name: 'Maintenance et support technique', description: '' },
  { name: 'Formation et accompagnement', description: '' },
]

export function generateEcommerceMetadata(): PortfolioPageMetadata {
  return {
    title:
      'Portfolio E-commerce La Rochelle | Réalisations PrestaShop & WooCommerce',
    description:
      'Portfolio e-commerce : 7 réalisations PrestaShop et WooCommerce à La Rochelle. Boutiques B2B, migrations, optimisations. Développeur freelance Charente-Maritime.',
    keywords:
      'portfolio e-commerce La Rochelle, réalisations prestashop woocommerce, projets boutique en ligne charente-maritime, développeur e-commerce la rochelle',
    openGraph: {
      title:
        'Portfolio E-commerce La Rochelle | Réalisations PrestaShop & WooCommerce',
      description:
        'Portfolio e-commerce : 7 réalisations PrestaShop et WooCommerce à La Rochelle. Boutiques B2B, migrations, optimisations par développeur freelance.',
      url: getCanonicalUrl(`${RouteLink.portfolio}/e-commerce`),
      type: 'website',
      locale: 'fr_FR',
      images: [
        {
          url: getCanonicalUrl('/images/portfolio/e-commerce-og.jpg'),
          width: 1200,
          height: 630,
          alt: 'Portfolio E-commerce - Réalisations PrestaShop & WooCommerce La Rochelle',
        },
      ],
    },
    alternates: {
      canonical: getCanonicalUrl(`${RouteLink.portfolio}/e-commerce`),
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'geo.region': 'FR-17',
      'geo.placename': 'La Rochelle',
      'geo.position': '46.1591;-1.1520',
    },
  }
}

export function generateEcommerceJsonLd(): JsonLdCollectionPage {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio E-commerce - Réalisations PrestaShop & WooCommerce La Rochelle',
    description:
      'Portfolio e-commerce présentant 7 réalisations de boutiques PrestaShop et WooCommerce développées à La Rochelle et en Charente-Maritime.',
    url: getCanonicalUrl(`${RouteLink.portfolio}/e-commerce`),
    mainEntity: {
      '@type': 'Person',
      '@id': getCanonicalUrl('/#person'),
      name: 'Pierre Gault',
      jobTitle: 'Développeur Web Freelance',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Rochelle',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
        postalCode: '17000',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 46.1591,
          longitude: -1.152,
        },
        geoRadius: '50000',
      },
      knowsAbout: [
        'E-commerce',
        'PrestaShop',
        'WooCommerce',
        'WordPress',
        'Migration e-commerce',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services E-commerce',
        itemListElement: ECOMMERCE_SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        })),
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: getCanonicalUrl(),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: getCanonicalUrl(RouteLink.portfolio),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'E-commerce',
          item: getCanonicalUrl(`${RouteLink.portfolio}/e-commerce`),
        },
      ],
    },
  }
}

export function getEcommerceTechnologies(): readonly EcommerceTechnology[] {
  return ECOMMERCE_TECHNOLOGIES
}

export function getEcommerceOfferings(): readonly EcommerceService[] {
  return ECOMMERCE_OFFERINGS
}
