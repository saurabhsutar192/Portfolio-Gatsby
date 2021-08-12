/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async function ({ graphql, actions }) {
  let { data } = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(arr => {
    actions.createPage({
      path: "/blogs/" + arr.frontmatter.slug,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: { slug: arr.frontmatter.slug },
    })
  })
}
