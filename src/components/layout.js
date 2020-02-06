import React, { useEffect, useCallback, useState } from "react"
import PropTypes from "prop-types"
import PaintDrip from "gatsby-plugin-transition-link/AniLink/PaintDrip"
import { TimelineLite } from "gsap"

import Header from "./header"
import { redirect } from "../common/redirect"

import "./normalize.css"
import "./layout.scss"

const Layout = ({
  children,
  disableLinks,
  nextPage = null,
  previousPage = null,
}) => {
  const [currentElement, setCurrentElement] = useState(0)

  const handleUserKeyPress = useCallback(
    ({ keyCode }) => {
      const elements = document.querySelectorAll(".timeline-element")

      if (elements?.length > 0) {
        if (keyCode === 37) {
          if (currentElement > 0) {
            const timeline = new TimelineLite()
            timeline.to(elements[currentElement - 1], 0, { opacity: 0, x: -50 })

            setCurrentElement(currentElement - 1)
            return true
          }
        }
        if (keyCode === 39) {
          if (currentElement < elements.length) {
            const timeline = new TimelineLite()
            timeline.to(elements[currentElement], 0, { opacity: 1, x: 0 })

            setCurrentElement(currentElement + 1)
            return true
          }
        }
      }
      
      setCurrentElement(0)
      redirect(keyCode, nextPage, previousPage)
    },
    [currentElement, nextPage, previousPage]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress)

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress)
    }
  }, [handleUserKeyPress, currentElement, nextPage, previousPage])

  return (
    <div className="layout">
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
        }}
      >
        <main>{children}</main>

        {!disableLinks ? (
          <>
            <PaintDrip to="/0/" hex="#004b9b"></PaintDrip>
            <PaintDrip to="/1/" hex="#004b9b"></PaintDrip>
            <PaintDrip to="/2/" hex="#354d9f"></PaintDrip>
            <PaintDrip to="/3/" hex="#504ea2"></PaintDrip>
            <PaintDrip to="/4/" hex="#674ea4"></PaintDrip>
            <PaintDrip to="/5/" hex="#7b4fa5"></PaintDrip>
            <PaintDrip to="/6/" hex="#9350a3"></PaintDrip>
          </>
        ) : null}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableLinks: PropTypes.bool,
  nextPage: PropTypes.string,
  previousPage: PropTypes.string,
}

export default Layout
