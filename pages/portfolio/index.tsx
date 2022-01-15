import Layout from '@component/layouts/Layout';
import PortfolioLayout from '@component/portfolio/PortfolioLayout';
import { getPortfolioProjects } from '@lib/portfolio';
import { ProjectItemType } from '@type/portfolio';

interface PortfolioType {
  pageTitle: string;
  projects: {
    edges: ProjectItemType[];
  };
  supports: {
    edges: Array<{
      node: {
        name: string;
        slug: string;
        id: number;
      };
    }>;
  };
}

export default function Portfolio({
  pageTitle,
  projects: { edges },
  supports: { edges: supports },
}: PortfolioType) {
  return (
    <Layout>
      <PortfolioLayout
        projects={edges}
        supports={supports}
        pageTitle={pageTitle}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getPortfolioProjects();

  return {
    props: {
      projects: projects.projets,
      supports: projects.supports,
      pageTitle: 'Portfolio',
    },
  };
}
