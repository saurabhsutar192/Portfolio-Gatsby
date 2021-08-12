import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import "../../CSS/blogs.css"

function blog({ data }) {
  return (
    <Layout>
      <section className="blogContainer">
        {data.allMarkdownRemark.nodes.map(arr => {
          return (
            <div key={arr.id} className="blog">
              <Link to={"/blogs/" + arr.frontmatter.slug}>
                <p className="bTitle">{arr.frontmatter.title}</p>
                <p className="bDate">{arr.frontmatter.date}</p>
              </Link>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default blog

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date
          title
          slug
        }
        id
      }
    }
  }
`
