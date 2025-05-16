import ProjectItem from '@component/items/ProjectItem'
import { ProjectList } from '@type/graphql'
import { portfolioCategories } from '@lib/portfolio'

type Props = {
  projects: ProjectList[]
}

export default async function PortfolioGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3">
      {projects.map(({ title, image, slug, support }) => {
        const category =
          portfolioCategories[support.slug as keyof typeof portfolioCategories]

        return (
          <ProjectItem
            xl
            key={title}
            image={`/images/portfolio/${image}`}
            title={title}
            slug={slug}
            support={category}
          />
        )
      })}
    </div>
  )
}
