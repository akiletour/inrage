import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { useStaticQuery, graphql } from 'gatsby'
import mdxComponents from './mdxComponents'
import GlobalStyles from './styles/GlobalStyles'
import Header from './header'
import 'normalize.css'
import Footer from "./Footer";

const Layout = ({
  location,
  title,
  children,
  className,
  pageContext,
  path,
  ...rest
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        pageContext={pageContext}
        isHome={location.pathname === '/'}
      />
      <div>
        <MDXProvider components={mdxComponents}>
          <main id="main-content">{children}</main>
        </MDXProvider>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
