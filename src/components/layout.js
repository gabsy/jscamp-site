/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent";

import Header from "./header"
import Footer from "./footer"
import Burgermenu from "./burgermenu"


const Layout = ({ children }) => {
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
    <Burgermenu/>
    <div className="wrapper" id="wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
    </div>
    <CookieConsent
        location="bottom"
        buttonText="Ok! Agreed!"
        cookieName="jsCampRoCookie"
        style={{ background: "#2B373B", fontSize: "14px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px", fontWeight:"bold" }}
        expires={150}>
            <div class="text-right">
                This website uses cookies to enhance the user experience.{" "}
            </div>
    </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
