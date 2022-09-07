import React from "react"
import { graphql, Link } from "gatsby"
import { slugify } from "../utils/utilityFunctions"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineHome } from "react-icons/ai"
import CategoriesWidget from "../components/categoriesWidget"

const BlogDetails = ({ data }) => {
  const {
    title,
    tags,
    category,
    type,
    course,
  } = data.markdownRemark.frontmatter
  const { html, fileAbsolutePath } = data.markdownRemark
  const [coursePre, week, topic] = category.split("-")

  
  const getGitMarkdownUrl = () => {
    const pathConst = "NSS-curriculum/curriculum/"
    const gitURL = `${process.env.GATSBY_GITHUB_REPO_URL}`
    const sliceIndex = fileAbsolutePath.indexOf(pathConst) + pathConst.length
    const markdownFileGitPath = fileAbsolutePath.slice(sliceIndex)
    const blogPostOnGit = `${gitURL}/blob/main/src/data/${markdownFileGitPath}`
    return blogPostOnGit
  }

  const gitMarkdownUrl = getGitMarkdownUrl()

  return (
    <Layout gitMarkdownUrl={gitMarkdownUrl}>
      <SEO title={title} />
      <div className="blog-details-wrapper pb--100">
        <div className="container">
          <div className="breadcrumbs-area">
            <ul className="breadcrumbs">
              <li>
                <Link to="/">
                  <AiOutlineHome size={18} /> Home
                </Link>
              </li>
              {category && (
                <>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <Link to={`/${slugify(coursePre)}-curriculum`}>
                      {coursePre}
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <Link to={`/category/${slugify(category)}`}>
                      {week.includes("25")
                        ? "Supplements".toUpperCase()
                        : week.toUpperCase()}
                      {topic && `:  ${topic}`}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="button-row">
            <a
              className="btn btn-lg btn-outline-danger m-1 help-btn"
              href="https://github.com/orgs/nss-evening-web-development/discussions"
              target="_blank"
              rel="noreferrer"
            >
              <span role="img" aria-label="sos square">
                🆘
              </span>{" "}
              Get Help
            </a>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="post-single-title">
                <span className="category">
                  <span>{type && type} </span>
                </span>
                <h1 className="post-title">{title}</h1>
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              {/* ONLY SHOWS FOR MAIN LIST PAGES */}
              {course && <CategoriesWidget filterType={course} />}

              {tags && (
                <div className="tag-list d-flex align-items-center">
                  <span>Topics:</span>
                  <div className="tags-cloud">
                    {tags.map(tag => (
                      <a key={tag} href={`/topic/${slugify(tag)}`}>
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const blogDetailsData = graphql`
  query blogDetailsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        category
        course
        title
        date(formatString: "MMM Do, YYYY")
        tags
        type
      }
    }
  }
`

export default BlogDetails
