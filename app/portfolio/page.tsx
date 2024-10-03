import Layout from '@/components/Layout';
import SupportSwitcher from '@/components/portfolio/SupportSwitcher';
import SectionTitle from '@/components/SectionTitle';
import { getCanonicalUrl, RouteLink } from '@/libs/route';
import { allPortfolios } from 'contentlayer/generated';

import PortfolioGrid from './PortfolioGrid';

export const metadata = {
  title: 'Portfolio des projets de création de site Internet',
  description:
    "Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web",
  alternates: {
    canonical: getCanonicalUrl(RouteLink.portfolio),
  },
};

export default async function Page() {
  return (
    <Layout title='Portfolio'>
      <div className='container'>
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."
          }
          title='Portfolio'
        />
        <SupportSwitcher pathname='/portfolio' />

        <PortfolioGrid projects={allPortfolios} />
      </div>
    </Layout>
  );
}
