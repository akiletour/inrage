import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import BlogList from '../components/BlogList'
import { Wrapper } from '../components/styles/Wrapper'

export default ({ data, pageContext, path }) => {
  if (!data) return <p>Shooooot! No Post found!</p>

  return (
    <>
      <SEO title="Page two" />
      <Wrapper>
        <h1>Articles du blog</h1>
        {data.allMdx && <BlogList articles={data.allMdx} />}
      </Wrapper>
    </>
  )
}

export const pageQuery = graphql`
  query blogPosts($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`
