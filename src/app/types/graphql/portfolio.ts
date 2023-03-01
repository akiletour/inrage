import { ProjectList } from '@type/graphql';

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
