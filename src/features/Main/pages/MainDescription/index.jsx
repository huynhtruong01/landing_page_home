import React from 'react'
import img1 from '../../../../assets/images/image_4.png'
import img2 from '../../../../assets/icons/vector_grow.png'
import user from '../../../../assets/images/users.png'
import './styles.scss'

MainDescription.propTypes = {}

function MainDescription() {
  return (
    <div className="main__description">
      <div className="container">
        <div className="description__body">
          <div className="description__image">
            <img src={img1} alt="" />
            <div className="description__detail">
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
            </div>
          </div>
          <div className="description__content">
            <div className="description__line"></div>
            <h1 className="description__title">
              You’ve found a neighborhood you love.
            </h1>
            <p>
              When you own a home, you’re committing to living in one location
              for a while. In a recent Trulia survey, we found that five out of
              six respondents said finding the right neighborhood{' '}
            </p>
          </div>
        </div>
        <div className="description__info--list">
          <div className="description__info-item">
            <h1>
              2,500<span>+</span>
            </h1>
            <p>Homes For Sale</p>
          </div>
          <div className="description__info-item">
            <h1>
              5,000<span>+</span>
            </h1>
            <p>Homes Recently Sold</p>
          </div>
          <div className="description__info-item">
            <h1>
              170<span>+</span>
            </h1>
            <p>Price Reduced</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDescription
