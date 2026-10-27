import Diagonal from '@component/Diagonal'
import Link from '@component/NoScrollLink'
import SectionTitle from '@component/SectionTitle'
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

type Props = {
  band?: boolean
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
    label: 'E-commerce et applications',
    items: [
      {
        name: 'Guédelon',
        text: 'Boutique WooCommerce multilingue, migrée depuis PrestaShop',
        href: `${RouteLink.portfolio}/wordpress/boutique-guedelon`,
      },
      {
        name: 'Quadria',
        text: 'Catalogue d’équipements de collecte des déchets',
        href: `${RouteLink.portfolio}/wordpress/quadria`,
      },
      {
        name: 'VMZinc',
        text: 'Site produits pour les plateformes internationales',
        href: `${RouteLink.portfolio}/application-web/vmzinc`,
      },
      {
        name: 'Éditions Delcourt',
        text: 'Multisite éditorial avec Soleil Productions',
        href: `${RouteLink.portfolio}/application-web/editions-delcourt`,
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

function Item({ item }: { item: Reference }) {
  const body = (
    <>
      <span className="block text-white text-xl font-medium transition-colors duration-150 group-hover:text-orange">
        {item.name}
      </span>
      <span className="block mt-1 text-sm text-gray-light">{item.text}</span>
    </>
  )

  if (!item.href) {
    return <span className="block py-2">{body}</span>
  }

  return (
    <Link href={item.href}>
      <span className="group block py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 rounded-sm">
        {body}
      </span>
    </Link>
  )
}

function Content() {
  return (
    <section
      className="container py-12 lg:py-0"
      aria-labelledby="references-title"
    >
      <SectionTitle
        title={['Ils me font', 'confiance']}
        content="Des groupes nationaux et des entreprises de La Rochelle, suivis pour la plupart depuis plusieurs années."
      />
      <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <div className="text-xs uppercase tracking-widest text-orange border-b border-[#2f2f2f] pb-3">
              {group.label}
            </div>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item.name}>
                  <Item item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function References({ band = false }: Props) {
  if (!band) {
    return (
      <div className="py-8">
        <Content />
      </div>
    )
  }

  return (
    <div className="bg-gray-darker">
      <Diagonal
        flipX
        flipY
        className="h-16 md:h-32 lg:h-48"
        bgClass="fill-gray-dark"
        bgCorner="fill-gray-darker"
      />
      <Content />
      <Diagonal
        className="h-16 md:h-32 lg:h-48"
        bgClass="fill-gray-dark"
        bgCorner="fill-gray-darker"
      />
    </div>
  )
}
