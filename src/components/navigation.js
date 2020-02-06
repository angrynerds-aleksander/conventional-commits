import React from "react"
import PropTypes from "prop-types"
import PaintDrip from "gatsby-plugin-transition-link/AniLink/PaintDrip"

const Navigation = ({ previousPage, nextPage, color }) => {
  return (
    <div style={{ display: 'flex', margin: 'auto 0 2rem', flexWrap: 'wrap' }}>
      {previousPage ?
        <div>
          <span style={{ paddingRight: 8 }} role="img" aria-label="left arrow">⬅️</span>
          <PaintDrip to={`/${previousPage.split('.')[0]}/`} hex={color}>{previousPage}</PaintDrip>
        </div>
        : null}
      {previousPage && nextPage ?
        <div style={{ padding: `0 8px` }} className="separator">
          <span role="img" aria-label="separator">⚫</span>
        </div>
        : null}
      {nextPage ?
        <div>
          <PaintDrip to={`/${nextPage.split('.')[0]}/`} hex={color}>{nextPage}</PaintDrip>
          <span style={{ paddingLeft: 8 }} role="img" aria-label="right arrow">➡️</span>
        </div>
        : null}
    </div>
  )
}

Navigation.propTypes = {
  previousPage: PropTypes.string,
  nextPage: PropTypes.string,
  color: PropTypes.string,
}

export default Navigation