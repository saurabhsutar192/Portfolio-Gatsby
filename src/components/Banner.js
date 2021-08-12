import React from "react"
import Img from "gatsby-image"

function Banner({ src }) {
  return (
    <div className="banner">
      <div className="desc">
        <div>
          Hello,
          <br />I am <span>Saurabh</span>,
          <br />I am a <span>Front end Developer</span>
          <br />
          living in <span>Navi Mumbai, MH</span>
        </div>
      </div>
      <div className="imgContainer">
        <Img fluid={src} className="img" />
      </div>
    </div>
  )
}

export default Banner
