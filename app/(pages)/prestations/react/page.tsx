import Image from 'next/image'

import ContactForm from '@component/ContactForm'
import Diagonal from '@component/Diagonal'
import Layout from '@component/Layout'
import SectionTitle from '@component/SectionTitle'
import ReactServicesGrid from './ReactServicesGrid'
import ReactAdvantages from './ReactAdvantages'
import ReactProjectsShowcase from './ReactProjectsShowcase'
import { RouteLink, getCanonicalUrl } from '@lib/router'

export const metadata = {
  title: 'Développeur React Freelance La Rochelle | Expert Next.js - inRage',
  description:
    "Développeur React freelance expert à La Rochelle. Création d'applications Next.js modernes et performantes. Spécialisé TypeScript, SSR, e-commerce. Devis gratuit.",
  keywords: [
    'développeur react freelance la rochelle',
    'expert nextjs la rochelle',
    'création application react',
    'développement spa react',
    'freelance typescript la rochelle',
    'développeur frontend react france',
  ],
  alternates: {
    canonical: getCanonicalUrl(RouteLink.prestationReact),
  },
  openGraph: {
    title: 'Développeur React Freelance La Rochelle | Expert Next.js',
    description:
      "Développeur React freelance expert à La Rochelle. Création d'applications Next.js modernes et performantes pour votre business.",
    url: getCanonicalUrl(RouteLink.prestationReact),
    siteName: 'inRage',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.inrage.fr/images/react-nextjs-development.png',
        width: 697,
        height: 736,
        alt: 'Développement React Next.js applications modernes La Rochelle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur React Freelance La Rochelle | Expert Next.js',
    description:
      "Développeur React freelance expert à La Rochelle. Création d'applications Next.js modernes et performantes.",
    images: ['https://www.inrage.fr/images/react-nextjs-development.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PrestationReact() {
  const reactServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement React et Next.js',
    description:
      "Service de développement d'applications web modernes avec React, Next.js et TypeScript par un développeur freelance expert basé à La Rochelle",
    provider: {
      '@type': 'Person',
      name: 'Pascal Gault',
      jobTitle: 'Développeur React Freelance',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Rochelle',
        addressRegion: 'Nouvelle-Aquitaine',
        postalCode: '17000',
        addressCountry: 'FR',
      },
      url: 'https://www.inrage.fr',
      sameAs: [
        'https://www.linkedin.com/in/akiletour/',
        'https://github.com/akiletour/inrage',
      ],
    },
    serviceType: 'Développement Web',
    category: "Développement d'applications",
    offers: {
      '@type': 'Offer',
      description: "Développement d'applications React et Next.js",
      price: 'Sur devis',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    areaServed: {
      '@type': 'Place',
      name: 'France',
      containedInPlace: {
        '@type': 'Place',
        name: 'La Rochelle',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services React & Next.js',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Création d'applications React",
            description:
              "Développement d'applications single-page modernes avec React",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Next.js',
            description:
              'Applications Next.js avec SSR/SSG pour performances optimales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Migration vers React',
            description:
              "Migration d'applications existantes vers l'écosystème React",
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.inrage.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Prestations',
        item: 'https://www.inrage.fr/prestations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Développement React & Next.js',
        item: 'https://www.inrage.fr/prestations/react',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pourquoi choisir un développeur React freelance à La Rochelle ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un développeur React freelance à La Rochelle offre une expertise locale avec une connaissance approfondie du marché français. Je propose un accompagnement personnalisé, des délais flexibles et une communication directe pour vos projets React et Next.js.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont les avantages de React et Next.js pour mon projet ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'React et Next.js offrent des performances excellentes, un SEO optimisé avec le rendu côté serveur, une évolutivité maximale et une expérience utilisateur fluide. Ces technologies modernes garantissent la pérennité de votre application web.',
        },
      },
      {
        '@type': 'Question',
        name: "Combien coûte le développement d'une application React ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le coût dépend de la complexité du projet. Une application React simple commence à partir de 3000€, tandis qu'une solution complète avec Next.js peut varier de 5000€ à 15000€. Je propose toujours un devis gratuit personnalisé.",
        },
      },
      {
        '@type': 'Question',
        name: "Quels types d'applications React développez-vous ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Je développe tous types d'applications : SPA (Single Page Applications), sites e-commerce, dashboards d'administration, plateformes SaaS, applications métier et sites vitrines modernes avec React et Next.js.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reactServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Layout
        breadcrumbs={[
          {
            link: RouteLink.prestations,
            title: 'Prestations sous WordPress, Prestashop et Symfony',
          },
        ]}
        title="Développement React & Next.js"
      >
        <div className="flex max-lg:flex-col relative container gap-16 *:flex-1">
          <Image
            className="h-full! object-cover drop-shadow-2xl"
            src="/images/react-nextjs-development.webp"
            width={697}
            priority
            height={736}
            alt="Développeur React freelance La Rochelle - Création applications Next.js modernes"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
          <div className=" relative flex items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <h1 className="font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight animate-in slide-in-from-bottom-4 duration-700">
                  Développeur React freelance à
                  <span className="text-orange"> La Rochelle</span>
                </h1>

                <div className="text-gray-light font-medium text-lg md:text-xl leading-relaxed animate-in slide-in-from-bottom-6 duration-700 delay-150">
                  <p>
                    Expert React et Next.js freelance basé à La Rochelle,
                    spécialisé dans la création d&apos;applications web
                    performantes avec React, Next.js et TypeScript.
                  </p>
                </div>
              </div>

              <div className="space-y-8 text-gray-light/90 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-300">
                <p>
                  Développeur React freelance à La Rochelle, je conçois et
                  développe des applications web modernes, réactives et
                  scalables en utilisant l&apos;écosystème React. De
                  l&apos;application single-page au site e-commerce complexe, en
                  passant par les dashboards et les plateformes SaaS pour
                  entreprises françaises.
                </p>
                <p>
                  Mon expertise en tant que développeur React freelance La
                  Rochelle couvre React, Next.js, TypeScript, ainsi que
                  l&apos;intégration d&apos;APIs REST et GraphQL pour créer des
                  expériences utilisateur fluides et performantes adaptées au
                  marché français.
                </p>
                <p>
                  Je vous accompagne dans la modernisation de vos outils
                  existants ou la création de nouvelles applications avec les
                  technologies les plus récentes de l&apos;écosystème React.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-8 animate-in slide-in-from-bottom-10 duration-700 delay-500">
                <a
                  href="#contact"
                  className="button-primary group inline-flex items-center justify-center px-12 py-6 rounded-lg font-semibold text-white bg-orange hover:bg-orange-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange/25"
                >
                  Démarrer mon projet
                  <svg
                    className="w-10 h-10 ml-4 transform group-hover:translate-x-2 transition-transform"
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
                </a>
                <a
                  href="#services"
                  className="button-secondary inline-flex items-center justify-center px-12 py-6 rounded-lg font-semibold text-orange border-2 border-orange hover:bg-orange hover:text-white transition-all duration-300"
                >
                  Voir mes services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-darker mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-darker/80"></div>
          <Diagonal
            flipX
            flipY
            className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
            bgClass="fill-gray-dark"
            bgCorner="fill-gray-darker"
          />
          <div className="container text-center relative z-10">
            <div className="md:px-36 text-lg max-w-4xl mx-auto">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight">
                Développement React à La Rochelle
                <br />
                <span className="text-orange">au service de vos projets</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
                <div className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-8 bg-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4zM12 18l2-8h-4l2 8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Technologies modernes
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed">
                    React et Next.js représentent aujourd&apos;hui les
                    technologies de référence pour le développement
                    d&apos;applications web modernes.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-8 bg-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.5 6.5h7L17 14l2.5 7.5L12 18l-7.5 3.5L7 14 1.5 8.5h7L12 2zm0 2.8L9.5 9H4.2l3.3 3.7L6 19l6-3.2L18 19l-1.5-6.3L20.8 9h-5.3L12 4.8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Approche component-driven
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed">
                    J&apos;utilise une approche component-driven pour créer des
                    interfaces réutilisables et maintenables avec une
                    architecture solide.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-32 h-32 mx-auto mb-8 bg-orange rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-4">
                    Adaptabilité
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed">
                    Que ce soit pour un site vitrine, une application e-commerce
                    ou un dashboard, je m&apos;adapte à vos besoins spécifiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Diagonal
            bgClass="fill-gray-dark"
            className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
            bgCorner="fill-gray-darker"
          />
        </div>

        <div
          id="services"
          className="container mt-8 md:mt-0 lg:-mb-20 relative z-10 scroll-mt-40"
        >
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <SectionTitle
              title={['Mes services', 'React & Next.js']}
              content="De la conception à la mise en production, je vous accompagne dans la création d'applications React performantes et modernes adaptées à vos besoins business."
            />
          </div>

          <ReactServicesGrid />
        </div>

        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgCorner="fill-orange"
          bgClass="fill-gray-darker"
        />

        <div className="bg-gray-darker relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-darker/80"></div>
          <div className="container mb-8 md:mb-0 relative z-10">
            <div className="animate-in slide-in-from-bottom-4 duration-700">
              <SectionTitle
                content="Découvrez pourquoi React et Next.js sont les technologies de choix pour vos projets web modernes."
                title="Avantages React & Next.js"
              />
            </div>

            <ReactAdvantages />
          </div>

          <Diagonal
            className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
            bgCorner="fill-orange"
            bgClass="fill-gray-dark"
          />
        </div>

        <div className="container mt-8 md:mt-0">
          <div className="animate-in slide-in-from-bottom-4 duration-700">
            <SectionTitle
              content="Découvrez quelques exemples de réalisations React et Next.js que j'ai développées pour mes clients."
              title="Projets React & Next.js"
            />
          </div>

          <ReactProjectsShowcase />
        </div>

        <Diagonal
          className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
          bgCorner="fill-orange"
          bgClass="fill-gray-darker"
        />

        <div
          id="contact"
          className="bg-gray-darker relative overflow-hidden scroll-mt-40"
        >
          <div className="absolute inset-0 bg-gray-darker/80"></div>
          <div className="container relative z-10">
            <div className="animate-in slide-in-from-bottom-4 duration-700">
              <SectionTitle
                content="Prêt à moderniser vos applications web avec React et Next.js ? Contactez-moi pour discuter de votre projet."
                title="Démarrons votre projet"
              />
            </div>

            <div className="animate-in slide-in-from-bottom-6 duration-700 delay-200">
              <ContactForm />
            </div>
          </div>

          <Diagonal
            className="h-20 sm:h-32 md:h-50 lg:h-72 xl:h-90 -z-10"
            bgCorner="fill-orange"
            bgClass="fill-gray-dark"
          />
        </div>
      </Layout>
    </>
  )
}
