import { motion } from 'framer-motion'
import React from 'react'
import {
  headerAnimation,
  headerImage,
} from '../../../../../animation/Animation'

HeaderBody.propTypes = {}

function HeaderBody({ homeImage, animateCustom }) {
  return (
    <div className="header__body">
      <div className="header__content">
        <div className="content__detail">
          <motion.p
            variants={headerAnimation}
            animate={animateCustom}
            transition={{ type: 'spring', delay: 0.125 }}
          >
            Welcome to Besnik Agency
          </motion.p>
          <motion.h1
            className="content__title"
            variants={headerAnimation}
            animate={animateCustom}
            transition={{ type: 'spring', delay: 0.125 * 2 }}
          >
            Discover a place you'll love to live.
          </motion.h1>
          <motion.p
            variants={headerAnimation}
            animate={animateCustom}
            transition={{ type: 'spring', delay: 0.125 * 3 }}
          >
            Get the best real estate deals first, before they hit the mass
            market! hot foreclosure deals with one simple search
          </motion.p>
        </div>
        <motion.button
          className="btn content__btn"
          variants={headerAnimation}
          animate={animateCustom}
          transition={{ type: 'spring', duration: 0.1 }}
        >
          More About Us
        </motion.button>
      </div>
      <motion.div
        className="header__image"
        variants={headerImage}
        animate={animateCustom}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <img src={homeImage} alt="" />
      </motion.div>
    </div>
  )
}

export default HeaderBody
