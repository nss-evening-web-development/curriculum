import React from "react"
import { Link } from "gatsby"

const Post = ({ content }) => {
  const { slug, path, title, excerpt, type } = content
  return (
    <div className="post-style--2">
      <div className="post-content">
          <span className="category">
            <span>{type && type} </span>
          </span>
        {title && (
          <h3 className="title">
            <Link to={`${path}${slug}`}>{title}</Link>
          </h3>
        )}
        {excerpt && <p className="description">{excerpt}</p>}
        <div className="read-more">
          <Link to={`${path}${slug}`}>
            <span>Read More...</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
