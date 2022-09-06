
const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path');
const _ = require('lodash');


exports.onCreateNode = ({node , actions}) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        });
    }
}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const templates =  {
        courseDetails: path.resolve('src/template/course-details.js'),
        categoryPost: path.resolve('src/template/category-post.js'),
        tagPost: path.resolve('src/template/tag-template.js'),
    }

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            category
                            path
                        }
                    }
                }
            }
            

        }
    `).then( res => {
        if (res.errors) return Promise.reject(res.errors)
        const posts = res.data.allMarkdownRemark.edges

        // Create Single Course Page 
        posts.forEach(({ node }) => {
            createPage({
                path: `${node.frontmatter.path}${slugify(node.fields.slug)}`,
                component: templates.courseDetails,
                context: {
                    slug: node.fields.slug,
                }
            })
        })

        // Create Single Blog Page 

        // Start Category Area 

        // For get All Category Pages 
        let categories = []
        _.each(posts , edge => {
            if (_.get(edge , 'node.frontmatter.category')) {
                categories = categories.concat(edge.node.frontmatter.category)
            }
        })

        // [design , code]
        let categoryPostCounts = {}
        categories.forEach( category => {
            categoryPostCounts[category] = (categoryPostCounts[category] || 0) + 1
        })
        categories = _.uniq(categories)

       
        // Create Tag Posts Pages for indivedual Tag page
        categories.forEach(category => {
            createPage({
                path: `/category/${slugify(category)}`,
                component: templates.categoryPost,
                context: {
                    category 
                }
            })
        })
        // End Category Area



        // Start Tags Pages 
        let tags = []
        _.each(posts , edge => {
            if (_.get(edge , 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })
        // Create Tag Posts Pages for indivedual Tag page
        tags.forEach(tag => {
            createPage({
                path: `/topic/${slugify(tag)}`,
                component: templates.tagPost,
                context: {
                    tag
                }
            })
        })
        // End Category Area

    })

}
