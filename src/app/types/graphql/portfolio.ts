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
      projets: {
        edges: Array<{
          node: ProjectList;
        }>;
      };
    };
  };
}
