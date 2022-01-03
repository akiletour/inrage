import { NextSeo } from 'next-seo';
import SectionTitle from '../SectionTitle';
import SupportSwitcher from './SupportSwitcher';
import ProjectItem from '../items/ProjectItem';
import { ProjectItemType, SupportType } from '../../types/portfolio';

interface Props {
  pageTitle: string;
  projects: ProjectItemType[]
  supports: Array<{
    node: SupportType
  }>
}

export default function PortfolioLayout({ pageTitle, supports, projects }: Props) {
  return (
    <div className="container">
      <NextSeo
        title="Portfolio des projets de création de site Internet"
        description="Retrouvez la liste des projets de création de site web, de boutique e-commerce ou encore d'application web"
      />
      <SectionTitle
        content={"Pour toute demande ou devis, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous, nous serons ravis de vous répondre."}
        title={pageTitle}
      />

      <SupportSwitcher supports={supports} />

      <div className="grid grid-cols-3">
        {projects.length > 0 && projects.map(({ node }) => (
          <ProjectItem
            xl
            key={node.id}
            image={node.featuredImage.node.sourceUrl}
            title={node.title}
            slug={node.slug}
            support={node.supports?.edges[0]?.node}
          />
        ))}
      </div>
    </div>
  );
}
