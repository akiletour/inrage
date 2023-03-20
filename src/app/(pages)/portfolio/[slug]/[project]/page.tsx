import Layout from '@component/Layout';
import allProjectsSlugs from '@graphql-query/all-projects-slug.graphql';
import SingleProjectData from '@graphql-query/single-project.graphql';
import { ProjectsSlugs, SingleProject } from '@type/graphql/portfolio';
import { fetcher } from '@util/index';

type Props = {
  params: {
    project: string;
  };
};

export const revalidate = 60;

const getAllProjectsSlugs = (): Promise<ProjectsSlugs> =>
  fetcher(allProjectsSlugs);

export async function generateStaticParams() {
  const { data } = await getAllProjectsSlugs();

  return data.projets.edges.map(({ node }) => ({
    slug: node.slug,
  }));
}

const getSingleProject = (slug: string): Promise<SingleProject> =>
  fetcher(SingleProjectData, { id: slug });

export default async function Page({ params }: Props) {
  const { data } = await getSingleProject(params.project);
  console.log(data);
  return <Layout>Hye</Layout>;
}
