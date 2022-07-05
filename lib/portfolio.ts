import fetchAPI, { SlugListGraphql } from '@lib/api';

/**
 * Represents a project item based on a list of projects
 */
export const ProjectListItemLayout = `node { 
  id
  title
  slug 
  status
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
}`;

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(`
    query getAllProjectsWithSlug{
      projets(first: 10000) {
        edges {
          node {
            slug
            supports {
              ${SlugListGraphql}
            }
          }
        }
      }
    }
  `);
  return data?.projets;
}

export async function getSingleProject(slug: string, preview: boolean = false) {
  const data = await fetchAPI(
    `
  query ProjectBySlug($id: ID!) {
    projet(id: $id, idType: SLUG) {
      id
      title
      slug
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      technologies {
        edges {
          node {
            name
            acfDetail {
              image {
                sourceUrl
              }
            }
          }
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
      detail {
        websiteLink
        year
        missions
        excerpt
      }
    }
    projets(first: 1000) {
      edges {
        ${ProjectListItemLayout}
      }
    }
  }
  `,
    {
      variables: {
        id: slug,
        preview,
      },
    }
  );

  return data;
}

export async function getPortfolioProjects(preview: boolean) {
  const data = await fetchAPI(
    `
    query getPortfolioProjects($stati: [PostStatusEnum]) {
      projets(first: 1000, where: { orderby: { field: DATE, order: DESC }, stati: $stati }) {
        edges {
          ${ProjectListItemLayout}
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
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        stati: preview ? ['PUBLISH', 'PRIVATE'] : ['PUBLISH'],
      },
    }
  );

  return data;
}

export async function getAllSupportsWithSlug() {
  const data = await fetchAPI(`
    {
      supports {
        ${SlugListGraphql}
      }
    }
  `);
  return data?.supports;
}

export async function getSingleSupport(slug: string) {
  const data = await fetchAPI(
    `
  query SupportBySlug($id: ID!) {
    support(id: $id, idType: SLUG) {
      id
      slug
      name
      projets {
        edges {
          ${ProjectListItemLayout}
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
  `,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data;
}

export async function LastProjectBySupport(slug: string) {
  const data = await fetchAPI(
    `
  query LastProjectBySupport($id: ID!) {
    support(id: $id, idType: SLUG) {
      id
      projets(first: 4) {
        edges {
          ${ProjectListItemLayout}
        }
      }
    }
  }
  `,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data.support;
}
