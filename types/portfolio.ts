export type ProjectItemType = {
  node: {
    id: number;
    title: string;
    slug: string;
    status: 'private' | 'publish';
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
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

export type SupportType = {
  id: number;
  name: string;
  slug: string;
  acfSupport?: {
    image: {
      sourceUrl: string;
    };
  };
};
