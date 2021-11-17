import React from 'react'
import './styles.scss'
import smart_phone from '../../../../assets/images/image_5.png'

MainFeatureTwo.propTypes = {}

function MainFeatureTwo(props) {
  return (
    <div className="container">
      <div className="main__feature-two">
        <div className="feature-two__content">
          <h1>Featured Properties</h1>
          <p>Everything you need to know when you're looking</p>
          <button className="btn feature-two__btn">Get Started Now</button>
        </div>
        <div className="feature-two__image">
          <img src={smart_phone} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainFeatureTwo
