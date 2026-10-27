import Link from '@component/NoScrollLink'
import { RouteLink } from '@lib/router'

type Reference = {
  name: string
  text: string
  href?: string
}

type Group = {
  label: string
  items: Reference[]
}

const GROUPS: Group[] = [
  {
    label: 'Groupes et réseaux',
    items: [
      {
        name: 'Emil Frey France',
        text: 'Distribution automobile, plusieurs entités dont EFFy Pro School',
        href: `${RouteLink.portfolio}/wordpress/effy-proschool`,
      },
      {
        name: 'Groupe IDAIA',
        text: 'Développement et maintenance des sites du groupe',
      },
      {
        name: 'Audilab',
        text: 'Réseau de centres auditifs, site et accessibilité',
      },
      {
        name: 'Epitech',
        text: 'Refonte du site du réseau d’écoles',
        href: `${RouteLink.portfolio}/wordpress/reseau-epitech`,
      },
    ],
  },
  {
    label: 'À La Rochelle et en Charente-Maritime',
    items: [
      {
        name: 'Camping La Mouette Rieuse',
        text: 'Identité visuelle et site WordPress',
        href: `${RouteLink.portfolio}/wordpress/camping-la-mouette-rieuse`,
      },
      {
        name: 'Santé Environnement Nouvelle-Aquitaine',
        text: 'Site éditorial WordPress',
        href: `${RouteLink.portfolio}/wordpress/santeenvironnement-nouvelleaquitaine`,
      },
      {
        name: 'Laboratoire Biosalines',
        text: 'Boutique WooCommerce, Île de Ré',
        href: `${RouteLink.portfolio}/wordpress/biosalines`,
      },
      {
        name: 'Romain Ouvrard',
        text: 'Portfolio de graphiste',
        href: `${RouteLink.portfolio}/wordpress/graphiste-romain-ouvrard`,
      },
    ],
  },
]

export default function References() {
  return (
    <section className="container py-16" aria-labelledby="references-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h2
            id="references-title"
            className="text-white text-3xl font-bold text-balance"
          >
            Ils me font confiance
          </h2>
          <p className="mt-4 text-gray-light">
            Des groupes nationaux et des entreprises de La Rochelle, suivis pour
            la plupart depuis plusieurs années.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="text-xs uppercase tracking-widest text-orange">
                {group.label}
              </div>
              <ul className="mt-4 divide-y divide-[#2f2f2f] border-y border-[#2f2f2f]">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.href ? (
                      <Link href={item.href}>
                        <span className="block py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 rounded-sm">
                          <span className="block text-white text-lg font-medium transition-colors duration-150 hover:text-orange">
                            {item.name}
                          </span>
                          <span className="block text-sm text-gray-light">
                            {item.text}
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <span className="block py-3">
                        <span className="block text-white text-lg font-medium">
                          {item.name}
                        </span>
                        <span className="block text-sm text-gray-light">
                          {item.text}
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
