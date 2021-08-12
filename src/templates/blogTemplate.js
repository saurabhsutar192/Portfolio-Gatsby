import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/MainLayout"
import "../CSS/mainBlog.css"

export default function BlogTemplate({ data }) {
  let { title, date } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <section className="mainBlog">
        <h1>{title}</h1>

        <div
          className="blogHtml"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <footer>
          Published on: <span>{date}</span>{" "}
        </footer>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query blogs($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
