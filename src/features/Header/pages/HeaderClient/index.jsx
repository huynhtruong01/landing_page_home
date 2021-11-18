import React from 'react'
import amazon from '../../../../assets/icons/amazon.png'
import commerce from '../../../../assets/icons/commerce.png'
import meundies from '../../../../assets/icons/meundies.png'
import sitepoint from '../../../../assets/icons/sitepoint.png'
import slack from '../../../../assets/icons/slack.png'
import star from '../../../../assets/icons/star.png'
import logo from '../../../../assets/images/logo2.png'
import './styles.scss'

HeaderClient.propTypes = {}

function HeaderClient() {
  return (
    <div className="header__client">
      <div className="container">
        <div className="header__client--info">
          <div className="header__client--title">
            <img src={logo} alt="" className="header-logo" />
            <p>More than 45,000+ companies trust besnik</p>
          </div>
          <div className="header__client--evaluate">
            <div className="header__star">
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
              <span>
                <img src={star} alt="" />
              </span>
            </div>
            <p>5 Star Ratings (2k+ Review)</p>
          </div>
        </div>
        <div className="header__client--logo">
          <div className="header__logo--item">
            <a href="https://www.meundies.com/">
              <img src={meundies} alt="" />
            </a>
          </div>
          <div className="header__logo--item">
            <a href="https://slack.com/intl/fr-vn/">
              <img src={slack} alt="" />
            </a>
          </div>
          <div className="header__logo--item">
            <a href="https://www.amazon.com/">
              <img src={amazon} alt="" />
            </a>
          </div>
          <div className="header__logo--item">
            <a href="https://woocommerce.com/?aff=17277">
              <img src={commerce} alt="" />
            </a>
          </div>
          <div className="header__logo--item">
            <a href="https://www.sitepoint.com/">
              <img src={sitepoint} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderClient
