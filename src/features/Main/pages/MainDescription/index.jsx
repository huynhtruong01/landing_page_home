import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { headerImage, imageDescription } from '../../../../animation/Animation'
import img2 from '../../../../assets/icons/vector_grow.png'
import img1 from '../../../../assets/images/image_4.png'
import user from '../../../../assets/images/users.png'
import useScroll from '../../../../hook/useScroll'
import Counter from './pages/Counter'
import './styles.scss'

MainDescription.propTypes = {}

function MainDescription() {
  const [element, controls] = useScroll()
  const [isCounter, setIsCounter] = useState(false)

  const scrollNumber = () => {
    const scrollY = window.scrollY
    if (scrollY > 2790) {
      setIsCounter(true)
    }
    console.log(scrollY)
  }

  window.addEventListener('scroll', scrollNumber)

  return (
    <div className="main__description" ref={element}>
      <div className="container">
        <div className="description__body">
          <div className="description__image">
            <motion.img
              src={img1}
              alt=""
              variants={imageDescription}
              animate={controls}
              transition={{ type: 'tween', duration: 0.3 }}
            />
            <motion.div
              className="description__detail"
              variants={imageDescription}
              animate={controls}
              transition={{ type: 'tween', delay: 0.2, duration: 0.3 }}
            >
              <div className="description__detail--content">
                <h2 className="description__number">
                  +40,000
                  <span>
                    <img src={img2} alt="" />
                  </span>
                </h2>
                <p className="description__text">
                  By avarage for 2 bedroom apments in San Francisco, CA
                </p>
              </div>
              <div className="description__user">
                <img src={user} alt="" />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="description__content"
            variants={headerImage}
            animate={controls}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="description__line"></div>
            <h1 className="description__title">
              You’ve found a neighborhood you love.
            </h1>
            <p>
              When you own a home, you’re committing to living in one location
              for a while. In a recent Trulia survey, we found that five out of
              six respondents said finding the right neighborhood{' '}
            </p>
          </motion.div>
        </div>
        <div className="description__info--list">
          <div className="description__info-item">
            <h1>
              {!isCounter ? 0 : <Counter from={0} to={2500} />}
              <span>+</span>
            </h1>
            <p>Homes For Sale</p>
          </div>
          <div className="description__info-item">
            <h1>
              {!isCounter ? 0 : <Counter from={0} to={5000} />}
              <span>+</span>
            </h1>
            <p>Homes Recently Sold</p>
          </div>
          <div className="description__info-item">
            <h1>
              {!isCounter ? 0 : <Counter from={0} to={170} />}
              <span>+</span>
            </h1>
            <p>Price Reduced</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDescription
