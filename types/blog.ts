export type BlogFullArticleType = {
  id: string;
  postId: number;
  title: string;
  slug: string;
  content: string;
  seo: {
    title: string;
    metaDesc: string;
    canonical: string;
  };
};

export type BlogItem = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

export type BlogPostType = {
  node: BlogItem;
};
