import ProjectItem from '@component/items/ProjectItem'
import { List, ProjectList } from '@type/graphql'
import { fetcher } from '@util/index'

export const getLatestProjects = (): Promise<List<ProjectList>> => {
  return fetcher(`query projects {
  projets(first: 4) {
    edges {
      node {
        id
        title
        slug
        status
        featuredImage {
          node {
            sourceUrl
          }
        }
        supports {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
}`)
}

export default async function LastProjects() {
  const { data } = await getLatestProjects()
  return (
    <div className="mt-3 sm:mt-0 grid gap-2 sm:gap-0 grid-cols-2 md:grid-cols-4">
      {data?.projets?.edges.map(({ node }) => (
        <ProjectItem
          title={node.title}
          key={node.id}
          slug={node.slug}
          image={node.featuredImage?.node?.sourceUrl}
          support={node.supports?.edges[0]?.node}
        />
      ))}
    </div>
  )
}
