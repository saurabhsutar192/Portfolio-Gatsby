import React from "react"
import Skill from "./Skill"

function Skills({ data }) {
  return (
    <div className="skillsContainer">
      <div className="title">Skills</div>
      <div className="skills">
        {data.map((arr, ind) => {
          return (
            <Skill
              key={ind}
              src={arr.childImageSharp.fixed.src}
              name={arr.childImageSharp.fixed.originalName.split(".")[0]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Skills
