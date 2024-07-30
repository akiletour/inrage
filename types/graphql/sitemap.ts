interface Item {
  edges: Array<{
    node: {
      title: string;
      uri: string;
    };
  }>;
}

export interface Sitemap {
  data: {
    projets: Item;
    posts: Item;
    supports: Item;
  };
}
