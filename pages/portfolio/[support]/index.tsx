import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import Layout from '@component/layouts/Layout';
import PortfolioLayout from '@component/portfolio/PortfolioLayout';
import { getAllSupportsWithSlug, getSingleSupport } from '@lib/portfolio';
import { RouteLink } from '@lib/route';
import { ProjectItemType, SupportType } from '@type/portfolio';

type Props = {
  pageTitle: string;
  projects: ProjectItemType[];
  support?: {
    slug: string;
  };
  supports: Array<{
    node: SupportType;
  }>;
};

export default function PortfolioSupport({
  pageTitle,
  support,
  projects,
  supports,
}: Props) {
  const router = useRouter();

  if (!router.isFallback && !support?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <p>Chargement en cours...</p>
      ) : (
        <PortfolioLayout
          projects={projects}
          supports={supports}
          pageTitle={pageTitle}
        />
      )}
    </Layout>
  );
}
export const getStaticProps = async ({
  params,
}: {
  params: { support: string };
}) => {
  const data = await getSingleSupport(params.support);
  return {
    props: {
      support: data.support,
      supports: data.supports.edges,
      projects: data.support.projets.edges,
      pageTitle: data.support.name,
      breadcrumb: [
        {
          link: RouteLink.portfolio,
          title: 'Portfolio',
        },
      ],
    },
  };
};

type StaticProps = {
  node: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllSupportsWithSlug();

  return {
    paths:
      allPosts.edges.map(
        ({ node }: StaticProps) => `${RouteLink.portfolio}/${node.slug}`
      ) || [],
    fallback: true,
  };
}
