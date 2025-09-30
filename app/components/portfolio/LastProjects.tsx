import ProjectItem from '@component/items/ProjectItem'
import { getPortfolioItems } from '@lib/portfolio'

export default async function LastProjects() {
  const projects = await getPortfolioItems(4)

  return (
    <div className="mt-6 sm:mt-0 grid gap-4 sm:gap-0 grid-cols-2 md:grid-cols-4">
      {projects.map(({ title, slug, thumbnail, support }) => (
        <ProjectItem
          title={title}
          key={title}
          slug={slug}
          image={`/images/portfolio/${thumbnail}`}
          support={support}
        />
      ))}
    </div>
  )
}
