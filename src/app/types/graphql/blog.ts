import { FeaturedImageNode } from '@type/graphql';

export interface BlogPostsSlugs {
  data: {
    posts: {
      edges: Array<{
        node: {
          slug: string;
        };
      }>;
    };
  };
}

export interface SinglePostType {
  data: {
    post: {
      content: string;
      title: string;
    };

    posts: {
      edges: Array<{
        node: {
          id: string;
          slug: string;
          featuredImage: FeaturedImageNode;
          title: string;
          date: string;
          excerpt: string;
        };
      }>;
    };
  };
}
