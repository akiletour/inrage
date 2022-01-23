const API_URL: string = process.env.WORDPRESS_API_URL as string;

type VariableProps = {
  variables?: {
    id?: string | number;
    max?: number;
    authorEmail?: string;
    comment?: string;
    author?: string;
    parent?: number;
  };
};

type HeaderType = {
  'Content-Type': string;
  Authorization?: string;
};

export const SlugListGraphql = 'edges { node { slug } }';

export default async function fetchAPI(
  query: string,
  { variables }: VariableProps = {}
) {
  const headers: HeaderType = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export const SitemapData = async () =>
  fetchAPI(`query Sitemap {
  projets {
    edges {
      node {
        title
        uri
      }
    }
  }
  posts {
    edges {
      node {
        title
        uri
      }
    }
  }
  supports {
    edges {
      node {
        name
        uri
      }
    }
  }
}`);
