import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { Wrapper } from '../components/styles/Wrapper'
import { space } from '../components/styles/functions'

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "D MMMM YYYY", locale: "fr")
        category
      }
      body
    }
  }
`

const BlogArticle = styled.div`
  padding: 0 100px;
  font-size: 1.3rem;
  color: var(--light);
  position: relative;

  a {
    color: var(--primary);
    text-decoration: none;
  }

  h1 {
    color: #fff;
    font-family: Poppins, sans-serif;
    font-weight: 800;
    letter-spacing: 0.5px;

    &::before {
      position: absolute;
      content: '';
      pointer-events: none;
      background-color: var(--primary);
      z-index: 0;
      width: 0.75em;
      height: 0.75em;
      --translate: -0.4rem;
      --rotate: 0deg;
      transform: translateX(var(--translate)) translateY(var(--translate))
        rotate(var(--rotate));
    }

    span {
      position: relative;
    }
  }

  .postMeta {
    display: grid;
    grid-auto-flow: column;
    font-style: italic;
    justify-content: start;
    gap: ${space(1)};
    font-size: 1rem;

    time {
      &::after {
        content: 'x';
        color: var(--primary);
        font-weight: 600;
        margin-left: ${space(1)};
      }
    }
  }
`

export default ({ data: { mdx: post }, scope, pageContext }) => {
  if (!post) {
    return <p>No Post Found? This should be a 404</p>
  }

  return (
    <Wrapper>
      <BlogArticle>
        <h1>
          <span>{post.frontmatter.title}</span>
        </h1>
        <div className="postMeta">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          <span>{post.frontmatter.category.join(', ')}</span>
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
      </BlogArticle>
    </Wrapper>
  )
}
