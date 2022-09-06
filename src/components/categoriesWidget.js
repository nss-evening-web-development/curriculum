import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { slugify } from "../utils/utilityFunctions"

const CategoriesWidget = ({ showTitle, filterType }) => {
  const categoryQueryData = useStaticQuery(graphql`
    query CategoriesWidgetQuery {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)
  const blogs = categoryQueryData.allMarkdownRemark.edges
  const categories = [
    ...new Set(blogs.map(blog => blog.node.frontmatter.category)),
  ]
  const catArray = categories.filter(cat => cat?.includes(filterType)).sort()

  return (
    <div className="row">
      <div className="col-lg-12">
        {showTitle && (
          <div className="section-title">
            <span className="subtitle">Categories</span>
          </div>
        )}

        {catArray && (
          <ul className="category-list">
            {catArray.filter(Boolean).map((category, index) => {
              const [, week, topic] = category.split("-")
              return (
                <Link className="rn-button" key={index} to={`/category/${slugify(category)}`}>
                    <span className="value">{week.includes('25') ? 'Supplements'.toUpperCase() : week.toUpperCase()}{topic && `:  ${topic}`}</span>
                </Link>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CategoriesWidget
