import fetchAPI, { SlugListGraphql } from '@lib/api';

export const ArticleListItemLayout = `node {
  title
  slug
  date
  excerpt
  featuredImage {
    node {
      sourceUrl
    }
  }
}`;

export async function getAllArticlesWithSlug() {
  const data = await fetchAPI(`
  query getAllArticlesWithSlug {
    posts(first: 1000) {
      ${SlugListGraphql}
    }
  }`);
  return data?.posts;
}

export async function getSingleArticle(slug: string) {
  const data = await fetchAPI(`
   query getSingleArticle($id: ID!) {
     post(id: $id, idType: SLUG) {
       id
       title
       slug
       date
       excerpt
       content(format: RENDERED)
       featuredImage {
         node {
           sourceUrl
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

export async function BlogPosts(max: number = 1000) {
  const data = await fetchAPI(`
    query MyQuery($max: Int = 1000) {
      posts(first: $max) {
        edges {
          ${ArticleListItemLayout}
        }
      }
    }
  `, {
    variables: {
      max,
    },
  });

  return data?.posts;
}

export async function fetchBlogComments(slug: string) {
  const data = await fetchAPI(`
    query fetchBlogComments($id: ID!) {
      comments(where: { contentId: $id, contentType: POST }) {
        edges {
          node {
            id
            content
            author {
              node {
                name
              }
            }
            dateGmt
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
    },
  });

  return data?.comments?.edges || [];
}
