import React from 'react'
import PropTypes from 'prop-types'
import HeaderHome from '..'

HeaderBody.propTypes = {}

function HeaderBody({ homeImage }) {
  return (
    <div className="header__body">
      <div className="header__content">
        <div className="content__detail">
          <p>Welcome to Besnik Agency</p>
          <h1 className="content__title">
            Discover a place you'll love to live.
          </h1>
          <p>
            Get the best real estate deals first, before they hit the mass
            market! hot foreclosure deals with one simple search
          </p>
        </div>
        <button className="btn content__btn">More About Us</button>
      </div>
      <div className="header__image">
        <img src={homeImage} alt="" />
      </div>
    </div>
  )
}

export default HeaderBody
