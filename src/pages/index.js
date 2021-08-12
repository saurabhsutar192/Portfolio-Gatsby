import * as React from "react"

import Layout from "../components/Layout"
import Banner from "../components/banner"
import About from "../components/about"
import Skills from "../components/skills"
import "../CSS/home.css"
import { graphql } from "gatsby"

function IndexPage({ data }) {
  return (
    <Layout>
      <div className="home">
        <Banner src={data.file.childImageSharp.fluid} />
        <About />
        <Skills data={data.allFile.nodes} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Icons {
    allFile(filter: { relativeDirectory: { eq: "icons" } }) {
      nodes {
        childImageSharp {
          fixed {
            originalName
            src
          }
        }
      }
    }
    file(relativePath: { eq: "psSaurabh.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
