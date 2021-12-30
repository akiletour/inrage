import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import {
  getAllSupportsWithSlug,
  getSingleSupport,
} from '../../../lib/api';
import PortfolioLayout from '../../../components/portfolio/PortfolioLayout';
import { ProjectItemType, SupportType } from '../../../types/portfolio';

type Props = {
  pageTitle: string
  projects: ProjectItemType[]
  support?: {
    slug: string
  }
  supports: Array<{
    node: SupportType
  }>
}

export default function PortfolioSupport({
  pageTitle, support, projects, supports,
}: Props) {
  const router = useRouter();

  if (!router.isFallback && !support?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? <p>Chargement en cours...</p> : (
        <PortfolioLayout
          projects={projects}
          supports={supports}
          pageTitle={pageTitle}
        />
      )}
    </div>
  );
}
export const getStaticProps = async ({ params }: { params: { support: string } }) => {
  const data = await getSingleSupport(params.support);
  return {
    props: {
      support: data.support,
      supports: data.supports.edges,
      projects: data.support.projets.edges,
      pageTitle: data.support.name,
      breadcrumb: [{
        link: '/portfolio',
        title: 'Portfolio',
      }],
    },
  };
};

type StaticProps = {
  node: {
    slug: string
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllSupportsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: StaticProps) => `/portfolio/${node.slug}`) || [],
    fallback: true,
  };
}
