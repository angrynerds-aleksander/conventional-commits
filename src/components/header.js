import React from "react"
import logo from "../images/logo.svg"

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        display: 'flex',
        alignItems: 'center',
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <a href="https://angrynerds.pl/" target="_blank" rel="noopener noreferrer" data-img>
        <img src={logo} alt="Angry Nerds logo" height="78" width="39" />
      </a>
    </div>
  </header>
)

export default Header
