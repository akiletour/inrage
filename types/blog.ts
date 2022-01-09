export type BlogItem = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    }
  };
}

export type BlogPostType = {
  node: BlogItem;
}
