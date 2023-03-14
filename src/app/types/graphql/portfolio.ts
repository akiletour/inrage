import { ProjectList } from '@type/graphql';

export type EntriesType = Array<{
  id: number;
  name: string;
  excerpt: string;
  values: Array<string | boolean>;
}>;

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
