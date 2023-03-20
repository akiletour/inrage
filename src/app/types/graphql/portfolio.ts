import { FeaturedImageNode, List, ProjectList } from '@type/graphql';

export type EntriesType = Array<{
  id: number;
  name: string;
  excerpt: string;
  values: Array<string | boolean>;
}>;

export interface ProjectsSlugs {
  data: {
    projets: {
      edges: Array<{
        node: {
          slug: string;
        };
      }>;
    };
  };
}

export interface SupportProjects {
  data: {
    support: {
      id: string;
      name: string;
      projets: {
        edges: Array<{
          node: ProjectList;
        }>;
      };
    };
  };
}

export interface PortfolioCategory {
  slug: string;
  name: string;
  id: number;
  acfSupport: {
    image: {
      sourceUrl: string;
    };
  };
}

interface TechnologyType {
  name: string;
  acfDetail: {
    image: {
      sourceUrl: string;
    };
  };
}

export interface SingleProject {
  data: {
    projet: {
      id: string;
      title: string;
      slug: string;
      cotent: string | null;
      featuredImage: FeaturedImageNode;
      technologies: List<TechnologyType>;
      supports: {
        edges: Array<{
          node: {
            name: string;
            slug: string;
          };
        }>;
      };
    };
  };
}
