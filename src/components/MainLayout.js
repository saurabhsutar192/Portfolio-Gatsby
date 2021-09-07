import * as React from "react"

import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import "../CSS/layout.css"
import { Link } from "gatsby"

function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <div className="NavbarContainer">
        <div className="logo">SS</div>
        <div className="navs">
          <Link to="/">
            <span>About</span>
          </Link>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
          <Link to="/blogs">
            <span>Blogs</span>
          </Link>
        </div>
      </div>
      <main>{children}</main>
      <footer className="links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/_saurabh__sutar_"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/saurabh.sutar.12"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </footer>
    </div>
  )
}

export default Layout
