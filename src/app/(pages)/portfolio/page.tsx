import Layout from '@component/Layout';
import SupportSwitcher from '@component/portfolio/SupportSwitcher';
import SectionTitle from '@component/SectionTitle';
import PortfolioProjects from '@graphql-query/portfolio-projects.graphql';
import { getCanonicalUrl, RouteLink } from '@lib/route';
import { List, ProjectList } from '@type/graphql';
import { fetcher } from '@util/index';

import PortfolioGrid from './PortfolioGrid';

export const metadata = {
  title: 'Portfolio des projets de création de site Internet',
  description:
    "Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
};

const getData = (): Promise<List<ProjectList>> => fetcher(PortfolioProjects);

export default async function Page() {
  const { data } = await getData();

  return (
    <Layout title="Portfolio">
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."
          }
          title="Portfolio"
        />
        {/* @ts-expect-error Server Component */}
        <SupportSwitcher pathname="/portfolio" />

        {/* @ts-expect-error Server Component */}
        <PortfolioGrid projects={data.projets.edges} />
      </div>
    </Layout>
  );
}
