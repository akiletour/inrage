import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const SecondPage = ({ data, pageContext, path }) => {
  if (!data) return <p>Shooooot! No Post found!</p>

  return (
    <>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      {data.allMdx &&
        data.allMdx.edges.map(({ node: item }) => <div key={item.id}>Jey</div>)}
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export default SecondPage

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
