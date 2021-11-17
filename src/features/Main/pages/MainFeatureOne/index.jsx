import React from 'react'
import icon_right from '../../../../assets/icons/icon_right.png'
import image1 from '../../../../assets/images/image_1.png'
import image2 from '../../../../assets/images/image_2.png'
import image3 from '../../../../assets/images/image_3.png'
import icon1 from '../../../../assets/icons/feature_1.png'
import icon2 from '../../../../assets/icons/feature_2.png'
import icon3 from '../../../../assets/icons/feature_3.png'
import './styles.scss'

MainFeatureOne.propTypes = {}

function MainFeatureOne() {
  return (
    <div className="main__feature-one">
      <div className="container">
        <div className="feature-one__content">
          <div className="feature-one__title">
            <h1>Featured Properties</h1>
            <p>Everything you need to know when you're looking</p>
          </div>
          <a href="#" className="feature-one__link">
            View All Properties
            <span className="feature-one__icon">
              <img src={icon_right} alt="" />
            </span>
          </a>
        </div>

        {/* Feature One List */}
        <div className="feature-one__list">
          <div className="feature-one__item">
            <div className="feature-one__image">
              <img src={image1} alt="" />
            </div>
            <div className="feature-one__container">
              <div className="feature-one__item--content">
                <h3 className="feature-one__price">$35000</h3>
                <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              </div>
              <div className="feature-one__list--info">
                <div className="feature-one__item-info">
                  <img src={icon1} alt="" />
                  <span>5 Beds</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon2} alt="" />
                  <span>2 both</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon3} alt="" />
                  <span>2000 Sqft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-one__item">
            <div className="feature-one__image">
              <img src={image3} alt="" />
            </div>
            <div className="feature-one__container">
              <div className="feature-one__item--content">
                <h3 className="feature-one__price">$35000</h3>
                <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              </div>
              <div className="feature-one__list--info">
                <div className="feature-one__item-info">
                  <img src={icon1} alt="" />
                  <span>5 Beds</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon2} alt="" />
                  <span>2 both</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon3} alt="" />
                  <span>2000 Sqft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-one__item">
            <div className="feature-one__image">
              <img src={image2} alt="" />
            </div>
            <div className="feature-one__container">
              <div className="feature-one__item--content">
                <h3 className="feature-one__price">$35000</h3>
                <p>8502 Preston Rd. Inglewood, Maine 98280</p>
              </div>
              <div className="feature-one__list--info">
                <div className="feature-one__item-info">
                  <img src={icon1} alt="" />
                  <span>5 Beds</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon2} alt="" />
                  <span>2 both</span>
                </div>
                <div className="feature-one__item-info">
                  <img src={icon3} alt="" />
                  <span>2000 Sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFeatureOne
