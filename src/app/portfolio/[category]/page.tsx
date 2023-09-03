import Layout from "@component/Layout";
import SectionTitle from "@component/SectionTitle";
import SupportSwitcher from "@component/portfolio/SupportSwitcher";
import RouteLink from "@lib/route";
import { ProjectSupports } from "content/config/portfolio";
import PortfolioGrid from "../PortfolioGrid";
import { allPortfolios } from "contentlayer/generated";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: keyof typeof ProjectSupports;
  };
};

export async function generateStaticParams() {
  return Object.keys(ProjectSupports).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props) {
  const post = ProjectSupports[params.category];

  if (!post) {
    return {};
  }

  return {
    title: `${post.name} - Portfolio`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const data = ProjectSupports[params.category];
  const projects = allPortfolios.filter((p) => p.category === params.category);

  if (!data) {
    notFound();
  }

  return (
    <Layout
      breadcrumbs={[{ link: RouteLink.portfolio, title: "Portfolio" }]}
      title={data.name}
    >
      <div className="container">
        <SectionTitle
          content={
            "Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."
          }
          title={data.name}
        />
        <SupportSwitcher pathname={`/portfolio/${params.category}`} />

        <PortfolioGrid projects={projects} />
      </div>
    </Layout>
  );
}
