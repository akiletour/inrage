import ProjectItem from '@component/items/ProjectItem'
import { ProjectList } from '@type/graphql'

type Props = {
  projects: Array<{
    node: ProjectList
  }>
}

export default async function PortfolioGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3">
      {projects.map(({ node }) => (
        <ProjectItem
          xl
          key={node.id}
          image={node.featuredImage.node.sourceUrl}
          title={node.title}
          slug={node.slug}
          support={node.supports?.edges[0]?.node}
          isPrivate={node.status === 'private'}
        />
      ))}
    </div>
  )
}
