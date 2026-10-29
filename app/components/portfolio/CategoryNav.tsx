import Link from 'next/link'

import { getPortfolioItems, portfolioCategories } from '@lib/portfolio'
import { RouteLink } from '@lib/router'

export default async function CategoryNav({ current }: { current?: string }) {
  const items = await getPortfolioItems()
  const categories = Object.values(portfolioCategories)

  const entries = [
    {
      href: RouteLink.portfolio,
      label: 'Tous les projets',
      count: items.length,
    },
    ...categories.map((category) => ({
      href: `${RouteLink.portfolio}/${category.slug}`,
      label: category.title,
      count: items.filter((item) =>
        item.categories.some((entry) => entry.slug === category.slug)
      ).length,
    })),
  ]

  const active = current ?? RouteLink.portfolio

  return (
    <nav aria-label="Filtrer le portfolio">
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {entries.map((entry) => (
          <li key={entry.href}>
            <Link
              href={entry.href}
              aria-current={entry.href === active ? 'page' : undefined}
              className={`inline-flex items-baseline gap-2 border-b pb-1 text-base transition-colors ${
                entry.href === active
                  ? 'border-(--home-orange) text-white'
                  : 'border-transparent text-(--home-muted) hover:text-white'
              }`}
            >
              {entry.label}
              <span className="home-num text-xs text-(--home-muted)">
                {entry.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
