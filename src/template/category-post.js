import React from "react"
import { graphql, Link } from "gatsby"
import Post from "../components/post"
import Layout from "../components/layout"
import { slugify } from "../utils/utilityFunctions"
import SEO from "../components/seo"

const categoryPostList = ({ data, pageContext }) => {
  const categoryblogs = data.allMarkdownRemark.edges;
  const { category } = pageContext;
  const [course, week, topic] = category.split("-");

  return (
    <Layout>
      <SEO title={topic || "NSS Evening Curriculum" } />

      <div className="blog-details-wrapper rn-category-post rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-top">
                {/* <div className="breadcrumbs-area">
                  <ul className="breadcrumbs">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="separator">
                      <span></span>
                    </li>
                    <li>
                      <Link to={`/${slugify(course)}-curriculum`}>
                        {course}
                      </Link>
                    </li>
                    <li className="separator">
                      <span></span>
                    </li>
                    <li className="active">
                      <Link to={`/category/${slugify(category)}`}>
                        {week.includes("25")
                          ? "Supplements".toUpperCase()
                          : week.toUpperCase()}
                        {topic && `:  ${topic}`}
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            {categoryblogs.map(blog => (
              <Post
                column="col-lg-4 col-md-6 col-12"
                key={blog.node.fields.slug}
                content={{
                  ...blog.node.fields,
                  ...blog.node.frontmatter,
                  excerpt: blog.node.excerpt,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const allCategoryQueryData = graphql`
  query allCategoryQuery($category: String) {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          frontmatter {
            type
            title
            tags
            path
            date(formatString: "MMM Do, YYYY")
            category
          }
        }
      }
    }
  }
`

export default categoryPostList
