import Layout from '@component/layouts/Layout';
import { getPortfolioProjects } from '../../lib/api';
import PortfolioLayout from '../../components/portfolio/PortfolioLayout';
import { ProjectItemType } from '../../types/portfolio';

interface PortfolioType {
  pageTitle: string
  projects: {
    edges: ProjectItemType[]
  }
  supports: {
    edges: Array<{
      node: {
        name: string
        slug: string
        id: number
      }
    }>
  }
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
