import ProjectItem from '@component/items/ProjectItem';
import projects from '@graphql-query/latest-projects.graphql';
import { List, ProjectList } from '@type/graphql';
import { fetcher } from '@util/index';

export const getLatestProjects = (): Promise<List<ProjectList>> => {
  return fetcher(projects);
};

export default async function LastProjects() {
  const { data } = await getLatestProjects();
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
  );
}
