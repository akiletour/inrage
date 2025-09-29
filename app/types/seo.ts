export interface JsonLdPerson {
  '@type': 'Person'
  '@id': string
  name: string
  jobTitle: string
  address: {
    '@type': 'PostalAddress'
    addressLocality: string
    addressRegion: string
    addressCountry: string
    postalCode: string
  }
  areaServed: {
    '@type': 'GeoCircle'
    geoMidpoint: {
      '@type': 'GeoCoordinates'
      latitude: number
      longitude: number
    }
    geoRadius: string
  }
  knowsAbout: string[]
  hasOfferCatalog: {
    '@type': 'OfferCatalog'
    name: string
    itemListElement: Array<{
      '@type': 'Offer'
      itemOffered: {
        '@type': 'Service'
        name: string
        description: string
      }
    }>
  }
}

export interface JsonLdBreadcrumb {
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

export interface JsonLdCollectionPage {
  '@context': 'https://schema.org'
  '@type': 'CollectionPage'
  name: string
  description: string
  url: string
  mainEntity: JsonLdPerson
  breadcrumb: JsonLdBreadcrumb
}

export interface PortfolioPageMetadata {
  title: string
  description: string
  keywords: string
  openGraph: {
    title: string
    description: string
    url: string
    type: 'website'
    locale: 'fr_FR'
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  alternates: {
    canonical: string
  }
  robots: {
    index: boolean
    follow: boolean
  }
  other: {
    'geo.region': string
    'geo.placename': string
    'geo.position': string
  }
}

export interface EcommerceService {
  name: string
  description: string
}

export interface EcommerceTechnology {
  name: string
  versions?: string
}