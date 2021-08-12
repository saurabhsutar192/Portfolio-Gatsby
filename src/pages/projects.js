import React from "react"
import Layout from "../components/MainLayout"
import "../CSS/projects.css"
import Project from "../components/Project"
import { graphql } from "gatsby"

function projects({ data }) {
  return (
    <Layout>
      <header className="projTitle">Projects made so far.......</header>
      <section className="projContainer">
        {data.allFile.nodes.map((array, index) => {
          return (
            <Project
              key={index}
              src={array.childImageSharp.fluid}
              name={array.childImageSharp.fluid.originalName.split(".")[0]}
            />
          )
        })}
      </section>
      <footer className="projFooter">
        More Projects added frequently.....
      </footer>
    </Layout>
  )
}

export default projects

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
