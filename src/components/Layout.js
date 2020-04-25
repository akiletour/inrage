import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import GlobalStyles from './styles/GlobalStyles'
import Header from './header'
import 'normalize.css'

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
      />
      <div>
        <main id="main-content">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
