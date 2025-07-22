import ProjectItem from '@component/items/ProjectItem'
import { getAllMdxBy } from '@util/mdx'

export default async function LastProjects() {
  const projects = await getAllMdxBy({
    frontmatterKey: 'category',
    type: 'portfolio',
    limit: 4,
  })
  return (
    <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
      {projects.map(({ title, slug, image, support }) => (
        <ProjectItem
          title={title}
          key={title}
          slug={slug}
          image={`/images/portfolio/${image}`}
          support={support}
        />
      ))}
    </div>
  )
}
