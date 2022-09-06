import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-page-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="inner text-center">
                        <h1 className="theme-color">404</h1>
                        <h2>Page Not Found</h2>
                        <img src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" />
                        <a className="rn-button" href="/">Go Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)
export default NotFoundPage
