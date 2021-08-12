import React from "react"
import Img from "gatsby-image"

function Project({ src, name }) {
  return (
    <div className="projects">
      <div className="projImg">
        <Img fluid={src} className="img" />
      </div>

      <p>{name}</p>
    </div>
  )
}

export default Project
