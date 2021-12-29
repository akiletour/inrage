const API_URL = process.env.WORDPRESS_API_URL;

export default async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

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

export async function getHomepageProjects() {
  const data = await fetchAPI(`
    {
      projets(first: 4) {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            supports {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `);

  return data?.projets;
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    {
      projets(first: 10000) {
        edges {
          node {
            slug
            supports {
              edges {
                node {
                  slug
                }
              }
            }
          }
        }
      }
    }
  `);
  return data?.projets;
}

export async function getSingleProject(slug) {
  const data = await fetchAPI(`
  query ProjectBySlug($id: ID!) {
    projet(id: $id, idType: SLUG) {
      id
      title
      slug
      supports {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
    projets(first: 1000) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          supports {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
  `, {
    variables: {
      id: slug,
    },
  });

  return data;
}

export async function getPortfolioProjects() {
  const data = await fetchAPI(`
    {
      projets(first: 1000) {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            supports {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
      supports {
        edges {
          node {
            slug
            name
            id
            acfSupport {
              image {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return data;
}

export async function getAllSupportsWithSlug() {
  const data = await fetchAPI(`
    {
      supports {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.supports;
}

export async function getSingleSupport(slug) {
  const data = await fetchAPI(`
  query SupportBySlug($id: ID!) {
    support(id: $id, idType: SLUG) {
      id
      slug
      name
      projets {
        edges {
          node {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            supports {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
    supports {
      edges {
        node {
          slug
          name
          id
          acfSupport {
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `, {
    variables: {
      id: slug,
    },
  });

  return data;
}
