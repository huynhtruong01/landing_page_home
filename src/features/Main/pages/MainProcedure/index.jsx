import React from 'react'
import PropTypes from 'prop-types'
import icon1 from '../../../../assets/icons/icon_1.png'
import icon2 from '../../../../assets/icons/icon_2.png'
import icon3 from '../../../../assets/icons/icon_3.png'
import icon_right from '../../../../assets/icons/icon_right.png'
import './styles.scss'

MainProcedure.propTypes = {}

function MainProcedure(props) {
  return (
    <div className="main__procedure">
      <div className="container">
        <div className="procedure__content">
          <div className="procedure__line"></div>
          <h1 className="procedure__title">How it works?</h1>
          <p className="procedure__desc">
            Everything you need to know when you're looking to buy, <br /> rent,
            or sell - all in one place.
          </p>
        </div>
        <div className="procedure__list">
          <div className="procedure__item">
            <img src={icon1} alt="" className="procedure__icon" />
            <p className="procedure__item--title">Buyer Guides</p>
            <a href="#" className="procedure__link">
              How to buy
              <span>
                <img
                  src={icon_right}
                  alt=""
                  className="procedure__link--icon"
                />
              </span>
            </a>
          </div>
          <div className="procedure__item">
            <img src={icon2} alt="" className="procedure__icon" />
            <p className="procedure__item--title">Renter Guides</p>
            <a href="#" className="procedure__link">
              How to buy
              <span>
                <img
                  src={icon_right}
                  alt=""
                  className="procedure__link--icon"
                />
              </span>
            </a>
          </div>
          <div className="procedure__item">
            <img src={icon3} alt="" className="procedure__icon" />
            <p className="procedure__item--title">Seller Guides</p>
            <a href="#" className="procedure__link">
              How to buy
              <span>
                <img
                  src={icon_right}
                  alt=""
                  className="procedure__link--icon"
                />
              </span>
            </a>
          </div>
        </div>
        <button className="btn procedure__btn">Sell Full Guidelines</button>
      </div>
    </div>
  )
}

export default MainProcedure
