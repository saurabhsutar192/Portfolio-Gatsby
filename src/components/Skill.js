import React from "react"

function Skill({ src, name }) {
  return (
    <div className="skill">
      <img src={src} alt={name} className="skillImage" />

      <span>{name}</span>
    </div>
  )
}

export default Skill
