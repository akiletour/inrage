import Layout from '@component/Layout';
import SupportSwitcher from '@component/portfolio/SupportSwitcher';
import SectionTitle from '@component/SectionTitle';
import PortfolioProjects from '@graphql-query/portfolio-category-projects.graphql';
import { RouteLink } from '@lib/route';
import { SupportProjects } from '@type/graphql/portfolio';
import { fetcher } from '@util/index';

import PortfolioGrid from '../PortfolioGrid';

type Props = {
  params: {
    slug: string;
  };
};

const getData = (category: string): Promise<SupportProjects> =>
  fetcher(PortfolioProjects, { id: category });

export async function generateMetadata({ params }: Props) {
  const { data } = await getData(params.slug);
  return {
    title: `${data.support.name} - Portfolio`,
    description: data.support.excerpt,
  };
}

export default async function Page({ params }: Props) {
  const { data } = await getData(params.slug);

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: 'Portfolio' }]}
      title={data.support.name}
    >
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."
          }
          title={data.support.name}
        />
        {/* @ts-expect-error Server Component */}
        <SupportSwitcher pathname={`/portfolio/${params.slug}`} />

        {/* @ts-expect-error Server Component */}
        <PortfolioGrid projects={data.support.projets.edges} />
      </div>
    </Layout>
  );
}
