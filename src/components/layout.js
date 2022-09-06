import React from "react"
import PropTypes from "prop-types"
import "../scss/style.scss"
import { FaExclamationTriangle, FaGithub } from "react-icons/fa"

const Layout = ({ gitMarkdownUrl, children }) => {
  return (
    <div className="main-wrapper">
      <main>{children}</main>

      <div className="button-row">
        <a
          className="btn btn-lg btn-outline-light report  m-1"
          href={process.env.GATSBY_GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <FaExclamationTriangle /> Report a Problem
        </a>
        <a
          className="btn btn-lg btn-outline-info report m-1"
          href={gitMarkdownUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> Edit This Page
        </a>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
