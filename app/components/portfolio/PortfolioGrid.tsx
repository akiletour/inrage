import ProjectItem from '@component/items/ProjectItem'
import { ProjectList } from '@type/graphql'
import { portfolioCategories } from '@lib/portfolio'

interface PortfolioGridProps {
  projects: ProjectList[]
  className?: string
}

export default function PortfolioGrid({
  projects,
  className = '',
}: PortfolioGridProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-8 md:gap-0 md:grid-cols-3 ${className}`}
    >
      {projects.map(({ title, thumbnail, slug, support }) => {
        const category =
          portfolioCategories[support.slug as keyof typeof portfolioCategories]

        return (
          <ProjectItem
            xl
            key={title}
            image={`/images/portfolio/${thumbnail}`}
            title={title}
            slug={slug}
            support={category}
          />
        )
      })}
    </div>
  )
}
