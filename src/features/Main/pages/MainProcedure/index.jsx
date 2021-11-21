import { motion } from 'framer-motion'
import React from 'react'
import { cardProcedure, headerAnimation } from '../../../../animation/Animation'
import icon1 from '../../../../assets/icons/icon_1.png'
import icon2 from '../../../../assets/icons/icon_2.png'
import icon3 from '../../../../assets/icons/icon_3.png'
import icon_right from '../../../../assets/icons/icon_right.png'
import useScroll from '../../../../hook/useScroll'
import './styles.scss'

MainProcedure.propTypes = {}

function MainProcedure({ animateCustom }) {
  console.log(animateCustom)
  const [element, controls] = useScroll()

  return (
    <div className="main__procedure" ref={element}>
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
          <motion.div
            className="procedure__item"
            variants={cardProcedure}
            animate={controls}
            transition={{ type: 'tween', delay: 0.1, duration: 0.3 }}
          >
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
          </motion.div>
          <motion.div
            className="procedure__item"
            variants={cardProcedure}
            animate={controls}
            transition={{ type: 'tween', delay: 0.1 * 2, duration: 0.3 }}
          >
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
          </motion.div>
          <motion.div
            className="procedure__item"
            variants={cardProcedure}
            animate={controls}
            transition={{ type: 'tween', delay: 0.1 * 3, duration: 0.3 }}
          >
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
          </motion.div>
        </div>
        <button className="btn procedure__btn">Sell Full Guidelines</button>
      </div>
    </div>
  )
}

export default MainProcedure
